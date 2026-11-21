import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Award, GraduationCap, ShieldCheck, Heart, Sparkles, CheckCircle2, ArrowRight, Activity, Stethoscope, Quote } from 'lucide-react';
import DoctorPlaceholder from './DoctorPlaceholder';
import { PULSE_DATA } from '../data/pulseData';

/**
 * DoctorMonographSection
 * Visual & Motion Identity: Luxury Editorial Monograph
 * Color Palette: Deep Plum, Warm Ivory, Champagne Gold & Royal Indigo
 * Motion Features:
 * - Morphing plum/champagne ambient gradient background
 * - Rotating CAD coordinate rings & gold filigree
 * - Hover elevation & 3D tilt on portrait canvas
 * - Smooth interactive transition across 3 Pillars of Patient Care
 */
export default function DoctorMonographSection() {
  const { doctor, clinic } = PULSE_DATA;
  const [activePillar, setActivePillar] = useState(0);

  const pillars = [
    {
      num: '01',
      title: 'Transradial-First Interventions',
      tag: 'PATIENT SAFETY & RAPID RECOVERY',
      desc: 'Performing catheterizations and angioplasties through the wrist radial artery rather than the femoral groin. This advanced technique eliminates painful multi-hour immobilization, drastically reduces vascular bleeding complications, and enables safe same-day ambulation.',
      stat: '98.7% Radial Success Rate',
    },
    {
      num: '02',
      title: 'Evidence-Based Clinical Ethics',
      tag: 'UNBIASED SECOND OPINIONS',
      desc: 'Strict adherence to international guidelines established by the European Society of Cardiology (ESC) and American College of Cardiology (ACC). Interventional stenting is recommended only when medically imperative, prioritizing optimal medical therapy and lifestyle management first.',
      stat: '100% Guideline-Concordant Care',
    },
    {
      num: '03',
      title: 'Unhurried Bedside Dialogue',
      tag: 'COMPASSIONATE COMMUNICATION',
      desc: 'Every patient and family at Pulse Heart Centre receives comprehensive, unhurried time. Dr. Shahi personally reviews fluoroscopic angiogram CDs and echocardiography loops on dedicated high-resolution displays, demystifying cardiac pathology with warmth and clarity.',
      stat: '22+ Years Devotion in Gorakhpur',
    },
  ];

  return (
    <section className="relative py-28 lg:py-36 overflow-hidden select-none">

      {/* =========================================================================
          ANIMATED SECTION BACKGROUND: DEEP PLUM, CHAMPAGNE GOLD & ROTATING CAD
         ========================================================================= */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        {/* Deep Plum & Vintage Wine Morphing Orb */}
        <div className="absolute top-1/4 -left-20 w-[700px] h-[700px] rounded-full bg-gradient-to-tr from-purple-900/20 via-[#2E1065]/15 to-amber-200/10 blur-[150px] animate-morph animate-float-1" />

        {/* Warm Champagne & Ivory Diffusion */}
        <div className="absolute bottom-10 right-0 w-[700px] h-[700px] rounded-full bg-gradient-to-bl from-amber-200/25 via-rose-100/15 to-purple-100/20 blur-[150px] animate-float-2" />

        {/* Monumental Watermark Typography */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-serif italic text-[16vw] font-bold text-purple-900/[0.03] whitespace-nowrap pointer-events-none">
          CLINICIAN • 1999
        </div>

        {/* Slowly Rotating Architectural Vector Filigree */}
        <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] opacity-25 animate-rotate-slow" xmlns="http://www.w3.org/2000/svg">
          <circle cx="450" cy="450" r="320" fill="none" stroke="#D97706" strokeWidth="0.8" strokeDasharray="6 12" />
          <circle cx="450" cy="450" r="420" fill="none" stroke="#7C3AED" strokeWidth="0.5" strokeDasharray="10 20" />
          <line x1="450" y1="20" x2="450" y2="880" stroke="#D97706" strokeWidth="0.4" strokeOpacity="0.4" />
          <line x1="20" y1="450" x2="880" y2="450" stroke="#7C3AED" strokeWidth="0.4" strokeOpacity="0.4" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="mb-16 text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-900 to-slate-900 text-white text-xs font-mono font-bold shadow-md animate-float-bob">
            <Sparkles className="w-4 h-4 text-amber-300" />
            <span className="uppercase tracking-[0.2em]">Physician Monograph • Dr. Prakash Chand Shahi</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-950 tracking-tight leading-[1.08]">
            Two Decades of Dedication to <br />
            <span className="font-serif italic font-normal text-purple-800">Heart Health & Human Lives</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-700 font-medium max-w-2xl mx-auto leading-relaxed">
            Combining apex super-specialty training from <strong>PGIMER Chandigarh</strong> and <strong>KGMU Lucknow</strong> with 22+ years of compassionate bedside devotion at Pulse Heart Centre, Betiahata.
          </p>
        </div>

        {/* Master Overlapping Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

          {/* Left Column (5 cols): Large Doctor Image Placeholder with Gold Wax Seals */}
          <div className="lg:col-span-5 relative">

            {/* Primary Portrait Canvas with Interactive Lift */}
            <div className="relative rounded-[2.5rem] bg-gradient-to-b from-white via-amber-50/20 to-white p-4 sm:p-5 border-2 border-amber-200/60 shadow-layered hover:shadow-layered-hover transition-all duration-500 hover:-translate-y-2 hover:rotate-1 group">

              <DoctorPlaceholder
                className="w-full"
                aspectRatio="aspect-[4/5]"
                showUploadTrigger={true}
              />

              {/* Floating Verified Pedigree Seal (PGIMER & KGMU) - Luminous Pearl & Gold */}
              <div className="absolute -bottom-6 left-4 right-4 p-4 rounded-2xl bg-white/95 backdrop-blur-xl text-slate-900 shadow-xl border-2 border-amber-300 flex items-center justify-between text-xs transition-transform duration-300 group-hover:scale-102">
                <div className="space-y-0.5 text-left">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-sm text-slate-950">Dr. Prakash Chand Shahi</span>
                    <span className="px-2 py-0.5 rounded-full bg-amber-100 border border-amber-300 text-[9px] font-mono text-amber-900 font-semibold">
                      VERIFIED
                    </span>
                  </div>
                  <span className="text-[11px] text-purple-900 font-mono block">
                    DM Cardiology (PGIMER) • MD Medicine (KGMU)
                  </span>
                </div>
                <div className="w-10 h-10 rounded-xl bg-amber-100 border border-amber-300 flex items-center justify-center text-amber-700 shrink-0">
                  <ShieldCheck className="w-5 h-5 text-amber-600" />
                </div>
              </div>

            </div>

            {/* Behind Ambient Glow Card */}
            <div className="absolute -top-4 -left-4 w-full h-full rounded-[2.5rem] bg-gradient-to-br from-amber-200/30 via-purple-300/20 to-transparent -z-10 blur-xl animate-pulse-glow" />

          </div>

          {/* Right Column (7 cols): Editorial Monograph & Interactive Philosophy Switcher */}
          <div className="lg:col-span-7 space-y-6 text-left mt-8 lg:mt-0">

            {/* Authoritative Profile Statement */}
            <div className="space-y-3">
              <span className="inline-block text-xs font-mono font-bold uppercase tracking-wider text-purple-900 bg-purple-100/80 px-3.5 py-1.5 rounded-full border border-purple-200">
                Founding Director & Chief Cardiologist
              </span>

              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-950 tracking-tight leading-snug">
                Precision Interventions Guided by Uncompromising Ethics
              </h3>

              <p className="text-sm sm:text-base text-slate-700 font-medium leading-relaxed">
                After completing rigorous post-graduate residency in Internal Medicine at <strong>King George's Medical University (KGMU Lucknow)</strong>, Dr. Prakash Chand Shahi achieved his super-specialty doctorate (DM) in Cardiology from India's apex institute, the <strong>Postgraduate Institute of Medical Education and Research (PGIMER Chandigarh)</strong>.
              </p>

              <p className="text-sm sm:text-base text-slate-700 font-medium leading-relaxed">
                For over two decades, he has directed comprehensive coronary catheterizations, radial balloon angioplasties, complex bifurcation stenting, and permanent pacemaker implantations for patients across Eastern Uttar Pradesh, Bihar, and Nepal.
              </p>
            </div>

            {/* Interactive Clinical Philosophy Switcher with Smooth State Display */}
            <div className="p-6 rounded-[2rem] bg-white border-2 border-slate-200 shadow-md space-y-4 transition-all duration-300 hover:shadow-xl">

              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-900 flex items-center gap-2">
                  <Heart className="w-4 h-4 text-rose-600 animate-pulse" />
                  <span>3 Pillars of Clinical Practice</span>
                </span>
                <span className="text-[11px] font-mono font-bold text-purple-700">
                  Select Dimension
                </span>
              </div>

              {/* Tab Selector Buttons */}
              <div className="grid grid-cols-3 gap-2">
                {pillars.map((p, idx) => (
                  <button
                    key={p.num}
                    onClick={() => setActivePillar(idx)}
                    className={`py-2 px-3 rounded-xl text-xs font-semibold transition-all duration-300 text-center ${
                      activePillar === idx
                        ? 'bg-gradient-to-r from-purple-700 to-indigo-700 text-white shadow-md scale-102'
                        : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200'
                    }`}
                  >
                    <span className="font-mono text-[10px] block opacity-70">PILLAR {p.num}</span>
                    <span className="truncate block">{p.title.split(' ')[0]}</span>
                  </button>
                ))}
              </div>

              {/* Active Dimension Details with Fade-in Animation */}
              <div className="p-4 rounded-xl bg-purple-50/60 border border-purple-100 space-y-2 transition-all duration-400">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-extrabold text-slate-950">
                    {pillars[activePillar].title}
                  </h4>
                  <span className="text-[10px] font-mono font-bold text-emerald-800 bg-emerald-100/80 px-2 py-0.5 rounded-full">
                    {pillars[activePillar].stat}
                  </span>
                </div>
                <p className="text-xs text-slate-700 font-medium leading-relaxed">
                  {pillars[activePillar].desc}
                </p>
              </div>

            </div>

            {/* Direct Action CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-purple-700 via-indigo-600 to-purple-800 hover:from-purple-800 hover:to-indigo-800 text-white text-xs font-semibold uppercase tracking-wider shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <span>Read Full Pedigree & Experience</span>
                <ArrowRight className="w-4 h-4 text-amber-300" />
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white hover:bg-slate-50 text-slate-900 text-xs font-bold uppercase tracking-wider border-2 border-slate-200 shadow-xs hover:shadow-md transition-all duration-300 hover:-translate-y-0.5"
              >
                <span>Book OPD Consultation</span>
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
