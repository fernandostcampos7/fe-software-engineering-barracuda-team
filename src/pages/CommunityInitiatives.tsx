import React from 'react';
import { Link } from 'react-router-dom';
import {
	Users,
	Globe,
	FileText,
	Camera,
	ChevronRight,
	Heart,
	Share2,
	TreePine,
} from 'lucide-react';

export function CommunityInitiatives() {
	return (
		<div className='min-h-screen bg-gray-50'>
			{/* Hero Section */}
			<section className='relative py-20 bg-emerald-700'>
				<div
					className='absolute inset-0 bg-cover bg-center opacity-20'
					style={{
						backgroundImage:
							'url("https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80")',
					}}
				></div>
				<div className='relative container mx-auto px-4 text-center'>
					<h1 className='text-4xl md:text-5xl font-bold text-white mb-6'>
						Conservation Begins with Community
					</h1>
					<p className='text-xl text-white/90 max-w-3xl mx-auto mb-8'>
						Join a network of passionate conservationists working together to
						protect Indonesia's most vulnerable species through collective
						action.
					</p>
					<Link
						to='/register'
						className='inline-flex items-center px-6 py-3 text-lg font-medium text-emerald-700 bg-white rounded-lg hover:bg-gray-50 transition'
					>
						Join Our Community
						<ChevronRight className='ml-2 h-5 w-5' />
					</Link>
				</div>
			</section>

			{/* Features Grid */}
			<section className='py-16'>
				<div className='container mx-auto px-4'>
					<div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
						<div className='bg-white p-8 rounded-lg shadow-md'>
							<div className='bg-emerald-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4'>
								<Users className='h-6 w-6 text-emerald-600' />
							</div>
							<h3 className='text-xl font-bold text-gray-900 mb-3'>
								Community Network
							</h3>
							<p className='text-gray-600'>
								Connect with local groups and national conservation bodies to
								amplify your impact through collective action.
							</p>
						</div>

						<div className='bg-white p-8 rounded-lg shadow-md'>
							<div className='bg-emerald-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4'>
								<FileText className='h-6 w-6 text-emerald-600' />
							</div>
							<h3 className='text-xl font-bold text-gray-900 mb-3'>
								Knowledge Sharing
							</h3>
							<p className='text-gray-600'>
								Contribute articles, field reports, and research findings to our
								growing digital library of conservation resources.
							</p>
						</div>

						<div className='bg-white p-8 rounded-lg shadow-md'>
							<div className='bg-emerald-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4'>
								<Camera className='h-6 w-6 text-emerald-600' />
							</div>
							<h3 className='text-xl font-bold text-gray-900 mb-3'>
								Species Monitoring
							</h3>
							<p className='text-gray-600'>
								Document and report wildlife sightings to contribute to our
								national species tracking database.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Impact Stats */}
			<section className='py-16 bg-white'>
				<div className='container mx-auto px-4'>
					<h2 className='text-3xl font-bold text-center text-gray-900 mb-12'>
						Our Collective Impact
					</h2>
					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
						<div className='text-center'>
							<div className='text-4xl font-bold text-emerald-600 mb-2'>
								150+
							</div>
							<div className='text-gray-600'>Active Communities</div>
						</div>
						<div className='text-center'>
							<div className='text-4xl font-bold text-emerald-600 mb-2'>
								5,000+
							</div>
							<div className='text-gray-600'>Members Nationwide</div>
						</div>
						<div className='text-center'>
							<div className='text-4xl font-bold text-emerald-600 mb-2'>
								10,000+
							</div>
							<div className='text-gray-600'>Species Reports</div>
						</div>
						<div className='text-center'>
							<div className='text-4xl font-bold text-emerald-600 mb-2'>
								300+
							</div>
							<div className='text-gray-600'>Conservation Projects</div>
						</div>
					</div>
				</div>
			</section>

			{/* Community Showcase */}
			<section className='py-16 bg-gray-50'>
				<div className='container mx-auto px-4'>
					<h2 className='text-3xl font-bold text-center text-gray-900 mb-12'>
						Featured Communities
					</h2>
					<div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
						<div className='bg-white rounded-lg overflow-hidden shadow-md'>
							<img
								src='https://images.unsplash.com/photo-1472145246862-b24cf25c4a36?auto=format&fit=crop&q=80'
								alt='Coastal Conservation Group'
								className='w-full h-48 object-cover'
							/>
							<div className='p-6'>
								<h3 className='text-xl font-bold text-gray-900 mb-2'>
									Coastal Conservation Group
								</h3>
								<p className='text-gray-600 mb-4'>
									Protecting marine ecosystems and coastal wildlife in Raja
									Ampat.
								</p>
								<div className='flex items-center text-sm text-gray-500'>
									<Users className='h-4 w-4 mr-1' />
									<span>45 members</span>
									<Heart className='h-4 w-4 ml-4 mr-1' />
									<span>123 contributions</span>
								</div>
							</div>
						</div>

						<div className='bg-white rounded-lg overflow-hidden shadow-md'>
							<img
								src='https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&q=80'
								alt='Forest Watch Initiative'
								className='w-full h-48 object-cover'
							/>
							<div className='p-6'>
								<h3 className='text-xl font-bold text-gray-900 mb-2'>
									Forest Watch Initiative
								</h3>
								<p className='text-gray-600 mb-4'>
									Monitoring and protecting rainforest biodiversity in Borneo.
								</p>
								<div className='flex items-center text-sm text-gray-500'>
									<Users className='h-4 w-4 mr-1' />
									<span>67 members</span>
									<Heart className='h-4 w-4 ml-4 mr-1' />
									<span>245 contributions</span>
								</div>
							</div>
						</div>

						<div className='bg-white rounded-lg overflow-hidden shadow-md'>
							<img
								src='https://images.unsplash.com/photo-1575550959106-5a7defe28b56?auto=format&fit=crop&q=80'
								alt='Wildlife Rescue Network'
								className='w-full h-48 object-cover'
							/>
							<div className='p-6'>
								<h3 className='text-xl font-bold text-gray-900 mb-2'>
									Wildlife Rescue Network
								</h3>
								<p className='text-gray-600 mb-4'>
									Rehabilitating and protecting endangered species across
									Indonesia.
								</p>
								<div className='flex items-center text-sm text-gray-500'>
									<Users className='h-4 w-4 mr-1' />
									<span>89 members</span>
									<Heart className='h-4 w-4 ml-4 mr-1' />
									<span>367 contributions</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* How It Works */}
			<section className='py-16 bg-white'>
				<div className='container mx-auto px-4'>
					<h2 className='text-3xl font-bold text-center text-gray-900 mb-12'>
						How It Works
					</h2>
					<div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
						<div className='text-center'>
							<div className='bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4'>
								<Users className='h-8 w-8 text-emerald-600' />
							</div>
							<h3 className='text-lg font-semibold text-gray-900 mb-2'>
								1. Join a Community
							</h3>
							<p className='text-gray-600'>
								Register your group or join an existing community in your area
							</p>
						</div>

						<div className='text-center'>
							<div className='bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4'>
								<Share2 className='h-8 w-8 text-emerald-600' />
							</div>
							<h3 className='text-lg font-semibold text-gray-900 mb-2'>
								2. Contribute & Connect
							</h3>
							<p className='text-gray-600'>
								Share reports, participate in campaigns, and collaborate with
								others
							</p>
						</div>

						<div className='text-center'>
							<div className='bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4'>
								<TreePine className='h-8 w-8 text-emerald-600' />
							</div>
							<h3 className='text-lg font-semibold text-gray-900 mb-2'>
								3. Make an Impact
							</h3>
							<p className='text-gray-600'>
								See your contributions drive real conservation outcomes
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className='py-16 bg-emerald-700'>
				<div className='container mx-auto px-4 text-center'>
					<h2 className='text-3xl font-bold text-white mb-6'>
						Join the Movement
					</h2>
					<p className='text-xl text-white/90 mb-8 max-w-2xl mx-auto'>
						Let's turn conservation from a government burden into a national
						movement — driven by passionate people like you.
					</p>
					<div className='flex flex-col sm:flex-row gap-4 justify-center'>
						<Link
							to='/register'
							className='inline-flex items-center px-6 py-3 text-lg font-medium text-emerald-700 bg-white rounded-lg hover:bg-gray-50 transition'
						>
							Join Our Community
						</Link>
						<Link
							to='/contact'
							className='inline-flex items-center px-6 py-3 text-lg font-medium text-white border-2 border-white rounded-lg hover:bg-emerald-600 transition'
						>
							Contact Us
						</Link>
					</div>
				</div>
			</section>
		</div>
	);
}
