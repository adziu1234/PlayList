const models = require('../models/models');

const gameController = {};

gameController.getGames = (req, res, next) => {
  models.Game.find({}, (err, games) => {
    if (err){
      return next({
        log: 'gameController.getGames ERROR',
        message: {err: 'gameController.getGames ERROR: no games found'}
      });
    }
    res.locals.gamesData = games;
    return next();
  });
}

module.exports = gameController;