import axios from 'axios';

export const endpoints = {
    auth: {
        signin: '/auth/signin',
        signup: '/auth/signup',
        signout: '/auth/signout',
    },
    adminMovies: {
        movies: '/movies',
    }
}

export default axios.create({
    baseURL: 'http://localhost:3000/api',
    withCredentials: true,
});