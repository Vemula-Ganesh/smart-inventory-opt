# Smart Inventory Optimization (ABC Classification ML System)

This is a full-stack web application built using Express.js (Node.js) and MongoDB. It implements an inventory management system based on ABC classification, allowing users to manage SKUs, analyze classification metrics from various Machine Learning models, and run test predictions.

[![Deploy to Render](https://render.com/images/deploy-to-render-button.svg)](https://render.com/deploy?repo=https://github.com/Vemula-Ganesh/smart-inventory-opt)

## Tech Stack
- **Backend:** Node.js, Express.js
- **Database:** MongoDB Atlas (Cloud)
- **Authentication:** express-session, bcrypt
- **Frontend:** EJS Templating, Bootstrap 5, Chart.js

## Features
- User Registration & Login (Session-based, encrypted passwords).
- Dashboard with dynamic inventory summary widgets and distribution charts.
- Full CRUD capabilities for Inventory SKUs with multi-attribute management (Cost, Lead Time, Demand Fluctuation, etc.).
- Machine Learning predictor simulator (simulating model accuracies: Random Forest 93%, Decision Tree 87%, SVM 40%, etc.).
- Performance analytics page demonstrating data sourced from ML models on an accuracy matrix.

## Setup and Run Instructions

### 1. Requirements
Ensure you have the following installed:
- [Node.js](https://nodejs.org/en/) (v14 or higher)
- [MongoDB Community Server](https://www.mongodb.com/try/download/community) running locally (or obtain a MongoDB Atlas URI string).

### 2. Configure Environment
Create a `.env` file in the root directory (you can rename `.env.example`).
```bash
cp .env.example .env
```
Ensure your `.env` contains:
```env
PORT=3000
MONGODB_URI=mongodb://127.0.0.1:27017/smart-inventory
SESSION_SECRET=your_super_secret_session_key
```

*(Note: Change the MongoDB URI if relying on a remote cluster).*

### 3. Install NPM Dependencies
Open your terminal in the root project folder and run:
```bash
npm install
```

### 4. Run the Application
Finally, start the server:
```bash
npm start
# or 
node index.js
```

You should see:
```text
MongoDB Connected
Server started on http://localhost:3000
```

Navigate to [http://localhost:3000](http://localhost:3000) to register and begin using the tool!
