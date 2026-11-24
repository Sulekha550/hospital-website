import React from 'react';
import { Award, GraduationCap, ShieldCheck, Sparkles, Building, Calendar, ArrowRight } from 'lucide-react';
import { PULSE_DATA } from '../data/pulseData';

export default function ExperienceTimeline({ onBookClick }) {
  const { doctor } = PULSE_DATA;

  const milestones = [
    {
      year: "22+ Years",
      badge: "Clinical Mastery",
      title: "Extensive Cardiology & Catheterization Practice",
      institution: "Pulse Heart Centre & Tertiary Academic Hospitals",
      description: doctor.experienceText,
      accent: "from-[#173C59] via-[#2788B8] to-emerald-400",
      highlight: true
    },
    {
      year: "2013",
      badge: "Super-Specialty Doctorate",
      title: "DM — Cardiology",
      institution: "Postgraduate Institute of Medical Education and Research (PGIMER), Chandigarh",
      description: "Rigorous clinical doctorate in hemodynamic catheterization, coronary angioplasty, and cardiac rhythm pacing management from India's apex institute.",
      accent: "from-[#173C59] to-[#2788B8]",
      highlight: false
    },
    {
      year: "2007",
      badge: "Post-Graduate Degree",
      title: "MD — General Medicine",
      institution: "King George's Medical University (KGMU), Lucknow",
      description: "Master of Medicine focusing on complex systemic disorders, cardiovascular pharmacotherapy, and intensive medical hemodynamics.",
      accent: "from-[#2788B8] to-emerald-500",
      highlight: false
    },
    {
      year: "Foundation",
      badge: "Undergraduate Degree",
      title: "MBBS — Bachelor of Medicine & Surgery",
      institution: "Recognized Premier Medical Institution",
      description: "Rigorous medical graduation and surgical housemanship in foundational human physiology, cardiology, and clinical pathology.",
      accent: "from-amber-600 to-[#173C59]",
      highlight: false
    }
  ];

  return (
    <section id="experience" className="relative py-16 lg:py-24 overflow-hidden select-none">
      <div className="max-w-6xl mx-auto px-4 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="mb-14 text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#173C59] via-[#1E4D74] to-[#2788B8] text-white text-xs font-mono font-medium shadow-md shadow-[#173C59]/20">
            <Award className="w-4 h-4 text-[#A9D8E9]" />
            <span className="uppercase tracking-[0.2em]">Academic Pedigree & Milestones</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-semibold text-slate-950 tracking-tight leading-tight">
            Qualifications & <span className="font-serif italic font-normal text-[#173C59]">Medical Milestones</span>
          </h2>

          <p className="text-base text-slate-700 font-medium max-w-2xl mx-auto leading-relaxed">
            Trained at India's foremost centers of medical excellence: <strong>King George's Medical University (Lucknow)</strong> and <strong>PGIMER (Chandigarh)</strong>.
          </p>
        </div>

        {/* Minimalist Chronological Timeline */}
        <div className="relative">
          <div className="hidden md:block absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-1 bg-gradient-to-b from-[#173C59] via-[#2788B8] to-emerald-300 rounded-full" />

          <div className="space-y-12 md:space-y-16">
            {milestones.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <div 
                  key={item.title}
                  className={`relative flex flex-col md:flex-row items-center ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Content Card */}
                  <div className={`w-full md:w-1/2 ${isEven ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'}`}>
                    <div className="p-7 sm:p-8 rounded-[2.5rem] bg-white border-2 border-slate-200/90 shadow-layered hover:shadow-layered-hover transition-all duration-500 hover:-translate-y-1 space-y-3">
                      
                      <div className={`flex items-center gap-2.5 ${isEven ? 'md:justify-end' : 'md:justify-start'}`}>
                        <span className="font-serif font-semibold text-2xl text-slate-950">
                          {item.year}
                        </span>
                        <span className="text-[10px] font-mono tracking-wider uppercase px-3 py-1 rounded-full bg-slate-950 text-white font-bold shadow-sm">
                          {item.badge}
                        </span>
                      </div>

                      <h3 className="font-semibold text-lg sm:text-xl text-slate-950 leading-snug tracking-tight">
                        {item.title}
                      </h3>

                      <div className={`flex items-center gap-1.5 text-xs text-[#173C59] font-bold ${
                        isEven ? 'md:justify-end' : 'md:justify-start'
                      }`}>
                        <Building className="w-3.5 h-3.5 text-[#2788B8] shrink-0" />
                        <span>{item.institution}</span>
                      </div>

                      <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed pt-1">
                        {item.description}
                      </p>

                    </div>
                  </div>

                  {/* Central Node */}
                  <div className="my-4 md:my-0 relative z-20 flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-tr from-[#173C59] via-[#2788B8] to-emerald-300 p-0.5 shadow-lg">
                    <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                      <span className="w-3.5 h-3.5 rounded-full bg-[#173C59] animate-pulse" />
                    </div>
                  </div>

                  <div className="hidden md:block w-1/2" />
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
