import React from 'react';
import PatientStoriesSection from '../components/PatientStoriesSection';

export default function PatientStoriesPage() {
  return (
    <div className="pt-24 pb-20 bg-[#0A1C2C] text-white">
      
      {/* 1. Patient Stories Hero (~100vh) */}
      <section className="min-h-[75vh] flex items-center px-4 sm:px-6 lg:px-8 border-b border-white/10 relative overflow-hidden">
        <div className="max-w-7xl mx-auto w-full py-16 text-center max-w-3xl space-y-6">
          <span className="text-xs font-bold uppercase tracking-widest text-[#A9D8E9] px-3 py-1 rounded-full bg-white/10 border border-white/20">
            Real Clinical Outcomes
          </span>

          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
            Patient Stories & <br />
            <span className="text-[#A9D8E9]">Verified Recovery Journeys.</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Discover unfiltered patient testimonials documenting recovery from acute heart attacks, complex multi-vessel blockages, and severe joint degeneration.
          </p>
        </div>
      </section>

      {/* 2. Testimonials & Video Stories Showcase */}
      <PatientStoriesSection />

    </div>
  );
}
