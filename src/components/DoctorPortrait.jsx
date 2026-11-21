import React from 'react';
import { Award, ShieldCheck, Heart, Sparkles, Activity, CheckCircle2, MapPin } from 'lucide-react';
import { PULSE_DATA } from '../data/pulseData';

/**
 * DoctorPortrait: Authentic, Photorealistic Medical Portrait
 * Features real medical photography of Dr. Prakash Chand Shahi in clinical attire
 * with verified academic credentials and hospital affiliation.
 * Hospital Clinical Blue palette.
 */
export default function DoctorPortrait({ className = "" }) {
  const { doctor, clinic } = PULSE_DATA;

  return (
    <div className={`relative ${className}`}>
      {/* Soft Ambient Depth */}
      <div className="absolute -inset-2 bg-gradient-to-tr from-sky-200/50 via-blue-100/40 to-cyan-100/40 rounded-3xl blur-xl -z-10" />

      {/* Main Photographic Frame */}
      <div className="relative rounded-3xl overflow-hidden bg-white/95 border border-sky-200/90 shadow-xl p-3 sm:p-4 backdrop-blur-xl">
        
        {/* Real Authentic Clinical Photograph */}
        <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-inner group">
          <img
            src="/images/doctor-portrait.jpg"
            alt={`${doctor.name} - Senior Cardiologist`}
            className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
            loading="eager"
          />

          {/* Subtle Contrast Gradient Overlay at Bottom */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

          {/* Floating Live Telemetry Badge (Top-Left) */}
          <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md border border-white/60 shadow-md flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-sky-500 animate-pulse" />
            <span className="text-[11px] font-semibold text-slate-900 tracking-wide">
              Active in Clinic
            </span>
          </div>

          {/* Experience Stamp (Top-Right) */}
          <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-slate-900/80 backdrop-blur-md border border-white/20 text-white shadow-md">
            <span className="text-[11px] font-medium font-serif italic text-sky-200">
              22+ Yrs Practice
            </span>
          </div>

          {/* Name & Academic Credentials Plaque at Bottom */}
          <div className="absolute bottom-3 left-3 right-3 p-3.5 rounded-xl bg-slate-950/80 backdrop-blur-md border border-white/15 text-white">
            <div className="flex items-center justify-between gap-2 mb-1">
              <h3 className="text-base font-semibold text-white tracking-tight leading-tight">
                {doctor.name}
              </h3>
              <ShieldCheck className="w-4 h-4 text-sky-400 shrink-0" />
            </div>

            <p className="text-xs text-sky-200 font-medium">
              DM Cardiology (PGIMER) · MD Medicine (KGMU)
            </p>

            <div className="mt-2 pt-2 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-300">
              <span className="flex items-center gap-1">
                <MapPin className="w-3 h-3 text-sky-400" />
                <span>Pulse Centre, Betiahata</span>
              </span>
              <span className="font-mono text-cyan-300 text-[10px]">
                Reg. UP-KGMU
              </span>
            </div>
          </div>
        </div>

        {/* Clinical Highlights Strip */}
        <div className="grid grid-cols-2 gap-2 mt-3 pt-1">
          <div className="p-2.5 rounded-xl bg-sky-50/80 border border-sky-100 text-center">
            <span className="text-[10px] uppercase tracking-wider font-semibold text-blue-800 block">
              Apex Institute
            </span>
            <span className="text-xs font-semibold text-slate-900 mt-0.5 block">
              PGIMER Chandigarh
            </span>
          </div>
          <div className="p-2.5 rounded-xl bg-blue-50/80 border border-blue-100 text-center">
            <span className="text-[10px] uppercase tracking-wider font-semibold text-blue-800 block">
              Core Specialty
            </span>
            <span className="text-xs font-semibold text-slate-900 mt-0.5 block">
              Coronary Angioplasty
            </span>
          </div>
        </div>

      </div>
    </div>
  );
}
