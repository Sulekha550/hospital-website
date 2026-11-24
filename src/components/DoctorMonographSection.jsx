import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Award, GraduationCap, ShieldCheck, Heart, Sparkles, CheckCircle2, ArrowRight, Activity, Stethoscope, Quote, Play } from 'lucide-react';
import DoctorPlaceholder from './DoctorPlaceholder';
import ThreeDImageCard from './ThreeDImageCard';
import { PULSE_DATA } from '../data/pulseData';
import SectionCinematicVideo from './SectionCinematicVideo';

/**
 * DoctorMonographSection
 * Visual & Motion Identity: Luxury Editorial Monograph
 * Color Palette: Deep Plum, Warm Ivory, Emerald Green & Royal Indigo
 * Motion Features:
 * - Morphing plum/mint ambient gradient background
 * - Rotating CAD coordinate rings & gold filigree
 * - Hover elevation & 3D tilt on portrait canvas
 * - Smooth interactive transition across 3 Pillars of Patient Care
 */
export default function DoctorMonographSection() {
  const doctor = PULSE_DATA?.doctor || PULSE_DATA?.doctors?.[0] || {
    name: "Dr. Prakash Chand Shahi",
    experienceYears: "22+",
    qualifications: [
      { degree: "DM — Cardiology", institution: "PGIMER Chandigarh" },
      { degree: "MD — Medicine", institution: "KGMU Lucknow" }
    ]
  };
  const clinic = PULSE_DATA?.clinic || {};
  const [activePillar, setActivePillar] = useState(0);

  const pillars = [
    {
      num: '01',
      title: 'Transradial-First Interventions',
      tag: 'Wrist Radial Access • Same-Day Ambulation',
      desc: 'Transradial wrist catheterization eliminating groin pain & bleeding.',
      stat: '98.7% Radial Rate',
    },
    {
      num: '02',
      title: 'Evidence-Based Ethics',
      tag: 'ESC / ACC Guidelines • Zero Unnecessary Stents',
      desc: 'Stenting recommended strictly when medically imperative.',
      stat: '100% Guideline Care',
    },
    {
      num: '03',
      title: 'Unhurried Bedside Dialogue',
      tag: 'Direct Angio CD Review • 22+ Yrs Trust',
      desc: 'Frame-by-frame fluoroscopy review directly with patients.',
      stat: '22+ Yrs Experience',
    },
  ];

  return (
    <section className="relative py-28 lg:py-36 overflow-hidden select-none bg-gradient-to-b from-[#FAF9F6] via-[#F7F4EB] to-[#FAF9F6] border-b border-amber-200/50">

      {/* =========================================================================
          SECTION 3 DISTINCT BACKGROUND: AMBIENT CLINICIAN VIDEO, ECG HEARTBEAT & GOLD/EMERALD CAD HUD
         ========================================================================= */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
        {/* 1. Ambient 4K Clinical Consultation Video Layer */}
        <div className="absolute inset-0 overflow-hidden opacity-25 mix-blend-multiply">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            className="w-full h-full object-cover filter contrast-125 saturate-125 scale-105"
          >
            <source src="/videos/doctors-procedure.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-[#FAF9F6]/85 via-transparent to-[#FAF9F6]/90" />
        </div>

        {/* 2. Warm Emerald Green & Teal Luminous Ambient Lights */}
        <div className="absolute top-1/6 -left-20 w-[650px] h-[650px] rounded-full bg-gradient-to-tr from-[#FECDD3]/45 via-[#FEF2F2]/35 to-transparent blur-[110px]" />
        <div className="absolute top-1/2 -right-20 w-[700px] h-[700px] rounded-full bg-gradient-to-bl from-[#38BDF8]/30 via-[#FECDD3]/35 to-transparent blur-[120px]" />
        <div className="absolute bottom-10 left-1/4 w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-[#FEF2F2]/50 to-transparent blur-[100px]" />

        {/* 3. Medical Biometric Coordinate CAD Grid */}
        <svg className="absolute inset-0 w-full h-full opacity-35" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="docCadGrid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#0284C7" strokeWidth="0.6" strokeDasharray="3 3" opacity="0.3" />
              <circle cx="60" cy="0" r="1.5" fill="#0284C7" opacity="0.4" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#docCadGrid)" />
        </svg>

        {/* 4. Giant Watermark Typography */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-serif italic text-[16vw] font-black text-[#991B1B]/[0.03] whitespace-nowrap pointer-events-none select-none">
          CARDIOLOGIST • 2002
        </div>

        {/* 5. Precision Rotating Clinical Compass & CAD Circles */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] opacity-60 pointer-events-none">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            {/* Outer Slow Rotating Degree Compass */}
            <g className="animate-radar-sweep origin-center" style={{ transformOrigin: '450px 450px', animationDuration: '40s' }}>
              <circle cx="450" cy="450" r="340" fill="none" stroke="#0284C7" strokeWidth="1.5" strokeDasharray="6 12" />
              <circle cx="450" cy="450" r="300" fill="none" stroke="#991B1B" strokeWidth="1" strokeDasharray="3 9" />
              <line x1="450" y1="20" x2="450" y2="880" stroke="#0284C7" strokeWidth="1" strokeOpacity="0.4" />
              <line x1="20" y1="450" x2="880" y2="450" stroke="#0284C7" strokeWidth="1" strokeOpacity="0.4" />
            </g>
            {/* Inner Reverse Ring */}
            <g className="animate-rotate-reverse origin-center" style={{ transformOrigin: '450px 450px', animationDuration: '50s' }}>
              <circle cx="450" cy="450" r="410" fill="none" stroke="#B91C1C" strokeWidth="1.2" strokeDasharray="10 20" />
            </g>
          </svg>
        </div>

        {/* 6. Continuous Flowing Mint & Emerald Cardiac ECG Streamline */}
        <div className="absolute top-1/3 left-0 right-0 opacity-60 pointer-events-none">
          <svg className="w-full h-28" viewBox="0 0 1440 100" fill="none" preserveAspectRatio="none">
            <path
              d="M0,50 L280,50 L295,20 L310,80 L325,10 L340,75 L355,50 L750,50 L765,20 L780,80 L795,10 L810,75 L825,50 L1200,50 L1215,20 L1230,80 L1245,10 L1260,75 L1275,50 L1440,50"
              stroke="#0284C7"
              strokeWidth="2.5"
              strokeDasharray="350"
              className="animate-flow-dash"
            />
            {/* Pulsing ECG Nodes */}
            <circle cx="325" cy="10" r="5" fill="#0EA5E9" className="animate-ping" />
            <circle cx="795" cy="10" r="5" fill="#0284C7" className="animate-ping" />
            <circle cx="1245" cy="10" r="5" fill="#0EA5E9" className="animate-ping" />
          </svg>
        </div>

        <div className="absolute bottom-16 left-0 right-0 opacity-50 pointer-events-none">
          <svg className="w-full h-24" viewBox="0 0 1440 90" fill="none" preserveAspectRatio="none">
            <path
              d="M0,45 L420,45 L430,25 L440,65 L450,15 L460,60 L470,45 L900,45 L910,25 L920,65 L930,15 L940,60 L950,45 L1440,45"
              stroke="#B91C1C"
              strokeWidth="2"
              strokeDasharray="300"
              className="animate-flow-dash-fast"
            />
          </svg>
        </div>

        {/* 7. Sweeping Laser Beam */}
        <div className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#0284C7] to-transparent shadow-[0_0_15px_#0284C7] opacity-40 animate-laser-sweep pointer-events-none" />

        {/* 8. Floating Telemetry Tags in Background */}
        <div className="absolute top-24 left-10 hidden xl:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-[#FECDD3] shadow-sm text-[10px] font-mono font-bold text-[#991B1B]">
          <span className="w-2 h-2 rounded-full bg-[#991B1B] animate-pulse" />
          <span>TRANSRADIAL CATH LAB ACTIVE</span>
        </div>

        <div className="absolute top-36 right-10 hidden xl:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-[#38BDF8] shadow-sm text-[10px] font-mono font-bold text-[#B91C1C]">
          <span className="w-2 h-2 rounded-full bg-[#0284C7] animate-pulse" />
          <span>LEAD II TELEMETRY: 72 BPM SINUS</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header (Minimal Text, Maximum Punch) */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12 text-center max-w-3xl mx-auto space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#991B1B] text-[#FECDD3] text-xs font-mono font-bold shadow-md">
            <Sparkles className="w-4 h-4 text-[#0284C7]" />
            <span className="uppercase tracking-[0.2em]">Apex Interventional Cardiologist • Eastern UP</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#991B1B] tracking-[-0.03em] leading-[1.08]">
            Dr. Prakash Chand Shahi <br />
            <span className="font-serif italic font-normal text-[#0284C7]">Senior Interventional Cardiologist</span>
          </h2>

          <div className="flex flex-wrap items-center justify-center gap-2 pt-1 font-mono text-xs font-bold">
            <span className="bg-[#FEF2F2] text-[#991B1B] px-3 py-1 rounded-full border border-[#FECDD3]">DM Cardiology (PGIMER)</span>
            <span className="bg-[#FEF2F2] text-[#B91C1C] px-3 py-1 rounded-full border border-[#38BDF8]">MD Medicine (KGMU)</span>
            <span className="bg-white text-slate-900 px-3 py-1 rounded-full border border-[#FECDD3]">22+ Years Experience</span>
          </div>
        </motion.div>

        {/* Master Overlapping Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

          {/* Left Column (5 cols): Rich Doctor Visual Portfolio (Multiple Real Photos) */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative space-y-4"
          >

            {/* Primary Portrait Canvas with Doctor Photo Upload Placeholder */}
            <DoctorPlaceholder
              aspectRatio="aspect-[4/5]"
              showUploadTrigger={true}
            />

            {/* Secondary 3D Image Grid: Clinical Facilities & Interventions */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <ThreeDImageCard
                src="/images/operation-theatre-laminar.jpg"
                alt="Laminar Flow Operating Theatre"
                aspectRatio="aspect-[4/3]"
                badge="CLASS-100 OT"
                title="Laminar Complex"
              />
              <ThreeDImageCard
                src="/images/cath-lab.jpg"
                alt="Cath Lab Stenting"
                aspectRatio="aspect-[4/3]"
                badge="SIEMENS ARTIS"
                title="Radial Cath Suite"
              />
              <ThreeDImageCard
                src="/images/echo-doppler-scan.jpg"
                alt="Doppler Hemodynamics"
                aspectRatio="aspect-[4/3]"
                badge="3D ECHO DOPPLER"
                title="Valve Evaluation"
              />
              <ThreeDImageCard
                src="/images/patient-care-recovery.jpg"
                alt="Patient Recovery"
                aspectRatio="aspect-[4/3]"
                badge="RECOVERY SUITE"
                title="Dedicated Care"
              />
            </div>

          </motion.div>

          {/* Right Column (7 cols): Graphic Metrics & Minimal Pillars (Mint + Emerald + Teal) */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-6 text-left mt-8 lg:mt-0"
          >

            {/* Authoritative Badge Header */}
            <div className="space-y-2">
              <span className="inline-block text-xs font-mono font-bold uppercase tracking-wider text-[#991B1B] bg-[#FEF2F2] px-3.5 py-1.5 rounded-full border border-[#38BDF8]">
                Unbroken Clinical Commitment • Since 2002
              </span>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#991B1B] tracking-tight leading-snug">
                Precision Hemodynamics Guided by Evidence &amp; Ethics
              </h3>
            </div>

            {/* 6 Visual Achievement Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              <div className="p-3.5 rounded-2xl bg-white border border-[#FECDD3] shadow-xs hover:border-[#991B1B] transition-colors">
                <span className="text-2xl sm:text-3xl font-extrabold text-[#991B1B] block">22+</span>
                <span className="text-xs font-bold text-slate-900 block">Years Experience</span>
                <span className="text-[10px] text-slate-700">Dedicated leadership</span>
              </div>

              <div className="p-3.5 rounded-2xl bg-white border border-[#FECDD3] shadow-xs hover:border-[#991B1B] transition-colors">
                <span className="text-2xl sm:text-3xl font-extrabold text-[#0284C7] block">15,000+</span>
                <span className="text-xs font-bold text-slate-900 block">Cath Procedures</span>
                <span className="text-[10px] text-slate-700">Angiography &amp; Stents</span>
              </div>

              <div className="p-3.5 rounded-2xl bg-white border border-[#38BDF8] shadow-xs hover:border-[#991B1B] transition-colors">
                <span className="text-2xl sm:text-3xl font-extrabold text-[#B91C1C] block">99.4%</span>
                <span className="text-xs font-bold text-slate-900 block">Radial Patency</span>
                <span className="text-[10px] text-slate-700">Painless wrist access</span>
              </div>

              <div className="p-3.5 rounded-2xl bg-white border border-[#FECDD3] shadow-xs hover:border-[#991B1B] transition-colors">
                <span className="text-xl sm:text-2xl font-extrabold text-[#991B1B] block">PGIMER</span>
                <span className="text-xs font-bold text-slate-900 block">DM Cardiology</span>
                <span className="text-[10px] text-slate-700">Apex National Institute</span>
              </div>

              <div className="p-3.5 rounded-2xl bg-white border border-[#FECDD3] shadow-xs hover:border-[#991B1B] transition-colors">
                <span className="text-xl sm:text-2xl font-extrabold text-[#0284C7] block">KGMU</span>
                <span className="text-xs font-bold text-slate-900 block">MD Medicine</span>
                <span className="text-[10px] text-slate-700">Premier University</span>
              </div>

              <div className="p-3.5 rounded-2xl bg-white border border-[#38BDF8] shadow-xs hover:border-[#991B1B] transition-colors">
                <span className="text-2xl sm:text-3xl font-extrabold text-[#B91C1C] block">1,200+</span>
                <span className="text-xs font-bold text-slate-900 block">Pacemakers</span>
                <span className="text-[10px] text-slate-700">Physiological pacing</span>
              </div>
            </div>

            {/* Interactive Clinical Philosophy Switcher with Minimal Punchy Content */}
            <div className="p-5 rounded-[2rem] bg-white border-2 border-[#FECDD3] shadow-md space-y-3 transition-all duration-300 hover:shadow-xl">

              <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#991B1B] flex items-center gap-2">
                  <Heart className="w-4 h-4 text-[#B91C1C] animate-pulse" />
                  <span>3 Pillars of Clinical Excellence</span>
                </span>
                <span className="text-[11px] font-mono font-bold text-[#0284C7]">
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
                        ? 'bg-gradient-to-r from-[#991B1B] via-[#B91C1C] to-[#B91C1C] text-[#FECDD3] shadow-md scale-102 border border-[#FECDD3]/40'
                        : 'bg-slate-50 hover:bg-[#FEF2F2] text-slate-700 border border-slate-200'
                    }`}
                  >
                    <span className="font-mono text-[10px] block opacity-70">PILLAR {p.num}</span>
                    <span className="truncate block">{p.title.split(' ')[0]}</span>
                  </button>
                ))}
              </div>

              {/* Active Dimension Details with Minimal Punchy Text */}
              <div className="p-3.5 rounded-xl bg-[#FEF2F2] border border-[#FECDD3] space-y-1.5 transition-all duration-400">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-extrabold text-[#991B1B]">
                    {pillars[activePillar].title}
                  </h4>
                  <span className="text-[10px] font-mono font-bold text-[#991B1B] bg-[#FEF2F2] border border-[#38BDF8] px-2 py-0.5 rounded-full">
                    {pillars[activePillar].stat}
                  </span>
                </div>
                <p className="text-xs text-slate-700 font-semibold leading-relaxed">
                  {pillars[activePillar].tag}
                </p>
              </div>

            </div>

            {/* Direct Action CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                to="/book-appointment"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#991B1B] via-[#B91C1C] to-[#B91C1C] hover:from-[#7F1D1D] hover:to-[#991B1B] text-[#FECDD3] text-xs font-bold uppercase tracking-wider shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 border border-[#FECDD3]/40"
              >
                <span>Consult Dr. Prakash Chand Shahi</span>
                <ArrowRight className="w-4 h-4 text-[#38BDF8]" />
              </Link>

              <Link
                to="/treatments"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white hover:bg-[#FEF2F2] text-[#991B1B] text-xs font-bold uppercase tracking-wider border border-[#FECDD3] shadow-sm transition-all"
              >
                <span>Explore Stenting &amp; Cath Lab</span>
              </Link>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
