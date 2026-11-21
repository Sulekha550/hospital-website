import React, { useEffect, useState, useRef } from 'react';

/**
 * VibrantBackgroundDesign
 * Fulfills: "backgorund m kuch dd kro movemnat type k" (Add visible movement in the background)
 * Features:
 * 1. Interactive Cursor Follower Aura: Smooth glowing multi-color light that glides with the mouse.
 * 2. Traveling Cardiac Pulse Laser: Glowing pulse blip running along the ECG rhythm path.
 * 3. Animated Morphing & Floating Colorful Gradient Orbs (Violet, Cyan, Rose, Amber, Mint).
 * 4. Actively Oscillating Sinusoidal Architectural Wave Ribbons.
 * 5. Counter-Rotating Concentric Scanning Radar Rings.
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
      // Smooth lerp interpolation for silky cursor following
      posRef.current.x += (mouseRef.current.x - posRef.current.x) * 0.06;
      posRef.current.y += (mouseRef.current.y - posRef.current.y) * 0.06;
      
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
      
      {/* =========================================================================
          1. INTERACTIVE MOUSE-FOLLOWING GLOWING LIGHT AURA (Visibly Alive Motion)
         ========================================================================= */}
      <div 
        className="absolute w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-purple-500/25 via-cyan-400/20 to-rose-400/15 blur-[120px] transition-transform duration-75 ease-out"
        style={{
          transform: `translate3d(${cursorPos.x - 250}px, ${cursorPos.y - 250}px, 0)`,
          willChange: 'transform',
        }}
      />

      {/* =========================================================================
          2. RICH COLORFUL AURORA MESH GRADIENT BLOBS (Moving & Morphing)
         ========================================================================= */}
      
      {/* Top Left: Royal Violet & Electric Purple Morphing Blob */}
      <div 
        className="absolute -top-32 -left-28 w-[800px] h-[800px] rounded-full bg-gradient-to-tr from-violet-600/35 via-purple-500/30 to-fuchsia-500/25 blur-[120px] animate-morph animate-float-1" 
      />

      {/* Top Right: Electric Cyan, Medical Azure & Aqua Floating Orb */}
      <div 
        className="absolute -top-20 -right-28 w-[750px] h-[750px] rounded-full bg-gradient-to-bl from-cyan-400/35 via-sky-500/30 to-blue-600/25 blur-[120px] animate-float-2" 
      />

      {/* Center Left: Coral Rose, Crimson & Soft Magenta Pulse */}
      <div 
        className="absolute top-1/3 -left-36 w-[700px] h-[700px] rounded-full bg-gradient-to-r from-rose-500/30 via-pink-500/25 to-purple-400/20 blur-[130px] animate-morph animate-float-3" 
      />

      {/* Center Right: Warm Sunset Amber & Champagne Gold Glow */}
      <div 
        className="absolute top-1/2 -right-28 w-[680px] h-[680px] rounded-full bg-gradient-to-l from-amber-400/30 via-orange-400/25 to-rose-400/20 blur-[130px] animate-float-1" 
      />

      {/* Lower Center: Emerald Teal & Calming Mint Wave */}
      <div 
        className="absolute bottom-16 left-1/4 w-[750px] h-[750px] rounded-full bg-gradient-to-t from-emerald-400/25 via-teal-400/20 to-sky-400/20 blur-[140px] animate-morph animate-float-2" 
      />

      {/* Bottom Right: Cosmic Indigo & Electric Lavender */}
      <div 
        className="absolute -bottom-28 -right-24 w-[700px] h-[700px] rounded-full bg-gradient-to-tl from-indigo-600/30 via-purple-500/25 to-violet-400/20 blur-[130px] animate-float-3" 
      />

      {/* Subtle Luminous Overlay for Velvet Smoothness */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-transparent to-white/40" />

      {/* =========================================================================
          3. DESIGNED ARCHITECTURAL & MEDICAL BACKGROUND GRAPHICS WITH ACTIVE MOTION
         ========================================================================= */}
      
      {/* Full-Page Background SVG with Animated Wave Flow & ECG Pulse Tracer */}
      <svg
        className="absolute inset-0 w-full h-full opacity-60"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Multi-Color Gradient for Vector Curves */}
          <linearGradient id="bgGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.55" />
            <stop offset="35%" stopColor="#06B6D4" stopOpacity="0.5" />
            <stop offset="70%" stopColor="#F43F5E" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#F59E0B" stopOpacity="0.4" />
          </linearGradient>

          <linearGradient id="bgGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.5" />
            <stop offset="40%" stopColor="#A855F7" stopOpacity="0.45" />
            <stop offset="80%" stopColor="#10B981" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#EC4899" stopOpacity="0.35" />
          </linearGradient>

          {/* Microscopic Technical Grid Pattern */}
          <pattern id="medicalGrid" width="64" height="64" patternUnits="userSpaceOnUse">
            <path d="M 64 0 L 0 0 0 64" fill="none" stroke="#8B5CF6" strokeWidth="0.5" strokeOpacity="0.08" />
            <circle cx="64" cy="0" r="1.5" fill="#06B6D4" fillOpacity="0.3" />
            <circle cx="0" cy="64" r="1.5" fill="#F43F5E" fillOpacity="0.3" />
          </pattern>
        </defs>

        {/* Global Coordinate Grid */}
        <rect width="100%" height="100%" fill="url(#medicalGrid)" />

        {/* Flowing Architectural Wave 1 (Visibly Oscillating Wave Ribbon) */}
        <path
          d="M -100,180 C 320,40 620,420 1120,220 C 1420,130 1820,330 2200,180"
          fill="none"
          stroke="url(#bgGrad1)"
          strokeWidth="2"
          strokeDasharray="8 6"
          className="animate-ecg-dash animate-wave-flow"
        />

        {/* Flowing Architectural Wave 2 (Mid-Page Resonance) */}
        <path
          d="M -100,420 C 380,580 820,180 1320,480 C 1720,680 2020,380 2320,520"
          fill="none"
          stroke="url(#bgGrad2)"
          strokeWidth="2.2"
          className="animate-wave-flow"
        />

        {/* Dynamic Continuous ECG Rhythm Polyline with Flowing Dash Animation */}
        <path
          id="ecgRhythmPath"
          d="M -50,680 L 180,680 L 200,680 L 210,660 L 220,715 L 235,615 L 250,735 L 260,670 L 275,680 L 480,680 L 620,680 L 640,680 L 650,660 L 660,715 L 675,615 L 690,735 L 700,670 L 715,680 L 1050,680 L 1200,680 L 1220,680 L 1230,660 L 1240,715 L 1255,615 L 1270,735 L 1280,670 L 1295,680 L 1650,680 L 1850,680 L 1870,680 L 1880,660 L 1890,715 L 1905,615 L 1920,735 L 1930,670 L 1945,680 L 2350,680"
          fill="none"
          stroke="url(#bgGrad1)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="animate-ecg-dash"
        />

        {/* Active Traveling Glowing Laser Pulse Blip (Heartbeat Tracer) */}
        <circle r="5" fill="#22D3EE" filter="drop-shadow(0 0 8px #06B6D4)">
          <animateMotion
            dur="6s"
            repeatCount="indefinite"
            path="M -50,680 L 180,680 L 200,680 L 210,660 L 220,715 L 235,615 L 250,735 L 260,670 L 275,680 L 480,680 L 620,680 L 640,680 L 650,660 L 660,715 L 675,615 L 690,735 L 700,670 L 715,680 L 1050,680 L 1200,680 L 1220,680 L 1230,660 L 1240,715 L 1255,615 L 1270,735 L 1280,670 L 1295,680 L 1650,680 L 1850,680 L 1870,680 L 1880,660 L 1890,715 L 1905,615 L 1920,735 L 1930,670 L 1945,680 L 2350,680"
          />
        </circle>

        {/* Actively Rotating Concentric Scanning Radar Rings (Hero Focal Depth) */}
        <g transform="translate(960, 310)" className="animate-rotate-slow">
          <circle cx="0" cy="0" r="140" fill="none" stroke="#8B5CF6" strokeWidth="1.2" strokeDasharray="4 8" />
          <circle cx="0" cy="0" r="250" fill="none" stroke="#06B6D4" strokeWidth="1.2" />
          <circle cx="0" cy="0" r="380" fill="none" stroke="#F43F5E" strokeWidth="1" strokeDasharray="6 12" />
          <line x1="-400" y1="0" x2="400" y2="0" stroke="#8B5CF6" strokeWidth="0.8" strokeOpacity="0.4" />
          <line x1="0" y1="-400" x2="0" y2="400" stroke="#8B5CF6" strokeWidth="0.8" strokeOpacity="0.4" />
        </g>

        {/* Counter-Rotating Concentric Scan Rings (Lower Monograph Depth) */}
        <g transform="translate(260, 1080)" className="animate-rotate-reverse">
          <circle cx="0" cy="0" r="190" fill="none" stroke="#38BDF8" strokeWidth="1.2" strokeDasharray="5 10" />
          <circle cx="0" cy="0" r="300" fill="none" stroke="#A855F7" strokeWidth="1.2" />
          <circle cx="0" cy="0" r="420" fill="none" stroke="#10B981" strokeWidth="0.9" strokeDasharray="8 8" />
        </g>
      </svg>

    </div>
  );
}
