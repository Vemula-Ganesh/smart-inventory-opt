# Smart Inventory Optimization (ABC Classification ML System)

This is a full-stack web application built using Express.js (Node.js) and MongoDB. It implements an inventory management system based on ABC classification, allowing users to manage SKUs, analyze classification metrics from various Machine Learning models, and run test predictions.

## Tech Stack
- **Backend:** Node.js, Express.js
- **Database:** MongoDB, Mongoose ODM
- **Authentication:** express-session, bcrypt
- **Frontend:** EJS Templating, Bootstrap 5, Chart.js

## Features
- User Registration & Login (Session-based, encrypted passwords).
- Dashboard with dynamic inventory summary widgets and distribution charts.
- Full CRUD capabilities for Inventory SKUs with multi-attribute management (Cost, Lead Time, Demand Fluctuation, etc.).
- Machine Learning predictor simulator (simulating model accuracies: Random Forest 93%, Decision Tree 87%, SVM 40%, etc.).
- Performance analytics page demonstrating data sourced from ML models on an accuracy matrix.

## GitHub Upload Instructions

If you wish to upload this to GitHub, run these commands in your terminal from the project folder:

```bash
# 1. Initialize Git repository
git init

# 2. Add all files to staging, respecting .gitignore
git add .

# 3. Commit your changes
git commit -m "Initial commit for Smart Inventory Opt App"

# 4. Create a new repository on GitHub. Then, run the following replacing 
# <YOUR_USERNAME> and <REPO_NAME> with your actual details:
git branch -M main
git remote add origin https://github.com/<YOUR_USERNAME>/<REPO_NAME>.git
git push -u origin main
```

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
