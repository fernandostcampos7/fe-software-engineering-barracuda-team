 import React, { createContext, useContext, useState, useEffect } from 'react';
 import { useNavigate } from 'react-router-dom';
 import { User, UserRole } from '../types/auth';

 interface AuthContextType {
		user: User | null;
		isLoading: boolean;
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
			// TODO: Check Supabase session and set user
			setIsLoading(false);
		}, []);

		const signIn = async (email: string, password: string) => {
			try {
				// TODO: Implement Supabase sign in
				navigate('/dashboard');
			} catch (error) {
				console.error('Sign in error:', error);
				throw error;
			}
		};

		const signUp = async (data: SignUpData) => {
			try {
				// TODO: Implement Supabase sign up with role validation
				navigate('/complete-profile');
			} catch (error) {
				console.error('Sign up error:', error);
				throw error;
			}
		};

		const signOut = async () => {
			try {
				// TODO: Implement Supabase sign out
				navigate('/');
			} catch (error) {
				console.error('Sign out error:', error);
				throw error;
			}
		};

		const updateProfile = async (data: Partial<User>) => {
			try {
				// TODO: Implement Supabase profile update
				// Prevent role changes to admin roles
				if (data.role === 'super_admin' || data.role === 'school_admin') {
					throw new Error('Cannot upgrade to admin role');
				}
			} catch (error) {
				console.error('Profile update error:', error);
				throw error;
			}
		};

		return (
			<AuthContext.Provider
				value={{ user, isLoading, signIn, signUp, signOut, updateProfile }}
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