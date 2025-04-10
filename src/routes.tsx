import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { UserRole } from './types/auth';
import { ProtectedRoute } from './components/ProtectedRoute';
import { Home } from './pages/Home';
import { Register } from './pages/Register';
import { Login } from './pages/Login';
import { About } from './pages/About';
import { ProfileCompletion } from './pages/ProfileCompletion';
import { Profile } from './pages/Profile';
import { Unauthorized } from './pages/Unauthorized';
import { Dashboard } from './pages/Dashboard';
import { SchoolManagement } from './pages/SchoolManagement';
import { TeacherDashboard } from './pages/TeacherDashboard';
import { StudentProgress } from './pages/StudentProgress';
import { Assignments } from './pages/Assignments';
import { Activities } from './pages/Activities';
import { DataSubmission } from './pages/DataSubmission';
import { Reports } from './pages/Reports';
import { Library } from './pages/Library';
import { SpeciesPage } from './pages/Species';
import { Messaging } from './pages/Messaging';
import { SubscriptionManagement } from './pages/SubscriptionManagement';
import { Programs } from './pages/Programs';
import { SchoolPrograms } from './pages/SchoolPrograms';
import { CommunityInitiatives } from './pages/CommunityInitiatives';
import { Contact } from './pages/Contact';
import { Privacy } from './pages/Privacy';
import { Terms } from './pages/Terms';

const adminRoles: UserRole[] = ['super_admin', 'school_admin'];
const teacherRoles: UserRole[] = ['super_admin', 'school_admin', 'teacher'];
const studentRoles: UserRole[] = [
	'super_admin',
	'school_admin',
	'teacher',
	'student',
];
const communityRoles: UserRole[] = ['super_admin', 'community_member'];
const allRoles: UserRole[] = [
	'super_admin',
	'school_admin',
	'teacher',
	'student',
	'community_member',
	'public',
];

export function AppRoutes() {
	return (
		<Routes>
			{/* Public Routes */}
			<Route path='/' element={<Home />} />
			<Route path='/register' element={<Register />} />
			<Route path='/login' element={<Login />} />
			<Route path='/about' element={<About />} />
			<Route path='/unauthorized' element={<Unauthorized />} />
			<Route path='/species' element={<SpeciesPage />} />
			<Route path='/programs/schools' element={<SchoolPrograms />} />
			<Route path='/programs/community' element={<CommunityInitiatives />} />
			<Route path='/contact' element={<Contact />} />
			<Route path='/privacy' element={<Privacy />} />
			<Route path='/terms' element={<Terms />} />

			{/* Protected Routes */}
			<Route
				path='/complete-profile'
				element={
					<ProtectedRoute allowedRoles={allRoles}>
						<ProfileCompletion />
					</ProtectedRoute>
				}
			/>
			<Route
				path='/profile'
				element={
					<ProtectedRoute allowedRoles={allRoles}>
						<Profile />
					</ProtectedRoute>
				}
			/>
			<Route
				path='/dashboard'
				element={
					<ProtectedRoute allowedRoles={allRoles}>
						<Dashboard />
					</ProtectedRoute>
				}
			/>
			<Route
				path='/school-management'
				element={
					<ProtectedRoute allowedRoles={adminRoles}>
						<SchoolManagement />
					</ProtectedRoute>
				}
			/>
			<Route
				path='/teacher-dashboard'
				element={
					<ProtectedRoute allowedRoles={teacherRoles}>
						<TeacherDashboard />
					</ProtectedRoute>
				}
			/>
			<Route
				path='/student-progress'
				element={
					<ProtectedRoute allowedRoles={teacherRoles}>
						<StudentProgress />
					</ProtectedRoute>
				}
			/>
			<Route
				path='/assignments'
				element={
					<ProtectedRoute allowedRoles={studentRoles}>
						<Assignments />
					</ProtectedRoute>
				}
			/>
			<Route
				path='/activities'
				element={
					<ProtectedRoute allowedRoles={studentRoles}>
						<Activities />
					</ProtectedRoute>
				}
			/>
			<Route
				path='/data-submission'
				element={
					<ProtectedRoute allowedRoles={communityRoles}>
						<DataSubmission />
					</ProtectedRoute>
				}
			/>
			<Route
				path='/reports'
				element={
					<ProtectedRoute
						allowedRoles={teacherRoles.concat(['community_member'])}
					>
						<Reports />
					</ProtectedRoute>
				}
			/>
			<Route
				path='/library'
				element={
					<ProtectedRoute allowedRoles={allRoles}>
						<Library />
					</ProtectedRoute>
				}
			/>
			<Route
				path='/messaging'
				element={
					<ProtectedRoute allowedRoles={allRoles}>
						<Messaging />
					</ProtectedRoute>
				}
			/>
			<Route
				path='/subscription'
				element={
					<ProtectedRoute allowedRoles={allRoles}>
						<SubscriptionManagement />
					</ProtectedRoute>
				}
			/>

			<Route
				path='/programs'
				element={
					<ProtectedRoute
						allowedRoles={[
							...adminRoles,
							...teacherRoles,
							...communityRoles,
							'student',
						]}
					>
						<Programs />
					</ProtectedRoute>
				}
			/>
		</Routes>
	);
}
