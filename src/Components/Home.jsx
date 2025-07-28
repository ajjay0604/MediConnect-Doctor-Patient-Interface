import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <nav className="navbar">
        <div className="navbar-left">
          <h1 className="app-name">MediConnect</h1>
        </div>
        <div className="navbar-right">
          <Link to="/patient-login">
            <button className="login-btn">Patient Login</button>
          </Link>
          <Link to="/doctor-login">
            <button className="login-btn">Doctor Login</button>
          </Link>
        </div>
      </nav>

      <div className="content">
        <h2>Welcome to MediConnect</h2>
        <p>Bringing healthcare closer to rural communities through technology.</p>
      </div>
    </div>
  );
};

export default Home;
