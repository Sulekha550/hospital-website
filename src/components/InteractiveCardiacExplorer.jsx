import React, { useState } from 'react';
import { Activity, ShieldCheck, Heart, ArrowRight, Eye, Sparkles, Layers, Maximize2, CheckCircle2 } from 'lucide-react';
import { PULSE_DATA } from '../data/pulseData';

const DEFAULT_HOTSPOTS = [
  {
    id: 'coronary',
    label: 'LAD Coronary Artery',
    x: '52%',
    y: '38%',
    domain: 'Coronary Angioplasty & Stenting Target',
    detail: 'Left Anterior Descending branch supplying the anterior left ventricular wall.',
    chamber: 'Anterior Myocardium',
    clinicalInsight: 'Primary target vessel for transradial balloon dilation and drug-eluting stenting.',
  },
  {
    id: 'interventional',
    label: 'Aortic Root & Catheter Access',
    x: '46%',
    y: '22%',
    domain: 'Radial Catheterization Gateway',
    detail: 'Ascending aorta conduit for balloon dilation and drug-eluting stent deployment.',
    chamber: 'Ascending Aorta',
    clinicalInsight: 'Coronary ostium engagement pathway for sub-millimeter stent delivery.',
  },
  {
    id: 'pacemaker',
    label: 'Sinoatrial (SA) Conduction Node',
    x: '38%',
    y: '48%',
    domain: 'Pacemaker Rhythm Node',
    detail: 'Primary physiological cardiac pacemaker governing sinus node depolarization.',
    chamber: 'Right Atrial Junction',
    clinicalInsight: 'Target conduction area for physiological dual-chamber pacemaker lead positioning.',
  },
];

/**
 * InteractiveCardiacExplorer: Clinical Anatomy & Diagnostic Lightbox
 * Elite Healthcare Editorial Experience:
 * - Real high-definition cardiac anatomical organ photography
 * - Real diagnostic fluoroscopy & coronary angiogram imaging
 * - Interactive anatomical hotspot pins with clinical descriptions
 * - Emerald, pine, mint gold and pearl white clinical telemetry
 */
