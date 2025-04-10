import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export function Contact() {
	const teamMembers = [
		{
			name: 'Kashish Sarsar',
			role: 'Student',
			studentId: '14566011',
			email: 'kashishk3@coventry.ac.uk',
			image:
				'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
		},
		{
			name: 'Fernando Campos',
			role: 'Student',
			studentId: '13105242',
			email: 'santanadef@coventry.ac.uk',
			image:
				'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
		},
		{
			name: 'Gulam Kolakkadan',
			role: 'Student',
			studentId: '14730737',
			email: 'kolakkadag@coventry.ac.uk',
			image:
				'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
		},
		{
			name: 'Marios Christodoulou',
			role: 'Student',
			studentId: '14052558',
			email: 'christod3@coventry.ac.uk',
			image:
				'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
		},
	];

	return (
		<div className='min-h-screen bg-gray-50 py-12'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='text-center mb-12'>
					<h1 className='text-4xl font-bold text-gray-900 mb-4'>Contact Us</h1>
					<p className='text-lg text-gray-600 max-w-3xl mx-auto'>
						Have questions about Komodo Hub or want to get involved in our
						conservation efforts? Reach out to our team or contact one of our
						student developers directly.
					</p>
				</div>

				{/* Contact Form Section */}
				<div className='grid grid-cols-1 md:grid-cols-2 gap-12 mb-16'>
					<div className='bg-white rounded-lg shadow-lg p-8'>
						<h2 className='text-2xl font-bold text-gray-900 mb-6'>
							Send Us a Message
						</h2>
						<form className='space-y-6'>
							<div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
								<div>
									<label
										htmlFor='firstName'
										className='block text-sm font-medium text-gray-700 mb-1'
									>
										First Name
									</label>
									<input
										type='text'
										id='firstName'
										className='w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-transparent'
									/>
								</div>
								<div>
									<label
										htmlFor='lastName'
										className='block text-sm font-medium text-gray-700 mb-1'
									>
										Last Name
									</label>
									<input
										type='text'
										id='lastName'
										className='w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-transparent'
									/>
								</div>
							</div>
							<div>
								<label
									htmlFor='email'
									className='block text-sm font-medium text-gray-700 mb-1'
								>
									Email
								</label>
								<input
									type='email'
									id='email'
									className='w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-transparent'
								/>
							</div>
							<div>
								<label
									htmlFor='subject'
									className='block text-sm font-medium text-gray-700 mb-1'
								>
									Subject
								</label>
								<input
									type='text'
									id='subject'
									className='w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-transparent'
								/>
							</div>
							<div>
								<label
									htmlFor='message'
									className='block text-sm font-medium text-gray-700 mb-1'
								>
									Message
								</label>
								<textarea
									id='message'
									rows={5}
									className='w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-transparent'
								></textarea>
							</div>
							<button
								type='submit'
								className='w-full bg-emerald-600 text-white px-6 py-3 rounded-md font-medium hover:bg-emerald-700 transition flex items-center justify-center'
							>
								<Send className='h-5 w-5 mr-2' />
								Send Message
							</button>
						</form>
					</div>

					<div className='bg-white rounded-lg shadow-lg p-8'>
						<h2 className='text-2xl font-bold text-gray-900 mb-6'>
							Contact Information
						</h2>
						<div className='space-y-6'>
							<div className='flex items-start'>
								<Mail className='h-6 w-6 text-emerald-600 mt-1 mr-4' />
								<div>
									<h3 className='text-lg font-medium text-gray-900'>Email</h3>
									<p className='text-gray-600'>info@komodohub.org</p>
									<p className='text-gray-600'>support@komodohub.org</p>
								</div>
							</div>
							<div className='flex items-start'>
								<Phone className='h-6 w-6 text-emerald-600 mt-1 mr-4' />
								<div>
									<h3 className='text-lg font-medium text-gray-900'>Phone</h3>
									<p className='text-gray-600'>+62 812 3456 7890</p>
									<p className='text-gray-600'>+62 878 9012 3456</p>
								</div>
							</div>
							<div className='flex items-start'>
								<MapPin className='h-6 w-6 text-emerald-600 mt-1 mr-4' />
								<div>
									<h3 className='text-lg font-medium text-gray-900'>
										Location
									</h3>
									<p className='text-gray-600'>
										Komodo Conservation Center
										<br />
										Jl. Raya Labuan Bajo
										<br />
										East Nusa Tenggara, Indonesia
									</p>
								</div>
							</div>
						</div>
						<div className='mt-8'>
							<h3 className='text-lg font-medium text-gray-900 mb-4'>
								Office Hours
							</h3>
							<div className='grid grid-cols-2 gap-2 text-gray-600'>
								<div>Monday - Friday</div>
								<div>9:00 AM - 5:00 PM</div>
								<div>Saturday</div>
								<div>10:00 AM - 2:00 PM</div>
								<div>Sunday</div>
								<div>Closed</div>
							</div>
						</div>
					</div>
				</div>

				{/* Team Members Section */}
				<div className='mb-16'>
					<h2 className='text-3xl font-bold text-gray-900 text-center mb-12'>
						Our Team
					</h2>
					<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
						{teamMembers.map((member, index) => (
							<div
								key={index}
								className='bg-white rounded-lg shadow-lg overflow-hidden'
							>
								<img
									src={member.image}
									alt={member.name}
									className='w-full h-64 object-cover'
								/>
								<div className='p-6'>
									<h3 className='text-xl font-bold text-gray-900'>
										{member.name}
									</h3>
									<p className='text-gray-600 mb-2'>{member.role}</p>
									<p className='text-gray-600 mb-4'>
										Student ID: {member.studentId}
									</p>
									<a
										href={`mailto:${member.email}`}
										className='flex items-center text-emerald-600 hover:text-emerald-700'
									>
										<Mail className='h-5 w-5 mr-2' />
										{member.email}
									</a>
								</div>
							</div>
						))}
					</div>
				</div>

				{/* Map Section */}
				<div className='bg-white rounded-lg shadow-lg p-8 mb-16'>
					<h2 className='text-2xl font-bold text-gray-900 mb-6'>Find Us</h2>
					<div className='h-96 bg-gray-200 rounded-lg flex items-center justify-center'>
						<p className='text-gray-600'>
							Interactive map would be displayed here
						</p>
					</div>
				</div>

				{/* FAQ Section */}
				<div className='mb-16'>
					<h2 className='text-3xl font-bold text-gray-900 text-center mb-12'>
						Frequently Asked Questions
					</h2>
					<div className='space-y-6 max-w-4xl mx-auto'>
						{[
							{
								question: 'How can I get involved in conservation efforts?',
								answer:
									"You can join as a community member, volunteer for field activities, or if you're a student, participate through your school's programs.",
							},
							{
								question: 'Do you offer educational programs for schools?',
								answer:
									'Yes, we provide comprehensive educational programs for schools at all levels. Contact us for more information on how to integrate conservation education into your curriculum.',
							},
							{
								question: 'How can I report wildlife sightings?',
								answer:
									'You can report wildlife sightings through our platform after creating an account. Your reports help us track and protect endangered species.',
							},
							{
								question: 'Is there a mobile app available?',
								answer:
									"We're currently developing a mobile application that will make it easier to report sightings and access educational content on the go.",
							},
						].map((faq, index) => (
							<div key={index} className='bg-white rounded-lg shadow-md p-6'>
								<h3 className='text-lg font-medium text-gray-900 mb-2'>
									{faq.question}
								</h3>
								<p className='text-gray-600'>{faq.answer}</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
