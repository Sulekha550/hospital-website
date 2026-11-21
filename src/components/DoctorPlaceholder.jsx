import React, { useState } from 'react';
import { Camera, Image as ImageIcon, ShieldCheck, Heart, Sparkles, Plus, UploadCloud } from 'lucide-react';
import { PULSE_DATA } from '../data/pulseData';

/**
 * DoctorPlaceholder
 * Section 3: Doctor Image Placeholder – Very Important
 * - Reserves 40–50% of the Hero & Monograph composition specifically for the Doctor's photograph
 * - Elegant portrait-shaped architectural niche with translucent glass framing & specular silver reflections
 * - Does NOT use fake AI humans or stock filler
 * - Ready for a real doctor photograph to be dropped in or toggled
 */
export default function DoctorPlaceholder({ 
  className = "", 
  aspectRatio = "aspect-[3/4] sm:aspect-[4/5]",
  showUploadTrigger = true,
  imageSrc = null // If passed, renders the real photo seamlessly
}) {
  const { doctor, clinic } = PULSE_DATA;
  const [photo, setPhoto] = useState(imageSrc);

  const handleImageUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setPhoto(url);
    }
  };

  return (
    <div className={`relative group ${className}`}>
      {/* Ambient Iridescent Lavender & Platinum Aura */}
      <div className="absolute -inset-4 bg-gradient-to-tr from-purple-200/40 via-sky-100/30 to-amber-100/30 rounded-[3rem] blur-2xl -z-10 transition-opacity duration-700 group-hover:opacity-100 opacity-80" />

      {/* Main Architectural Sculptural Glass Niche */}
      <div className="relative rounded-[2.5rem] p-3 sm:p-4 bg-white/70 backdrop-blur-2xl border border-white/80 shadow-[0_25px_60px_-15px_rgba(109,40,217,0.08)]">
        
        {/* Inner Sculptural Arched Canvas (40-50% Hero Canvas) */}
        <div className={`relative ${aspectRatio} w-full rounded-[2rem] overflow-hidden border border-purple-200/60 bg-gradient-to-b from-[#FDFBF7] via-[#F8F5FD] to-[#F1ECFA] flex flex-col items-center justify-center p-6 text-center transition-all duration-500`}>
          
          {/* Subtle Bio-Grid Background Texture */}
          <div className="absolute inset-0 bg-luxury-grid opacity-30 pointer-events-none" />

          {/* Floating Refractive Glass Accents (Concentric Arches) */}
          <div className="absolute inset-x-8 top-6 h-36 rounded-full border border-purple-300/30 pointer-events-none" />
          <div className="absolute inset-x-14 top-12 h-24 rounded-full border border-sky-300/25 pointer-events-none" />

          {photo ? (
            /* Real Doctor Photograph When Available */
            <div className="absolute inset-0 w-full h-full">
              <img
                src={photo}
                alt={`${doctor.name} - Official Medical Portrait`}
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#120B24]/70 via-transparent to-transparent pointer-events-none" />
            </div>
          ) : (
            /* Dedicated Empty Architectural Placeholder (Section 3 Requirement) */
            <div className="relative z-10 max-w-xs mx-auto space-y-4">
              
              {/* Minimalist Sculptural Niche Emblem */}
              <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-3xl bg-white/80 backdrop-blur-xl border border-purple-200/80 shadow-md flex items-center justify-center text-purple-700 transition-transform duration-500 group-hover:scale-105">
                <Camera className="w-7 h-7 sm:w-8 sm:h-8 stroke-[1.4] text-purple-600" />
              </div>

              {/* Editorial Typography & Intentional Reserved Area Notice */}
              <div className="space-y-1.5">
                <span className="text-[11px] font-mono uppercase tracking-[0.28em] text-purple-900 font-semibold block">
                  Dedicated Portrait Canvas
                </span>
                <h4 className="font-semibold text-2xl sm:text-3xl text-slate-950 leading-tight tracking-tight">
                  {doctor.name}
                </h4>
                <p className="text-xs text-slate-600 font-medium leading-relaxed max-w-[240px] mx-auto">
                  Reserved 45% editorial aperture for the physician's authentic portrait photography.
                </p>
              </div>

              {/* Upload / Insert Real Photo Control */}
              {showUploadTrigger && (
                <div className="pt-2">
                  <label className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-950 hover:bg-slate-800 text-white text-xs font-medium shadow-md cursor-pointer transition-all hover:scale-105">
                    <Plus className="w-4 h-4 text-purple-300" />
                    <span>Upload Doctor Portrait</span>
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
            <div className="px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-slate-200 shadow-sm flex items-center gap-2 text-[11px] font-medium text-slate-900">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>Sinus Rhythm • 72 BPM</span>
            </div>

            <div className="px-3.5 py-1.5 rounded-full bg-slate-950 text-white shadow-sm text-xs font-serif italic font-normal">
              22+ Yrs Mastery
            </div>
          </div>

          {/* Bottom Academic Pedigree Plaque */}
          <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-white/95 backdrop-blur-xl border border-slate-200/90 shadow-md text-left z-20">
            <div className="flex items-center justify-between gap-2">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-purple-900 font-medium block">
                  Apex Institutions
                </span>
                <span className="text-xs font-semibold text-slate-900 block mt-0.5">
                  DM Cardiology (PGIMER) • MD (KGMU)
                </span>
              </div>
              <ShieldCheck className="w-5 h-5 text-purple-700 shrink-0" />
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
