const express = require('express');

const gameController = require('../controllers/gameController');

const router = express.Router();

const path = require('path');

//get all games in user's database
router.get('/', gameController.getGames, (req, res) => {
  res.status(200).json(res.locals.gamesData);
});

router.get('/new_game', (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, '../../src/added_pages/new-game-input.html'));
})

//get one game based on passed in param
//router.get('/:title')

//add a game to the db
router.post('/post_game', gameController.addGame, (req, res) => {
  res.status(200).json(res.locals.createdGame);
});




module.exports = router;