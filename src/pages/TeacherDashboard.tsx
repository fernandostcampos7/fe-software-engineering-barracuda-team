import React from 'react';
import { Users, BookOpen, Activity, Clock } from 'lucide-react';

export function TeacherDashboard() {
	return (
		<div className='min-h-screen bg-gray-50 py-12'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<h1 className='text-3xl font-bold text-gray-900 mb-8'>
					Teacher Dashboard
				</h1>

				<div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4'>
					<div className='bg-white overflow-hidden shadow rounded-lg'>
						<div className='p-5'>
							<div className='flex items-center'>
								<div className='flex-shrink-0'>
									<Users className='h-6 w-6 text-emerald-600' />
								</div>
								<div className='ml-5'>
									<h3 className='text-lg font-medium text-gray-900'>
										Students
									</h3>
									<p className='mt-1 text-3xl font-semibold text-gray-900'>
										125
									</p>
								</div>
							</div>
						</div>
					</div>

					<div className='bg-white overflow-hidden shadow rounded-lg'>
						<div className='p-5'>
							<div className='flex items-center'>
								<div className='flex-shrink-0'>
									<BookOpen className='h-6 w-6 text-emerald-600' />
								</div>
								<div className='ml-5'>
									<h3 className='text-lg font-medium text-gray-900'>Classes</h3>
									<p className='mt-1 text-3xl font-semibold text-gray-900'>4</p>
								</div>
							</div>
						</div>
					</div>

					<div className='bg-white overflow-hidden shadow rounded-lg'>
						<div className='p-5'>
							<div className='flex items-center'>
								<div className='flex-shrink-0'>
									<Activity className='h-6 w-6 text-emerald-600' />
								</div>
								<div className='ml-5'>
									<h3 className='text-lg font-medium text-gray-900'>
										Activities
									</h3>
									<p className='mt-1 text-3xl font-semibold text-gray-900'>
										12
									</p>
								</div>
							</div>
						</div>
					</div>

					<div className='bg-white overflow-hidden shadow rounded-lg'>
						<div className='p-5'>
							<div className='flex items-center'>
								<div className='flex-shrink-0'>
									<Clock className='h-6 w-6 text-emerald-600' />
								</div>
								<div className='ml-5'>
									<h3 className='text-lg font-medium text-gray-900'>Hours</h3>
									<p className='mt-1 text-3xl font-semibold text-gray-900'>
										32
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className='mt-8 bg-white shadow rounded-lg'>
					<div className='px-4 py-5 sm:p-6'>
						<h3 className='text-lg font-medium text-gray-900'>
							Upcoming Classes
						</h3>
						<div className='mt-4 divide-y divide-gray-200'>
							{[
								{ time: '09:00 AM', class: 'Biology 101', students: 30 },
								{
									time: '11:00 AM',
									class: 'Environmental Science',
									students: 25,
								},
								{
									time: '02:00 PM',
									class: 'Wildlife Conservation',
									students: 28,
								},
							].map((item, index) => (
								<div key={index} className='py-4'>
									<div className='flex items-center justify-between'>
										<div>
											<p className='text-sm font-medium text-gray-900'>
												{item.class}
											</p>
											<p className='text-sm text-gray-500'>{item.time}</p>
										</div>
										<div className='text-sm text-gray-500'>
											{item.students} students
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
