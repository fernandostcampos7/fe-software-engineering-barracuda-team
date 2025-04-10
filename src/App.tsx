import { BrowserRouter as Router } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AuthProvider } from './contexts/AuthContext';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { AppRoutes } from './routes';

const queryClient = new QueryClient();

function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<Router>
				<AuthProvider>
					<div className='min-h-screen flex flex-col'>
						<Header />
						<main className='flex-grow'>
							<AppRoutes/>
						</main>
						<Footer />
					</div>
				</AuthProvider>
			</Router>
		</QueryClientProvider>
	);
}

export default App;
