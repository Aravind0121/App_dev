import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './SignUp1.css';
import { FaFacebook, FaGoogle } from 'react-icons/fa';

const Login = () => {
  const navigate = useNavigate();
  const [signupDetails, setSignupDetails] = useState({
    name: '',
    email: '',
    password: ''
  });

  const checkUserExists = async (name) => {
    try {
      const response = await axios.get('http://localhost:8080/info');
      return response.data.some(gemine => gemine.name === name);
    } catch (error) {
      console.error('Error fetching users:', error);
      return false;
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    if (await checkUserExists(signupDetails.name)) {
      alert('User already exists. Redirecting to login...');
      navigate('/');
      return;
    }

    try {
      await axios.post('http://localhost:8080/insert', signupDetails);
      alert('Signup successful');
      navigate('/login');
    } catch (error) {
      console.error('Signup error:', error);
    }
  };

  const handleInputChange = (e) => {
    setSignupDetails({ ...signupDetails, [e.target.name]: e.target.value });
  };

  const handleSocialLogin = (provider) => {
    console.log(`Logging in with ${provider}`);
  };

  return (
    <div className="login-container">
      <div className="form-container">
        <h2>Welcome Back!</h2>
        <form onSubmit={handleSignup}>
          <label>Username:</label>
          <input
            type="text"
            name="name"
            value={signupDetails.name}
            onChange={handleInputChange}
            required
          />

          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={signupDetails.email}
            onChange={handleInputChange}
            required
          />

          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={signupDetails.password}
            onChange={handleInputChange}
            required
          />

          <button type="submit">Sign Up</button>
        </form>

        <h4>Or</h4>
        <div className="social-login">
          <a href="https://www.facebook.com" className="facebook-btn" onClick={() => handleSocialLogin('Facebook')}>
            <FaFacebook className="social-icon" /> Sign Up with Facebook
          </a>
          <a href="https://www.google.com" className="google-btn" onClick={() => handleSocialLogin('Google')}>
            <FaGoogle className="social-icon" /> Sign In with Google
          </a>
        </div>
        <div className="signup-link">
          <p>Already have an account? <a href="/signup">Sign In</a></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
