import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from './Sidebar';

const ProjectsAdmin = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  
  
  const [image, setImage] = useState(null);
  const [Projects, setProjects] = useState([]);
  const [editingProjects, setEditingProjects] = useState(null);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = () => {
    axios.get('http://localhost:5000/api/projects')
      .then(response => {
        setProjects(response.data);
      })
      .catch(error => {
        console.error('Error fetching Projects:', error);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('title', title);
    formData.append('content', content);
    if (image) formData.append('image', image);

    const url = editingProjects ? `http://localhost:5000/api/projects/${editingProjects.id}` : 'http://localhost:5000/api/projects';
    const method = editingProjects ? 'put' : 'post';

    axios({ method, url, data: formData })
      .then(() => {
        fetchProjects(); // Refresh Projects list
        setEditingProjects(null); // Clear form after save
        setTitle(''); // Reset state
        setContent(''); // Reset state
        setImage(null); // Reset state
      })
      .catch(error => {
        console.error('Error saving Projects article:', error);
      });
  };

  const handleDelete = (id) => {
    axios.delete(`http://localhost:5000/api/projects/${id}`)
      .then(() => {
        setProjects(Projects.filter(item => item.id !== id));
      })
      .catch(error => {
        console.error('Error deleting Projects:', error);
      });
  };

  const handleEdit = (ProjectsItem) => {
    setEditingProjects(ProjectsItem);
    setTitle(ProjectsItem.title);
    setContent(ProjectsItem.content);
    setImage(null); // Reset image since we're not editing it
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <Sidebar />
      <div className="content-admin" id="content-admin">
        <h2 style={{ textAlign: 'center' }}>{editingProjects ? 'Edit Projects Article' : 'Add Projects Article'}</h2>
        <form onSubmit={handleSubmit} className="custom-form">
          <div className="custom-form-group">
            <label className="custom-label">Title:</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className="custom-input"
            />
          </div>
          <div className="custom-form-group">
            <label className="custom-label">Content:</label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
              className="custom-textarea"
            />
          </div>
         
          <div className="custom-form-group">
            <label className="custom-label">Image:</label>
            <input
              type="file"
              onChange={(e) => setImage(e.target.files[0])}
              className="custom-file-input1"
            />
          </div>
          <button type="submit" className="custom-button">Save</button>
        </form>
{/* ############################################################################# */}

        <div className="news-container">
          <h2 className='news-heading'>Projects Articles</h2>
          <div className="news-list">
            {Projects.map(item => (
              <div key={item.id} className="news-card">
                {item.image_url && <img src={`http://localhost:5000/${item.image_url}`} alt={item.title} className="news-image" />}
                
                <h2 className="news-title">
                {item.title}
                </h2>
                <div className="news-content">
                <p>{item.content}</p>
                
                </div>
                <div className='news-actions'>

                <button onClick={() => handleEdit(item)} className="news-button">Edit</button>
                <button onClick={() => handleDelete(item.id)} className="news-button">Delete</button>
                </div>
                <hr />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectsAdmin;
