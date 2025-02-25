import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldAlert } from 'lucide-react';

export function Unauthorized() {
	return (
		<div className='min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8'>
			<div className='sm:mx-auto sm:w-full sm:max-w-md text-center'>
				<ShieldAlert className='mx-auto h-12 w-12 text-red-500' />
				<h2 className='mt-6 text-3xl font-extrabold text-gray-900'>
					Access Denied
				</h2>
				<p className='mt-2 text-sm text-gray-600'>
					You don't have permission to access this page.
				</p>
				<div className='mt-8'>
					<Link
						to='/'
						className='inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-emerald-600 hover:bg-emerald-700'
					>
						Return to Home
					</Link>
				</div>
			</div>
		</div>
	);
}
