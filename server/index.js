const express = require('express');
const query = require('../db/index.js');
const axios = require('axios');
const bodyParser = require('body-parser');
const Promise = require('bluebird');
const API = require('../config.js');
const app = express();

const findPlaceURL =
  'https://maps.googleapis.com/maps/api/place/findplacefromtext/json';

const distanceURL = 'https://maps.googleapis.com/maps/api/distancematrix/json';

app.use(bodyParser.json());

app.get('/user', (req, res) => {
  query.getUserInfo(req, res);
});

app.get('/nearby', (req, res) => {
  const origins = req.query.address;
  const list = req.query.queryList;
  let originCity = origins.split(', ');
  originCity = originCity[originCity.length - 3];
  const nearby = [];
  let nearbyRes = [];
  const result = query
    .getPlaces(req.query.user)
    .lean()
    .exec();
  result
    .then(data => {
      const resultList = data[0][list];
      if (!resultList) {
        return;
      }

      resultList.forEach(item => {
        let city = item.address.split(', ');
        city = city[city.length - 3];
        if (city === originCity) {
          nearby.push(item);
        }
      });

      nearbyRes = [...nearby];

      return Promise.all(
        nearby.map((item, i) => {
          return axios
            .get(distanceURL, {
              params: {
                origins,
                destinations: item.address,
                units: 'imperial',
                key: API.map
              }
            })
            .then(result => {
              const distance = result.data.rows[0].elements[0].distance.text;
              nearbyRes[i].distance = distance;
            })
            .catch(err => {
              console.log(err);
            });
        })
      );
    })
    .then(() => {
      res.send(nearbyRes);
    })
    .catch(err => {
      console.log(err);
      res.send(err);
    });
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
