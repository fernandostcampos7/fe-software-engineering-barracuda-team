import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Leaf className="h-6 w-6 text-emerald-500" />
              <span className="text-xl font-bold text-white">Komodo Hub</span>
            </div>
            <p className="text-sm">
              Connecting communities for Indonesian wildlife conservation.
            </p>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Programs</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/programs/schools" className="hover:text-emerald-500 transition">
                  School Programs
                </Link>
              </li>
              <li>
                <Link to="/programs/community" className="hover:text-emerald-500 transition">
                  Community Initiatives
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="hover:text-emerald-500 transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-emerald-500 transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy" className="hover:text-emerald-500 transition">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-emerald-500 transition">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="flex items-center justify-center text-sm">
            Made with <Heart className="h-4 w-4 mx-1 text-red-500" /> in Indonesia
          </p>
        </div>
      </div>
    </footer>
  );
}