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
import SectionBackgroundMotion from '../components/SectionBackgroundMotion';

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
      color: 'bg-orange-50 text-[#C2410C]',
      title: 'How to Reach Us',
      text: 'Located in the central Betiahata medical hub, 10 minutes from Gorakhpur Railway Station and Golghar commercial centre.',
    },
    {
      icon: Clock,
      color: 'bg-rose-50 text-[#BE123C]',
      title: 'Arrival & Token Protocol',
      text: 'Please arrive 15 minutes prior to your scheduled slot. Bring prior ECGs, echocardiography reports, and angiogram CDs.',
    },
    {
      icon: Phone,
      color: 'bg-amber-50 text-[#D97706]',
      title: 'Emergency Cardiac Triage',
      text: 'Patients presenting with acute crushing chest pain, diaphoresis, or sudden syncope are granted immediate priority triage.',
    },
  ];

  return (
    <div className="relative select-none bg-[#FDFBF7] overflow-hidden pt-24">

      {/* =========================================================================
          HERO SECTION: MATCHED 100% WITH HOME & ABOUT HERO ARCHITECTURE
         ========================================================================= */}
      <section className="relative min-h-[90vh] lg:min-h-screen flex flex-col justify-between pt-16 pb-12 px-4 sm:px-6 lg:px-12 overflow-hidden select-none bg-gradient-to-b from-[#FFF7F2] via-[#FFEDE6] to-[#FFF4ED]">

        {/* Bespoke Welcoming Medical Concierge & Biometric Radar Compass */}
        <SectionBackgroundMotion variant="contact-hero" />

        {/* Hero Content Grid */}
        <div className="max-w-7xl mx-auto w-full flex-1 flex flex-col justify-center relative z-10 py-4 sm:py-8">

          {/* Top Status Strip */}
          <div className="flex items-center justify-end mb-6 sm:mb-8">
            <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs font-semibold text-slate-700 bg-white/95 backdrop-blur-md px-3.5 sm:px-4 py-1.5 rounded-full border border-rose-200 shadow-xs">
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#EA580C]" />
                <span>OPD: 08:30 AM – 08:30 PM</span>
              </span>
              <span className="text-slate-300 hidden sm:inline">•</span>
              <a href="tel:+919876543210" className="flex items-center gap-1.5 text-[#BE123C] font-bold hover:underline">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E11D48] animate-ping" />
                <span>24/7 Helpline: +91 98765 43210</span>
              </a>
            </div>
          </div>

          {/* Master Split-Screen Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

            {/* Left Column (7 cols): Editorial Typography & Direct Clinical Actions */}
            <div className="lg:col-span-7 space-y-6 text-left">

              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 text-[#C2410C] border border-orange-200 text-xs font-bold uppercase tracking-[0.22em] shadow-xs">
                <Sparkles className="w-3.5 h-3.5 text-[#EA580C]" />
                <span>Direct Outpatient Gateway • Betiahata, Gorakhpur</span>
              </div>

              <div className="space-y-3">
                <h1 className="text-3xl sm:text-5xl lg:text-7xl font-extrabold text-slate-950 tracking-[-0.035em] leading-[1.04]">
                  Direct Consultation. <br />
                  <span className="font-serif italic font-normal text-[#BE123C]">With Dr. Prakash Chand Shahi.</span>
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
                  <div className="flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-white/95 backdrop-blur-md border-2 border-orange-200 shadow-md w-full sm:w-auto">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#BE123C] via-[#E11D48] to-[#FB923C] border-2 border-rose-200 shadow-sm flex items-center justify-center text-white shrink-0">
                      <Stethoscope className="w-6 h-6 stroke-[1.8]" />
                    </div>
                    <div className="text-left">
                      <div className="flex items-center gap-1.5">
                        <span className="text-sm font-extrabold text-slate-900">Dr. Prakash Chand Shahi</span>
                        <ShieldCheck className="w-4 h-4 text-[#EA580C]" />
                      </div>
                      <span className="text-[11px] font-mono font-bold text-[#C2410C] block">
                        DM Cardiology (PGIMER) • MD (KGMU Lucknow)
                      </span>
                    </div>
                  </div>

                  <span className="px-3.5 py-2 rounded-xl bg-orange-50 border border-orange-200 text-[#C2410C] text-xs font-bold font-mono">
                    OPD Mon–Sat • 10 AM – 8 PM
                  </span>
                </div>

                {/* Minimal Summary Status Chips */}
                <div className="flex flex-wrap items-center gap-2 pt-1 font-mono text-xs font-bold">
                  <span className="bg-orange-50 text-[#C2410C] px-3.5 py-1.5 rounded-full border border-orange-200">Betiahata Medical Corridor</span>
                  <span className="bg-white text-slate-900 px-3.5 py-1.5 rounded-full border border-orange-200 shadow-xs">Same-Day Angio CD Review</span>
                  <span className="bg-rose-50 text-[#BE123C] px-3.5 py-1.5 rounded-full border border-rose-200">Emergency 24/7 Triage</span>
                </div>

                {/* 4 Interactive Visual Feature Chips */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1">
                  <div className="p-2.5 rounded-xl bg-white border border-orange-200 shadow-xs text-left">
                    <span className="text-xs font-mono font-bold text-[#EA580C] block">OPD Room 101</span>
                    <span className="text-[10px] font-bold text-slate-800 uppercase tracking-tight block">Consultation Wing</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white border border-orange-200 shadow-xs text-left">
                    <span className="text-xs font-mono font-bold text-[#C2410C] block">Mon — Sat</span>
                    <span className="text-[10px] font-bold text-slate-800 uppercase tracking-tight block">10:00 AM – 8:00 PM</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white border border-rose-200 shadow-xs text-left">
                    <span className="text-xs font-mono font-bold text-[#BE123C] block">Betiahata</span>
                    <span className="text-[10px] font-bold text-slate-800 uppercase tracking-tight block">Central Gorakhpur</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white border border-amber-200 shadow-xs text-left">
                    <span className="text-xs font-mono font-bold text-[#D97706] block">&lt; 45 Min</span>
                    <span className="text-[10px] font-bold text-slate-800 uppercase tracking-tight block">Door-To-Balloon</span>
                  </div>
                </div>

                {/* Direct Action Row */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                  <a
                    href="#appointment"
                    className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-gradient-to-r from-[#BE123C] via-[#E11D48] to-[#FB923C] hover:from-[#9F1239] hover:to-[#BE123C] text-white font-bold text-xs uppercase tracking-wider shadow-xl shadow-rose-600/20 hover:shadow-2xl transition-all duration-300 hover:-translate-y-0.5 group border border-rose-300/40 text-center"
                  >
                    <Calendar className="w-4 h-4 text-amber-200 group-hover:scale-110 transition-transform" />
                    <span>Book Priority OPD Pass</span>
                    <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
                  </a>

                  <a
                    href="tel:+919876543210"
                    className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-white hover:bg-orange-50 text-[#BE123C] font-bold text-xs uppercase tracking-wider border border-orange-200 shadow-sm hover:shadow-md transition-all duration-300 text-center"
                  >
                    <Phone className="w-4 h-4 text-[#EA580C]" />
                    <span>Emergency 24/7 Helpline</span>
                  </a>
                </div>

                {/* Trust Highlights Strip */}
                <div className="pt-3 flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-slate-700 font-medium border-t border-slate-200/80">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#EA580C]" />
                    <span>22+ Years in Gorakhpur</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#BE123C]" />
                    <span>Siemens Flat-Panel Cath Lab</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#D97706]" />
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
              <div className="absolute -top-4 -right-4 px-4 py-2.5 rounded-2xl bg-white border-2 border-orange-200 shadow-xl text-left hidden sm:flex items-center gap-2.5 z-20">
                <div className="w-8 h-8 rounded-xl bg-orange-50 flex items-center justify-center text-[#EA580C]">
                  <HeartPulse className="w-4 h-4 text-[#EA580C] animate-pulse" />
                </div>
                <div>
                  <span className="text-[9px] font-bold uppercase tracking-wider text-[#C2410C] block">
                    APEX CARDIAC LEADER
                  </span>
                  <span className="text-xs font-extrabold text-slate-900 block">
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
              <span className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight block">22+</span>
              <span className="text-xs text-slate-700 font-semibold uppercase tracking-wider block">Years of Dedication</span>
              <span className="text-[11px] text-slate-500">Unbroken clinical leadership in eastern UP</span>
            </div>

            <div className="px-4 py-2 text-left">
              <span className="text-2xl sm:text-4xl font-extrabold text-[#C2410C] tracking-tight block">15,000+</span>
              <span className="text-xs text-slate-700 font-semibold uppercase tracking-wider block">Cath Interventions</span>
              <span className="text-[11px] text-slate-500">Angioplasty, stenting &amp; pacemaker implants</span>
            </div>

            <div className="px-4 py-2 text-left">
              <span className="text-2xl sm:text-4xl font-extrabold text-[#BE123C] tracking-tight block">99.4%</span>
              <span className="text-xs text-slate-700 font-semibold uppercase tracking-wider block">Radial Patency Rate</span>
              <span className="text-[11px] text-slate-500">Wrist-first access with zero groin immobilization</span>
            </div>

            <div className="px-4 py-2 text-left">
              <span className="text-2xl sm:text-4xl font-extrabold text-[#EA580C] tracking-tight block">&lt; 45 Min</span>
              <span className="text-xs text-slate-700 font-semibold uppercase tracking-wider block">STEMI Door-To-Balloon</span>
              <span className="text-[11px] text-slate-500">Round-the-clock emergency Code-Blue response</span>
            </div>
          </div>
        </div>

      </section>

      {/* Location Video & Campus Walkthrough Console */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 my-8 overflow-hidden rounded-[3rem] border border-orange-200/60 shadow-lg bg-gradient-to-b from-[#FAF6F0] via-[#FDFBF7] to-[#F8F3EC]">
        {/* Bespoke Wayfinding Horizon & Transit Access Routes */}
        <SectionBackgroundMotion variant="contact-video" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.95, delay: 0.15 }}
          className="max-w-5xl mx-auto w-full relative z-10"
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
      <div id="appointment" className="relative">
        <AppointmentExperienceSection variant="contact-appointment" />
      </div>

      {/* ===================================================================
          INFO CARDS + PROTOCOL SECTION
         =================================================================== */}
      <div className="relative py-20 bg-gradient-to-b from-[#FFF9F6] via-[#FAF5EF] to-[#FFF5F2] overflow-hidden">
        {/* Bespoke Editorial Wayfinding & Patient Checklist Dossier */}
        <SectionBackgroundMotion variant="contact-protocol" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="p-8 sm:p-10 rounded-[2.5rem] bg-white/90 backdrop-blur-md border-2 border-orange-200/80 shadow-2xl grid grid-cols-1 md:grid-cols-3 gap-6 text-left relative overflow-hidden"
          >
            {/* Inner animated background */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(234,88,12,0.04),transparent)] pointer-events-none" />
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#BE123C] via-[#EA580C] to-[#FB923C]" />

            {infoCards.map((card, idx) => (
              <motion.div
                key={idx}
                {...fadeUp(idx * 0.12)}
                className="relative space-y-3"
              >
                <div className={`p-2.5 rounded-xl ${card.color} w-fit`}>
                  <card.icon className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-slate-900">{card.title}</h4>
                <p className="text-xs text-slate-600 font-medium leading-relaxed">{card.text}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Bottom floating badge */}
          <motion.div
            {...fadeUp(0.3)}
            className="mt-10 text-center"
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-[#BE123C] via-[#E11D48] to-[#FB923C] text-white text-xs font-semibold shadow-lg shadow-rose-600/20">
              <div className="w-2 h-2 rounded-full bg-amber-200 animate-pulse" />
              <span>Pulse Heart Centre • Betiahata, Gorakhpur — Open Mon–Sat, 10 AM – 8 PM</span>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
