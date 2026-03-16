const express = require('express');
const router = express.Router();
const { isAuthenticated } = require('../middleware/auth');

router.use(isAuthenticated);

// ML Prediction Page
router.get('/predict', (req, res) => {
  res.render('predict', { prediction: null });
});

// Handle prediction
router.post('/predict', (req, res) => {
  const { algorithm, itemCost, seasonality, demandFluct } = req.body;
  
  // Rule-based logic simulating ML models with their respective accuracies
  // Paper accuracy context: Random Forest (93%), Decision Tree (87%), Naïve Bayes (74%), KNN (54%), SVM (40%)

  let prediction = '';
  const cost = parseFloat(itemCost);

  // A simple heuristic rule to predict classes A, B, C
  let trueClass = 'C';
  if (cost > 1000 || demandFluct === 'Volatile') {
      trueClass = 'A';
  } else if (cost > 200 || seasonality === 'High') {
      trueClass = 'B';
  }

  // Simulate accuracy by inducing random errors based on the chosen algorithm
  let accuracyThreshold;
  switch (algorithm) {
    case 'RandomForest': accuracyThreshold = 0.93; break;
    case 'DecisionTree': accuracyThreshold = 0.87; break;
    case 'NaiveBayes': accuracyThreshold = 0.74; break;
    case 'KNN': accuracyThreshold = 0.54; break;
    case 'SVM': accuracyThreshold = 0.40; break;
    default: accuracyThreshold = 0.50;
  }

  const randomVal = Math.random();
  if (randomVal <= accuracyThreshold) {
    prediction = trueClass; // Correct prediction
  } else {
    // Incorrect prediction (pick a different class randomly)
    const options = ['A', 'B', 'C'].filter(c => c !== trueClass);
    prediction = options[Math.floor(Math.random() * options.length)];
  }

  res.render('predict', { 
    prediction, 
    algorithm, 
    accuracy: (accuracyThreshold * 100).toFixed(0) + '%' 
  });
});

module.exports = router;
