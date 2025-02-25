import React from 'react';
import { BarChart, PieChart, LineChart, Download } from 'lucide-react';

export function Reports() {
	return (
		<div className='min-h-screen bg-gray-50 py-12'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='flex justify-between items-center mb-8'>
					<h1 className='text-3xl font-bold text-gray-900'>
						Conservation Reports
					</h1>
					<button className='bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition'>
						Generate Report
					</button>
				</div>

				<div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
					{/* Species Observations */}
					<div className='bg-white shadow rounded-lg overflow-hidden'>
						<div className='p-6'>
							<div className='flex items-center justify-between mb-4'>
								<h2 className='text-xl font-semibold text-gray-900'>
									Species Observations
								</h2>
								<button className='text-emerald-600 hover:text-emerald-700'>
									<Download className='h-5 w-5' />
								</button>
							</div>
							<div className='h-64 bg-gray-50 rounded-lg flex items-center justify-center'>
								<BarChart className='h-40 w-40 text-emerald-600' />
							</div>
							<div className='mt-4'>
								<p className='text-sm text-gray-500'>
									Total observations this month: 156
								</p>
							</div>
						</div>
					</div>

					{/* Conservation Status */}
					<div className='bg-white shadow rounded-lg overflow-hidden'>
						<div className='p-6'>
							<div className='flex items-center justify-between mb-4'>
								<h2 className='text-xl font-semibold text-gray-900'>
									Conservation Status
								</h2>
								<button className='text-emerald-600 hover:text-emerald-700'>
									<Download className='h-5 w-5' />
								</button>
							</div>
							<div className='h-64 bg-gray-50 rounded-lg flex items-center justify-center'>
								<PieChart className='h-40 w-40 text-emerald-600' />
							</div>
							<div className='mt-4'>
								<p className='text-sm text-gray-500'>
									Species by conservation status
								</p>
							</div>
						</div>
					</div>

					{/* Activity Trends */}
					<div className='bg-white shadow rounded-lg overflow-hidden'>
						<div className='p-6'>
							<div className='flex items-center justify-between mb-4'>
								<h2 className='text-xl font-semibold text-gray-900'>
									Activity Trends
								</h2>
								<button className='text-emerald-600 hover:text-emerald-700'>
									<Download className='h-5 w-5' />
								</button>
							</div>
							<div className='h-64 bg-gray-50 rounded-lg flex items-center justify-center'>
								<LineChart className='h-40 w-40 text-emerald-600' />
							</div>
							<div className='mt-4'>
								<p className='text-sm text-gray-500'>
									Conservation activities over time
								</p>
							</div>
						</div>
					</div>

					{/* Recent Reports */}
					<div className='bg-white shadow rounded-lg overflow-hidden'>
						<div className='p-6'>
							<h2 className='text-xl font-semibold text-gray-900 mb-4'>
								Recent Reports
							</h2>
							<div className='space-y-4'>
								{[
									{
										title: 'Monthly Biodiversity Report',
										date: '2024-03-01',
										status: 'completed',
									},
									{
										title: 'Conservation Impact Analysis',
										date: '2024-02-15',
										status: 'completed',
									},
									{
										title: 'Species Population Survey',
										date: '2024-02-01',
										status: 'completed',
									},
								].map((report, index) => (
									<div
										key={index}
										className='flex items-center justify-between p-4 bg-gray-50 rounded-lg'
									>
										<div>
											<h3 className='font-medium text-gray-900'>
												{report.title}
											</h3>
											<p className='text-sm text-gray-500'>{report.date}</p>
										</div>
										<button className='text-emerald-600 hover:text-emerald-700'>
											<Download className='h-5 w-5' />
										</button>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
