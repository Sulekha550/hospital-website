import React, { useState } from 'react';
import { Activity, ShieldCheck, Heart, ArrowRight, Eye, Sparkles, Layers, Maximize2, CheckCircle2 } from 'lucide-react';
import { PULSE_DATA } from '../data/pulseData';

const DEFAULT_HOTSPOTS = [
  {
    id: 'coronary',
    label: 'Main Heart Artery',
    x: '52%',
    y: '38%',
    domain: 'Stent & Blockage Care',
    detail: 'Main artery supplying fresh blood to the front of your heart.',
    chamber: 'Front Heart Wall',
    clinicalInsight: 'Opened gently through the wrist using a safe, medicine-coated stent.',
  },
  {
    id: 'interventional',
    label: 'Safe Wrist Entry',
    x: '46%',
    y: '22%',
    domain: 'Painless Wrist Path',
    detail: 'Safe pathway used to guide a tiny tube to the heart without any leg cut.',
    chamber: 'Main Heart Gateway',
    clinicalInsight: 'Lets patients sit up and walk comfortably soon after the procedure.',
  },
  {
    id: 'pacemaker',
    label: 'Heartbeat Control Spot',
    x: '38%',
    y: '48%',
    domain: 'Pacemaker Support',
    detail: 'Natural rhythm center that keeps your heart beating steadily.',
    chamber: 'Upper Heart Chamber',
    clinicalInsight: 'Supported by a small pacemaker if your heartbeat becomes too slow.',
  },
];

/**
 * InteractiveCardiacExplorer: Simple Interactive Heart Guide
 */
