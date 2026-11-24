import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import VibrantBackgroundDesign from './components/VibrantBackgroundDesign';
import LuxuryAtmosphere3D from './components/LuxuryAtmosphere3D';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Dedicated Separate Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import TreatmentsPage from './pages/TreatmentsPage';
import HospitalPage from './pages/HospitalPage';
import ContactPage from './pages/ContactPage';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      
      {/* Pure Architectural Canvas with High-Contrast Typography & Dynamic Ambient Background */}
      <div className="min-h-screen flex flex-col selection:bg-[#BE123C] selection:text-white relative bg-transparent text-[#0F172A] overflow-x-hidden antialiased">
        
        {/* Global Ambient Interactive Motion Background */}
        <VibrantBackgroundDesign />

        {/* Global Living 3D WebGL Particle & Wave Atmosphere */}
        <LuxuryAtmosphere3D />

        {/* Floating Minimal Glass Navbar */}
        <Navbar />

        {/* Route Page Container */}
        <main className="flex-grow relative z-10">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/treatments" element={<TreatmentsPage />} />
            <Route path="/hospital" element={<HospitalPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/book-appointment" element={<ContactPage />} />
            <Route path="/appointment" element={<ContactPage />} />
            {/* Catch-all redirect to Home */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        {/* High-End Atelier Footer */}
        <Footer />
      </div>
    </Router>
  );
}
