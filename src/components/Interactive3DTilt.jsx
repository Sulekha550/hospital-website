import React, { useRef, useState } from 'react';

/**
 * Interactive3DTilt
 * High-End 3D Physics Cursor-Tracking Tilt & Dynamic Specular Sheen Wrapper
 * Wraps any card or element to give it luxury responsive tactile feedback.
 */
export default function Interactive3DTilt({
  children,
  className = '',
  maxTilt = 10,
  scale = 1.02,
  glare = true,
  glowColor = 'rgba(190, 18, 60, 0.25)',
  lift = '-10px',
}) {
  const cardRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0, glareX: 50, glareY: 50 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const normX = (x / rect.width) - 0.5;
    const normY = (y / rect.height) - 0.5;

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
      className={`relative select-none transition-all duration-300 ease-out [perspective:1000px] ${className}`}
      style={{
        transformStyle: 'preserve-3d',
      }}
    >
      {/* Dynamic Ambient Glow Behind Card */}
      <div
        className="absolute -inset-2 rounded-[2.5rem] blur-xl opacity-0 transition-opacity duration-400 pointer-events-none -z-10"
        style={{
          background: glowColor,
          opacity: isHovered ? 0.75 : 0,
          transform: isHovered
            ? `translate3d(${tilt.y * 1.5}px, ${-tilt.x * 1.5}px, 0)`
            : 'translate3d(0,0,0)',
        }}
      />

      {/* The 3D Tilted Body */}
      <div
        className="w-full h-full relative transition-transform duration-200 ease-out"
        style={{
          transform: isHovered
            ? `translateY(${lift}) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale3d(${scale}, ${scale}, ${scale})`
            : 'translateY(0px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
          transformStyle: 'preserve-3d',
        }}
      >
        {children}

        {/* Specular Holographic Glare */}
        {glare && (
          <div
            className="absolute inset-0 rounded-[inherit] pointer-events-none transition-opacity duration-300 mix-blend-overlay z-30"
            style={{
              opacity: isHovered ? 0.5 : 0,
              background: `radial-gradient(circle 320px at ${tilt.glareX}% ${tilt.glareY}%, rgba(255, 255, 255, 0.7), rgba(225, 29, 72, 0.2) 40%, transparent 80%)`,
            }}
          />
        )}
      </div>
    </div>
  );
}
