import axios from 'axios';

const baseURL = 'http://10.3.34.80:3000';

const request = {
  getUserInfo: (user, cb) => {
    axios
      .get(`${baseURL}/user`, {params: {user}})
      .then(res => {
        let places = [];
        let restaurants = [];
        if (res.data.length !== 0) {
          const info = res.data[0];
          places = info.places;
          restaurants = info.restaurants;
        }
        cb(places, restaurants);
      })
      .catch(err => {
        console.log(err);
      });
  },
  addRestaurant: (user, restaurant, cb) => {
    axios
      .post(`${baseURL}/restaurant`, null, {params: {user, restaurant}})
      .then(res => {
        cb(res.data.restaurants);
      })
      .catch(err => {
        console.log(err);
      });
  },
  addPlace: (user, place, cb) => {
    axios
      .post(`${baseURL}/place`, null, {params: {user, place}})
      .then(res => {
        cb(res.data.places);
      })
      .catch(err => {
        console.log(err);
      });
  },
  getNearby: (user, address, cb) => {
    axios
      .get(`${baseURL}/nearby`, {params: {user, address}})
      .then(res => {
        cb(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }
};

export default request;
