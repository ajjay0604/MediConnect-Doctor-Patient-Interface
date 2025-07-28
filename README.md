# MediConnect Interface – Diabetes Monitoring Web Portal

## 🧩 Project Overview

**MediConnect Interface** is a web-based application designed to simplify and streamline the management of diabetes data for both **patients** and **doctors**. This interface offers secure login, dynamic dashboards, glucose data visualization, and real-time interaction features. The goal is to empower patients to track their health and doctors to monitor and assist multiple patients from a centralized dashboard.

This repository contains only the **React-based interface** for the MediConnect system.

---

## ✨ Key Features

### Home Page

<img width="1574" height="1784" alt="image" src="https://github.com/user-attachments/assets/783c0b76-66f7-4aa5-a7a1-2fc16b551be8" />


### 👤 Patient Dashboard

<img width="1278" height="1780" alt="image" src="https://github.com/user-attachments/assets/b6ec7442-9d73-414c-aea1-be4340bbac8b" />

- View personal information
- Track recent glucose readings
- Visualize blood sugar trends using charts
- Generate simulated glucose data for testing

### 🩺 Doctor Dashboard
- View all registered patients
  
  <img width="1690" height="678" alt="image" src="https://github.com/user-attachments/assets/893f8c23-ee8a-4312-baec-549e5603e1f9" />

- Click on any patient to view detailed reports
  
  <img width="1610" height="1716" alt="image" src="https://github.com/user-attachments/assets/30dbe19c-a0c2-43cc-be8b-d628fbb2c12f" />

- Track real-time glucose history and trends
- Refresh data on-demand
- Secure logout functionality

### 🔐 Authentication
- Separate login portals for **Patients** and **Doctors**

  Patient's Login Portal :

  <img width="1570" height="708" alt="image" src="https://github.com/user-attachments/assets/1c6308a9-6818-4d49-9170-587c584d17e1" />
  
  Doctor's Login Portal :

  <img width="1568" height="724" alt="image" src="https://github.com/user-attachments/assets/0a7cb021-b892-4365-8c58-3415340e870a" />

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
