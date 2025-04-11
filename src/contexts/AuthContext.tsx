import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, UserRole } from '../types/auth';
import { supabase } from '../lib/supabaseClient';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

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
			const { data: sessionData } = await supabase.auth.getSession();
			const accessToken = sessionData?.session?.access_token;

			if (accessToken) {
				console.log('✅ Access token found:', accessToken);
				try {
					const res = await fetch(`${API_BASE_URL}/auth/profile`, {
						method: 'GET',
						headers: {
							Authorization: `Bearer ${accessToken}`,
							'Content-Type': 'application/json',
						},
					});

					if (!res.ok) throw new Error('Failed to fetch user profile');
					const profile = await res.json();
					console.log('✅ Fetched user profile:', profile);
					setUser(profile);
				} catch (err) {
					console.error('❌ Error fetching user from backend:', err);
					setUser(null);
				}
			} else {
				console.log('⚠️ No active session found');
				setUser(null);
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

			const { user } = data;

			if (user) {
				const appUser: User = {
					id: user.id,
					email: user.email ?? '',
					firstName: user.user_metadata?.firstName ?? '',
					lastName: user.user_metadata?.lastName ?? '',
					role: user.user_metadata?.role ?? 'public',
					createdAt: user.created_at ?? '',
					updatedAt: user.updated_at ?? user.created_at ?? '',
				};
				setUser(appUser);
				console.log('✅ Setting user after login:', appUser);
			}

			navigate('/dashboard');
		} catch (error) {
			console.error('❌ Sign in error:', error);
			throw error;
		}
	};

	const signUp = async (data: SignUpData) => {
		const { email, password, firstName, lastName } = data;

		try {
			const { data: signUpData, error } = await supabase.auth.signUp({
				email,
				password,
				options: {
					data: {
						firstName,
						lastName,
						role: 'student',
					},
				},
			});

			if (error) throw error;

			console.log('User signed up:', signUpData);
			navigate('/complete-profile');
		} catch (error) {
			console.error('❌ Sign up error:', error);
			throw error;
		}
	};

	const signOut = async () => {
		try {
			await supabase.auth.signOut();
			setUser(null);
			navigate('/');
		} catch (error) {
			console.error('❌ Sign out error:', error);
			throw error;
		}
	};

	const updateProfile = async (data: Partial<User>) => {
		try {
			if (data.role === 'super_admin' || data.role === 'school_admin') {
				throw new Error('Cannot upgrade to admin role');
			}
		} catch (error) {
			console.error('❌ Profile update error:', error);
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
