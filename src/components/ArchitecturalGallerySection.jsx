import React, { useState } from 'react';
import { Eye, X, Building2, ShieldCheck, Play, MapPin } from 'lucide-react';
import { PULSE_DATA } from '../data/pulseData';
import CinematicVideoPlayerModal from './CinematicVideoPlayerModal';
import SectionBackgroundMotion from './SectionBackgroundMotion';

/**
 * ArchitecturalGallerySection
 * Clean, realistic Hospital Campus & Clinical Suites showcase:
 * - Unified Deep Midnight Navy, Crimson Ruby & Warm Platinum palette
 * - Real photography of hospital entrance, cath lab, Doctor consultations, and recovery ICU
 */
export default function ArchitecturalGallerySection() {
  const { hospitalTour } = PULSE_DATA;
  const [activeIndex, setActiveIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const current = hospitalTour[activeIndex] || hospitalTour[0];

  return (
    <section id="gallery" className="relative py-20 lg:py-28 overflow-hidden select-none bg-[#FAF9F6] text-slate-900 border-y border-slate-200">
      <SectionBackgroundMotion variant="home-gallery" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Clean Editorial Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 text-left">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#BE123C]">
              <Building2 className="w-4 h-4" />
              <span>Campus &amp; Clinical Suites</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0A1128] tracking-tight leading-tight">
              Inside Pulse Heart Centre
            </h2>
          </div>

          <div className="flex items-center gap-2 text-xs font-semibold text-slate-600">
            <MapPin className="w-4 h-4 text-[#BE123C]" />
            <span>Betiahata Medical Hub • Gorakhpur, UP</span>
          </div>
        </div>

        {/* Main Panoramic Facility Stage */}
        <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-xl aspect-[16/9] sm:aspect-[21/10] bg-[#0A1128] group">
          <img
            key={current.id}
            src={current.image}
            alt={current.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#0A1128]/90 via-[#0A1128]/20 to-transparent pointer-events-none" />

          {/* Top Action Controls */}
          <div className="absolute top-4 right-4 flex items-center gap-2 z-20">
            <button
              onClick={() => setIsLightboxOpen(true)}
              className="px-3.5 py-2 rounded-full bg-[#0A1128]/80 hover:bg-[#0A1128] text-white text-xs font-semibold flex items-center gap-1.5 border border-white/20 transition-colors"
            >
              <Eye className="w-3.5 h-3.5" />
              <span>Expand Photo</span>
            </button>
            <button
              onClick={() => setIsVideoModalOpen(true)}
              className="px-3.5 py-2 rounded-full bg-[#BE123C] hover:bg-[#9F1239] text-white text-xs font-semibold flex items-center gap-1.5 shadow-md transition-colors"
            >
              <Play className="w-3.5 h-3.5 fill-white" />
              <span>Virtual Tour</span>
            </button>
          </div>

          {/* Bottom Clean Caption */}
          <div className="absolute bottom-5 left-5 right-5 z-20 text-left text-white max-w-2xl">
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-rose-300 block">
              0{activeIndex + 1} / 0{hospitalTour.length} • {current.category}
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold text-white mt-1">
              {current.title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-200 mt-1 leading-relaxed">
              {current.description}
            </p>
          </div>
        </div>

        {/* Clean Thumbnail Strip Navigator */}
        <div className="mt-5 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {hospitalTour.map((item, idx) => {
            const active = activeIndex === idx;
            return (
              <button
                key={item.id}
                onClick={() => setActiveIndex(idx)}
                className={`group rounded-xl overflow-hidden border text-left transition-all ${
                  active
                    ? 'border-[#BE123C] ring-2 ring-[#BE123C]/20 bg-white shadow-md'
                    : 'border-slate-200 bg-white/80 hover:border-slate-300 opacity-85 hover:opacity-100'
                }`}
              >
                <div className="aspect-[16/9] overflow-hidden bg-slate-900">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-2.5">
                  <span className={`text-[10px] font-mono font-bold block ${active ? 'text-[#BE123C]' : 'text-slate-500'}`}>
                    0{idx + 1} • {item.category.split('&')[0]}
                  </span>
                  <span className="text-xs font-bold text-[#0A1128] block truncate mt-0.5">
                    {item.title}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Clean Architectural Specs Strip */}
        <div className="mt-10 pt-8 border-t border-slate-200 grid grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          <div>
            <span className="text-2xl sm:text-3xl font-extrabold text-[#0A1128] block">14,000+</span>
            <span className="text-xs font-bold uppercase tracking-wider text-[#BE123C] block mt-0.5">Sq. Ft. Campus</span>
            <span className="text-xs text-slate-500 block mt-0.5">NABH clinical layout</span>
          </div>
          <div>
            <span className="text-2xl sm:text-3xl font-extrabold text-[#BE123C] block">Class-100</span>
            <span className="text-xs font-bold uppercase tracking-wider text-[#0A1128] block mt-0.5">Sterile Suites</span>
            <span className="text-xs text-slate-500 block mt-0.5">Laminar airflow cath &amp; OT</span>
          </div>
          <div>
            <span className="text-2xl sm:text-3xl font-extrabold text-[#0A1128] block">HEPA-14</span>
            <span className="text-xs font-bold uppercase tracking-wider text-[#BE123C] block mt-0.5">Air Filtration</span>
            <span className="text-xs text-slate-500 block mt-0.5">35 sterile exchanges/hr</span>
          </div>
          <div>
            <span className="text-2xl sm:text-3xl font-extrabold text-[#BE123C] block">24/7</span>
            <span className="text-xs font-bold uppercase tracking-wider text-[#0A1128] block mt-0.5">Emergency ICU</span>
            <span className="text-xs text-slate-500 block mt-0.5">Redundant power &amp; O2</span>
          </div>
        </div>

      </div>

      {/* Fullscreen Photo Lightbox Modal */}
      {isLightboxOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-black/85 backdrop-blur-md">
          <div className="relative w-full max-w-5xl bg-[#0A1128] rounded-2xl overflow-hidden border border-white/15 shadow-2xl">
            <div className="relative aspect-[16/9]">
              <img src={current.image} alt={current.title} className="w-full h-full object-cover" />
              <button
                onClick={() => setIsLightboxOpen(false)}
                className="absolute top-4 right-4 p-2.5 rounded-full bg-black/70 hover:bg-black text-white border border-white/20"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="text-left space-y-1">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-rose-300">
                  {current.category}
                </span>
                <h3 className="text-xl font-bold text-white">{current.title}</h3>
                <p className="text-xs text-slate-300 max-w-2xl">{current.description}</p>
              </div>
              <button
                onClick={() => setIsLightboxOpen(false)}
                className="px-6 py-2.5 rounded-full bg-[#BE123C] hover:bg-[#9F1239] text-white text-xs font-bold uppercase tracking-wider shrink-0"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      <CinematicVideoPlayerModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
      />
    </section>
  );
}
