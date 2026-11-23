import React from 'react';

/**
 * SectionBackgroundMotion
 * High-definition, subtle animated medical background system.
 * Features:
 * 1. Floating Luminous Emerald & Mint Atmospheric Orbs
 * 2. Active Sweeping Laser Line (animate-laser-h / animate-laser-v)
 * 3. Counter-Rotating CAD Engineering Coordinate Rings
 * 4. Flowing ECG Cardiac Waveform with live pulsing nodes
 * 5. Floating Precision Medical Crosses (+)
 * 6. Subtle Micro-Dot Medical Matrix
 * 7. Optional Watermark Monograph
 */
export default function SectionBackgroundMotion({
  variant = 'default',
  watermark = '',
  position = 'right', // 'left', 'right', 'center'
  hasLaser = true,
  hasRings = true,
  hasEcg = true,
  hasCrosses = true,
  hasOrbs = true,
  className = '',
}) {
  const ringPosClass = position === 'left' 
    ? 'top-1/2 -left-28 -translate-y-1/2' 
    : position === 'center' 
    ? 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' 
    : 'top-1/2 -right-28 -translate-y-1/2';

  return (
    <div 
      className={`absolute inset-0 pointer-events-none -z-10 overflow-hidden select-none ${className}`}
      aria-hidden="true"
    >
      {/* 1. Luminous Ambient Gradient Orbs (Soft Emerald, Pine & Mint) */}
      {hasOrbs && (
        <>
          <div className="absolute -top-24 left-1/4 w-[650px] h-[650px] bg-gradient-to-tr from-[#059669]/14 via-[#10B981]/10 to-transparent rounded-full blur-[130px] animate-float-1" />
          <div className="absolute -bottom-20 right-1/4 w-[600px] h-[600px] bg-gradient-to-bl from-[#064E3B]/12 via-[#34D399]/10 to-transparent rounded-full blur-[140px] animate-float-2" />
          <div className="absolute top-1/2 left-0 w-[450px] h-[450px] bg-gradient-to-r from-emerald-400/8 to-transparent rounded-full blur-[110px] animate-float-3" />
        </>
      )}

      {/* 2. Micro Dot-Matrix Blueprint Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#059669_1.2px,transparent_1.2px)] bg-[size:36px_36px] opacity-20 [mask-image:radial-gradient(ellipse_85%_70%_at_50%_40%,#000_70%,transparent_100%)]" />

      {/* 3. Floating Medical Crosses (+) at Quadrants */}
      {hasCrosses && (
        <>
          <div className="absolute top-12 left-12 text-[#059669]/30 font-mono text-base font-bold animate-medical-cross-1 select-none">
            +
          </div>
          <div className="absolute top-20 right-16 text-[#059669]/30 font-mono text-base font-bold animate-medical-cross-2 select-none">
            +
          </div>
          <div className="absolute bottom-16 left-20 text-[#059669]/25 font-mono text-base font-bold animate-medical-cross-2 select-none">
            +
          </div>
          <div className="absolute bottom-12 right-12 text-[#059669]/30 font-mono text-base font-bold animate-medical-cross-1 select-none">
            +
          </div>
        </>
      )}

      {/* 4. Rotating Technical CAD Coordinate Rings */}
      {hasRings && (
        <div className={`absolute ${ringPosClass} w-[580px] h-[580px] rounded-full border border-[#059669]/20 hidden lg:block`}>
          {/* Outer Dashed Rotating Ring (Clockwise) */}
          <div className="absolute inset-4 rounded-full border border-dashed border-[#059669]/35 animate-gentle-cw" />
          {/* Middle Ring with tick marks */}
          <div className="absolute inset-16 rounded-full border border-[#064E3B]/25 flex items-center justify-center">
            <div className="absolute inset-x-0 h-[1px] bg-[#059669]/20" />
            <div className="absolute inset-y-0 w-[1px] bg-[#059669]/20" />
          </div>
          {/* Inner Counter-Rotating Ring */}
          <div className="absolute inset-28 rounded-full border border-dashed border-[#10B981]/40 animate-gentle-ccw" />
          {/* Center Pulsing Cardiac Core */}
          <div className="absolute inset-44 rounded-full border border-[#059669]/30 animate-cardiac-beat" />
        </div>
      )}

      {/* 5. Sweeping Laser Scanner Beam (Horizontal) */}
      {hasLaser && (
        <div className="absolute inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#10B981] to-transparent shadow-[0_0_18px_#059669] opacity-40 animate-laser-v pointer-events-none" />
      )}

      {/* 6. Active Flowing Cardiac ECG Line with Ping Blips */}
      {hasEcg && (
        <div className="absolute bottom-6 left-0 right-0 opacity-45 pointer-events-none">
          <svg className="w-full h-24" viewBox="0 0 1440 90" fill="none" preserveAspectRatio="none">
            <path
              d="M0,50 L260,50 L280,50 L290,25 L300,75 L310,12 L320,68 L330,50 L480,50 L720,50 L740,50 L750,25 L760,75 L770,12 L780,68 L790,50 L960,50 L1180,50 L1200,50 L1210,25 L1220,75 L1230,12 L1240,68 L1250,50 L1440,50"
              stroke="#059669"
              strokeWidth="2.2"
              strokeDasharray="320"
              className="animate-flow-dash"
            />
            {/* Live Cardiac Pulse Blip Ping */}
            <circle cx="310" cy="12" r="4.5" fill="#10B981" className="animate-ping" />
            <circle cx="770" cy="12" r="4.5" fill="#10B981" className="animate-ping" />
            <circle cx="1230" cy="12" r="4.5" fill="#10B981" className="animate-ping" />
          </svg>
        </div>
      )}

      {/* 7. Optional Watermark Monograph */}
      {watermark && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-sans font-black text-[15vw] text-[#064E3B]/[0.022] whitespace-nowrap pointer-events-none tracking-tight select-none">
          {watermark}
        </div>
      )}
    </div>
  );
}
