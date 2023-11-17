// JoinUs.js

import React, { useState } from 'react';
import './main.css';
import Header from '../components/Header';

const JoinUs = () => {
  const [restaurantName, setRestaurantName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!restaurantName || !email || !password || !confirmPassword) {
      alert('Please fill in all fields.');
      return;
    }

    // TODO: Submit the signup form to the server
  };

  return (
    <div><Header />
    <div className="joinus-container">
      <h1 className="heading">Boost your reputation with CIT Eats!</h1>
      <p className="paragraph">Sign up now and start gaining new customers to boost your restaurant growth.</p>
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="restaurantName"
          className="input"
          placeholder="Restaurant Name"
          value={restaurantName}
          onChange={(e) => setRestaurantName(e.target.value)}
        />
        <input
          type="email"
          name="email"
          className="input"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          name="password"
          className="input"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          name="confirmPassword"
          className="input"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <button type="submit" className="signup-button">SIGN UP</button>
      </form>
      
    </div>
    </div>
  );
  
};

export default JoinUs;
