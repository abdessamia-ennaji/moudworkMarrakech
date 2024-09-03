import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import axios from 'axios';

import './css/admin.css';

const AdminDashboard = () => {
  const [countMessage, setCountMessage] = useState(0);
  const [countVisit, setCountVisit] = useState(0);
  const [countNews, setCountNews] = useState(0);
  const [countProjects, setCountProjects] = useState(0);

  useEffect(()=>{
    axios.get('http://localhost:5000/messages/count')
      .then(response => {
        setCountMessage(response.data.total_messages);
        
      })
      .catch(error => {
        console.error('Error fetching message count:', error);
        
      });

      axios.get('http://localhost:5000/api/analytic/get-visits')
      .then(response => {
        setCountVisit(response.data);
        
      })
      .catch(error => {
        console.error('Error fetching message count:', error);
        
      });

      axios.get('http://localhost:5000/api/news')
      .then(response => {
        setCountNews(response.data);
        
      })
      .catch(error => {
        console.error('Error fetching message count:', error);
        
      });

      axios.get('http://localhost:5000/api/projects')
      .then(response => {
        setCountProjects(response.data);
        
      })
      .catch(error => {
        console.error('Error fetching message count:', error);
        
      });
  }, [])
  
  return (
    <>
      <div className='content-admin'>
        <Sidebar />
        <div className="admin-content">
          <div className="cards-grid">
            <a href="/analytics">
            <div className="dashboard-card">
              <div className="card-header">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Icon_Stats_color.svg/1024px-Icon_Stats_color.svg.png" alt="icon" />
                <span>Analyse :</span>
              </div>
              <div className="card-number">Nᵒ Visits :{countVisit.length}</div>
            </div>
            </a>
            <a href="/contactmsg">
            <div className="dashboard-card">
              <div className="card-header">
                <img src="https://flaticons.net/icon.php?slug_category=mobile-application&slug_icon=message" alt="icon" />
                <span>Messages :</span>
              </div>
              <div className="card-number">Nᵒ Messages : {countMessage}</div>
            </div>
            </a>
            <a href="/newsadmin">
            <div className="dashboard-card">
              <div className="card-header">
                <img src="https://cdn-icons-png.flaticon.com/512/1295/1295674.png" alt="icon" />
                <span>News :</span>
              </div>
              <div className="card-number">Nᵒ NEWS : {countNews.length}</div>
            </div>
            </a>
            <a href="/projectsadmin">
            <div className="dashboard-card">
              <div className="card-header">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Plan_icon_WHITE-01.svg/1200px-Plan_icon_WHITE-01.svg.png" alt="icon" />
                <span>Projects</span>
              </div>
              <div className="card-number">Nᵒ PROJECTS : {countProjects.length}</div>
            </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminDashboard;
