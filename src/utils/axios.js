import axios from 'axios';

export const server = axios.create({
  baseURL: process.env.REACT_APP_APOLLO_API_URI,
});
