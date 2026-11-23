import React, { useRef, useState } from 'react';

/**
 * ThreeDImageCard
 * Implements: "images tgoda 3d m use kro text kam se kam rhe"
 * Features:
 * 1. Interactive 3D Perspective Tilt on Mouse Movement (rotateX, rotateY, scale)
 * 2. Multi-layer depth with translateZ on floating badges/crests
 * 3. Dynamic Specular Light Glare that follows the mouse across the glass surface
 * 4. Realistic 3D drop shadow that offsets dynamically with tilt
 * 5. Smooth spring reset on mouse leave
 */
export default function ThreeDImageCard({
  src,
  alt = 'Pulse Heart Centre Medical 3D Visual',
  aspectRatio = 'aspect-[4/3]',
  className = '',
  badge = null,
  stat = null,
  statSub = null,
  title = null,
  children = null,
}) {
  const cardRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0, glareX: 50, glareY: 50 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Normalize coordinates (-0.5 to 0.5)
    const normX = (x / rect.width) - 0.5;
    const normY = (y / rect.height) - 0.5;

    // Maximum tilt angles (degrees)
    const maxTilt = 14;
    setTilt({
      x: -normY * maxTilt, // pitch
      y: normX * maxTilt,  // yaw
      glareX: (x / rect.width) * 100,
      glareY: (y / rect.height) * 100,
    });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ x: 0, y: 0, glareX: 50, glareY: 50 });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative group cursor-pointer select-none [perspective:1200px] ${className}`}
    >
      {/* 3D Dynamic Ambient Glow Underneath */}
      <div 
        className="absolute -inset-3 bg-gradient-to-tr from-[#059669]/30 via-[#10B981]/25 to-teal-400/20 rounded-[2.5rem] blur-2xl opacity-60 group-hover:opacity-100 transition-all duration-500 -z-10"
        style={{
          transform: isHovered 
            ? `translate3d(${tilt.y * 1.5}px, ${-tilt.x * 1.5}px, 0)` 
            : 'translate3d(0,0,0)',
        }}
      />

      {/* Main 3D Tilted Container */}
      <div
        className={`relative ${aspectRatio} w-full rounded-[2rem] overflow-hidden border-2 border-emerald-300/80 bg-slate-950 transition-all duration-300 ease-out shadow-[0_25px_60px_-15px_rgba(5,150,105,0.3)]`}
        style={{
          transformStyle: 'preserve-3d',
          transform: isHovered
            ? `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale3d(1.04, 1.04, 1.04)`
            : 'rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
        }}
      >
        {/* The Base Photographic Image with Ken-Burns Depth Zoom on Hover */}
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 filter contrast-110 saturate-110"
          loading="lazy"
        />

        {/* Ambient Dark Gradient Layer for Visual Contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent pointer-events-none" />

        {/* Dynamic Specular Holographic Glare (Moves with Mouse) */}
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-300 mix-blend-overlay"
          style={{
            opacity: isHovered ? 0.75 : 0,
            background: `radial-gradient(circle 380px at ${tilt.glareX}% ${tilt.glareY}%, rgba(255, 255, 255, 0.45), rgba(5, 150, 105, 0.15) 50%, transparent 80%)`,
          }}
        />

        {/* 3D CAD Grid Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(#10B98130_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none opacity-40" />

        {/* Top 3D Floating Telemetry Pill (translateZ for pop-out) */}
        {badge && (
          <div 
            className="absolute top-4 left-4 z-20 transition-transform duration-300 pointer-events-none"
            style={{ transform: isHovered ? 'translateZ(35px)' : 'translateZ(0px)' }}
          >
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md border border-emerald-300 text-[10px] font-mono font-bold text-[#064E3B] shadow-lg">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              {badge}
            </span>
          </div>
        )}

        {/* Bottom 3D Floating Stat Badge (translateZ for layered pop-out) */}
        {(stat || title) && (
          <div 
            className="absolute bottom-4 left-4 right-4 z-20 p-3 sm:p-3.5 rounded-2xl bg-white/95 backdrop-blur-xl border border-emerald-200/90 shadow-2xl transition-transform duration-300 text-left"
            style={{ transform: isHovered ? 'translateZ(45px)' : 'translateZ(0px)' }}
          >
            {title && (
              <h4 className="text-xs sm:text-sm font-extrabold text-slate-900 tracking-tight leading-snug truncate">
                {title}
              </h4>
            )}
            {stat && (
              <div className="flex items-center justify-between gap-2 mt-1">
                <span className="text-xs sm:text-sm font-mono font-black text-[#059669]">
                  {stat}
                </span>
                {statSub && (
                  <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider font-semibold truncate">
                    {statSub}
                  </span>
                )}
              </div>
            )}
          </div>
        )}

        {/* Custom Nested Children */}
        {children && (
          <div 
            className="absolute inset-0 z-20 pointer-events-none"
            style={{ transform: isHovered ? 'translateZ(30px)' : 'translateZ(0px)' }}
          >
            {children}
          </div>
        )}

        {/* 3D Border Corner Accents */}
        <div className="absolute top-2 left-2 text-emerald-400 font-mono text-xs select-none pointer-events-none opacity-60">┌</div>
        <div className="absolute top-2 right-2 text-emerald-400 font-mono text-xs select-none pointer-events-none opacity-60">┐</div>
        <div className="absolute bottom-2 left-2 text-emerald-400 font-mono text-xs select-none pointer-events-none opacity-60">└</div>
        <div className="absolute bottom-2 right-2 text-emerald-400 font-mono text-xs select-none pointer-events-none opacity-60">┘</div>
      </div>
    </div>
  );
}