export default function InteractiveCardiacExplorer({ onBookClick }) {
  const explorerHotspots = DEFAULT_HOTSPOTS;

  const [activeId, setActiveId] = useState(explorerHotspots[0]?.id || 'coronary');
  const [viewMode, setViewMode] = useState('anatomy'); // 'anatomy' or 'angiogram'

  const activeData = explorerHotspots.find((h) => h.id === activeId) || explorerHotspots[0] || DEFAULT_HOTSPOTS[0];

  return (
    <section className="relative py-16 lg:py-24 overflow-hidden select-none bg-gradient-to-b from-[#FAFBF9] via-[#F0FDF4]/30 to-[#FAFBF9] rounded-[3rem] my-8 border-2 border-[#A7F3D0]/80 shadow-lg">
      {/* Animated Lightbox Illuminator Background Grid & Dynamic Scan Sweep */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <svg className="absolute inset-0 w-full h-full opacity-25" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="lightboxGrid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#047857" strokeWidth="0.8" strokeDasharray="2 4" />
              <circle cx="40" cy="40" r="1.5" fill="#059669" opacity="0.6" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#lightboxGrid)" />
        </svg>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-[#059669]/20 via-teal-300/15 to-transparent rounded-full blur-[120px] pointer-events-none" />
        {/* Rotating CAD Coordinate Rings */}
        <div className="absolute top-6 left-6 w-64 h-64 rounded-full border-2 border-[#047857]/25 hidden md:block animate-gentle-cw" />
        <div className="absolute bottom-6 right-6 w-80 h-80 rounded-full border-2 border-dashed border-[#10B981]/30 hidden md:block animate-gentle-ccw" />
        <div className="absolute left-0 right-0 h-[2.5px] bg-gradient-to-r from-transparent via-[#10B981] to-transparent shadow-[0_0_15px_#059669] opacity-50 animate-laser-sweep pointer-events-none" />
        <div className="absolute top-8 left-8 text-[#059669]/35 font-mono text-base font-bold select-none">+</div>
        <div className="absolute bottom-8 right-8 text-[#059669]/35 font-mono text-base font-bold select-none">+</div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="mb-8 text-center max-w-3xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F0FDF4] border border-[#A7F3D0] shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#047857]" />
            <span className="text-xs font-bold text-[#064E3B] uppercase tracking-wider">
              Interactive Heart Guide
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#064E3B] tracking-tight leading-tight">
            How Your Heart <span className="font-serif italic font-normal text-[#047857]">Works &amp; Heals</span>
          </h2>

          <p className="text-xs sm:text-sm text-slate-600 font-medium max-w-xl mx-auto leading-relaxed">
            Click any part of the heart below to see how Dr. Shahi checks blockages, opens arteries, and keeps your heartbeat steady.
          </p>
        </div>

        {/* Master Diagnostic Lightbox Container */}
        <div className="rounded-[2.5rem] bg-white border-2 border-[#A7F3D0]/60 shadow-xl overflow-hidden p-5 sm:p-8 backdrop-blur-2xl">
          
          {/* Top Control Bar: Mode Toggle + Target Domains */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-5 border-b border-slate-100">
            
            {/* View Mode Switcher */}
            <div className="flex items-center gap-1.5 p-1 rounded-full bg-slate-100 border border-slate-200">
              <button
                onClick={() => setViewMode('anatomy')}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  viewMode === 'anatomy'
                    ? 'bg-[#064E3B] text-white shadow-sm'
                    : 'text-slate-700 hover:text-[#064E3B]'
                }`}
              >
                Heart View
              </button>
              <button
                onClick={() => setViewMode('angiogram')}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  viewMode === 'angiogram'
                    ? 'bg-[#064E3B] text-white shadow-sm'
                    : 'text-slate-700 hover:text-[#064E3B]'
                }`}
              >
                Angiogram View
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
                        ? 'bg-gradient-to-r from-[#064E3B] via-[#047857] to-[#047857] text-white shadow-md shadow-[#064E3B]/25'
                        : 'bg-white hover:bg-[#F0FDF4] text-slate-700 border border-slate-200'
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
              src={viewMode === 'anatomy' ? '/images/cathlab-control-review.jpg' : '/images/doctor-angiogram-explain.jpg'}
              alt={viewMode === 'anatomy' ? 'Real Heart Artery & Stent Monitor' : 'Real Diagnostic Coronary Angiogram Review'}
              className="w-full h-full object-cover object-center transition-all duration-700 filter brightness-95 group-hover:scale-102"
            />

            {/* Vignette Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-slate-950/50 pointer-events-none" />

            {/* Top Diagnostic Badges */}
            <div className="absolute top-4 left-4 flex items-center gap-2 pointer-events-none">
              <div className="px-3.5 py-1.5 rounded-full bg-slate-900/80 backdrop-blur-md border border-white/20 text-white text-[11px] font-medium flex items-center gap-2 shadow-md">
                <span className="w-2 h-2 rounded-full bg-[#059669] animate-ping" />
                <span>{viewMode === 'anatomy' ? 'Heart View: Clear Artery Guide' : 'Angiogram View: Live Blood Flow Check'}</span>
              </div>
            </div>

            <div className="absolute top-4 right-4 pointer-events-none">
              <div className="px-3.5 py-1.5 rounded-full bg-slate-900/80 backdrop-blur-md border border-white/20 text-amber-300 text-[11px] font-mono shadow-md font-bold">
                72 BPM · Healthy Heartbeat
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
                    <span className={`absolute w-8 h-8 rounded-full ${isSpotActive ? 'bg-[#059669]/40 animate-ping' : 'bg-[#059669]/20'}`} />
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center border-2 border-white shadow-lg transition-transform ${
                      isSpotActive ? 'bg-[#10B981 scale-125' : 'bg-slate-900 group-hover/pin:scale-110'
                    }`}>
                      <span className="w-1.5 h-1.5 rounded-full bg-white" />
                    </div>
                  </div>

                  {/* Hotspot Floating Tooltip */}
                  <div className={`absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-56 p-3.5 rounded-2xl bg-slate-950/95 backdrop-blur-md border border-white/20 text-white shadow-2xl transition-all pointer-events-none ${
                    isSpotActive ? 'opacity-100 visible -translate-y-0' : 'opacity-0 invisible group-hover/pin:opacity-100 group-hover/pin:visible'
                  }`}>
                    <span className="text-[10px] font-mono text-[#059669] block uppercase font-bold">
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
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#059669] font-bold block">
                  SELECTED HEART PART
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
                  <span className="text-[10px] text-slate-400 block">Treatment Result</span>
                  <span className="text-sm font-bold text-amber-300 font-mono">99.4% Success</span>
                </div>
                <button
                  onClick={onBookClick}
                  className="px-5 py-2.5 rounded-full bg-[#10B981 hover:bg-[#059669] text-slate-950 text-xs font-bold shadow transition-all"
                >
                  Consult on {activeData.label}
                </button>
              </div>
            </div>

          </div>

          {/* Bottom Simple Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs">
            <div className="p-3.5 rounded-2xl bg-[#F0FDF4]/70 border border-[#A7F3D0]/60">
              <span className="font-bold text-[#064E3B] block">Heart Stenting Through Wrist</span>
              <span className="text-slate-600 text-[11px] block mt-0.5 font-medium">Gentle wrist procedure so patients recover fast and walk sooner.</span>
            </div>
            <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200">
              <span className="font-bold text-[#064E3B] block">Clear Blockage Check</span>
              <span className="text-slate-600 text-[11px] block mt-0.5 font-medium">Live scan shows the exact location and percentage of any blockage.</span>
            </div>
            <div className="p-3.5 rounded-2xl bg-amber-50/70 border border-amber-100">
              <span className="font-bold text-amber-900 block">Safe Pacemaker Care</span>
              <span className="text-slate-600 text-[11px] block mt-0.5 font-medium">Small heart device that keeps a slow or weak pulse steady.</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
