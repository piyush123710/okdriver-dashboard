# 🚗 OkDriver Live Fleet Monitoring Dashboard

## 📌 Project Overview

This project is a **simulated real-time fleet monitoring platform** that mimics a dashcam analytics dashboard used in modern fleet safety systems.
It demonstrates how driver events such as **speeding, harsh braking, and drowsiness alerts** can be ingested, processed, and visualized in real-time.

The system simulates **live dashcam event streams** and displays **analytics and alerts** through a real-time dashboard.

This project was built as part of the **OkDriver Full Stack Developer Technical Assignment**.

---

# 🎯 Features

### 1. Real-Time Event Streaming

* Generates dummy driver events every **2–3 seconds**
* Events include:

  * Speeding
  * Harsh braking
  * Drowsiness alerts

### 2. Live Dashboard

The dashboard updates **in real-time without page refresh** using WebSockets.

### 3. Analytics Metrics

The dashboard displays:

* Total Events
* Live Drivers
* Violation Count
* Risk Score

### 4. Violation Detection

If driver speed exceeds **80 km/h**, the dashboard highlights it as a **red alert**.

### 5. Dashcam Simulation

A **YouTube embedded video feed** simulates the dashcam camera.

### 6. Data Visualization

Charts display event analytics such as:

* Speeding
* Harsh Braking
* Drowsiness

### 7. Database Storage

All driver events are stored in a **MySQL database**.

---

# 🏗️ System Architecture

Frontend Dashboard (React)
│
│ WebSocket (Socket.io)
▼
Node.js + Express Backend
│
│ REST APIs
▼
MySQL Database
│
│
Dummy Event Generator
(Events every 2–3 seconds)

---

# 🛠️ Tech Stack

## Frontend

* React (Vite)
* Chart.js
* Socket.io Client
* CSS

## Backend

* Node.js
* Express.js
* Socket.io

## Database

* MySQL

## Environment Variables

* dotenv

---

# 📂 Project Structure

```
okdriver-dashboard
│
├── backend
│   │
│   ├── src
│   │   ├── config
│   │   │   └── db.js
│   │   │
│   │   ├── controllers
│   │   │   └── eventController.js
│   │   │
│   │   ├── routes
│   │   │   └── eventRoutes.js
│   │   │
│   │   ├── models
│   │   │   └── eventModel.js
│   │   │
│   │   ├── services
│   │   │   └── eventGenerator.js
│   │   │
│   │   ├── websocket
│   │   │   └── socket.js
│   │   │
│   │   └── server.js
│   │
│   └── .env
│
├── frontend
│   │
│   ├── src
│   │   ├── components
│   │   │   ├── Navbar.jsx
│   │   │   ├── StatsCards.jsx
│   │   │   ├── EventTable.jsx
│   │   │   ├── RiskChart.jsx
│   │   │   └── VideoFeed.jsx
│   │   │
│   │   ├── pages
│   │   │   └── Dashboard.jsx
│   │   │
│   │   ├── services
│   │   │   └── socket.js
│   │   │
│   │   ├── styles
│   │   │   └── dashboard.css
│   │   │
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   │
│   └── .env
│
└── README.md
```

---

# ⚙️ Installation & Setup

## 1️⃣ Clone Repository

```
git clone https://github.com/yourusername/okdriver-dashboard.git
cd okdriver-dashboard
```

---

# 2️⃣ Backend Setup

```
cd backend
npm install
```

Create `.env`

```
PORT=5000

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=okdriver

FRONTEND_URL=http://localhost:5173
```

Start backend:

```
node src/server.js
```

---

# 3️⃣ Database Setup

Create database:

```
CREATE DATABASE okdriver;
```

Create table:

```
CREATE TABLE driver_events (
id INT AUTO_INCREMENT PRIMARY KEY,
driver_id VARCHAR(50),
event_type VARCHAR(50),
speed INT,
timestamp DATETIME DEFAULT CURRENT_TIMESTAMP
);
```

---

# 4️⃣ Frontend Setup

```
cd frontend
npm install
```

Create `.env`

```
VITE_BACKEND_URL=http://localhost:5000
```

Run frontend:

```
npm run dev
```

Open browser:

```
http://localhost:5173
```

---

# 📊 Example Dashboard Output

Dashboard displays:

* Live fleet analytics
* Driver violation alerts
* Risk score updates
* Dashcam video feed
* Real-time event table

---

# 🚨 Alert Logic

Speeding Alert:

```
If speed > 80 km/h
→ Display red alert row
```

Risk Score:

```
Risk Score = Violations × 10
```

---

# 📡 API Endpoints

### Create Event

```
POST /api/event
```

### Get Events

```
GET /api/events
```

---

# 🔄 Real-Time Communication

WebSocket events:

```
newEvent
```

Triggered when a new driver event is generated.

---

# 🎥 Demo Video

Include a demo video link here showing:

* Dashboard functionality
* Real-time updates
* Alert system

---

# 📧 Submission

Submit the following to:

```
experts@okdriver.in
```

Include:

* GitHub Repository
* Demo Video
* Architecture Explanation
* Resume

Subject Line:

```
Application for Full Stack Developer – OkDriver Assignment
```

---

# 👨‍💻 Author

**Piyush Kumar**

Full Stack Developer
Skills: React, Node.js, Express.js, MySQL, JavaScript

---
