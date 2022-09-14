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
};

gameController.addGame = async (req, res, next) => {
  const { title, release, rating, completion_time, completion_status, publisher, developer, art_link, genres, platform } = req.body;
  console.log(req.body);
  

  models.Game.create({
    title: title,
    release: release,
    rating: rating,
    completion_time: completion_time,
    completion_status: completion_status,
    publisher: publisher,
    developer: developer,
    art_link: art_link,
    genres: genres,
    platform: platform
  })
    .then((doc) => {
      res.locals.createdGame = doc;
      console.log(doc);
      return next();
    })
    .catch((err) => {
      return next({
        log: 'gameController.addGame ERROR',
        message: {err: 'gameController.addGame ERROR: addition to database failed'}
      });
    });
};

gameController.deleteGame = (req, res, next) => {
  //console.log("req", req);
  //console.log("param title", req.params.title);
  const { title } = req.params;
  models.Game.deleteOne({title: title})
    .then((doc) => {
      res.locals.deletedGame = doc;
      console.log('delete game', doc);
      return next();
    })
    .catch((err) => {
      return next({
        log: 'gameController.deleteGame ERROR',
        message: {err: 'gameController.deleteGame ERROR: did not delete game successfully, or query not found'}
      });
    });
};


module.exports = gameController;