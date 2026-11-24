import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize, X, Sparkles, ShieldCheck, HeartPulse, Film, CheckCircle2 } from 'lucide-react';
import { pulseAudio } from '../utils/soundEffects';

/**
 * CinematicVideoPlayerModal
 * Interactive 4K Medical Video Player Experience:
 * - Plays real high-definition cinematic video feeds with sound controls & scrubber
 * - Switchable high-definition medical video feeds:
 *   1. Modern Campus Architecture & Atrium Tour
 *   2. Siemens Artis Zee Digital Fluoroscopy & Stenting
 *   3. 3D Beating Heart & Coronary Perfusion Feed
 *   4. Clinician Monograph: Dr. Prakash Chand Shahi
 *   5. Advanced Technology: 3.0T MRI & 128-Slice CT
 */
export default function CinematicVideoPlayerModal({ isOpen, onClose, initialClip = 0 }) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [activeClip, setActiveClip] = useState(initialClip);
  const [progress, setProgress] = useState(15);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  const videoClips = [
    {
      id: 'tour',
      title: 'NABH Tertiary Hospital & Atrium Tour',
      tagline: '4K Drone Architecture & HEPA-14 Cleanroom Suites',
      image: '/images/hospital-facility.jpg',
      videoUrl: '/videos/hero-architecture.mp4',
      badge: 'ARCHITECTURAL TOUR',
      duration: '01:30',
      resolution: '4K UHD • 60 FPS',
      specs: '14,000 Sq. Ft. Atrium · Class-100 Laminar Flow OTs',
    },
    {
      id: 'cathlab',
      title: 'Siemens Artis Zee Fluoroscopy Suite',
      tagline: 'Emergency STEMI Primary Angioplasty Feed',
      image: '/images/cath-lab.jpg',
      videoUrl: '/videos/cardiac-catheterization.mp4',
      badge: 'LIVE CATH-LAB STREAM',
      duration: '02:15',
      resolution: '1080p FLUORO • 30 FPS',
      specs: 'Flat-Panel Digital Detector · Ultra-Low Radiation Protocol',
    },
    {
      id: 'heart',
      title: '3D Beating Heart & Coronary Flow',
      tagline: 'Anatomical Coronary Tree & Ventricular Rhythm',
      image: '/images/heart-anatomy.jpg',
      videoUrl: '/videos/cardiology-heart.mp4',
      badge: 'CARDIOLOGY 3D',
      duration: '01:50',
      resolution: '4K CINE • 60 FPS',
      specs: 'Coronary Perfusion · 72 BPM Sinus Rhythm Synchronization',
    },
    {
      id: 'consult',
      title: 'Dr. Prakash Chand Shahi Clinical Dialogue',
      tagline: 'Executive Angiogram CD Review & Bedside Ethics',
      image: '/images/cath-lab.jpg',
      videoUrl: '/videos/doctors-procedure.mp4',
      badge: 'CLINICIAN MONOGRAPH',
      duration: '01:45',
      resolution: '4K PRORES • 24 FPS',
      specs: 'PGIMER & KGMU Pedigree · 22+ Years in Gorakhpur',
    },
    {
      id: 'tech',
      title: 'Advanced Volumetric MRI / CT Radiology',
      tagline: '3.0 Tesla Whisper-Quiet MRI & 128-Slice Cardiac CT',
      image: '/images/cath-lab.jpg',
      videoUrl: '/videos/advanced-tech.mp4',
      badge: 'DIAGNOSTIC RADIOLOGY',
      duration: '02:00',
      resolution: '3.0T MATRIX • 60 FPS',
      specs: 'Sub-Millimeter Reconstructions · Laser Tomography Plane',
    },
  ];

  const currentClip = videoClips[activeClip] || videoClips[0];

  useEffect(() => {
    if (initialClip !== undefined && initialClip >= 0 && initialClip < videoClips.length) {
      setActiveClip(initialClip);
    }
  }, [initialClip]);

  useEffect(() => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.play().catch(() => {});
      } else {
        videoRef.current.pause();
      }
    }
  }, [activeClip, isPlaying]);

  // Simulated live progress loop
  useEffect(() => {
    if (!isOpen || !isPlaying) return;
    const interval = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 0 : prev + 0.5));
    }, 100);
    return () => clearInterval(interval);
  }, [isOpen, isPlaying]);

  const toggleSound = () => {
    const next = !isMuted;
    setIsMuted(next);
    if (videoRef.current) {
      videoRef.current.muted = next;
    }
    if (!next) {
      pulseAudio.playSuccess();
    }
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/92 backdrop-blur-2xl select-none animate-in fade-in duration-300">
      <div className="relative w-full max-w-5xl bg-[#031711] rounded-[2rem] overflow-hidden border-2 border-[#059669]/40 shadow-[0_25px_80px_rgba(5,150,105,0.3)] flex flex-col">
        
        {/* Top Video Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#02130E] border-b border-[#022C22]/80 text-white">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-600/20 border border-emerald-500/40 text-emerald-400 font-mono text-[11px] font-bold">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              <span>LIVE BROADCAST • {currentClip.badge}</span>
            </span>
            <span className="text-xs text-[#059669] font-mono hidden sm:inline-block">
              {currentClip.resolution}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={toggleSound}
              className={`p-2 rounded-full border transition-all ${
                !isMuted
                  ? 'bg-[#10B981 text-slate-950 border-[#059669]'
                  : 'bg-white/10 text-slate-300 border-white/20 hover:text-white'
              }`}
              title={!isMuted ? "Mute audio" : "Enable sound"}
            >
              {!isMuted ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors border border-white/20 cursor-pointer"
              title="Close Player"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Video Viewport Stage */}
        <div className="relative aspect-[16/9] w-full bg-black overflow-hidden group">
          
          {/* Real HTML5 Video element */}
          <video
            ref={videoRef}
            key={currentClip.videoUrl}
            autoPlay
            loop
            muted={isMuted}
            playsInline
            preload="metadata"
            className="absolute inset-0 w-full h-full object-cover z-0"
          >
            <source src={currentClip.videoUrl} type="video/mp4" />
          </video>

          {/* Cinematic Scanlines & Vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#02130E] via-transparent to-black/30 pointer-events-none z-10" />

          {/* Top Left OSD HUD Stamp */}
          <div className="absolute top-5 left-5 z-20 font-mono text-[11px] text-[#A7F3D0]/90 space-y-0.5 pointer-events-none drop-shadow-md">
            <div>PULSE HOSPITAL • BETIAHATA GORAKHPUR</div>
            <div>CAM-01 • SIEMENS DIGITAL MATRIX 1024×1024</div>
            <div className="text-amber-400">LEAD CLINICIAN: DR. PRAKASH CHAND SHAHI</div>
          </div>

          {/* Top Right Live Timecode */}
          <div className="absolute top-5 right-5 z-20 font-mono text-xs font-bold text-[#059669] bg-black/60 px-3 py-1.5 rounded-full border border-[#059669]/30 backdrop-blur-md">
            REC 00:{Math.floor(progress * 0.9).toString().padStart(2, '0')}:14
          </div>

          {/* Center Play/Pause Large Action on Click */}
          <button
            onClick={togglePlay}
            className="absolute inset-0 flex items-center justify-center z-20 group/btn cursor-pointer"
          >
            <div className={`w-18 h-18 sm:w-20 sm:h-20 rounded-full bg-[#10B981]/90 hover:bg-[#059669] text-slate-950 flex items-center justify-center shadow-2xl transition-all duration-300 ${
              isPlaying ? 'opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100' : 'opacity-100 scale-100 ring-4 ring-emerald-400/50'
            }`}>
              {isPlaying ? (
                <Pause className="w-8 h-8 fill-current" />
              ) : (
                <Play className="w-8 h-8 fill-current ml-1" />
              )}
            </div>
          </button>

          {/* Bottom Left Video Caption */}
          <div className="absolute bottom-6 left-6 z-20 text-white space-y-1 pointer-events-none">
            <span className="text-[10px] font-mono tracking-widest uppercase text-[#A7F3D0] font-bold block">
              {currentClip.specs}
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold text-white">
              {currentClip.title}
            </h3>
            <p className="text-xs text-slate-300 hidden sm:block">
              {currentClip.tagline}
            </p>
          </div>

        </div>

        {/* Video Scrubber & Playback Controls Bar */}
        <div className="px-6 py-4 bg-[#02130E] border-t border-[#022C22]/80 space-y-3">
          {/* Scrubber Track */}
          <div 
            onClick={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const clickX = e.clientX - rect.left;
              const p = Math.max(0, Math.min(100, (clickX / rect.width) * 100));
              setProgress(p);
            }}
            className="relative w-full h-1.5 bg-[#022C22] rounded-full overflow-hidden cursor-pointer group/scrub"
          >
            <div 
              className="h-full bg-gradient-to-r from-[#064E3B] to-teal-400 rounded-full relative transition-all"
              style={{ width: `${progress}%` }}
            >
              <span className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-md scale-0 group-hover/scrub:scale-100 transition-transform" />
            </div>
          </div>

          {/* Bottom Controls Row & Switchable Video Clips */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            
            <div className="flex items-center gap-3">
              <button
                onClick={togglePlay}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#10B981 hover:bg-[#059669] text-slate-950 font-bold text-xs transition-colors cursor-pointer"
              >
                {isPlaying ? <Pause className="w-3.5 h-3.5 fill-current" /> : <Play className="w-3.5 h-3.5 fill-current" />}
                <span>{isPlaying ? 'PAUSE FEED' : 'RESUME PLAY'}</span>
              </button>

              <span className="text-xs font-mono text-[#A7F3D0]/80">
                00:{Math.floor(progress * 0.9).toString().padStart(2, '0')} / {currentClip.duration}
              </span>
            </div>

            {/* Switchable Video Feeds */}
            <div className="flex items-center gap-2 overflow-x-auto max-w-full pb-1 sm:pb-0">
              {videoClips.map((clip, idx) => (
                <button
                  key={clip.id}
                  onClick={() => {
                    setActiveClip(idx);
                    setIsPlaying(true);
                  }}
                  className={`px-3 py-1.5 rounded-xl text-[11px] font-mono transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
                    activeClip === idx
                      ? 'bg-[#10B981]/20 text-[#A7F3D0] border border-[#059669]/50 shadow-xs'
                      : 'bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 border border-transparent'
                  }`}
                >
                  <Film className="w-3 h-3" />
                  <span>{clip.badge}</span>
                </button>
              ))}
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
