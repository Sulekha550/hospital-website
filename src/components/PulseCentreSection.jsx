import React from 'react';
import { Building2, MapPin, Clock, Calendar, CheckCircle, Navigation, ArrowRight, ShieldCheck, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PULSE_DATA } from '../data/pulseData';
import SectionCinematicVideo from './SectionCinematicVideo';
import SectionBackgroundMotion from './SectionBackgroundMotion';

export default function PulseCentreSection({ onBookClick }) {
  const { clinic, doctor } = PULSE_DATA;

  return (
    <section id="centre" className="relative py-16 lg:py-24 overflow-hidden select-none bg-gradient-to-b from-[#FFF8F5] via-[#FAF5F0] to-[#FFF3EE] rounded-[3rem] border border-orange-200/60 shadow-lg my-12">

      {/* Bespoke Betiahata Medical Quarter Blueprint & Asymmetrical Planar Cards */}
      <SectionBackgroundMotion variant="hospital-pulse-centre" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">

        {/* Master Facility Banner */}
        <div className="space-y-8">

          {/* Schematic Banner */}
          <div className="rounded-[2.5rem] bg-white/80 backdrop-blur-xl text-slate-900 p-8 sm:p-12 shadow-2xl border-2 border-orange-200/90 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-orange-200/30 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-rose-200/20 rounded-full blur-3xl pointer-events-none" />

            <div className="flex flex-col lg:flex-row items-center justify-between gap-8 relative z-10">

              <div className="space-y-4 max-w-xl text-left">
                <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-orange-200 text-xs font-mono font-medium text-[#C2410C] shadow-xs">
                  <img src="/images/p.webp" alt="Pulse Logo" className="w-5 h-5 object-contain rounded-md bg-white p-0.5 border border-orange-200" />
                  <span className="font-bold">Pulse Heart Centre • Betiahata, Gorakhpur</span>
                </div>

                <h3 className="text-3xl sm:text-5xl font-semibold text-slate-950 leading-tight tracking-tight">
                  Modern Outpatient &amp; Ambulatory Cardiac Pavilion
                </h3>

                <p className="text-sm sm:text-base text-slate-700 font-medium leading-relaxed">
                  Directed by <strong className="text-[#BE123C] font-bold">Dr. Prakash Chand Shahi</strong> (DM Cardiology PGIMER, MD KGMU). Equipped for diagnostic ECGs, 2D Echocardiography, angiogram CD reviews, and personalized post-stent clinical maintenance.
                </p>

                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#BE123C] via-[#E11D48] to-[#FB923C] hover:from-[#9F1239] hover:to-[#BE123C] text-white text-xs font-semibold uppercase tracking-wider shadow-md shadow-rose-600/20 hover:shadow-xl transition-all"
                  >
                    <span>Book OPD Appointment</span>
                    <ArrowRight className="w-3.5 h-3.5 text-amber-200" />
                  </Link>

                  <a
                    href="tel:+919876543210"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white hover:bg-orange-50 text-[#BE123C] border-2 border-orange-200 text-xs font-semibold uppercase tracking-wider transition-all shadow-xs"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#EA580C]" />
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
            <div className="p-7 rounded-[2rem] bg-white/85 backdrop-blur-xl border-2 border-orange-200/90 shadow-layered hover:shadow-layered-hover hover:border-orange-400 hover:bg-white/95 transition-all duration-500 hover:-translate-y-1.5 flex flex-col justify-between text-left group">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <div className="p-2 rounded-xl bg-orange-50 text-[#EA580C] border border-orange-200">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-mono uppercase tracking-wider text-[#C2410C] font-bold">
                    Betiahata Medical Corridor
                  </span>
                </div>
                <div className="h-28 rounded-2xl overflow-hidden mb-3 border border-orange-200/80 relative">
                  <img src="/images/pulse-betiahata-campus.jpg" alt="Betiahata Campus" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-2.5">
                    <span className="text-[11px] font-bold text-white">Central Betiahata Access</span>
                  </div>
                </div>
                <p className="text-xs text-slate-700 font-medium leading-relaxed">
                  {clinic.name}, {clinic.address}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-orange-200/60 text-xs text-slate-900 font-bold flex items-center justify-between">
                <span>Gorakhpur Central Access</span>
                <span className="font-mono text-[#EA580C]">PIN 273001</span>
              </div>
            </div>

            {/* Box 2: Consultation Schedule Table & Lead Clinician */}
            <div className="p-7 rounded-[2rem] bg-white/85 backdrop-blur-xl border-2 border-orange-200/90 shadow-layered hover:shadow-layered-hover hover:border-orange-400 hover:bg-white/95 transition-all duration-500 hover:-translate-y-1.5 flex flex-col justify-between text-left group">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <div className="p-2 rounded-xl bg-orange-50 text-[#EA580C] border border-orange-200">
                    <Clock className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-mono uppercase tracking-wider text-[#C2410C] font-bold">
                    OPD Consultation Hours
                  </span>
                </div>
                <div className="flex items-center gap-2.5 p-2 rounded-xl bg-white/90 border border-orange-200 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#BE123C] to-[#FB923C] border border-rose-200 flex items-center justify-center text-white shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-900 block">Dr. Prakash Chand Shahi</span>
                    <span className="text-[10px] text-[#C2410C] font-semibold block">Mon–Sat • 10 AM – 8 PM</span>
                  </div>
                </div>
                <div className="space-y-1.5 text-xs">
                  <div className="flex justify-between py-1 border-b border-orange-200/60">
                    <span className="text-slate-600 font-medium">Mon — Sat</span>
                    <span className="text-slate-900 font-bold font-mono">10:00 AM – 8:00 PM</span>
                  </div>
                  <div className="flex justify-between py-1 text-slate-500">
                    <span>Sunday</span>
                    <span className="text-[#EA580C] font-bold font-mono">Emergencies Prioritized</span>
                  </div>
                </div>
              </div>
              <div className="mt-4 pt-3 border-t border-orange-200/60 text-xs text-slate-900 font-bold">
                Daily Scheduled Walk-ins &amp; Triage
              </div>
            </div>

            {/* Box 3: Diagnostic Modalities Available */}
            <div className="p-7 rounded-[2rem] bg-white/85 backdrop-blur-xl border-2 border-orange-200/90 shadow-layered hover:shadow-layered-hover hover:border-orange-400 hover:bg-white/95 transition-all duration-500 hover:-translate-y-1.5 flex flex-col justify-between text-left group">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <div className="p-2 rounded-xl bg-orange-50 text-[#EA580C] border border-orange-200">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-mono uppercase tracking-wider text-[#C2410C] font-bold">
                    Outpatient Diagnostics
                  </span>
                </div>
                <div className="h-28 rounded-2xl overflow-hidden mb-3 border border-orange-200/80 relative">
                  <img src="/images/echo-doppler-scan.jpg" alt="Echo Doppler Scan" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-2.5">
                    <span className="text-[11px] font-bold text-white">2D Echo &amp; Angio CD Review</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-1">
                  <span className="text-[10px] font-bold bg-orange-50 text-[#C2410C] px-2 py-0.5 rounded border border-orange-200">12-Lead ECG</span>
                  <span className="text-[10px] font-bold bg-orange-50 text-[#C2410C] px-2 py-0.5 rounded border border-orange-200">2D Echo Doppler</span>
                  <span className="text-[10px] font-bold bg-orange-50 text-[#C2410C] px-2 py-0.5 rounded border border-orange-200">Angiogram CD</span>
                </div>
              </div>
              <div className="mt-4 pt-3 border-t border-orange-200/60 text-xs text-slate-900 font-bold">
                Accredited Diagnostic Standards
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
