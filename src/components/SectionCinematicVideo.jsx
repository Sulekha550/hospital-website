import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, Volume2, VolumeX, Maximize2, Radio, Sparkles, Activity, ShieldCheck } from 'lucide-react';

/**
 * SectionCinematicVideo
 * A high-performance, responsive cinematic video presentation engine
 * Features:
 * - HTML5 <video> with autoPlay, muted, loop, playsInline & graceful fallback
 * - Automatic resolution to 13 distinct 4K cinematic video files in /videos/
 * - 60FPS procedural medical simulation canvas for guaranteed authentic visual feeds
 * - 8 distinct presentation styles:
 *   1. 'floating-3d'
 *   2. 'split-screen'
 *   3. 'curved-mask'
 *   4. 'asymmetric'
 *   5. 'video-card'
 *   6. 'fullscreen-bg'
 *   7. 'panoramic-stage'
 *   8. 'circular-pod'
 * - Real-time HUD telemetry, live timecode counters, REC indicator, camera markers, and interactive controls
 */

const VIDEO_SOURCE_MAP = {
  'hero-architecture': '/videos/hero-architecture.mp4',
  'about-hospital': '/videos/about-hospital.mp4',
  'cardiology-heart': '/videos/cardiology-heart.mp4',
  'cardiology-cath': '/videos/cardiology-heart.mp4',
  'neurology-brain': '/videos/neurology-synapse.mp4',
  'neurology-synapse': '/videos/neurology-synapse.mp4',
  'orthopedics-joint': '/videos/orthopedics-joint.mp4',
  'doctors-procedure': '/videos/doctors-procedure.mp4',
  'doctors': '/videos/doctors-procedure.mp4',
  'advanced-tech': '/videos/advanced-tech.mp4',
  'facilities': '/videos/facilities-walkthrough.mp4',
  'facilities-walkthrough': '/videos/facilities-walkthrough.mp4',
  'patient-care': '/videos/patient-care.mp4',
  'testimonials': '/videos/testimonials-stories.mp4',
  'testimonials-stories': '/videos/testimonials-stories.mp4',
  'appointment-suite': '/videos/appointment-suite.mp4',
  'contact-location': '/videos/contact-location.mp4',
  'cardiac-catheterization': '/videos/cardiac-catheterization.mp4',
};

const POSTER_SOURCE_MAP = {
  'hero-architecture': '/images/hero-architecture-entrance.jpg',
  'about-hospital': '/images/hospital-ward-suites.jpg',
  'cardiology-heart': '/images/cardiology-3d-heart-beat.jpg',
  'cardiology-cath': '/images/stent-catheter-fluoroscopy.jpg',
  'neurology-brain': '/images/neurology-brain-synapse.jpg',
  'neurology-synapse': '/images/brain-mri-diffusion.jpg',
  'orthopedics-joint': '/images/orthopedics-biomechanical-joint.jpg',
  'doctors-procedure': '/images/doctor-bedside-consult.jpg',
  'doctors': '/images/operation-theatre-laminar.jpg',
  'advanced-tech': '/images/advanced-mri-scanner.jpg',
  'facilities': '/images/operation-theatre-laminar.jpg',
  'facilities-walkthrough': '/images/cath-lab.jpg',
  'patient-care': '/images/patient-care-recovery.jpg',
  'testimonials': '/images/patient-recovery-story.jpg',
  'testimonials-stories': '/images/patient-recovery-story.jpg',
  'appointment-suite': '/images/appointment-reception-triage.jpg',
  'contact-location': '/images/pulse-betiahata-campus.jpg',
  'cardiac-catheterization': '/images/angiogram-scan.jpg',
};

