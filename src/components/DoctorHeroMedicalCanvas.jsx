import React from 'react';

/**
 * DoctorHeroMedicalCanvas
 * Clean, subtle animated medical background for the About Page Hero.
 * Designed to frame Dr. Prakash Chand Shahi's dossier without crossing behind text
 * or adding distracting HUD chips.
 */
export default function DoctorHeroMedicalCanvas({ className = '' }) {
  return (
    <div
      className={`absolute inset-0 pointer-events-none z-0 overflow-hidden select-none ${className}`}
      aria-hidden="true"
    >
      {/* 1. Warm Platinum Alabaster Base */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#FAF9F6] via-[#F8FAFC] to-[#F1F5F9]" />

      {/* 2. Soft GPU-Friendly Drifting Radial Auras */}
      <div
        className="absolute -top-32 right-[-6%] w-[620px] h-[620px] rounded-full animate-float-1 will-change-transform"
        style={{ background: 'radial-gradient(circle, rgba(190,18,60,0.09) 0%, rgba(10,17,40,0.04) 48%, transparent 72%)' }}
      />
      <div
        className="absolute bottom-[-18%] -left-24 w-[560px] h-[560px] rounded-full animate-float-2 will-change-transform"
        style={{ background: 'radial-gradient(circle, rgba(10,17,40,0.08) 0%, rgba(190,18,60,0.04) 48%, transparent 72%)' }}
      />

      {/* 3. Subtle Clinical Blueprint Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#0A112812_1px,transparent_1px)] bg-[size:22px_22px] [mask-image:radial-gradient(ellipse_90%_80%_at_50%_45%,#000_70%,transparent_100%)] opacity-60" />

      {/* 4. Subtle Corner Orbital Ring (Right Edge Only) */}
      <div className="hidden lg:block absolute -right-40 top-1/2 -translate-y-1/2 w-[520px] h-[520px] rounded-full border border-slate-200/70">
        <div className="absolute inset-10 rounded-full border border-dashed border-rose-200/70 animate-gentle-cw" />
      </div>

      {/* 5. Minimal Floating Medical Cross Accents */}
      <div className="absolute top-28 left-[6%] text-[#BE123C]/20 font-mono text-lg font-bold animate-float-1">+</div>
      <div className="absolute bottom-24 left-[44%] text-[#0A1128]/15 font-mono text-base font-bold animate-float-2">+</div>

      {/* 6. Quiet Bottom-Edge ECG Rhythm Trace (Below Content Zone) */}
      <svg
        viewBox="0 0 1200 60"
        preserveAspectRatio="none"
        className="absolute bottom-0 inset-x-0 w-full h-10 opacity-30"
        fill="none"
      >
        <path
          d="M0,42 L320,42 L345,42 L355,28 L365,52 L378,12 L390,54 L400,36 L412,42 L780,42 L805,42 L815,28 L825,52 L838,14 L850,54 L860,36 L872,42 L1200,42"
          stroke="#BE123C"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="16 8"
          className="animate-flow-dash"
        />
      </svg>
    </div>
  );
}
