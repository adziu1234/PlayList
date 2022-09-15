const models = require('../models/models');

const sortController = {};

sortController.getCompleted = (req, res, next) => {
  models.Game.find({completion_status: false}, (err, games) => {
    if (err){
      return next({
        log: 'sortController.getCompleted ERROR',
        message: {err: 'sortController.getCompleted ERROR: no completed games found'}
      });
    }
    res.locals.completedGamesData = games;
    return next();
  });
};

sortController.getSwitch = (req, res, next) => {
  models.Game.find({platform: {$in: ['Switch', 'DS', '3DS', 'Wii U', 'Wii', 'GameCube', 'Game Boy Advance', 'Nintendo 64', 'SNES']}}, (err, games) => {
    if (err){
      return next({
        log: 'sortController.getSwitch ERROR',
        message: {err: 'sortController.getCompleted ERROR: no Switch games found'}
      });
    }
    res.locals.switchGamesData = games;
    return next();
  });
};

sortController.getPS = (req, res, next) => {
  models.Game.find( {platform: {$in: ['PlayStation', 'PlayStation 2', 'PlayStation 3', 'PlayStation 4', 'PlayStation 5', 'Vita', 'PSP']} }, (err, games) => {
    if (err){
      return next({
        log: 'sortController.getPS ERROR',
        message: {err: 'sortController.getPS ERROR: no PS games found'}
      });
    }
    res.locals.psGamesData = games;
    return next();
  });
};

sortController.getXbox = (req, res, next) => {
  models.Game.find( {platform: {$in: ['Xbox', 'Xbox 360', 'Xbox One', 'Xbox Series X', 'PC']} }, (err, games) => {
    if (err){
      return next({
        log: 'sortController.getXbox ERROR',
        message: {err: 'sortController.getXbox ERROR: no Xbox/PC games found'}
      });
    }
    res.locals.xboxGamesData = games;
    return next();
  });
};

module.exports = sortController;