import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001/api', // Replace with your backend's base URL
});

export default api;
