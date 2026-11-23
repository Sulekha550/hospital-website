import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Calendar, ArrowRight, ShieldCheck, Activity, Award, 
  Clock, Phone, HeartPulse, ChevronRight, Stethoscope 
} from 'lucide-react';
import SculpturalCardiac3D from './SculpturalCardiac3D';
import { PULSE_DATA } from '../data/pulseData';

export default function HeroSection() {
  return (
    <section className="relative min-h-[92vh] lg:min-h-screen flex items-center pt-28 pb-16 lg:pt-32 lg:pb-20 bg-gradient-to-b from-[#F7FAFC] via-[#F0F7FB] to-[#F7FAFC] overflow-hidden select-none">
      
      {/* Subtle Architectural Lighting & Ambient Medical Atmosphere */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[550px] bg-gradient-to-tr from-[#A9D8E9]/25 via-[#2788B8]/15 to-transparent rounded-full blur-[130px]" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#AFA0E9]/15 rounded-full blur-[110px]" />
        <div 
          className="absolute inset-0 opacity-[0.03]" 
          style={{ backgroundImage: `radial-gradient(#173C59 1px, transparent 1px)`, backgroundSize: '32px 32px' }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        
        {/* Top Status Accreditation Pill */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-8 lg:mb-10">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white border border-slate-200/90 shadow-xs">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[11px] font-bold tracking-widest uppercase text-[#173C59]">
              PULSE Heart Centre • Betiahata, Gorakhpur
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs font-semibold text-slate-600 bg-white/70 backdrop-blur-md px-4 py-1.5 rounded-full border border-slate-200/80 shadow-xs">
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

        {/* Master Split-Screen Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column (7 Cols): Editorial Headline, Pedigree & Direct Actions */}
          <div className="lg:col-span-7 space-y-6 lg:space-y-8 text-left">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#173C59]/5 border border-[#173C59]/15">
              <Award className="w-3.5 h-3.5 text-[#2788B8]" />
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#173C59]">
                Super-Specialty Cardiology • Betiahata, Gorakhpur
              </span>
            </div>

            {/* Main Editorial Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#0F172A] leading-[1.05]">
                Restoring Rhythms. <br />
                <span className="bg-gradient-to-r from-[#4C1D95] via-[#2563EB] to-[#0284C7] bg-clip-text text-transparent">
                  Preserving Every Heartbeat.
                </span>
              </h1>
              <p className="text-base sm:text-lg font-semibold text-slate-700 pt-2">
                Directed by <strong className="text-[#173C59]">Dr. Prakash Chand Shahi</strong> (DM Cardiology PGIMER, MD KGMU Lucknow).
              </p>
            </div>

            {/* Supporting Clinical Summary */}
            <p className="text-sm sm:text-base text-slate-600 max-w-xl leading-relaxed">
              Over 22 years of ethical interventional devotion, wrist-first transradial angioplasty, flat-panel digital Cath Lab diagnostics, and dedicated cardiac-trauma critical care in Eastern UP.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                to="/book-appointment"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#173C59] hover:bg-[#0E2538] text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-[#173C59]/25 hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 group"
              >
                <Calendar className="w-4 h-4 text-[#A9D8E9] group-hover:scale-110 transition-transform" />
                <span>Book Priority Consultation</span>
                <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
              </Link>

              <a
                href="tel:+919876543211"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white hover:bg-slate-50 text-[#173C59] font-bold text-xs uppercase tracking-wider border border-slate-200/90 shadow-xs hover:shadow-md transition-all duration-300"
              >
                <Phone className="w-3.5 h-3.5 text-[#2788B8]" />
                <span>Direct OPD Helpline</span>
              </a>
            </div>

            {/* Quick Proof Badges */}
            <div className="pt-4 border-t border-slate-200/80 grid grid-cols-3 gap-4 max-w-lg">
              <div>
                <div className="text-xl sm:text-2xl font-extrabold text-[#173C59]">22+ Yrs</div>
                <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">Clinical Mastery</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-extrabold text-[#2788B8]">12,000+</div>
                <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">Cath Procedures</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-extrabold text-emerald-700">99.4%</div>
                <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">Radial Success</div>
              </div>
            </div>

          </div>

          {/* Right Column (5 Cols): Layered Architectural Card & Interactive 3D Beating Heart Stage */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            
            <div className="relative w-full max-w-[480px] rounded-3xl overflow-hidden bg-white border border-slate-200/90 shadow-[0_25px_60px_-15px_rgba(23,60,89,0.18)] p-2.5">
              
              {/* Architectural Backdrop Photo */}
              <div className="relative h-[200px] sm:h-[230px] rounded-2xl overflow-hidden">
                <img
                  src="/images/hospital-facility.jpg"
                  alt="PULSE Heart Centre Facility"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#173C59]/85 via-[#173C59]/30 to-transparent" />
                
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white">
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-widest text-[#A9D8E9]">
                      Advanced Medical Infrastructure
                    </span>
                    <h3 className="text-sm font-bold text-white leading-tight">
                      Flat-Panel Cath Lab & Level-3 ICU
                    </h3>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-white/20 backdrop-blur-md text-[10px] font-bold text-white border border-white/30">
                    Active Facility
                  </span>
                </div>
              </div>

              {/* 3D Anatomical Beating Heart Telemetry Stage */}
              <div className="relative -mt-8 mx-1 p-3.5 rounded-2xl bg-white/98 backdrop-blur-xl border border-slate-200/90 shadow-md">
                
                <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
                    <span className="text-xs font-bold text-[#173C59] tracking-wider uppercase">
                      Live Telemetry • 72 BPM Sinus
                    </span>
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-sky-50 text-[#2788B8] border border-sky-100">
                    3D Cardiac Stage
                  </span>
                </div>

                {/* Interactive 3D Canvas */}
                <div className="h-[210px] sm:h-[230px] w-full relative flex items-center justify-center">
                  <SculpturalCardiac3D className="w-full h-full" />
                </div>

                {/* Sub-telemetry Pill */}
                <div className="pt-2 flex items-center justify-between text-[11px] font-semibold text-slate-600">
                  <span>Dr. Prakash Chand Shahi (Director)</span>
                  <span className="text-emerald-700 font-bold">● Wrist-First Protocol</span>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
