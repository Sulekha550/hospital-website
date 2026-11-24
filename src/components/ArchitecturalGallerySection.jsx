import React, { useState } from 'react';
import { Eye, X, ArrowRight, Building2, Sparkles, ShieldCheck, ChevronRight, Maximize2, Compass, Play, Film } from 'lucide-react';
import { PULSE_DATA } from '../data/pulseData';
import CinematicVideoPlayerModal from './CinematicVideoPlayerModal';

/**
 * ArchitecturalGallerySection
 * Completely redesigned architectural facility theatre:
 * - Distinct background: Deep Architectural Slate & Blueprint Studio (zero white card grids)
 * - Full-width cinematic panoramic facility stage with live technical HUD overlays & Ken Burns drone motion
 * - Sleek linear filmstrip facility navigator with seamless cross-fade
 * - 4K High-Resolution Video Player Experience
 */
export default function ArchitecturalGallerySection() {
  const { hospitalTour } = PULSE_DATA;
  const [activeIndex, setActiveIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  // Technical specifications for each facility
  const facilitySpecs = [
    { airQuality: "Acoustic Dampening • Zero-Wait Kiosks", standard: "NABH Reception Standard", area: "14,000 Sq. Ft. Atrium" },
    { airQuality: "Class-100 Laminar Airflow • ISO-5", standard: "Siemens Artis Zee Fluoroscopy", area: "Digital Cath-Lab 01" },
    { airQuality: "Private Acoustic Shielding • Ultra-Quiet", standard: "Doctor Consultation Wing", area: "Suite 101 – 115" },
    { airQuality: "Positive Pressure • 35 Air Changes/Hr", standard: "Ultra-Clean Surgical OT", area: "Class-100 OT Complex" },
    { airQuality: "Whisper-Quiet 70% Acoustic Suppression", standard: "3.0 Tesla Silent MRI", area: "Radiology Center" },
  ];

  const current = hospitalTour[activeIndex] || hospitalTour[0];
  const currentSpec = facilitySpecs[activeIndex] || facilitySpecs[0];

  return (
    <section id="gallery" className="relative py-28 lg:py-36 overflow-hidden select-none bg-gradient-to-b from-[#031711] via-[#06241B] to-[#02130E] text-white border-y border-[#450A0A]/80">
      
      {/* =========================================================================
          DISTINCT VISIBLE BACKGROUND: AMBIENT FACILITIES VIDEO + BLUEPRINT LASER ENVIRONMENT
         ========================================================================= */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Ambient 4K Surgical Suite & Campus Walkthrough Video Layer */}
        <div className="absolute inset-0 -z-10 overflow-hidden opacity-30 mix-blend-screen">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            className="w-full h-full object-cover filter contrast-125 saturate-150"
          >
            <source src="/videos/facilities-walkthrough.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-[#031711]/75 via-transparent to-[#02130E]/85" />
        </div>

        {/* Luminous Emerald & Warm Amber Depth Glows */}
        <div className="absolute top-1/4 right-1/4 w-[750px] h-[750px] bg-[#B91C1C]/25 rounded-full blur-[130px] animate-float-1" />
        <div className="absolute bottom-10 left-10 w-[650px] h-[650px] bg-[#0284C7]/20 rounded-full blur-[120px] animate-float-2" />
        <div className="absolute top-1/2 left-1/3 w-[500px] h-[500px] bg-rose-400/10 rounded-full blur-[140px] animate-pulse" />

        {/* Visible Architectural Blueprint Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0284C725_1.5px,transparent_1.5px),linear-gradient(to_bottom,#0284C725_1.5px,transparent_1.5px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_70%_at_50%_40%,#000_75%,transparent_100%)]" />

        {/* Sub-Millimeter Precision Coordinate Dot Grid */}
        <div className="absolute inset-0 bg-[radial-gradient(#0EA5E935_1.5px,transparent_1.5px)] bg-[size:32px_32px] opacity-40 [mask-image:radial-gradient(ellipse_75%_65%_at_50%_50%,#000_70%,transparent_100%)]" />

        {/* Dynamic Sweeping Architectural Laser Scanner Beams (Dual Axis) */}
        <div className="absolute inset-x-0 h-[3px] bg-gradient-to-r from-transparent via-[#0EA5E9] to-transparent shadow-[0_0_20px_#0EA5E9] animate-laser-v opacity-80" />
        <div className="absolute inset-y-0 w-[2px] bg-gradient-to-b from-transparent via-[#0284C7] to-transparent shadow-[0_0_15px_#0284C7] animate-laser-sweep opacity-40" />

        {/* Continuous ECG Cardiac Sinus Rhythm Waveform across background */}
        <svg className="absolute inset-x-0 top-1/2 -translate-y-1/2 w-full h-44 opacity-30 pointer-events-none" viewBox="0 0 1440 160" fill="none" preserveAspectRatio="none">
          <path
            d="M 0,80 L 120,80 L 140,80 L 150,50 L 160,110 L 175,20 L 190,135 L 205,70 L 220,80 L 360,80 L 480,80 L 500,80 L 510,50 L 520,110 L 535,20 L 550,135 L 565,70 L 580,80 L 720,80 L 840,80 L 860,80 L 870,50 L 880,110 L 895,20 L 910,135 L 925,70 L 940,80 L 1080,80 L 1200,80 L 1220,80 L 1230,50 L 1240,110 L 1255,20 L 1270,135 L 1285,70 L 1300,80 L 1440,80"
            stroke="#0EA5E9"
            strokeWidth="2.5"
            strokeDasharray="1600"
            className="animate-ecg-dash"
          />
          <circle cx="535" cy="20" r="5" fill="#38BDF8" className="animate-ping" />
          <circle cx="895" cy="20" r="5" fill="#38BDF8" className="animate-ping" />
          <circle cx="1255" cy="20" r="5" fill="#38BDF8" className="animate-ping" />
        </svg>

        {/* 1. Rotating Architectural CAD Masterplan Compass Rings (Top-Right) */}
        <div className="absolute -top-20 -right-20 w-[600px] h-[600px] pointer-events-none hidden md:block">
          {/* Outer Compass Degree Ring (Clockwise) */}
          <div className="absolute inset-0 rounded-full border-2 border-dashed border-[#0284C7]/40 animate-radar-sweep" />
          {/* Middle Compass Ring (Counter-Clockwise) */}
          <div className="absolute inset-16 rounded-full border-2 border-[#0284C7]/50 border-t-rose-300 animate-rotate-reverse" />
          {/* Degree Markers */}
          <div className="absolute inset-4 flex items-center justify-between text-[9px] font-mono text-[#0EA5E9]/50 px-2">
            <span>270°</span>
            <span>090°</span>
          </div>
          <div className="absolute inset-4 flex flex-col items-center justify-between text-[9px] font-mono text-[#0EA5E9]/50 py-2">
            <span>000°</span>
            <span>180°</span>
          </div>
          {/* Inner Target Crosshairs */}
          <div className="absolute inset-32 rounded-full border border-[#0284C7]/35 flex items-center justify-center">
            <div className="w-full h-px bg-[#0284C7]/50" />
            <div className="h-full w-px bg-[#0284C7]/50 absolute" />
            <div className="w-5 h-5 rounded-full bg-[#0284C7]/50 animate-ping absolute" />
          </div>
        </div>

        {/* 2. Counter-Rotating CAD Radar Rings (Bottom-Left) */}
        <div className="absolute -bottom-24 -left-24 w-[500px] h-[500px] pointer-events-none hidden lg:block opacity-60">
          <div className="absolute inset-0 rounded-full border-2 border-[#B91C1C]/30 animate-rotate-reverse" />
          <div className="absolute inset-12 rounded-full border-2 border-dashed border-[#0EA5E9]/40 animate-radar-sweep" />
          <div className="absolute inset-28 rounded-full border border-rose-400/30 flex items-center justify-center">
            <div className="w-full h-px bg-[#0EA5E9]/40" />
            <div className="h-full w-px bg-[#0EA5E9]/40 absolute" />
            <div className="w-3 h-3 rounded-full bg-[#0EA5E9] animate-ping absolute" />
          </div>
        </div>

        {/* 3. High-Precision Blueprint Crosshairs (+) at key architectural coordinates */}
        <div className="absolute top-20 left-12 text-[#0EA5E9]/40 font-mono text-xs select-none hidden sm:block">+ 26.7606°N</div>
        <div className="absolute top-20 right-28 text-[#0EA5E9]/40 font-mono text-xs select-none hidden sm:block">+ 83.3732°E</div>
        <div className="absolute bottom-24 left-1/4 text-[#0EA5E9]/30 font-mono text-xs select-none hidden md:block">+ CATH-LAB 01</div>
        <div className="absolute bottom-24 right-1/4 text-[#0EA5E9]/30 font-mono text-xs select-none hidden md:block">+ LAMINAR OT</div>

        {/* 4. Pulsing Architectural GPS Telemetry Nodes */}
        <div className="absolute top-24 left-16 flex items-center gap-2 font-mono text-[11px] text-[#FECDD3]/60 hidden sm:flex bg-[#450A0A]/60 px-3 py-1 rounded-full border border-[#0284C7]/30 backdrop-blur-xs">
          <span className="w-2 h-2 rounded-full bg-[#0EA5E9] animate-ping" />
          <span>NABH TERTIARY CLINICAL CAMPUS · 26.7606° N, 83.3732° E</span>
        </div>

        {/* Technical Blueprint Watermark Stamp */}
        <div className="absolute top-12 right-12 text-right font-mono text-[11px] text-[#0EA5E9]/40 tracking-widest hidden md:block bg-[#450A0A]/50 p-3 rounded-xl border border-[#0284C7]/30 backdrop-blur-xs">
          <div className="font-bold text-[#FECDD3]">PULSE CAMPUS MASTERPLAN</div>
          <div>NABH GRADE-A SPECIFICATION</div>
          <div>COORD: 26.7606° N, 83.3732° E</div>
          <div className="text-[9px] text-[#38BDF8]">HEPA-14 POSITIVE PRESSURE: ACTIVE</div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        {/* Section Header: Grand Architectural Narrative */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#450A0A]/80 backdrop-blur-md border border-[#0284C7]/30 text-[#FECDD3] text-xs font-mono font-bold uppercase tracking-[0.22em] shadow-xs">
              <Building2 className="w-4 h-4 text-[#0284C7]" />
              <span>Campus Tour • Architectural Excellence</span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-[-0.03em] leading-[1.06]">
              Architectural Mastery. <br />
              <span className="font-serif italic font-normal text-[#0284C7]">Sterile Clinical Precision.</span>
            </h2>
          </div>

          <div className="space-y-2">
            <p className="text-sm sm:text-base text-slate-300 max-w-md leading-relaxed font-semibold">
              14,000 sq. ft. NABH-certified pavilion with HEPA-14 laminar suites directed by Dr. Prakash Chand Shahi.
            </p>
            <div className="flex items-center gap-2 text-xs font-mono text-[#0284C7]">
              <span className="w-2 h-2 rounded-full bg-[#0284C7] animate-pulse" />
              <span>Betiahata Medical Hub • Gorakhpur</span>
            </div>
          </div>
        </div>

        {/* Main Panoramic Facility Theatre Stage (Cinematic Widescreen - NO CARDS) */}
        <div className="relative rounded-[2.5rem] overflow-hidden border-2 border-white/20 shadow-2xl aspect-[16/9] sm:aspect-[21/10] bg-slate-950 group">
          
          {/* Active Facility Photo with 4K Drone Video Motion */}
          <img
            key={current.id}
            src={current.image}
            alt={current.title}
            className="w-full h-full object-cover animate-ken-burns filter brightness-[0.88] contrast-[1.05]"
          />

          {/* Vignette & Ambient Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/25 to-slate-950/40 pointer-events-none" />

          {/* Top Architectural HUD Metadata */}
          <div className="absolute top-5 left-5 right-5 flex items-center justify-between z-20 text-white font-mono text-[11px]">
            <div className="flex items-center gap-3">
              <span className="px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 font-bold tracking-wider text-[#FECDD3]">
                0{activeIndex + 1} / 0{hospitalTour.length} • {current.category}
              </span>
              <span className="px-3 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/10 hidden sm:inline-block text-slate-300">
                {currentSpec.area}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="px-3 py-1.5 rounded-full bg-[#450A0A]/80 backdrop-blur-md border border-[#0284C7]/30 text-[#0284C7] font-bold hidden sm:flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>{currentSpec.standard}</span>
              </span>

              <button
                onClick={() => setIsVideoModalOpen(true)}
                className="px-3.5 py-1.5 rounded-full bg-[#0EA5E9]/90 hover:bg-[#0284C7] text-slate-950 font-sans text-xs font-bold flex items-center gap-1.5 shadow-md transition-all"
                title="Play Video Tour"
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>Video Reel</span>
              </button>

              <button
                onClick={() => setIsLightboxOpen(true)}
                className="p-2 sm:px-3.5 sm:py-1.5 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md border border-white/30 text-white font-sans text-xs font-semibold flex items-center gap-1.5 transition-all"
                title="View Fullscreen"
              >
                <Maximize2 className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Fullscreen</span>
              </button>
            </div>
          </div>

          {/* Center Play Video Action Overlay */}
          <div className="absolute inset-0 flex items-center justify-center z-15 pointer-events-none">
            <button
              onClick={() => setIsVideoModalOpen(true)}
              className="pointer-events-auto p-4 sm:p-5 rounded-full bg-[#0EA5E9]/90 hover:bg-[#0284C7] text-slate-950 shadow-2xl hover:scale-110 transition-all duration-300 ring-4 ring-rose-400/40 backdrop-blur-md flex items-center gap-2.5"
            >
              <Play className="w-6 h-6 fill-current ml-0.5" />
              <span className="font-bold text-xs uppercase tracking-wider pr-1 hidden sm:inline">Watch 4K Video Tour</span>
            </button>
          </div>

          {/* Center Blueprint Crosshair (Architectural Precision Touch) */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10 opacity-25">
            <div className="w-28 h-28 border border-[#0284C7] rounded-full flex items-center justify-center">
              <div className="w-full h-px bg-[#0284C7]" />
              <div className="h-full w-px bg-[#0284C7] absolute" />
            </div>
          </div>

          {/* Bottom Descriptive Caption Bar */}
          <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10 z-20 text-white space-y-2">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4">
              <div className="space-y-1">
                <span className="text-xs font-mono font-bold tracking-[0.25em] text-[#0284C7] uppercase block">
                  {currentSpec.airQuality}
                </span>
                <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                  {current.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed font-light">
                  {current.description}
                </p>
              </div>

              <div className="shrink-0 flex items-center gap-2">
                <button
                  onClick={() => setIsLightboxOpen(true)}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0EA5E9] hover:bg-[#0284C7] text-slate-950 font-bold text-xs uppercase tracking-wider shadow-lg shadow-rose-500/25 transition-all"
                >
                  <Eye className="w-4 h-4 text-slate-950" />
                  <span>Inspect High-Res Facility</span>
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Linear Filmstrip Facility Navigator (NO CARDS - Sleek Linear Strip) */}
        <div className="mt-8 flex flex-wrap items-center justify-between gap-2 border-b border-[#450A0A] pb-6">
          {hospitalTour.map((item, idx) => {
            const active = activeIndex === idx;
            return (
              <button
                key={item.id}
                onClick={() => setActiveIndex(idx)}
                className={`group flex items-center gap-3 py-3 px-4 rounded-2xl text-left transition-all duration-300 relative ${
                  active
                    ? 'bg-[#450A0A]/90 text-white border border-[#0284C7]/40 shadow-lg'
                    : 'bg-transparent text-slate-400 hover:text-white hover:bg-white/5 border border-transparent'
                }`}
              >
                <span className={`font-mono text-xs font-bold ${active ? 'text-[#0284C7]' : 'text-slate-500'}`}>
                  0{idx + 1}
                </span>

                <div className="space-y-0.5">
                  <div className={`text-xs font-bold leading-tight ${active ? 'text-white' : 'text-slate-300 group-hover:text-white'}`}>
                    {item.title.split(' ')[0]} {item.title.split(' ')[1] || ''}
                  </div>
                  <div className="text-[10px] text-slate-400 font-mono">
                    {item.category.split('&')[0]}
                  </div>
                </div>

                {active && (
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0284C7] animate-ping ml-1" />
                )}
              </button>
            );
          })}
        </div>

        {/* Bottom Architectural Infrastructure Metrics (Divided Ribbon, Zero Cards) */}
        <div className="mt-8 grid grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-rose-900/60 pt-2">
          
          <div className="px-4 py-2 text-left">
            <span className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight block">120,000+</span>
            <span className="text-xs text-[#0284C7] font-semibold uppercase tracking-wider block font-mono">Sq. Ft. Medical Campus</span>
            <span className="text-[11px] text-slate-300">Engineered to NABH tertiary clinical guidelines</span>
          </div>

          <div className="px-4 py-2 text-left">
            <span className="text-2xl sm:text-4xl font-extrabold text-[#FECDD3] tracking-tight block">Class-100</span>
            <span className="text-xs text-[#0284C7] font-semibold uppercase tracking-wider block font-mono">Laminar Airflow Suites</span>
            <span className="text-[11px] text-slate-300">Zero particulate surgical theatre environments</span>
          </div>

          <div className="px-4 py-2 text-left">
            <span className="text-2xl sm:text-4xl font-extrabold text-[#0284C7] tracking-tight block">HEPA-14</span>
            <span className="text-xs text-[#0284C7] font-semibold uppercase tracking-wider block font-mono">Medical AHU Filtration</span>
            <span className="text-[11px] text-slate-300">35 sterile air exchanges per hour</span>
          </div>

          <div className="px-4 py-2 text-left">
            <span className="text-2xl sm:text-4xl font-extrabold text-amber-400 tracking-tight block">24/7/365</span>
            <span className="text-xs text-amber-300 font-semibold uppercase tracking-wider block font-mono">Redundant Power & O2</span>
            <span className="text-[11px] text-slate-300">Uninterrupted critical care & ICU life support</span>
          </div>

        </div>

      </div>

      {/* Fullscreen Photo Lightbox Modal */}
      {isLightboxOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-black/90 backdrop-blur-xl animate-in fade-in duration-200">
          <div className="relative w-full max-w-5xl bg-[#031711] rounded-3xl overflow-hidden border border-[#0284C7]/30 shadow-2xl">
            
            <div className="relative aspect-[16/10] sm:aspect-[16/9]">
              <img
                src={current.image}
                alt={current.title}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setIsLightboxOpen(false)}
                className="absolute top-4 right-4 p-2.5 rounded-full bg-black/70 hover:bg-black text-white transition-colors border border-white/20"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 bg-[#031711] text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-[#450A0A]">
              <div className="space-y-1">
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#0284C7]">
                  {current.category} • {currentSpec.area}
                </span>
                <h3 className="text-xl font-bold text-white">
                  {current.title}
                </h3>
                <p className="text-xs text-slate-300 max-w-2xl">
                  {current.description}
                </p>
              </div>

              <button
                onClick={() => setIsLightboxOpen(false)}
                className="px-6 py-2.5 rounded-full bg-[#0EA5E9 hover:bg-[#0284C7] text-slate-950 text-xs font-bold uppercase tracking-wider shrink-0 transition-colors"
              >
                Close Preview
              </button>
            </div>

          </div>
        </div>
      )}

      {/* Interactive 4K Cinematic Video Player Modal */}
      <CinematicVideoPlayerModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
      />

    </section>
  );
}
