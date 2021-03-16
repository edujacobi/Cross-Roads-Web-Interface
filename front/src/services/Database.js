import axios from 'axios';

export const GANGS = axios.create({
    baseURL: 'http://localhost:3080/api/v1',
    params: {
        search: ''
    },
});