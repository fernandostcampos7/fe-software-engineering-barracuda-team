import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Users, School, Eye } from 'lucide-react';

export function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section 
        className="relative h-[600px] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://images.unsplash.com/photo-1577000206091-0f65e6e8bb34?auto=format&fit=crop&q=80")'
        }}
      >
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl font-bold mb-6">
            Protecting Indonesia's Wildlife Together
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join our community of schools and conservationists working to preserve Indonesia's unique biodiversity
          </p>
          <div className="flex justify-center gap-4">
            <Link
              to="/register"
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-lg font-semibold transition"
            >
              Get Started
            </Link>
            <Link
              to="/about"
              className="bg-white hover:bg-gray-100 text-emerald-700 px-8 py-3 rounded-lg font-semibold transition"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            How Komodo Hub Works
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <School className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">School Programs</h3>
              <p className="text-gray-600">
                Integrate conservation education into your curriculum
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Community Action</h3>
              <p className="text-gray-600">
                Connect with local conservation initiatives
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Eye className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Species Tracking</h3>
              <p className="text-gray-600">
                Report and monitor endangered species sightings
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Data Protection</h3>
              <p className="text-gray-600">
                Secure and private data management
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}