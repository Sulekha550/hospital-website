import React, { useState } from 'react';
import { Cpu, ShieldCheck, Activity, Sparkles, Layers, CheckCircle2, ChevronRight, Zap, Radio, Sliders } from 'lucide-react';
import { PULSE_DATA } from '../data/pulseData';

/**
 * MedicalTechnologyShowcase
 * Visual & Motion Identity: Luminous High-Tech Fluoroscopy Suite (Clean, Pearl & Cyan)
 * Removed dark/black boxes in favor of pearlescent glass & cyan glowing borders
 */
export default function MedicalTechnologyShowcase() {
  const [activeTech, setActiveTech] = useState(0);

  const techArsenal = [
    {
      id: 'cathlab-system',
      title: 'Digital Flat-Panel Catheterization Suite',
      category: 'C-ARM FLUOROSCOPY SYSTEM',
      description: 'High-resolution digital flat-panel detector delivering sub-millimeter fluoroscopic roadmap clarity while reducing radiation exposure by up to 40%.',
      image: '/images/cath-lab.jpg',
      specs: [
        { label: 'Spatial Resolution', value: '< 0.3 mm Micro-Matrix' },
        { label: 'Frame Acquisition Rate', value: '15–30 fps High-Speed Cine' },
        { label: 'Radiation Reduction', value: 'DoseSense™ -40% Exposure' },
        { label: 'Clinical Scope', value: 'Coronary & Peripheral Trees' },
      ],
      clinicalValue: 'Enables micro-guidewire navigation across severe total coronary occlusions and calcified bifurcation lesions with minimal patient stress.',
    },
    {
      id: 'angiogram-fluoroscopy',
      title: 'Cineangiographic Stenosis Quantification',
      category: 'DIAGNOSTIC LESION MAPPING',
      description: 'Dynamic fluoroscopy utilizing non-ionic iso-osmolar contrast to generate multi-angle projections of coronary arterial tree dynamics.',
      image: '/images/angiogram-scan.jpg',
      specs: [
        { label: 'Projection Angles', value: 'RAO/LAO Cranial & Caudal' },
        { label: 'Stenosis Calibration', value: 'QCA Quantitative Analysis' },
        { label: 'Approach Vector', value: 'Right Transradial Artery' },
        { label: 'Recovery Duration', value: '2 Hours Post-Procedure' },
      ],
      clinicalValue: 'The gold-standard roadmap for distinguishing between medical therapy, stent revascularization, or surgical bypass.',
    },
    {
      id: 'stent-biomaterials',
      title: 'Cobalt-Chromium Drug-Eluting Stents (DES)',
      category: 'ENDOVASCULAR BIO-IMPLANTS',
      description: 'Ultra-thin strut metallic micro-lattices coated with bioabsorbable polymer that release antiproliferative drugs over 90 days to prevent restenosis.',
      image: '/images/pacemaker-tech.jpg',
      specs: [
        { label: 'Strut Thickness', value: '60–81 Microns' },
        { label: 'Polymer Matrix', value: 'Bio-Absorbable Carrier' },
        { label: 'Drug Elution Agent', value: 'Everolimus / Sirolimus' },
        { label: 'Vessel Patency Rate', value: '99.4% Flow Restored' },
      ],
      clinicalValue: 'Minimizes vessel trauma, promotes rapid natural endothelial healing, and eliminates chronic foreign-body inflammation.',
    },
    {
      id: 'pacemaker-conduction',
      title: 'Micro-Lithium Cardiac Rhythm Generator',
      category: 'ELECTROPHYSIOLOGICAL IMPLANTS',
      description: 'Hermetically sealed titanium pulse generator with rate-responsive sensors and transvenous bipolar pacing leads.',
      image: '/images/pacemaker-tech.jpg',
      specs: [
        { label: 'Battery Lifespan', value: '10–14 Years Longevity' },
        { label: 'Pacing Chambers', value: 'Single & Dual Chamber' },
        { label: 'Sensing Technology', value: 'Auto-Capture™ Rhythm' },
        { label: 'Telemetry Link', value: 'Wireless Inductive Wand' },
      ],
      clinicalValue: 'Maintains physiological hemodynamic cardiac output in patients suffering from symptomatic bradycardia and AV heart blocks.',
    },
  ];

  const current = techArsenal[activeTech];

  return (
    <section className="relative py-28 lg:py-36 overflow-hidden select-none">

      {/* =========================================================================
          ANIMATED SECTION BACKGROUND: LUMINOUS CYAN, ICY BLUE & SWEEPING RADAR
         ========================================================================= */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        {/* Neon Cyan & Electric Azure Fluoroscopy Glow */}
        <div className="absolute top-1/4 -right-20 w-[700px] h-[700px] rounded-full bg-cyan-400/20 blur-[150px] animate-pulse-glow" />

        {/* Icy Sky Blue Glow */}
        <div className="absolute bottom-10 -left-20 w-[650px] h-[650px] rounded-full bg-sky-400/20 blur-[150px] animate-float-2" />

        {/* Monumental Watermark Typography */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-mono font-bold text-[18vw] text-cyan-950/[0.03] whitespace-nowrap pointer-events-none tracking-widest">
          FLUOROSCOPY
        </div>

        {/* Technical HUD Grid & Animated Sweeping Radar */}
        <svg className="absolute inset-0 w-full h-full opacity-30" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="techGridLight" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#0284C7" strokeWidth="0.5" strokeOpacity="0.25" />
              <circle cx="60" cy="0" r="1.5" fill="#0284C7" fillOpacity="0.4" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#techGridLight)" />

          {/* Animated Sweeping Radar Group */}
          <g transform="translate(1000, 400)">
            <circle cx="0" cy="0" r="220" fill="none" stroke="#38BDF8" strokeWidth="1" strokeDasharray="6 6" />
            <circle cx="0" cy="0" r="340" fill="none" stroke="#06B6D4" strokeWidth="0.8" />
            <line x1="-360" y1="0" x2="360" y2="0" stroke="#38BDF8" strokeWidth="0.5" strokeOpacity="0.4" />
            <line x1="0" y1="-360" x2="0" y2="360" stroke="#38BDF8" strokeWidth="0.5" strokeOpacity="0.4" />
            <g className="animate-radar-sweep">
              <line x1="0" y1="0" x2="340" y2="0" stroke="#0284C7" strokeWidth="2" strokeOpacity="0.7" />
            </g>
          </g>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="mb-14 text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-50 border border-cyan-300 text-cyan-900 text-xs font-mono font-medium shadow-xs animate-float-bob">
            <Radio className="w-4 h-4 text-cyan-600 animate-pulse" />
            <span className="uppercase tracking-[0.2em]">Cath Lab & Diagnostic Systems</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-semibold text-slate-950 tracking-tight leading-[1.08]">
            State-of-the-Art Technology for <br />
            <span className="font-serif italic font-normal text-cyan-700">Gentle, Accurate Interventions</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 font-medium max-w-2xl mx-auto leading-relaxed">
            From sub-millimeter flat-panel fluoroscopy to ultra-thin drug-eluting stents, every intervention follows international safety guidelines.
          </p>
        </div>

        {/* Modal Switcher Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12">
          {techArsenal.map((tech, idx) => {
            const isActive = activeTech === idx;
            return (
              <button
                key={tech.id}
                onClick={() => setActiveTech(idx)}
                className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-300 ${
                  isActive
                    ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-lg shadow-cyan-500/25 scale-105 border border-cyan-400'
                    : 'bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 shadow-xs'
                }`}
              >
                {tech.title}
              </button>
            );
          })}
        </div>

        {/* =========================================================================
            ARTISTIC OVERLAPPING TECHNOLOGY SHOWCASE:
            - Large Cinematic Equipment Photography (Anchor, z-20)
            - Overlapping Technical Specifications HUD (Top-Right, z-30)
            - Overlapping Clinical Value Plaque (Bottom-Left, z-35)
           ========================================================================= */}
        <div className="relative min-h-[580px] lg:min-h-[640px] w-full my-6">

          {/* Main Cinematic Equipment Card (Center Anchor, z-20) */}
          <div className="lg:w-[78%] mx-auto z-20 transition-all duration-600 ease-out hover:z-50 hover:-translate-y-2">
            <div className="group relative rounded-[2.5rem] overflow-hidden bg-white p-4 sm:p-5 border-2 border-cyan-200 shadow-layered transition-all duration-500">
              <div className="relative aspect-[16/10] sm:aspect-[16/9] rounded-[2rem] overflow-hidden">
                <img
                  src={current.image}
                  alt={current.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />

                <div className="absolute top-4 left-4 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-cyan-300 text-cyan-900 text-xs font-mono font-medium shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-cyan-600 animate-pulse" />
                  <span>{current.category}</span>
                </div>

                <div className="absolute bottom-6 left-6 right-6 text-left space-y-1">
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
                    {current.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-200 font-medium max-w-xl line-clamp-2">
                    {current.description}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Overlapping HUD Card: Technical Specifications (Top-Right, z-30, rotated +2deg) */}
          <div className="mt-8 lg:mt-0 lg:absolute lg:top-6 lg:right-2 lg:w-[38%] z-30 transition-all duration-600 ease-out hover:z-50 hover:-translate-y-3 lg:rotate-2 hover:rotate-0">
            <div className="p-6 rounded-[2rem] bg-white/95 backdrop-blur-2xl border-2 border-cyan-300 shadow-layered space-y-4 text-left transition-all duration-300 hover:shadow-cyan-500/20">

              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <span className="text-xs font-mono uppercase tracking-wider text-cyan-800 font-semibold flex items-center gap-1.5">
                  <Zap className="w-4 h-4 text-cyan-600" />
                  <span>Technical Specifications</span>
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-cyan-50 text-[10px] font-mono font-medium text-cyan-700 border border-cyan-200">
                  VERIFIED HUD
                </span>
              </div>

              <div className="space-y-2.5">
                {current.specs.map((s, i) => (
                  <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-100 hover:bg-cyan-50/50 transition-colors">
                    <span className="text-xs font-medium text-slate-600">
                      {s.label}
                    </span>
                    <span className="text-xs font-mono font-semibold text-cyan-900">
                      {s.value}
                    </span>
                  </div>
                ))}
              </div>

            </div>
          </div>

          {/* Overlapping Card: Clinical Efficacy & Safety (Bottom-Left, z-35, rotated -1.5deg) */}
          <div className="mt-8 lg:mt-0 lg:absolute lg:bottom-4 lg:left-2 lg:w-[42%] z-35 transition-all duration-600 ease-out hover:z-50 hover:-translate-y-3 lg:-rotate-1 hover:rotate-0">
            <div className="p-6 rounded-[2rem] bg-gradient-to-br from-white via-cyan-50/40 to-white text-slate-900 shadow-layered border-2 border-emerald-300 space-y-3 text-left">
              <div className="flex items-center gap-2 text-emerald-700">
                <ShieldCheck className="w-4 h-4" />
                <span className="text-xs font-mono font-semibold uppercase tracking-wider">
                  Clinical Value & Safety Charter
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
                {current.clinicalValue}
              </p>
              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500 font-mono">
                <span>Catheterization Suite</span>
                <span className="text-cyan-700 font-semibold">Pulse Heart Centre</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
