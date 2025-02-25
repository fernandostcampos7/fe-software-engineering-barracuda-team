import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
	Leaf,
	UserCircle2,
	LogOut,
	MessageSquare,
	CreditCard,
} from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { ROLE_PERMISSIONS } from '../../types/auth';

export function Header() {
	const { user, signOut } = useAuth();
	const navigate = useNavigate();

	const handleSignOut = async () => {
		try {
			await signOut();
			navigate('/');
		} catch (error) {
			console.error('Sign out error:', error);
		}
	};

	const isAllowed = (path: string) => {
		if (!user) return true;
		const permissions = ROLE_PERMISSIONS[user.role];
		return (
			permissions.allowedPages.includes('*') ||
			permissions.allowedPages.includes(path)
		);
	};

	const handleNavigation = (
		e: React.MouseEvent<HTMLAnchorElement>,
		path: string
	) => {
		if (!isAllowed(path)) {
			e.preventDefault();
			navigate('/unauthorized');
		}
	};

	return (
		<header className='bg-emerald-700 text-white'>
			<div className='container mx-auto px-4 py-4'>
				<div className='flex items-center justify-between'>
					<Link to='/' className='flex items-center space-x-2'>
						<Leaf className='h-8 w-8' />
						<span className='text-2xl font-bold'>Komodo Hub</span>
					</Link>

					<nav className='hidden md:flex items-center space-x-8'>
						<Link
							to='/programs'
							className='hover:text-emerald-200 transition'
							onClick={(e) => handleNavigation(e, '/programs')}
						>
							Programs
						</Link>
						<Link
							to='/sightings'
							className='hover:text-emerald-200 transition'
							onClick={(e) => handleNavigation(e, '/sightings')}
						>
							Species Sightings
						</Link>
						<Link
							to='/communities'
							className='hover:text-emerald-200 transition'
							onClick={(e) => handleNavigation(e, '/communities')}
						>
							Communities
						</Link>
						{user ? (
							<div className='flex items-center space-x-4'>
								<Link
									to='/messaging'
									className='hover:text-emerald-200 transition'
									onClick={(e) => handleNavigation(e, '/messaging')}
								>
									<MessageSquare className='h-6 w-6' />
								</Link>
								<Link
									to='/subscription'
									className='hover:text-emerald-200 transition'
									onClick={(e) => handleNavigation(e, '/subscription')}
								>
									<CreditCard className='h-6 w-6' />
								</Link>
								<Link
									to='/profile'
									className='hover:text-emerald-200 transition flex items-center space-x-2'
									onClick={(e) => handleNavigation(e, '/profile')}
								>
									<UserCircle2 className='h-6 w-6' />
									<span>{user.firstName}</span>
								</Link>
								<button
									onClick={handleSignOut}
									className='flex items-center space-x-2 hover:text-emerald-200 transition'
								>
									<LogOut className='h-5 w-5' />
									<span>Sign Out</span>
								</button>
							</div>
						) : (
							<Link
								to='/login'
								className='bg-white text-emerald-700 px-4 py-2 rounded-lg hover:bg-emerald-100 transition'
							>
								Sign In
							</Link>
						)}
					</nav>
				</div>
			</div>
		</header>
	);
}
