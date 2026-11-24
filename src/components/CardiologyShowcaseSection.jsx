import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { HeartPulse, CheckCircle2, ArrowRight, ShieldCheck, Activity, Award, Play, Eye, Sparkles, ChevronRight, Stethoscope, Zap, Radio, Maximize2 } from 'lucide-react';
import CardiologyFullCanvas from './CardiologyFullCanvas';
import CinematicVideoPlayerModal from './CinematicVideoPlayerModal';

/**
 * CardiologyShowcaseSection
 * Completely redesigned flagship 3D Cardiovascular Sciences Showcase:
 * - 100% Cardiology Authentic: NO brain imagery, NO neurology elements
 * - 3D Perspective interactive visual stage with live fluoroscopic catheterization video & high-res cardiac scans
 * - 4 Visual-first 3D interactive procedure cards with minimal text & punchy metrics
 * - Live cardiac telemetry HUD (72 BPM Sinus Rhythm, TIMI-3 Perfusion, < 0.3mm Precision)
 * - Rich architectural blueprint background with animated ECG sinus wave, laser sweeps & CAD compass rings
 */
export default function CardiologyShowcaseSection() {
  const [activeChannel, setActiveChannel] = useState('stenting');
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const channels = {
    stenting: {
      id: 'stenting',
      title: 'Transradial Coronary Angioplasty & Stenting',
      category: 'INTERVENTIONAL CATH-LAB',
      badge: 'WRIST-FIRST ACCESS',
      image: '/images/stent-catheter-fluoroscopy.jpg',
      videoUrl: '/videos/cardiac-catheterization.mp4',
      primaryMetric: '99.4% Flow Restored',
      statLabel: 'Vessel Patency Restored',
      highlight: '< 0.3mm Guidewire Sub-Millimeter Crossing',
      specs: [
        'Transradial Wrist-First Access (Zero Groin Immobilization)',
        'Cobalt-Chromium Drug-Eluting Stent Apposition',
        'Siemens Flat-Panel Fluoroscopic Guidance'
      ],
      telemetry: {
        rhythm: '72 BPM Sinus Rhythm',
        luminalGain: '+2.8 mm Post-Stent',
        flowGrade: 'TIMI-3 Complete Perfusion',
        doseReduction: '-40% Low-Dose Fluoroscopy'
      }
    },
    angiogram: {
      id: 'angiogram',
      title: 'Definitive Digital Cineangiogram (CAG)',
      category: 'DIAGNOSTIC CATHETERIZATION',
      badge: 'HIGH-SPEED CINE',
      image: '/images/angiogram-scan.jpg',
      videoUrl: '/videos/cardiac-catheterization.mp4',
      primaryMetric: '< 15 Min Outpatient',
      statLabel: 'Rapid Diagnostic Precision',
      highlight: 'Sub-Millimeter Stenosis & Bifurcation Localization',
      specs: [
        '15–30 FPS High-Speed Digital Cine Acquisition',
        'Direct Angiogram CD Review with Dr. Prakash Chand Shahi',
        'Ultra-Low Contrast Volume Protocol'
      ],
      telemetry: {
        rhythm: '74 BPM Normal Sinus',
        luminalGain: 'Stenosis Mapped: 85% LAD',
        flowGrade: 'Pre-Intervention Assessment',
        doseReduction: 'CareDose4D Active'
      }
    },
    pacemaker: {
      id: 'pacemaker',
      title: 'Permanent Pacemaker Implantation (PPI)',
      category: 'CARDIAC ELECTROPHYSIOLOGY',
      badge: 'PHYSIOLOGICAL PACING',
      image: '/images/pacemaker-tech.jpg',
      videoUrl: '/videos/facilities-walkthrough.mp4',
      primaryMetric: '14-Year Battery Life',
      statLabel: 'Micro-Lithium Generator',
      highlight: 'Dual-Chamber Rate-Responsive Physiological Synchrony',
      specs: [
        'Physiological Right Ventricular & Atrial Pacing Leads',
        'Automated Threshold & Impedance Telemetry Checks',
        'Minimally Invasive Sub-Clavicular Pouch Placement'
      ],
      telemetry: {
        rhythm: '60–100 BPM Rate-Responsive',
        luminalGain: 'Impedance: 520 Ohms Normal',
        flowGrade: '100% AV Synchrony',
        doseReduction: 'Lead Position Confirmed'
      }
    },
    cathlab: {
      id: 'cathlab',
      title: 'Siemens Artis Zee Cath Lab Pavilion',
      category: 'ADVANCED INFRASTRUCTURE',
      badge: 'BETIAHATA CAMPUS',
      image: '/images/cath-lab.jpg',
      videoUrl: '/videos/facilities-walkthrough.mp4',
      primaryMetric: '< 45 Min Door-to-Balloon',
      statLabel: '24/7 STEMI Emergency Care',
      highlight: 'Class-100 HEPA-14 Sterile Interventional Cleanroom',
      specs: [
        'Sub-Millimeter High-Resolution Digital Flat Panel',
        'Emergency 24/7 Cardiac Catheterization Standby',
        'Direct In-Person Oversight by Dr. Prakash Chand Shahi'
      ],
      telemetry: {
        rhythm: 'Continuous Cardiac Telemetry',
        luminalGain: 'Class-100 Laminar Clean Air',
        flowGrade: '14,000 Sq. Ft. Facility',
        doseReduction: 'NABH Accreditation Standard'
      }
    }
  };

  const current = channels[activeChannel] || channels.stenting;

  const proceduresList = [
    {
      id: 'stenting',
      title: 'Transradial Angioplasty & Stenting',
      tag: 'Wrist-First Access',
      metric: '99.4% Flow',
      image: '/images/radial-catheter-sheath.jpg',
      icon: HeartPulse,
    },
    {
      id: 'angiogram',
      title: 'Coronary Angiogram (CAG)',
      tag: 'Fluoroscopic Cine',
      metric: '< 15 Min',
      image: '/images/angiogram-scan.jpg',
      icon: Activity,
    },
    {
      id: 'pacemaker',
      title: 'Permanent Pacemaker (PPI)',
      tag: 'Physiological Rhythm',
      metric: '14-Yr Life',
      image: '/images/pacemaker-tech.jpg',
      icon: Zap,
    },
    {
      id: 'cathlab',
      title: 'Siemens Artis Zee Cath Lab',
      tag: 'Betiahata Campus',
      metric: '< 45 Min',
      image: '/images/cath-lab.jpg',
      icon: ShieldCheck,
    },
  ];

  return (
    <section id="cardiology" className="relative min-h-[92vh] flex items-center py-20 lg:py-28 px-4 sm:px-6 lg:px-12 overflow-hidden bg-gradient-to-b from-[#FFFDF9] via-[#FEF2F2]/50 to-[#FAFBFD] border-b border-[#FECDD3]/70 select-none">
      
      {/* 1. 3D WebGL Background Environment (Subtle emerald rings & bioparticles) */}
      <CardiologyFullCanvas />

      {/* =========================================================================
          BACKGROUND SYSTEM: AMBIENT VIDEO + ECG WAVEFORM + BLUEPRINT CAD GRID
         ========================================================================= */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        
        {/* Ambient Subtle Cath-Lab Video Background Layer */}
        <div className="absolute inset-0 z-0 overflow-hidden opacity-20 mix-blend-multiply">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            className="w-full h-full object-cover scale-105"
          >
            <source src="/videos/facilities-walkthrough.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-[#FFFDF9]/85 via-transparent to-[#FAFBFD]/90" />
        </div>

        {/* Luminous Emerald, Mint & Soft Amber Glow Spheres */}
        <div className="absolute top-1/4 left-1/4 w-[700px] h-[700px] bg-gradient-to-tr from-[#0284C7]/20 via-[#0EA5E9]/15 to-transparent rounded-full blur-[140px] animate-orb-1" />
        <div className="absolute bottom-10 right-1/4 w-[650px] h-[650px] bg-gradient-to-bl from-[#B91C1C]/20 via-[#FECDD3]/25 to-transparent rounded-full blur-[130px] animate-orb-2" />
        <div className="absolute top-1/2 right-10 w-[450px] h-[450px] bg-rose-300/15 rounded-full blur-[120px] animate-pulse" />

        {/* Architectural CAD Blueprint Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#991B1B14_1.5px,transparent_1.5px),linear-gradient(to_bottom,#991B1B14_1.5px,transparent_1.5px)] bg-[size:4.5rem_4.5rem] [mask-image:radial-gradient(ellipse_80%_70%_at_50%_35%,#000_70%,transparent_100%)]" />

        {/* Sub-Millimeter Dot Coordinate Array */}
        <div className="absolute inset-0 bg-[radial-gradient(#0284C722_1.5px,transparent_1.5px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_75%_65%_at_50%_40%,#000_75%,transparent_100%)]" />

        {/* Continuous Flowing ECG Cardiac Sinus Rhythm Wave */}
        <svg className="absolute inset-x-0 bottom-8 w-full h-32 opacity-35 pointer-events-none" viewBox="0 0 1440 120" fill="none" preserveAspectRatio="none">
          <path
            d="M 0,60 L 120,60 L 140,60 L 150,35 L 160,85 L 175,10 L 190,110 L 205,50 L 220,60 L 360,60 L 480,60 L 500,60 L 510,35 L 520,85 L 535,10 L 550,110 L 565,50 L 580,60 L 720,60 L 840,60 L 860,60 L 870,35 L 880,85 L 895,10 L 910,110 L 925,50 L 940,60 L 1080,60 L 1200,60 L 1220,60 L 1230,35 L 1240,85 L 1255,10 L 1270,110 L 1285,50 L 1300,60 L 1440,60"
            stroke="#0284C7"
            strokeWidth="2.5"
            strokeDasharray="1600"
            className="animate-ecg-dash"
          />
          <circle cx="535" cy="10" r="4.5" fill="#0EA5E9" className="animate-ping" />
          <circle cx="895" cy="10" r="4.5" fill="#0EA5E9" className="animate-ping" />
          <circle cx="1255" cy="10" r="4.5" fill="#0EA5E9" className="animate-ping" />
        </svg>

        {/* Rotating Doppler Radar Compass Arc (Top Right) */}
        <div className="absolute top-16 -right-20 w-[550px] h-[550px] pointer-events-none hidden md:block opacity-40">
          <div className="absolute inset-0 rounded-full border-2 border-dashed border-[#0284C7]/40 animate-radar-sweep" />
          <div className="absolute inset-16 rounded-full border border-[#B91C1C]/30 border-t-[#0EA5E9] animate-rotate-reverse" />
          <div className="absolute inset-32 rounded-full border border-dashed border-[#0284C7]/25 flex items-center justify-center">
            <div className="w-full h-px bg-[#0284C7]/30" />
            <div className="h-full w-px bg-[#0284C7]/30 absolute" />
            <div className="w-4 h-4 rounded-full bg-[#0EA5E9] animate-ping absolute" />
          </div>
        </div>

        {/* Active Sweeping Fluoroscopy Laser Scan */}
        <div className="absolute inset-x-0 h-[2.5px] bg-gradient-to-r from-transparent via-[#0EA5E9] to-transparent shadow-[0_0_16px_#0EA5E9] opacity-50 animate-laser-sweep pointer-events-none" />

        {/* CAD Crosshairs (+) & GPS Telemetry */}
        <div className="absolute top-20 left-12 text-[#B91C1C]/35 font-mono text-xs select-none hidden sm:block">+ 26.7606°N [BETIAHATA]</div>
        <div className="absolute top-20 right-28 text-[#B91C1C]/35 font-mono text-xs select-none hidden sm:block">+ CATH LAB FLURO 01</div>

        {/* Clinical Hemodynamics Watermark Stamp */}
        <div className="absolute top-14 right-10 font-mono text-[10px] text-[#991B1B]/40 tracking-wider hidden lg:block bg-white/70 px-3.5 py-2 rounded-xl border border-[#FECDD3] backdrop-blur-xs text-right">
          <div className="font-bold text-[#991B1B]">LV-EF: 62% • TIMI-3 CORONARY FLOW</div>
          <div className="text-[#B91C1C]">TRANSRADIAL CATHETER SUITE 01</div>
          <div className="text-[#0284C7] text-[9px]">SIEMENS ARTIS ZEE • FLAT-PANEL C-ARM</div>
        </div>
      </div>

      {/* =========================================================================
          MAIN CONTENT GRID: 6 COLS (EDITORIAL & 3D CARDS) + 6 COLS (3D HUD STAGE)
         ========================================================================= */}
      <div className="max-w-7xl mx-auto w-full relative z-10 py-4">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* =====================================================================
              LEFT COLUMN (6 Cols): Header, Clinician Crest & 4 Interactive 3D Cards
             ===================================================================== */}
          <div className="lg:col-span-6 space-y-6 text-left">
            
            {/* 1. Header Badges */}
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FEF2F2] text-[#991B1B] border border-[#FECDD3] text-xs font-bold uppercase tracking-[0.22em] shadow-xs">
                <HeartPulse className="w-4 h-4 text-[#0284C7] animate-pulse" />
                <span>Cardiovascular Sciences &amp; Hemodynamics</span>
              </div>

              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#991B1B] tracking-[-0.03em] leading-[1.05]">
                Preserving Every <br />
                <span className="font-serif italic font-normal text-[#0284C7]">Heartbeat with Precision.</span>
              </h2>

              {/* Lead Cardiologist Pill Badge */}
              <div className="flex items-center gap-3 p-2.5 rounded-2xl bg-white/95 border border-[#FECDD3] shadow-sm max-w-md">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#991B1B] to-[#B91C1C] border border-[#FECDD3] flex items-center justify-center text-[#FECDD3] shrink-0">
                  <Stethoscope className="w-5 h-5 stroke-[1.8]" />
                </div>
                <div className="text-left">
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs font-extrabold text-[#991B1B]">Dr. Prakash Chand Shahi</span>
                    <span className="text-[9px] font-mono font-bold px-2 py-0.5 rounded-full bg-[#FEF2F2] text-[#991B1B] border border-[#38BDF8]">LEAD CLINICIAN</span>
                  </div>
                  <span className="text-[10px] text-[#B91C1C] font-mono font-bold block">
                    DM Cardiology (PGIMER) • MD (KGMU Lucknow)
                  </span>
                </div>
              </div>
            </div>

            {/* 2. Four Interactive 3D Procedure Selector Cards (Visual-First, Minimal Text) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              {proceduresList.map((proc) => {
                const isActive = activeChannel === proc.id;
                const IconComponent = proc.icon;

                return (
                  <button
                    key={proc.id}
                    onClick={() => setActiveChannel(proc.id)}
                    className={`group relative text-left p-3 rounded-2xl transition-all duration-300 border-2 overflow-hidden ${
                      isActive
                        ? 'bg-gradient-to-br from-white via-[#FEF2F2] to-white border-[#0284C7] shadow-lg -translate-y-1 ring-2 ring-[#0EA5E9]/25'
                        : 'bg-white/90 hover:bg-white border-[#FECDD3]/70 hover:border-[#0284C7]/60 shadow-xs hover:shadow-md hover:-translate-y-0.5'
                    }`}
                  >
                    {/* Top Row: 3D Thumbnail & Active Ping */}
                    <div className="flex items-center justify-between gap-2 mb-2.5">
                      <div className="relative w-12 h-12 rounded-xl overflow-hidden border-2 border-[#FECDD3] shrink-0 shadow-xs">
                        <img
                          src={proc.image}
                          alt={proc.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                        <div className="absolute bottom-1 right-1">
                          <IconComponent className="w-3 h-3 text-white" />
                        </div>
                      </div>

                      <div className="text-right">
                        <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-full border block ${
                          isActive
                            ? 'bg-[#991B1B] text-white border-[#991B1B]'
                            : 'bg-[#FEF2F2] text-[#B91C1C] border-[#FECDD3]'
                        }`}>
                          {proc.metric}
                        </span>
                        <span className="text-[9px] font-mono text-slate-500 block pt-0.5">
                          {proc.tag}
                        </span>
                      </div>
                    </div>

                    {/* Procedure Title */}
                    <div className="space-y-0.5">
                      <h3 className={`text-xs font-bold leading-tight ${
                        isActive ? 'text-[#991B1B]' : 'text-slate-800 group-hover:text-[#991B1B]'
                      }`}>
                        {proc.title}
                      </h3>
                    </div>

                    {/* Active Bottom Glow Line */}
                    {isActive && (
                      <div className="absolute bottom-0 inset-x-0 h-1 bg-gradient-to-r from-[#991B1B] via-[#0EA5E9] to-[#B91C1C]" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* 3. Action Buttons Row */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-gradient-to-r from-[#991B1B] via-[#B91C1C] to-[#DC2626] hover:from-[#7F1D1D] hover:to-[#991B1B] text-white font-bold text-xs uppercase tracking-wider shadow-md shadow-[#991B1B]/20 transition-all hover:scale-102"
              >
                <span>Book Priority OPD Pass</span>
                <ArrowRight className="w-4 h-4 text-amber-300" />
              </Link>

              <Link
                to="/treatments"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white hover:bg-[#FEF2F2] text-[#991B1B] font-bold text-xs uppercase tracking-wider border-2 border-[#FECDD3] shadow-xs transition-all"
              >
                <span>Explore Treatments Dossier</span>
                <ChevronRight className="w-4 h-4 text-[#0284C7]" />
              </Link>
            </div>

          </div>

          {/* =====================================================================
              RIGHT COLUMN (6 Cols): 3D Panoramic Cardiac Cath-Lab Stage & HUD Console
             ===================================================================== */}
          <div className="lg:col-span-6 space-y-4">
            
            {/* The Main High-End 3D Visual Console */}
            <div className="relative rounded-[2.5rem] bg-slate-950 border-2 border-[#FECDD3] shadow-2xl overflow-hidden group">
              
              {/* Media Container with 4K Cine Video & Smooth Loop */}
              <div className="relative aspect-[16/11] w-full overflow-hidden">
                <video
                  key={current.id}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  poster={current.image}
                  className="w-full h-full object-cover filter contrast-115 brightness-95 group-hover:scale-105 transition-transform duration-700"
                >
                  <source src={current.videoUrl} type="video/mp4" />
                </video>

                {/* Ambient Dark Gradient & Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-slate-950/60 pointer-events-none" />

                {/* Top HUD Status Bar */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-20 text-white font-mono text-[11px]">
                  <div className="flex items-center gap-2">
                    <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-[#FECDD3] font-bold">
                      <Radio className="w-3 h-3 text-red-500 animate-ping" />
                      <span>LIVE CATH-LAB FLURO</span>
                    </span>
                    <span className="px-2.5 py-1 rounded-full bg-black/50 backdrop-blur-md border border-white/10 hidden sm:inline-block text-slate-300">
                      {current.badge}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setIsVideoModalOpen(true)}
                      className="px-3 py-1 rounded-full bg-[#0EA5E9] hover:bg-[#0284C7] text-slate-950 font-sans text-xs font-bold flex items-center gap-1.5 shadow-md transition-all cursor-pointer"
                    >
                      <Play className="w-3 h-3 fill-current" />
                      <span>Watch Reel</span>
                    </button>
                  </div>
                </div>

                {/* Center Precision Aim Crosshairs */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10 opacity-30">
                  <div className="w-24 h-24 border border-[#0EA5E9] rounded-full flex items-center justify-center">
                    <div className="w-full h-px bg-[#0EA5E9]" />
                    <div className="h-full w-px bg-[#0EA5E9] absolute" />
                    <div className="w-3 h-3 rounded-full bg-[#0EA5E9] animate-ping absolute" />
                  </div>
                </div>

                {/* Bottom Overlay Title & Live Telemetry Metrics */}
                <div className="absolute bottom-0 inset-x-0 p-5 sm:p-6 z-20 text-white space-y-2">
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-[10px] font-mono font-bold tracking-widest text-[#0EA5E9] uppercase bg-[#450A0A]/80 px-2.5 py-0.5 rounded border border-[#0284C7]/40">
                      {current.category}
                    </span>
                    <span className="text-xs font-mono font-bold text-amber-300">
                      {current.primaryMetric}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-2xl font-extrabold text-white tracking-tight leading-snug">
                    {current.title}
                  </h3>

                  <p className="text-xs text-slate-300 font-light hidden sm:block">
                    {current.highlight}
                  </p>

                  {/* Real-time Telemetry Grid Inside HUD */}
                  <div className="pt-2 grid grid-cols-2 sm:grid-cols-4 gap-2 text-[10px] font-mono border-t border-white/15">
                    <div className="bg-black/40 p-1.5 rounded-lg border border-white/10">
                      <span className="text-slate-400 block text-[9px]">SINUS RHYTHM</span>
                      <span className="text-[#38BDF8] font-bold">{current.telemetry.rhythm}</span>
                    </div>
                    <div className="bg-black/40 p-1.5 rounded-lg border border-white/10">
                      <span className="text-slate-400 block text-[9px]">VESSEL GAIN</span>
                      <span className="text-white font-bold">{current.telemetry.luminalGain}</span>
                    </div>
                    <div className="bg-black/40 p-1.5 rounded-lg border border-white/10">
                      <span className="text-slate-400 block text-[9px]">PERFUSION</span>
                      <span className="text-[#FECDD3] font-bold">{current.telemetry.flowGrade}</span>
                    </div>
                    <div className="bg-black/40 p-1.5 rounded-lg border border-white/10">
                      <span className="text-slate-400 block text-[9px]">RADIATION</span>
                      <span className="text-amber-300 font-bold">{current.telemetry.doseReduction}</span>
                    </div>
                  </div>
                </div>

              </div>

            </div>

            {/* Visual Channel Switcher Bar */}
            <div className="flex items-center gap-2">
              {Object.values(channels).map((chan) => {
                const isActive = activeChannel === chan.id;
                return (
                  <button
                    key={chan.id}
                    onClick={() => setActiveChannel(chan.id)}
                    className={`flex-1 py-2 px-2.5 rounded-xl text-[11px] font-bold tracking-wide transition-all duration-300 text-center truncate ${
                      isActive
                        ? 'bg-[#991B1B] text-white shadow-md border border-[#0EA5E9]'
                        : 'bg-white hover:bg-[#FEF2F2] text-slate-700 border border-[#FECDD3]/70'
                    }`}
                  >
                    {chan.id === 'stenting' && '🫀 Stenting'}
                    {chan.id === 'angiogram' && '🩺 Angiogram'}
                    {chan.id === 'pacemaker' && '⚡ Pacemaker'}
                    {chan.id === 'cathlab' && '🏥 Cath Lab'}
                  </button>
                );
              })}
            </div>

            {/* Verified Clinical Facts Ribbon Under Visual Console */}
            <div className="pt-2 grid grid-cols-2 sm:grid-cols-4 gap-3 bg-white/90 p-3 rounded-2xl border border-[#FECDD3] shadow-xs">
              <div className="text-left px-2 border-r border-slate-200">
                <span className="text-xl font-extrabold text-[#991B1B] block leading-none">15,000+</span>
                <span className="text-[10px] text-slate-600 font-bold uppercase tracking-wider block pt-1">Procedures</span>
                <span className="text-[9px] text-slate-500 block">Radial angioplasty</span>
              </div>
              <div className="text-left px-2 sm:border-r border-slate-200">
                <span className="text-xl font-extrabold text-[#B91C1C] block leading-none">&lt; 45 Min</span>
                <span className="text-[10px] text-slate-600 font-bold uppercase tracking-wider block pt-1">Door-To-Balloon</span>
                <span className="text-[9px] text-slate-500 block">24/7 STEMI standby</span>
              </div>
              <div className="text-left px-2 border-r border-slate-200">
                <span className="text-xl font-extrabold text-[#0284C7] block leading-none">99.4%</span>
                <span className="text-[10px] text-slate-600 font-bold uppercase tracking-wider block pt-1">Patency</span>
                <span className="text-[9px] text-slate-500 block">Restored blood flow</span>
              </div>
              <div className="text-left px-2">
                <span className="text-xl font-extrabold text-[#991B1B] block leading-none">22+ Yrs</span>
                <span className="text-[10px] text-slate-600 font-bold uppercase tracking-wider block pt-1">Experience</span>
                <span className="text-[9px] text-slate-500 block">Dr. Prakash Chand Shahi</span>
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* Cinematic Fullscreen Video Modal */}
      {isVideoModalOpen && (
        <CinematicVideoPlayerModal
          isOpen={isVideoModalOpen}
          onClose={() => setIsVideoModalOpen(false)}
          videoSrc={current.videoUrl}
          title={current.title}
          subtitle={`${current.category} • Dr. Prakash Chand Shahi`}
          poster={current.image}
        />
      )}

    </section>
  );
}
