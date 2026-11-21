import React from 'react';
import HeroSection from '../components/HeroSection';
import DoctorMonographSection from '../components/DoctorMonographSection';
import AnatomicalSpecialtyShowcase from '../components/AnatomicalSpecialtyShowcase';
import MedicalTechnologyShowcase from '../components/MedicalTechnologyShowcase';
import TreatmentStorytellingSection from '../components/TreatmentStorytellingSection';
import CredentialsEditorialSection from '../components/CredentialsEditorialSection';
import PatientTestimonialsSection from '../components/PatientTestimonialsSection';
import AppointmentExperienceSection from '../components/AppointmentExperienceSection';
import { PULSE_DATA } from '../data/pulseData';

/**
 * HomePage: Flagship International Medical Brand Experience
 * Redesigned for ultra-smooth visual elegance, clinical prestige, and seamless flow:
 * 1. Hero – Asymmetric Hero (45% Doctor Portrait Space + 3D Anatomical Heart Sculpture)
 * 2. Section 01 – Immersive Doctor Introduction with Oversized Portrait Space (DoctorMonographSection)
 * 3. Section 02 – Specialty Showcase with Large Artistic Anatomical Illustrations (AnatomicalSpecialtyShowcase)
 * 4. Section 03 – Medical Technology Showcase with Cinematic Equipment Photography (MedicalTechnologyShowcase)
 * 5. Section 04 – Treatment Section using Custom-Designed Visual Storytelling (TreatmentStorytellingSection)
 * 6. Section 05 – Credentials Section using Premium Editorial Layouts (CredentialsEditorialSection)
 * 7. Section 06 – Patient Testimonials Section with Distinctive Typography & Composition (PatientTestimonialsSection)
 * 8. Section 07 – Dramatic Appointment Experience with Live Digital Pass (AppointmentExperienceSection)
 */
export default function HomePage() {
  const { doctor, clinic } = PULSE_DATA;

  return (
    <div className="relative">

      {/* 1. Dramatic Asymmetric Hero with 45% Dedicated Empty Portrait Niche & 3D Anatomical Sculpture */}
      <HeroSection />

      {/* 2. Immersive Doctor Introduction with Oversized Portrait Space */}
      <DoctorMonographSection />

      {/* 3. Specialty Showcase Using Large Artistic Anatomical Illustrations */}
      <AnatomicalSpecialtyShowcase />

      {/* 4. Medical Technology Showcase with Cinematic Equipment Photography */}
      <MedicalTechnologyShowcase />

      {/* 5. Treatment Section Using Custom-Designed Visual Storytelling */}
      <TreatmentStorytellingSection />

      {/* 6. Credentials Section Using Premium Editorial Layouts */}
      <CredentialsEditorialSection />

      {/* 7. Patient Testimonials Section with Distinctive Typography & Composition */}
      <PatientTestimonialsSection />

      {/* 8. Dramatic Appointment Experience with Live Digital Consultation Pass */}
      <AppointmentExperienceSection />

    </div>
  );
}
