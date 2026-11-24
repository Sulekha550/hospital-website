import React from 'react';
import { Award, GraduationCap, ShieldCheck, Sparkles, MapPin, Heart, Activity, CheckCircle, ArrowRight } from 'lucide-react';
import { PULSE_DATA } from '../data/pulseData';

export default function AboutSection({ onBookClick }) {
  const { doctor, clinic } = PULSE_DATA;

  return (
    <section id="about" className="relative py-20 lg:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-xs font-semibold text-white bg-gradient-to-r from-[#BE123C] to-[#EA580C] px-3.5 py-1 rounded-full shadow-sm">
              01 • LEAD CARDIOLOGIST
            </span>
            <div className="w-10 h-0.5 bg-gradient-to-r from-[#EA580C] to-[#FB923C]" />
            <span className="text-xs font-semibold tracking-wider text-rose-900 uppercase">
              Profile & Academic Pedigree
            </span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-[#C2410C] block mb-1">
                Clinical Devotion & Precision
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Dr. Prakash Chand Shahi <span className="font-serif italic font-normal text-[#EA580C]">Monograph</span>
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 font-normal max-w-md">
              DM Cardiology (PGIMER), MD General Medicine (KGMU) with over 22 years of bedside and interventional catheterization excellence.
            </p>
          </div>
        </div>

        {/* Master Doctor Bento Grid - ZERO Split Screen Image-Text */}
        <div className="space-y-6">

          {/* Bento Row 1: Doctor Identity & Philosophy Banner (Full Width) */}
          <div className="rounded-3xl bg-gradient-to-br from-white via-orange-50/70 to-rose-50/60 text-slate-900 p-8 sm:p-12 shadow-layered border-2 border-orange-200/90 relative overflow-hidden">
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-orange-300/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-rose-300/15 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Doctor Details (7 cols) */}
              <div className="lg:col-span-7 space-y-4 text-left">
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="px-3 py-1 rounded-full bg-orange-100 border border-orange-300 text-orange-950 text-xs font-semibold uppercase tracking-wider">
                    Cardiologist & Interventional Specialist
                  </span>
                  <span className="px-3 py-1 rounded-full bg-[#FFF7ED] border border-orange-200 text-[#C2410C] text-xs font-bold">
                    22+ Years Practice
                  </span>
                </div>

                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight">
                  {doctor.name}
                </h3>

                <div className="flex items-center gap-2 text-xs sm:text-sm text-orange-900 font-semibold">
                  <MapPin className="w-4 h-4 text-[#EA580C] shrink-0" />
                  <span>{clinic.name} • {clinic.address}</span>
                </div>

                <div className="pt-2 flex flex-wrap gap-2 text-xs font-bold">
                  <span className="px-3.5 py-1.5 rounded-xl bg-white/90 border border-orange-200 text-slate-800 shadow-xs">
                    PGIMER Chandigarh (DM 2013)
                  </span>
                  <span className="px-3.5 py-1.5 rounded-xl bg-white/90 border border-orange-200 text-slate-800 shadow-xs">
                    KGMU Lucknow (MD 2007)
                  </span>
                  <span className="px-3.5 py-1.5 rounded-xl bg-white/90 border border-orange-200 text-slate-800 shadow-xs">
                    MBBS Graduate
                  </span>
                </div>
              </div>

              {/* Doctor Philosophy Quote (5 cols) */}
              <div className="lg:col-span-5 p-6 sm:p-7 rounded-2xl bg-white/90 border border-orange-200 shadow-md backdrop-blur-xl relative text-left">
                <div className="text-orange-900 font-mono text-xs uppercase tracking-widest font-semibold mb-2 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-amber-500" />
                  <span>Clinical Philosophy</span>
                </div>
                <blockquote className="text-lg sm:text-xl font-bold text-slate-900 leading-relaxed">
                  "{doctor.philosophy}"
                </blockquote>
                <div className="mt-4 pt-3 border-t border-orange-100 flex items-center justify-between text-xs text-slate-600 font-semibold">
                  <span>Pulse Heart Centre</span>
                  <span className="text-[#EA580C] font-mono">Gorakhpur</span>
                </div>
              </div>

            </div>
          </div>

          {/* Bento Row 2: 3 Academic Milestones & 1 Hero Stat Card */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            
            {/* Box 1: Experience Stat */}
            <div className="p-7 rounded-3xl bg-gradient-to-br from-[#EA580C] to-[#BE123C] text-white shadow-xl flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
              <div>
                <span className="text-xs uppercase font-semibold tracking-wider text-rose-100 block mb-2">
                  Clinical Experience
                </span>
                <span className="text-6xl sm:text-7xl font-semibold text-white leading-none font-serif">
                  22<span className="text-3xl text-amber-300">+</span>
                </span>
                <span className="text-sm font-bold text-rose-100 block mt-2">
                  Years of Dedicated Practice
                </span>
              </div>
              <p className="text-xs text-rose-100 mt-4 leading-relaxed font-medium">
                Extensive clinical and interventional practice across premier Indian medical centers.
              </p>
            </div>

            {/* Box 2: DM Cardiology (PGIMER) */}
            <div className="p-7 rounded-3xl bg-white/95 border-2 border-orange-200 shadow-xl flex flex-col justify-between hover:border-orange-400 transition-all">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-orange-100 text-[#C2410C]">
                    DM 2013
                  </span>
                  <Award className="w-6 h-6 text-[#EA580C]" />
                </div>
                <h4 className="text-xl font-bold text-slate-950 leading-snug">
                  DM — Cardiology
                </h4>
                <span className="text-xs font-semibold text-[#EA580C] block mt-1">
                  PGIMER, Chandigarh
                </span>
              </div>
              <p className="text-xs text-slate-600 font-medium mt-4 leading-relaxed">
                Postgraduate Institute of Medical Education and Research — apex institute for cardiac catheterization and interventions.
              </p>
            </div>

            {/* Box 3: MD Medicine (KGMU) */}
            <div className="p-7 rounded-3xl bg-white/95 border-2 border-amber-200 shadow-xl flex flex-col justify-between hover:border-amber-400 transition-all">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-amber-100 text-amber-900">
                    MD 2007
                  </span>
                  <GraduationCap className="w-6 h-6 text-[#D97706]" />
                </div>
                <h4 className="text-xl font-bold text-slate-950 leading-snug">
                  MD — General Medicine
                </h4>
                <span className="text-xs font-semibold text-amber-800 block mt-1">
                  KGMU, Lucknow
                </span>
              </div>
              <p className="text-xs text-slate-600 font-medium mt-4 leading-relaxed">
                King George's Medical University — comprehensive internal medicine residency and acute hemodynamic stabilization.
              </p>
            </div>

            {/* Box 4: MBBS Degree */}
            <div className="p-7 rounded-3xl bg-white/95 border-2 border-rose-200 shadow-xl flex flex-col justify-between hover:border-rose-400 transition-all">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-rose-50 text-rose-900">
                    FOUNDATION
                  </span>
                  <ShieldCheck className="w-6 h-6 text-[#BE123C]" />
                </div>
                <h4 className="text-xl font-bold text-slate-950 leading-snug">
                  MBBS Degree
                </h4>
                <span className="text-xs font-semibold text-rose-800 block mt-1">
                  Medical Institution
                </span>
              </div>
              <p className="text-xs text-slate-600 font-medium mt-4 leading-relaxed">
                Recognized medical institution foundation in clinical medicine, pathology, and cardiovascular diagnostics.
              </p>
            </div>

          </div>

          {/* Bento Row 3: Areas of Specialized Interest (2 Symmetrical Bento Cards) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {doctor.areasOfInterest.map((area, idx) => (
              <div 
                key={area.title}
                className="p-8 rounded-3xl bg-gradient-to-br from-white/95 via-orange-50/40 to-white/95 border-2 border-orange-200 shadow-lg relative overflow-hidden"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className={`w-10 h-10 rounded-2xl flex items-center justify-center ${
                    idx === 0 ? 'bg-orange-100 text-[#EA580C]' : 'bg-rose-100 text-[#BE123C]'
                  }`}>
                    {idx === 0 ? <Activity className="w-5 h-5" /> : <Sparkles className="w-5 h-5" />}
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase text-slate-400 tracking-wider block">
                      Core Speciality
                    </span>
                    <h4 className="text-2xl font-bold text-slate-950 leading-tight">
                      {area.title}
                    </h4>
                  </div>
                </div>

                <p className="text-sm text-slate-700 font-medium leading-relaxed mb-5">
                  {area.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {area.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="px-3 py-1 rounded-full bg-orange-100/90 text-orange-950 text-xs font-bold border border-orange-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Bento Action Strip */}
          <div className="p-6 rounded-2xl bg-white/90 border-2 border-orange-200 shadow-md flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-[#EA580C] animate-ping" />
              <span className="text-sm font-semibold text-slate-900">
                Direct Consultation with Dr. Prakash Chand Shahi at Pulse Heart Centre
              </span>
            </div>
            <button
              onClick={onBookClick}
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-gradient-to-r from-[#BE123C] via-[#EA580C] to-[#FB923C] hover:from-[#9F1239] hover:to-[#EA580C] text-white font-semibold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all"
            >
              <span>Book Priority Consultation</span>
              <ArrowRight className="w-4 h-4 text-amber-200" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
