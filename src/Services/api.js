import axios from 'axios';

export default axios.create({
    baseURL: 'http://',
    timeout: 10000,
    headers: { "Content-Type": "application/json" }
});