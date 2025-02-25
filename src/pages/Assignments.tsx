import React from 'react';
import { BookOpen, Clock, CheckCircle, AlertCircle } from 'lucide-react';

export function Assignments() {
	const assignments = [
		{
			title: 'Wildlife Documentation',
			dueDate: '2024-03-20',
			status: 'completed',
			score: 95,
			description: 'Document local wildlife species and their habitats.',
		},
		{
			title: 'Conservation Project',
			dueDate: '2024-03-25',
			status: 'in-progress',
			description: 'Develop a conservation plan for an endangered species.',
		},
		{
			title: 'Ecosystem Analysis',
			dueDate: '2024-03-30',
			status: 'pending',
			description: 'Analyze the local ecosystem and its components.',
		},
	];

	return (
		<div className='min-h-screen bg-gray-50 py-12'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='flex justify-between items-center mb-8'>
					<h1 className='text-3xl font-bold text-gray-900'>Assignments</h1>
					<button className='bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition'>
						Submit Assignment
					</button>
				</div>

				<div className='grid gap-6'>
					{assignments.map((assignment, index) => (
						<div
							key={index}
							className='bg-white shadow rounded-lg overflow-hidden'
						>
							<div className='p-6'>
								<div className='flex items-center justify-between mb-4'>
									<div className='flex items-center'>
										<BookOpen className='h-6 w-6 text-emerald-600 mr-3' />
										<h2 className='text-xl font-semibold text-gray-900'>
											{assignment.title}
										</h2>
									</div>
									<div className='flex items-center'>
										<Clock className='h-5 w-5 text-gray-400 mr-2' />
										<span className='text-sm text-gray-500'>
											Due: {assignment.dueDate}
										</span>
									</div>
								</div>

								<p className='text-gray-600 mb-4'>{assignment.description}</p>

								<div className='flex items-center justify-between'>
									<div className='flex items-center'>
										{assignment.status === 'completed' ? (
											<>
												<CheckCircle className='h-5 w-5 text-green-500 mr-2' />
												<span className='text-green-500 font-medium'>
													Completed
												</span>
												<span className='ml-4 text-gray-500'>
													Score: {assignment.score}%
												</span>
											</>
										) : assignment.status === 'in-progress' ? (
											<>
												<div className='h-5 w-5 text-yellow-500 mr-2'>
													<svg className='animate-spin' viewBox='0 0 24 24'>
														<circle
															className='opacity-25'
															cx='12'
															cy='12'
															r='10'
															stroke='currentColor'
															strokeWidth='4'
															fill='none'
														/>
														<path
															className='opacity-75'
															fill='currentColor'
															d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
														/>
													</svg>
												</div>
												<span className='text-yellow-500 font-medium'>
													In Progress
												</span>
											</>
										) : (
											<>
												<AlertCircle className='h-5 w-5 text-red-500 mr-2' />
												<span className='text-red-500 font-medium'>
													Pending
												</span>
											</>
										)}
									</div>
									<button className='text-emerald-600 hover:text-emerald-700 font-medium'>
										View Details
									</button>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
