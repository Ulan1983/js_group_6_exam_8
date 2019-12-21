import axios from 'axios';

const axiosQuotes = axios.create({
	baseURL: 'https://burger-builder-ulan-beltaev.firebaseio.com/'
});

export default axiosQuotes;