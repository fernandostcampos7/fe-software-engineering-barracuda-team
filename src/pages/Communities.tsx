import React from 'react';
import {
	Users,
	MapPin,
	Calendar,
	Award,
	Search,
	Filter,
	Plus,
} from 'lucide-react';

export function Communities() {
	const communities = [
		{
			id: '1',
			name: 'Komodo Conservation Network',
			location: 'Labuan Bajo, East Nusa Tenggara',
			members: 45,
			established: '2023-06-15',
			focus: ['Komodo Dragons', 'Marine Life', 'Coastal Ecosystems'],
			achievements: 12,
			image:
				'https://images.unsplash.com/photo-1577000206091-0f65e6e8bb34?auto=format&fit=crop&q=80',
		},
		{
			id: '2',
			name: 'Raja Ampat Marine Guardians',
			location: 'Raja Ampat, West Papua',
			members: 67,
			established: '2023-04-20',
			focus: ['Coral Reefs', 'Sea Turtles', 'Marine Conservation'],
			achievements: 15,
			image:
				'https://images.unsplash.com/photo-1582967788606-a171c1080cb0?auto=format&fit=crop&q=80',
		},
	];

	return (
		<div className='min-h-screen bg-gray-50 py-12'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='flex justify-between items-center mb-8'>
					<h1 className='text-3xl font-bold text-gray-900'>
						Conservation Communities
					</h1>
					<div className='flex space-x-4'>
						<div className='relative'>
							<input
								type='text'
								placeholder='Search communities...'
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
							<span>Create Community</span>
						</button>
					</div>
				</div>

				<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
					{communities.map((community) => (
						<div
							key={community.id}
							className='bg-white shadow rounded-lg overflow-hidden'
						>
							<img
								src={community.image}
								alt={community.name}
								className='w-full h-48 object-cover'
							/>
							<div className='p-6'>
								<h2 className='text-xl font-bold text-gray-900 mb-2'>
									{community.name}
								</h2>

								<div className='space-y-3 mb-4'>
									<div className='flex items-center text-gray-600'>
										<MapPin className='h-5 w-5 mr-2 text-gray-400' />
										{community.location}
									</div>
									<div className='flex items-center text-gray-600'>
										<Users className='h-5 w-5 mr-2 text-gray-400' />
										{community.members} members
									</div>
									<div className='flex items-center text-gray-600'>
										<Calendar className='h-5 w-5 mr-2 text-gray-400' />
										Established{' '}
										{new Date(community.established).toLocaleDateString()}
									</div>
									<div className='flex items-center text-gray-600'>
										<Award className='h-5 w-5 mr-2 text-gray-400' />
										{community.achievements} achievements
									</div>
								</div>

								<div className='mb-4'>
									<h3 className='text-sm font-medium text-gray-700 mb-2'>
										Focus Areas
									</h3>
									<div className='flex flex-wrap gap-2'>
										{community.focus.map((area, index) => (
											<span
												key={index}
												className='px-3 py-1 text-sm font-medium text-emerald-700 bg-emerald-100 rounded-full'
											>
												{area}
											</span>
										))}
									</div>
								</div>

								<div className='flex justify-end'>
									<button className='text-emerald-600 hover:text-emerald-700 font-medium'>
										View Community
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