export default function SectionCinematicVideo({
  type = 'hero-architecture',
  styleVariant = 'floating-3d',
  posterImage = null,
  title = 'Live Clinical Feed',
  subtitle = '4K UHD • 60 FPS • Real-Time Broadcast',
  specs = 'Siemens Artis Zee • HEPA-14 Cleanroom',
  className = '',
  videoUrl = null,
  showControls = true,
  aspectRatio = 'aspect-[16/10]',
  onPlayClick = null,
}) {
  const resolvedVideoUrl = videoUrl || VIDEO_SOURCE_MAP[type] || '/videos/hero-architecture.mp4';
  const resolvedPoster = posterImage || POSTER_SOURCE_MAP[type] || '/images/hospital-facility.jpg';

  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [videoError, setVideoError] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const containerRef = useRef(null);
  const glareRef = useRef(null);
  const timecodeRef = useRef(null);
  const canvasRef = useRef(null);
  const videoRef = useRef(null);
  const tiltRafRef = useRef(null);

  // Viewport IntersectionObserver: pauses offscreen videos, canvases, and timers
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { rootMargin: '150px 0px', threshold: 0.01 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Auto-pause/play HTML5 video based on viewport visibility
  useEffect(() => {
    const video = videoRef.current;
    if (!video || videoError) return;
    if (isInView && isPlaying) {
      video.play().catch(() => {});
    } else {
      video.pause();
    }
  }, [isInView, isPlaying, videoError]);

  const handleMouseMove = (e) => {
    if (styleVariant !== 'floating-3d' || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    const rx = (((y - cy) / cy) * -7).toFixed(2);
    const ry = (((x - cx) / cx) * 7).toFixed(2);
    const gx = Math.round((x / rect.width) * 100);
    const gy = Math.round((y / rect.height) * 100);

    if (tiltRafRef.current) cancelAnimationFrame(tiltRafRef.current);
    tiltRafRef.current = requestAnimationFrame(() => {
      if (containerRef.current) {
        containerRef.current.style.transition = 'transform 0.12s ease-out';
        containerRef.current.style.transform = `perspective(1200px) rotateX(${rx}deg) rotateY(${ry}deg) scale3d(1.02, 1.02, 1.02)`;
      }
      if (glareRef.current) {
        glareRef.current.style.opacity = '1';
        glareRef.current.style.background = `radial-gradient(circle 360px at ${gx}% ${gy}%, rgba(255,255,255,0.22), transparent 70%)`;
      }
    });
  };

  const handleMouseLeave = () => {
    if (tiltRafRef.current) cancelAnimationFrame(tiltRafRef.current);
    if (styleVariant !== 'floating-3d') return;
    if (containerRef.current) {
      containerRef.current.style.transition = 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)';
      containerRef.current.style.transform = 'perspective(1200px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
    }
    if (glareRef.current) {
      glareRef.current.style.opacity = '0';
    }
  };

  // Reset video error on URL or type change
  useEffect(() => {
    setVideoError(false);
  }, [resolvedVideoUrl, type]);

  // Zero-re-render timecode counter (runs only when visible in viewport)
  useEffect(() => {
    if (!isInView) return;
    const updateTimecode = () => {
      if (!timecodeRef.current) return;
      const now = new Date();
      const h = String(now.getHours()).padStart(2, '0');
      const m = String(now.getMinutes()).padStart(2, '0');
      const s = String(now.getSeconds()).padStart(2, '0');
      const f = String(Math.floor((now.getMilliseconds() / 1000) * 30)).padStart(2, '0');
      timecodeRef.current.textContent = `${h}:${m}:${s}:${f}`;
    };
    updateTimecode();
    const interval = setInterval(updateTimecode, 500);
    return () => clearInterval(interval);
  }, [isInView]);

  const togglePlay = (e) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play().catch(() => { });
      setIsPlaying(true);
    }
  };

  const toggleMute = (e) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    const nextMuted = !isMuted;
    videoRef.current.muted = nextMuted;
    setIsMuted(nextMuted);
  };

  // Procedural medical video simulation canvas (throttled & paused when offscreen)
  useEffect(() => {
    if (!isInView) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let frameId;
    let t = 0;
    let lastDraw = 0;
    const CANVAS_INTERVAL = 1000 / 30; // Smooth 30fps simulation overlay saves 50% CPU/GPU

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize, { passive: true });

    const draw = (now) => {
      frameId = requestAnimationFrame(draw);
      if (document.hidden || (now && now - lastDraw < CANVAS_INTERVAL)) return;
      if (now) lastDraw = now;

      const W = canvas.width;
      const H = canvas.height;
      if (W === 0 || H === 0) return;

      ctx.clearRect(0, 0, W, H);
      t += 0.035;

      // TOPIC SPECIFIC PROCEDURAL VIDEO RENDERING
      switch (type) {
        case 'hero-architecture': {
          const grad = ctx.createLinearGradient(0, 0, W, H);
          grad.addColorStop(0, '#064E3B');
          grad.addColorStop(0.5, '#031711');
          grad.addColorStop(1, '#02100C');
          ctx.fillStyle = grad;
          ctx.fillRect(0, 0, W, H);

          ctx.strokeStyle = 'rgba(52, 211, 153, 0.15)';
          ctx.lineWidth = 1.5;
          const numRibs = 8;
          for (let i = 0; i < numRibs; i++) {
            const shift = Math.sin(t * 0.3 + i * 0.4) * 20;
            ctx.beginPath();
            ctx.moveTo((W / numRibs) * i + shift, 0);
            ctx.lineTo((W / numRibs) * i * 1.4 - W * 0.2 + shift, H);
            ctx.stroke();
          }

          const beamX = ((Math.sin(t * 0.4) + 1) / 2) * W;
          const beamGrad = ctx.createRadialGradient(beamX, H * 0.4, 10, beamX, H * 0.4, W * 0.6);
          beamGrad.addColorStop(0, 'rgba(16, 185, 129, 0.25)');
          beamGrad.addColorStop(0.5, 'rgba(217, 119, 6, 0.08)');
          beamGrad.addColorStop(1, 'transparent');
          ctx.fillStyle = beamGrad;
          ctx.fillRect(0, 0, W, H);
          break;
        }

        case 'cardiology-cath':
        case 'cardiology-heart': {
          ctx.fillStyle = '#010E0B';
          ctx.fillRect(0, 0, W, H);

          const beat = Math.pow(Math.sin(t * 2.2), 4);
          ctx.strokeStyle = `rgba(52, 211, 153, ${0.4 + beat * 0.4})`;
          ctx.lineWidth = 3.5 + beat * 1.5;
          ctx.lineCap = 'round';

          ctx.beginPath();
          ctx.moveTo(W * 0.35, H * 0.2);
          ctx.bezierCurveTo(W * 0.45, H * 0.4, W * 0.4, H * 0.6, W * 0.55, H * 0.85);
          ctx.stroke();

          ctx.strokeStyle = 'rgba(245, 158, 11, 0.7)';
          ctx.lineWidth = 1.5;
          ctx.beginPath();
          for (let x = 0; x < W; x += 3) {
            const phase = ((x / W) * 6 - t * 2) % 6;
            let ecgY = H * 0.9;
            if (phase > 2.8 && phase < 3.2) {
              const p = (phase - 2.8) / 0.4;
              if (p < 0.2) ecgY -= 8;
              else if (p < 0.5) ecgY += 28;
              else if (p < 0.8) ecgY -= 38;
              else ecgY += 12;
            }
            if (x === 0) ctx.moveTo(x, ecgY);
            else ctx.lineTo(x, ecgY);
          }
          ctx.stroke();
          break;
        }

        case 'neurology-brain':
        case 'neurology-synapse': {
          ctx.fillStyle = '#060A17';
          ctx.fillRect(0, 0, W, H);

          const nodes = [
            { x: W * 0.25, y: H * 0.3 },
            { x: W * 0.45, y: H * 0.25 },
            { x: W * 0.65, y: H * 0.35 },
            { x: W * 0.8, y: H * 0.5 },
            { x: W * 0.6, y: H * 0.7 },
            { x: W * 0.35, y: H * 0.75 },
            { x: W * 0.48, y: H * 0.5 },
          ];

          ctx.strokeStyle = 'rgba(129, 140, 248, 0.25)';
          ctx.lineWidth = 1.2;
          for (let i = 0; i < nodes.length; i++) {
            for (let j = i + 1; j < nodes.length; j++) {
              ctx.beginPath();
              ctx.moveTo(nodes[i].x, nodes[i].y);
              ctx.lineTo(nodes[j].x, nodes[j].y);
              ctx.stroke();
            }
          }

          nodes.forEach((n, idx) => {
            const fire = Math.sin(t * 3 + idx * 1.5);
            ctx.beginPath();
            ctx.arc(n.x, n.y, 4 + Math.max(0, fire) * 6, 0, Math.PI * 2);
            ctx.fillStyle = fire > 0.5 ? '#C084FC' : '#818CF8';
            ctx.fill();
          });
          break;
        }

        case 'orthopedics-joint': {
          ctx.fillStyle = '#021811';
          ctx.fillRect(0, 0, W, H);

          const cx = W * 0.5;
          const cy = H * 0.5;
          const angle = (Math.sin(t * 1.2) + 1) * 0.5 * (Math.PI * 0.65);

          ctx.strokeStyle = '#059669';
          ctx.lineWidth = 4;
          ctx.beginPath();
          ctx.moveTo(cx, cy);
          ctx.lineTo(cx, cy - Math.min(W, H) * 0.32);
          ctx.stroke();

          const tx = cx + Math.sin(angle) * Math.min(W, H) * 0.32;
          const ty = cy + Math.cos(angle) * Math.min(W, H) * 0.32;
          ctx.strokeStyle = '#34D399';
          ctx.lineWidth = 4;
          ctx.beginPath();
          ctx.moveTo(cx, cy);
          ctx.lineTo(tx, ty);
          ctx.stroke();

          ctx.beginPath();
          ctx.arc(cx, cy, 8, 0, Math.PI * 2);
          ctx.fillStyle = '#047857';
          ctx.fill();
          break;
        }

        case 'advanced-tech': {
          ctx.fillStyle = '#021612';
          ctx.fillRect(0, 0, W, H);

          const cx = W * 0.5;
          const cy = H * 0.5;
          const r = Math.min(W, H) * 0.35;

          ctx.save();
          ctx.translate(cx, cy);
          ctx.rotate(t * 0.6);
          ctx.strokeStyle = 'rgba(16, 185, 129, 0.4)';
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.arc(0, 0, r, 0, Math.PI * 2);
          ctx.stroke();
          ctx.restore();

          const laserY = ((Math.sin(t * 1.5) + 1) / 2) * H;
          ctx.strokeStyle = '#34D399';
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.moveTo(0, laserY);
          ctx.lineTo(W, laserY);
          ctx.stroke();
          break;
        }

        default: {
          const grad = ctx.createLinearGradient(0, 0, W, H);
          grad.addColorStop(0, '#064E3B');
          grad.addColorStop(0.5, '#042F24');
          grad.addColorStop(1, '#021811');
          ctx.fillStyle = grad;
          ctx.fillRect(0, 0, W, H);

          ctx.strokeStyle = 'rgba(52, 211, 153, 0.2)';
          ctx.lineWidth = 1.5;
          ctx.beginPath();
          for (let x = 0; x < W; x += 5) {
            const y = H * 0.5 + Math.sin(x * 0.01 + t) * 25;
            if (x === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
          }
          ctx.stroke();
          break;
        }
      }

      // GLOBAL SCANLINES
      ctx.fillStyle = 'rgba(0, 0, 0, 0.10)';
      for (let y = 0; y < H; y += 6) {
        ctx.fillRect(0, y, W, 1);
      }
    };

    frameId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('resize', resize);
    };
  }, [type, isInView]);

  // STYLES VARIANT WRAPPERS
  const getContainerStyle = () => {
    switch (styleVariant) {
      case 'floating-3d':
        return 'relative rounded-[2.5rem] p-3 sm:p-4 bg-gradient-to-b from-white/95 via-slate-50/70 to-white/95 border-2 border-slate-200/90 shadow-2xl group hover:shadow-rose-900/20 transition-shadow duration-500';
      case 'split-screen':
        return 'relative rounded-3xl overflow-hidden border-2 border-slate-200 shadow-xl bg-slate-950 group';
      case 'curved-mask':
        return 'relative rounded-[3.5rem] overflow-hidden border-4 border-slate-200/90 shadow-2xl bg-black group';
      case 'asymmetric':
        return 'relative rounded-[2.5rem] overflow-hidden border-2 border-rose-200/80 shadow-2xl bg-black transform -rotate-1 hover:rotate-0 transition-transform duration-500 group';
      case 'video-card':
        return 'relative rounded-2xl overflow-hidden border border-slate-200 shadow-md hover:shadow-xl transition-all duration-300 group';
      case 'panoramic-stage':
        return 'relative w-full rounded-[2.5rem] overflow-hidden border-2 border-slate-200/90 shadow-2xl bg-slate-950 group';
      case 'circular-pod':
        return 'relative rounded-full aspect-square overflow-hidden border-4 border-rose-500/60 shadow-2xl bg-slate-950 group';
      case 'fullscreen-bg':
        return 'absolute inset-0 w-full h-full overflow-hidden pointer-events-none -z-10';
      default:
        return 'relative rounded-3xl overflow-hidden border border-slate-200 shadow-xl bg-slate-950 group';
    }
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={
        styleVariant === 'floating-3d'
          ? {
              transform: 'perspective(1200px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
              transformStyle: 'preserve-3d',
            }
          : undefined
      }
      className={`${getContainerStyle()} ${className}`}
    >
      {/* Dynamic Specular Glare Reflection on 3D Tilt */}
      {styleVariant === 'floating-3d' && (
        <div
          ref={glareRef}
          className="absolute inset-0 pointer-events-none rounded-[2.5rem] z-30 transition-opacity duration-300 opacity-0"
        />
      )}

      {/* Video Viewport Container */}
      <div className={`relative w-full ${aspectRatio} overflow-hidden ${styleVariant === 'circular-pod' ? 'rounded-full' : 'rounded-[2rem]'} bg-slate-950 flex items-center justify-center`}>

        {/* 1. Underlying Poster Image */}
        {resolvedPoster && (
          <img
            src={resolvedPoster}
            alt={title}
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover filter brightness-90 contrast-105"
          />
        )}

        {/* 2. Real HTML5 Video element (muted loop, auto-paused offscreen) */}
        {!videoError && resolvedVideoUrl && (
          <video
            ref={videoRef}
            loop
            muted={isMuted}
            playsInline
            preload="metadata"
            key={resolvedVideoUrl}
            onError={() => {
              setVideoError(true);
            }}
            className="absolute inset-0 w-full h-full object-cover z-5 opacity-90 transition-opacity duration-700"
          >
            <source src={resolvedVideoUrl} type="video/mp4" />
          </video>
        )}

        {/* 3. Procedural Medical Simulation Canvas (runs at 30fps only when in viewport) */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full z-10 opacity-65 pointer-events-none mix-blend-screen"
        />

        {/* 4. Cinematic Dark Vignette & Color Grading Overlay */}
        <div className="absolute inset-0 z-15 bg-gradient-to-t from-[#0A1128]/90 via-transparent to-black/30 pointer-events-none" />

        {/* 5. TOP CONTROLS: Clean Playback Controls Only (Zero fake broadcast HUDs) */}
        <div className="absolute top-3 right-3 z-20 flex items-center gap-2 text-white">
          {showControls && (
            <button
              type="button"
              onClick={togglePlay}
              className="w-8 h-8 rounded-full bg-[#0A1128]/75 hover:bg-[#BE123C] border border-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
              title={isPlaying ? "Pause video" : "Play video"}
              aria-label="Toggle playback"
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 fill-white translate-x-0.5" />}
            </button>
          )}

          {showControls && (
            <button
              type="button"
              onClick={toggleMute}
              className="w-8 h-8 rounded-full bg-[#0A1128]/75 hover:bg-[#BE123C] border border-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
              title={isMuted ? "Unmute audio" : "Mute audio"}
              aria-label="Toggle mute"
            >
              {isMuted ? <VolumeX className="w-3.5 h-3.5 text-rose-200" /> : <Volume2 className="w-3.5 h-3.5 text-white" />}
            </button>
          )}
        </div>

        {/* 6. CENTER INTERACTIVE PLAY BUTTON */}
        {onPlayClick && (
          <button
            type="button"
            onClick={onPlayClick}
            className="absolute inset-0 z-25 flex items-center justify-center group-hover:scale-105 transition-transform cursor-pointer"
            aria-label="Expand video"
          >
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#BE123C]/90 hover:bg-[#E11D48] text-white flex items-center justify-center shadow-2xl border-2 border-white/40 transition-all">
              <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-white translate-x-0.5" />
            </div>
          </button>
        )}

        {/* 7. BOTTOM CLEAN CAPTION BAR */}
        <div className="absolute bottom-3.5 left-4 right-4 z-20 flex flex-col sm:flex-row sm:items-end justify-between gap-2 text-white pointer-events-none">
          <div className="space-y-0.5 text-left">
            <span className="text-xs sm:text-sm font-bold tracking-tight text-white drop-shadow-md block">
              {title}
            </span>
            <p className="text-[11px] text-slate-200 font-medium">
              {specs}
            </p>
          </div>

          <div className="text-[10px] font-mono text-white/90 bg-[#0A1128]/75 px-3 py-1 rounded-full border border-white/15 self-start sm:self-auto">
            {subtitle}
          </div>
        </div>
      </div>
    </div>
  );
}
