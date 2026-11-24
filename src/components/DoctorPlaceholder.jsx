import React, { useState, useRef } from 'react';
import { ShieldCheck, HeartPulse, Stethoscope, Award } from 'lucide-react';
import { PULSE_DATA } from '../data/pulseData';

/**
 * DoctorPlaceholder / DoctorPortrait3D
 * Official Medical Portrait of Dr. Prakash Chand Shahi
 * Permanently embeds i.png with interactive 3D perspective tilt & specular holographic glare
 */
export default function DoctorPlaceholder({
  className = "",
  aspectRatio = "aspect-[3/4] sm:aspect-[4/5]",
  imageSrc = "/images/i.png"
}) {
  const doctor = PULSE_DATA?.doctor || PULSE_DATA?.doctors?.[0] || {
    name: "Dr. Prakash Chand Shahi",
    title: "Senior Consultant Cardiologist & Interventional Cardiologist",
    qualifications: "DM Cardiology (PGIMER Chandigarh), MD Medicine (KGMU Lucknow)"
  };

  const cardRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0, glareX: 50, glareY: 50 });
  const [isHovered, setIsHovered] = useState(false);
  const [imgSrc, setImgSrc] = useState(imageSrc || "/images/i.png");

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const normX = (x / rect.width) - 0.5;
    const normY = (y / rect.height) - 0.5;
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
      className={`relative group [perspective:1200px] cursor-pointer select-none ${className}`}
    >
      {/* 3D Ambient Mint & Teal Aura */}
      <div
        className="absolute -inset-4 bg-gradient-to-tr from-[#FECDD3]/60 via-[#38BDF8]/40 to-[#0284C7]/20 rounded-[3rem] blur-2xl -z-10 transition-all duration-500 group-hover:opacity-100 opacity-80"
        style={{
          transform: isHovered
            ? `translate3d(${tilt.y * 1.5}px, ${-tilt.x * 1.5}px, 0)`
            : 'translate3d(0,0,0)',
        }}
      />

      {/* Main Architectural Sculptural Glass Niche with 3D Tilt */}
      <div
        className="relative rounded-[2.5rem] p-3 sm:p-4 bg-white backdrop-blur-2xl border-2 border-[#FECDD3] shadow-[0_30px_70px_-15px_rgba(6,78,59,0.15)] transition-all duration-300 ease-out"
        style={{
          transformStyle: 'preserve-3d',
          transform: isHovered
            ? `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale3d(1.03, 1.03, 1.03)`
            : 'rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
        }}
      >

        {/* Inner Sculptural Arched Canvas - Pure Clean Medical Mint & White Background */}
        <div className={`relative ${aspectRatio} w-full rounded-[2rem] overflow-hidden border-2 border-[#FECDD3] bg-gradient-to-b from-white via-[#FEF2F2] to-[#FAFBFD] flex flex-col items-center justify-center text-center transition-all duration-500`}>

          {/* Permanent Authentic Doctor Photograph i.png */}
          <div className="absolute inset-0 w-full h-full flex items-center justify-center bg-white">
            <img
              src={imgSrc}
              alt={`${doctor.name} - Official Medical Portrait`}
              onError={() => setImgSrc("/images/doctor-portrait.jpg")}
              className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"
            />
            {/* Subtle soft tint - No Dark or Blackish Vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#B91C1C]/15 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Dynamic Specular 3D Holographic Glare */}
          <div
            className="absolute inset-0 pointer-events-none transition-opacity duration-300 mix-blend-overlay z-15"
            style={{
              opacity: isHovered ? 0.6 : 0,
              background: `radial-gradient(circle 380px at ${tilt.glareX}% ${tilt.glareY}%, rgba(255, 255, 255, 0.6), rgba(5, 150, 105, 0.2) 60%, transparent 80%)`,
            }}
          />

          {/* Top Architectural Telemetry Pill */}
          <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-20 pointer-events-none">
            <div className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md border border-rose-200/80 shadow-xs flex items-center gap-1.5 text-[10px] font-bold text-[#991B1B]">
              <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
              <span>Sinus Rhythm • 72 BPM</span>
            </div>

            <div className="px-3 py-1 rounded-full bg-[#991B1B]/90 backdrop-blur-md text-[#FECDD3] shadow-xs text-[11px] font-serif italic font-normal border border-[#FECDD3]/40">
              22+ Yrs Mastery
            </div>
          </div>

          {/* Bottom Academic Pedigree Plaque - SLIM & ELEGANT so doctor's body is fully visible */}
          <div className="absolute bottom-3 inset-x-3 p-2.5 rounded-xl bg-white/95 backdrop-blur-md border border-[#FECDD3] shadow-md text-left z-20 flex items-center justify-between gap-2">
            <div>
              <span className="text-[9px] font-mono uppercase tracking-[0.2em] text-[#991B1B] font-bold block">
                Lead Interventional Cardiologist
              </span>
              <span className="text-xs font-extrabold text-[#991B1B] block">
                Dr. Prakash Chand Shahi • DM (PGIMER)
              </span>
            </div>
            <ShieldCheck className="w-4 h-4 text-[#0284C7] shrink-0" />
          </div>

        </div>

      </div>

    </div>
  );
}
