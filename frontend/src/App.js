import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import NoPage from './pages/NoPage';
import About from './pages/About';
import Projects from './pages/Projects';
import Services from './pages/Services';
import Faq from './pages/Faq';
import Pricing from './pages/Pricing';
import News from './pages/News';
import Login from './pages/login/Login';
import AdminDashboard from './pages/login/AdminDashboard';
import ContactMsg from './pages/login/ContactMsg';
import NewsAdmin from './pages/login/NewsAdmin';
import PrivateRoute from './pages/PrivateRoute';

import './i18n.js';
import ProjectsAdmin from './pages/login/ProjectsAdmin';
import Analytics from './components/Analytics';





function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/services" element={<Services />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/news" element={<News />} />
        <Route path="/news/:id/comments" element={<News />} />
        <Route path="/login" element={<Login />} />
        
        {/* Protecting the dashboard routes */}
        <Route path="/admindashboard" element={<PrivateRoute element={AdminDashboard} />} />
        <Route path="/contactmsg" element={<PrivateRoute element={ContactMsg} />} />
        <Route path="/newsadmin" element={<PrivateRoute element={NewsAdmin} />} />
        <Route path="/projectsadmin" element={<PrivateRoute element={ProjectsAdmin} />} />
        <Route path="/analytics" element={<PrivateRoute element={Analytics} />} />
        
        <Route path="*" element={<NoPage />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
