import axios, { AxiosError } from 'axios';
import { RegisterForm } from '../types/auth'; // Adjust the path to where RegisterForm is defined

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const registerUser = async (userData: RegisterForm) => {
	try {
		const response = await axios.post(
			`${API_BASE_URL}/auth/register`,
			userData
		);
		return response.data;
	} catch (error) {
		const axiosError = error as AxiosError;
		console.error(
			'Registration failed:',
			axiosError.response?.data || axiosError.message
		);
		throw error;
	}
};
