import React from 'react';
import { Link } from 'react-router-dom';
import {
	BookOpen,
	Users,
	Award,
	Leaf,
	Shield,
	Brain,
	Target,
	ChevronRight,
} from 'lucide-react';

export function SchoolPrograms() {
	return (
		<div className='min-h-screen bg-gray-50'>
			{/* Hero Section */}
			<section className='relative py-20 bg-emerald-700'>
				<div
					className='absolute inset-0 bg-cover bg-center opacity-20'
					style={{
						backgroundImage:
							'url("https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&q=80")',
					}}
				></div>
				<div className='relative container mx-auto px-4 text-center'>
					<h1 className='text-4xl md:text-5xl font-bold text-white mb-6'>
						Inspire the Next Generation of Conservationists
					</h1>
					<p className='text-xl text-white/90 max-w-3xl mx-auto mb-8'>
						Partner with Komodo Hub to integrate conservation education into
						everyday learning, empowering students to explore, identify, and
						protect Indonesia's endangered species.
					</p>
					<Link
						to='/register'
						className='inline-flex items-center px-6 py-3 text-lg font-medium text-emerald-700 bg-white rounded-lg hover:bg-gray-50 transition'
					>
						Enroll Your School
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
								<BookOpen className='h-6 w-6 text-emerald-600' />
							</div>
							<h3 className='text-xl font-bold text-gray-900 mb-3'>
								Digital Curriculum
							</h3>
							<p className='text-gray-600'>
								Access our comprehensive digital syllabus tools and customize
								lessons to fit your teaching style and student needs.
							</p>
						</div>

						<div className='bg-white p-8 rounded-lg shadow-md'>
							<div className='bg-emerald-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4'>
								<Users className='h-6 w-6 text-emerald-600' />
							</div>
							<h3 className='text-xl font-bold text-gray-900 mb-3'>
								Interactive Learning
							</h3>
							<p className='text-gray-600'>
								Engage students with hands-on activities, digital resources, and
								participation in national conservation campaigns.
							</p>
						</div>

						<div className='bg-white p-8 rounded-lg shadow-md'>
							<div className='bg-emerald-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4'>
								<Award className='h-6 w-6 text-emerald-600' />
							</div>
							<h3 className='text-xl font-bold text-gray-900 mb-3'>
								Progress Tracking
							</h3>
							<p className='text-gray-600'>
								Monitor student achievements, manage assignments, and showcase
								their contributions in a secure digital environment.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Program Benefits */}
			<section className='py-16 bg-white'>
				<div className='container mx-auto px-4'>
					<h2 className='text-3xl font-bold text-center text-gray-900 mb-12'>
						Program Benefits
					</h2>
					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
						<div className='text-center'>
							<div className='bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4'>
								<Leaf className='h-8 w-8 text-emerald-600' />
							</div>
							<h3 className='text-lg font-semibold text-gray-900 mb-2'>
								Environmental Education
							</h3>
							<p className='text-gray-600'>
								Integrate conservation into your core curriculum
							</p>
						</div>

						<div className='text-center'>
							<div className='bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4'>
								<Shield className='h-8 w-8 text-emerald-600' />
							</div>
							<h3 className='text-lg font-semibold text-gray-900 mb-2'>
								Data Protection
							</h3>
							<p className='text-gray-600'>
								Secure platform with protected student information
							</p>
						</div>

						<div className='text-center'>
							<div className='bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4'>
								<Brain className='h-8 w-8 text-emerald-600' />
							</div>
							<h3 className='text-lg font-semibold text-gray-900 mb-2'>
								Flexible Learning
							</h3>
							<p className='text-gray-600'>
								Adaptable resources for different grade levels
							</p>
						</div>

						<div className='text-center'>
							<div className='bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4'>
								<Target className='h-8 w-8 text-emerald-600' />
							</div>
							<h3 className='text-lg font-semibold text-gray-900 mb-2'>
								Real Impact
							</h3>
							<p className='text-gray-600'>
								Contribute to actual conservation efforts
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Featured Species */}
			<section className='py-16 bg-gray-50'>
				<div className='container mx-auto px-4'>
					<h2 className='text-3xl font-bold text-center text-gray-900 mb-12'>
						Featured Species in Our Curriculum
					</h2>
					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
						<div className='bg-white rounded-lg overflow-hidden shadow-md'>
							<img
								src='https://images.unsplash.com/photo-1577000206091-0f65e6e8bb34?auto=format&fit=crop&q=80'
								alt='Komodo Dragon'
								className='w-full h-48 object-cover'
							/>
							<div className='p-6'>
								<h3 className='text-xl font-bold text-gray-900 mb-2'>
									Komodo Dragon
								</h3>
								<p className='text-gray-600'>
									Learn about Indonesia's iconic species and their unique
									ecosystem.
								</p>
							</div>
						</div>

						<div className='bg-white rounded-lg overflow-hidden shadow-md'>
							<img
								src='https://images.unsplash.com/photo-1577907544870-fb52cf3a9f00?auto=format&fit=crop&q=80'
								alt='Javan Rhinoceros'
								className='w-full h-48 object-cover'
							/>
							<div className='p-6'>
								<h3 className='text-xl font-bold text-gray-900 mb-2'>
									Javan Rhinoceros
								</h3>
								<p className='text-gray-600'>
									Discover the conservation efforts protecting these rare
									creatures.
								</p>
							</div>
						</div>

						<div className='bg-white rounded-lg overflow-hidden shadow-md'>
							<img
								src='https://images.unsplash.com/photo-1612024782955-49fae79b0f41?auto=format&fit=crop&q=80'
								alt='Bali Myna'
								className='w-full h-48 object-cover'
							/>
							<div className='p-6'>
								<h3 className='text-xl font-bold text-gray-900 mb-2'>
									Bali Myna
								</h3>
								<p className='text-gray-600'>
									Study the recovery program of Indonesia's critically
									endangered bird.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className='py-16 bg-emerald-700'>
				<div className='container mx-auto px-4 text-center'>
					<h2 className='text-3xl font-bold text-white mb-6'>
						Ready to Join Our Conservation Education Network?
					</h2>
					<p className='text-xl text-white/90 mb-8 max-w-2xl mx-auto'>
						Get access to our full suite of content, classroom activities, and
						reporting tools designed for flexible integration into your
						curriculum.
					</p>
					<div className='flex flex-col sm:flex-row gap-4 justify-center'>
						<Link
							to='/register'
							className='inline-flex items-center px-6 py-3 text-lg font-medium text-emerald-700 bg-white rounded-lg hover:bg-gray-50 transition'
						>
							Enroll Your School
						</Link>
						<Link
							to='/contact'
							className='inline-flex items-center px-6 py-3 text-lg font-medium text-white border-2 border-white rounded-lg hover:bg-emerald-600 transition'
						>
							Learn More
						</Link>
					</div>
				</div>
			</section>
		</div>
	);
}
