import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, UserRole } from '../types/auth';
import { supabase } from '../lib/supabaseClient';

interface AuthContextType {
	user: User | null;
	isLoading: boolean;
	setUser: React.Dispatch<React.SetStateAction<User | null>>;
	signIn: (email: string, password: string) => Promise<void>;
	signUp: (data: SignUpData) => Promise<void>;
	signOut: () => Promise<void>;
	updateProfile: (data: Partial<User>) => Promise<void>;
}

interface SignUpData {
	email: string;
	password: string;
	firstName: string;
	lastName: string;
	role: UserRole;
	accessCode?: string;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
	const [user, setUser] = useState<User | null>(null);
	const [isLoading, setIsLoading] = useState(true);
	const navigate = useNavigate();

	useEffect(() => {
		const checkSession = async () => {
			setIsLoading(true);

			const { data } = await supabase.auth.getSession();
			const accessToken = data?.session?.access_token;

			if (accessToken) {
				console.log('Access token being sent:', accessToken); // ✅ Debug log

				try {
					const response = await fetch('/api/auth/profile', {
						method: 'GET',
						headers: {
							Authorization: `Bearer ${accessToken}`, // ✅ Send token
							'Content-Type': 'application/json',
						},
					});

					if (!response.ok) {
						throw new Error('Failed to fetch user profile');
					}

					const profile = await response.json();
					console.log('Fetched user profile:', profile); // ✅ Debug log
					setUser(profile); // This user object should match your User type
				} catch (error) {
					console.error('Failed to fetch user profile:', error);
					setUser(null);
				}
			}

			setIsLoading(false);
		};

		checkSession();
	}, []);

	const signIn = async (email: string, password: string) => {
		try {
			const { data, error } = await supabase.auth.signInWithPassword({
				email,
				password,
			});

			if (error) throw error;

			// After successful sign-in, fetch the user profile
			const accessToken = data?.session?.access_token;
			if (accessToken) {
				const response = await fetch('/api/auth/profile', {
					method: 'GET',
					headers: {
						Authorization: `Bearer ${accessToken}`,
					},
				});

				const profile = await response.json();
				setUser(profile);
				console.log('Setting user after login:', profile);
			}

			navigate('/dashboard');
		} catch (error) {
			console.error('Sign in error:', error);
			throw error;
		}
	};

	const signUp = async (data: SignUpData) => {
		const { email, password, firstName, lastName } = data; // Adjust fields to match your form.

		try {
			const { data: signUpData, error } = await supabase.auth.signUp({
				email,
				password,
				options: {
					data: {
						// This is the "metadata" — optional but useful if you want to store extra info.
						firstName,
						lastName,
						role: 'student', // You can add roles, etc., if needed.
					},
				},
			});

			if (error) {
				throw error;
			}

			// Optionally log or handle signUpData if needed (usually contains user ID and other info)
			console.log('User signed up:', signUpData);

			navigate('/complete-profile');
		} catch (error) {
			console.error('Sign up error:', error);
			throw error;
		}
	};

	const signOut = async () => {
		try {
			await supabase.auth.signOut();
			setUser(null);
			navigate('/');
		} catch (error) {
			console.error('Sign out error:', error);
			throw error;
		}
	};

	const updateProfile = async (data: Partial<User>) => {
		try {
			if (data.role === 'super_admin' || data.role === 'school_admin') {
				throw new Error('Cannot upgrade to admin role');
			}
			// Add logic to update user profile (if you want to allow profile updates)
		} catch (error) {
			console.error('Profile update error:', error);
			throw error;
		}
	};

	return (
		<AuthContext.Provider
			value={{
				user,
				isLoading,
				setUser,
				signIn,
				signUp,
				signOut,
				updateProfile,
			}}
		>
			{children}
		</AuthContext.Provider>
	);

}

export function useAuth() {
	const context = useContext(AuthContext);
	if (context === undefined) {
		throw new Error('useAuth must be used within an AuthProvider');
	}
	return context;
}
