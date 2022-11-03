const express = require('express');
const app = express();

const path = require('path');

const gameRouter = require('./routes/gameRouter');
const sortRouter = require('./routes/sortRouter');

const models = require('./models/models');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 3030;

//handle parsing request body
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//handle static files
app.use(express.static(path.resolve(__dirname, '../src')));

//routes

app.use('/game', gameRouter);

app.use('/sort', sortRouter);

app.post('/genre/:genre', (req, res) => {
  const title = req.params.genre;
  models.Genre.create({
    title: title
  })
    .then((doc) => {
      res.status(200).json(doc);
    })
    .catch((err) => {
      return err;
    });
});

app.post('/platform/:manufacturer/:platform', (req, res) => {
  const company = req.params.manufacturer;
  const name = req.params.platform;
  models.Platform.create({
    name: name,
    manufacturer: company,
    release: null
  })
    .then((doc) => {
      res.status(200).json(doc);
    })
    .catch((err) => {
      return err;
    });
});



//404 catcher
app.use((req, res) => res.status(404).send('Page not found!'));

//express global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

//start server on environment port passed in or 3000
app.listen(PORT, () => console.log(`Server running on ${PORT}`));

module.exports = app;

