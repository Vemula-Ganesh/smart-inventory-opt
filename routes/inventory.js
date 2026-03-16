const express = require('express');
const router = express.Router();
const Inventory = require('../models/Inventory');
const { isAuthenticated } = require('../middleware/auth');

router.use(isAuthenticated);

// List all inventory items
router.get('/', async (req, res) => {
  try {
    const items = await Inventory.find({ user: req.session.userId });
    res.render('inventory/index', { items });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

// Show form to add new item
router.get('/add', (req, res) => {
  res.render('inventory/add');
});

// Handle adding new item
router.post('/add', async (req, res) => {
  try {
    const itemData = { ...req.body, user: req.session.userId };
    // Auto calculate Total_Cost if not provided
    if (!itemData.Total_Cost) {
      itemData.Total_Cost = parseFloat(itemData.Item_Cost) * parseFloat(itemData.Item_Count);
    }
    await Inventory.create(itemData);
    res.redirect('/inventory');
  } catch (err) {
    console.error(err);
    res.render('inventory/add', { error: 'Error adding item. Ensure SKU_ID is unique and all fields are valid.' });
  }
});

// Show form to edit an item
router.get('/edit/:id', async (req, res) => {
  try {
    const item = await Inventory.findOne({ _id: req.params.id, user: req.session.userId });
    if (!item) return res.status(404).send('Item not found');
    res.render('inventory/edit', { item });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

// Handle updating an item
router.put('/edit/:id', async (req, res) => {
  try {
    const itemData = { ...req.body };
    // Auto calculate Total_Cost
    itemData.Total_Cost = parseFloat(itemData.Item_Cost) * parseFloat(itemData.Item_Count);
    
    await Inventory.findOneAndUpdate(
      { _id: req.params.id, user: req.session.userId },
      itemData
    );
    res.redirect('/inventory');
  } catch (err) {
    console.error(err);
    res.status(500).send('Error updating item');
  }
});

// Delete an item
router.delete('/delete/:id', async (req, res) => {
  try {
    await Inventory.findOneAndDelete({ _id: req.params.id, user: req.session.userId });
    res.redirect('/inventory');
  } catch (err) {
    console.error(err);
    res.status(500).send('Error deleting item');
  }
});

module.exports = router;
