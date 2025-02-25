import React from 'react';
import { Search, Filter, Camera, MapPin, AlertTriangle } from 'lucide-react';
import { Species } from '../types/auth';

export function SpeciesPage() {
	const species: Species[] = [
		{
			id: '1',
			name: 'Komodo Dragon',
			scientificName: 'Varanus komodoensis',
			conservationStatus: 'VU',
			description:
				'The largest living species of lizard, found in Indonesian islands.',
			habitat: 'Indonesian islands of Komodo, Rinca, Flores, and Gili Motang',
			threats: ['Habitat loss', 'Human conflict', 'Tourism impact'],
			images: [
				'https://images.unsplash.com/photo-1577000206091-0f65e6e8bb34?auto=format&fit=crop&q=80',
			],
		},
		// Add more species as needed
	];

	const getStatusColor = (status: Species['conservationStatus']) => {
		const colors = {
			LC: 'bg-green-100 text-green-800',
			NT: 'bg-yellow-100 text-yellow-800',
			VU: 'bg-orange-100 text-orange-800',
			EN: 'bg-red-100 text-red-800',
			CR: 'bg-red-200 text-red-900',
			EW: 'bg-purple-100 text-purple-800',
			EX: 'bg-gray-100 text-gray-800',
		};
		return colors[status];
	};

	return (
		<div className='min-h-screen bg-gray-50 py-12'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='flex justify-between items-center mb-8'>
					<h1 className='text-3xl font-bold text-gray-900'>Species Database</h1>
					<div className='flex space-x-4'>
						<div className='relative'>
							<input
								type='text'
								placeholder='Search species...'
								className='w-64 px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-transparent'
							/>
							<Search className='absolute right-3 top-2.5 h-5 w-5 text-gray-400' />
						</div>
						<button className='flex items-center space-x-2 bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition'>
							<Filter className='h-5 w-5' />
							<span>Filter</span>
						</button>
					</div>
				</div>

				<div className='grid gap-6'>
					{species.map((species) => (
						<div
							key={species.id}
							className='bg-white shadow rounded-lg overflow-hidden'
						>
							<div className='p-6'>
								<div className='flex items-center justify-between mb-4'>
									<div>
										<h2 className='text-2xl font-semibold text-gray-900'>
											{species.name}
										</h2>
										<p className='text-sm text-gray-500 italic'>
											{species.scientificName}
										</p>
									</div>
									<span
										className={`px-3 py-1 text-sm font-medium rounded-full ${getStatusColor(
											species.conservationStatus
										)}`}
									>
										{species.conservationStatus}
									</span>
								</div>

								<div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
									<div>
										<img
											src={species.images[0]}
											alt={species.name}
											className='w-full h-64 object-cover rounded-lg'
										/>
									</div>

									<div className='space-y-4'>
										<div>
											<h3 className='text-lg font-medium text-gray-900 mb-2'>
												Description
											</h3>
											<p className='text-gray-600'>{species.description}</p>
										</div>

										<div>
											<h3 className='text-lg font-medium text-gray-900 mb-2'>
												Habitat
											</h3>
											<div className='flex items-center text-gray-600'>
												<MapPin className='h-5 w-5 mr-2 text-gray-400' />
												{species.habitat}
											</div>
										</div>

										<div>
											<h3 className='text-lg font-medium text-gray-900 mb-2'>
												Threats
											</h3>
											<div className='space-y-2'>
												{species.threats.map((threat, index) => (
													<div
														key={index}
														className='flex items-center text-gray-600'
													>
														<AlertTriangle className='h-5 w-5 mr-2 text-red-400' />
														{threat}
													</div>
												))}
											</div>
										</div>
									</div>
								</div>

								<div className='mt-6 flex justify-end space-x-4'>
									<button className='flex items-center space-x-2 text-emerald-600 hover:text-emerald-700 font-medium'>
										<Camera className='h-5 w-5' />
										<span>Report Sighting</span>
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
