import React, { useEffect, useState, useRef } from 'react';

/**
 * VibrantBackgroundDesign
 * Ambient global interactive animated background:
 * 1. Interactive Cursor Follower Aura: Smooth glowing emerald light gliding with the mouse.
 * 2. Animated Flowing Cardiac Waves with Traveling Laser Pulses.
 * 3. Soft Ambient Floating Gradient Orbs in Emerald, Mint, Pine & Warm Amber.
 * 4. Oscillating Medical Wave Ribbons & Concentric Radar Rings.
 */
export default function VibrantBackgroundDesign() {
  const mouseRef = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 3 });
  const posRef = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 3 });
  const [cursorPos, setCursorPos] = useState({ x: window.innerWidth / 2, y: window.innerHeight / 3 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    let animId;
    const animate = () => {
      posRef.current.x += (mouseRef.current.x - posRef.current.x) * 0.05;
      posRef.current.y += (mouseRef.current.y - posRef.current.y) * 0.05;
      
      setCursorPos({ x: posRef.current.x, y: posRef.current.y });
      animId = requestAnimationFrame(animate);
    };

    animId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden select-none" aria-hidden="true">
      
      {/* 1. INTERACTIVE MOUSE-FOLLOWING EMERALD GLOW AURA */}
      <div 
        className="absolute w-[450px] h-[450px] rounded-full bg-gradient-to-tr from-[#059669]/15 via-[#10B981]/12 to-emerald-200/8 blur-[110px] transition-transform duration-75 ease-out"
        style={{
          transform: `translate3d(${cursorPos.x - 225}px, ${cursorPos.y - 225}px, 0)`,
          willChange: 'transform',
        }}
      />

      {/* 2. SOFT MEDICAL AMBIENT ORBS (Emerald, Mint, Pine, Amber) */}
      <div className="absolute -top-32 -left-28 w-[750px] h-[750px] rounded-full bg-gradient-to-tr from-[#064E3B]/16 via-[#059669]/14 to-transparent blur-[140px] animate-float-1" />
      <div className="absolute -top-20 -right-28 w-[700px] h-[700px] rounded-full bg-gradient-to-bl from-[#10B981]/15 via-[#34D399]/12 to-transparent blur-[130px] animate-float-2" />
      <div className="absolute top-1/3 -left-36 w-[680px] h-[680px] rounded-full bg-gradient-to-r from-[#047857]/14 via-teal-400/10 to-transparent blur-[140px] animate-float-3" />
      <div className="absolute top-1/2 -right-28 w-[650px] h-[650px] rounded-full bg-gradient-to-l from-amber-400/12 via-[#059669]/12 to-transparent blur-[130px] animate-float-1" />
      <div className="absolute bottom-16 left-1/4 w-[700px] h-[700px] rounded-full bg-gradient-to-t from-[#059669]/15 via-emerald-400/12 to-transparent blur-[140px] animate-float-2" />

      {/* Subtle Velvet Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-white/30" />

      {/* 3. SUBTLE FLOWING VECTOR CURVES WITH ECG MOTION */}
      <svg className="absolute inset-0 w-full h-full opacity-40" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="bgEmeraldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#064E3B" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#059669" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#10B981" stopOpacity="0.25" />
          </linearGradient>

          <pattern id="bgMedGrid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#059669" strokeWidth="0.5" strokeOpacity="0.08" />
            <circle cx="60" cy="0" r="1.2" fill="#059669" fillOpacity="0.2" />
          </pattern>
        </defs>

        <rect width="100%" height="100%" fill="url(#bgMedGrid)" />

        {/* Oscillating Wave Ribbon 1 */}
        <path
          d="M -100,220 C 320,80 620,440 1120,240 C 1420,150 1820,350 2200,200"
          fill="none"
          stroke="url(#bgEmeraldGrad)"
          strokeWidth="1.8"
          strokeDasharray="6 6"
          className="animate-flow-dash"
        />

        {/* Oscillating Wave Ribbon 2 */}
        <path
          d="M -100,560 C 400,720 800,380 1300,580 C 1650,700 1950,480 2300,560"
          fill="none"
          stroke="#047857"
          strokeWidth="1.2"
          strokeDasharray="4 8"
          strokeOpacity="0.25"
          className="animate-flow-dash-fast"
        />
      </svg>

    </div>
  );
}
