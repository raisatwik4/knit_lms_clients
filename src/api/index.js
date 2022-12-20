import axios from 'axios';

const API = axios.create({ baseURL: 'https://localhost:3000' });

axios.request({
  method: 'POST',
  url: 'https://example.com/api/signup',
  data: {
    username: 'johnsmith',
    password: 'password123'
  }
})
  .then(response => {
    // handle success
    console.log(response.data);
  })
  .catch(error => {
    // handle error
    console.log(error);
  });

