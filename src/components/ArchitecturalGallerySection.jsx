import React, { useState } from 'react';
import { Eye, X, ArrowRight, Building2, Sparkles, ShieldCheck, ChevronRight, Maximize2, Compass } from 'lucide-react';
import { PULSE_DATA } from '../data/pulseData';

/**
 * ArchitecturalGallerySection
 * Completely redesigned architectural facility theatre:
 * - Distinct background: Deep Architectural Slate & Blueprint Studio (zero white card grids)
 * - Full-width cinematic panoramic facility stage with live technical HUD overlays
 * - Sleek linear filmstrip facility navigator with seamless cross-fade
 * - High-resolution fullscreen lightbox modal
 */
export default function ArchitecturalGallerySection() {
  const { hospitalTour } = PULSE_DATA;
  const [activeIndex, setActiveIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

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
    <section id="gallery" className="relative py-28 lg:py-36 overflow-hidden select-none bg-gradient-to-b from-[#031711] via-[#06241B] to-[#02130E] text-white border-y border-emerald-950/80">
      
      {/* =========================================================================
          DISTINCT VISIBLE BACKGROUND: DEEP OBSIDIAN PINE & EMERALD BLUEPRINT ENVIRONMENT
         ========================================================================= */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Luminous Emerald & Warm Amber Depth Glows */}
        <div className="absolute top-1/4 right-1/4 w-[700px] h-[700px] bg-[#059669]/15 rounded-full blur-[150px]" />
        <div className="absolute bottom-10 left-10 w-[600px] h-[600px] bg-[#10B981]/10 rounded-full blur-[140px]" />

        {/* Visible Architectural Blueprint Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#10b98114_1px,transparent_1px),linear-gradient(to_bottom,#10b98114_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_75%_65%_at_50%_40%,#000_65%,transparent_100%)]" />

        {/* Technical Blueprint Watermark Stamp */}
        <div className="absolute top-12 right-12 text-right font-mono text-[11px] text-emerald-400/25 tracking-widest hidden md:block">
          <div>PULSE CAMPUS MASTERPLAN</div>
          <div>NABH GRADE-A SPECIFICATION</div>
          <div>COORD: 26.7606° N, 83.3732° E</div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        {/* Section Header: Grand Architectural Narrative */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/80 backdrop-blur-md border border-emerald-500/30 text-emerald-300 text-xs font-mono font-bold uppercase tracking-[0.22em] shadow-xs">
              <Building2 className="w-4 h-4 text-emerald-400" />
              <span>Campus Tour • Architectural Excellence</span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-[-0.03em] leading-[1.06]">
              Architectural Mastery. <br />
              <span className="font-serif italic font-normal text-[#10B981]">Sterile Clinical Precision.</span>
            </h2>
          </div>

          <p className="text-sm sm:text-base text-slate-300 max-w-md leading-relaxed font-light">
            Constructed to NABH tertiary hospital standards with HEPA-14 filtered laminar airflow, digital catheterization suites, and unhurried private consultation chambers.
          </p>
        </div>

        {/* Main Panoramic Facility Theatre Stage (Cinematic Widescreen - NO CARDS) */}
        <div className="relative rounded-[2.5rem] overflow-hidden border-2 border-white/20 shadow-2xl aspect-[16/9] sm:aspect-[21/10] bg-slate-950 group">
          
          {/* Active Facility Photo with Slow Zoom on Hover */}
          <img
            key={current.id}
            src={current.image}
            alt={current.title}
            className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105 filter brightness-[0.88] contrast-[1.05]"
          />

          {/* Vignette & Ambient Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/25 to-slate-950/40 pointer-events-none" />

          {/* Top Architectural HUD Metadata */}
          <div className="absolute top-5 left-5 right-5 flex items-center justify-between z-20 text-white font-mono text-[11px]">
            <div className="flex items-center gap-3">
              <span className="px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 font-bold tracking-wider text-sky-300">
                0{activeIndex + 1} / 0{hospitalTour.length} • {current.category}
              </span>
              <span className="px-3 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/10 hidden sm:inline-block text-slate-300">
                {currentSpec.area}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="px-3 py-1.5 rounded-full bg-emerald-950/80 backdrop-blur-md border border-emerald-500/30 text-emerald-400 font-bold hidden sm:flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>{currentSpec.standard}</span>
              </span>

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

          {/* Center Blueprint Crosshair (Architectural Precision Touch) */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10 opacity-25">
            <div className="w-28 h-28 border border-emerald-400 rounded-full flex items-center justify-center">
              <div className="w-full h-px bg-emerald-400" />
              <div className="h-full w-px bg-emerald-400 absolute" />
            </div>
          </div>

          {/* Bottom Descriptive Caption Bar */}
          <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10 z-20 text-white space-y-2">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4">
              <div className="space-y-1">
                <span className="text-xs font-mono font-bold tracking-[0.25em] text-[#10B981] uppercase block">
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
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs uppercase tracking-wider shadow-lg shadow-emerald-500/25 transition-all"
                >
                  <Eye className="w-4 h-4 text-slate-950" />
                  <span>Inspect High-Res Facility</span>
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Linear Filmstrip Facility Navigator (NO CARDS - Sleek Linear Strip) */}
        <div className="mt-8 flex flex-wrap items-center justify-between gap-2 border-b border-emerald-950 pb-6">
          {hospitalTour.map((item, idx) => {
            const active = activeIndex === idx;
            return (
              <button
                key={item.id}
                onClick={() => setActiveIndex(idx)}
                className={`group flex items-center gap-3 py-3 px-4 rounded-2xl text-left transition-all duration-300 relative ${
                  active
                    ? 'bg-emerald-950/90 text-white border border-emerald-500/40 shadow-lg'
                    : 'bg-transparent text-slate-400 hover:text-white hover:bg-white/5 border border-transparent'
                }`}
              >
                <span className={`font-mono text-xs font-bold ${active ? 'text-emerald-400' : 'text-slate-500'}`}>
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
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping ml-1" />
                )}
              </button>
            );
          })}
        </div>

        {/* Bottom Architectural Infrastructure Metrics (Divided Ribbon, Zero Cards) */}
        <div className="mt-8 grid grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-sky-950 pt-2">
          
          <div className="px-4 py-2 text-left">
            <span className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight block">120,000+</span>
            <span className="text-xs text-sky-300 font-semibold uppercase tracking-wider block font-mono">Sq. Ft. Medical Campus</span>
            <span className="text-[11px] text-slate-400">Engineered to NABH tertiary clinical guidelines</span>
          </div>

          <div className="px-4 py-2 text-left">
            <span className="text-2xl sm:text-4xl font-extrabold text-[#38BDF8] tracking-tight block">Class-100</span>
            <span className="text-xs text-sky-300 font-semibold uppercase tracking-wider block font-mono">Laminar Airflow Suites</span>
            <span className="text-[11px] text-slate-400">Zero particulate surgical theatre environments</span>
          </div>

          <div className="px-4 py-2 text-left">
            <span className="text-2xl sm:text-4xl font-extrabold text-emerald-400 tracking-tight block">HEPA-14</span>
            <span className="text-xs text-sky-300 font-semibold uppercase tracking-wider block font-mono">Medical AHU Filtration</span>
            <span className="text-[11px] text-slate-400">35 sterile air exchanges per hour</span>
          </div>

          <div className="px-4 py-2 text-left">
            <span className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight block">24/7/365</span>
            <span className="text-xs text-sky-300 font-semibold uppercase tracking-wider block font-mono">Redundant Power & O2</span>
            <span className="text-[11px] text-slate-400">Uninterrupted critical care & ICU life support</span>
          </div>

        </div>

      </div>

      {/* Fullscreen Photo Lightbox Modal */}
      {isLightboxOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-black/90 backdrop-blur-xl animate-in fade-in duration-200">
          <div className="relative w-full max-w-5xl bg-[#0B1524] rounded-3xl overflow-hidden border border-white/20 shadow-2xl">
            
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

            <div className="p-6 bg-[#0B1524] text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-sky-950">
              <div className="space-y-1">
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-sky-400">
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
                className="px-6 py-2.5 rounded-full bg-white text-[#0B1524] text-xs font-bold uppercase tracking-wider shrink-0"
              >
                Close Preview
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
