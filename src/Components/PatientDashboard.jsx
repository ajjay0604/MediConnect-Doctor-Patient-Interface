import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import './PatientDashboard.css';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const PatientDashboard = () => {
  const [glucoseHistory, setGlucoseHistory] = useState([]);

  const generateRandomGlucose = () => {
    const data = [];
    for (let i = 0; i < 10; i++) {
      const reading = {
        glucoseLevel: Math.floor(Math.random() * 30) + 100,
        timestamp: new Date().toISOString()
      };
      data.push(reading);
    }
    setGlucoseHistory(data);
  };

  useEffect(() => {
    generateRandomGlucose();
  }, []);

  const chartData = {
    labels: glucoseHistory.map((entry) => entry.timestamp),
    datasets: [{
      label: 'Glucose Level (mg/dL)',
      data: glucoseHistory.map((entry) => entry.glucoseLevel),
      borderColor: 'rgba(75, 192, 192, 1)',
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      tension: 0.3,
    }],
  };

  return (
    <div className="dashboard">
      <h2>Patient Dashboard</h2>
      <button onClick={generateRandomGlucose}>Regenerate Readings</button>
      <Line data={chartData} />
      <ul>
        {glucoseHistory.map((entry, index) => (
          <li key={index}>
            {entry.glucoseLevel} mg/dL at {new Date(entry.timestamp).toLocaleString()}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PatientDashboard;
