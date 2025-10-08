import axios from 'axios';
const API = axios.create({
  baseURL: 'http://localhost:3000', // adjust
});

export const signup = (username, password) =>
  API.post('/auth/signup', { username, password });

export const login = (username, password) =>
  API.post('/auth/login', { username, password });

