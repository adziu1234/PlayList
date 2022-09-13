const express = require('express');
const app = express();

const path = require('path');

const gameRouter = require('./routes/gameRouter');



//handle parsing request body
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//handle static files
app.use(express.static(path.resolve(__dirname, '../src')));

//routes

app.use('/game', gameRouter);



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
app.listen(process.env.PORT || 3000, () => console.log("Server is running..."));

module.exports = app;