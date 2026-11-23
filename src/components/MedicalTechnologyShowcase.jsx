
import React, { useState } from 'react';
import { Radio, Zap, ShieldCheck } from 'lucide-react';
import SectionCinematicVideo from './SectionCinematicVideo';
import DiagnosticScannerFullCanvas from './DiagnosticScannerFullCanvas';

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
      title: 'Digital Flat-Panel Cath Suite',
      category: 'C-ARM FLUOROSCOPY',
      description: 'Sub-millimeter roadmap clarity with DoseSense -40% radiation minimization.',
      image: '/images/cath-lab.jpg',
      videoUrl: '/videos/facilities-walkthrough.mp4',
      type: 'facilities-walkthrough',
      specs: [
        { label: 'Spatial Resolution', value: '< 0.3 mm Matrix' },
        { label: 'Frame Rate', value: '15–30 fps Cine' },
        { label: 'Dose Reduction', value: '-40% Exposure' },
        { label: 'Scope', value: 'Coronary & Peripheral' },
      ],
      clinicalValue: 'Micro-guidewire navigation across calcified bifurcations & CTO lesions.',
    },
    {
      id: 'angiogram-fluoroscopy',
      title: 'Cineangiographic Stenosis Mapping',
      category: 'DIAGNOSTIC LESION QCA',
      description: 'Dynamic non-ionic contrast cine evaluating stenosis dimensions.',
      image: '/images/stent-catheter-fluoroscopy.jpg',
      videoUrl: '/videos/cardiac-catheterization.mp4',
      type: 'cardiac-catheterization',
      specs: [
        { label: 'Projection Angles', value: 'RAO/LAO Cranial' },
        { label: 'Calibration', value: 'QCA Stenosis Mapping' },
        { label: 'Approach', value: 'Right Transradial Wrist' },
        { label: 'Recovery', value: '2 Hours Post-Op' },
      ],
      clinicalValue: 'Gold-standard roadmap distinguishing medical vs. stent therapy.',
    },
    {
      id: 'stent-biomaterials',
      title: 'Cobalt-Chromium DES Stents',
      category: 'ENDOVASCULAR BIO-IMPLANTS',
      description: 'Ultra-thin strut lattices coated with 90-day antiproliferative polymer.',
      image: '/images/radial-catheter-sheath.jpg',
      videoUrl: '/videos/cardiology-heart.mp4',
      type: 'cardiology-heart',
      specs: [
        { label: 'Strut Thickness', value: '60–81 Microns' },
        { label: 'Polymer Matrix', value: 'Bio-Absorbable' },
        { label: 'Elution Agent', value: 'Everolimus' },
        { label: 'Patency Rate', value: '99.4% Flow' },
      ],
      clinicalValue: 'Rapid endothelial healing with zero foreign-body inflammation.',
    },
    {
      id: 'pacemaker-conduction',
      title: 'Micro-Lithium Rhythm Generator',
      category: 'ELECTROPHYSIOLOGY',
      description: 'Hermetically sealed titanium pulse generator with rate-responsive pacing.',
      image: '/images/pacemaker-tech.jpg',
      videoUrl: '/videos/cardiology-heart.mp4',
      type: 'cardiology-heart',
      specs: [
        { label: 'Battery Lifespan', value: '10–14 Years' },
        { label: 'Pacing Chambers', value: 'Single & Dual' },
        { label: 'Sensing Tech', value: 'Auto-Capture™' },
        { label: 'Telemetry Link', value: 'Wireless Inductive' },
      ],
      clinicalValue: 'Maintains physiological cardiac rhythm in severe heart blocks.',
    },
  ];

  const current = techArsenal[activeTech];

  return (
    <section className="relative py-28 lg:py-36 overflow-hidden select-none bg-gradient-to-b from-[#FFFDF9] via-[#F0FDF4] to-[#F0FDF4]">

      {/* =========================================================================
          ANIMATED SECTION BACKGROUND: 3D WEBGL SCANNER, MOTION VIDEO & TECHNICAL HUD
         ========================================================================= */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden" aria-hidden="true">
        
        {/* 1. Ambient 4K Clinical Cath-Lab Motion Video Layer */}
        <div className="absolute inset-0 z-0 overflow-hidden opacity-25 mix-blend-multiply pointer-events-none">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            className="w-full h-full object-cover scale-105 filter contrast-125 saturate-125"
          >
            <source src="/videos/facilities-walkthrough.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-[#FFFDF9]/80 via-transparent to-[#F0FDF4]/85" />
        </div>

        {/* 2. Interactive 3D WebGL Tomographic Scanner Canvas (Three.js) */}
        <div className="absolute inset-0 z-1 opacity-70 pointer-events-none">
          <DiagnosticScannerFullCanvas />
        </div>

        {/* 3. Velvet Emerald, Mint & Amber Atmospheric Glow Spheres */}
        <div className="absolute top-1/4 -right-20 w-[700px] h-[700px] rounded-full bg-gradient-to-tr from-[#064E3B]/25 via-[#059669]/25 to-transparent blur-[140px] animate-pulse-glow" />
        <div className="absolute bottom-10 -left-20 w-[650px] h-[650px] rounded-full bg-gradient-to-bl from-[#34D399]/35 via-[#F0FDF4]/40 to-transparent blur-[140px] animate-float-2" />
        <div className="absolute top-10 left-1/3 w-[500px] h-[500px] rounded-full bg-[#10B981]/15 blur-[120px]" />

        {/* 4. Active Sweeping Fluoroscopy Laser Beam */}
        <div className="absolute inset-x-0 h-[2.5px] bg-gradient-to-r from-transparent via-[#10B981] to-transparent shadow-[0_0_20px_#059669] opacity-50 animate-laser-sweep pointer-events-none" />

        {/* 5. Counter-Rotating CAD Angle Gauges (Siemens C-Arm Calibration Geometry) */}
        <div className="absolute top-16 left-6 w-80 h-80 rounded-full border-2 border-[#047857]/30 hidden lg:block animate-gentle-cw" />
        <div className="absolute top-24 left-14 w-64 h-64 rounded-full border-2 border-dashed border-[#10B981]/40 hidden lg:block animate-gentle-ccw" />
        <div className="absolute bottom-16 right-10 w-96 h-96 rounded-full border-2 border-[#047857]/25 hidden lg:block animate-gentle-ccw" />
        <div className="absolute bottom-24 right-20 w-72 h-72 rounded-full border-2 border-dashed border-emerald-600/35 hidden lg:block animate-gentle-cw" />

        {/* 6. Technical Precision Blueprint Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#064E3B18_1px,transparent_1px),linear-gradient(to_bottom,#064E3B18_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_85%_70%_at_50%_35%,#000_75%,transparent_100%)] pointer-events-none" />

        {/* 7. Floating Medical Crosshairs (+) at Quadrants */}
        <div className="absolute top-16 left-12 text-[#059669]/40 font-mono text-base font-bold animate-medical-cross-1 select-none">+</div>
        <div className="absolute top-36 right-16 text-[#059669]/40 font-mono text-base font-bold animate-medical-cross-2 select-none">+</div>
        <div className="absolute bottom-20 left-20 text-[#059669]/35 font-mono text-base font-bold animate-medical-cross-2 select-none">+</div>
        <div className="absolute bottom-32 right-32 text-[#059669]/35 font-mono text-base font-bold animate-medical-cross-1 select-none">+</div>

        {/* 8. Live Fluoroscopy C-Arm HUD Telemetry Box */}
        <div className="absolute top-28 right-10 font-mono text-[10px] text-[#064E3B]/50 tracking-widest hidden xl:block uppercase space-y-1 bg-white/80 backdrop-blur-md p-3.5 rounded-2xl border border-[#A7F3D0] shadow-sm">
          <div className="flex items-center gap-2 font-bold text-[#064E3B]">
            <span className="w-2 h-2 rounded-full bg-[#10B981] animate-ping" />
            <span>SIEMENS ARTIS ZEE • C-ARM</span>
          </div>
          <div>PROJECTION: LAO 45° • CRANIAL 20°</div>
          <div>ACQUISITION: 30 FPS • 0.3mm MATRIX</div>
          <div className="text-[#047857] font-semibold">DOSESENSE: -40% RADIATION</div>
        </div>

        {/* 9. Monumental Watermark Typography */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-serif italic font-bold text-[18vw] text-[#064E3B]/[0.025] whitespace-nowrap pointer-events-none tracking-widest">
          FLUOROSCOPY
        </div>

      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="mb-10 text-center max-w-3xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F0FDF4] border border-[#34D399] text-[#064E3B] text-xs font-mono font-medium shadow-xs">
            <Radio className="w-4 h-4 text-[#047857] animate-pulse" />
            <span className="uppercase tracking-[0.2em]">Cath Lab &amp; Diagnostic Systems</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#064E3B] tracking-tight">
            Interventional Technology <span className="font-serif italic font-normal text-[#059669]">Suite</span>
          </h2>

          <div className="flex flex-wrap items-center justify-center gap-2 pt-1 font-mono text-[11px] font-bold">
            <span className="bg-[#F0FDF4] text-[#064E3B] px-3 py-1 rounded-full border border-[#A7F3D0]">&lt; 0.3 mm Matrix</span>
            <span className="bg-[#F0FDF4] text-[#047857] px-3 py-1 rounded-full border border-[#34D399]">DoseSense -40%</span>
            <span className="bg-white text-slate-900 px-3 py-1 rounded-full border border-[#A7F3D0]">99.4% Flow Restored</span>
          </div>
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
                    ? 'bg-gradient-to-r from-[#064E3B] via-[#047857] to-[#047857] text-[#A7F3D0] shadow-lg shadow-[#064E3B]/25 scale-105 border border-[#A7F3D0]/50'
                    : 'bg-white hover:bg-[#F0FDF4] text-slate-700 border border-[#A7F3D0]/60 shadow-xs'
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
            <div className="group relative rounded-[2.5rem] overflow-hidden bg-white p-4 sm:p-5 border-2 border-[#A7F3D0] shadow-[0_20px_50px_rgba(6, 78, 59, 0.08)] transition-all duration-500">
              <div className="relative rounded-[2rem] overflow-hidden">
                <SectionCinematicVideo
                  type={current.type || "facilities-walkthrough"}
                  videoUrl={current.videoUrl}
                  styleVariant="floating-3d"
                  posterImage={current.image}
                  title={current.title}
                  subtitle={current.category}
                  specs={current.clinicalValue}
                  aspectRatio="aspect-[16/10] sm:aspect-[16/9]"
                />
              </div>
            </div>
          </div>

          {/* Overlapping HUD Card: Technical Specifications (Top-Right, z-30, rotated +2deg) */}
          <div className="mt-8 lg:mt-0 lg:absolute lg:top-6 lg:right-2 lg:w-[38%] z-30 transition-all duration-600 ease-out hover:z-50 hover:-translate-y-3 lg:rotate-2 hover:rotate-0">
            <div className="p-6 rounded-[2rem] bg-white/95 backdrop-blur-2xl border-2 border-[#A7F3D0] shadow-[0_20px_50px_rgba(6, 78, 59, 0.1)] space-y-4 text-left transition-all duration-300 hover:shadow-[#064E3B]/15">

              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <span className="text-xs font-mono uppercase tracking-wider text-[#064E3B] font-semibold flex items-center gap-1.5">
                  <Zap className="w-4 h-4 text-[#047857]" />
                  <span>Technical Specifications</span>
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-[#F0FDF4] text-[10px] font-mono font-medium text-[#064E3B] border border-[#A7F3D0]">
                  VERIFIED HUD
                </span>
              </div>

              <div className="space-y-2.5">
                {current.specs.map((s, i) => (
                  <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-100 hover:bg-[#F0FDF4]/60 transition-colors">
                    <span className="text-xs font-medium text-slate-600">
                      {s.label}
                    </span>
                    <span className="text-xs font-mono font-semibold text-[#064E3B]">
                      {s.value}
                    </span>
                  </div>
                ))}
              </div>

            </div>
          </div>

          {/* Overlapping Card: Clinical Efficacy & Safety */}
          <div className="mt-8 lg:mt-0 lg:absolute lg:bottom-4 lg:left-2 lg:w-[42%] z-35 transition-all duration-600 ease-out hover:z-50 hover:-translate-y-3 lg:-rotate-1 hover:rotate-0">
            <div className="p-5 rounded-[2rem] bg-gradient-to-br from-white via-[#F0FDF4]/60 to-[#F0FDF4]/60 text-slate-900 shadow-[0_20px_50px_rgba(6, 78, 59, 0.08)] border-2 border-[#34D399] space-y-2 text-left">
              <div className="flex items-center justify-between text-[#047857]">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4" />
                  <span className="text-xs font-mono font-bold uppercase tracking-wider">
                    Clinical Safety Standards
                  </span>
                </div>
                <span className="text-[10px] font-mono text-[#064E3B] font-bold bg-[#F0FDF4] border border-[#A7F3D0] px-2 py-0.5 rounded-full">NABH • ACC</span>
              </div>
              <p className="text-xs text-slate-800 font-bold">
                {current.clinicalValue}
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
