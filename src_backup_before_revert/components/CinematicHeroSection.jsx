import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Calendar, ArrowRight, ShieldCheck, Activity, Award, 
  Clock, Phone, HeartPulse, ChevronRight, Sparkles 
} from 'lucide-react';
import HeroArchitectural3DCanvas from './HeroArchitectural3DCanvas';

/**
 * CinematicHeroSection
 * Full-screen immersive 3D medical environment:
 * - Sweeping translucent architectural glass canopy ribs & atrium vaults
 * - Central translucent biological 3D cardiac sculpture with glowing coronaries
 * - Oversized editorial typography positioned creatively over the 3D scene
 * - Floating glass biometric telemetry (72 BPM, 99.4% Radial Success)
 * - Zero opaque white rectangles blocking the 3D visual world!
 */
export default function CinematicHeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-between pt-28 pb-12 px-4 sm:px-6 lg:px-10 overflow-hidden select-none bg-gradient-to-b from-[#FAF5FF]/70 via-[#F0F9FF]/80 to-[#FFF1F2]/60">
      
      {/* FULL-BLEED 3D ARCHITECTURAL & ANATOMICAL CANVAS */}
      <HeroArchitectural3DCanvas />

      {/* Ambient Radial Gradient Accent Lights */}
      <div className="absolute inset-0 pointer-events-none -z-5 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-gradient-to-bl from-[#2788B8]/15 via-[#A9D8E9]/10 to-transparent rounded-full blur-[140px]" />
        <div className="absolute -bottom-10 left-10 w-[550px] h-[550px] bg-gradient-to-tr from-[#AFA0E9]/15 via-[#F2A28D]/10 to-transparent rounded-full blur-[130px]" />
      </div>

      <div className="max-w-7xl mx-auto w-full flex-1 flex flex-col justify-center relative z-10 py-6 sm:py-10">
        
        {/* Top Status Accreditation Pill */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-8">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-xl border border-white/90 shadow-sm">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[11px] font-bold tracking-widest uppercase text-[#173C59]">
              PULSE Tertiary Multispeciality Hospital • Betiahata, Gorakhpur
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs font-semibold text-slate-700 bg-white/60 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/70 shadow-xs">
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#2788B8]" />
              <span>OPD: 08:30 AM – 08:30 PM</span>
            </span>
            <span className="text-slate-300">•</span>
            <a href="tel:+919876543210" className="flex items-center gap-1.5 text-red-600 font-bold hover:underline">
              <span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-ping" />
              <span>24/7 STEMI Code-Blue: +91 98765 43210</span>
            </a>
          </div>
        </div>

        {/* Master Editorial Layout Placed Over 3D Scene */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-8 space-y-6 sm:space-y-8 text-left">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/75 backdrop-blur-md border border-white/90 shadow-xs">
              <Award className="w-3.5 h-3.5 text-[#2788B8]" />
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#173C59]">
                NABH Accredited Tertiary Center
              </span>
            </div>

            <div className="space-y-3">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-[#173C59] tracking-tight leading-[1.04]">
                Care That Moves <br />
                <span className="text-[#2788B8]">You Forward.</span>
              </h1>
              <p className="text-lg sm:text-2xl font-medium text-slate-700 pt-1">
                Expert doctors. Advanced technology. Compassionate healthcare.
              </p>
            </div>

            <p className="text-sm sm:text-base text-slate-700 max-w-xl leading-relaxed bg-white/50 backdrop-blur-sm p-3.5 rounded-2xl border border-white/60">
              Directed by <strong>Dr. Prakash Chand Shahi</strong> (DM Cardiology PGIMER Chandigarh, MD KGMU Lucknow), PULSE integrates 35+ apex specialists, flat-panel digital Cath Lab interventions, 3T silent MRI, and 24/7 cardiac ICU care.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                to="/book-appointment"
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[#173C59] hover:bg-[#0E2538] text-white font-bold text-xs uppercase tracking-wider shadow-xl shadow-[#173C59]/25 hover:shadow-2xl transition-all duration-300 hover:-translate-y-0.5 group"
              >
                <Calendar className="w-4 h-4 text-[#A9D8E9] group-hover:scale-110 transition-transform" />
                <span>Book Priority Consultation</span>
                <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                to="/specialities"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-white/85 hover:bg-white text-[#173C59] font-bold text-xs uppercase tracking-wider border border-white shadow-md hover:shadow-lg transition-all duration-300 backdrop-blur-md"
              >
                <span>Explore Specialities</span>
                <ChevronRight className="w-4 h-4 text-[#2788B8]" />
              </Link>
            </div>

          </div>

          {/* Right Floating Telemetry Glass Badge Array */}
          <div className="lg:col-span-4 space-y-4">
            
            <div className="p-4 rounded-2xl bg-white/85 backdrop-blur-xl border border-white shadow-lg space-y-2">
              <div className="flex items-center justify-between text-xs font-bold">
                <span className="flex items-center gap-2 text-[#173C59]">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
                  <span>Cardiac Telemetry</span>
                </span>
                <span className="text-[#2788B8] font-mono">72 BPM</span>
              </div>
              <p className="text-[11px] text-slate-600 leading-snug">
                Normal sinus rhythm with active hemodynamic perfusion monitoring.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white/85 backdrop-blur-xl border border-white shadow-lg space-y-2">
              <div className="flex items-center justify-between text-xs font-bold">
                <span className="text-[#173C59]">Transradial Patency</span>
                <span className="text-emerald-700 font-mono">99.4%</span>
              </div>
              <p className="text-[11px] text-slate-600 leading-snug">
                Wrist-first catheterization eliminating femoral groin bleeding complications.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white/85 backdrop-blur-xl border border-white shadow-lg space-y-2">
              <div className="flex items-center justify-between text-xs font-bold">
                <span className="text-[#173C59]">Emergency Door-To-Balloon</span>
                <span className="text-red-600 font-mono">&lt; 45 Min</span>
              </div>
              <p className="text-[11px] text-slate-600 leading-snug">
                Hyperacute STEMI protocol with round-the-clock flat-panel Cath Lab activation.
              </p>
            </div>

          </div>

        </div>

      </div>

      {/* Bottom Floating Information Ribbon */}
      <div className="max-w-7xl mx-auto w-full pt-4 border-t border-slate-300/60 grid grid-cols-2 sm:grid-cols-4 gap-4 relative z-10">
        <div className="p-3 rounded-2xl bg-white/60 backdrop-blur-md border border-white/70">
          <span className="text-2xl sm:text-3xl font-extrabold text-[#173C59]">22+</span>
          <span className="text-xs text-slate-600 block font-semibold">Years Clinical Devotion</span>
        </div>
        <div className="p-3 rounded-2xl bg-white/60 backdrop-blur-md border border-white/70">
          <span className="text-2xl sm:text-3xl font-extrabold text-[#2788B8]">12,000+</span>
          <span className="text-xs text-slate-600 block font-semibold">Cath Interventions</span>
        </div>
        <div className="p-3 rounded-2xl bg-white/60 backdrop-blur-md border border-white/70">
          <span className="text-2xl sm:text-3xl font-extrabold text-[#173C59]">35+</span>
          <span className="text-xs text-slate-600 block font-semibold">Super-Specialists</span>
        </div>
        <div className="p-3 rounded-2xl bg-white/60 backdrop-blur-md border border-white/70">
          <span className="text-2xl sm:text-3xl font-extrabold text-[#2788B8]">Level-3</span>
          <span className="text-xs text-slate-600 block font-semibold">Cardiac ICU Facility</span>
        </div>
      </div>

    </section>
  );
}
