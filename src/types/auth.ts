import { z } from "zod";

export type UserRole =
	| 'super_admin'
	| 'school_admin'
	| 'teacher'
	| 'student'
	| 'community_member'
	| 'public';

export const registerSchema = z
	.object({
		email: z.string().email('Invalid email address'),
		password: z.string().min(8, 'Password must be at least 8 characters'),
		confirmPassword: z.string(),
		firstName: z.string().min(2, 'First name is required'),
		lastName: z.string().min(2, 'Last name is required'),
		role: z.enum([
			'school_admin',
			'teacher',
			'student',
			'community_member',
			'public',
		] as const),
		schoolId: z.string().optional(),
		communityId: z.string().optional(),
		accessCode: z.string().optional(),
	})
	.refine((data) => data.password === data.confirmPassword, {
		message: "Passwords don't match",
		path: ['confirmPassword'],
	})
	.refine(
		(data) => {
			if (['super_admin', 'school_admin'].includes(data.role)) {
				return !!data.accessCode;
			}
			return true;
		},
		{
			message: 'Access code is required for admin roles',
			path: ['accessCode'],
		}
	);

export type RegisterForm = z.infer<typeof registerSchema>;

export interface User {
	id: string;
	email: string;
	role: UserRole;
	firstName: string;
	lastName: string;
	schoolId?: string;
	communityId?: string;
	location?: string;
	bio?: string;
	createdAt: string;
	updatedAt: string;
	// Added new fields
	isPublicProfile?: boolean;
	subscriptionStatus?: 'active' | 'inactive' | 'pending';
	accessCode?: string;
	achievements?: Achievement[];
}

export interface Achievement {
	id: string;
	title: string;
	description: string;
	dateEarned: string;
	type: 'conservation' | 'education' | 'community';
}

export interface Species {
	id: string;
	name: string;
	scientificName: string;
	conservationStatus: 'LC' | 'NT' | 'VU' | 'EN' | 'CR' | 'EW' | 'EX';
	description: string;
	habitat: string;
	threats: string[];
	images: string[];
}

export interface Sighting {
	id: string;
	speciesId: string;
	userId: string;
	location: {
		latitude: number;
		longitude: number;
		description: string;
	};
	date: string;
	images: string[];
	description: string;
	status: 'pending' | 'verified' | 'rejected';
	verifiedBy?: string;
}

export interface Assignment {
	id: string;
	title: string;
	description: string;
	dueDate: string;
	type: 'report' | 'activity' | 'challenge';
	createdBy: string;
	schoolId: string;
	status: 'active' | 'completed' | 'archived';
	submissions?: AssignmentSubmission[];
}

export interface AssignmentSubmission {
	id: string;
	assignmentId: string;
	userId: string;
	content: string;
	attachments: string[];
	submittedAt: string;
	feedback?: {
		teacherId: string;
		comment: string;
		grade?: number;
		givenAt: string;
	};
}

export const ROLE_PERMISSIONS = {
	super_admin: {
		allowedPages: ['*'],
		description: 'Full access to all features',
	},
	school_admin: {
		allowedPages: [
			'/dashboard',
			'/school-management',
			'/teachers',
			'/students',
			'/assignments',
			'/reports',
			'/profile',
			'/species',
			'/sightings',
			'/library',
		],
		description: 'School management and oversight',
	},
	teacher: {
		allowedPages: [
			'/dashboard',
			'/assignments',
			'/student-progress',
			'/reports',
			'/profile',
			'/species',
			'/sightings',
			'/library',
			'/messaging',
		],
		description: 'Teaching and student management',
	},
	student: {
		allowedPages: [
			'/dashboard',
			'/assignments',
			'/activities',
			'/profile',
			'/species',
			'/sightings',
			'/library',
			'/messaging',
		],
		description: 'Learning and activities',
	},
	community_member: {
		allowedPages: [
			'/dashboard',
			'/reporting',
			'/data-submission',
			'/profile',
			'/species',
			'/sightings',
			'/library',
			'/community',
		],
		description: 'Community participation and reporting',
	},
	public: {
		allowedPages: [
			'/',
			'/about',
			'/educational-content',
			'/profile',
			'/species',
			'/sightings',
		],
		description: 'Public access to educational content',
	},
} as const;
