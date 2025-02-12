import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Register } from './pages/Register';
import { Login } from './pages/Login';
import { About } from './pages/About';
import { ProfileCompletion } from './pages/ProfileCompletion';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/about" element={<About />} />
      <Route path="/complete-profile" element={<ProfileCompletion />} />
      {/* Add more routes as we build them */}
    </Routes>
  );
}