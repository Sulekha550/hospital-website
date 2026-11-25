import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Award,
  GraduationCap,
  ShieldCheck,
  Heart,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  Activity,
  Stethoscope,
  Quote,
  Clock,
  Layers,
  Compass
} from 'lucide-react';
import DoctorPlaceholder from './DoctorPlaceholder';
import SectionBackgroundMotion from './SectionBackgroundMotion';
import Interactive3DTilt from './Interactive3DTilt';
import ScrollReveal from './ScrollReveal';
import { PULSE_DATA } from '../data/pulseData';

/**
 * DoctorMonographSection
 * Visual & Motion Identity: Ultra-Luxury Clinician Dossier & Monograph
 * Color Palette: Deep Midnight Navy, Crimson Ruby & Warm Platinum
 * Layout: Clean, un-cramped side-by-side architecture with authentic editorial hierarchy
 */
export default function DoctorMonographSection() {
  const doctor = PULSE_DATA?.doctor || {
    name: "Dr. Prakash Chand Shahi",
    experienceYears: "22+",
    qualifications: [
      { degree: "DM — Cardiology", institution: "PGIMER Chandigarh" },
      { degree: "MD — Medicine", institution: "KGMU Lucknow" }
    ]
  };

  const [activePillar, setActivePillar] = useState(0);

  const pillars = [
    {
      id: 'transradial',
      num: '01',
      title: 'Transradial-First Access',
      subtitle: 'Minimally Invasive Wrist Catheterization',
      image: '/images/doctor-cathlab-procedure.jpg',
      desc: 'Over 98% of angiograms and angioplasties are performed through the radial artery in the wrist, eliminating groin puncture pain and allowing same-day walking.',
      badge: '99.4% Flow Restored',
      metric: '2-Hr Ambulation'
    },
    {
      id: 'evidence',
      num: '02',
      title: 'Evidence-Based Ethics',
      subtitle: 'Strict ESC / ACC Clinical Guidelines',
      image: '/images/doctor-patient-consult.jpg',
      desc: 'Coronary stenting is recommended strictly when clinically necessary to save myocardium. Every angiogram is assessed with FFR and QCA to protect patients from overtreatment.',
      badge: 'Zero Unnecessary Stents',
      metric: '100% Guideline Adherence'
    },
    {
      id: 'bedside',
      num: '03',
      title: 'Unhurried Bedside Dialogue',
      subtitle: 'Direct Angiogram Review With Patients',
      image: '/images/doctor-angiogram-explain.jpg',
      desc: 'Dr. Shahi personally reviews the fluoroscopy recordings with patients and their families, explaining every branch, lesion, and treatment decision clearly.',
      badge: 'Transparent Patient Care',
      metric: '22+ Yrs Trust'
    }
  ];

  return (
    <section className="relative py-20 lg:py-28 overflow-hidden select-none bg-gradient-to-b from-[#FAF9F6] via-[#F8FAFC] to-[#F1F5F9] border-b border-slate-200">

      {/* Layered flowing curves, abstract wave shapes & warm ivory-pink gradients */}
      <SectionBackgroundMotion variant="home-monograph" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Master Balanced 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

          {/* Left Column (5 Cols): Offset Architectural Square Portrait Frame (Unique to Monograph) */}
          <div className="lg:col-span-5 relative max-w-md mx-auto w-full">
            {/* Offset Midnight Navy Architectural Shadow Card */}
            <div className="absolute -bottom-4 -right-4 inset-0 rounded-3xl bg-[#0A1128] -z-10" />

            <div className="relative rounded-3xl overflow-hidden bg-white p-2.5 border border-slate-200 shadow-xl">
              <div className="aspect-square w-full rounded-2xl overflow-hidden bg-slate-100">
                <img
                  src="/images/p3.jpeg"
                  alt="Dr. Prakash Chand Shahi reviewing coronary angiogram"
                  loading="lazy"
                  className="w-full h-full object-cover object-[65%_20%]"
                />
              </div>

              {/* Clean Executive Verification Strip Inside Frame */}
              <div className="mt-2.5 p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between gap-3">
                <div className="text-left">
                  <h4 className="text-xs font-extrabold text-[#0A1128] leading-tight">
                    Director of Cath Lab &amp; Interventions
                  </h4>
                  <p className="text-[11px] text-[#BE123C] font-semibold mt-0.5">
                    PULSE Heart Centre • Betiahata, Gorakhpur
                  </p>
                </div>
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-rose-50 text-[#BE123C] text-[10px] font-mono font-bold border border-rose-200 shrink-0">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>22+ Yrs</span>
                </span>
              </div>
            </div>
          </div>

          {/* Right Column (7 Cols): Editorial Clinical Pedigree & Philosophy */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-6 text-left"
          >

            {/* Authoritative Category Badge */}
            <div className="flex flex-wrap items-center gap-2">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-[#0A1128] via-[#1E293B] to-[#BE123C] text-white text-xs font-mono font-bold shadow-xs border border-rose-300/40">
                <Sparkles className="w-3.5 h-3.5 text-rose-200" />
                <span className="uppercase tracking-[0.18em]">Lead Interventional Cardiologist</span>
              </div>
              <span className="text-xs font-mono font-semibold text-[#0A1128] bg-slate-100 px-3 py-1 rounded-full border border-slate-200">
                Est. 2002 • 22+ Years Leadership
              </span>
            </div>

            {/* Primary Typographic Header */}
            <div className="space-y-2">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0A1128] tracking-tight leading-[1.12]">
                Dr. Prakash Chand Shahi
              </h2>
              <p className="text-lg sm:text-xl font-serif italic text-[#BE123C]">
                Precision Hemodynamics Guided by Evidence &amp; Ethics
              </p>
            </div>

            {/* Academic Credentials Badges */}
            <div className="flex flex-wrap items-center gap-2 pt-0.5">
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 border border-slate-200 text-xs font-bold text-[#0A1128] shadow-xs hover:border-rose-300 transition-colors">
                <GraduationCap className="w-4 h-4 text-[#BE123C]" />
                <span>DM Cardiology • PGIMER Chandigarh</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 border border-slate-200 text-xs font-bold text-[#0A1128] shadow-xs hover:border-rose-300 transition-colors">
                <GraduationCap className="w-4 h-4 text-[#BE123C]" />
                <span>MD Medicine • KGMU Lucknow</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-rose-50 border border-rose-200 text-xs font-bold text-[#BE123C] shadow-xs">
                <Award className="w-4 h-4 text-[#BE123C]" />
                <span>22+ Years Clinical Practice</span>
              </div>
            </div>

            {/* Direct Clinical Ethics Philosophy Quote */}
            <div className="p-4 sm:p-5 rounded-2xl bg-white/85 backdrop-blur-md border border-slate-200 text-left space-y-2 shadow-xs card-hover-elevate">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#BE123C] uppercase tracking-wider">
                <Quote className="w-4 h-4 text-[#BE123C]" />
                <span>Clinical Principle &amp; Patient Trust</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-800 font-medium italic leading-relaxed">
                "Every coronary angiogram represents a human life, not a procedure quota. We recommend stenting strictly when evidence-based clinical guidelines prove it saves heart muscle, and personally review every fluoroscopy recording with the patient's family."
              </p>
            </div>

            {/* Interactive Clinical Excellence Pillars */}
            <div className="p-5 sm:p-6 rounded-2xl bg-white/95 border border-slate-200 shadow-sm space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <Activity className="w-4 h-4 text-[#BE123C] animate-pulse" />
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#0A1128]">
                    Clinical Practice Standards
                  </span>
                </div>
                <span className="text-[11px] font-mono text-slate-500">
                  Select Focus
                </span>
              </div>

              {/* Selector Tabs */}
              <div className="grid grid-cols-3 gap-2">
                {pillars.map((p, idx) => {
                  const isActive = activePillar === idx;
                  return (
                    <button
                      key={p.id}
                      onClick={() => setActivePillar(idx)}
                      className={`py-2 px-2.5 rounded-xl text-xs font-bold transition-all duration-300 text-left ${isActive
                        ? 'bg-gradient-to-r from-[#0A1128] via-[#1E293B] to-[#BE123C] text-white shadow-md border border-rose-300/40 scale-102'
                        : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200'
                        }`}
                    >
                      <span className="font-mono text-[9px] block opacity-75">PILLAR {p.num}</span>
                      <span className="truncate block mt-0.5">{p.title.split(' ')[0]} Access</span>
                    </button>
                  );
                })}
              </div>

              {/* Pillar Content Card with Visual Doctor Interaction Photo */}
              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/70 space-y-3 transition-all duration-300">
                <div className="flex flex-col sm:flex-row gap-4 items-center">
                  <div className="w-full sm:w-36 aspect-[16/10] sm:aspect-square rounded-xl overflow-hidden border border-slate-200 shrink-0 bg-slate-900">
                    <img
                      src={pillars[activePillar].image}
                      alt={pillars[activePillar].title}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 space-y-1.5 text-left">
                    <div className="flex items-center justify-between gap-2">
                      <div>
                        <h4 className="text-sm font-extrabold text-[#0A1128]">
                          {pillars[activePillar].title}
                        </h4>
                        <span className="text-[11px] font-medium text-[#BE123C]">
                          {pillars[activePillar].subtitle}
                        </span>
                      </div>
                      <span className="px-2.5 py-1 rounded-full border border-rose-200 bg-rose-50 text-[#BE123C] text-[10px] font-mono font-bold shrink-0">
                        {pillars[activePillar].metric}
                      </span>
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed pt-1">
                      {pillars[activePillar].desc}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Action CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
              <Link
                to="/book-appointment"
                className="luxury-btn-primary group"
              >
                <span>Consult Dr. Prakash Chand Shahi</span>
                <ArrowRight className="w-4 h-4 text-rose-200 group-hover:translate-x-1.5 transition-transform" />
              </Link>

              <Link
                to="/about"
                className="luxury-btn-secondary group"
              >
                <Compass className="w-4 h-4 text-[#BE123C] group-hover:rotate-45 transition-transform" />
                <span>Full Clinical Dossier</span>
              </Link>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
