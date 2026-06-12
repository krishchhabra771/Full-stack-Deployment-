import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

// Performance Optimization: Lazy Load Page Components
const Home = lazy(() => import('./pages/Home'));
const Catalog = lazy(() => import('./pages/Catalog'));
const ProductDetail = lazy(() => import('./pages/ProductDetail'));

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50/50 text-gray-900 font-sans antialiased">
        <Navbar />
        <main>
          <Suspense fallback={
            <div className="flex justify-center items-center min-h-[50vh]">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
            </div>
          }>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/catalog" element={<Catalog />} />
              <Route path="/product/:id" element={<ProductDetail />} />
            </Routes>
          </Suspense>
        </main>
      </div>
    </Router>
  );
}
