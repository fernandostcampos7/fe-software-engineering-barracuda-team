import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { UserRole } from '../types/auth';
interface ProtectedRouteProps {
	children: React.ReactNode;
	allowedRoles: UserRole[];
}

export function ProtectedRoute({
	children,
	allowedRoles,
}: ProtectedRouteProps) {
	const { user, isLoading } = useAuth();
	const location = useLocation();

	console.log('User:', user);
	console.log('Allowed roles:', allowedRoles);
	if (user) {
		console.log('User role:', user.role);
	}

	if (isLoading) {
		return <div>Loading...</div>;
	}

	if (!user) {
		return <Navigate to='/login' state={{ from: location }} replace />;
	}

	if (!allowedRoles.includes(user.role)) {
		return <Navigate to='/unauthorized' replace />;
	}

	return <>{children}</>;
}
