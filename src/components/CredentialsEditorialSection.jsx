import React from 'react';
import { Award, GraduationCap, ShieldCheck, Heart, Sparkles, BookOpen, CheckCircle2, Building, Calendar, FileText } from 'lucide-react';
import { PULSE_DATA } from '../data/pulseData';
import SectionBackgroundMotion from './SectionBackgroundMotion';

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
          ANIMATED SECTION BACKGROUND: EMERALD CAD RINGS, LASER & MEDICAL ECG
         ========================================================================= */}
      <SectionBackgroundMotion watermark="PEDIGREE" position="center" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="mb-16 text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#064E3B] via-[#047857] to-[#047857] text-[#A7F3D0] text-xs font-mono font-bold shadow-md shadow-[#064E3B]/20 animate-float-bob border border-[#A7F3D0]/40">
            <Award className="w-4 h-4 text-amber-300" />
            <span className="uppercase tracking-[0.2em]">Institutional Pedigree &amp; Credentials</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#064E3B] tracking-tight leading-[1.08]">
            Super-Specialty Qualifications from <br />
            <span className="font-serif italic font-normal text-[#059669]">India's Apex Medical Institutes</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-700 font-medium max-w-2xl mx-auto leading-relaxed">
            Medical excellence forged at premier national teaching hospitals, dedicated to serving patients in Gorakhpur with international clinical standards.
          </p>
        </div>

        {/* Master Degree Plaques Grid with 3D Hover Elevation */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch mb-14">
          {degrees.map((deg, idx) => (
            <div
              key={idx}
              className={`p-6 sm:p-7 rounded-[2rem] border-2 shadow-md transition-all duration-500 hover:-translate-y-2 hover:scale-102 hover:shadow-2xl flex flex-col justify-between text-left cursor-default ${deg.borderAccent}`}
            >
              <div className="space-y-3">
                <span className={`inline-block px-3 py-1 rounded-full text-[10px] font-mono font-bold border ${deg.badgeColor}`}>
                  {deg.badge}
                </span>

                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-950 tracking-tight leading-snug">
                  {deg.degree}
                </h3>

                <div className="space-y-0.5">
                  <p className="text-sm font-bold text-slate-900">
                    {deg.institution}
                  </p>
                  <p className="text-xs font-mono text-emerald-800 font-semibold">
                    {deg.location}
                  </p>
                </div>
              </div>

              <div className="pt-4 mt-3 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[11px] font-mono font-bold text-slate-600">
                  {deg.year}
                </span>
                <ShieldCheck className="w-5 h-5 text-[#047857]" />
              </div>
            </div>
          ))}
        </div>

        {/* Ethical Practice Charter & Patient Commitment Banner */}
        <div className="p-6 sm:p-8 rounded-[2rem] bg-gradient-to-r from-emerald-50/70 via-white to-teal-50/70 text-slate-900 shadow-md border-2 border-emerald-200 text-left transition-all duration-400 hover:shadow-xl">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#064E3B]">
              Clinical Standards • Pulse Heart Centre
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {standards.map((std, i) => (
              <div key={i} className="p-3.5 rounded-xl bg-white/90 border border-emerald-100 shadow-xs group hover:border-emerald-300 transition-colors">
                <h4 className="text-xs sm:text-sm font-bold text-slate-900 flex items-center gap-2 group-hover:text-[#064E3B] transition-colors">
                  <CheckCircle2 className="w-4 h-4 text-[#047857] shrink-0" />
                  <span>{std.title}</span>
                </h4>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
