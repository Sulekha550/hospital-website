import React, { useState } from 'react';
import { Eye, X, ArrowRight, Building2, Sparkles, ShieldCheck, ChevronRight, Maximize2, Compass, Play, Film } from 'lucide-react';
import { PULSE_DATA } from '../data/pulseData';
import CinematicVideoPlayerModal from './CinematicVideoPlayerModal';
import SectionBackgroundMotion from './SectionBackgroundMotion';

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
    <section id="gallery" className="relative py-28 lg:py-36 overflow-hidden select-none bg-gradient-to-b from-[#FAF7F0] via-[#FDFBF7] to-[#F5EFEB] text-slate-900 border-y border-amber-100/60">

      {/* Bespoke Structural Pavilion Blueprint & Ambient Spatial Masterplan */}
      <SectionBackgroundMotion variant="home-gallery" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">

        {/* Section Header: Grand Architectural Narrative */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-orange-200/80 text-[#9A3412] text-xs font-mono font-bold uppercase tracking-[0.22em] shadow-xs">
              <Building2 className="w-4 h-4 text-[#EA580C]" />
              <span>Campus Tour • Architectural Excellence</span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-950 tracking-[-0.03em] leading-[1.06]">
              Architectural Mastery. <br />
              <span className="font-serif italic font-normal text-[#BE123C]">Sterile Clinical Precision.</span>
            </h2>
          </div>

          <div className="space-y-2">
            <p className="text-sm sm:text-base text-slate-700 max-w-md leading-relaxed font-semibold">
              14,000 sq. ft. NABH-certified pavilion with HEPA-14 laminar suites directed by Dr. Prakash Chand Shahi.
            </p>
            <div className="flex items-center gap-2 text-xs font-mono text-[#BE123C]">
              <span className="w-2 h-2 rounded-full bg-[#E11D48] animate-pulse" />
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
              <span className="px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 font-bold tracking-wider text-[#A7F3D0]">
                0{activeIndex + 1} / 0{hospitalTour.length} • {current.category}
              </span>
              <span className="px-3 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/10 hidden sm:inline-block text-slate-300">
                {currentSpec.area}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="px-3 py-1.5 rounded-full bg-[#022C22]/80 backdrop-blur-md border border-[#059669]/30 text-[#059669] font-bold hidden sm:flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>{currentSpec.standard}</span>
              </span>

              <button
                onClick={() => setIsVideoModalOpen(true)}
                className="px-3.5 py-1.5 rounded-full bg-[#10B981]/90 hover:bg-[#059669] text-slate-950 font-sans text-xs font-bold flex items-center gap-1.5 shadow-md transition-all"
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
              className="pointer-events-auto p-4 sm:p-5 rounded-full bg-[#10B981]/90 hover:bg-[#059669] text-slate-950 shadow-2xl hover:scale-110 transition-all duration-300 ring-4 ring-emerald-400/40 backdrop-blur-md flex items-center gap-2.5"
            >
              <Play className="w-6 h-6 fill-current ml-0.5" />
              <span className="font-bold text-xs uppercase tracking-wider pr-1 hidden sm:inline">Watch 4K Video Tour</span>
            </button>
          </div>

          {/* Center Blueprint Crosshair (Architectural Precision Touch) */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10 opacity-25">
            <div className="w-28 h-28 border border-[#059669] rounded-full flex items-center justify-center">
              <div className="w-full h-px bg-[#059669]" />
              <div className="h-full w-px bg-[#059669] absolute" />
            </div>
          </div>

          {/* Bottom Descriptive Caption Bar */}
          <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10 z-20 text-white space-y-2">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4">
              <div className="space-y-1">
                <span className="text-xs font-mono font-bold tracking-[0.25em] text-[#059669] uppercase block">
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
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#10B981] hover:bg-[#059669] text-slate-950 font-bold text-xs uppercase tracking-wider shadow-lg shadow-[#047857]/25 transition-all"
                >
                  <Eye className="w-4 h-4 text-slate-950" />
                  <span>Inspect High-Res Facility</span>
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Linear Filmstrip Facility Navigator (NO CARDS - Sleek Linear Strip) */}
        <div className="mt-8 flex flex-wrap items-center justify-between gap-2 border-b border-[#022C22] pb-6">
          {hospitalTour.map((item, idx) => {
            const active = activeIndex === idx;
            return (
              <button
                key={item.id}
                onClick={() => setActiveIndex(idx)}
                className={`group flex items-center gap-3 py-3 px-4 rounded-2xl text-left transition-all duration-300 relative ${active
                  ? 'bg-[#022C22]/90 text-white border border-[#059669]/40 shadow-lg'
                  : 'bg-transparent text-slate-400 hover:text-white hover:bg-white/5 border border-transparent'
                  }`}
              >
                <span className={`font-mono text-xs font-bold ${active ? 'text-[#059669]' : 'text-slate-500'}`}>
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
                  <span className="w-1.5 h-1.5 rounded-full bg-[#059669] animate-ping ml-1" />
                )}
              </button>
            );
          })}
        </div>

        {/* Bottom Architectural Infrastructure Metrics (Divided Ribbon, Zero Cards) */}
        <div className="mt-8 grid grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-emerald-900/40 pt-2">

          <div className="px-4 py-2 text-left">
            <span className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight block">120,000+</span>
            <span className="text-xs text-[#059669] font-semibold uppercase tracking-wider block font-mono">Sq. Ft. Medical Campus</span>
            <span className="text-[11px] text-slate-300">Engineered to NABH tertiary clinical guidelines</span>
          </div>

          <div className="px-4 py-2 text-left">
            <span className="text-2xl sm:text-4xl font-extrabold text-[#A7F3D0] tracking-tight block">Class-100</span>
            <span className="text-xs text-[#059669] font-semibold uppercase tracking-wider block font-mono">Laminar Airflow Suites</span>
            <span className="text-[11px] text-slate-300">Zero particulate surgical theatre environments</span>
          </div>

          <div className="px-4 py-2 text-left">
            <span className="text-2xl sm:text-4xl font-extrabold text-[#059669] tracking-tight block">HEPA-14</span>
            <span className="text-xs text-[#059669] font-semibold uppercase tracking-wider block font-mono">Medical AHU Filtration</span>
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
          <div className="relative w-full max-w-5xl bg-[#031711] rounded-3xl overflow-hidden border border-[#059669]/30 shadow-2xl">

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

            <div className="p-6 bg-[#031711] text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-[#022C22]">
              <div className="space-y-1">
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#059669]">
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
                className="px-6 py-2.5 rounded-full bg-[#10B981 hover:bg-[#059669] text-slate-950 text-xs font-bold uppercase tracking-wider shrink-0 transition-colors"
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
