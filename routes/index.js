const express = require('express');
const router = express.Router();
const Inventory = require('../models/Inventory');
const { isAuthenticated } = require('../middleware/auth');

router.use(isAuthenticated);

// Dashboard Homepage
router.get('/dashboard', async (req, res) => {
  try {
    const items = await Inventory.find({ user: req.session.userId });
    
    // Summary Cards Calculations
    const totalSKUs = items.length;
    const countA = items.filter(item => item.ABC_Classification === 'A').length;
    const countB = items.filter(item => item.ABC_Classification === 'B').length;
    const countC = items.filter(item => item.ABC_Classification === 'C').length;
    
    const overallValue = items.reduce((sum, item) => sum + item.Total_Cost, 0);

    res.render('dashboard', {
      totalSKUs, countA, countB, countC, overallValue,
      chartData: JSON.stringify([countA, countB, countC]) // Passing to frontend script
    });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

// Analytics Pages
router.get('/analytics', (req, res) => {
  res.render('analytics');
});

// Default to redirect
router.get('/', (req, res) => {
  res.redirect('/dashboard');
});

module.exports = router;
