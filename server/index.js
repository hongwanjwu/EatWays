const express = require('express');
const query = require('../db/index.js');
const axios = require('axios');
const API = require('../config.js');
const app = express();

app.get('/user', (req, res) => {
  query.getUserInfo(req, res);
});

app.post('/place', (req, res) => {
  const place = req.query.place;
  axios
    .get('https://maps.googleapis.com/maps/api/place/findplacefromtext/json', {
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

app.listen(3000, function() {
  console.log('listening on port 3000!');
});
