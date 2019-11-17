import axios from 'axios';

const baseURL = 'http://localhost:3000';
const request = {
  getUserInfo: user => {
    axios.get(`${baseURL}/user`, { params: { user: user } }).then(res => {
      if (res.data) {
        cb(res.data);
      }
    });
  }
};
