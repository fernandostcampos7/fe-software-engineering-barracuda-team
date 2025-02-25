import React from 'react';
import { Activity, MapPin, Users, Calendar } from 'lucide-react';

export function Activities() {
	const activities = [
		{
			title: 'Komodo Dragon Observation',
			type: 'Field Study',
			location: 'Komodo National Park',
			date: '2024-03-25',
			participants: 15,
			status: 'upcoming',
			description:
				'Observe and document Komodo dragon behavior in their natural habitat.',
		},
		{
			title: 'Coral Reef Conservation',
			type: 'Conservation',
			location: 'Raja Ampat',
			date: '2024-04-02',
			participants: 20,
			status: 'upcoming',
			description:
				'Participate in coral reef restoration and marine life documentation.',
		},
		{
			title: 'Rainforest Biodiversity Survey',
			type: 'Research',
			location: 'Borneo Rainforest',
			date: '2024-04-15',
			participants: 12,
			status: 'upcoming',
			description:
				'Conduct surveys of plant and animal species in the rainforest ecosystem.',
		},
	];

	return (
		<div className='min-h-screen bg-gray-50 py-12'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='flex justify-between items-center mb-8'>
					<h1 className='text-3xl font-bold text-gray-900'>
						Conservation Activities
					</h1>
					<button className='bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition'>
						Join Activity
					</button>
				</div>

				<div className='grid gap-6'>
					{activities.map((activity, index) => (
						<div
							key={index}
							className='bg-white shadow rounded-lg overflow-hidden'
						>
							<div className='p-6'>
								<div className='flex items-center justify-between mb-4'>
									<div className='flex items-center'>
										<Activity className='h-6 w-6 text-emerald-600 mr-3' />
										<div>
											<h2 className='text-xl font-semibold text-gray-900'>
												{activity.title}
											</h2>
											<p className='text-sm text-gray-500'>{activity.type}</p>
										</div>
									</div>
									<span className='px-3 py-1 text-sm font-medium text-emerald-700 bg-emerald-100 rounded-full'>
										{activity.status}
									</span>
								</div>

								<p className='text-gray-600 mb-6'>{activity.description}</p>

								<div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
									<div className='flex items-center'>
										<MapPin className='h-5 w-5 text-gray-400 mr-2' />
										<span className='text-gray-600'>{activity.location}</span>
									</div>

									<div className='flex items-center'>
										<Calendar className='h-5 w-5 text-gray-400 mr-2' />
										<span className='text-gray-600'>{activity.date}</span>
									</div>

									<div className='flex items-center'>
										<Users className='h-5 w-5 text-gray-400 mr-2' />
										<span className='text-gray-600'>
											{activity.participants} participants
										</span>
									</div>
								</div>

								<div className='mt-6 flex justify-end'>
									<button className='text-emerald-600 hover:text-emerald-700 font-medium mr-4'>
										Learn More
									</button>
									<button className='bg-emerald-100 text-emerald-700 px-4 py-2 rounded-lg hover:bg-emerald-200 transition'>
										Register
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
