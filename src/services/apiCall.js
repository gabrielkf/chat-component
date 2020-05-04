import axios from 'axios';

const api = axios.create({
  baseURL: 'https://team13server.herokuapp.com',
});

export default api;
