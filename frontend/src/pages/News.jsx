import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import LoadingSpinner from "../components/LoadingSpinner";
import { useTranslation } from "react-i18next";
function News() {
  const {t} = useTranslation()
  const [latestNews, setLatestNews] = useState(null);
  const [latestThreeNews, setLatestThreeNews] = useState(null);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState({ author: '', content: '' });



  useEffect(() => {
    // Fetch the latest news article
    axios.get('http://localhost:5000/api/news/latest')
      .then(response => {
        if (response.data.length > 0) {
          setLatestNews(response.data[0]); // Set the first item if array
        }
      })  
      .catch(error => {
        console.error('Error fetching latest news:', error);
      });

    // Fetch the three latest news articles
    axios.get('http://localhost:5000/api/news/latestthree')
      .then(response => {
        if (response.data.length > 0) {
          setLatestThreeNews(response.data); // Set the latest three news
        }
      })
      .catch(error => {
        console.error('Error fetching latest three news:', error);
      });
  }, []);

  useEffect(() => {
    if (latestNews) {
      // Fetch comments for the selected news article
      axios.get(`http://localhost:5000/api/news/${latestNews.id}/comments`)
        .then(response => {
          setComments(response.data);
        })
        .catch(error => {
          console.error('Error fetching comments:', error);
        });
    }
  }, [latestNews]); // Dependency array includes latestNews

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    axios.post(`http://localhost:5000/api/news/${latestNews.id}/comments`, newComment)
      .then(response => {
        setComments([...comments, { ...newComment, comment_date: new Date().toISOString() }]);
        setNewComment({ author: '', content: '' });
      })
      .catch(error => {
        console.error('Error adding comment:', error);
      });
  };

  if (!latestNews) return <LoadingSpinner />;

  const displayedNews = (latestThreeNews && Array.isArray(latestThreeNews)) ? latestThreeNews.slice(0, 3) : [];


  
  const handleRecentPostClick = (news) => {
    setLatestNews(news);
    
  };
  return (
    <>
      <Navbar />
      <div id="banner-area" className="banner-area" style={{ backgroundImage: "url(./assets/images/banner/banner1.jpg)" }}>
        <div className="banner-text">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="banner-heading">
                  <h1 className="banner-title">News</h1>
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb justify-content-center">
                      <li className="breadcrumb-item">
                        <a href="/home">Home</a>
                      </li>
                      <li className="breadcrumb-item">
                        <a href="/news">News</a>
                      </li>
                      <li className="breadcrumb-item active" aria-current="page">
                        News 
                      </li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section id="main-container" className="main-container">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mb-5 mb-lg-0">
              <div className="post-content post-single">
                <div className="post-media post-image">
                  <img loading="lazy" src={`http://localhost:5000/${latestNews.image_url}`} className="img-fluid" alt="post-image" />
                </div>
                <div className="post-body">
                  <div className="entry-header">
                    <div className="post-meta">
                      <span className="post-author">
                        <i className="far fa-user" />
                        <a href="#"> Admin</a>
                      </span>
                      <span className="post-cat">
                        <i className="far fa-folder-open" />
                        <a href="#"> News</a>
                      </span>
                      <span className="post-meta-date">
                        <i className="far fa-calendar" /> {new Date(latestNews.news_date).toLocaleDateString()}
                      </span>
                      <span className="post-comment">
                        <i className="far fa-comment" /> {comments.length}
                        <a href="#" className="comments-link"> Comments</a>
                      </span>
                    </div>
                    <h2 className="entry-title">{latestNews.title}</h2>
                  </div>
                  <div className="entry-content">
                    <p>{latestNews.content}</p>
                    <blockquote>
                      <p>{latestNews.quote}<cite>- {latestNews.quote_source}</cite></p>
                    </blockquote>
                    <p>{latestNews.additional_content}</p>
                  </div>
                  <div className="tags-area d-flex align-items-center justify-content-between">
                    <div className="post-tags">
                      <a href="#">Construction</a>
                      <a href="#">Safety</a>
                      <a href="#">Planning</a>
                    </div>
                    <div className="share-items">
                      <ul className="post-social-icons list-unstyled">
                        <li className="social-icons-head">Share:</li>
                        <li><a href="#"><i className="fab fa-facebook-f" /></a></li>
                        <li><a href="#"><i className="fab fa-twitter" /></a></li>
                        <li><a href="#"><i className="fab fa-google-plus" /></a></li>
                        <li><a href="#"><i className="fab fa-linkedin" /></a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div id="comments" className="comments-area">
                <h3 className="comments-heading">{comments.length} {t("News.Comments")}</h3>
                <ul className="comments-list">
                  {comments.map((comment, index) => (
                    <li key={index}>
                      <div className="comment d-flex">
                        <img loading="lazy" className="comment-avatar" alt="author" src="./assets/images/news/avator1.png" />
                        <div className="comment-body">
                          <div className="meta-data">
                            <span className="comment-author mr-3">{comment.author}</span>
                            <span className="comment-date float-right">
                              {new Date(comment.comment_date).toLocaleDateString()}
                            </span>
                          </div>
                          <div className="comment-content">
                            <p>{comment.content}</p>
                          </div>
                          
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="comments-form border-box">
             
                <h3 className="title-normal">{t("News.addComment")}</h3>
                <form id="comment-form" onSubmit={handleCommentSubmit}>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="name">{t("News.name")} *</label>
                        <input type="text" className="form-control" name="name" id="name" placeholder="Your Name" required value={newComment.author} onChange={(e) => setNewComment({ ...newComment, author: e.target.value })} />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <label htmlFor="comment">{t("News.yourComment")}</label>
                        <textarea className="form-control required-field" id="comment" placeholder="Your Comment" rows={10} required value={newComment.content} onChange={(e) => setNewComment({ ...newComment, content: e.target.value })} />
                      </div>
                    </div>
                  </div>
                  <div className="clearfix">
                    <button className="btn btn-primary" type="submit">{t("News.postComment")}</button>
                  </div>
                </form>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="sidebar sidebar-right">
                <div className="widget recent-posts">
                  <h3 className="widget-title">{t("News.latestPosts")}</h3>
                  <ul className="list-unstyled">
                    {displayedNews.map((news, index) => (
                      <li key={index} className="d-flex align-items-center">
                        <div className="posts-thumb">
                          <a href="#"><img loading="lazy" alt="img" src={`http://localhost:5000/${news.image_url}`} /></a>
                        </div>
                        <div className="post-info">
                          <h4 className="entry-title">
                            {/* <a href={`/news/${news.id}`}>{news.title}</a> */}
                            <a href="" onClick={(e) => { e.preventDefault(); handleRecentPostClick(news); }}>{news.title}</a>
                          </h4>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              
                
                <div className="widget widget-tags">
                  <h3 className="widget-title">Tags </h3>
                  <ul className="list-unstyled">
                    <li><a href="#">Construction</a></li>
                    <li><a href="#">Design</a></li>
                    <li><a href="#">Project</a></li>
                    <li><a href="#">Building</a></li>
                    <li><a href="#">Safety</a></li>
                    <li><a href="#">Planning</a></li>
                    <li><a href="#">Renovation</a></li>
                    <li><a href="#">Structure</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default News;
