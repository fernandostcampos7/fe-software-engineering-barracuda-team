import React from 'react';
import { useNavigate } from 'react-router-dom';
import { z } from 'zod';
import { User, School, Users, MapPin } from 'lucide-react';

// Role schema including super_admin
const profileCompletionSchema = z.object({
	firstName: z.string().min(2, 'First name is required'),
	lastName: z.string().min(2, 'Last name is required'),
	role: z.enum([
		'super_admin',
		'school_admin',
		'teacher',
		'student',
		'community_member',
		'public',
	]),
	schoolId: z.string().optional(),
	communityId: z.string().optional(),
	location: z.string().min(2, 'Location is required'),
	bio: z
		.string()
		.min(10, 'Bio should be at least 10 characters')
		.max(500, 'Bio should not exceed 500 characters'),
});

type ProfileCompletionForm = z.infer<typeof profileCompletionSchema>;

export function ProfileCompletion() {
	const navigate = useNavigate();

	// Example: Replace these with actual values from your auth or backend
	const isOAuth = true; // Replace with actual check (e.g., from context or props)
	const predefinedRole = 'super_admin'; // Replace with actual role from backend/auth state

	// 🚨 Add this effect to automatically skip profile completion if super_admin
	React.useEffect(() => {
		if (predefinedRole === 'super_admin') {
			navigate('/admin-dashboard'); // Immediately redirect
		}
	}, [predefinedRole, navigate]);

	const [formData, setFormData] = React.useState<ProfileCompletionForm>({
		firstName: '',
		lastName: '',
		role: predefinedRole ?? 'public',
		schoolId: '',
		communityId: '',
		location: '',
		bio: '',
	});

	const [errors, setErrors] = React.useState<Record<string, string>>({});

	const handleChange = (
		e: React.ChangeEvent<
			HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
		>
	) => {
		const { name, value } = e.target;

		// Block role change if pre-defined
		if (name === 'role' && isOAuth && predefinedRole) return;

		setFormData((prev) => ({ ...prev, [name]: value }));
		if (errors[name]) {
			setErrors((prev) => ({ ...prev, [name]: '' }));
		}
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		try {
			profileCompletionSchema.parse(formData);

			// TODO: Send data to your backend / Supabase
			console.log('Profile completed:', formData);

			navigate('/profile');
		} catch (error) {
			if (error instanceof z.ZodError) {
				const newErrors: Record<string, string> = {};
				error.errors.forEach((err) => {
					if (err.path) {
						newErrors[err.path[0]] = err.message;
					}
				});
				setErrors(newErrors);
			}
		}
	};

	const showSchoolId = ['school_admin', 'teacher', 'student'].includes(
		formData.role
	);
	const showCommunityId = formData.role === 'community_member';

	return (
		<div className='min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8'>
			<div className='sm:mx-auto sm:w-full sm:max-w-md'>
				<h2 className='mt-6 text-center text-3xl font-extrabold text-gray-900'>
					Complete Your Profile
				</h2>
				<p className='mt-2 text-center text-sm text-gray-600'>
					Please provide additional information to complete your registration
				</p>
			</div>

			<div className='mt-8 sm:mx-auto sm:w-full sm:max-w-md'>
				<div className='bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10'>
					<form className='space-y-6' onSubmit={handleSubmit}>
						<div className='grid grid-cols-2 gap-4'>
							<div>
								<label
									htmlFor='firstName'
									className='block text-sm font-medium text-gray-700'
								>
									First Name
								</label>
								<input
									id='firstName'
									name='firstName'
									type='text'
									value={formData.firstName}
									onChange={handleChange}
									className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm'
								/>
							</div>

							<div>
								<label
									htmlFor='lastName'
									className='block text-sm font-medium text-gray-700'
								>
									Last Name
								</label>
								<input
									id='lastName'
									name='lastName'
									type='text'
									value={formData.lastName}
									onChange={handleChange}
									className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm'
								/>
							</div>
						</div>

						<div>
							<label
								htmlFor='role'
								className='block text-sm font-medium text-gray-700'
							>
								Role
							</label>
							<select
								id='role'
								name='role'
								value={formData.role}
								onChange={handleChange}
								disabled={isOAuth && predefinedRole === 'super_admin'}
								className='block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm'
							>
								<option value='public'>Public Member</option>
								<option value='school_admin'>School Administrator</option>
								<option value='teacher'>Teacher</option>
								<option value='student'>Student</option>
								<option value='community_member'>Community Member</option>
							</select>
							{isOAuth && predefinedRole === 'super_admin' && (
								<p className='mt-1 text-sm text-gray-500'>
									Role is pre-assigned and cannot be changed.
								</p>
							)}
						</div>

						<div>
							<label
								htmlFor='location'
								className='block text-sm font-medium text-gray-700'
							>
								Location
							</label>
							<input
								id='location'
								name='location'
								type='text'
								value={formData.location}
								onChange={handleChange}
								className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm'
							/>
						</div>

						<div>
							<label
								htmlFor='bio'
								className='block text-sm font-medium text-gray-700'
							>
								About
							</label>
							<textarea
								id='bio'
								name='bio'
								rows={4}
								value={formData.bio}
								onChange={handleChange}
								className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm'
							/>
						</div>

						{showSchoolId && (
							<div>
								<label htmlFor='schoolId'>School ID</label>
								<input
									id='schoolId'
									name='schoolId'
									type='text'
									value={formData.schoolId}
									onChange={handleChange}
								/>
							</div>
						)}

						{showCommunityId && (
							<div>
								<label htmlFor='communityId'>Community ID</label>
								<input
									id='communityId'
									name='communityId'
									type='text'
									value={formData.communityId}
									onChange={handleChange}
								/>
							</div>
						)}

						<button type='submit'>Complete Profile</button>
					</form>
				</div>
			</div>
		</div>
	);
}
