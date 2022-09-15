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

module.exports = sortController;