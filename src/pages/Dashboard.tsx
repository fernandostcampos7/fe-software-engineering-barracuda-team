import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { ROLE_PERMISSIONS } from '../types/auth';
import { Link } from 'react-router-dom';
import {
	Layout,
	School,
	Users,
	BookOpen,
	FileSpreadsheet,
	Activity,
	ClipboardList,
} from 'lucide-react';

export function Dashboard() {
	const { user } = useAuth();

	if (!user) return null;

	const rolePermissions = ROLE_PERMISSIONS[user.role];
	const allowedPages = rolePermissions.allowedPages;

	const menuItems = [
		{
			title: 'School Management',
			path: '/school-management',
			icon: School,
			roles: ['super_admin', 'school_admin'],
		},
		{
			title: 'Teacher Dashboard',
			path: '/teacher-dashboard',
			icon: Layout,
			roles: ['super_admin', 'school_admin', 'teacher'],
		},
		{
			title: 'Student Progress',
			path: '/student-progress',
			icon: Users,
			roles: ['super_admin', 'school_admin', 'teacher'],
		},
		{
			title: 'Assignments',
			path: '/assignments',
			icon: BookOpen,
			roles: ['super_admin', 'school_admin', 'teacher', 'student'],
		},
		{
			title: 'Activities',
			path: '/activities',
			icon: Activity,
			roles: ['super_admin', 'school_admin', 'teacher', 'student'],
		},
		{
			title: 'Data Submission',
			path: '/data-submission',
			icon: ClipboardList,
			roles: ['super_admin', 'community_member'],
		},
		{
			title: 'Reports',
			path: '/reports',
			icon: FileSpreadsheet,
			roles: ['super_admin', 'school_admin', 'teacher', 'community_member'],
		},
	];

	const userMenuItems = menuItems.filter(
		(item) => item.roles.includes(user.role) || user.role === 'super_admin'
	);

	return (
		<div className='min-h-screen bg-gray-50 py-12'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='text-center'>
					<h1 className='text-3xl font-bold text-gray-900'>
						Welcome, {user.firstName}!
					</h1>
					<p className='mt-2 text-sm text-gray-600'>
						{rolePermissions.description}
					</p>
				</div>

				<div className='mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'>
					{userMenuItems.map((item) => (
						<Link
							key={item.path}
							to={item.path}
							className='group relative bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow'
						>
							<div className='flex items-center'>
								<div className='flex-shrink-0'>
									<item.icon className='h-6 w-6 text-emerald-600' />
								</div>
								<div className='ml-4'>
									<h3 className='text-lg font-medium text-gray-900 group-hover:text-emerald-600 transition-colors'>
										{item.title}
									</h3>
								</div>
							</div>
						</Link>
					))}
				</div>
			</div>
		</div>
	);
}