export default function InteractiveCardiacExplorer({ onBookClick }) {
  const explorerHotspots = (PULSE_DATA && Array.isArray(PULSE_DATA.cardiacExplorerHotspots) && PULSE_DATA.cardiacExplorerHotspots.length > 0)
    ? PULSE_DATA.cardiacExplorerHotspots
    : DEFAULT_HOTSPOTS;

  const [activeId, setActiveId] = useState(explorerHotspots[0]?.id || 'coronary');
  const [viewMode, setViewMode] = useState('anatomy'); // 'anatomy' or 'angiogram'

  const activeData = explorerHotspots.find((h) => h.id === activeId) || explorerHotspots[0] || DEFAULT_HOTSPOTS[0];

  return (
    <section className="relative py-16 lg:py-24 overflow-hidden select-none bg-gradient-to-b from-[#FAFBFD] via-[#FEF2F2]/30 to-[#FAFBFD] rounded-[3rem] my-8 border-2 border-[#FECDD3]/80 shadow-lg">
      {/* Animated Lightbox Illuminator Background Grid & Dynamic Scan Sweep */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <svg className="absolute inset-0 w-full h-full opacity-25" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="lightboxGrid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#B91C1C" strokeWidth="0.8" strokeDasharray="2 4" />
              <circle cx="40" cy="40" r="1.5" fill="#0284C7" opacity="0.6" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#lightboxGrid)" />
        </svg>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-[#0284C7]/20 via-teal-300/15 to-transparent rounded-full blur-[120px] pointer-events-none" />
        {/* Rotating CAD Coordinate Rings */}
        <div className="absolute top-6 left-6 w-64 h-64 rounded-full border-2 border-[#B91C1C]/25 hidden md:block animate-gentle-cw" />
        <div className="absolute bottom-6 right-6 w-80 h-80 rounded-full border-2 border-dashed border-[#0EA5E9]/30 hidden md:block animate-gentle-ccw" />
        <div className="absolute left-0 right-0 h-[2.5px] bg-gradient-to-r from-transparent via-[#0EA5E9] to-transparent shadow-[0_0_15px_#0284C7] opacity-50 animate-laser-sweep pointer-events-none" />
        <div className="absolute top-8 left-8 text-[#0284C7]/35 font-mono text-base font-bold select-none">+</div>
        <div className="absolute bottom-8 right-8 text-[#0284C7]/35 font-mono text-base font-bold select-none">+</div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="mb-8 text-center max-w-3xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FEF2F2] border border-[#FECDD3] shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#B91C1C]" />
            <span className="text-xs font-bold text-[#991B1B] uppercase tracking-wider">
              Diagnostic Lightbox & Clinical Anatomy
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#991B1B] tracking-tight leading-tight">
            Target Anatomy & <span className="font-serif italic font-normal text-[#B91C1C]">Hemodynamics</span>
          </h2>

          <p className="text-xs sm:text-sm text-slate-600 font-medium max-w-xl mx-auto leading-relaxed">
            Real photographic cardiac anatomy and diagnostic fluoroscopic angiograms highlighting key coronary pathways, perfusion zones, and conduction nodes.
          </p>
        </div>

        {/* Master Diagnostic Lightbox Container */}
        <div className="rounded-[2.5rem] bg-white border-2 border-[#FECDD3]/60 shadow-xl overflow-hidden p-5 sm:p-8 backdrop-blur-2xl">
          
          {/* Top Control Bar: Mode Toggle + Target Domains */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-5 border-b border-slate-100">
            
            {/* View Mode Switcher */}
            <div className="flex items-center gap-1.5 p-1 rounded-full bg-slate-100 border border-slate-200">
              <button
                onClick={() => setViewMode('anatomy')}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  viewMode === 'anatomy'
                    ? 'bg-[#991B1B] text-white shadow-sm'
                    : 'text-slate-700 hover:text-[#991B1B]'
                }`}
              >
                Photorealistic Anatomy
              </button>
              <button
                onClick={() => setViewMode('angiogram')}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  viewMode === 'angiogram'
                    ? 'bg-[#991B1B] text-white shadow-sm'
                    : 'text-slate-700 hover:text-[#991B1B]'
                }`}
              >
                Fluoroscopy Angiogram
              </button>
            </div>

            {/* Target Specialty Selector */}
            <div className="flex flex-wrap items-center gap-2">
              {explorerHotspots.map((item) => {
                const isSelected = item.id === activeId;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveId(item.id)}
                    className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                      isSelected
                        ? 'bg-gradient-to-r from-[#991B1B] via-[#B91C1C] to-[#B91C1C] text-white shadow-md shadow-[#991B1B]/25'
                        : 'bg-white hover:bg-[#FEF2F2] text-slate-700 border border-slate-200'
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
              src={viewMode === 'anatomy' ? '/images/cardiology-3d-heart-beat.jpg' : '/images/angiogram-scan.jpg'}
              alt={viewMode === 'anatomy' ? 'Anatomical Coronary Perfusion Stage' : 'Real Diagnostic Coronary Angiogram'}
              className="w-full h-full object-cover object-center transition-all duration-700 filter brightness-95 group-hover:scale-102"
            />

            {/* Vignette Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-slate-950/50 pointer-events-none" />

            {/* Top Diagnostic Badges */}
            <div className="absolute top-4 left-4 flex items-center gap-2 pointer-events-none">
              <div className="px-3.5 py-1.5 rounded-full bg-slate-900/80 backdrop-blur-md border border-white/20 text-white text-[11px] font-medium flex items-center gap-2 shadow-md">
                <span className="w-2 h-2 rounded-full bg-[#0284C7] animate-ping" />
                <span>{viewMode === 'anatomy' ? 'Anatomical Model: True Biological Texture' : 'Fluoroscopy Mode: Contrast Perfusion'}</span>
              </div>
            </div>

            <div className="absolute top-4 right-4 pointer-events-none">
              <div className="px-3.5 py-1.5 rounded-full bg-slate-900/80 backdrop-blur-md border border-white/20 text-amber-300 text-[11px] font-mono shadow-md font-bold">
                72 BPM · Lead II Telemetry
              </div>
            </div>

            {/* Interactive Anatomical Hotspots */}
            {viewMode === 'anatomy' && explorerHotspots.map((spot) => {
              const isSpotActive = spot.id === activeId;
              return (
                <div
                  key={spot.id}
                  style={{ top: spot.y, left: spot.x }}
                  className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer z-20 group/pin"
                  onClick={() => setActiveId(spot.id)}
                >
                  <div className="relative flex items-center justify-center">
                    <span className={`absolute w-8 h-8 rounded-full ${isSpotActive ? 'bg-[#0284C7]/40 animate-ping' : 'bg-[#0284C7]/20'}`} />
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center border-2 border-white shadow-lg transition-transform ${
                      isSpotActive ? 'bg-[#0EA5E9 scale-125' : 'bg-slate-900 group-hover/pin:scale-110'
                    }`}>
                      <span className="w-1.5 h-1.5 rounded-full bg-white" />
                    </div>
                  </div>

                  {/* Hotspot Floating Tooltip */}
                  <div className={`absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-56 p-3.5 rounded-2xl bg-slate-950/95 backdrop-blur-md border border-white/20 text-white shadow-2xl transition-all pointer-events-none ${
                    isSpotActive ? 'opacity-100 visible -translate-y-0' : 'opacity-0 invisible group-hover/pin:opacity-100 group-hover/pin:visible'
                  }`}>
                    <span className="text-[10px] font-mono text-[#0284C7] block uppercase font-bold">
                      {spot.domain}
                    </span>
                    <span className="text-xs font-bold text-white block mt-0.5">
                      {spot.label}
                    </span>
                    <span className="text-[10px] text-slate-300 block mt-1 leading-tight font-medium">
                      {spot.detail}
                    </span>
                  </div>
                </div>
              );
            })}

            {/* Bottom Overlay Info Card */}
            <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-slate-950/90 backdrop-blur-md border border-white/15 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-xl">
              <div className="space-y-0.5">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#0284C7] font-bold block">
                  SELECTED CLINICAL TARGET
                </span>
                <span className="text-sm sm:text-base font-bold text-white block">
                  {activeData.label} · {activeData.chamber}
                </span>
                <span className="text-xs text-slate-300 block font-normal">
                  {activeData.clinicalInsight}
                </span>
              </div>

              <div className="flex items-center gap-3 shrink-0">
                <div className="hidden sm:block text-right">
                  <span className="text-[10px] text-slate-400 block">Flow Restoration</span>
                  <span className="text-sm font-bold text-amber-300 font-mono">99.4% Success</span>
                </div>
                <button
                  onClick={onBookClick}
                  className="px-5 py-2.5 rounded-full bg-[#0EA5E9 hover:bg-[#0284C7] text-slate-950 text-xs font-bold shadow transition-all"
                >
                  Consult on {activeData.label}
                </button>
              </div>
            </div>

          </div>

          {/* Bottom Diagnostic Metadata Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs">
            <div className="p-3.5 rounded-2xl bg-[#FEF2F2]/70 border border-[#FECDD3]/60">
              <span className="font-bold text-[#991B1B] block">Radial Access Coronary Stenting</span>
              <span className="text-slate-600 text-[11px] block mt-0.5 font-medium">Catheter deployment via wrist artery for rapid patient recovery.</span>
            </div>
            <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200">
              <span className="font-bold text-[#991B1B] block">Fluoroscopic Quantitative Mapping</span>
              <span className="text-slate-600 text-[11px] block mt-0.5 font-medium">Real-time contrast injection reveals precise stenosis percentage.</span>
            </div>
            <div className="p-3.5 rounded-2xl bg-amber-50/70 border border-amber-100">
              <span className="font-bold text-amber-900 block">Permanent Physiological Pacing</span>
              <span className="text-slate-600 text-[11px] block mt-0.5 font-medium">Endocardial electrode placement for bradycardia management.</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
