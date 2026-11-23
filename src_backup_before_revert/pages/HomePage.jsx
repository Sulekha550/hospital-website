import React from 'react';
import HeroSection from '../components/HeroSection';
import DoctorMonographSection from '../components/DoctorMonographSection';
import AnatomicalSpecialtyShowcase from '../components/AnatomicalSpecialtyShowcase';
import MedicalTechnologyShowcase from '../components/MedicalTechnologyShowcase';
import PatientJourneySection from '../components/PatientJourneySection';
import PatientTestimonialsSection from '../components/PatientTestimonialsSection';
import HospitalTourSection from '../components/HospitalTourSection';
import AppointmentCTASection from '../components/AppointmentCTASection';

export default function HomePage() {
  return (
    <div className="relative w-full">
      
      {/* 1. Master Split-Screen Hero with 3D Beating Heart & High-Contrast Typography */}
      <HeroSection />

      {/* 2. Executive Clinical Bento: Dual Apex Pedigree (PGIMER & KGMU) & 3 Pillars of Care */}
      <DoctorMonographSection />

      {/* 3. Compact Anatomical Specialty Showcase (Uniform 16/10 Cards with Hover Animations) */}
      <AnatomicalSpecialtyShowcase />

      {/* 4. Advanced Medical Technology Showcase (Siemens Flat-Panel Cath Lab & CT) */}
      <MedicalTechnologyShowcase />

      {/* 5. 5-Step Luminous Patient Care Journey */}
      <PatientJourneySection />

      {/* 6. Verified Patient Recovery Testimonials */}
      <PatientTestimonialsSection />

      {/* 7. Real Hospital Facilities Architectural Gallery */}
      <HospitalTourSection />

      {/* 8. Priority OPD Consultation Booking Suite */}
      <AppointmentCTASection />

    </div>
  );
}
