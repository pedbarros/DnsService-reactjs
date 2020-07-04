import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://www.whoisxmlapi.com/whoisserver/',
});
