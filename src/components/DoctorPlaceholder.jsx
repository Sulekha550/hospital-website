import React, { useState, useRef } from 'react';
import { Camera, Image as ImageIcon, ShieldCheck, Heart, Sparkles, Plus, UploadCloud } from 'lucide-react';
import { PULSE_DATA } from '../data/pulseData';

/**
 * DoctorPlaceholder
 * Section 3: Doctor Image Placeholder – High-Impact 3D Perspective Tilt Canvas
 */
export default function DoctorPlaceholder({ 
  className = "", 
  aspectRatio = "aspect-[3/4] sm:aspect-[4/5]",
  showUploadTrigger = true,
  imageSrc = null // If passed, renders the real photo seamlessly
}) {
  const doctor = PULSE_DATA?.doctor || PULSE_DATA?.doctors?.[0] || {
    name: "Dr. Prakash Chand Shahi",
    title: "Senior Consultant Cardiologist & Interventional Cardiologist",
    qualifications: "DM Cardiology (PGIMER Chandigarh), MD Medicine (KGMU Lucknow)"
  };
  const clinic = PULSE_DATA?.clinic || {
    name: "Pulse Heart Centre & Multispeciality Hospital",
    address: "Betiahata, Gorakhpur, Uttar Pradesh, India"
  };
  const [photo, setPhoto] = useState(imageSrc || null);
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

  const handleImageUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setPhoto(url);
    }
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
        className="absolute -inset-4 bg-gradient-to-tr from-[#A7F3D0]/50 via-[#34D399]/40 to-[#064E3B]/25 rounded-[3rem] blur-2xl -z-10 transition-all duration-500 group-hover:opacity-100 opacity-80"
        style={{
          transform: isHovered 
            ? `translate3d(${tilt.y * 1.5}px, ${-tilt.x * 1.5}px, 0)` 
            : 'translate3d(0,0,0)',
        }}
      />

      {/* Main Architectural Sculptural Glass Niche with 3D Tilt */}
      <div 
        className="relative rounded-[2.5rem] p-3 sm:p-4 bg-white/95 backdrop-blur-2xl border-2 border-[#A7F3D0] shadow-[0_30px_70px_-15px_rgba(6,78,59,0.25)] transition-all duration-300 ease-out"
        style={{
          transformStyle: 'preserve-3d',
          transform: isHovered
            ? `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale3d(1.03, 1.03, 1.03)`
            : 'rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
        }}
      >
        
        {/* Inner Sculptural Arched Canvas (40-50% Hero Canvas) */}
        <div className={`relative ${aspectRatio} w-full rounded-[2rem] overflow-hidden border-2 border-[#34D399]/70 bg-gradient-to-b from-[#FDFBF7] via-[#F0FDF4] to-[#F0FDF4] flex flex-col items-center justify-center p-6 text-center transition-all duration-500`}>
          
          {/* Dynamic Specular 3D Holographic Glare */}
          <div
            className="absolute inset-0 pointer-events-none transition-opacity duration-300 mix-blend-overlay z-15"
            style={{
              opacity: isHovered ? 0.7 : 0,
              background: `radial-gradient(circle 380px at ${tilt.glareX}% ${tilt.glareY}%, rgba(255, 255, 255, 0.55), rgba(5, 150, 105, 0.2) 60%, transparent 80%)`,
            }}
          />
          
          {/* Subtle Mint Grid Background Texture */}
          <div className="absolute inset-0 bg-[radial-gradient(#05966920_1.5px,transparent_1.5px)] bg-[size:24px_24px] pointer-events-none" />

          {/* Floating Refractive Glass Accents (Concentric Arches) */}
          <div className="absolute inset-x-8 top-6 h-36 rounded-full border border-[#A7F3D0]/50 pointer-events-none" />
          <div className="absolute inset-x-14 top-12 h-24 rounded-full border border-[#34D399]/40 pointer-events-none" />

          {photo ? (
            /* User Doctor Photograph */
            <div className="absolute inset-0 w-full h-full">
              <img
                src={photo}
                alt={`${doctor.name} - Official Medical Portrait`}
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#022C22]/70 via-transparent to-transparent pointer-events-none" />
            </div>
          ) : (
            /* Dedicated Empty Architectural Placeholder Ready for Doctor Photo Upload */
            <div className="relative z-10 max-w-xs mx-auto space-y-4">
              
              {/* Minimalist Sculptural Niche Emblem */}
              <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-3xl bg-white/95 backdrop-blur-xl border-2 border-[#A7F3D0] shadow-md flex items-center justify-center text-[#064E3B] transition-transform duration-500 group-hover:scale-105">
                <Camera className="w-7 h-7 sm:w-8 sm:h-8 stroke-[1.5] text-[#064E3B]" />
              </div>

              {/* Editorial Typography */}
              <div className="space-y-1">
                <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#064E3B] font-bold block">
                  Doctor Photo Slot
                </span>
                <h4 className="font-extrabold text-2xl sm:text-3xl text-[#022C22] leading-tight tracking-tight">
                  {doctor.name}
                </h4>
                <p className="text-[11px] text-slate-700 font-semibold leading-relaxed max-w-[240px] mx-auto">
                  Reserved aperture for your authentic doctor photograph.
                </p>
              </div>

              {/* Upload / Insert Real Photo Control */}
              {showUploadTrigger && (
                <div className="pt-2">
                  <label className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#064E3B] via-[#047857] to-[#059669] hover:from-[#022C22] hover:to-[#064E3B] text-white text-xs font-bold uppercase tracking-wider shadow-md shadow-[#064E3B]/30 cursor-pointer transition-all hover:scale-105 border border-emerald-400/40">
                    <Plus className="w-4 h-4 text-emerald-300" />
                    <span>Upload Doctor Photo</span>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                    />
                  </label>
                </div>
              )}

            </div>
          )}

          {/* Top Architectural Telemetry Pill */}
          <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-20 pointer-events-none">
            <div className="px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-emerald-200 shadow-xs flex items-center gap-2 text-[11px] font-bold text-[#064E3B]">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>Sinus Rhythm • 72 BPM</span>
            </div>

            <div className="px-3.5 py-1.5 rounded-full bg-[#064E3B] text-white shadow-xs text-xs font-serif italic font-normal">
              22+ Yrs Mastery
            </div>
          </div>

          {/* Bottom Academic Pedigree Plaque */}
          <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-2xl bg-white/95 backdrop-blur-xl border border-emerald-200 shadow-md text-left z-20">
            <div className="flex items-center justify-between gap-2">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#064E3B] font-bold block">
                  Apex Institutions
                </span>
                <span className="text-xs font-bold text-slate-900 block mt-0.5">
                  DM Cardiology (PGIMER) • MD (KGMU)
                </span>
              </div>
              <ShieldCheck className="w-5 h-5 text-[#059669] shrink-0" />
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
