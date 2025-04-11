import React from 'react';
import {
	Camera,
	MapPin,
	Calendar,
	User,
	Filter,
	Search,
	Plus,
} from 'lucide-react';
import { Sighting } from '../types/auth';

export function Sightings() {
	const sightings: Sighting[] = [
		{
			id: '1',
			speciesId: '1',
			userId: '1',
			location: {
				latitude: -8.5855,
				longitude: 119.4367,
				description: 'Komodo National Park, Flores',
			},
			date: '2024-03-15',
			images: [
				'https://images.unsplash.com/photo-1577000206091-0f65e6e8bb34?auto=format&fit=crop&q=80',
			],
			description: 'Adult Komodo dragon observed during morning patrol',
			status: 'verified',
			verifiedBy: 'Dr. Sarah Johnson',
		},
	];

	return (
		<div className='min-h-screen bg-gray-50 py-12'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='flex justify-between items-center mb-8'>
					<h1 className='text-3xl font-bold text-gray-900'>
						Species Sightings
					</h1>
					<div className='flex space-x-4'>
						<div className='relative'>
							<input
								type='text'
								placeholder='Search sightings...'
								className='w-64 px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-transparent'
							/>
							<Search className='absolute right-3 top-2.5 h-5 w-5 text-gray-400' />
						</div>
						<button className='flex items-center space-x-2 bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition'>
							<Filter className='h-5 w-5' />
							<span>Filter</span>
						</button>
						<button className='flex items-center space-x-2 bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition'>
							<Plus className='h-5 w-5' />
							<span>Report Sighting</span>
						</button>
					</div>
				</div>

				<div className='grid gap-6'>
					{sightings.map((sighting) => (
						<div
							key={sighting.id}
							className='bg-white shadow rounded-lg overflow-hidden'
						>
							<div className='p-6'>
								<div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
									<div>
										<img
											src={sighting.images[0]}
											alt='Species sighting'
											className='w-full h-64 object-cover rounded-lg'
										/>
									</div>

									<div className='space-y-4'>
										<div className='flex items-center justify-between'>
											<span
												className={`px-3 py-1 text-sm font-medium rounded-full ${
													sighting.status === 'verified'
														? 'bg-green-100 text-green-800'
														: sighting.status === 'pending'
														? 'bg-yellow-100 text-yellow-800'
														: 'bg-red-100 text-red-800'
												}`}
											>
												{sighting.status.charAt(0).toUpperCase() +
													sighting.status.slice(1)}
											</span>
											{sighting.verifiedBy && (
												<span className='text-sm text-gray-500'>
													Verified by: {sighting.verifiedBy}
												</span>
											)}
										</div>

										<div className='space-y-2'>
											<div className='flex items-center text-gray-600'>
												<MapPin className='h-5 w-5 mr-2 text-gray-400' />
												{sighting.location.description}
											</div>
											<div className='flex items-center text-gray-600'>
												<Calendar className='h-5 w-5 mr-2 text-gray-400' />
												{sighting.date}
											</div>
											<div className='flex items-center text-gray-600'>
												<User className='h-5 w-5 mr-2 text-gray-400' />
												Reported by: Community Member
											</div>
										</div>

										<p className='text-gray-600'>{sighting.description}</p>

										<div className='flex justify-end space-x-4'>
											<button className='flex items-center space-x-2 text-emerald-600 hover:text-emerald-700 font-medium'>
												<Camera className='h-5 w-5' />
												<span>View Photos</span>
											</button>
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
