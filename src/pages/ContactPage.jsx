import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Calendar, Phone, MapPin, Clock, Navigation, Mail, Sparkles, Play,
  Stethoscope, ShieldCheck, HeartPulse, CheckCircle2, ArrowRight
} from 'lucide-react';
import AppointmentExperienceSection from '../components/AppointmentExperienceSection';
import { PULSE_DATA } from '../data/pulseData';
import SectionCinematicVideo from '../components/SectionCinematicVideo';
import DoctorPlaceholder from '../components/DoctorPlaceholder';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] },
});

export default function ContactPage() {
  const { clinic, doctor } = PULSE_DATA;

  const infoCards = [
    {
      icon: Navigation,
      color: 'bg-[#FEF2F2] text-[#991B1B]',
      title: 'How to Reach Us',
      text: 'Located in the central Betiahata medical hub, 10 minutes from Gorakhpur Railway Station and Golghar commercial centre.',
    },
    {
      icon: Clock,
      color: 'bg-[#FEF2F2] text-[#B91C1C]',
      title: 'Arrival & Token Protocol',
      text: 'Please arrive 15 minutes prior to your scheduled slot. Bring prior ECGs, echocardiography reports, and angiogram CDs.',
    },
    {
      icon: Phone,
      color: 'bg-rose-50 text-rose-700',
      title: 'Emergency Cardiac Triage',
      text: 'Patients presenting with acute crushing chest pain, diaphoresis, or sudden syncope are granted immediate priority triage.',
    },
  ];

  return (
    <div className="relative select-none bg-[#FAFBFD] overflow-hidden pt-24">

      {/* =========================================================================
          HERO SECTION: MATCHED 100% WITH HOME & ABOUT HERO ARCHITECTURE
         ========================================================================= */}
      <section className="relative min-h-[90vh] lg:min-h-screen flex flex-col justify-between pt-16 pb-12 px-4 sm:px-6 lg:px-12 overflow-hidden select-none bg-[#FAFBFD]">

        {/* Ambient Video & Motion Background System */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">

          {/* 1. Ambient 4K Location & Hospital Video Loop */}
          <div className="absolute inset-0 -z-20 overflow-hidden opacity-30 mix-blend-multiply">
            <video
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              className="w-full h-full object-cover filter contrast-125 saturate-125"
            >
              <source src="/videos/contact-location.mp4" type="video/mp4" />
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
              <linearGradient id="contactWave1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#991B1B" stopOpacity="0.35" />
                <stop offset="50%" stopColor="#0284C7" stopOpacity="0.25" />
                <stop offset="100%" stopColor="#38BDF8" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="contactWave2" x1="100%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#FECDD3" stopOpacity="0.35" />
                <stop offset="50%" stopColor="#B91C1C" stopOpacity="0.20" />
                <stop offset="100%" stopColor="#991B1B" stopOpacity="0" />
              </linearGradient>
            </defs>

            <path
              d="M-100,280 C320,150 540,420 920,290 C1200,200 1380,380 1550,260 L1550,900 L-100,900 Z"
              fill="url(#contactWave1)"
            />
            <path
              d="M-50,450 C280,320 620,550 1020,410 C1280,330 1420,490 1550,420 L1550,900 L-50,900 Z"
              fill="url(#contactWave2)"
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
                <span>Direct Outpatient Gateway • Betiahata, Gorakhpur</span>
              </div>

              <div className="space-y-3">
                <h1 className="text-3xl sm:text-5xl lg:text-7xl font-extrabold text-[#991B1B] tracking-[-0.035em] leading-[1.04]">
                  Direct Consultation. <br />
                  <span className="font-serif italic font-normal text-[#0284C7]">With Dr. Prakash Chand Shahi.</span>
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
                    OPD Mon–Sat • 10 AM – 8 PM
                  </span>
                </div>

                {/* Minimal Summary Status Chips */}
                <div className="flex flex-wrap items-center gap-2 pt-1 font-mono text-xs font-bold">
                  <span className="bg-[#FEF2F2] text-[#991B1B] px-3.5 py-1.5 rounded-full border border-[#FECDD3]">Betiahata Medical Corridor</span>
                  <span className="bg-white text-slate-900 px-3.5 py-1.5 rounded-full border border-[#FECDD3] shadow-xs">Same-Day Angio CD Review</span>
                  <span className="bg-[#FEF2F2] text-[#991B1B] px-3.5 py-1.5 rounded-full border border-[#38BDF8]">Emergency 24/7 Triage</span>
                </div>

                {/* 4 Interactive Visual Feature Chips */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1">
                  <div className="p-2.5 rounded-xl bg-white border border-[#FECDD3] shadow-xs text-left">
                    <span className="text-xs font-mono font-bold text-[#991B1B] block">OPD Room 101</span>
                    <span className="text-[10px] font-bold text-slate-800 uppercase tracking-tight block">Consultation Wing</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white border border-[#FECDD3] shadow-xs text-left">
                    <span className="text-xs font-mono font-bold text-[#B91C1C] block">Mon — Sat</span>
                    <span className="text-[10px] font-bold text-slate-800 uppercase tracking-tight block">10:00 AM – 8:00 PM</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white border border-[#FECDD3] shadow-xs text-left">
                    <span className="text-xs font-mono font-bold text-[#0284C7] block">Betiahata</span>
                    <span className="text-[10px] font-bold text-slate-800 uppercase tracking-tight block">Central Gorakhpur</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white border border-[#38BDF8] shadow-xs text-left">
                    <span className="text-xs font-mono font-bold text-[#991B1B] block">&lt; 45 Min</span>
                    <span className="text-[10px] font-bold text-slate-800 uppercase tracking-tight block">Door-To-Balloon</span>
                  </div>
                </div>

                {/* Direct Action Row */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                  <a
                    href="#appointment"
                    className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-gradient-to-r from-[#991B1B] via-[#B91C1C] to-[#DC2626] hover:from-[#7F1D1D] hover:to-[#991B1B] text-white font-bold text-xs uppercase tracking-wider shadow-xl shadow-[#991B1B]/25 hover:shadow-2xl transition-all duration-300 hover:-translate-y-0.5 group border border-rose-400/30 text-center"
                  >
                    <Calendar className="w-4 h-4 text-amber-300 group-hover:scale-110 transition-transform" />
                    <span>Book Priority OPD Pass</span>
                    <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
                  </a>

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

      {/* Location Video & Campus Walkthrough Console */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.95, delay: 0.15 }}
          className="max-w-5xl mx-auto w-full"
        >
          <SectionCinematicVideo
            type="contact-location"
            videoUrl="/videos/contact-location.mp4"
            styleVariant="panoramic-stage"
            posterImage="/images/hospital-facility.jpg"
            title="Pulse Heart Centre Betiahata Campus"
            subtitle="GPS Navigation • 26.7606° N, 83.3732° E"
            specs="Centrally Located in Gorakhpur • 10 Min from Railway Station"
            aspectRatio="aspect-[16/8] sm:aspect-[21/9]"
          />
        </motion.div>
      </section>

      {/* ===================================================================
          APPOINTMENT SECTION
         =================================================================== */}
      <div id="appointment" className="relative bg-[#FAFBFD]">
        {/* Subtle pattern */}
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(#B91C1C08_1.5px,transparent_1.5px)] bg-[size:30px_30px]" />
        <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(to_right,#991B1B06_1px,transparent_1px),linear-gradient(to_bottom,#991B1B06_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        {/* Ambient orbs */}
        <div className="absolute -top-24 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-[#0284C7]/12 to-transparent rounded-full blur-[130px] pointer-events-none animate-orb-1" />
        <div className="absolute top-1/2 -left-24 w-[400px] h-[400px] bg-gradient-to-tr from-[#991B1B]/10 to-transparent rounded-full blur-[120px] pointer-events-none animate-orb-2" />
        <div className="relative z-10">
          <AppointmentExperienceSection />
        </div>
      </div>

      {/* ===================================================================
          INFO CARDS + BOTTOM SECTION WITH AMBIENT VIDEO
         =================================================================== */}
      <div className="relative pb-24 bg-[#FAFBFD] overflow-hidden">

        {/* Ambient Video Background Layer */}
        <div className="absolute inset-0 z-0 overflow-hidden opacity-20 mix-blend-multiply pointer-events-none">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            className="w-full h-full object-cover scale-105"
          >
            <source src="/videos/contact-location.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-[#FAFBFD]/80 via-transparent to-[#FAFBFD]/90" />
        </div>

        {/* Animated emerald wave separator */}
        <div className="relative h-20 overflow-hidden mb-4">
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1440 80" fill="none" preserveAspectRatio="none">
            <path
              d="M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,80 L0,80 Z"
              fill="#B91C1C" fillOpacity="0.18"
              className="animate-wave-flow"
            />
            <path
              d="M0,55 C200,20 500,70 800,45 C1100,20 1300,60 1440,50 L1440,80 L0,80 Z"
              fill="#D97706" fillOpacity="0.12"
              className="animate-wave-flow"
              style={{ animationDelay: '1.5s' }}
            />
          </svg>
        </div>

        {/* Animated SVG medical pattern lines */}
        <svg className="absolute inset-0 w-full h-full opacity-45 pointer-events-none" viewBox="0 0 1440 600" fill="none" preserveAspectRatio="none">
          <path d="M0,100 Q360,50 720,100 Q1080,150 1440,100" stroke="#B91C1C" strokeWidth="2" strokeDasharray="8 6" className="animate-contact-dash" />
          <path d="M0,400 Q300,350 600,400 Q900,450 1440,380" stroke="#D97706" strokeWidth="2" strokeDasharray="6 8" className="animate-contact-dash" style={{ animationDelay: '2s' }} />
          {/* Medical cross watermarks */}
          <line x1="100" y1="200" x2="100" y2="260" stroke="#B91C1C" strokeWidth="2" opacity="0.8" />
          <line x1="70" y1="230" x2="130" y2="230" stroke="#B91C1C" strokeWidth="2" opacity="0.8" />
          <line x1="1340" y1="350" x2="1340" y2="410" stroke="#D97706" strokeWidth="2" opacity="0.8" />
          <line x1="1310" y1="380" x2="1370" y2="380" stroke="#D97706" strokeWidth="2" opacity="0.8" />
        </svg>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="p-8 sm:p-10 rounded-[2.5rem] bg-white/90 backdrop-blur-md border-2 border-[#FECDD3]/60 shadow-2xl grid grid-cols-1 md:grid-cols-3 gap-6 text-left relative overflow-hidden"
          >
            {/* Inner animated background */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(5,150,105,0.04),transparent)] pointer-events-none" />
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#991B1B] via-[#B91C1C] to-[#D97706]" />

            {infoCards.map((card, idx) => (
              <motion.div
                key={idx}
                {...fadeUp(idx * 0.12)}
                className="relative space-y-3"
              >
                <div className={`p-2.5 rounded-xl ${card.color} w-fit`}>
                  <card.icon className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-[#991B1B]">{card.title}</h4>
                <p className="text-xs text-slate-600 font-medium leading-relaxed">{card.text}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Bottom floating badge */}
          <motion.div
            {...fadeUp(0.3)}
            className="mt-10 text-center"
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-[#991B1B] to-[#B91C1C] text-white text-xs font-semibold shadow-lg shadow-[#B91C1C]/30">
              <div className="w-2 h-2 rounded-full bg-[#38BDF8] animate-pulse" />
              <span>Pulse Heart Centre • Betiahata, Gorakhpur — Open Mon–Sat, 10 AM – 8 PM</span>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
