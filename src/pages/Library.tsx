import React from 'react';
import { Book, BookOpen, Download, Search } from 'lucide-react';

export function Library() {
	const resources = [
		{
			title: 'Komodo Dragon Conservation Guide',
			type: 'Guide',
			author: 'Dr. Jane Smith',
			date: '2024-02-15',
			category: 'Species Conservation',
		},
		{
			title: 'Indonesian Wildlife Photography',
			type: 'Resource',
			author: 'John Doe',
			date: '2024-02-10',
			category: 'Documentation',
		},
		{
			title: 'Marine Ecosystem Protection',
			type: 'Research',
			author: 'Dr. Maria Garcia',
			date: '2024-02-05',
			category: 'Marine Conservation',
		},
	];

	return (
		<div className='min-h-screen bg-gray-50 py-12'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='flex justify-between items-center mb-8'>
					<h1 className='text-3xl font-bold text-gray-900'>Digital Library</h1>
					<div className='flex space-x-4'>
						<div className='relative'>
							<input
								type='text'
								placeholder='Search resources...'
								className='w-64 px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-transparent'
							/>
							<Search className='absolute right-3 top-2.5 h-5 w-5 text-gray-400' />
						</div>
						<button className='bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition'>
							Upload Resource
						</button>
					</div>
				</div>

				<div className='grid gap-6'>
					{resources.map((resource, index) => (
						<div
							key={index}
							className='bg-white shadow rounded-lg overflow-hidden'
						>
							<div className='p-6'>
								<div className='flex items-center justify-between mb-4'>
									<div className='flex items-center'>
										<Book className='h-6 w-6 text-emerald-600 mr-3' />
										<div>
											<h2 className='text-xl font-semibold text-gray-900'>
												{resource.title}
											</h2>
											<p className='text-sm text-gray-500'>{resource.type}</p>
										</div>
									</div>
									<span className='px-3 py-1 text-sm font-medium text-emerald-700 bg-emerald-100 rounded-full'>
										{resource.category}
									</span>
								</div>

								<div className='grid grid-cols-1 md:grid-cols-3 gap-4 mb-4'>
									<div className='flex items-center'>
										<BookOpen className='h-5 w-5 text-gray-400 mr-2' />
										<span className='text-gray-600'>By {resource.author}</span>
									</div>
									<div className='flex items-center'>
										<span className='text-gray-600'>
											Added: {resource.date}
										</span>
									</div>
								</div>

								<div className='mt-4 flex justify-end'>
									<button className='flex items-center text-emerald-600 hover:text-emerald-700 font-medium'>
										<Download className='h-5 w-5 mr-2' />
										Download
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
