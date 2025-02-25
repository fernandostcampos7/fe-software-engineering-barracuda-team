import React from 'react';
import { Link } from 'react-router-dom';
import {
	UserCircle2,
	Mail,
	School,
	Users,
	MapPin,
	Calendar,
	Edit2,
} from 'lucide-react';

export function Profile() {
	// TODO: Fetch user data from Supabase
	const user = {
		firstName: 'John',
		lastName: 'Doe',
		email: 'john.doe@example.com',
		role: 'teacher',
		schoolId: 'SCH123',
		location: 'Jakarta, Indonesia',
		joinedDate: 'January 2024',
		bio: 'Passionate educator focused on wildlife conservation and environmental education. Working to inspire the next generation of conservation leaders.',
		achievements: [
			{
				id: 1,
				title: 'Conservation Champion',
				description: '10 species documented',
			},
			{
				id: 2,
				title: 'Community Leader',
				description: '5 educational programs organized',
			},
			{ id: 3, title: 'Student Mentor', description: '20 students guided' },
		],
	};

	return (
		<div className='min-h-screen bg-gray-50 py-12'>
			<div className='max-w-3xl mx-auto px-4 sm:px-6 lg:px-8'>
				{/* Profile Header */}
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

				{/* Profile Details */}
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
							<div className='flex items-center text-gray-700'>
								<MapPin className='h-5 w-5 mr-3 text-gray-400' />
								<span>{user.location}</span>
							</div>
							<div className='flex items-center text-gray-700'>
								<Calendar className='h-5 w-5 mr-3 text-gray-400' />
								<span>Joined {user.joinedDate}</span>
							</div>
						</div>

						<div className='mt-6'>
							<h3 className='text-md font-medium text-gray-900 mb-2'>About</h3>
							<p className='text-gray-700'>{user.bio}</p>
						</div>
					</div>
				</div>

				{/* Achievements */}
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
			</div>
		</div>
	);
}
