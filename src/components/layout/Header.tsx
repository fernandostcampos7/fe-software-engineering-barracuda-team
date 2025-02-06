import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-emerald-700 text-white">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Leaf className="h-8 w-8" />
            <span className="text-2xl font-bold">Komodo Hub</span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/programs" className="hover:text-emerald-200 transition">
              Programs
            </Link>
            <Link to="/sightings" className="hover:text-emerald-200 transition">
              Species Sightings
            </Link>
            <Link to="/communities" className="hover:text-emerald-200 transition">
              Communities
            </Link>
            <Link 
              to="/login" 
              className="bg-white text-emerald-700 px-4 py-2 rounded-lg hover:bg-emerald-100 transition"
            >
              Sign In
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}