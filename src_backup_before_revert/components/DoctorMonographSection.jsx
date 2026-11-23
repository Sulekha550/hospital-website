import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Award, GraduationCap, ShieldCheck, Heart, Sparkles, CheckCircle2, ArrowRight, Activity, Stethoscope, Quote, Clock, Phone, Calendar, Compass, ShieldAlert } from 'lucide-react';
import DoctorPlaceholder from './DoctorPlaceholder';
import { PULSE_DATA } from '../data/pulseData';

/**
 * DoctorMonographSection
 * Visual & Motion Identity: Executive Clinical Monograph & Bento Dossier
 * Redesigned from scratch:
 * - NO generic mobile-mockup card
 * - NO cramped hidden 3-tab switcher
 * - Dynamic Bento Grid Architecture:
 *   1. Executive Physician Portrait & Monogram
 *   2. Dual Apex Academic Pedigree (PGIMER Chandigarh & KGMU Lucknow)
 *   3. All 3 Pillars of Clinical Practice visible side-by-side with high-impact cards
 *   4. Direct Priority Consultation Access
 */
export default function DoctorMonographSection() {
  const { doctor, clinic } = PULSE_DATA;
  const [hoveredPillar, setHoveredPillar] = useState(null);

  const pillars = [
    {
      num: '01',
      title: 'Transradial-First Interventions',
      tag: 'PATIENT SAFETY & MOBILITY',
      stat: '98.7% Radial Success Rate',
      accent: 'from-purple-600 to-indigo-600',
      badgeColor: 'bg-purple-100 text-purple-900 border-purple-200',
      icon: Activity,
      desc: 'Performing catheterizations and angioplasties through the wrist radial artery rather than the femoral groin. This advanced technique eliminates painful multi-hour immobilization, drastically reduces vascular bleeding complications, and enables safe same-day ambulation.',
      points: [
        'Safe same-day discharge and walking',
        'Virtually zero groin puncture bleeding risk',
        'Direct wrist artery navigation with micro-catheters'
      ]
    },
    {
      num: '02',
      title: 'Evidence-Based Clinical Ethics',
      tag: 'ETHICAL SECOND OPINIONS',
      stat: '100% Guideline-Concordant',
      accent: 'from-amber-600 to-rose-600',
      badgeColor: 'bg-amber-100 text-amber-900 border-amber-200',
      icon: ShieldCheck,
      desc: 'Strict adherence to international guidelines established by the European Society of Cardiology (ESC) and American College of Cardiology (ACC). Interventional stenting is recommended only when medically imperative, prioritizing optimal medical therapy and lifestyle management first.',
      points: [
        'Strict ESC & ACC international guidelines',
        'Zero unnecessary stenting or procedures',
        'Medical therapy & lifestyle preservation first'
      ]
    },
    {
      num: '03',
      title: 'Unhurried Bedside Dialogue',
      tag: 'COMPASSIONATE TRANSPARENCY',
      stat: '22+ Years Bedside Devotion',
      accent: 'from-sky-600 to-teal-600',
      badgeColor: 'bg-sky-100 text-sky-900 border-sky-200',
      icon: Stethoscope,
      desc: 'Every patient and family at Pulse Heart Centre receives comprehensive, unhurried time. Dr. Shahi personally reviews fluoroscopic angiogram CDs and echocardiography loops on dedicated high-resolution displays, demystifying cardiac pathology with warmth and clarity.',
      points: [
        'Frame-by-frame Angiogram CD review',
        'Comprehensive dialogue with patient & family',
        'Clear anatomical explanation without medical jargon'
      ]
    },
  ];

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden select-none bg-transparent">

      {/* Ambient Moving Lighting Diffusions */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-[650px] h-[650px] rounded-full bg-gradient-to-tr from-amber-300/35 via-yellow-200/25 to-purple-300/20 blur-[85px] animate-float-1" />
        <div className="absolute bottom-10 right-0 w-[650px] h-[650px] rounded-full bg-gradient-to-bl from-purple-800/30 via-indigo-600/20 to-rose-200/25 blur-[90px] animate-float-2" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12 sm:space-y-16">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-900 via-indigo-900 to-slate-900 text-white text-xs font-mono font-bold shadow-md animate-float-bob shining-sweep">
            <Sparkles className="w-4 h-4 text-amber-300 animate-sparkle-1" />
            <span className="uppercase tracking-[0.2em]">Executive Physician Monograph</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-950 tracking-tight leading-[1.08]">
            Two Decades of Bedside Devotion. <br />
            <span className="font-serif italic font-normal text-shining-purple">
              Evidence-Based Cardiology. Zero Compromise.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-700 font-medium max-w-2xl mx-auto leading-relaxed">
            Combining apex super-specialty training from <strong>PGIMER Chandigarh</strong> and <strong>KGMU Lucknow</strong> with over 22 years of ethical interventional devotion at Pulse Heart Centre, Betiahata.
          </p>
        </div>

        {/* =========================================================================
            BENTO STAGE 1: EXECUTIVE PORTRAIT + APEX PEDIGREE DOSSIER
           ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">

          {/* Left Column (4 cols): Prestige Portrait Frame */}
          <div className="lg:col-span-4 flex flex-col">
            <DoctorPlaceholder
              className="w-full h-full"
              aspectRatio="aspect-[4/5]"
              showUploadTrigger={true}
            />
          </div>

          {/* Right Column (8 cols): Executive Credentials & Clinical Leadership Dossier */}
          <div className="lg:col-span-8 flex flex-col justify-between p-6 sm:p-8 lg:p-10 rounded-[2.5rem] bg-white/85 backdrop-blur-2xl border-2 border-white shadow-layered space-y-6">

            {/* Top Bar: Title & Quote */}
            <div className="space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-100/90 border border-purple-200 text-purple-900 text-xs font-mono font-bold">
                  <Sparkles className="w-3.5 h-3.5 text-amber-500 animate-sparkle-1" />
                  <span className="uppercase tracking-[0.2em]">DIRECTOR & CHIEF INTERVENTIONAL CARDIOLOGIST</span>
                </div>

                <div className="flex items-center gap-2 text-xs font-mono font-bold text-slate-700 bg-slate-100 px-3 py-1 rounded-full border border-slate-200">
                  <Clock className="w-3.5 h-3.5 text-purple-700" />
                  <span>OPD: Mon–Sat 10:00 AM – 8:00 PM</span>
                </div>
              </div>

              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-950 tracking-tight leading-snug">
                Dr. Prakash Chand Shahi
              </h3>

              <div className="p-4 rounded-2xl bg-gradient-to-r from-amber-500/[0.08] via-purple-500/[0.05] to-transparent border-l-4 border-amber-500 space-y-1">
                <p className="font-serif italic text-base sm:text-lg text-slate-800 leading-snug">
                  "Every stent implanted must be rigorously backed by clinical evidence; every patient conversation must be unhurried and compassionate."
                </p>
                <span className="text-[11px] font-mono uppercase tracking-wider text-purple-900 font-bold block">
                  — Clinical Practice Creed
                </span>
              </div>
            </div>

            {/* Middle Grid: Dual Apex Academic Pedigree */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              
              {/* Institution 1: PGIMER Chandigarh */}
              <div className="p-5 rounded-2xl bg-white/35 backdrop-blur-md border border-white/60 shadow-xs space-y-2 hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between">
                  <div className="w-9 h-9 rounded-xl bg-purple-700 text-white flex items-center justify-center shadow-xs">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-purple-100 text-purple-900 border border-purple-200">
                    SUPER-SPECIALTY (2013)
                  </span>
                </div>

                <h4 className="font-bold text-slate-950 text-sm sm:text-base leading-tight">
                  DM — Cardiology
                </h4>
                <p className="text-xs font-semibold text-purple-950">
                  PGIMER Chandigarh
                </p>
                <p className="text-[11px] text-slate-600 leading-relaxed font-medium">
                  Apex national institute of medical research. Advanced catheter-guided coronary interventions and hemodynamics.
                </p>
              </div>

              {/* Institution 2: KGMU Lucknow */}
              <div className="p-5 rounded-2xl bg-white/35 backdrop-blur-md border border-white/60 shadow-xs space-y-2 hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between">
                  <div className="w-9 h-9 rounded-xl bg-amber-600 text-white flex items-center justify-center shadow-xs">
                    <Award className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-900 border border-amber-200">
                    POST-GRADUATE (2007)
                  </span>
                </div>

                <h4 className="font-bold text-slate-950 text-sm sm:text-base leading-tight">
                  MD — General Medicine
                </h4>
                <p className="text-xs font-semibold text-amber-950">
                  King George's Medical University (KGMU)
                </p>
                <p className="text-[11px] text-slate-600 leading-relaxed font-medium">
                  India’s premier century-old apex university. Rigorous clinical internal medicine residency and acute care.
                </p>
              </div>

            </div>

            {/* Quick Practice Badges */}
            <div className="pt-2 flex flex-wrap items-center gap-2.5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-purple-50 border border-purple-200 text-purple-900 text-xs font-mono font-bold">
                <CheckCircle2 className="w-3.5 h-3.5 text-purple-700" />
                <span>Wrist-First Transradial Stenting</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs font-mono font-bold">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-700" />
                <span>Angiogram CD Second Opinions</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs font-mono font-bold">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700" />
                <span>22+ Years Bedside Devotion</span>
              </span>
            </div>

          </div>

        </div>

        {/* =========================================================================
            BENTO STAGE 2: ALL 3 PILLARS OF CLINICAL PRACTICE (SIDE-BY-SIDE CARDS)
           ========================================================================= */}
        <div className="space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-purple-900 bg-purple-100 px-4 py-1.5 rounded-full border border-purple-200 inline-block">
              Clinical Philosophy & Patient Safety
            </span>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
              3 Pillars of Clinical Excellence
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 font-medium">
              Every procedure and consultation at Pulse Heart Centre is guided by these three non-negotiable principles.
            </p>
          </div>

          {/* 3 Interactive Cards Grid (All visible at once!) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {pillars.map((pillar, idx) => {
              const IconComp = pillar.icon;
              return (
                <div
                  key={pillar.num}
                  onMouseEnter={() => setHoveredPillar(idx)}
                  onMouseLeave={() => setHoveredPillar(null)}
                  className={`relative p-6 sm:p-7 rounded-[2.2rem] bg-white/85 backdrop-blur-2xl border-2 border-white shadow-layered hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col justify-between space-y-5 group overflow-hidden ${
                    hoveredPillar === idx ? 'border-purple-300 ring-2 ring-purple-400/20' : ''
                  }`}
                >
                  {/* Subtle Top Accent Glow Line */}
                  <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${pillar.accent}`} />

                  {/* Header */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-black font-mono text-purple-900/60 group-hover:text-purple-900 transition-colors">
                        {pillar.num}
                      </span>
                      <span className={`text-[10px] font-mono font-bold px-2.5 py-1 rounded-full border ${pillar.badgeColor}`}>
                        {pillar.stat}
                      </span>
                    </div>

                    <div className="space-y-1">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 font-bold block">
                        {pillar.tag}
                      </span>
                      <h4 className="text-lg sm:text-xl font-extrabold text-slate-950 leading-snug group-hover:text-purple-900 transition-colors">
                        {pillar.title}
                      </h4>
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed font-medium">
                      {pillar.desc}
                    </p>
                  </div>

                  {/* Points List */}
                  <div className="pt-3 border-t border-slate-100 space-y-2">
                    {pillar.points.map((pt, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-2 text-[11px] text-slate-700 font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-purple-700 shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>

                </div>
              );
            })}
          </div>
        </div>

        {/* =========================================================================
            BENTO STAGE 3: DIRECT OUTPATIENT CONSULTATION ACCESS BANNER
           ========================================================================= */}
        <div className="p-8 sm:p-10 rounded-[2.5rem] bg-gradient-to-r from-purple-950 via-indigo-950 to-slate-950 text-white shadow-2xl border-2 border-purple-500/20 relative overflow-hidden">
          
          {/* Subtle Ambient Glow */}
          <div className="absolute top-0 right-0 w-[450px] h-[450px] rounded-full bg-purple-500/15 blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
            
            <div className="space-y-2.5 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-[10px] font-mono uppercase tracking-wider text-amber-300">
                <Sparkles className="w-3 h-3 text-amber-300" />
                <span>Priority Access • Pulse Heart Centre, Betiahata</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Consult with <span className="font-serif italic font-normal text-amber-300">Dr. Prakash Chand Shahi</span>
              </h3>

              <p className="text-xs sm:text-sm text-purple-200/90 font-medium leading-relaxed">
                Super-specialty cardiology consultations, angiogram second opinions, and pacemaker rhythm evaluations. Consultations run Monday through Saturday, 10:00 AM to 8:00 PM.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 shrink-0">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-400 hover:from-amber-300 hover:to-yellow-300 text-slate-950 font-bold text-xs uppercase tracking-wider shadow-lg shadow-amber-400/20 transition-all hover:scale-105"
              >
                <Calendar className="w-4 h-4 text-slate-950" />
                <span>Book OPD Consultation</span>
                <ArrowRight className="w-4 h-4 text-slate-950" />
              </Link>

              <a
                href="tel:+919876543210"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-xs uppercase tracking-wider border border-white/25 backdrop-blur-md transition-all hover:scale-105"
              >
                <Phone className="w-4 h-4 text-purple-300" />
                <span>Call +91 98765 43210</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
