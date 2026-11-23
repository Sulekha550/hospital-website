import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// 14 Dedicated Separate Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import SpecialitiesPage from './pages/SpecialitiesPage';
import DepartmentDetailPage from './pages/DepartmentDetailPage';
import DoctorsPage from './pages/DoctorsPage';
import DoctorDetailPage from './pages/DoctorDetailPage';
import TreatmentsPage from './pages/TreatmentsPage';
import FacilitiesPage from './pages/FacilitiesPage';
import TechnologyPage from './pages/TechnologyPage';
import PatientGuidePage from './pages/PatientGuidePage';
import PatientStoriesPage from './pages/PatientStoriesPage';
import HealthInsightsPage from './pages/HealthInsightsPage';
import ContactPage from './pages/ContactPage';
import BookAppointmentPage from './pages/BookAppointmentPage';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      
      <div className="min-h-screen flex flex-col selection:bg-[#2788B8] selection:text-white relative bg-[#F7FAFC] text-[#1E293B] overflow-x-hidden antialiased font-sans">
        
        {/* Minimal Floating Premium Navbar */}
        <Navbar />

        {/* Route Page Container */}
        <main className="flex-grow relative z-10">
          <Routes>
            {/* 1. Home */}
            <Route path="/" element={<HomePage />} />
            
            {/* 2. About Hospital */}
            <Route path="/about" element={<AboutPage />} />
            
            {/* 3. All Specialities */}
            <Route path="/specialities" element={<SpecialitiesPage />} />
            
            {/* 4. Individual Department */}
            <Route path="/specialities/:slug" element={<DepartmentDetailPage />} />
            
            {/* 5. Doctor Directory */}
            <Route path="/doctors" element={<DoctorsPage />} />
            
            {/* 6. Individual Doctor Profile */}
            <Route path="/doctors/:slug" element={<DoctorDetailPage />} />
            
            {/* 7. Treatments */}
            <Route path="/treatments" element={<TreatmentsPage />} />
            
            {/* 8. Hospital Facilities */}
            <Route path="/facilities" element={<FacilitiesPage />} />
            <Route path="/hospital" element={<Navigate to="/facilities" replace />} />
            
            {/* 9. Medical Technology */}
            <Route path="/technology" element={<TechnologyPage />} />
            
            {/* 10. Patient Guide & Insurance */}
            <Route path="/patient-guide" element={<PatientGuidePage />} />
            
            {/* 11. Patient Stories */}
            <Route path="/patient-stories" element={<PatientStoriesPage />} />
            
            {/* 12. Health Insights */}
            <Route path="/health-insights" element={<HealthInsightsPage />} />
            
            {/* 13. Contact & Location */}
            <Route path="/contact" element={<ContactPage />} />
            
            {/* 14. Dedicated Distraction-Free Booking */}
            <Route path="/book-appointment" element={<BookAppointmentPage />} />
            
            {/* Catch-all redirect to Home */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        {/* Sophisticated Deep Navy Footer */}
        <Footer />
      </div>
    </Router>
  );
}
