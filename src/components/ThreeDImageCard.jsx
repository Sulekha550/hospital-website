import React, { useRef, useState, useEffect } from 'react';

/**
 * ThreeDImageCard
 * Implements interactive 3D perspective tilt with specular holographic glare
 * Guarantees images always render across all browsers and containers
 */
export default function ThreeDImageCard({
  src,
  image,
  alt = 'Pulse Heart Centre Medical 3D Visual',
  aspectRatio = 'aspect-[4/3]',
  className = '',
  badge = null,
  stat = null,
  statSub = null,
  title = null,
  laserBeam = false,
  children = null,
}) {
  const resolvedSrc = src || image;
  const cardRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0, glareX: 50, glareY: 50 });
  const [isHovered, setIsHovered] = useState(false);
  const [imgSrc, setImgSrc] = useState(resolvedSrc);

  useEffect(() => {
    if (resolvedSrc) {
      setImgSrc(resolvedSrc);
    }
  }, [resolvedSrc]);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Normalize coordinates (-0.5 to 0.5)
    const normX = (x / rect.width) - 0.5;
    const normY = (y / rect.height) - 0.5;

    // Maximum tilt angles (degrees)
    const maxTilt = 12;
    setTilt({
      x: -normY * maxTilt,
      y: normX * maxTilt,
      glareX: (x / rect.width) * 100,
      glareY: (y / rect.height) * 100,
    });
  };

  const handleMouseEnter = () => setIsHovered(true);
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
        className="absolute -inset-3 bg-gradient-to-tr from-[#0284C7]/25 via-[#0EA5E9]/20 to-teal-400/15 rounded-[2.5rem] blur-2xl opacity-60 group-hover:opacity-100 transition-all duration-500 -z-10"
        style={{
          transform: isHovered 
            ? `translate3d(${tilt.y * 1.5}px, ${-tilt.x * 1.5}px, 0)` 
            : 'translate3d(0,0,0)',
        }}
      />

      {/* Main 3D Tilted Container */}
      <div
        className={`relative ${aspectRatio} w-full rounded-[2rem] overflow-hidden border-2 border-[#FECDD3] bg-white transition-all duration-300 ease-out shadow-[0_20px_50px_-15px_rgba(5,150,105,0.2)]`}
        style={{
          transformStyle: 'preserve-3d',
          transform: isHovered
            ? `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale3d(1.03, 1.03, 1.03)`
            : 'rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
        }}
      >
        {/* The Base Photographic Image - Guaranteed to fill full card */}
        {imgSrc && (
          <img
            src={imgSrc}
            alt={alt}
            onError={() => setImgSrc('/images/hospital-facility.jpg')}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
        )}

        {/* Subtle Ambient Light Gradient (No pitch-black overlay) */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent pointer-events-none" />

        {/* Dynamic Specular Holographic Glare (Moves with Mouse) */}
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-300 mix-blend-overlay z-15"
          style={{
            opacity: isHovered ? 0.6 : 0,
            background: `radial-gradient(circle 380px at ${tilt.glareX}% ${tilt.glareY}%, rgba(255, 255, 255, 0.55), rgba(5, 150, 105, 0.15) 50%, transparent 80%)`,
          }}
        />

        {/* Optional Sweeping Laser Beam */}
        {laserBeam && (
          <div className="absolute inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#0EA5E9] to-transparent opacity-60 animate-laser-sweep pointer-events-none z-10" />
        )}

        {/* Top 3D Floating Telemetry Pill */}
        {badge && (
          <div 
            className="absolute top-3.5 left-3.5 z-20 transition-transform duration-300 pointer-events-none"
            style={{ transform: isHovered ? 'translateZ(35px)' : 'translateZ(0px)' }}
          >
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md border border-[#FECDD3] text-[10px] font-mono font-bold text-[#991B1B] shadow-md">
              <span className="w-2 h-2 rounded-full bg-[#0EA5E9] animate-pulse" />
              {badge}
            </span>
          </div>
        )}

        {/* Bottom 3D Floating Stat Badge */}
        {(stat || title) && (
          <div 
            className="absolute bottom-3 left-3 right-3 z-20 p-3 rounded-2xl bg-white/95 backdrop-blur-xl border border-[#FECDD3] shadow-xl transition-transform duration-300 text-left"
            style={{ transform: isHovered ? 'translateZ(40px)' : 'translateZ(0px)' }}
          >
            {title && (
              <h4 className="text-xs sm:text-sm font-extrabold text-[#991B1B] tracking-tight leading-snug truncate">
                {title}
              </h4>
            )}
            {stat && (
              <div className="flex items-center justify-between gap-2 mt-0.5">
                <span className="text-xs sm:text-sm font-mono font-black text-[#B91C1C]">
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
        <div className="absolute top-2 left-2 text-rose-400 font-mono text-xs select-none pointer-events-none opacity-60">┌</div>
        <div className="absolute top-2 right-2 text-rose-400 font-mono text-xs select-none pointer-events-none opacity-60">┐</div>
        <div className="absolute bottom-2 left-2 text-rose-400 font-mono text-xs select-none pointer-events-none opacity-60">└</div>
        <div className="absolute bottom-2 right-2 text-rose-400 font-mono text-xs select-none pointer-events-none opacity-60">┘</div>
      </div>
    </div>
  );
}
