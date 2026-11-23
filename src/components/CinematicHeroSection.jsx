import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Calendar, ArrowRight, ShieldCheck, Activity, Award,
  Clock, Phone, HeartPulse, ChevronRight, Sparkles, CheckCircle2, Stethoscope,
  Play, Film, Radio
} from 'lucide-react';
import { PULSE_DATA } from '../data/pulseData';
import CinematicVideoPlayerModal from './CinematicVideoPlayerModal';
import SectionCinematicVideo from './SectionCinematicVideo';
import DoctorPlaceholder from './DoctorPlaceholder';

/**
 * CinematicHeroSection
 * Completely redesigned architectural hero:
 * - Brand-new clean architectural pearl background with subtle blueprint lines & soft medical azure lighting
 * - Split-screen editorial composition: monumental typography + real hospital architectural photography
 * - Video-Type Experience: Active 4K drone Ken Burns zoom + live broadcast HUD + interactive 4K video tour player
 * - Sleek linear metrics strip (ZERO boxed cards)
 */
export default function CinematicHeroSection() {
  const { doctor, clinic } = PULSE_DATA;
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  return (
    <section className="relative min-h-[92vh] lg:min-h-screen flex flex-col justify-between pt-28 pb-12 px-4 sm:px-6 lg:px-12 overflow-hidden select-none bg-[#FAFBF9]">

      {/* =========================================================================
          HIGH-DEFINITION VISIBLE BACKGROUND ARTWORK: AMBIENT VIDEO + BIOMETRIC CAD & MEDICAL WAVES
         ========================================================================= */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">

        {/* 1. VISIBLE AMBIENT 4K HOSPITAL ARCHITECTURE VIDEO LOOP */}
        <div className="absolute inset-0 -z-20 overflow-hidden opacity-30 mix-blend-multiply">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            className="w-full h-full object-cover filter contrast-125 saturate-125"
          >
            <source src="/videos/hero-architecture.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-[#FAFBF9]/80 via-transparent to-[#FAFBF9]" />
        </div>

        {/* 2. Luminous Ambient Atmospheric Spheres (Mint + Emerald + Teal) */}
        <div className="absolute -top-32 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-[#A7F3D0]/45 via-[#34D399]/35 to-transparent rounded-full blur-[110px] animate-float-1" />
        <div className="absolute top-1/2 -left-32 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-[#064E3B]/20 via-[#34D399]/25 to-transparent rounded-full blur-[120px] animate-float-2" />
        <div className="absolute -bottom-24 right-1/4 w-[600px] h-[600px] bg-gradient-to-t from-[#A7F3D0]/35 via-[#F0FDF4]/30 to-transparent rounded-full blur-[100px] animate-float-3" />

        {/* 3. Crisp Medical Dot-Matrix Grid */}
        <div className="absolute inset-0 bg-[radial-gradient(#05966935_2px,transparent_2px)] bg-[size:32px_32px] opacity-40 [mask-image:radial-gradient(ellipse_85%_75%_at_50%_35%,#000_80%,transparent_100%)]" />

        {/* 4. Hairline Architectural Blueprint Lines & Crosshairs */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#064E3B15_1.5px,transparent_1.5px),linear-gradient(to_bottom,#064E3B15_1.5px,transparent_1.5px)] bg-[size:5rem_5rem] [mask-image:radial-gradient(ellipse_80%_70%_at_50%_35%,#000_70%,transparent_100%)]" />

        {/* CAD Alignment Crosshairs */}
        <div className="absolute top-28 left-12 text-[#064E3B]/40 font-mono text-sm select-none animate-pulse">+</div>
        <div className="absolute top-28 right-12 text-[#064E3B]/40 font-mono text-sm select-none animate-pulse">+</div>
        <div className="absolute bottom-36 left-12 text-[#064E3B]/40 font-mono text-sm select-none animate-pulse">+</div>
        <div className="absolute bottom-36 right-12 text-[#064E3B]/40 font-mono text-sm select-none animate-pulse">+</div>

        {/* 5. Layered Flowing Organic Medical Waves (Mint + Emerald + Teal) */}
        <svg className="absolute inset-0 w-full h-full opacity-55 animate-wave-flow" viewBox="0 0 1440 900" fill="none" preserveAspectRatio="none">
          <defs>
            <linearGradient id="heroWave1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#064E3B" stopOpacity="0.35" />
              <stop offset="50%" stopColor="#059669" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#34D399" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="heroWave2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#A7F3D0" stopOpacity="0.35" />
              <stop offset="50%" stopColor="#047857" stopOpacity="0.20" />
              <stop offset="100%" stopColor="#064E3B" stopOpacity="0" />
            </linearGradient>
          </defs>

          <path
            d="M-100,280 C320,150 540,420 920,290 C1200,200 1380,380 1550,260 L1550,900 L-100,900 Z"
            fill="url(#heroWave1)"
          />
          <path
            d="M-50,450 C280,320 620,550 1020,410 C1280,330 1420,490 1550,420 L1550,900 L-50,900 Z"
            fill="url(#heroWave2)"
          />
        </svg>

        {/* 6. Prominent Rotating Biometric Telemetry Rings (Continuous Rotation) */}
        <div className="absolute top-1/2 -right-24 -translate-y-1/2 w-[640px] h-[640px] rounded-full border-2 border-[#064E3B]/30 hidden lg:block">
          {/* Outer Dashed Rotating Ring (Clockwise) */}
          <div className="absolute inset-6 rounded-full border-2 border-dashed border-[#059669]/50 animate-radar-sweep" />
          {/* Middle Precision Ring */}
          <div className="absolute inset-20 rounded-full border border-[#064E3B]/40 flex items-center justify-center">
            <div className="absolute inset-x-0 h-[1.5px] bg-[#10B981]/40" />
            <div className="absolute inset-y-0 w-[1.5px] bg-[#10B981]/40" />
          </div>
          {/* Inner Concentric Target Ring (Counter-Clockwise) */}
          <div className="absolute inset-36 rounded-full border-2 border-[#059669]/50 border-t-emerald-600 animate-rotate-reverse" />
          <div className="absolute inset-52 rounded-full border-2 border-dashed border-amber-500/60 animate-cardiac-beat" />
        </div>

        {/* 7. Active Animated Cardiac ECG Line with Infinite Flowing Stroke Motion */}
        <div className="absolute bottom-24 left-0 right-0 z-0">
          <svg className="w-full h-36 opacity-85" viewBox="0 0 1440 120" fill="none" preserveAspectRatio="none">
            <path
              d="M0,60 L240,60 L270,60 L280,30 L295,95 L310,10 L325,85 L335,60 L380,60 L540,60 L570,60 L580,25 L595,100 L610,15 L625,90 L635,60 L680,60 L920,60 L950,60 L960,30 L975,95 L990,10 L1005,85 L1015,60 L1060,60 L1260,60 L1290,60 L1300,25 L1315,100 L1330,15 L1345,90 L1355,60 L1440,60"
              stroke="#047857"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray="400"
              className="animate-flow-dash"
            />
            {/* Glowing Blip on Cardiac Peaks */}
            <circle cx="310" cy="10" r="6" fill="#059669" className="animate-ping" />
            <circle cx="610" cy="15" r="6" fill="#059669" className="animate-ping" />
            <circle cx="990" cy="10" r="6" fill="#059669" className="animate-ping" />
            <circle cx="1330" cy="15" r="6" fill="#059669" className="animate-ping" />
          </svg>

          {/* Traveling Laser Beam on Wave */}
          <div className="absolute inset-x-0 top-1/2 h-1 bg-gradient-to-r from-transparent via-[#059669] to-transparent animate-laser-h opacity-75 blur-xs pointer-events-none" />
        </div>

        {/* 7. Visible Technical Coordinate Stamps & Telemetry Badges */}
        <div className="absolute top-32 left-8 font-mono text-[11px] text-[#064E3B]/60 tracking-widest hidden md:block uppercase space-y-1 bg-white/70 backdrop-blur-xs p-3 rounded-xl border border-[#A7F3D0]">
          <div className="flex items-center gap-2 font-bold text-[#064E3B]">
            <span className="w-2 h-2 rounded-full bg-[#064E3B] animate-pulse" />
            <span>GEO: 26.7606° N • 83.3732° E [GORAKHPUR]</span>
          </div>
          <div>CATH-LAB SIEMENS ARTIS ZEE • HEPA-14</div>
          <div className="text-[10px] text-[#047857] font-semibold">CARDIAC TELEMETRY • HR: 72 BPM • CODE BLUE 24/7</div>
        </div>

        {/* Subtle Watermark Headline */}
        <div className="absolute top-1/2 left-4 -translate-y-1/2 text-[12vw] font-black text-[#064E3B]/[0.03] tracking-tighter uppercase pointer-events-none select-none">
          PULSE
        </div>

      </div>

      <div className="max-w-7xl mx-auto w-full flex-1 flex flex-col justify-center relative z-10 py-6 sm:py-10">

        {/* Top Status & Accreditation Strip */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white border border-[#A7F3D0] shadow-xs">
            <span className="w-2.5 h-2.5 rounded-full bg-[#064E3B] animate-pulse" />
            <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#064E3B]">
              NABH Standards • Tertiary Multispeciality Hospital
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs font-semibold text-slate-700 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full border border-[#A7F3D0] shadow-xs">
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#059669]" />
              <span>OPD: 08:30 AM – 08:30 PM</span>
            </span>
            <span className="text-slate-300">•</span>
            <a href="tel:+919876543210" className="flex items-center gap-1.5 text-[#047857] font-bold hover:underline">
              <span className="w-1.5 h-1.5 rounded-full bg-[#047857] animate-ping" />
              <span>24/7 STEMI Code-Blue: +91 98765 43210</span>
            </a>
          </div>
        </div>

        {/* Master Hero Split Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

          {/* Left Column (7 cols): Editorial Typography & Direct Clinical Actions */}
          <div className="lg:col-span-7 space-y-6 text-left">

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F0FDF4] text-[#064E3B] border border-[#34D399] text-xs font-bold uppercase tracking-[0.22em] shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#059669]" />
              <span>Apex Cardiac &amp; Surgical Care • Betiahata, Gorakhpur</span>
            </div>

            <div className="space-y-3">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-[#064E3B] tracking-[-0.035em] leading-[1.04]">
                Restoring Rhythms. <br />
                <span className="font-serif italic font-normal text-[#059669]">Preserving Every Heartbeat.</span>
              </h1>

              {/* Doctor Spotlight Banner with Stethoscope Crest (No Stock Human Face) */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <div className="flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-white/95 backdrop-blur-md border-2 border-[#A7F3D0] shadow-md">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#064E3B] via-[#047857] to-[#059669] border-2 border-emerald-300 shadow-sm flex items-center justify-center text-white shrink-0">
                    <Stethoscope className="w-6 h-6 stroke-[1.8]" />
                  </div>
                  <div className="text-left">
                    <div className="flex items-center gap-1.5">
                      <span className="text-sm font-extrabold text-[#064E3B]">Dr. Prakash Chand Shahi</span>
                      <ShieldCheck className="w-4 h-4 text-[#059669]" />
                    </div>
                    <span className="text-[11px] font-mono font-bold text-[#047857] block">
                      DM Cardiology (PGIMER) • MD (KGMU Lucknow)
                    </span>
                  </div>
                </div>

                <span className="px-3.5 py-2 rounded-xl bg-[#F0FDF4] border border-[#A7F3D0] text-[#064E3B] text-xs font-bold font-mono">
                  22+ Yrs Senior Consultant
                </span>
              </div>
            </div>

            {/* Minimal Punchy Summary Status Chips (Zero Wall of Text) */}
            <div className="flex flex-wrap items-center gap-2 pt-1 font-mono text-xs font-bold">
              <span className="bg-[#F0FDF4] text-[#064E3B] px-3.5 py-1.5 rounded-full border border-[#A7F3D0]">Wrist Radial Stenting</span>
              <span className="bg-white text-slate-900 px-3.5 py-1.5 rounded-full border border-[#A7F3D0] shadow-xs">Siemens Flat-Panel Cine</span>
              <span className="bg-[#F0FDF4] text-[#064E3B] px-3.5 py-1.5 rounded-full border border-[#34D399]">24/7 STEMI Emergency</span>
            </div>

            {/* 4 Interactive Visual Feature Chips */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1">
              <div className="p-2.5 rounded-xl bg-white border border-[#A7F3D0] shadow-xs text-left">
                <span className="text-xs font-mono font-bold text-[#064E3B] block">15,000+</span>
                <span className="text-[10px] font-bold text-slate-800 uppercase tracking-tight block">Procedures Done</span>
              </div>
              <div className="p-2.5 rounded-xl bg-white border border-[#A7F3D0] shadow-xs text-left">
                <span className="text-xs font-mono font-bold text-[#047857] block">Wrist-First</span>
                <span className="text-[10px] font-bold text-slate-800 uppercase tracking-tight block">Zero Groin Pain</span>
              </div>
              <div className="p-2.5 rounded-xl bg-white border border-[#A7F3D0] shadow-xs text-left">
                <span className="text-xs font-mono font-bold text-[#059669] block">PGIMER &amp; KGMU</span>
                <span className="text-[10px] font-bold text-slate-800 uppercase tracking-tight block">Apex Pedigree</span>
              </div>
              <div className="p-2.5 rounded-xl bg-white border border-[#34D399] shadow-xs text-left">
                <span className="text-xs font-mono font-bold text-[#064E3B] block">&lt; 45 Min</span>
                <span className="text-[10px] font-bold text-slate-800 uppercase tracking-tight block">Door-To-Balloon</span>
              </div>
            </div>

            {/* Direct Action Row */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                to="/book-appointment"
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-gradient-to-r from-[#064E3B] via-[#047857] to-[#059669] hover:from-[#022C22] hover:to-[#064E3B] text-white font-bold text-xs uppercase tracking-wider shadow-xl shadow-[#064E3B]/25 hover:shadow-2xl transition-all duration-300 hover:-translate-y-0.5 group border border-emerald-400/30"
              >
                <Calendar className="w-4 h-4 text-amber-300 group-hover:scale-110 transition-transform" />
                <span>Consult Dr. Prakash Chand Shahi</span>
                <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
              </Link>

              <a
                href="tel:+919876543210"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-white hover:bg-[#F0FDF4] text-[#064E3B] font-bold text-xs uppercase tracking-wider border border-[#34D399] shadow-sm hover:shadow-md transition-all duration-300"
              >
                <Phone className="w-4 h-4 text-[#064E3B]" />
                <span>Emergency 24/7 Helpline</span>
              </a>
            </div>

            {/* Trust Highlights Strip (Zero Cards - Clean Flow) */}
            <div className="pt-3 flex flex-wrap items-center gap-6 text-xs text-slate-700 font-medium border-t border-slate-200/80">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#064E3B]" />
                <span>22+ Years in Gorakhpur</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#047857]" />
                <span>Siemens Flat-Panel Cath Lab</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#059669]" />
                <span>NABH Accredited Safety</span>
              </div>
            </div>

          </div>

          {/* Right Column (5 cols): Layered Doctor Spotlight & Clinical Video Stage */}
          <div className="lg:col-span-5 relative">

            {/* Primary Frame: Doctor Photo Upload Aperture (No Stock Human Face) */}
            <DoctorPlaceholder
              aspectRatio="aspect-[4/5]"
              showUploadTrigger={true}
            />

            {/* Overlapping Secondary Video Frame: Hospital Facility / Cath-Lab Live Broadcast */}
            <div
              onClick={() => setIsVideoModalOpen(true)}
              className="absolute -bottom-8 -left-8 sm:-left-10 w-52 sm:w-60 rounded-2xl overflow-hidden border-4 border-[#A7F3D0] shadow-2xl bg-slate-950 aspect-[16/10] hidden sm:block group/sub hover:scale-105 transition-all duration-300 z-30 cursor-pointer"
            >
              <video
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                className="w-full h-full object-cover filter contrast-125"
              >
                <source src="/videos/facilities-walkthrough.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute top-2 left-2 z-10 flex items-center gap-1 px-2 py-0.5 rounded-full bg-black/60 backdrop-blur-md text-[8px] font-mono font-bold text-[#A7F3D0] border border-[#059669]/30">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-ping" />
                <span>CATH-LAB LIVE</span>
              </div>
              <div className="absolute bottom-2 left-2 right-2 text-white z-10 flex items-center justify-between text-left">
                <div>
                  <span className="text-[8px] font-mono font-bold text-amber-300 block uppercase">
                    SIEMENS ARTIS ZEE
                  </span>
                  <span className="text-[10px] font-bold block leading-tight">
                    Fluoroscopy Suite
                  </span>
                </div>
                <div className="w-6 h-6 rounded-full bg-[#10B981 flex items-center justify-center text-slate-950">
                  <Play className="w-3 h-3 fill-current ml-0.5" />
                </div>
              </div>
            </div>

            {/* Floating Top Right Pedigree Seal */}
            <div className="absolute -top-4 -right-4 px-4 py-2.5 rounded-2xl bg-white border-2 border-[#A7F3D0] shadow-xl text-left hidden sm:flex items-center gap-2.5 z-20">
              <div className="w-8 h-8 rounded-xl bg-[#F0FDF4] flex items-center justify-center text-[#047857]">
                <HeartPulse className="w-4 h-4 text-[#047857] animate-pulse" />
              </div>
              <div>
                <span className="text-[9px] font-bold uppercase tracking-wider text-[#047857] block">
                  APEX CARDIAC LEADER
                </span>
                <span className="text-xs font-extrabold text-[#064E3B] block">
                  PGIMER &amp; KGMU
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* =========================================================================
          BOTTOM METRICS STRIP: SEAMLESS DIVIDED RIBBON (ZERO CARDS)
         ========================================================================= */}
      <div className="max-w-7xl mx-auto w-full pt-8 border-t border-slate-200/90 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-slate-200">

          <div className="px-4 py-2 text-left">
            <span className="text-2xl sm:text-4xl font-extrabold text-[#064E3B] tracking-tight block">22+</span>
            <span className="text-xs text-slate-700 font-semibold uppercase tracking-wider block">Years of Dedication</span>
            <span className="text-[11px] text-slate-500">Unbroken clinical leadership in eastern UP</span>
          </div>

          <div className="px-4 py-2 text-left">
            <span className="text-2xl sm:text-4xl font-extrabold text-[#047857] tracking-tight block">12,000+</span>
            <span className="text-xs text-slate-700 font-semibold uppercase tracking-wider block">Cath Interventions</span>
            <span className="text-[11px] text-slate-500">Angioplasty, stenting & pacemaker implants</span>
          </div>

          <div className="px-4 py-2 text-left">
            <span className="text-2xl sm:text-4xl font-extrabold text-[#047857] tracking-tight block">99.4%</span>
            <span className="text-xs text-slate-700 font-semibold uppercase tracking-wider block">Radial Patency Rate</span>
            <span className="text-[11px] text-slate-500">Wrist-first access with zero groin immobilization</span>
          </div>

          <div className="px-4 py-2 text-left">
            <span className="text-2xl sm:text-4xl font-extrabold text-rose-600 tracking-tight block">&lt; 45 Min</span>
            <span className="text-xs text-slate-700 font-semibold uppercase tracking-wider block">STEMI Door-To-Balloon</span>
            <span className="text-[11px] text-slate-500">Round-the-clock emergency Code-Blue response</span>
          </div>

        </div>
      </div>

      {/* Interactive 4K Cinematic Video Player Modal */}
      <CinematicVideoPlayerModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
      />

    </section>
  );
}
