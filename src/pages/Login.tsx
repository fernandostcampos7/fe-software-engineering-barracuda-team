import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { z } from 'zod';
import { supabase } from '../lib/supabaseClient';
import { UserCircle2, Mail, Lock, Github, Facebook, Slack } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

const loginSchema = z.object({
	email: z.string().email('Invalid email address'),
	password: z.string().min(8, 'Password must be at least 8 characters'),
});

type LoginForm = z.infer<typeof loginSchema>;

export function Login() {
	const { setUser } = useAuth();
	const navigate = useNavigate();
	const [formData, setFormData] = React.useState<LoginForm>({
		email: '',
		password: '',
	});
	const [errors, setErrors] = React.useState<Record<string, string>>({});
	const [loading, setLoading] = React.useState(false);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
		if (errors[name]) {
			setErrors((prev) => ({ ...prev, [name]: '' }));
		}
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setLoading(true);

		try {
			loginSchema.parse(formData);
			const { email, password } = formData;

			const { data, error } = await supabase.auth.signInWithPassword({
				email,
				password,
			});

			if (error) throw new Error(error.message);

			const { session, user } = data;

			const appUser = {
				id: user.id,
				email: user.email ?? '',
				firstName: user.user_metadata?.first_name ?? '',
				lastName: user.user_metadata?.last_name ?? '',
				role: user.user_metadata?.role ?? 'public',
				createdAt: user.created_at ?? '',
				updatedAt: user.updated_at ?? user.created_at ?? '',
			};


			localStorage.setItem('access_token', session.access_token);
			console.log('Sending token:', localStorage.getItem('access_token'));

			setUser(appUser);

			navigate('/dashboard');
		} catch (error) {
			if (error instanceof z.ZodError) {
				const newErrors: Record<string, string> = {};
				error.errors.forEach((err) => {
					if (err.path) {
						newErrors[err.path[0]] = err.message;
					}
				});
				setErrors(newErrors);
			} else {
				const errMessage = (error as Error).message;
				console.error('❌ Login failed:', errMessage);
				setErrors((prev) => ({ ...prev, email: 'Invalid credentials' }));
			}
		} finally {
			setLoading(false);
		}
	};


	const handleOAuthSignIn = async (
		provider: 'google' | 'github' | 'facebook' | 'slack'
	) => {
		try {
			const { error } = await supabase.auth.signInWithOAuth({
				provider,
				options: {
					redirectTo:
						'https://fe-software-engineering-barracuda-team.vercel.app/complete-profile',
				},
			});

			if (error) {
				throw error;
			}

			console.log(`✅ OAuth sign-in successful with ${provider}`);
			navigate('/complete-profile'); // Redirect after OAuth login
		} catch (error) {
			const errMessage = (error as Error).message;
			console.error(`❌ OAuth login failed for ${provider}:`, errMessage);
		}
	};

	return (
		<div className='min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8'>
			<div className='sm:mx-auto sm:w-full sm:max-w-md'>
				<div className='flex justify-center'>
					<UserCircle2 className='h-12 w-12 text-emerald-600' />
				</div>
				<h2 className='mt-6 text-center text-3xl font-extrabold text-gray-900'>
					Sign in to your account
				</h2>
				<p className='mt-2 text-center text-sm text-gray-600'>
					Or{' '}
					<Link
						to='/register'
						className='font-medium text-emerald-600 hover:text-emerald-500'
					>
						create a new account
					</Link>
				</p>
			</div>

			<div className='mt-8 sm:mx-auto sm:w-full sm:max-w-md'>
				<div className='bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10'>
					{/* OAuth Buttons */}
					<div className='space-y-4'>
						<button
							type='button'
							onClick={() => handleOAuthSignIn('google')}
							className='w-full flex justify-center items-center gap-3 px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50'
						>
							<svg className='h-5 w-5' viewBox='0 0 24 24'>
								<path
									d='M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z'
									fill='#4285F4'
								/>
								<path
									d='M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z'
									fill='#34A853'
								/>
								<path
									d='M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z'
									fill='#FBBC05'
								/>
								<path
									d='M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z'
									fill='#EA4335'
								/>
							</svg>
							Continue with Google
						</button>
						<button
							type='button'
							onClick={() => handleOAuthSignIn('github')}
							className='w-full flex justify-center items-center gap-3 px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50'
						>
							<Github className='h-5 w-5' />
							Continue with GitHub
						</button>
						<button
							type='button'
							onClick={() => handleOAuthSignIn('facebook')}
							className='w-full flex justify-center items-center gap-3 px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-white bg-[#1877F2] hover:bg-[#166FE5]'
						>
							<Facebook className='h-5 w-5' />
							Continue with Facebook
						</button>
						<button
							type='button'
							onClick={() => handleOAuthSignIn('slack')}
							className='w-full flex justify-center items-center gap-3 px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-white bg-[#4A154B] hover:bg-[#3C1139] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#4A154B]'
						>
							<Slack className='h-5 w-5' />
							Continue with Slack
						</button>
					</div>

					<div className='mt-6'>
						<div className='relative'>
							<div className='absolute inset-0 flex items-center'>
								<div className='w-full border-t border-gray-300' />
							</div>
							<div className='relative flex justify-center text-sm'>
								<span className='px-2 bg-white text-gray-500'>
									Or continue with email
								</span>
							</div>
						</div>
					</div>

					<form className='mt-6 space-y-6' onSubmit={handleSubmit}>
						<div>
							<label
								htmlFor='email'
								className='block text-sm font-medium text-gray-700'
							>
								Email address
							</label>
							<div className='mt-1 relative'>
								<input
									id='email'
									name='email'
									type='email'
									required
									className='appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm'
									value={formData.email}
									onChange={handleChange}
								/>
								<Mail className='h-5 w-5 text-gray-400 absolute right-3 top-2' />
							</div>
							{errors.email && (
								<p className='mt-2 text-sm text-red-600'>{errors.email}</p>
							)}
						</div>

						<div>
							<label
								htmlFor='password'
								className='block text-sm font-medium text-gray-700'
							>
								Password
							</label>
							<div className='mt-1 relative'>
								<input
									id='password'
									name='password'
									type='password'
									required
									className='appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm'
									value={formData.password}
									onChange={handleChange}
								/>
								<Lock className='h-5 w-5 text-gray-400 absolute right-3 top-2' />
							</div>
							{errors.password && (
								<p className='mt-2 text-sm text-red-600'>{errors.password}</p>
							)}
						</div>

						<div>
							<button
								type='submit'
								disabled={loading} // Disable button while loading
								className={`w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white
            bg-emerald-600 hover:bg-emerald-700 disabled:bg-gray-400 disabled:cursor-not-allowed`}
							>
								{loading ? 'Logging in...' : 'Sign in'}
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}
