import './css/login.css';
import React, { useState } from 'react';
import axios from 'axios'; // Import Axios
import { useNavigate } from 'react-router-dom'; 

const Login = () => {

  // State variables for username, password, and error message
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // Initialize useNavigate hook for navigation
  const navigate = useNavigate();

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setErrorMessage('');
      const response = await axios.post('http://localhost:5000/login', { username, password });
  
      if (response.status === 200) {
        console.log('Login successful:', response.data); // Debugging line
        localStorage.setItem('user', JSON.stringify(response.data));
        console.log('Stored in localStorage:', localStorage.getItem('user')); // Debugging line
        navigate('/admindashboard');
        setUsername('');
        setPassword('');
      }
    } catch (error) {
      console.error('Error:', error);
      setErrorMessage('Your Username and Password are incorrect.');
    }
  };
  

  return (
    <div className="container-login">
      <div className="screen">
        <div className="screen__content">
          <form className="login" onSubmit={handleSubmit}>
            <div className="login__field">
              <i className="login__icon fas fa-user" />
              <input
                type="text"
                value={username}
                id="username"
                onChange={(e) => setUsername(e.target.value)}
                className="login__input"
                placeholder="User name / Email"
                required
              />
            </div>
            <div className="login__field">
              <i className="login__icon fas fa-lock" />
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="login__input"
                placeholder="Password"
                required
              />
            </div>
            <button className="button login__submit" type="submit">
              <span className="button__text">Log In Now</span>
              <i className="button__icon fas fa-chevron-right" />
            </button>
            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>} {/* Display error message if exists */}
          </form>
          {/* <div className="social-login">
            <h3>log in via</h3>
            <div className="social-icons">
              <a href="#" className="social-login__icon fab fa-instagram" />
              <a href="#" className="social-login__icon fab fa-facebook" />
              <a href="#" className="social-login__icon fab fa-twitter" />
            </div>
          </div> */}
        </div>
        <div className="screen__background">
          <span className="screen__background__shape screen__background__shape4" />
          <span className="screen__background__shape screen__background__shape3" />
          <span className="screen__background__shape screen__background__shape2" />
          <span className="screen__background__shape screen__background__shape1" />
        </div>
      </div>
    </div>
  );
}

export default Login;
