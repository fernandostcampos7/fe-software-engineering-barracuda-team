import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* Add more routes as we build them */}
    </Routes>
  );
}