import React from 'react';
import { CreditCard, Check, Shield, Users, BookOpen, Star } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

export function SubscriptionManagement() {
	const { user } = useAuth();

	const plans = [
		{
			name: 'Basic',
			price: 'Free',
			features: [
				'Basic species monitoring',
				'Public educational content',
				'Community forum access',
			],
			current: user?.subscriptionStatus === 'inactive',
		},
		{
			name: 'School',
			price: '$99/month',
			features: [
				'Unlimited teacher accounts',
				'Student management tools',
				'Advanced reporting features',
				'Custom learning paths',
				'Priority support',
			],
			current:
				user?.subscriptionStatus === 'active' && user?.role === 'school_admin',
		},
		{
			name: 'Community',
			price: '$29/month',
			features: [
				'Advanced species tracking',
				'Data analysis tools',
				'Collaboration features',
				'Priority verification',
			],
			current:
				user?.subscriptionStatus === 'active' &&
				user?.role === 'community_member',
		},
	];

	return (
		<div className='min-h-screen bg-gray-50 py-12'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='text-center mb-12'>
					<h1 className='text-3xl font-bold text-gray-900 mb-4'>
						Subscription Plans
					</h1>
					<p className='text-lg text-gray-600 max-w-2xl mx-auto'>
						Choose the right plan to enhance your conservation efforts and
						educational impact
					</p>
				</div>

				<div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-12'>
					{plans.map((plan) => (
						<div
							key={plan.name}
							className={`bg-white rounded-lg shadow-lg overflow-hidden ${
								plan.current ? 'ring-2 ring-emerald-500' : ''
							}`}
						>
							<div className='p-6'>
								<h2 className='text-2xl font-bold text-gray-900 mb-2'>
									{plan.name}
								</h2>
								<p className='text-4xl font-bold text-emerald-600 mb-6'>
									{plan.price}
								</p>

								<ul className='space-y-4 mb-8'>
									{plan.features.map((feature, index) => (
										<li key={index} className='flex items-center text-gray-600'>
											<Check className='h-5 w-5 text-emerald-500 mr-3' />
											{feature}
										</li>
									))}
								</ul>

								<button
									className={`w-full py-3 px-4 rounded-lg font-medium ${
										plan.current
											? 'bg-gray-100 text-gray-600 cursor-default'
											: 'bg-emerald-600 text-white hover:bg-emerald-700'
									}`}
									disabled={plan.current}
								>
									{plan.current ? 'Current Plan' : 'Subscribe'}
								</button>
							</div>
						</div>
					))}
				</div>

				{/* Features Section */}
				<div className='grid grid-cols-1 md:grid-cols-3 gap-8 mt-16'>
					<div className='text-center'>
						<Shield className='h-12 w-12 text-emerald-600 mx-auto mb-4' />
						<h3 className='text-lg font-medium text-gray-900 mb-2'>
							Secure Platform
						</h3>
						<p className='text-gray-600'>
							Enterprise-grade security for your data and privacy
						</p>
					</div>

					<div className='text-center'>
						<Users className='h-12 w-12 text-emerald-600 mx-auto mb-4' />
						<h3 className='text-lg font-medium text-gray-900 mb-2'>
							Collaborative Tools
						</h3>
						<p className='text-gray-600'>
							Work together with your team and community
						</p>
					</div>

					<div className='text-center'>
						<BookOpen className='h-12 w-12 text-emerald-600 mx-auto mb-4' />
						<h3 className='text-lg font-medium text-gray-900 mb-2'>
							Educational Resources
						</h3>
						<p className='text-gray-600'>
							Access to premium educational content and tools
						</p>
					</div>
				</div>

				{/* Current Subscription Info */}
				{user?.subscriptionStatus === 'active' && (
					<div className='mt-12 bg-white rounded-lg shadow-lg p-6'>
						<h2 className='text-xl font-bold text-gray-900 mb-4'>
							Current Subscription
						</h2>
						<div className='flex items-center justify-between'>
							<div className='flex items-center'>
								<CreditCard className='h-6 w-6 text-emerald-600 mr-3' />
								<div>
									<p className='text-sm text-gray-600'>Next billing date:</p>
									<p className='font-medium text-gray-900'>March 25, 2024</p>
								</div>
							</div>
							<button className='text-emerald-600 hover:text-emerald-700 font-medium'>
								Manage Payment
							</button>
						</div>
					</div>
				)}
			</div>
		</div>
	);
}
