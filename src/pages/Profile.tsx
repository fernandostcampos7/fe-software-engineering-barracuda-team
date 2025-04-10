import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {
	UserCircle2,
	Mail,
	School,
	MapPin,
	Calendar,
	Edit2,
} from 'lucide-react';
import { supabase } from '../lib/supabaseClient';

export interface Achievement {
	id: number;
	title: string;
	description: string;
}

export interface User {
	id: string;
	email: string;
	role: string;
	firstName: string;
	lastName: string;
	schoolId?: string;
	communityId?: string;
	profileCompleted?: boolean;
	bio?: string;
	location?: string;
	createdAt: string;
	updatedAt: string;
	achievements?: Achievement[];
}

export function Profile() {
	const [user, setUser] = useState<User | null>(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchUser = async () => {
			try {
				const {
					data: { session },
				} = await supabase.auth.getSession();

				const accessToken = session?.access_token;

				if (!accessToken) {
					console.error('❌ No access token found in Supabase session');
					setLoading(false);
					return;
				}

				const res = await axios.get<User>(
					'http://localhost:5000/api/auth/profile',
					{
						headers: {
							Authorization: `Bearer ${accessToken}`,
						},
					}
				);

				setUser(res.data);
			} catch (error: any) {
				console.error('❌ Error fetching user:', error.message || error);
				if (error.response) {
					console.error('📦 Server said:', error.response.data);
				}
			} finally {
				setLoading(false);
			}
		};

		fetchUser();
	}, []);

	if (loading) return <div className='p-8 text-center'>Loading profile...</div>;
	if (!user)
		return (
			<div className='p-8 text-center text-red-600'>Error loading profile.</div>
		);

	return (
		<div className='min-h-screen bg-gray-50 py-12'>
			<div className='max-w-3xl mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='bg-white rounded-lg shadow overflow-hidden'>
					<div className='h-32 bg-emerald-600'></div>
					<div className='relative px-6 pb-6'>
						<div className='flex justify-between items-center'>
							<div className='flex items-center -mt-12'>
								<div className='bg-white p-2 rounded-full'>
									<UserCircle2 className='h-24 w-24 text-emerald-600' />
								</div>
								<div className='ml-4 mt-12'>
									<h1 className='text-2xl font-bold text-gray-900'>
										{user.firstName} {user.lastName}
									</h1>
									<p className='text-sm text-gray-500 capitalize'>
										{user.role}
									</p>
								</div>
							</div>
							<Link
								to='/complete-profile'
								className='inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500'
							>
								<Edit2 className='h-4 w-4 mr-2' />
								Edit Profile
							</Link>
						</div>
					</div>
				</div>

				<div className='mt-8 bg-white rounded-lg shadow overflow-hidden'>
					<div className='px-6 py-6'>
						<h2 className='text-lg font-semibold text-gray-900 mb-4'>
							Profile Information
						</h2>
						<div className='space-y-4'>
							<div className='flex items-center text-gray-700'>
								<Mail className='h-5 w-5 mr-3 text-gray-400' />
								<span>{user.email}</span>
							</div>
							{user.schoolId && (
								<div className='flex items-center text-gray-700'>
									<School className='h-5 w-5 mr-3 text-gray-400' />
									<span>School ID: {user.schoolId}</span>
								</div>
							)}
							{user.location && (
								<div className='flex items-center text-gray-700'>
									<MapPin className='h-5 w-5 mr-3 text-gray-400' />
									<span>{user.location}</span>
								</div>
							)}
							<div className='flex items-center text-gray-700'>
								<Calendar className='h-5 w-5 mr-3 text-gray-400' />
								<span>
									Joined {new Date(user.createdAt).toLocaleDateString()}
								</span>
							</div>
						</div>

						{user.bio && (
							<div className='mt-6'>
								<h3 className='text-md font-medium text-gray-900 mb-2'>
									About
								</h3>
								<p className='text-gray-700'>{user.bio}</p>
							</div>
						)}
					</div>
				</div>

				{user.achievements && user.achievements.length > 0 && (
					<div className='mt-8 bg-white rounded-lg shadow overflow-hidden'>
						<div className='px-6 py-6'>
							<h2 className='text-lg font-semibold text-gray-900 mb-4'>
								Achievements
							</h2>
							<div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
								{user.achievements.map((achievement) => (
									<div
										key={achievement.id}
										className='bg-emerald-50 p-4 rounded-lg border border-emerald-100'
									>
										<h3 className='font-medium text-emerald-800 mb-1'>
											{achievement.title}
										</h3>
										<p className='text-sm text-emerald-600'>
											{achievement.description}
										</p>
									</div>
								))}
							</div>
						</div>
					</div>
				)}
			</div>
		</div>
	);
}
