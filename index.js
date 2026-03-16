require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const methodOverride = require('method-override');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// View Engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, 'public')));

// Session
app.use(session({
  secret: process.env.SESSION_SECRET || 'dev_secret',
  resave: false,
  saveUninitialized: false,
}));

// Route Middlewares
app.use('/', require('./routes/auth'));
app.use('/', require('./routes/index'));
app.use('/inventory', require('./routes/inventory'));
app.use('/', require('./routes/ml'));

// 404 handler
app.use((req, res) => {
  res.status(404).render('404');
});

// Start Server
app.listen(PORT, () => console.log(`Server started on http://localhost:${PORT}`));
