import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://anastasia-satysheva.firebaseio.com/'
});

export default instance;