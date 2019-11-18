const express = require('express');
const query = require('../db/index.js');
const axios = require('axios');
const API = require('../config.js');
const app = express();

const findPlaceURL =
  'https://maps.googleapis.com/maps/api/place/findplacefromtext/json';

app.get('/user', (req, res) => {
  query.getUserInfo(req, res);
});

app.post('/place', (req, res) => {
  const place = req.query.place;
  axios
    .get(findPlaceURL, {
      params: {
        input: place,
        inputtype: 'textquery',
        fields: 'formatted_address',
        key: API.map
      }
    })
    .then(result => {
      const address = result.data.candidates[0].formatted_address;
      query.addPlace(req, res, address);
    })
    .catch(err => {
      console.log(err);
      res.send(err);
    });
});

app.post('/restaurant', (req, res) => {
  const restaurant = req.query.restaurant;
  axios
    .get(findPlaceURL, {
      params: {
        input: restaurant,
        inputtype: 'textquery',
        fields: 'formatted_address,rating',
        key: API.map
      }
    })
    .then(result => {
      const info = result.data.candidates[0];
      const address = info.formatted_address;
      const rating = info.rating;
      query.addRestaurant(req, res, address, rating);
    })
    .catch(err => {
      console.log(err);
      res.send(err);
    });
});

app.listen(3000, function() {
  console.log('listening on port 3000!');
});
