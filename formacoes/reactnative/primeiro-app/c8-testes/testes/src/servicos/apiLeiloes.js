import axios from 'axios';

// create axios
const instance = axios.create({
  baseURL: 'http://192.168.3.163:3000/',
  timeout: 1000,
});

export default instance;
