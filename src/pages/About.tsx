import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, Shield, Users, School, Globe2, Heart } from 'lucide-react';

export function About() {
	return (
		<div className='flex flex-col'>
			{/* Hero Section */}
			<section className='relative py-20 bg-emerald-700'>
				<div className='container mx-auto px-4'>
					<div className='text-center text-white'>
						<h1 className='text-4xl md:text-5xl font-bold mb-6'>
							Protecting Indonesia's Wildlife Through Community Action
						</h1>
						<p className='text-xl max-w-3xl mx-auto'>
							Komodo Hub connects schools, communities, and conservationists to
							create a powerful network for wildlife protection and education.
						</p>
					</div>
				</div>
			</section>

			{/* Mission Section */}
			<section className='py-16 bg-white'>
				<div className='container mx-auto px-4'>
					<div className='max-w-3xl mx-auto text-center'>
						<h2 className='text-3xl font-bold mb-8'>Our Mission</h2>
						<p className='text-lg text-gray-600 mb-8'>
							We believe that lasting conservation success comes through
							education and community engagement. Our platform empowers local
							communities and schools to become active participants in
							protecting Indonesia's unique biodiversity.
						</p>
						<div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
							<div className='flex flex-col items-center'>
								<div className='bg-emerald-100 p-4 rounded-full mb-4'>
									<School className='h-8 w-8 text-emerald-600' />
								</div>
								<h3 className='text-xl font-semibold mb-2'>Education</h3>
								<p className='text-gray-600'>
									Empowering students through conservation education
								</p>
							</div>
							<div className='flex flex-col items-center'>
								<div className='bg-emerald-100 p-4 rounded-full mb-4'>
									<Users className='h-8 w-8 text-emerald-600' />
								</div>
								<h3 className='text-xl font-semibold mb-2'>Community</h3>
								<p className='text-gray-600'>
									Building networks of local conservation champions
								</p>
							</div>
							<div className='flex flex-col items-center'>
								<div className='bg-emerald-100 p-4 rounded-full mb-4'>
									<Shield className='h-8 w-8 text-emerald-600' />
								</div>
								<h3 className='text-xl font-semibold mb-2'>Protection</h3>
								<p className='text-gray-600'>
									Safeguarding endangered species through collective action
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Impact Section */}
			<section className='py-16 bg-gray-50'>
				<div className='container mx-auto px-4'>
					<h2 className='text-3xl font-bold text-center mb-12'>Our Impact</h2>
					<div className='grid grid-cols-1 md:grid-cols-4 gap-8 text-center'>
						<div>
							<div className='text-4xl font-bold text-emerald-600 mb-2'>
								50+
							</div>
							<div className='text-gray-600'>Schools Engaged</div>
						</div>
						<div>
							<div className='text-4xl font-bold text-emerald-600 mb-2'>
								1,000+
							</div>
							<div className='text-gray-600'>Students Involved</div>
						</div>
						<div>
							<div className='text-4xl font-bold text-emerald-600 mb-2'>
								25+
							</div>
							<div className='text-gray-600'>Conservation Programs</div>
						</div>
						<div>
							<div className='text-4xl font-bold text-emerald-600 mb-2'>
								100+
							</div>
							<div className='text-gray-600'>Species Monitored</div>
						</div>
					</div>
				</div>
			</section>

			{/* How It Works Section */}
			<section className='py-16 bg-white'>
				<div className='container mx-auto px-4'>
					<h2 className='text-3xl font-bold text-center mb-12'>How It Works</h2>
					<div className='grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto'>
						<div className='bg-gray-50 p-6 rounded-lg'>
							<div className='bg-emerald-100 w-12 h-12 rounded-full flex items-center justify-center mb-4'>
								<School className='h-6 w-6 text-emerald-600' />
							</div>
							<h3 className='text-xl font-semibold mb-2'>
								Schools & Education
							</h3>
							<p className='text-gray-600'>
								Schools join our platform to integrate conservation into their
								curriculum and engage students in hands-on learning.
							</p>
						</div>
						<div className='bg-gray-50 p-6 rounded-lg'>
							<div className='bg-emerald-100 w-12 h-12 rounded-full flex items-center justify-center mb-4'>
								<Globe2 className='h-6 w-6 text-emerald-600' />
							</div>
							<h3 className='text-xl font-semibold mb-2'>Community Action</h3>
							<p className='text-gray-600'>
								Local communities contribute their knowledge and participate in
								conservation initiatives.
							</p>
						</div>
						<div className='bg-gray-50 p-6 rounded-lg'>
							<div className='bg-emerald-100 w-12 h-12 rounded-full flex items-center justify-center mb-4'>
								<Leaf className='h-6 w-6 text-emerald-600' />
							</div>
							<h3 className='text-xl font-semibold mb-2'>
								Conservation Impact
							</h3>
							<p className='text-gray-600'>
								Together, we monitor wildlife, protect habitats, and ensure a
								sustainable future.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className='py-16 bg-emerald-700'>
				<div className='container mx-auto px-4 text-center'>
					<h2 className='text-3xl font-bold text-white mb-8'>
						Join Our Conservation Community
					</h2>
					<p className='text-xl text-white mb-8 max-w-2xl mx-auto'>
						Whether you're a school, community organization, or passionate
						individual, there's a place for you in our conservation network.
					</p>
					<div className='flex flex-col sm:flex-row gap-4 justify-center'>
						<Link
							to='/register'
							className='inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-emerald-700 bg-white hover:bg-gray-50 transition'
						>
							Get Started
						</Link>
						<Link
							to='/contact'
							className='inline-flex items-center justify-center px-6 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-emerald-600 transition'
						>
							Contact Us
						</Link>
					</div>
				</div>
			</section>
		</div>
	);
}
