import React, { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import gsap from 'gsap';

/**
 * PageTransitionOverlay: Mandatory Full-Screen Cinematic Navigation Experience
 * Triggers on every route change:
 * - Staggered multi-layer fluid color panels (Deep Royal Violet & Coral Gold)
 * - Center cardiac pulse emblem with glowing bio-frequency tracer
 * - Cinematic page reveal with zero abrupt layout jumps
 */
export default function PageTransitionOverlay() {
  const location = useLocation();
  const overlayRef = useRef(null);
  const panel1Ref = useRef(null);
  const panel2Ref = useRef(null);
  const emblemRef = useRef(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const firstRender = useRef(true);

  useEffect(() => {
    // Avoid full transition flash on initial page load
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }

    setIsTransitioning(true);

    const tl = gsap.timeline({
      onComplete: () => {
        setIsTransitioning(false);
      }
    });

    // Reset initial states
    gsap.set(overlayRef.current, { pointerEvents: 'auto', display: 'flex' });
    gsap.set(panel1Ref.current, { scaleY: 0, transformOrigin: 'bottom' });
    gsap.set(panel2Ref.current, { scaleY: 0, transformOrigin: 'bottom' });
    gsap.set(emblemRef.current, { opacity: 0, scale: 0.85, y: 20 });

    // 1. Entrance: Curtain sweeps upward from bottom
    tl.to(panel1Ref.current, {
      scaleY: 1,
      duration: 0.45,
      ease: 'power3.inOut'
    })
    .to(panel2Ref.current, {
      scaleY: 1,
      duration: 0.45,
      ease: 'power3.inOut'
    }, '-=0.32')
    .to(emblemRef.current, {
      opacity: 1,
      scale: 1,
      y: 0,
      duration: 0.35,
      ease: 'back.out(1.6)'
    }, '-=0.15')
    
    // Slight cinematic hold at apex
    .to({}, { duration: 0.15 })

    // 2. Exit: Curtain rolls off through top to reveal incoming page
    .to(emblemRef.current, {
      opacity: 0,
      scale: 1.1,
      y: -20,
      duration: 0.3,
      ease: 'power2.in'
    })
    .set([panel1Ref.current, panel2Ref.current], { transformOrigin: 'top' })
    .to(panel2Ref.current, {
      scaleY: 0,
      duration: 0.45,
      ease: 'power3.inOut'
    })
    .to(panel1Ref.current, {
      scaleY: 0,
      duration: 0.45,
      ease: 'power3.inOut'
    }, '-=0.32')
    .set(overlayRef.current, { pointerEvents: 'none', display: 'none' });

    return () => {
      tl.kill();
    };
  }, [location.pathname]);

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[100] pointer-events-none hidden items-center justify-center select-none overflow-hidden"
      aria-hidden={!isTransitioning}
    >
      {/* Layer 1: Radiant Deep Royal Violet & Amethyst Shutter Panel */}
      <div
        ref={panel1Ref}
        className="absolute inset-0 bg-gradient-to-b from-[#180A30] via-[#2E1065] to-[#180A30]"
      />

      {/* Layer 2: Secondary Fluid Coral Rose & Violet Accent Shutter Panel */}
      <div
        ref={panel2Ref}
        className="absolute inset-0 bg-gradient-to-tr from-purple-900/95 via-violet-800/90 to-rose-900/80 backdrop-blur-2xl"
      />

      {/* Ambient Moving Glow Inside Transition */}
      <div className="absolute w-[500px] h-[500px] rounded-full bg-cyan-400/20 blur-[100px] pointer-events-none animate-pulse" />

      {/* Center Cardiac Emblem & Navigation Telemetry */}
      <div
        ref={emblemRef}
        className="relative z-10 flex flex-col items-center justify-center text-center space-y-4 px-6"
      >
        <div className="w-16 h-16 rounded-2xl bg-white/95 p-2 shadow-2xl border-2 border-purple-300 flex items-center justify-center">
          <img
            src="/images/p.webp"
            alt="Pulse Logo"
            className="w-full h-full object-contain"
          />
        </div>

        <div className="space-y-1">
          <span className="font-display font-semibold text-2xl tracking-[0.25em] text-white uppercase block">
            PULSE HEART CENTRE
          </span>
          <span className="text-xs font-mono uppercase tracking-[0.3em] text-purple-300 font-bold block">
            Dr. Prakash Chand Shahi • Betiahata
          </span>
        </div>

        {/* Animated ECG Pulse Vector in Center */}
        <svg className="w-48 h-10 text-cyan-400" viewBox="0 0 200 40" fill="none" stroke="currentColor">
          <path
            d="M 0,20 L 40,20 L 50,10 L 60,30 L 75,5 L 90,35 L 100,18 L 115,20 L 200,20"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="animate-ecg-dash"
          />
        </svg>
      </div>
    </div>
  );
}
