import React from 'react';
import HealthInsightsSection from '../components/HealthInsightsSection';

export default function HealthInsightsPage() {
  return (
    <div className="pt-24 pb-20 bg-[#F7FAFC]">
      
      {/* 1. Health Insights Hero (~100vh) */}
      <section className="min-h-[75vh] flex items-center bg-gradient-to-b from-[#F0F7FB] via-white to-[#F7FAFC] px-4 sm:px-6 lg:px-8 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto w-full py-16 text-center max-w-3xl space-y-6">
          <span className="text-xs font-bold uppercase tracking-widest text-[#2788B8] px-3 py-1 rounded-full bg-sky-50 border border-sky-200">
            Preventive Healthcare Publications
          </span>

          <h1 className="text-4xl sm:text-6xl font-extrabold text-[#173C59] tracking-tight leading-[1.1]">
            Medical Insights & <br />
            <span className="text-[#2788B8]">Specialist Guidance.</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Evidence-based medical publications authored by Dr. Prakash Chand Shahi and department heads to help families make proactive, life-saving health decisions.
          </p>
        </div>
      </section>

      {/* 2. Medical Articles Grid */}
      <HealthInsightsSection />

    </div>
  );
}
