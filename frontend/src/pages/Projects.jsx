import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const filterOptions = [
  { id: 'all', value: 'all', label: 'Show All' },
  { id: 'commercial', value: 'commercial', label: 'Commercial' },
  { id: 'education', value: 'education', label: 'Education' },
  { id: 'government', value: 'government', label: 'Government' },
  { id: 'infrastructure', value: 'infrastructure', label: 'Infrastructure' },
  { id: 'residential', value: 'residential', label: 'Residential' },
  { id: 'healthcare', value: 'healthcare', label: 'Healthcare' }
];

function Projects() {
  const [latestProjects, setLatestProjects] = useState(null);
  const [latestThreeProjects, setLatestThreeProjects] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [shuffleInstance, setShuffleInstance] = useState(null);

  useEffect(() => {
    // Fetch the latest project
    axios.get('http://localhost:5000/api/projects/latest')
      .then(response => {
        if (response.data.length > 0) {
          setLatestProjects(response.data[0]);
        }
      })
      .catch(error => {
        console.error('Error fetching latest project:', error);
      });

    // Fetch the three latest projects
    axios.get('http://localhost:5000/api/projects/latestthree')
      .then(response => {
        if (response.data.length > 0) {
          setLatestThreeProjects(response.data);
        }
      })
      .catch(error => {
        console.error('Error fetching latest three projects:', error);
      });
  }, []);

  useEffect(() => {
    const shuffleWrapper = document.querySelector('.shuffle-wrapper');

    if (window.Shuffle && shuffleWrapper) {
      const shuffle = new window.Shuffle(shuffleWrapper, {
        itemSelector: '.shuffle-item',
        sizer: '.shuffle-sizer',
      });
      setShuffleInstance(shuffle);
    } else {
      console.error('Shuffle.js is not loaded or the shuffle-wrapper element does not exist');
    }
  }, [latestThreeProjects]);

  useEffect(() => {
    if (shuffleInstance) {
      if (selectedFilter === 'all') {
        shuffleInstance.filter();
      } else {
        shuffleInstance.filter(element => {
          const title = element.getAttribute('data-title');
          return title ? title.includes(selectedFilter) : false;
        });
      }
    }
  }, [selectedFilter, shuffleInstance]);

  const handleFilterChange = (event) => {
    setSelectedFilter(event.target.value);
  };

  const filteredProjects = selectedFilter === 'all'
    ? latestThreeProjects
    : latestThreeProjects.filter(project => project.title === selectedFilter);

  if (!latestProjects || latestThreeProjects.length === 0) {
    return <div>Error loading projects. Please try again later.</div>;
  }

  return (
    <>
      <Navbar />
      <div id="banner-area" className="banner-area" style={{ backgroundImage: "url(./assets/images/banner/banner1.jpg)" }}>
        <div className="banner-text">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="banner-heading">
                  <h1 className="banner-title">Projects</h1>
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb justify-content-center">
                      <li className="breadcrumb-item"><a href="/home">Home</a></li>
                      <li className="breadcrumb-item"><a href="/projects">Projects</a></li>
                      <li className="breadcrumb-item active" aria-current="page">All Projects</li>
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
            <div className="col-12">
              <div className="shuffle-btn-group">
                {filterOptions.map(option => (
                  <label key={option.id} htmlFor={option.id} cla>
                    <input 
                      type="radio" 
                      name="shuffle-filter" 
                      id={option.id} 
                      value={option.value} 
                      checked={selectedFilter === option.value} 
                      onChange={handleFilterChange} 
                    />
                    {option.label}
                  </label>
                ))}
              </div>

              <div className="row shuffle-wrapper">
                <div className="col-1 shuffle-sizer" />
                {filteredProjects.map(project => (
                  <div className="col-lg-4 col-md-6 shuffle-item" key={project.id} data-title={project.title}>
                    <div className="project-img-container">
                      <a className="gallery-popup" href={`http://localhost:5000/${project.image_url}`}>
                        <img className="img-fluid" src={`http://localhost:5000/${project.image_url}`} alt={project.title} />
                        <span className="gallery-icon">
                          <i className="fa fa-plus" />
                        </span>
                      </a>
                      <div className="project-item-info">
                        <div className="project-item-info-content">
                          <h3 className="project-item-title">
                            <a href="#">{project.title}</a>
                          </h3>
                          <p className="project-cat">{project.content}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Projects;
