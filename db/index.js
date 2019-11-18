const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mvp', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
});

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
  address: String,
  rating: Number
});

const userSchema = mongoose.Schema({
  user: String,
  places: [placeSchema],
  restaurants: [restaurantSchema]
});

const User = mongoose.model('User', userSchema);
const Place = mongoose.model('Place', placeSchema);
const Restaurant = mongoose.model('Restaurant', restaurantSchema);

const getUserInfo = (req, res) => {
  const user = req.query.user;
  User.find({user}).then(data => {
    res.send(data);
  });
};

const addPlace = (req, res, address) => {
  const name = req.query.place;
  const user = req.query.user;
  const place = {name, address};

  User.findOneAndUpdate({user}, {$push: {places: place}}, {upsert: true})
    .then(() => res.sendStatus(200))
    .catch(err => {
      console.log(err);
      res.send(err);
    });
};

const addRestaurant = (req, res, address, rating) => {
  const name = req.query.restaurant;
  const user = req.query.user;
  const restaurant = {name, address, rating};

  User.findOneAndUpdate(
    {user},
    {$push: {restaurants: restaurant}},
    {upsert: true}
  )
    .then(() => res.sendStatus(200))
    .catch(err => {
      console.log(err);
      res.send(err);
    });
};

module.exports = {getUserInfo, addPlace, addRestaurant};
