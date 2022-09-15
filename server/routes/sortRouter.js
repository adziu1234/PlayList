const { json } = require('express');
const express = require('express');
const path = require('path');

const sortController = require('../controllers/sortController');

const router = express.Router();

router.get('/completed_games', sortController.getCompleted, (req, res) => {
  res.status(200).json(res.locals.completedGamesData);
});

router.get('/completed', (req, res) => {
  console.log('on sort/completed !');
  res.status(200).sendFile(path.resolve(__dirname, '../../src/test.html'));
});

router.get('/switch', sortController.getSwitch, (req, res) => {
  res.status(200).json(res.locals.switchGamesData);
});

router.get('/ps', sortController.getPS, (req, res) => {
  res.status(200).json(res.locals.psGamesData);
});

router.get('/xbox', sortController.getXbox, (req, res) => {
  res.status(200).json(res.locals.xboxGamesData);
});


module.exports = router;