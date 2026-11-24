import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Award, ShieldCheck, Building2, Users, HeartPulse,
  Target, CheckCircle2, ArrowRight, Clock, MapPin, Sparkles, Calendar, Play, Stethoscope, Phone
} from 'lucide-react';
import { PULSE_DATA } from '../data/pulseData';
import SectionCinematicVideo from '../components/SectionCinematicVideo';
import DoctorPlaceholder from '../components/DoctorPlaceholder';
import ThreeDImageCard from '../components/ThreeDImageCard';

export default function AboutPage() {
  const milestones = [
    { year: "2002", title: "Foundation of Clinical Devotion", desc: "Initiation of specialized cardiovascular care in Betiahata, Gorakhpur with compassionate bedside ethics." },
    { year: "2007", title: "Apex Medical Training at KGMU", desc: "MD General Medicine residency at King George's Medical University, Lucknow, solidifying clinical diagnostic depth." },
    { year: "2013", title: "Super-Specialty DM from PGIMER", desc: "Completion of DM Cardiology at PGIMER Chandigarh, introducing high-volume transradial intervention to eastern UP." },
    { year: "2018", title: "Flat-Panel Digital Cath Lab Commissioned", desc: "Installation of the Siemens Artis Zee digital catheterization suite, performing emergency primary angioplasties 24/7." },
    { year: "2023", title: "Next-Gen Cardiac Care Expansion", desc: "Advanced 24/7 Cardiac Emergency, Intra-Vascular Ultrasound (IVUS), Optical Coherence Tomography (OCT), and High-Dependency Cardiac ICU." }
  ];

  return (
    <div className="relative pt-24 pb-24 select-none bg-[#FAFBFD] overflow-hidden">

      {/* =========================================================================
          HERO SECTION: MATCHED 100% WITH HOME HERO ARCHITECTURE & MOTION
         ========================================================================= */}
      <section className="relative min-h-[90vh] lg:min-h-screen flex flex-col justify-between pt-16 pb-12 px-4 sm:px-6 lg:px-12 overflow-hidden select-none bg-[#FAFBFD]">

        {/* Ambient Video & Motion Background System */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">

          {/* 1. Ambient 4K Hospital Interior Video Loop */}
          <div className="absolute inset-0 -z-20 overflow-hidden opacity-30 mix-blend-multiply">
            <video
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              className="w-full h-full object-cover filter contrast-125 saturate-125"
            >
              <source src="/videos/about-hospital.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-b from-[#FAFBFD]/80 via-transparent to-[#FAFBFD]" />
          </div>

          {/* 2. Luminous Ambient Atmospheric Spheres (Mint + Emerald + Teal) */}
          <div className="absolute -top-32 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-[#FECDD3]/45 via-[#38BDF8]/35 to-transparent rounded-full blur-[110px] animate-float-1" />
          <div className="absolute top-1/2 -left-32 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-[#991B1B]/20 via-[#38BDF8]/25 to-transparent rounded-full blur-[120px] animate-float-2" />
          <div className="absolute -bottom-24 right-1/4 w-[600px] h-[600px] bg-gradient-to-t from-[#FECDD3]/35 via-[#FEF2F2]/30 to-transparent rounded-full blur-[100px] animate-float-3" />

          {/* 3. Crisp Medical Dot-Matrix Grid */}
          <div className="absolute inset-0 bg-[radial-gradient(#0284C735_2px,transparent_2px)] bg-[size:32px_32px] opacity-40 [mask-image:radial-gradient(ellipse_85%_75%_at_50%_35%,#000_80%,transparent_100%)]" />

          {/* 4. Hairline Architectural Blueprint Lines & Crosshairs */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#991B1B15_1.5px,transparent_1.5px),linear-gradient(to_bottom,#991B1B15_1.5px,transparent_1.5px)] bg-[size:5rem_5rem] [mask-image:radial-gradient(ellipse_80%_70%_at_50%_35%,#000_70%,transparent_100%)]" />

          {/* CAD Alignment Crosshairs */}
          <div className="absolute top-28 left-12 text-[#991B1B]/40 font-mono text-sm select-none animate-pulse">+</div>
          <div className="absolute top-28 right-12 text-[#991B1B]/40 font-mono text-sm select-none animate-pulse">+</div>
          <div className="absolute bottom-36 left-12 text-[#991B1B]/40 font-mono text-sm select-none animate-pulse">+</div>
          <div className="absolute bottom-36 right-12 text-[#991B1B]/40 font-mono text-sm select-none animate-pulse">+</div>

          {/* 5. Layered Flowing Organic Medical Waves */}
          <svg className="absolute inset-0 w-full h-full opacity-55 animate-wave-flow" viewBox="0 0 1440 900" fill="none" preserveAspectRatio="none">
            <defs>
              <linearGradient id="aboutWave1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#991B1B" stopOpacity="0.35" />
                <stop offset="50%" stopColor="#0284C7" stopOpacity="0.25" />
                <stop offset="100%" stopColor="#38BDF8" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="aboutWave2" x1="100%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#FECDD3" stopOpacity="0.35" />
                <stop offset="50%" stopColor="#B91C1C" stopOpacity="0.20" />
                <stop offset="100%" stopColor="#991B1B" stopOpacity="0" />
              </linearGradient>
            </defs>

            <path
              d="M-100,280 C320,150 540,420 920,290 C1200,200 1380,380 1550,260 L1550,900 L-100,900 Z"
              fill="url(#aboutWave1)"
            />
            <path
              d="M-50,450 C280,320 620,550 1020,410 C1280,330 1420,490 1550,420 L1550,900 L-50,900 Z"
              fill="url(#aboutWave2)"
            />
          </svg>

          {/* 6. Rotating Biometric Telemetry Rings */}
          <div className="absolute top-1/2 -right-24 -translate-y-1/2 w-[640px] h-[640px] rounded-full border-2 border-[#991B1B]/30 hidden lg:block">
            <div className="absolute inset-6 rounded-full border-2 border-dashed border-[#0284C7]/50 animate-radar-sweep" />
            <div className="absolute inset-20 rounded-full border border-[#991B1B]/40 flex items-center justify-center">
              <div className="absolute inset-x-0 h-[1.5px] bg-[#0EA5E9]/40" />
              <div className="absolute inset-y-0 w-[1.5px] bg-[#0EA5E9]/40" />
            </div>
            <div className="absolute inset-36 rounded-full border-2 border-[#0284C7]/50 border-t-rose-600 animate-rotate-reverse" />
          </div>

          {/* 7. Active Flowing Cardiac ECG Line with Pulse Blips */}
          <div className="absolute bottom-24 left-0 right-0 z-0">
            <svg className="w-full h-36 opacity-85" viewBox="0 0 1440 120" fill="none" preserveAspectRatio="none">
              <path
                d="M0,60 L240,60 L270,60 L280,30 L295,95 L310,10 L325,85 L335,60 L380,60 L540,60 L570,60 L580,25 L595,100 L610,15 L625,90 L635,60 L680,60 L920,60 L950,60 L960,30 L975,95 L990,10 L1005,85 L1015,60 L1060,60 L1260,60 L1290,60 L1300,25 L1315,100 L1330,15 L1345,90 L1355,60 L1440,60"
                stroke="#B91C1C"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeDasharray="400"
                className="animate-flow-dash"
              />
              <circle cx="310" cy="10" r="6" fill="#0284C7" className="animate-ping" />
              <circle cx="610" cy="15" r="6" fill="#0284C7" className="animate-ping" />
              <circle cx="990" cy="10" r="6" fill="#0284C7" className="animate-ping" />
              <circle cx="1330" cy="15" r="6" fill="#0284C7" className="animate-ping" />
            </svg>
            <div className="absolute inset-x-0 top-1/2 h-1 bg-gradient-to-r from-transparent via-[#0284C7] to-transparent animate-laser-h opacity-75 blur-xs pointer-events-none" />
          </div>

          {/* Watermark Headline */}
          <div className="absolute top-1/2 left-4 -translate-y-1/2 text-[12vw] font-black text-[#991B1B]/[0.03] tracking-tighter uppercase pointer-events-none select-none">
            PULSE
          </div>

        </div>

        {/* Hero Content Grid */}
        <div className="max-w-7xl mx-auto w-full flex-1 flex flex-col justify-center relative z-10 py-4 sm:py-8">

          {/* Top Status Strip */}
          <div className="flex items-center justify-end mb-6 sm:mb-8">
            <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs font-semibold text-slate-700 bg-white/95 backdrop-blur-md px-3.5 sm:px-4 py-1.5 rounded-full border border-[#FECDD3] shadow-xs">
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#0284C7]" />
                <span>OPD: 08:30 AM – 08:30 PM</span>
              </span>
              <span className="text-slate-300 hidden sm:inline">•</span>
              <a href="tel:+919876543210" className="flex items-center gap-1.5 text-[#B91C1C] font-bold hover:underline">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B91C1C] animate-ping" />
                <span>24/7 Helpline: +91 98765 43210</span>
              </a>
            </div>
          </div>

          {/* Master Split-Screen Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

            {/* Left Column (7 cols): Editorial Typography & Direct Clinical Actions */}
            <div className="lg:col-span-7 space-y-6 text-left">

              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FEF2F2] text-[#991B1B] border border-[#38BDF8] text-xs font-bold uppercase tracking-[0.22em] shadow-xs">
                <Sparkles className="w-3.5 h-3.5 text-[#0284C7]" />
                <span>Apex Clinical Pedigree • Betiahata, Gorakhpur</span>
              </div>

              <div className="space-y-3">
                <h1 className="text-3xl sm:text-5xl lg:text-7xl font-extrabold text-[#991B1B] tracking-[-0.035em] leading-[1.04]">
                  Clinical Devotion. <br />
                  <span className="font-serif italic font-normal text-[#0284C7]">22+ Years of Cardiology Mastery.</span>
                </h1>
              </div>

              {/* Mobile-Only Doctor Portrait: Appears right below heading on mobile */}
              <div className="block lg:hidden my-4 max-w-sm mx-auto relative">
                <DoctorPlaceholder
                  aspectRatio="aspect-[4/5]"
                />
              </div>

              {/* All Details & Actions: Flows BELOW image on mobile */}
              <div className="space-y-6">
                {/* Doctor Spotlight Banner with Stethoscope Crest */}
                <div className="pt-1 flex flex-wrap items-center gap-3">
                  <div className="flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-white/95 backdrop-blur-md border-2 border-[#FECDD3] shadow-md w-full sm:w-auto">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#991B1B] via-[#B91C1C] to-[#DC2626] border-2 border-rose-300 shadow-sm flex items-center justify-center text-white shrink-0">
                      <Stethoscope className="w-6 h-6 stroke-[1.8]" />
                    </div>
                    <div className="text-left">
                      <div className="flex items-center gap-1.5">
                        <span className="text-sm font-extrabold text-[#991B1B]">Dr. Prakash Chand Shahi</span>
                        <ShieldCheck className="w-4 h-4 text-[#0284C7]" />
                      </div>
                      <span className="text-[11px] font-mono font-bold text-[#B91C1C] block">
                        DM Cardiology (PGIMER) • MD (KGMU Lucknow)
                      </span>
                    </div>
                  </div>

                  <span className="px-3.5 py-2 rounded-xl bg-[#FEF2F2] border border-[#FECDD3] text-[#991B1B] text-xs font-bold font-mono">
                    22+ Yrs Senior Consultant
                  </span>
                </div>

                {/* Minimal Summary Status Chips */}
                <div className="flex flex-wrap items-center gap-2 pt-1 font-mono text-xs font-bold">
                  <span className="bg-[#FEF2F2] text-[#991B1B] px-3.5 py-1.5 rounded-full border border-[#FECDD3]">Transradial Pioneer</span>
                  <span className="bg-white text-slate-900 px-3.5 py-1.5 rounded-full border border-[#FECDD3] shadow-xs">Siemens Flat-Panel Cath Lab</span>
                  <span className="bg-[#FEF2F2] text-[#991B1B] px-3.5 py-1.5 rounded-full border border-[#38BDF8]">15,000+ Interventions</span>
                </div>

                {/* 4 Interactive Visual Feature Chips */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1">
                  <div className="p-2.5 rounded-xl bg-white border border-[#FECDD3] shadow-xs text-left">
                    <span className="text-xs font-mono font-bold text-[#991B1B] block">15,000+</span>
                    <span className="text-[10px] font-bold text-slate-800 uppercase tracking-tight block">Procedures Done</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white border border-[#FECDD3] shadow-xs text-left">
                    <span className="text-xs font-mono font-bold text-[#B91C1C] block">Wrist-First</span>
                    <span className="text-[10px] font-bold text-slate-800 uppercase tracking-tight block">Zero Groin Pain</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white border border-[#FECDD3] shadow-xs text-left">
                    <span className="text-xs font-mono font-bold text-[#0284C7] block">PGIMER &amp; KGMU</span>
                    <span className="text-[10px] font-bold text-slate-800 uppercase tracking-tight block">Apex Pedigree</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white border border-[#38BDF8] shadow-xs text-left">
                    <span className="text-xs font-mono font-bold text-[#991B1B] block">&lt; 45 Min</span>
                    <span className="text-[10px] font-bold text-slate-800 uppercase tracking-tight block">Door-To-Balloon</span>
                  </div>
                </div>

                {/* Direct Action Row */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                  <Link
                    to="/book-appointment"
                    className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-gradient-to-r from-[#991B1B] via-[#B91C1C] to-[#DC2626] hover:from-[#7F1D1D] hover:to-[#991B1B] text-white font-bold text-xs uppercase tracking-wider shadow-xl shadow-[#991B1B]/25 hover:shadow-2xl transition-all duration-300 hover:-translate-y-0.5 group border border-rose-400/30 text-center"
                  >
                    <Calendar className="w-4 h-4 text-amber-300 group-hover:scale-110 transition-transform" />
                    <span>Consult Dr. Prakash Chand Shahi</span>
                    <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
                  </Link>

                  <a
                    href="tel:+919876543210"
                    className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-white hover:bg-[#FEF2F2] text-[#991B1B] font-bold text-xs uppercase tracking-wider border border-[#38BDF8] shadow-sm hover:shadow-md transition-all duration-300 text-center"
                  >
                    <Phone className="w-4 h-4 text-[#991B1B]" />
                    <span>Emergency 24/7 Helpline</span>
                  </a>
                </div>

                {/* Trust Highlights Strip */}
                <div className="pt-3 flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-slate-700 font-medium border-t border-slate-200/80">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#991B1B]" />
                    <span>22+ Years in Gorakhpur</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#B91C1C]" />
                    <span>Siemens Flat-Panel Cath Lab</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#0284C7]" />
                    <span>NABH Accredited Safety</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Column (5 cols): Layered Doctor Spotlight (Desktop Only) */}
            <div className="hidden lg:block lg:col-span-5 relative">
              <DoctorPlaceholder
                aspectRatio="aspect-[4/5]"
              />

              {/* Floating Top Right Pedigree Seal */}
              <div className="absolute -top-4 -right-4 px-4 py-2.5 rounded-2xl bg-white border-2 border-[#FECDD3] shadow-xl text-left hidden sm:flex items-center gap-2.5 z-20">
                <div className="w-8 h-8 rounded-xl bg-[#FEF2F2] flex items-center justify-center text-[#B91C1C]">
                  <HeartPulse className="w-4 h-4 text-[#B91C1C] animate-pulse" />
                </div>
                <div>
                  <span className="text-[9px] font-bold uppercase tracking-wider text-[#B91C1C] block">
                    APEX CARDIAC LEADER
                  </span>
                  <span className="text-xs font-extrabold text-[#991B1B] block">
                    PGIMER &amp; KGMU
                  </span>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Bottom Metrics Strip: Divided Ribbon */}
        <div className="max-w-7xl mx-auto w-full pt-8 border-t border-slate-200/90 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-slate-200">
            <div className="px-4 py-2 text-left">
              <span className="text-2xl sm:text-4xl font-extrabold text-[#991B1B] tracking-tight block">22+</span>
              <span className="text-xs text-slate-700 font-semibold uppercase tracking-wider block">Years of Dedication</span>
              <span className="text-[11px] text-slate-500">Unbroken clinical leadership in eastern UP</span>
            </div>

            <div className="px-4 py-2 text-left">
              <span className="text-2xl sm:text-4xl font-extrabold text-[#B91C1C] tracking-tight block">15,000+</span>
              <span className="text-xs text-slate-700 font-semibold uppercase tracking-wider block">Cath Interventions</span>
              <span className="text-[11px] text-slate-500">Angioplasty, stenting &amp; pacemaker implants</span>
            </div>

            <div className="px-4 py-2 text-left">
              <span className="text-2xl sm:text-4xl font-extrabold text-[#B91C1C] tracking-tight block">99.4%</span>
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

      </section>

      {/* Panoramic Hospital Interior Video Console Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="max-w-5xl mx-auto"
        >
          <SectionCinematicVideo
            type="about-hospital"
            videoUrl="/videos/about-hospital.mp4"
            styleVariant="panoramic-stage"
            posterImage="/images/hospital-facility.jpg"
            title="Hospital Interior &amp; Clinical Ward Walkthrough"
            subtitle="4K Interior Steady-Cam • 60 FPS"
            specs="14,000 Sq. Ft. Clinical Facility • Zero Particulate HEPA Filtered"
            aspectRatio="aspect-[16/8] sm:aspect-[21/9]"
          />
        </motion.div>
      </section>

      <div className="relative z-10">
        <section className="relative py-16 overflow-hidden border-y border-[#FECDD3]/60 shadow-xs bg-gradient-to-b from-white via-[#FEF2F2]/30 to-white">
          {/* Animated Hexagonal Medical Lattice Layer */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
            <svg className="absolute inset-0 w-full h-full opacity-30" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="bioHexPattern" width="56" height="96" patternUnits="userSpaceOnUse" patternTransform="rotate(15)">
                  <path d="M28,0 L56,16 L56,48 L28,64 L0,48 L0,16 Z" fill="none" stroke="#B91C1C" strokeWidth="1.2" />
                  <path d="M28,96 L56,80 L56,48 L28,64 L0,48 L0,80 Z" fill="none" stroke="#B91C1C" strokeWidth="0.8" strokeDasharray="3 3" />
                  <circle cx="28" cy="32" r="3" fill="#0284C7" opacity="0.6" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#bioHexPattern)" />
            </svg>
            <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-[#0284C7]/20 rounded-full blur-[100px] animate-pulse" />
            <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-teal-400/20 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1.5s' }} />
            {/* Rotating CAD Coordinate Rings */}
            <div className="absolute top-10 left-10 w-72 h-72 rounded-full border-2 border-[#B91C1C]/30 hidden md:block animate-gentle-cw" />
            <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full border-2 border-dashed border-[#0EA5E9]/35 hidden md:block animate-gentle-ccw" />
            {/* Sweeping laser scanning beam */}
            <div className="absolute left-0 right-0 h-[2.5px] bg-gradient-to-r from-transparent via-[#0EA5E9] to-transparent shadow-[0_0_15px_#0284C7] opacity-50 animate-laser-sweep" />
            {/* Floating medical crosses */}
            <div className="absolute top-12 left-12 text-[#0284C7]/35 font-mono text-base font-bold animate-medical-cross-1 select-none">+</div>
            <div className="absolute bottom-12 right-16 text-[#0284C7]/35 font-mono text-base font-bold animate-medical-cross-2 select-none">+</div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-xl mx-auto mb-10 space-y-2">
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#B91C1C] bg-[#FEF2F2]/80 px-3.5 py-1 rounded-full">Ethical Framework</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#991B1B]">Core Pillars of Clinical Practice</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

              <div className="space-y-3">
                <ThreeDImageCard
                  src="/images/cath-lab.jpg"
                  image="/images/cath-lab.jpg"
                  alt="Cath Lab Mission"
                  badge="PILLAR 01"
                  title="Medical Mission"
                  stat="Zero Compromise"
                  substat="Tertiary Interventions"
                  aspectRatio="aspect-[16/10]"
                  laserBeam={true}
                />
                <div className="flex flex-wrap gap-1.5 justify-center">
                  <span className="text-[10px] font-semibold bg-white border border-[#FECDD3] text-[#991B1B] px-2.5 py-1 rounded-md">Precision Angioplasty</span>
                  <span className="text-[10px] font-semibold bg-[#FEF2F2] text-[#B91C1C] px-2.5 py-1 rounded-md">CD Review</span>
                </div>
              </div>

              <div className="space-y-3">
                <ThreeDImageCard
                  src="/images/doctor-bedside-consult.jpg"
                  image="/images/doctor-bedside-consult.jpg"
                  alt="Bedside Consult"
                  badge="PILLAR 02"
                  title="Clinical Philosophy"
                  stat="Unhurried Bedside"
                  substat="Ethical Guidance"
                  aspectRatio="aspect-[16/10]"
                  laserBeam={true}
                />
                <div className="flex flex-wrap gap-1.5 justify-center">
                  <span className="text-[10px] font-semibold bg-white border border-[#FECDD3] text-[#991B1B] px-2.5 py-1 rounded-md">Direct Dialogue</span>
                  <span className="text-[10px] font-semibold bg-[#FEF2F2] text-[#B91C1C] px-2.5 py-1 rounded-md">Clear Explanations</span>
                </div>
              </div>

              <div className="space-y-3">
                <ThreeDImageCard
                  src="/images/operation-theatre-laminar.jpg"
                  image="/images/operation-theatre-laminar.jpg"
                  alt="Sterility Protocols"
                  badge="PILLAR 03"
                  title="Evidence Protocols"
                  stat="NABH Sterility"
                  substat="ACC / AHA Standards"
                  aspectRatio="aspect-[16/10]"
                  laserBeam={true}
                />
                <div className="flex flex-wrap gap-1.5 justify-center">
                  <span className="text-[10px] font-semibold bg-white border border-[#FECDD3] text-[#991B1B] px-2.5 py-1 rounded-md">Laminar Airflow</span>
                  <span className="text-[10px] font-semibold bg-[#FEF2F2] text-[#B91C1C] px-2.5 py-1 rounded-md">Low Fluoroscopy</span>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 3. Milestones Timeline with Dynamic Vertical Neon Laser Cadence & Chronometer Background */}
        <section className="relative py-24 overflow-hidden bg-gradient-to-b from-[#FAFBFD] via-[#FEF2F2]/50 to-[#FAFBFD]">
          {/* Animated Chronology Background Systems */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
            {/* Luminous Glow Spheres */}
            <div className="absolute top-1/4 -left-20 w-[650px] h-[650px] bg-gradient-to-tr from-[#991B1B]/20 via-[#0284C7]/15 to-transparent rounded-full blur-[140px] animate-pulse-glow" />
            <div className="absolute bottom-10 -right-20 w-[650px] h-[650px] bg-gradient-to-bl from-[#0EA5E9]/20 via-[#FEF2F2]/40 to-transparent rounded-full blur-[140px] animate-float-2" />
            
            {/* Precision Blueprint Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#991B1B18_1px,transparent_1px),linear-gradient(to_bottom,#991B1B18_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_85%_70%_at_50%_40%,#000_75%,transparent_100%)] pointer-events-none" />

            {/* Continuous Rotating CAD Technical Rings */}
            <div className="absolute top-16 -left-20 w-96 h-96 rounded-full border-2 border-[#B91C1C]/30 hidden md:block animate-gentle-cw" />
            <div className="absolute top-24 -left-12 w-72 h-72 rounded-full border-2 border-dashed border-[#0EA5E9]/40 hidden md:block animate-gentle-ccw" />
            <div className="absolute bottom-16 -right-20 w-96 h-96 rounded-full border-2 border-[#B91C1C]/25 hidden md:block animate-gentle-ccw" />
            <div className="absolute bottom-24 -right-12 w-72 h-72 rounded-full border-2 border-dashed border-rose-600/35 hidden md:block animate-gentle-cw" />

            {/* Active Sweeping Fluoroscopy Laser Beam */}
            <div className="absolute inset-x-0 h-[2.5px] bg-gradient-to-r from-transparent via-[#0EA5E9] to-transparent shadow-[0_0_20px_#0284C7] opacity-50 animate-laser-sweep pointer-events-none" />

            {/* Floating Medical Crosshairs (+) */}
            <div className="absolute top-16 left-12 text-[#0284C7]/40 font-mono text-base font-bold animate-medical-cross-1 select-none">+</div>
            <div className="absolute top-36 right-16 text-[#0284C7]/40 font-mono text-base font-bold animate-medical-cross-2 select-none">+</div>
            <div className="absolute bottom-20 left-20 text-[#0284C7]/35 font-mono text-base font-bold animate-medical-cross-2 select-none">+</div>
            <div className="absolute bottom-32 right-32 text-[#0284C7]/35 font-mono text-base font-bold animate-medical-cross-1 select-none">+</div>

            {/* Center Flowing Vascular/ECG Timeline Lifeline Stream */}
            <svg className="absolute left-1/2 top-0 -translate-x-1/2 h-full w-[800px] opacity-45 pointer-events-none" viewBox="0 0 800 1200" fill="none">
              <path d="M400,0 L400,1200" stroke="#B91C1C" strokeWidth="2.5" strokeDasharray="8 8" />
              <path d="M370,100 C430,220 370,340 400,460 C430,580 370,700 400,820 C430,940 370,1060 400,1180" stroke="#0284C7" strokeWidth="2.5" strokeDasharray="300" className="animate-flow-dash" />
              {/* Pulsing Cardiac Nodes at Each Milestone Height */}
              <circle cx="400" cy="180" r="10" fill="#0EA5E9" className="animate-ping" />
              <circle cx="400" cy="390" r="10" fill="#0284C7" className="animate-ping" />
              <circle cx="400" cy="600" r="10" fill="#0EA5E9" className="animate-ping" />
              <circle cx="400" cy="810" r="10" fill="#B91C1C" className="animate-ping" />
              <circle cx="400" cy="1020" r="10" fill="#0EA5E9" className="animate-ping" />
            </svg>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-xl mx-auto mb-14 space-y-2">
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#B91C1C] bg-[#FEF2F2] border border-[#FECDD3] px-3.5 py-1 rounded-full">Chronology</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#991B1B]">Two Decades of Clinical Milestones</h2>
            </div>

            <div className="space-y-6 max-w-4xl mx-auto">
              {milestones.map((m, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -32 : 32 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="p-6 sm:p-7 rounded-3xl bg-white/95 backdrop-blur-md border-2 border-[#FECDD3] shadow-md hover:shadow-xl transition-all flex flex-col sm:flex-row items-start sm:items-center gap-6 text-left hover:-translate-y-0.5 group"
                >
                  <div className="flex items-center gap-3 shrink-0">
                    <span className="text-3xl font-extrabold font-mono text-[#B91C1C] w-20 group-hover:text-[#0284C7] transition-colors">
                      {m.year}
                    </span>
                    <span className="w-3 h-3 rounded-full bg-[#0EA5E9] animate-ping" />
                  </div>
                  <div className="border-l-2 border-[#FECDD3] pl-6 space-y-1">
                    <h3 className="text-base font-bold text-[#991B1B]">{m.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed font-medium">{m.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Direct Consultation Callout with Doctor Spotlight & Pulsing Sonar Waves */}
        <section className="relative py-20 text-center max-w-5xl mx-auto px-4 overflow-hidden">
          {/* Animated Ambient Rings & Laser around the CTA container */}
          <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden" aria-hidden="true">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-[#0284C7]/20 via-[#0EA5E9]/15 to-transparent rounded-full blur-[140px] animate-pulse-glow" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] rounded-full border border-[#0284C7]/25 animate-gentle-cw" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] rounded-full border-2 border-dashed border-[#0EA5E9]/30 animate-gentle-ccw" />
            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[2px] bg-gradient-to-r from-transparent via-[#0EA5E9] to-transparent shadow-[0_0_15px_#0284C7] opacity-40 animate-laser-sweep" />
          </div>

          <div className="relative p-8 sm:p-14 rounded-[2.5rem] bg-gradient-to-br from-white via-[#FEF2F2]/70 to-white text-slate-900 shadow-2xl border-2 border-[#FECDD3] space-y-6 overflow-hidden">
            {/* Animated Radar Sonar Rings in Background inside Card */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] rounded-full border-2 border-[#0284C7]/20 animate-ping" style={{ animationDuration: '4s' }} />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-[#0284C7]/30 animate-radar-sweep" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[240px] h-[240px] rounded-full border border-[#0EA5E9]/40" />
              {/* Flowing ECG Waveform Ribbon */}
              <svg className="absolute bottom-0 left-0 right-0 w-full h-16 opacity-35 pointer-events-none" viewBox="0 0 800 64" fill="none" preserveAspectRatio="none">
                <path d="M0,32 L200,32 L220,10 L235,55 L250,5 L265,45 L280,32 L500,32 L520,10 L535,55 L550,5 L565,45 L580,32 L800,32" stroke="#0284C7" strokeWidth="2.5" strokeDasharray="300" className="animate-flow-dash-fast" />
              </svg>
            </div>

            <div className="relative z-10 space-y-5">
              <div className="flex items-center justify-center gap-3">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#991B1B] via-[#B91C1C] to-[#B91C1C] border-2 border-[#FECDD3] shadow-md flex items-center justify-center text-[#FECDD3] shrink-0">
                  <Stethoscope className="w-7 h-7 stroke-[1.8]" />
                </div>
                <div className="text-left">
                  <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#991B1B] font-bold block">
                    Direct Outpatient Access • Gorakhpur
                  </span>
                  <span className="text-sm font-extrabold text-[#991B1B] block">
                    Dr. Prakash Chand Shahi • DM Cardiology PGIMER
                  </span>
                </div>
              </div>

              <h3 className="text-2xl sm:text-4xl font-extrabold text-[#991B1B]">
                Consult <span className="font-serif italic font-normal text-[#0284C7]">Dr. Prakash Chand Shahi</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-700 max-w-lg mx-auto font-medium leading-relaxed">
                Pulse Heart Centre, Betiahata, Gorakhpur. OPD consultations run Monday to Saturday, 10:00 AM – 8:00 PM.
              </p>
              <div className="pt-2 flex items-center justify-center gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#991B1B] via-[#B91C1C] to-[#B91C1C] hover:from-[#7F1D1D] hover:to-[#991B1B] text-[#FECDD3] text-xs font-bold uppercase tracking-wider shadow-lg shadow-[#991B1B]/25 transition-all hover:scale-105 border border-[#FECDD3]/40"
                >
                  <Calendar className="w-4 h-4 text-[#38BDF8]" />
                  <span>Request Priority OPD Pass</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
