import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://food-ordering-app-80e61.firebaseio.com'
});

export default instance;