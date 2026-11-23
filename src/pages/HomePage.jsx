import React from 'react';
import CinematicHeroSection from '../components/CinematicHeroSection';
import CardiologyShowcaseSection from '../components/CardiologyShowcaseSection';
import DoctorMonographSection from '../components/DoctorMonographSection';
import NeurologyShowcaseSection from '../components/NeurologyShowcaseSection';
import OrthopaedicShowcaseSection from '../components/OrthopaedicShowcaseSection';
import DiagnosticShowcaseSection from '../components/DiagnosticShowcaseSection';
import ArchitecturalGallerySection from '../components/ArchitecturalGallerySection';
import PatientTestimonialsSection from '../components/PatientTestimonialsSection';
import AppointmentExperienceSection from '../components/AppointmentExperienceSection';

/**
 * HomePage: Flagship International Medical Brand Experience
 * Built with bespoke, distinct 3D visual environments for every faculty:
 * 1. HERO — Futuristic Medical Architecture & Translucent Cardiac Sculpture (CinematicHeroSection)
 * 2. CARDIOLOGY — Full-Bleed 3D Anatomical Heart with Glowing Coronary Pathways (CardiologyShowcaseSection)
 * 3. LEAD CLINICIAN — Executive Monograph of Dr. Prakash Chand Shahi, DM (PGIMER), MD (KGMU) (DoctorMonographSection)
 * 4. NEUROLOGY — Immersive 3D Neural Network with Action Potentials in Blue-Violet Deep Space (NeurologyShowcaseSection)
 * 5. ORTHOPAEDICS — 3D Biometric Joint & Skeletal Mechanics with Mint-Emerald Studio Lighting (OrthopaedicShowcaseSection)
 * 6. DIAGNOSTICS — 3D Volumetric Tomography Scanner with Sweeping Laser Planes (DiagnosticShowcaseSection)
 * 7. ARCHITECTURAL TOUR — High-Density Hospital Interior & Clinical Suites (ArchitecturalGallerySection)
 * 8. PATIENT JOURNEY — Verified Clinical Recovery Narratives (PatientTestimonialsSection)
 * 9. PRIORITY APPOINTMENT SUITE — Interactive Boarding Pass Consultation Scheduler (AppointmentExperienceSection)
 */
export default function HomePage() {
  return (
    <div className="relative w-full overflow-hidden">

      {/* 1. HERO — FUTURISTIC MEDICAL ARCHITECTURE (3D Sweeping Glass Ribs & Cardiac Sculpture) */}
      <CinematicHeroSection />

      {/* 2. CARDIOLOGY — ANIMATED 3D HEART ENVIRONMENT (Glowing Coronary Arteries & Ventricular Pulse) */}
      <CardiologyShowcaseSection />

      {/* 3. FOUNDING CLINICIAN MONOGRAPH (Dr. Prakash Chand Shahi • PGIMER & KGMU Pedigree) */}
      <DoctorMonographSection />

      {/* 4. NEUROLOGY — 3D NEURAL NETWORK ENVIRONMENT (Deep Blue-Violet Atmosphere & Synaptic Nodes) */}
      <NeurologyShowcaseSection />

      {/* 5. ORTHOPAEDICS — 3D SKELETAL & BIOMETRIC JOINT ENVIRONMENT (Mint-Emerald Studio Light) */}
      <OrthopaedicShowcaseSection />

      {/* 6. DIAGNOSTICS — 3D VOLUMETRIC SCANNING ENVIRONMENT (Laser Planes & Tomographic Slices) */}
      <DiagnosticShowcaseSection />

      {/* 7. ADVANCED FACILITIES — ARCHITECTURAL ENVIRONMENT (Hospital Interior & Operating Suites) */}
      <ArchitecturalGallerySection />

      {/* 8. PATIENT OUTCOMES & RECOVERY TESTIMONIALS */}
      <PatientTestimonialsSection />

      {/* 9. PRIORITY OPD CONSULTATION BOARDING PASS SUITE */}
      <AppointmentExperienceSection />

    </div>
  );
}
