import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const DoctorLogin = () => {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    sessionStorage.setItem('doctor', username);
    navigate('/doctor-dashboard');
  };

  return (
    <div className="login-container">
      <h2>Doctor Login</h2>
      <input
        type="text"
        placeholder="Enter Doctor ID"
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default DoctorLogin;
