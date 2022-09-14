const express = require('express');

const gameController = require('../controllers/gameController')

const router = express.Router();

//get all games in user's database
router.get('/', gameController.getGames, (req, res) => {
  res.status(200).json(res.locals.gamesData);
});

//get one game based on passed in param
//router.get('/:title')

//add a game to the db
router.post('/', gameController.addGame, (req, res) => {
  res.status(200).json(res.locals.createdGame);
});




module.exports = router;