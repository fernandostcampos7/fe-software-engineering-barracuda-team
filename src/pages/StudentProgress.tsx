import React from 'react';
import { TrendingUp, Award, Clock, BookOpen } from 'lucide-react';

export function StudentProgress() {
	const students = [
		{
			name: 'Alex Johnson',
			progress: 85,
			assignments: 12,
			hours: 24,
			achievements: 3,
		},
		{
			name: 'Maria Garcia',
			progress: 92,
			assignments: 15,
			hours: 28,
			achievements: 4,
		},
		{
			name: 'James Wilson',
			progress: 78,
			assignments: 10,
			hours: 20,
			achievements: 2,
		},
	];

	return (
		<div className='min-h-screen bg-gray-50 py-12'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<h1 className='text-3xl font-bold text-gray-900 mb-8'>
					Student Progress
				</h1>

				<div className='grid gap-6'>
					{students.map((student, index) => (
						<div
							key={index}
							className='bg-white shadow rounded-lg overflow-hidden'
						>
							<div className='p-6'>
								<div className='flex items-center justify-between mb-4'>
									<h2 className='text-xl font-semibold text-gray-900'>
										{student.name}
									</h2>
									<div className='flex items-center'>
										<TrendingUp className='h-5 w-5 text-emerald-600 mr-2' />
										<span className='text-lg font-medium text-emerald-600'>
											{student.progress}% Complete
										</span>
									</div>
								</div>

								<div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
									<div className='flex items-center p-4 bg-gray-50 rounded-lg'>
										<BookOpen className='h-6 w-6 text-emerald-600' />
										<div className='ml-4'>
											<p className='text-sm font-medium text-gray-500'>
												Assignments
											</p>
											<p className='text-lg font-semibold text-gray-900'>
												{student.assignments}
											</p>
										</div>
									</div>

									<div className='flex items-center p-4 bg-gray-50 rounded-lg'>
										<Clock className='h-6 w-6 text-emerald-600' />
										<div className='ml-4'>
											<p className='text-sm font-medium text-gray-500'>
												Study Hours
											</p>
											<p className='text-lg font-semibold text-gray-900'>
												{student.hours}
											</p>
										</div>
									</div>

									<div className='flex items-center p-4 bg-gray-50 rounded-lg'>
										<Award className='h-6 w-6 text-emerald-600' />
										<div className='ml-4'>
											<p className='text-sm font-medium text-gray-500'>
												Achievements
											</p>
											<p className='text-lg font-semibold text-gray-900'>
												{student.achievements}
											</p>
										</div>
									</div>
								</div>

								<div className='mt-6'>
									<div className='relative pt-1'>
										<div className='flex mb-2 items-center justify-between'>
											<div>
												<span className='text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-emerald-600 bg-emerald-200'>
													Progress
												</span>
											</div>
											<div className='text-right'>
												<span className='text-xs font-semibold inline-block text-emerald-600'>
													{student.progress}%
												</span>
											</div>
										</div>
										<div className='overflow-hidden h-2 mb-4 text-xs flex rounded bg-emerald-200'>
											<div
												style={{ width: `${student.progress}%` }}
												className='shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-emerald-500'
											></div>
										</div>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
