import React, { useState } from 'react';
import { Activity, ShieldCheck, Heart, ArrowRight, Eye, Sparkles, Layers, Maximize2, CheckCircle2 } from 'lucide-react';
import { PULSE_DATA } from '../data/pulseData';

/**
 * InteractiveCardiacExplorer: Clinical Anatomy & Diagnostic Lightbox
 * Abstract Luxury & Editorial Medical Aesthetics:
 * - Real high-definition cardiac anatomical organ photography
 * - Real diagnostic fluoroscopy & coronary angiogram imaging
 * - Interactive anatomical hotspot pins with clinical descriptions
 * - Iridescent lavender, platinum, and pearl white clinical telemetry
 */
export default function InteractiveCardiacExplorer({ onBookClick }) {
  const { cardiacExplorerHotspots } = PULSE_DATA;
  const [activeId, setActiveId] = useState(cardiacExplorerHotspots[0].id);
  const [viewMode, setViewMode] = useState('anatomy'); // 'anatomy' or 'angiogram'

  const activeData = cardiacExplorerHotspots.find((h) => h.id === activeId) || cardiacExplorerHotspots[0];

  const hotspots = [
    {
      id: 'coronary',
      label: 'LAD Coronary Artery',
      x: '52%',
      y: '38%',
      domain: 'Coronary Angioplasty & Stenting target',
      detail: 'Left Anterior Descending branch supplying the anterior left ventricular wall.',
    },
    {
      id: 'interventional',
      label: 'Aortic Root & Catheter Access',
      x: '46%',
      y: '22%',
      domain: 'Radial Catheterization Gateway',
      detail: 'Ascending aorta conduit for balloon dilation and drug-eluting stent deployment.',
    },
    {
      id: 'pacemaker',
      label: 'Sinoatrial (SA) Conduction Node',
      x: '38%',
      y: '48%',
      domain: 'Pacemaker Rhythm Node',
      detail: 'Primary physiological cardiac pacemaker governing sinus node depolarization.',
    },
  ];

  return (
    <section className="relative py-12 lg:py-16 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="mb-8 text-center max-w-3xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-purple-200/70 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-purple-600" />
            <span className="text-xs font-semibold text-purple-900 uppercase tracking-wide">
              Diagnostic Lightbox & Clinical Anatomy
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-light text-slate-900 tracking-tight leading-tight">
            Target Anatomy & <span className="font-serif italic font-normal text-purple-700">Hemodynamics</span>
          </h2>

          <p className="text-xs sm:text-sm text-slate-600 font-light max-w-xl mx-auto leading-relaxed">
            Real photographic cardiac anatomy and diagnostic fluoroscopic angiograms highlighting key coronary pathways, perfusion zones, and conduction nodes.
          </p>
        </div>

        {/* Master Diagnostic Lightbox Container */}
        <div className="rounded-[2.5rem] bg-white/85 border border-purple-100 shadow-luxury overflow-hidden p-5 sm:p-8 backdrop-blur-2xl">
          
          {/* Top Control Bar: Mode Toggle + Target Domains */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-5 border-b border-purple-100/70">
            
            {/* View Mode Switcher */}
            <div className="flex items-center gap-1.5 p-1 rounded-full bg-purple-50/70 border border-purple-200/70">
              <button
                onClick={() => setViewMode('anatomy')}
                className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
                  viewMode === 'anatomy'
                    ? 'bg-slate-900 text-white shadow-sm'
                    : 'text-slate-700 hover:text-purple-900'
                }`}
              >
                Photorealistic Anatomy
              </button>
              <button
                onClick={() => setViewMode('angiogram')}
                className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
                  viewMode === 'angiogram'
                    ? 'bg-slate-900 text-white shadow-sm'
                    : 'text-slate-700 hover:text-purple-900'
                }`}
              >
                Fluoroscopy Angiogram
              </button>
            </div>

            {/* Target Specialty Selector */}
            <div className="flex flex-wrap items-center gap-2">
              {cardiacExplorerHotspots.map((item) => {
                const isSelected = item.id === activeId;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveId(item.id)}
                    className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
                      isSelected
                        ? 'bg-purple-900 text-white shadow-sm'
                        : 'bg-white hover:bg-purple-50 text-slate-700 border border-purple-100'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Central Photographic Medical Display Stage */}
          <div className="relative w-full h-[380px] sm:h-[460px] lg:h-[500px] my-5 rounded-2xl overflow-hidden bg-slate-950 border border-slate-800 shadow-inner group">
            
            {/* Real Photographic Medical Image */}
            <img
              src={viewMode === 'anatomy' ? '/images/cath-lab.jpg' : '/images/angiogram-scan.jpg'}
              alt={viewMode === 'anatomy' ? 'Siemens Flat-Panel Digital Cath Lab' : 'Real Diagnostic Coronary Angiogram'}
              className="w-full h-full object-cover object-center transition-all duration-700 filter brightness-95 group-hover:scale-102"
            />

            {/* Vignette Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-slate-950/50 pointer-events-none" />

            {/* Top Diagnostic Badges */}
            <div className="absolute top-4 left-4 flex items-center gap-2 pointer-events-none">
              <div className="px-3.5 py-1.5 rounded-full bg-slate-900/80 backdrop-blur-md border border-white/20 text-white text-[11px] font-medium flex items-center gap-2 shadow-md">
                <span className="w-2 h-2 rounded-full bg-purple-400 animate-ping" />
                <span>{viewMode === 'anatomy' ? 'Anatomical Model: True Biological Texture' : 'Fluoroscopy Mode: Contrast Perfusion'}</span>
              </div>
            </div>

            <div className="absolute top-4 right-4 pointer-events-none">
              <div className="px-3.5 py-1.5 rounded-full bg-slate-900/80 backdrop-blur-md border border-white/20 text-amber-200 text-[11px] font-mono shadow-md">
                72 BPM · Lead II Telemetry
              </div>
            </div>

            {/* Interactive Anatomical Hotspots */}
            {viewMode === 'anatomy' && hotspots.map((spot) => {
              const isSpotActive = spot.id === activeId;
              return (
                <div
                  key={spot.id}
                  style={{ top: spot.y, left: spot.x }}
                  className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer z-20 group/pin"
                  onClick={() => setActiveId(spot.id)}
                >
                  <div className="relative flex items-center justify-center">
                    <span className={`absolute w-8 h-8 rounded-full ${isSpotActive ? 'bg-purple-400/40 animate-ping' : 'bg-sky-400/20'}`} />
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center border-2 border-white shadow-lg transition-transform ${
                      isSpotActive ? 'bg-purple-600 scale-125' : 'bg-slate-900 group-hover/pin:scale-110'
                    }`}>
                      <span className="w-1.5 h-1.5 rounded-full bg-white" />
                    </div>
                  </div>

                  {/* Hotspot Floating Tooltip */}
                  <div className={`absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-52 p-3 rounded-2xl bg-slate-950/90 backdrop-blur-md border border-white/20 text-white shadow-xl transition-all pointer-events-none ${
                    isSpotActive ? 'opacity-100 visible -translate-y-0' : 'opacity-0 invisible group-hover/pin:opacity-100 group-hover/pin:visible'
                  }`}>
                    <span className="text-[10px] font-mono text-purple-300 block uppercase font-bold">
                      {spot.domain}
                    </span>
                    <span className="text-xs font-semibold text-white block mt-0.5">
                      {spot.label}
                    </span>
                    <span className="text-[10px] text-slate-300 block mt-1 leading-tight">
                      {spot.detail}
                    </span>
                  </div>
                </div>
              );
            })}

            {/* Bottom Overlay Info Card */}
            <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-slate-950/85 backdrop-blur-md border border-white/15 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-xl">
              <div className="space-y-0.5">
                <span className="text-[10px] font-mono uppercase tracking-wider text-purple-300 font-semibold block">
                  SELECTED CLINICAL TARGET
                </span>
                <span className="text-sm sm:text-base font-semibold text-white block">
                  {activeData.label} · {activeData.chamber}
                </span>
                <span className="text-xs text-slate-300 block font-light">
                  {activeData.clinicalInsight}
                </span>
              </div>

              <div className="flex items-center gap-3 shrink-0">
                <div className="hidden sm:block text-right">
                  <span className="text-[10px] text-slate-400 block font-light">Flow Restoration</span>
                  <span className="text-sm font-semibold text-amber-300 font-mono">99.4% Success</span>
                </div>
                <button
                  onClick={onBookClick}
                  className="px-5 py-2.5 rounded-full bg-white text-slate-950 hover:bg-slate-100 text-xs font-semibold shadow transition-all"
                >
                  Consult on {activeData.label}
                </button>
              </div>
            </div>

          </div>

          {/* Bottom Diagnostic Metadata Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs">
            <div className="p-3.5 rounded-2xl bg-purple-50/60 border border-purple-100/80">
              <span className="font-semibold text-slate-900 block">Radial Access Coronary Stenting</span>
              <span className="text-slate-600 text-[11px] block mt-0.5 font-light">Catheter deployment via wrist artery for rapid patient recovery.</span>
            </div>
            <div className="p-3.5 rounded-2xl bg-sky-50/60 border border-sky-100/80">
              <span className="font-semibold text-slate-900 block">Fluoroscopic Quantitative Mapping</span>
              <span className="text-slate-600 text-[11px] block mt-0.5 font-light">Real-time contrast injection reveals precise stenosis percentage.</span>
            </div>
            <div className="p-3.5 rounded-2xl bg-amber-50/60 border border-amber-100/80">
              <span className="font-semibold text-slate-900 block">Permanent Physiological Pacing</span>
              <span className="text-slate-600 text-[11px] block mt-0.5 font-light">Endocardial electrode placement for bradycardia management.</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
