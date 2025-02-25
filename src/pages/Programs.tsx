import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Users, Globe, Eye, Activity } from 'lucide-react';

export function Programs() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 bg-emerald-700">
        <div className="container mx-auto px-4">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Conservation Through Education & Community Action
            </h1>
            <p className="text-xl max-w-3xl mx-auto">
              Komodo Hub offers a variety of programs designed to engage schools, communities, and individuals in protecting Indonesia’s endangered wildlife.
            </p>
          </div>
        </div>
      </section>

      {/* Program Categories */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Our Programs</h2>
            <p className="text-lg text-gray-600 mb-8">
              Whether you're a student, a teacher, or a community leader, there's a way for you to get involved in conservation efforts through our diverse programs.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center">
                <div className="bg-blue-100 p-4 rounded-full mb-4">
                  <BookOpen className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Educational Programs</h3>
                <p className="text-gray-600 text-center">Engaging students with conservation-focused learning materials and interactive activities.</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-blue-100 p-4 rounded-full mb-4">
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Community Initiatives</h3>
                <p className="text-gray-600 text-center">Empowering local communities to take part in conservation efforts and report endangered species.</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-blue-100 p-4 rounded-full mb-4">
                  <Eye className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Wildlife Monitoring</h3>
                <p className="text-gray-600 text-center">Encouraging citizens to report and track endangered species sightings to aid conservation research.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Participate */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-12">How to Get Involved</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow flex flex-col items-center">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Globe className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Register Your School</h3>
              <p className="text-gray-600">Integrate our conservation programs into your curriculum and engage students in hands-on learning.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow flex flex-col items-center">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Activity className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Join a Community Program</h3>
              <p className="text-gray-600">Take part in conservation initiatives and contribute to real-world impact.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow flex flex-col items-center">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Eye className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Report Sightings</h3>
              <p className="text-gray-600">Help scientists track endangered species by submitting reports and observations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-emerald-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Become a Part of the Change</h2>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            Whether you're a school, a community, or an individual, you can make a difference. Get started with our programs today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/register"
              className="inline-flex items-center justify-center px-6 py-3 border border-white text-base font-medium rounded-md text-emerald-700 bg-white hover:bg-emerald-700 hover:text-white transition"
            >
              Get Started
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-6 py-3 border border-white text-base font-medium rounded-md text-emerald-700 bg-white hover:bg-emerald-700 hover:text-white transition"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
