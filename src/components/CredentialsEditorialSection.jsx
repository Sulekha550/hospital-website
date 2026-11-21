import React from 'react';
import { Award, GraduationCap, ShieldCheck, Heart, Sparkles, BookOpen, CheckCircle2, Building, Calendar, FileText } from 'lucide-react';
import { PULSE_DATA } from '../data/pulseData';

/**
 * CredentialsEditorialSection
 * Visual & Motion Identity: Academic Institutional Pedigree & Ethical Charter
 * Color Palette: Metallic Silver, Deep Obsidian Black, Gold Wax Seal & Royal Indigo
 * Motion Features:
 * - Rotating heraldic crest vectors in background
 * - Staggered dimensional academic plaques that elevate on hover with border glow
 * - Official NMC medical registration badge
 */
export default function CredentialsEditorialSection() {
  const { doctor, clinic } = PULSE_DATA;

  const degrees = [
    {
      degree: 'Doctorate of Medicine (DM) — Cardiology',
      institution: 'Postgraduate Institute of Medical Education and Research (PGIMER)',
      location: 'Chandigarh, India',
      status: 'Institute of National Importance (INI)',
      year: 'Super-Specialty Doctorate',
      details: 'Intensive tertiary fellowship in invasive coronary angiography, transradial balloon angioplasty, complex bifurcation stenting, and transvenous cardiac rhythm pacing.',
      borderAccent: 'border-amber-400/50 bg-gradient-to-b from-white via-amber-50/20 to-white hover:border-amber-400',
      badge: 'APEX INSTITUTIONAL FELLOWSHIP',
      badgeColor: 'bg-amber-100 text-amber-900 border-amber-300',
    },
    {
      degree: 'Doctor of Medicine (MD) — General Medicine',
      institution: "King George's Medical University (KGMU)",
      location: 'Lucknow, Uttar Pradesh',
      status: 'Historic Medical Institution Est. 1905',
      year: 'Post-Graduate Residency',
      details: 'Three years of rigorous clinical immersion managing critical coronary syndromes, acute hemodynamics, medical intensive care, and systemic vascular disease.',
      borderAccent: 'border-indigo-400/50 bg-gradient-to-b from-white via-indigo-50/20 to-white hover:border-indigo-400',
      badge: 'POST-GRADUATE RESIDENCY',
      badgeColor: 'bg-indigo-100 text-indigo-900 border-indigo-300',
    },
    {
      degree: 'Bachelor of Medicine & Surgery (MBBS)',
      institution: 'Premier Medical College & University',
      location: 'India',
      status: 'Comprehensive Foundational Rotations',
      year: 'Undergraduate Medical Degree',
      details: 'Foundational clinical rotations across medicine, surgery, pharmacology, pathology, and emergency resuscitation.',
      borderAccent: 'border-slate-300 bg-white hover:border-slate-400',
      badge: 'CLINICAL CORE',
      badgeColor: 'bg-slate-100 text-slate-800 border-slate-300',
    },
  ];

  const standards = [
    {
      title: 'Transradial-First Interventional Strategy',
      text: 'Routine wrist-first approach for catheterization, reducing vascular complications and promoting 2-hour post-procedure ambulation.',
    },
    {
      title: 'Strict Guideline Concordance',
      text: 'Procedures recommended only when substantiated by objective ischemia on ECG, echocardiography, or cineangiography.',
    },
    {
      title: 'Full Diagnostic Transparency',
      text: 'Unbiased second opinions with frame-by-frame review of angiogram CDs alongside patient families.',
    },
    {
      title: 'Lifetime Follow-Up Continuity',
      text: 'Structured outpatient monitoring for lipid optimization, blood pressure control, and stent patency at Betiahata.',
    },
  ];

  return (
    <section className="relative py-28 lg:py-36 overflow-hidden select-none">

      {/* =========================================================================
          ANIMATED SECTION BACKGROUND: DEEP INDIGO, OBSIDIAN & ROTATING CREST
         ========================================================================= */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        {/* Deep Indigo & Royal Violet Glow */}
        <div className="absolute top-1/4 -right-20 w-[700px] h-[700px] rounded-full bg-gradient-to-bl from-indigo-900/20 via-purple-900/15 to-amber-200/10 blur-[150px] animate-morph animate-float-1" />

        {/* Warm Gold & Silver Luster */}
        <div className="absolute bottom-10 left-10 w-[650px] h-[650px] rounded-full bg-gradient-to-tr from-amber-200/20 via-slate-200/20 to-indigo-100/15 blur-[150px] animate-float-3" />

        {/* Monumental Watermark Typography */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-serif italic text-[17vw] text-indigo-950/[0.03] whitespace-nowrap pointer-events-none">
          ACADEMIA • PGIMER
        </div>

        {/* Rotating Heraldic Frame Vectors */}
        <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] opacity-25 animate-rotate-slow" xmlns="http://www.w3.org/2000/svg">
          <circle cx="450" cy="450" r="340" fill="none" stroke="#D97706" strokeWidth="0.8" strokeDasharray="8 12" />
          <circle cx="450" cy="450" r="420" fill="none" stroke="#6366F1" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="mb-16 text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-indigo-950 to-slate-950 text-white text-xs font-mono font-bold shadow-md animate-float-bob">
            <Award className="w-4 h-4 text-amber-300" />
            <span className="uppercase tracking-[0.2em]">Institutional Pedigree & Credentials</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-950 tracking-tight leading-[1.08]">
            Super-Specialty Qualifications from <br />
            <span className="font-serif italic font-normal text-indigo-800">India's Apex Medical Institutes</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-700 font-medium max-w-2xl mx-auto leading-relaxed">
            Medical excellence forged at premier national teaching hospitals, dedicated to serving patients in Gorakhpur with international clinical standards.
          </p>
        </div>

        {/* Master Degree Plaques Grid with Hover Elevation */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch mb-16">
          {degrees.map((deg, idx) => (
            <div
              key={idx}
              className={`p-8 rounded-[2.5rem] border-2 shadow-layered transition-all duration-500 hover:-translate-y-3 hover:scale-102 hover:shadow-2xl flex flex-col justify-between text-left cursor-default ${deg.borderAccent}`}
            >
              <div className="space-y-4">
                <span className={`inline-block px-3 py-1 rounded-full text-[10px] font-mono font-bold border ${deg.badgeColor}`}>
                  {deg.badge}
                </span>

                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-950 tracking-tight leading-snug">
                  {deg.degree}
                </h3>

                <div className="space-y-1">
                  <p className="text-sm font-bold text-slate-900">
                    {deg.institution}
                  </p>
                  <p className="text-xs font-mono text-slate-500">
                    {deg.location} • <span className="text-indigo-700 font-bold">{deg.status}</span>
                  </p>
                </div>

                <p className="text-xs text-slate-600 font-medium leading-relaxed pt-2 border-t border-slate-100">
                  {deg.details}
                </p>
              </div>

              <div className="pt-6 mt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[11px] font-mono font-bold text-slate-500">
                  {deg.year}
                </span>
                <ShieldCheck className="w-5 h-5 text-emerald-600" />
              </div>
            </div>
          ))}
        </div>

        {/* Ethical Practice Charter & Patient Commitment Banner - Luminous Pearl & Indigo (No Black Box) */}
        <div className="p-8 sm:p-10 rounded-[2.5rem] bg-gradient-to-r from-indigo-50/70 via-white to-purple-50/70 text-slate-900 shadow-layered border-2 border-indigo-200 text-left transition-all duration-400 hover:shadow-xl">
          <div className="flex items-center gap-2 mb-6">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-mono font-medium uppercase tracking-wider text-indigo-900">
              Clinical Practice Standards • Pulse Heart Centre
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {standards.map((std, i) => (
              <div key={i} className="space-y-2 group">
                <h4 className="text-sm font-semibold text-slate-950 flex items-center gap-2 group-hover:text-indigo-700 transition-colors">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{std.title}</span>
                </h4>
                <p className="text-xs text-slate-600 font-medium leading-relaxed">
                  {std.text}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
