import axios from 'axios';

//import dotenv from 'dotenv';

//dotenv.config();

const api = axios.create({
    baseURL: 'http://localhost:5003',
});

// baseURL: process.env.REACT_APP_API_URL,

export default api;
