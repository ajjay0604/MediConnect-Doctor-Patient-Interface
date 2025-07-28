# MediConnect Interface – Diabetes Monitoring Web Portal

## 🧩 Project Overview

**MediConnect Interface** is a web-based application designed to simplify and streamline the management of diabetes data for both **patients** and **doctors**. This interface offers secure login, dynamic dashboards, glucose data visualization, and real-time interaction features. The goal is to empower patients to track their health and doctors to monitor and assist multiple patients from a centralized dashboard.

This repository contains only the **React-based interface** for the MediConnect system.

---

## ✨ Key Features

### Home Page

<img width="1574" height="1784" alt="image" src="https://github.com/user-attachments/assets/f6a2ab58-74bc-45e1-9c8e-16be569727fe" />

### 👤 Patient Dashboard

<img width="1222" height="1696" alt="image" src="https://github.com/user-attachments/assets/7687cbb8-7bdb-4b61-ace6-3abacfa684f8" />

- View personal information
- Track recent glucose readings
- Visualize blood sugar trends using charts
- Generate simulated glucose data for testing

### 🩺 Doctor Dashboard
- View all registered patients
  
  <img width="1690" height="678" alt="image" src="https://github.com/user-attachments/assets/22e840c0-5399-451c-85fe-2f70ed538c9d" />

- Click on any patient to view detailed reports
  
  <img width="1610" height="1716" alt="image" src="https://github.com/user-attachments/assets/bb514c1b-888c-4e4f-85e9-ec2211c551c3" />

- Track real-time glucose history and trends
- Refresh data on-demand
- Secure logout functionality

### 🔐 Authentication
- Separate login portals for **Patients** and **Doctors**

  Patient's Login Portal :

  <img width="1570" height="708" alt="image" src="https://github.com/user-attachments/assets/be540904-e2b6-4605-92d6-a83edd9156ae" />
  
  Doctor's Login Portal :

  <img width="1568" height="724" alt="image" src="https://github.com/user-attachments/assets/a491d1e0-720e-4f55-acca-1f1ca268dbd5" />

- Secure session-based access

---

## 🛠️ Tech Stack

- **Frontend:** React.js, HTML, CSS
- **Charts:** Chart.js
- **Data Access:** AWS DynamoDB (via AWS SDK)
- **Routing:** React Router
- **State Management:** React Hooks

---

## 🔧 Getting Started

### Prerequisites

- Node.js and npm installed
- AWS credentials set up (if you're using live DynamoDB data)

### Installation

```bash
git clone https://github.com/yourusername/mediconnect-interface.git
cd mediconnect-interface
npm install
npm start
