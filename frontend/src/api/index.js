import axios from 'axios';

const BASE_URL = '';

export const basic = axios.create({
    baseURL: BASE_URL,
});
