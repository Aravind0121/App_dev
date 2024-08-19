// src/components/Login.js

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'; // Import axios
import './SignUp.css'; 
import { FaFacebook, FaGoogle } from 'react-icons/fa'; 

const Login = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.post('http://localhost:8080/login', {
        name: name,
        password: password
      });
  
      console.log('Response:', response); // Log response for debugging
  
      if (response.status === 200) {
        navigate('/');
      } else {
        alert('Invalid Username or password');
      }
  
    } catch (error) {
      console.error('Login error:', error);
      alert('An error occurred during login');
    }
  };
  

  const handleSocialLogin = (provider) => {
    console.log(`Logging in with ${provider}`);
  };

  return (
    <div className="login-container">
      <div className="form-container">
        <h2>Welcome Back!</h2>
        <form onSubmit={handleSubmit}>
          <label>Username:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Sign In</button>
          <h4 className='ss'>Or</h4>
          <div className="social-login">
            <a href="https://www.facebook.com/" className="facebook-btn" onClick={() => handleSocialLogin('Facebook')}>
              <FaFacebook className="social-icon" /> Sign In with Facebook
            </a>
            <a href="https://accounts.google.com/" className="google-btn" onClick={() => handleSocialLogin('Google')}>
              <FaGoogle className="social-icon" /> Sign In with Google
            </a>
          </div>
          <div className="signup-link">
            <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
