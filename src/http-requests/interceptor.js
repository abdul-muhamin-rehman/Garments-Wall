import axios from 'axios';

const axiosInstance = axios.create({
    baseUrl: 'https://nisum.humhub.com/api/v1',
    timeout: 1000,
});

export default axiosInstance;