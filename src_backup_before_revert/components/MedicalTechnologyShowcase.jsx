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
      image: '/images/heart-anatomy.jpg',
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
    <section className="relative py-28 lg:py-36 overflow-hidden select-none bg-transparent">

      {/* =========================================================================
          ANIMATED SECTION BACKGROUND: LUMINOUS CYAN, ICY BLUE & SWEEPING RADAR
         ========================================================================= */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        {/* Neon Cyan & Electric Azure Fluoroscopy Glow */}
        <div className="absolute top-1/4 -right-20 w-[700px] h-[700px] rounded-full bg-gradient-to-tr from-cyan-400/60 via-sky-400/50 to-blue-600/45 blur-[70px] animate-pulse-glow" />

        {/* Icy Sky Blue Glow */}
        <div className="absolute bottom-10 -left-20 w-[650px] h-[650px] rounded-full bg-gradient-to-bl from-teal-400/50 via-cyan-300/45 to-sky-500/40 blur-[75px] animate-float-2" />

        {/* Technical HUD Grid & Animated Sweeping Radar */}
        <svg className="absolute inset-0 w-full h-full opacity-75" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="techGridLight" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#0284C7" strokeWidth="0.8" strokeOpacity="0.35" />
              <circle cx="60" cy="0" r="2" fill="#0284C7" fillOpacity="0.6" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#techGridLight)" />


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
                className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-300 ${isActive
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
            WORLD-CLASS HIGH-TECH EQUIPMENT SHOWCASE (100% Clean Photography)
            - Left: 100% Clean Cinematic Equipment Photography (Zero Dark Overlays)
            - Right: Futuristic HUD Technical Specifications & Clinical Safety Plaque
           ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch my-6 text-left">

          {/* Left Column (7 cols): 100% Clean Photography Canvas */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div className="group relative rounded-[2.5rem] overflow-hidden bg-white/45 backdrop-blur-2xl p-4 sm:p-5 border-2 border-white/75 shadow-[0_20px_50px_rgba(109,40,217,0.06)] transition-all duration-500 hover:shadow-2xl hover:-translate-y-1">

              {/* Clean Optical Photography Frame (Zero Text or Dark Gradient Over Photo) */}
              <div className="relative aspect-[16/11] sm:aspect-[16/10] rounded-[2rem] overflow-hidden border border-slate-100 shadow-inner">
                <img
                  src={current.image}
                  alt={current.title}
                  className="w-full h-full object-cover filter contrast-[1.05] saturate-[1.08] transition-transform duration-700 group-hover:scale-106"
                />
              </div>

              {/* Clean Photographic Monograph Footer Placed Gracefully BELOW Photo */}
              <div className="mt-3.5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-mono px-1">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-cyan-600 animate-pulse" />
                  <span className="font-bold text-cyan-950 uppercase tracking-wider">{current.category}</span>
                </div>
                <span className="text-[11px] text-slate-500 font-medium">Betiahata Cath Lab • Gorakhpur</span>
              </div>
            </div>
          </div>

          {/* Right Column (5 cols): High-Tech Technical HUD & Clinical Charter */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">

            {/* Primary Specification HUD Card */}
            <div className="p-6 sm:p-7 rounded-[2.5rem] bg-white/45 backdrop-blur-2xl border-2 border-white/75 shadow-[0_20px_50px_rgba(109,40,217,0.06)] space-y-5 transition-all duration-300 hover:shadow-cyan-500/20">

              <div className="space-y-2 pb-4 border-b border-slate-100">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 text-[10px] font-mono font-bold text-cyan-900 border border-cyan-200">
                  <Zap className="w-3.5 h-3.5 text-cyan-600" />
                  <span>SPECIFICATION HUD • VERIFIED</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight leading-snug">
                  {current.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                  {current.description}
                </p>
              </div>

              {/* Technical Specifications Grid */}
              <div className="space-y-2.5">
                {current.specs.map((s, i) => (
                  <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-100 hover:bg-cyan-50/60 transition-colors">
                    <span className="text-xs font-medium text-slate-600">
                      {s.label}
                    </span>
                    <span className="text-xs font-mono font-bold text-cyan-950">
                      {s.value}
                    </span>
                  </div>
                ))}
              </div>

            </div>

            {/* Clinical Value & Patient Safety Plaque */}
            <div className="p-6 rounded-[2rem] bg-gradient-to-br from-white via-emerald-50/40 to-white shadow-layered border-2 border-emerald-300 space-y-2">
              <div className="flex items-center gap-2 text-emerald-800">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span className="text-xs font-mono font-bold uppercase tracking-wider">
                  Patient Safety & Procedural Value
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
                {current.clinicalValue}
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
