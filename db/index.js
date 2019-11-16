const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

const db = mongoose.connection;

db.on('error', function() {
  console.log('mongoose connection error');
});

db.once('open', function() {
  console.log('mongoose connected successfully');
});

const placeSchema = mongoose.Schema({
  name: String,
  address: String,
  info: String
});

const restaurantSchema = mongoose.Schema({
  name: String,
  address: String
});

const userSchema = mongoose.Schema({
  user: String,
  places: [placeSchema],
  restaurants: [restaurantSchema]
});

const user = mongoose.model('User', userSchema);
