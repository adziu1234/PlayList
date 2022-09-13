const express = require('express');

const gameController = require('../controllers/gameController')

const router = express.Router();

router.get('/', gameController.getGames, (req, res) => {
  res.status(200).json(res.locals.gamesData);
})




module.exports = router;