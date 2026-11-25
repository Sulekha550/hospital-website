import React, { useRef, useEffect } from 'react';

/**
 * Interactive3DTilt
 * Zero-re-render, GPU-accelerated 3D Physics Cursor-Tracking Tilt & Specular Sheen.
 * Uses direct DOM refs + requestAnimationFrame instead of React state for silky 60-120fps.
 */
export default function Interactive3DTilt({
  children,
  className = '',
  maxTilt = 10,
  scale = 1.02,
  glare = true,
  glowColor = 'rgba(190, 18, 60, 0.22)',
  lift = '-10px',
}) {
  const cardRef = useRef(null);
  const bodyRef = useRef(null);
  const glowRef = useRef(null);
  const glareRef = useRef(null);
  const rectRef = useRef(null);
  const rafRef = useRef(null);

  useEffect(() => {
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const handleMouseEnter = () => {
    if (cardRef.current) {
      rectRef.current = cardRef.current.getBoundingClientRect();
    }
    if (glowRef.current) {
      glowRef.current.style.opacity = '0.8';
    }
    if (glareRef.current) {
      glareRef.current.style.opacity = '0.45';
    }
  };

  const handleMouseMove = (e) => {
    const rect = rectRef.current || (cardRef.current ? cardRef.current.getBoundingClientRect() : null);
    if (!rect) return;

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const normX = x / rect.width - 0.5;
    const normY = y / rect.height - 0.5;

    const rx = (-normY * maxTilt).toFixed(2);
    const ry = (normX * maxTilt).toFixed(2);
    const gx = Math.round((x / rect.width) * 100);
    const gy = Math.round((y / rect.height) * 100);

    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => {
      if (bodyRef.current) {
        bodyRef.current.style.transform = `translate3d(0, ${lift}, 0) rotateX(${rx}deg) rotateY(${ry}deg) scale3d(${scale}, ${scale}, ${scale})`;
      }
      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(${(Number(ry) * 1.4).toFixed(1)}px, ${(-Number(rx) * 1.4).toFixed(1)}px, 0)`;
      }
      if (glareRef.current) {
        glareRef.current.style.background = `radial-gradient(circle 300px at ${gx}% ${gy}%, rgba(255, 255, 255, 0.65), rgba(225, 29, 72, 0.16) 40%, transparent 80%)`;
      }
    });
  };

  const handleMouseLeave = () => {
    rectRef.current = null;
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    if (bodyRef.current) {
      bodyRef.current.style.transform = 'translate3d(0, 0px, 0) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
    }
    if (glowRef.current) {
      glowRef.current.style.opacity = '0';
      glowRef.current.style.transform = 'translate3d(0, 0, 0)';
    }
    if (glareRef.current) {
      glareRef.current.style.opacity = '0';
    }
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative select-none [perspective:1000px] ${className}`}
      style={{ transformStyle: 'preserve-3d' }}
    >
      {/* Pre-softened Radial Ambient Glow (Zero CSS blur filter cost) */}
      <div
        ref={glowRef}
        className="absolute -inset-4 rounded-[2.5rem] opacity-0 transition-opacity duration-300 pointer-events-none -z-10 will-change-transform"
        style={{
          background: `radial-gradient(circle at 50% 50%, ${glowColor} 0%, transparent 70%)`,
        }}
      />

      {/* The 3D Tilted Body */}
      <div
        ref={bodyRef}
        className="w-full h-full relative transition-transform duration-200 ease-out will-change-transform"
        style={{
          transform: 'translate3d(0, 0px, 0) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
          transformStyle: 'preserve-3d',
        }}
      >
        {children}

        {/* Specular Holographic Glare */}
        {glare && (
          <div
            ref={glareRef}
            className="absolute inset-0 rounded-[inherit] pointer-events-none transition-opacity duration-300 mix-blend-overlay z-30 opacity-0"
          />
        )}
      </div>
    </div>
  );
}
