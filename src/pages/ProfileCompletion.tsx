import React from 'react';
import { useNavigate } from 'react-router-dom';
import { z } from 'zod';
import { UserRole } from '../types/auth';
import { User, School, Users } from 'lucide-react';

const profileCompletionSchema = z.object({
  firstName: z.string().min(2, 'First name is required'),
  lastName: z.string().min(2, 'Last name is required'),
  role: z.enum(['school_admin', 'teacher', 'student', 'community_member', 'public'] as const),
  schoolId: z.string().optional(),
  communityId: z.string().optional(),
});

type ProfileCompletionForm = z.infer<typeof profileCompletionSchema>;

export function ProfileCompletion() {
  const navigate = useNavigate();
  const [formData, setFormData] = React.useState<ProfileCompletionForm>({
    firstName: '',
    lastName: '',
    role: 'public',
    schoolId: '',
    communityId: '',
  });
  const [errors, setErrors] = React.useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      profileCompletionSchema.parse(formData);
      
      // TODO: Update user profile in Supabase
      console.log('Profile completed:', formData);
      
      navigate('/dashboard');
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

  const showSchoolId = ['school_admin', 'teacher', 'student'].includes(formData.role);
  const showCommunityId = formData.role === 'community_member';

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Complete Your Profile
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Please provide additional information to complete your registration
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Name Fields */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                  First Name
                </label>
                <div className="mt-1 relative">
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    required
                    className={`appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm ${
                      errors.firstName ? 'border-red-300' : 'border-gray-300'
                    }`}
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                  <User className="h-5 w-5 text-gray-400 absolute right-3 top-2" />
                </div>
                {errors.firstName && (
                  <p className="mt-2 text-sm text-red-600">{errors.firstName}</p>
                )}
              </div>

              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                  Last Name
                </label>
                <div className="mt-1 relative">
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    required
                    className={`appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm ${
                      errors.lastName ? 'border-red-300' : 'border-gray-300'
                    }`}
                    value={formData.lastName}
                    onChange={handleChange}
                  />
                  <User className="h-5 w-5 text-gray-400 absolute right-3 top-2" />
                </div>
                {errors.lastName && (
                  <p className="mt-2 text-sm text-red-600">{errors.lastName}</p>
                )}
              </div>
            </div>

            {/* Role Selection */}
            <div>
              <label htmlFor="role" className="block text-sm font-medium text-gray-700">
                Role
              </label>
              <div className="mt-1 relative">
                <select
                  id="role"
                  name="role"
                  required
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm"
                  value={formData.role}
                  onChange={handleChange}
                >
                  <option value="public">Public Member</option>
                  <option value="school_admin">School Administrator</option>
                  <option value="teacher">Teacher</option>
                  <option value="student">Student</option>
                  <option value="community_member">Community Member</option>
                </select>
              </div>
            </div>

            {/* Conditional Fields */}
            {showSchoolId && (
              <div>
                <label htmlFor="schoolId" className="block text-sm font-medium text-gray-700">
                  School ID
                </label>
                <div className="mt-1 relative">
                  <input
                    id="schoolId"
                    name="schoolId"
                    type="text"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm"
                    value={formData.schoolId}
                    onChange={handleChange}
                  />
                  <School className="h-5 w-5 text-gray-400 absolute right-3 top-2" />
                </div>
              </div>
            )}

            {showCommunityId && (
              <div>
                <label htmlFor="communityId" className="block text-sm font-medium text-gray-700">
                  Community ID
                </label>
                <div className="mt-1 relative">
                  <input
                    id="communityId"
                    name="communityId"
                    type="text"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm"
                    value={formData.communityId}
                    onChange={handleChange}
                  />
                  <Users className="h-5 w-5 text-gray-400 absolute right-3 top-2" />
                </div>
              </div>
            )}

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
              >
                Complete Profile
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}