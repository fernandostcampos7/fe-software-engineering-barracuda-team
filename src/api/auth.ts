import axios, { AxiosError } from 'axios';
import { RegisterForm } from '../types/auth';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const api = axios.create({
	baseURL: API_BASE_URL,
	headers: {
		'Content-Type': 'application/json',
	},
});

export const registerUser = async (userData: RegisterForm) => {
	try {
		const response = await api.post('/auth/register', userData);
		return response.data;
	} catch (error) {
		const axiosError = error as AxiosError;
		console.error(
			'❌ Registration failed:',
			axiosError.response?.data || axiosError.message
		);
		throw axiosError;
	}
};
