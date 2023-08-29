import _axios from 'axios';

export const axios = _axios;

export const api = {
	v1: axios.create({
		baseURL: 'http://localhost:3030/v1',
	}),
};
