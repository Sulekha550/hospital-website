import React from 'react';

/**
 * VibrantBackgroundDesign -> Deep Midnight Navy, Crimson Ruby & Warm Platinum
 * World-Class Prestigious Medical Background System:
 * - Base: Warm Platinum Alabaster Silk Wash (#FAF9F6, #F8FAFC, #F1F5F9)
 * - Highly Visible Continuous Midnight Obsidian Aura (#0A1128, #1E293B)
 * - Luminous Crimson Ruby Vitality Spheres (#E11D48, #BE123C, #881337)
 * - 3D Rotating Geometric Wireframes
 * - Sweeping Fluoroscopy Crimson Laser Beam (6s cycle)
 * - Continuous Cardiac Sinus Waveform
 */
export default function VibrantBackgroundDesign() {
  return (
    <div
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none"
      aria-hidden="true"
    >
      {/* 1. Base Warm Platinum & Alabaster Silk Wash */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#FAF9F6] via-[#F8FAFC] to-[#F1F5F9]" />

      {/* 2. Visibly Active Luminous Vitality Spheres */}
      {/* Top-Left Deep Midnight Obsidian Aura */}
      <div className="absolute -top-24 -left-24 w-[640px] h-[640px] rounded-full bg-gradient-to-br from-[#0A1128]/32 via-[#1E293B]/24 to-transparent blur-[85px] animate-float-1" />

      {/* Top-Right Crimson Ruby Vitality Flare */}
      <div className="absolute -top-20 right-8 w-[600px] h-[600px] rounded-full bg-gradient-to-bl from-[#E11D48]/38 via-[#BE123C]/30 to-transparent blur-[80px] animate-float-2" />

      {/* Center-Right Warm Platinum Specular Glow */}
      <div className="absolute top-1/3 -right-20 w-[540px] h-[540px] rounded-full bg-gradient-to-tl from-[#CBD5E1]/45 via-[#F1F5F9]/30 to-transparent blur-[75px] animate-float-3" />

      {/* Mid-Left Carmine Ruby Radiance */}
      <div className="absolute top-1/2 -left-20 w-[520px] h-[520px] rounded-full bg-gradient-to-tr from-[#BE123C]/32 via-[#E11D48]/26 to-transparent blur-[80px] animate-aurora-breathe" />

      {/* Bottom Center Deep Royal Obsidian & Ruby Hearth */}
      <div className="absolute -bottom-28 left-1/4 w-[680px] h-[680px] rounded-full bg-gradient-to-t from-[#0A1128]/30 via-[#BE123C]/26 to-transparent blur-[85px] animate-float-1" />

      {/* 3. High-Precision Medical Millimeter Blueprint Matrix Grid */}
      <svg className="absolute inset-0 w-full h-full opacity-45 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="globalMedicalBlueprintMatrix" width="36" height="36" patternUnits="userSpaceOnUse">
            <path d="M 36 0 L 0 0 0 36" fill="none" stroke="#0F172A" strokeWidth="0.6" strokeOpacity="0.16" />
            <circle cx="36" cy="0" r="1" fill="#BE123C" fillOpacity="0.45" />
          </pattern>
          <pattern id="globalMajorGridMatrix" width="144" height="144" patternUnits="userSpaceOnUse">
            <rect width="144" height="144" fill="none" stroke="#0F172A" strokeWidth="1" strokeOpacity="0.08" />
            <path d="M 144 0 L 138 0 M 144 0 L 144 6 M 0 0 L 6 0 M 0 0 L 0 6 M 0 144 L 6 144 M 0 144 L 0 138 M 144 144 L 138 144 M 144 144 L 144 138" stroke="#BE123C" strokeWidth="1.4" strokeOpacity="0.45" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#globalMedicalBlueprintMatrix)" />
        <rect width="100%" height="100%" fill="url(#globalMajorGridMatrix)" />
      </svg>

      {/* 4. Active Continuous Fluoroscopy Crimson Laser Scanning Beam */}
      <div className="absolute inset-x-0 h-[2.5px] bg-gradient-to-r from-transparent via-[#E11D48] to-transparent shadow-[0_0_24px_#BE123C] opacity-75 animate-laser-fast pointer-events-none" />

      {/* 5. Floating 3D Geometric Ring in Background */}
      <div
        className="absolute top-1/4 right-1/4 w-72 h-72 rounded-full border-2 border-dashed border-rose-300/35 pointer-events-none hidden lg:block animate-rotate-3d"
        style={{ transformStyle: 'preserve-3d' }}
      >
        <div className="absolute inset-6 rounded-full border border-slate-300/40" />
      </div>

      {/* 6. Active Global ECG Sinus Rhythm Wave Ribbon */}
      <div className="absolute top-2/3 left-0 right-0 z-0 opacity-40 pointer-events-none">
        <svg className="w-full h-16" viewBox="0 0 1440 60" fill="none" preserveAspectRatio="none">
          <path
            d="M0,30 L360,30 L380,30 L390,10 L405,50 L420,5 L435,45 L445,30 L500,30 L900,30 L920,30 L930,10 L945,50 L960,5 L975,45 L985,30 L1440,30"
            stroke="#BE123C"
            strokeWidth="2.5"
            strokeDasharray="600"
            className="animate-flow-dash"
          />
        </svg>
      </div>

      {/* 7. Precision Clinical Crosshairs & Beacons */}
      <div className="absolute top-28 left-8 text-[#0A1128]/70 font-mono text-xl font-bold animate-medical-cross-1 select-none pointer-events-none">+</div>
      <div className="absolute top-1/4 right-14 text-[#BE123C]/80 font-mono text-lg font-bold animate-medical-cross-2 select-none pointer-events-none">+</div>
      <div className="absolute top-2/3 left-12 text-[#0A1128]/60 font-mono text-xl font-bold animate-medical-cross-2 select-none pointer-events-none">+</div>
      <div className="absolute bottom-32 right-12 text-[#BE123C]/70 font-mono text-lg font-bold animate-medical-cross-1 select-none pointer-events-none">+</div>

      {/* Bioluminescent Sparkles */}
      <div className="absolute top-1/3 left-1/4 text-[#BE123C]/60 text-sm animate-float-bob pointer-events-none">✦</div>
      <div className="absolute top-1/2 right-1/3 text-[#0A1128]/50 text-base animate-float-1 pointer-events-none">✦</div>
      <div className="absolute bottom-1/4 left-1/3 text-[#E11D48]/60 text-sm animate-float-2 pointer-events-none">✦</div>
    </div>
  );
}
