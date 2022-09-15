const mongoose = require('mongoose');

const MONGO_URI = process.env.MONGODB_URI || 'mongodb+srv://adziu1234:toffee123@cluster0.mpbkb0e.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: 'newgamelibrary'
})
  .then(() => console.log('Connected to MongoDB.'))
  .catch(err => console.log(err));

const Schema = mongoose.Schema;

const gameSchema = new Schema({
  title: String,
  release: Date,
  rating: String,
  completion_time: Number,
  completion_status: Boolean,
  publisher: String,
  developer: String,
  art_link: String,
  genres: [{ type: String }],
  platform: [{ type: String }]
});

const Game = mongoose.model('game', gameSchema);


const genreSchema = new Schema({
  title: String,
});

const Genre = mongoose.model('genre', genreSchema);

const platformSchema = new Schema({
  name: String,
  manufacturer: String,
  release: Date
});

const Platform = mongoose.model('platform', platformSchema);


module.exports = {
  Game,
  Genre,
  Platform
};