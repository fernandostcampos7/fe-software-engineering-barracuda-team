import React from 'react';
import { Upload, Camera, FileText, Map } from 'lucide-react';

export function DataSubmission() {
	return (
		<div className='min-h-screen bg-gray-50 py-12'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<h1 className='text-3xl font-bold text-gray-900 mb-8'>
					Data Submission
				</h1>

				<div className='bg-white shadow rounded-lg overflow-hidden'>
					<div className='p-6'>
						<div className='mb-8'>
							<h2 className='text-xl font-semibold text-gray-900 mb-4'>
								Submit Wildlife Observation
							</h2>

							<form className='space-y-6'>
								<div>
									<label className='block text-sm font-medium text-gray-700'>
										Species Name
									</label>
									<input
										type='text'
										className='mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-emerald-500 focus:border-emerald-500'
										placeholder='Enter species name'
									/>
								</div>

								<div>
									<label className='block text-sm font-medium text-gray-700'>
										Location
									</label>
									<div className='mt-1 flex items-center'>
										<input
											type='text'
											className='block w-full border-gray-300 rounded-md shadow-sm focus:ring-emerald-500 focus:border-emerald-500'
											placeholder='Enter location'
										/>
										<button
											type='button'
											className='ml-3 inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50'
										>
											<Map className='h-5 w-5 text-gray-400 mr-2' />
											Use GPS
										</button>
									</div>
								</div>

								<div>
									<label className='block text-sm font-medium text-gray-700'>
										Description
									</label>
									<textarea
										rows={4}
										className='mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-emerald-500 focus:border-emerald-500'
										placeholder='Describe your observation'
									/>
								</div>

								<div>
									<label className='block text-sm font-medium text-gray-700'>
										Upload Photos
									</label>
									<div className='mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md'>
										<div className='space-y-1 text-center'>
											<Camera className='mx-auto h-12 w-12 text-gray-400' />
											<div className='flex text-sm text-gray-600'>
												<label
													htmlFor='file-upload'
													className='relative cursor-pointer bg-white rounded-md font-medium text-emerald-600 hover:text-emerald-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-emerald-500'
												>
													<span>Upload files</span>
													<input
														id='file-upload'
														name='file-upload'
														type='file'
														className='sr-only'
														multiple
													/>
												</label>
												<p className='pl-1'>or drag and drop</p>
											</div>
											<p className='text-xs text-gray-500'>
												PNG, JPG, GIF up to 10MB
											</p>
										</div>
									</div>
								</div>

								<div>
									<label className='block text-sm font-medium text-gray-700'>
										Additional Files
									</label>
									<div className='mt-1 flex items-center'>
										<button
											type='button'
											className='inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50'
										>
											<FileText className='h-5 w-5 text-gray-400 mr-2' />
											Attach Files
										</button>
									</div>
								</div>

								<div className='flex justify-end'>
									<button
										type='submit'
										className='inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500'
									>
										<Upload className='h-5 w-5 mr-2' />
										Submit Data
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
