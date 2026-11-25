import React from 'react';
import CinematicHeroSection from '../components/CinematicHeroSection';
import DoctorMonographSection from '../components/DoctorMonographSection';
import AnatomicalSpecialtyShowcase from '../components/AnatomicalSpecialtyShowcase';
import MedicalTechnologyShowcase from '../components/MedicalTechnologyShowcase';
import TreatmentStorytellingSection from '../components/TreatmentStorytellingSection';
import CredentialsEditorialSection from '../components/CredentialsEditorialSection';
import ArchitecturalGallerySection from '../components/ArchitecturalGallerySection';
import PatientTestimonialsSection from '../components/PatientTestimonialsSection';
import AppointmentExperienceSection from '../components/AppointmentExperienceSection';

/**
 * HomePage: Flagship Pulse Heart Centre Experience
 * Dedicated 100% to Cardiology, Interventional Excellence & Dr. Prakash Chand Shahi
 */
export default function HomePage() {
  return (
    <div className="relative w-full overflow-hidden">

      {/* 1. HERO — Futuristic Hospital Architecture & Dr. Prakash Chand Shahi */}
      <CinematicHeroSection />

      {/* 2. FOUNDING CLINICIAN MONOGRAPH — Dr. Prakash Chand Shahi (DM PGIMER, MD KGMU) */}
      <DoctorMonographSection />

      {/* 3. CLINICAL SPECIALTIES — Angioplasty, Coronary Angiogram, Pacemaker Implantation */}
      <AnatomicalSpecialtyShowcase />

      {/* 5. MEDICAL TECHNOLOGY ARSENAL — Siemens Artis Zee Cath Lab, 3D Color Doppler, Cardiac ICU */}
      <MedicalTechnologyShowcase />

      {/* 6. TREATMENT PATHWAYS — Transradial-First Procedures & Faster Recovery */}
      <TreatmentStorytellingSection />

      {/* 7. CREDENTIALS & ACADEMIC PEDIGREE — Apex Medical Institutes */}
      <CredentialsEditorialSection />

      {/* 8. HOSPITAL CAMPUS TOUR — World-Class Facilities, Betiahata, Gorakhpur */}
      <ArchitecturalGallerySection />

      {/* 9. PATIENT RECOVERY STORIES — Verified Clinical Outcomes */}
      <PatientTestimonialsSection />

      {/* 10. PRIORITY CONSULTATION SUITE — OPD Appointment Pass */}
      <AppointmentExperienceSection />

    </div>
  );
}
