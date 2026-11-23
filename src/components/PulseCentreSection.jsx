import React from 'react';
import { Building2, MapPin, Clock, Calendar, CheckCircle, Navigation, ArrowRight, ShieldCheck, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PULSE_DATA } from '../data/pulseData';
import SectionCinematicVideo from './SectionCinematicVideo';

export default function PulseCentreSection({ onBookClick }) {
  const { clinic, doctor } = PULSE_DATA;

  return (
    <section id="centre" className="relative py-16 lg:py-24 overflow-hidden select-none bg-gradient-to-b from-[#FAFBF9] via-[#F0FDF4]/40 to-[#FAFBF9]">

      {/* Animated Architectural Blueprint Grid & Drafting Compass Background in Medical Green */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        {/* Subtle Ambient Medical Video Layer */}
        <div className="absolute inset-0 z-0 overflow-hidden opacity-15 mix-blend-multiply">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            className="w-full h-full object-cover"
          >
            <source src="/videos/about-hospital.mp4" type="video/mp4" />
          </video>
        </div>

        <svg className="absolute inset-0 w-full h-full opacity-30" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="archBlueprintGrid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#059669" strokeWidth="0.8" strokeDasharray="3 3" />
              <circle cx="60" cy="0" r="1.5" fill="#047857" opacity="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#archBlueprintGrid)" />
          {/* Rotating Compass Arc (Top Right) */}
          <g transform="translate(1000, 180)" opacity="0.35">
            <circle cx="0" cy="0" r="160" fill="none" stroke="#10B981" strokeWidth="1.2" strokeDasharray="6 8" className="animate-spin" style={{ animationDuration: '40s' }} />
            <circle cx="0" cy="0" r="240" fill="none" stroke="#047857" strokeWidth="0.8" />
          </g>
          {/* Rotating Compass Arc (Bottom Left) */}
          <g transform="translate(150, 450)" opacity="0.3">
            <circle cx="0" cy="0" r="140" fill="none" stroke="#059669" strokeWidth="1" strokeDasharray="8 6" className="animate-spin" style={{ animationDuration: '50s', animationDirection: 'reverse' }} />
          </g>
        </svg>

        {/* Ambient Floating Emerald Glows & Laser Line */}
        <div className="absolute top-1/4 -left-20 w-[600px] h-[600px] bg-gradient-to-tr from-[#059669]/20 via-[#10B981]/15 to-transparent rounded-full blur-[100px] pointer-events-none -z-10 animate-float-1" />
        <div className="absolute bottom-10 -right-20 w-[550px] h-[550px] bg-gradient-to-bl from-[#047857]/20 via-[#34D399]/15 to-transparent rounded-full blur-[100px] pointer-events-none -z-10 animate-float-2" />
        <div className="absolute left-0 right-0 h-[2.5px] bg-gradient-to-r from-transparent via-[#10B981] to-transparent shadow-[0_0_15px_#059669] opacity-55 animate-laser-sweep pointer-events-none" />

        {/* Animated ECG Cardiac Sinus Line */}
        <svg className="absolute inset-x-0 bottom-12 w-full h-24 opacity-25 pointer-events-none" viewBox="0 0 1440 90" fill="none" preserveAspectRatio="none">
          <path
            d="M 0,45 L 200,45 L 220,45 L 230,25 L 240,65 L 255,10 L 270,75 L 285,40 L 300,45 L 600,45 L 620,45 L 630,25 L 640,65 L 655,10 L 670,75 L 685,40 L 700,45 L 1000,45 L 1020,45 L 1030,25 L 1040,65 L 1055,10 L 1070,75 L 1085,40 L 1100,45 L 1440,45"
            stroke="#059669"
            strokeWidth="2"
            strokeDasharray="1400"
            className="animate-ecg-dash"
          />
        </svg>

        {/* Floating Architectural Crosshairs (+) */}
        <div className="absolute top-12 left-10 text-[#059669]/30 font-mono text-xs select-none hidden md:block">+ BETIAHATA CLINICAL AXIS</div>
        <div className="absolute bottom-12 right-12 text-[#059669]/30 font-mono text-xs select-none hidden md:block">+ CARDIAC OPD GROUND LEVEL</div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">

        {/* Master Facility Banner */}
        <div className="space-y-8">

          {/* Schematic Banner */}
          <div className="rounded-[2.5rem] bg-gradient-to-br from-white via-[#F0FDF4]/60 to-white text-slate-900 p-8 sm:p-12 shadow-layered border-2 border-[#A7F3D0] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#A7F3D0]/30 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#064E3B]/10 rounded-full blur-3xl pointer-events-none" />

            <div className="flex flex-col lg:flex-row items-center justify-between gap-8 relative z-10">

              <div className="space-y-4 max-w-xl text-left">
                <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-[#A7F3D0] text-xs font-mono font-medium text-[#064E3B] shadow-xs">
                  <img src="/images/p.webp" alt="Pulse Logo" className="w-5 h-5 object-contain rounded-md bg-white p-0.5 border border-[#A7F3D0]" />
                  <span className="font-bold">Pulse Heart Centre • Betiahata, Gorakhpur</span>
                </div>

                <h3 className="text-3xl sm:text-5xl font-semibold text-[#064E3B] leading-tight tracking-tight">
                  Modern Outpatient &amp; Ambulatory Cardiac Pavilion
                </h3>

                <p className="text-sm sm:text-base text-slate-700 font-medium leading-relaxed">
                  Directed by <strong className="text-[#064E3B] font-bold">Dr. Prakash Chand Shahi</strong> (DM Cardiology PGIMER, MD KGMU). Equipped for diagnostic ECGs, 2D Echocardiography, angiogram CD reviews, and personalized post-stent clinical maintenance.
                </p>

                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#064E3B] via-[#047857] to-[#047857] hover:from-[#022C22] hover:to-[#064E3B] text-white text-xs font-semibold uppercase tracking-wider shadow-md shadow-[#064E3B]/20 hover:shadow-xl transition-all"
                  >
                    <span>Book OPD Appointment</span>
                    <ArrowRight className="w-3.5 h-3.5 text-amber-300" />
                  </Link>

                  <a
                    href="tel:+919876543210"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white hover:bg-[#F0FDF4] text-[#064E3B] border-2 border-[#A7F3D0] text-xs font-semibold uppercase tracking-wider transition-all shadow-xs"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#047857]" />
                    <span>Call +91 98765 43210</span>
                  </a>
                </div>
              </div>

              {/* Real Architectural Hospital Video Presentation */}
              <div className="w-full lg:w-[420px] rounded-2xl overflow-hidden shrink-0">
                <SectionCinematicVideo
                  type="about-hospital"
                  videoUrl="/videos/about-hospital.mp4"
                  styleVariant="video-card"
                  posterImage="/images/hospital-facility.jpg"
                  title="Pulse Heart Centre Campus"
                  subtitle="Betiahata Medical Corridor"
                  specs="Outpatient Cardiology • Ambulatory Wing"
                  aspectRatio="aspect-[16/11]"
                />
              </div>

            </div>
          </div>

          {/* Overlapping Modular Cards with Rich Visuals */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {/* Box 1: Clinic Location & Landmark */}
            <div className="p-7 rounded-[2rem] bg-white border-2 border-[#A7F3D0]/60 shadow-layered hover:shadow-layered-hover hover:border-[#A7F3D0] transition-all duration-500 hover:-translate-y-1.5 flex flex-col justify-between text-left group">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <div className="p-2 rounded-xl bg-[#F0FDF4] text-[#047857] border border-[#A7F3D0]">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-mono uppercase tracking-wider text-[#064E3B] font-bold">
                    Betiahata Medical Corridor
                  </span>
                </div>
                <div className="h-28 rounded-2xl overflow-hidden mb-3 border border-[#A7F3D0]/70 relative">
                  <img src="/images/pulse-betiahata-campus.jpg" alt="Betiahata Campus" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-2.5">
                    <span className="text-[11px] font-bold text-white">Central Betiahata Access</span>
                  </div>
                </div>
                <p className="text-xs text-slate-700 font-medium leading-relaxed">
                  {clinic.name}, {clinic.address}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-[#A7F3D0]/40 text-xs text-[#064E3B] font-bold flex items-center justify-between">
                <span>Gorakhpur Central Access</span>
                <span className="font-mono text-[#047857]">PIN 273001</span>
              </div>
            </div>

            {/* Box 2: Consultation Schedule Table & Lead Clinician */}
            <div className="p-7 rounded-[2rem] bg-gradient-to-b from-white via-[#F0FDF4]/30 to-white border-2 border-[#A7F3D0]/60 shadow-layered hover:shadow-layered-hover hover:border-[#A7F3D0] transition-all duration-500 hover:-translate-y-1.5 flex flex-col justify-between text-left group">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <div className="p-2 rounded-xl bg-[#F0FDF4] text-[#047857] border border-[#A7F3D0]">
                    <Clock className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-mono uppercase tracking-wider text-[#064E3B] font-bold">
                    OPD Consultation Hours
                  </span>
                </div>
                <div className="flex items-center gap-2.5 p-2 rounded-xl bg-white border border-[#A7F3D0] mb-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#064E3B] to-[#047857] border border-[#A7F3D0] flex items-center justify-center text-[#A7F3D0] shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-[#064E3B] block">Dr. Prakash Chand Shahi</span>
                    <span className="text-[10px] text-[#047857] font-semibold block">Mon–Sat • 10 AM – 8 PM</span>
                  </div>
                </div>
                <div className="space-y-1.5 text-xs">
                  <div className="flex justify-between py-1 border-b border-[#A7F3D0]/40">
                    <span className="text-slate-600 font-medium">Mon — Sat</span>
                    <span className="text-[#064E3B] font-bold font-mono">10:00 AM – 8:00 PM</span>
                  </div>
                  <div className="flex justify-between py-1 text-slate-400">
                    <span>Sunday</span>
                    <span className="text-rose-600 font-bold font-mono">Emergencies Prioritized</span>
                  </div>
                </div>
              </div>
              <div className="mt-4 pt-3 border-t border-[#A7F3D0]/40 text-xs text-[#064E3B] font-bold">
                Daily Scheduled Walk-ins &amp; Triage
              </div>
            </div>

            {/* Box 3: Diagnostic Modalities Available */}
            <div className="p-7 rounded-[2rem] bg-white border-2 border-[#A7F3D0]/60 shadow-layered hover:shadow-layered-hover hover:border-[#A7F3D0] transition-all duration-500 hover:-translate-y-1.5 flex flex-col justify-between text-left group">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <div className="p-2 rounded-xl bg-[#F0FDF4] text-[#047857] border border-[#A7F3D0]">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-mono uppercase tracking-wider text-[#064E3B] font-bold">
                    Outpatient Diagnostics
                  </span>
                </div>
                <div className="h-28 rounded-2xl overflow-hidden mb-3 border border-[#A7F3D0]/70 relative">
                  <img src="/images/echo-doppler-scan.jpg" alt="Echo Doppler Scan" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-2.5">
                    <span className="text-[11px] font-bold text-white">2D Echo &amp; Angio CD Review</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-1">
                  <span className="text-[10px] font-bold bg-[#F0FDF4] text-[#064E3B] px-2 py-0.5 rounded border border-[#A7F3D0]/60">12-Lead ECG</span>
                  <span className="text-[10px] font-bold bg-[#F0FDF4] text-[#064E3B] px-2 py-0.5 rounded border border-[#A7F3D0]/60">2D Echo Doppler</span>
                  <span className="text-[10px] font-bold bg-[#F0FDF4] text-[#064E3B] px-2 py-0.5 rounded border border-[#A7F3D0]/60">Angiogram CD</span>
                </div>
              </div>
              <div className="mt-4 pt-3 border-t border-[#A7F3D0]/40 text-xs text-[#064E3B] font-bold">
                Accredited Diagnostic Standards
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
