import React from 'react';
import { School, Users, BookOpen } from 'lucide-react';

export function SchoolManagement() {
	return (
		<div className='min-h-screen bg-gray-50 py-12'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<h1 className='text-3xl font-bold text-gray-900 mb-8'>
					School Management
				</h1>

				<div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'>
					<div className='bg-white overflow-hidden shadow rounded-lg'>
						<div className='p-5'>
							<div className='flex items-center'>
								<div className='flex-shrink-0'>
									<School className='h-6 w-6 text-emerald-600' />
								</div>
								<div className='ml-5'>
									<h3 className='text-lg font-medium text-gray-900'>
										School Overview
									</h3>
									<p className='text-sm text-gray-500'>
										View and manage school details
									</p>
								</div>
							</div>
						</div>
						<div className='bg-gray-50 px-5 py-3'>
							<div className='text-sm'>
								<span className='font-medium text-emerald-600'>12 Classes</span>
								<span className='mx-2'>·</span>
								<span className='font-medium text-emerald-600'>
									450 Students
								</span>
							</div>
						</div>
					</div>

					<div className='bg-white overflow-hidden shadow rounded-lg'>
						<div className='p-5'>
							<div className='flex items-center'>
								<div className='flex-shrink-0'>
									<Users className='h-6 w-6 text-emerald-600' />
								</div>
								<div className='ml-5'>
									<h3 className='text-lg font-medium text-gray-900'>
										Staff Management
									</h3>
									<p className='text-sm text-gray-500'>
										Manage teachers and staff
									</p>
								</div>
							</div>
						</div>
						<div className='bg-gray-50 px-5 py-3'>
							<div className='text-sm'>
								<span className='font-medium text-emerald-600'>
									25 Teachers
								</span>
								<span className='mx-2'>·</span>
								<span className='font-medium text-emerald-600'>8 Staff</span>
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
									<h3 className='text-lg font-medium text-gray-900'>
										Curriculum
									</h3>
									<p className='text-sm text-gray-500'>
										Manage educational programs
									</p>
								</div>
							</div>
						</div>
						<div className='bg-gray-50 px-5 py-3'>
							<div className='text-sm'>
								<span className='font-medium text-emerald-600'>6 Programs</span>
								<span className='mx-2'>·</span>
								<span className='font-medium text-emerald-600'>24 Courses</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
