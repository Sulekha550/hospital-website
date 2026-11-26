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
import Interactive3DTilt from '../components/Interactive3DTilt';
import ScrollReveal from '../components/ScrollReveal';

export default function ContactPage() {
  const { clinic, doctor } = PULSE_DATA;

  const infoCards = [
    {
      icon: Navigation,
      color: 'bg-rose-50 text-[#BE123C] border-rose-200',
      title: 'How to Reach Us',
      text: 'In central Betiahata, Gorakhpur — just 10 minutes from Gorakhpur Railway Station and Golghar.',
    },
    {
      icon: Clock,
      color: 'bg-slate-100 text-[#0A1128] border-slate-200',
      title: 'When You Arrive',
      text: 'Please arrive 15 minutes before your appointment time. Bring your old ECG, Echo reports, and heart CDs if available.',
    },
    {
      icon: Phone,
      color: 'bg-rose-50 text-[#E11D48] border-rose-200',
      title: '24/7 Heart Emergency',
      text: 'Patients with sudden chest pain, heavy sweating, or fainting are seen immediately without any waiting.',
    },
  ];

  return (
    <div className="relative select-none bg-[#FAF9F6] overflow-hidden pt-24">

      {/* =========================================================================
          HERO SECTION: MATCHED 100% WITH HOME & ABOUT HERO ARCHITECTURE
         ========================================================================= */}
      <section className="relative min-h-[90vh] lg:min-h-screen flex flex-col justify-between pt-16 pb-12 px-4 sm:px-6 lg:px-12 overflow-hidden select-none bg-gradient-to-b from-[#FAF9F6] via-[#F8FAFC] to-[#F1F5F9]">

        {/* Bespoke Welcoming Medical Concierge & Biometric Radar Compass */}
        <SectionBackgroundMotion variant="contact-hero" />

        {/* Hero Content Grid */}
        <div className="max-w-7xl mx-auto w-full flex-1 flex flex-col justify-center relative z-10 py-4 sm:py-8">

          {/* Top Status Strip */}
          <div className="flex items-center justify-end mb-6 sm:mb-8">
            <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs font-semibold text-slate-700 bg-white/95 backdrop-blur-md px-3.5 sm:px-4 py-1.5 rounded-full border border-slate-200 shadow-xs">
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#BE123C]" />
                <span>OPD: 10:00 AM – 08:00 PM</span>
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

              <ScrollReveal animation="fade-down">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-50 text-[#BE123C] border border-rose-200 text-xs font-bold uppercase tracking-[0.22em] shadow-xs">
                  <Sparkles className="w-3.5 h-3.5 text-[#BE123C]" />
                  <span>Book Appointment • Betiahata, Gorakhpur</span>
                </div>
              </ScrollReveal>

              <ScrollReveal animation="fade-up" delay={0.1}>
                <div className="space-y-3">
                  <h1 className="text-3xl sm:text-5xl lg:text-7xl font-extrabold text-[#0A1128] tracking-tight leading-[1.04]">
                    Direct Consultation. <br />
                    <span className="font-serif italic font-normal text-[#BE123C]">With Dr. Prakash Chand Shahi.</span>
                  </h1>
                </div>
              </ScrollReveal>

              {/* Mobile-Only Doctor Portrait: Appears right below heading on mobile */}
              <div className="block lg:hidden my-4 max-w-sm mx-auto relative">
                <Interactive3DTilt maxTilt={8} scale={1.02}>
                  <DoctorPlaceholder aspectRatio="aspect-[4/5]" />
                </Interactive3DTilt>
              </div>

              {/* All Details & Actions: Flows BELOW image on mobile */}
              <div className="space-y-6">
                {/* Doctor Spotlight Banner with Stethoscope Crest */}
                <ScrollReveal animation="fade-up" delay={0.15}>
                  <div className="pt-1 flex flex-wrap items-center gap-3">
                    <div className="flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200 shadow-md w-full sm:w-auto">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0A1128] via-[#1E293B] to-[#BE123C] border border-rose-200/50 shadow-sm flex items-center justify-center text-white shrink-0">
                        <Stethoscope className="w-6 h-6 stroke-[1.8]" />
                      </div>
                      <div className="text-left">
                        <div className="flex items-center gap-1.5">
                          <span className="text-sm font-extrabold text-[#0A1128]">Dr. Prakash Chand Shahi</span>
                          <ShieldCheck className="w-4 h-4 text-[#BE123C]" />
                        </div>
                        <span className="text-[11px] font-mono font-bold text-[#BE123C] block">
                          DM Cardiology (PGIMER) • MD (KGMU Lucknow)
                        </span>
                      </div>
                    </div>

                    <span className="px-3.5 py-2 rounded-xl bg-rose-50 border border-rose-200 text-[#BE123C] text-xs font-bold font-mono">
                      OPD Mon–Sat • 10 AM – 8 PM
                    </span>
                  </div>
                </ScrollReveal>

                {/* Minimal Summary Status Chips */}
                <ScrollReveal animation="fade-up" delay={0.2}>
                  <div className="flex flex-wrap items-center gap-2 pt-1 font-mono text-xs font-bold">
                    <span className="bg-slate-100 text-[#0A1128] px-3.5 py-1.5 rounded-full border border-slate-200">Betiahata, Gorakhpur</span>
                    <span className="bg-white text-slate-900 px-3.5 py-1.5 rounded-full border border-slate-200 shadow-xs">Same-Day Report &amp; CD Check</span>
                    <span className="bg-rose-50 text-[#BE123C] px-3.5 py-1.5 rounded-full border border-rose-200">24/7 Heart Emergency</span>
                  </div>
                </ScrollReveal>

                {/* 4 Interactive Visual Feature Chips */}
                <ScrollReveal animation="fade-up" delay={0.25}>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1">
                    <div className="p-2.5 rounded-xl bg-white border border-slate-200 shadow-xs text-left">
                      <span className="text-xs font-mono font-bold text-[#BE123C] block">OPD Room 101</span>
                      <span className="text-[10px] font-bold text-slate-800 uppercase tracking-tight block">Consultation Wing</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-white border border-slate-200 shadow-xs text-left">
                      <span className="text-xs font-mono font-bold text-[#0A1128] block">Mon — Sat</span>
                      <span className="text-[10px] font-bold text-slate-800 uppercase tracking-tight block">10:00 AM – 8:00 PM</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-white border border-rose-200 shadow-xs text-left">
                      <span className="text-xs font-mono font-bold text-[#BE123C] block">Betiahata</span>
                      <span className="text-[10px] font-bold text-slate-800 uppercase tracking-tight block">Central Gorakhpur</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-white border border-slate-200 shadow-xs text-left">
                      <span className="text-xs font-mono font-bold text-[#0A1128] block">&lt; 45 Min</span>
                      <span className="text-[10px] font-bold text-slate-800 uppercase tracking-tight block">Door-To-Balloon</span>
                    </div>
                  </div>
                </ScrollReveal>

                {/* Direct Action Row */}
                <ScrollReveal animation="fade-up" delay={0.3}>
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                    <a
                      href="#appointment"
                      className="luxury-btn-primary"
                    >
                      <Calendar className="w-4 h-4 text-white" />
                      <span>Book Priority OPD Pass</span>
                      <ArrowRight className="w-4 h-4 text-white" />
                    </a>

                    <a
                      href="tel:+919876543210"
                      className="luxury-btn-secondary"
                    >
                      <Phone className="w-4 h-4 text-[#BE123C]" />
                      <span>Emergency 24/7 Helpline</span>
                    </a>
                  </div>
                </ScrollReveal>

                {/* Trust Highlights Strip */}
                <div className="pt-3 flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-slate-700 font-medium border-t border-slate-200/80">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#BE123C]" />
                    <span>22+ Years in Gorakhpur</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#0A1128]" />
                    <span>Siemens Flat-Panel Cath Lab</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#BE123C]" />
                    <span>NABH Accredited Safety</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Column (5 cols): Arched-Top Architectural Portrait (Unique to Contact Page) */}
            <div className="hidden lg:block lg:col-span-5 relative">
              <div className="relative max-w-md mx-auto rounded-t-[10rem] rounded-b-3xl overflow-hidden bg-white p-3 border border-slate-200 shadow-xl">
                <div className="aspect-[4/5] rounded-t-[9.2rem] rounded-b-2xl overflow-hidden bg-slate-100">
                  <img
                    src="/images/doctor-portrait.jpg"
                    alt="Dr. Prakash Chand Shahi"
                    className="w-full h-full object-cover object-[50%_20%]"
                  />
                </div>
                <div className="p-4 text-left flex items-center justify-between gap-3">
                  <div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#BE123C] block">
                      Direct OPD Consultation
                    </span>
                    <span className="text-base font-extrabold text-[#0A1128] block">
                      Dr. Prakash Chand Shahi
                    </span>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-rose-50 text-[#BE123C] border border-rose-200 text-[10px] font-mono font-bold">
                    PGIMER &amp; KGMU
                  </span>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Bottom Metrics Strip: Visual-Proof Photo Cards */}
        <div className="max-w-7xl mx-auto w-full pt-8 border-t border-slate-200/90 relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { metric: '22+', label: 'Years of Dedication', sub: 'Unbroken leadership in eastern UP', img: '/images/hero-architecture-entrance.jpg', pos: 'object-center' },
              { metric: '15,000+', label: 'Cath Interventions', sub: 'Opening blocked arteries, stents & pacemakers', img: '/images/radial-catheter-sheath.jpg', pos: 'object-center' },
              { metric: '99.4%', label: 'Radial Patency Rate', sub: 'Wrist-first access & rapid walking', img: '/images/doctor-angiogram-explain.jpg', pos: 'object-center' },
              { metric: '< 45 Min', label: 'STEMI Door-To-Balloon', sub: '24/7 emergency Code-Blue triage', img: '/images/doctor-icu-rounds.jpg', pos: 'object-center' },
            ].map((item, i) => (
              <div key={i} className="group relative h-36 rounded-2xl overflow-hidden bg-[#0A1128] border border-slate-200 shadow-md text-left">
                <img src={item.img} alt={item.label} loading="lazy" className={`absolute inset-0 w-full h-full object-cover ${item.pos} opacity-75 group-hover:scale-110 transition-transform duration-700`} />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1128] via-[#0A1128]/75 to-transparent" />
                <div className="absolute bottom-3 left-4 right-4">
                  <span className="text-2xl font-extrabold text-white tracking-tight block leading-none">{item.metric}</span>
                  <span className="text-[11px] text-rose-300 font-bold uppercase tracking-wider block mt-1">{item.label}</span>
                  <span className="text-[10px] text-slate-300 block truncate">{item.sub}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </section>

      {/* Location Video & Campus Walkthrough Console */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 my-8 overflow-hidden rounded-[3rem] border-2 border-slate-200/90 shadow-2xl bg-gradient-to-b from-[#FAF9F6] via-[#F8FAFC] to-[#F1F5F9] backdrop-blur-xl">
        {/* Bespoke Wayfinding Horizon & Transit Access Routes */}
        <SectionBackgroundMotion variant="contact-video" />

        <ScrollReveal animation="fade-up" className="max-w-5xl mx-auto w-full relative z-10">
          <Interactive3DTilt maxTilt={5} scale={1.01}>
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
          </Interactive3DTilt>
        </ScrollReveal>
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
      <div className="relative py-20 bg-gradient-to-b from-[#FAF9F6] via-[#F8FAFC] to-[#F1F5F9] overflow-hidden">
        {/* Bespoke Editorial Wayfinding & Patient Checklist Dossier */}
        <SectionBackgroundMotion variant="contact-protocol" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          <ScrollReveal animation="fade-up">
            <Interactive3DTilt maxTilt={5} scale={1.01}>
              <div className="p-8 sm:p-12 rounded-[2.5rem] bg-white/95 backdrop-blur-2xl border-2 border-slate-200/90 shadow-2xl grid grid-cols-1 md:grid-cols-3 gap-6 text-left relative overflow-hidden">
                {/* Top Glowing Laser Line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0A1128] via-[#BE123C] to-[#E11D48]" />

                {infoCards.map((card, idx) => {
                  const cardImgs = [
                    { src: '/images/hospital-ward-suites.jpg', pos: 'object-center' },
                    { src: '/images/hospital-helpdesk.jpg', pos: 'object-center' },
                    { src: '/images/ambulance-cardiac-care.jpg', pos: 'object-center' },
                  ];
                  const media = cardImgs[idx % cardImgs.length];
                  return (
                    <div key={idx} className="group relative space-y-3">
                      <div className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-slate-900 border border-slate-200">
                        <img
                          src={media.src}
                          alt={card.title}
                          loading="lazy"
                          className={`w-full h-full object-cover ${media.pos} group-hover:scale-108 transition-transform duration-700`}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0A1128]/70 via-transparent to-transparent" />
                        <div className={`absolute bottom-2.5 left-2.5 p-2 rounded-xl border ${card.color} shadow-sm`}>
                          <card.icon className="w-4 h-4" />
                        </div>
                      </div>
                      <h4 className="text-base font-extrabold text-[#0A1128] group-hover:text-[#BE123C] transition-colors">{card.title}</h4>
                      <p className="text-xs text-slate-600 font-normal leading-relaxed">{card.text}</p>
                    </div>
                  );
                })}
              </div>
            </Interactive3DTilt>
          </ScrollReveal>

          {/* Bottom floating badge */}
          <ScrollReveal animation="fade-up" delay={0.2} className="mt-10 text-center">
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-[#0A1128] via-[#1E293B] to-[#BE123C] text-white text-xs font-semibold shadow-lg shadow-navy/20 border border-rose-300/30">
              <div className="w-2 h-2 rounded-full bg-[#E11D48] animate-ping" />
              <span>Pulse Heart Centre • Betiahata, Gorakhpur — Open Mon–Sat, 10 AM – 8 PM</span>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </div>
  );
}
