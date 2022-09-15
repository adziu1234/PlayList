const express = require('express');

const gameController = require('../controllers/gameController');

const router = express.Router();

const path = require('path');

//get all games in user's database upon gamecontainer loading on home page
router.get('/', gameController.getGames, (req, res) => {
  res.status(200).json(res.locals.gamesData);
});

//this serves the page to put in the new game's info
router.get('/new_game', (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, '../../src/added_pages/new-game-input.html'));
})

//get one game based on passed in param
//router.get('/:title')

//add a game to the db
router.post('/post_game', gameController.addGame, (req, res) => {
  res.status(200).json(res.locals.createdGame);
});

//delete a game from the db
router.delete('/delete/:title', gameController.deleteGame, (req, res) => {
  res.status(200).json(res.locals.deletedGame);
})

//access page to update a game's information in the db
router.get('/update/:title', (req, res) => {
  console.log(req.params.title);
  res.status(200).sendFile(path.resolve(__dirname, '../../src/added_pages/new-game-input.html'));
})

router.put('/update/:title', gameController.updateGame, (req, res) => {
  console.log(res.locals.updatedGame);
})




module.exports = router;