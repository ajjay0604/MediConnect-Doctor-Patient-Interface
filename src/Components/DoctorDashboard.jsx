import React, { useState } from 'react';
import './DoctorDashboard.css';

const samplePatients = [
  {
    username: 'john',
    patientName: 'John Doe',
    phone: '1234567890',
    address: 'Village A',
    glucoseHistory: [
      { glucoseLevel: 115, timestamp: new Date().toISOString() },
      { glucoseLevel: 128, timestamp: new Date().toISOString() },
    ],
  },
  {
    username: 'jane',
    patientName: 'Jane Smith',
    phone: '0987654321',
    address: 'Village B',
    glucoseHistory: [
      { glucoseLevel: 122, timestamp: new Date().toISOString() },
      { glucoseLevel: 130, timestamp: new Date().toISOString() },
    ],
  },
];

const DoctorDashboard = () => {
  const [selectedPatient, setSelectedPatient] = useState(null);

  return (
    <div className="dashboard">
      <h2>Doctor Dashboard</h2>
      <ul>
        {samplePatients.map((patient) => (
          <li key={patient.username} onClick={() => setSelectedPatient(patient)}>
            {patient.patientName}
          </li>
        ))}
      </ul>

      {selectedPatient && (
        <div className="report">
          <h3>{selectedPatient.patientName}'s Report</h3>
          <p>Phone: {selectedPatient.phone}</p>
          <p>Address: {selectedPatient.address}</p>
          <h4>Recent Glucose Readings:</h4>
          <ul>
            {selectedPatient.glucoseHistory.map((entry, index) => (
              <li key={index}>
                {entry.glucoseLevel} mg/dL at {new Date(entry.timestamp).toLocaleString()}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default DoctorDashboard;
