import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Calendar, ArrowRight, ShieldCheck, Activity, Award,
  Clock, Phone, HeartPulse, Sparkles, CheckCircle2, Stethoscope
} from 'lucide-react';
import { PULSE_DATA } from '../data/pulseData';
import DoctorPlaceholder from './DoctorPlaceholder';
import SectionBackgroundMotion from './SectionBackgroundMotion';
import HeroArchitectural3DCanvas from './HeroArchitectural3DCanvas';
import Interactive3DTilt from './Interactive3DTilt';
import ScrollReveal from './ScrollReveal';

/**
 * CinematicHeroSection
 * Clean, authoritative, world-class medical hero:
 * - Serene medical atmosphere with delicate ECG sinus vector accent
 * - Crisp visual hierarchy: Monumental typography + direct clinical action
 * - High-credibility clinician introduction (PGIMER Chandigarh & KGMU Lucknow)
 * - Interactive 3D Cursor Tilt & Framer Motion Scroll Reveals
 */
export default function CinematicHeroSection() {
  const { doctor, clinic } = PULSE_DATA;

  return (
    <section className="relative min-h-[90vh] lg:min-h-screen flex flex-col justify-between pt-28 pb-12 px-4 sm:px-6 lg:px-12 overflow-hidden select-none bg-gradient-to-b from-[#FAF9F6] via-[#F8FAFC] to-[#F1F5F9]">

      {/* 3D WebGL Medical Architecture & Bioluminescent Particle Ribbon */}
      <div className="absolute inset-0 z-0 opacity-55 pointer-events-none">
        <HeroArchitectural3DCanvas />
      </div>

      {/* Bespoke Architectural Medical Citadel & 3D WebGL Helix Ribbon */}
      <SectionBackgroundMotion variant="home-hero" />

      <div className="max-w-7xl mx-auto w-full flex-1 flex flex-col justify-center relative z-10 py-6 sm:py-10">

        {/* Top Operating Status Strip */}
        <ScrollReveal variant="fade-down" delay={0.1}>
          <div className="flex items-center justify-end mb-6 sm:mb-8">
            <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs font-semibold text-slate-700 bg-white/95 backdrop-blur-md px-4 py-2 rounded-full border border-slate-200/80 shadow-xs hover:shadow-md transition-all">
              <span className="flex items-center gap-1.5 text-slate-700">
                <Clock className="w-3.5 h-3.5 text-[#BE123C]" />
                <span>OPD Consultation: 08:30 AM – 08:30 PM</span>
              </span>
              <span className="text-slate-300 hidden sm:inline">•</span>
              <a href="tel:+919876543210" className="flex items-center gap-1.5 text-[#BE123C] font-bold hover:underline">
                <span className="w-2 h-2 rounded-full bg-[#E11D48] animate-ping" />
                <span>Emergency 24/7: +91 98765 43210</span>
              </a>
            </div>
          </div>
        </ScrollReveal>

        {/* Master Hero Split Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

          {/* Left Column (7 cols): Editorial Typography & Direct Clinical Actions */}
          <div className="lg:col-span-7 space-y-6 text-left">

            <ScrollReveal variant="fade-down" delay={0.15}>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md text-[#BE123C] border border-rose-300/80 text-xs font-bold uppercase tracking-[0.22em] shadow-xs hover:border-rose-400 hover:shadow-md transition-all">
                <Sparkles className="w-3.5 h-3.5 text-[#E11D48]" />
                <span>Pulse Heart Centre • Betiahata, Gorakhpur</span>
              </div>
            </ScrollReveal>

            <ScrollReveal variant="fade-up" delay={0.2}>
              <div className="space-y-3">
                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-[#0A1128] tracking-[-0.035em] leading-[1.06]">
                  Restoring Rhythms. <br />
                  <span className="font-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#0A1128] via-[#BE123C] to-[#E11D48]">
                    Preserving Every Heartbeat.
                  </span>
                </h1>
              </div>
            </ScrollReveal>

            {/* Mobile-Only Doctor Portrait with 3D Tilt */}
            <div className="block lg:hidden my-4 max-w-sm mx-auto relative">
              <Interactive3DTilt maxTilt={8}>
                <DoctorPlaceholder aspectRatio="aspect-[4/5]" />
              </Interactive3DTilt>
            </div>

            <ScrollReveal variant="fade-up" delay={0.3}>
              <p className="text-base sm:text-lg text-slate-700 font-normal leading-relaxed max-w-2xl">
                Led by <strong className="text-[#0A1128] font-bold">Dr. Prakash Chand Shahi</strong> — DM Cardiology (PGIMER Chandigarh) and MD Medicine (KGMU Lucknow). Dedicated to evidence-based cardiac care, transradial-first painless stenting, and 24/7 acute STEMI emergency intervention.
              </p>
            </ScrollReveal>

            {/* Clean Key Clinical Pillars (Hover responsive) */}
            <ScrollReveal variant="fade-up" delay={0.35}>
              <div className="flex flex-wrap items-center gap-2.5 pt-1 text-xs font-semibold">
                <span className="inline-flex items-center gap-1.5 bg-white/90 backdrop-blur-sm text-slate-900 px-3.5 py-1.5 rounded-full border border-slate-200 shadow-2xs hover:scale-105 hover:border-rose-300 transition-all cursor-default">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#BE123C]" />
                  <span>Transradial-First (Wrist Access)</span>
                </span>
                <span className="inline-flex items-center gap-1.5 bg-white/90 backdrop-blur-sm text-slate-900 px-3.5 py-1.5 rounded-full border border-slate-200 shadow-2xs hover:scale-105 hover:border-slate-400 transition-all cursor-default">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#0A1128]" />
                  <span>Siemens Artis Zee Flat-Panel</span>
                </span>
                <span className="inline-flex items-center gap-1.5 bg-white/90 backdrop-blur-sm text-slate-900 px-3.5 py-1.5 rounded-full border border-slate-200 shadow-2xs hover:scale-105 hover:border-rose-300 transition-all cursor-default">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#BE123C]" />
                  <span>24/7 Primary Angioplasty</span>
                </span>
              </div>
            </ScrollReveal>

            {/* Direct Action Row with Kinetic Sheen */}
            <ScrollReveal variant="fade-up" delay={0.4}>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                <Link
                  to="/contact"
                  className="luxury-btn-primary group"
                >
                  <Calendar className="w-4 h-4 text-rose-200 group-hover:scale-110 transition-transform" />
                  <span>Book Priority Consultation</span>
                  <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1.5 transition-transform" />
                </Link>

                <a
                  href="tel:+919876543210"
                  className="luxury-btn-secondary group"
                >
                  <Phone className="w-4 h-4 text-[#BE123C] group-hover:scale-110 transition-transform" />
                  <span>24/7 Emergency Line</span>
                </a>
              </div>
            </ScrollReveal>

          </div>

          {/* Right Column (5 cols): Elegant Doctor Spotlight with Interactive 3D Cursor Tilt (Desktop Only) */}
          <div className="hidden lg:block lg:col-span-5 relative">
            <Interactive3DTilt maxTilt={10} glowColor="rgba(190, 18, 60, 0.28)">
              <DoctorPlaceholder aspectRatio="aspect-[4/5]" />
            </Interactive3DTilt>
          </div>

        </div>

      </div>

      {/* =========================================================================
          BOTTOM METRICS STRIP: CLEAN, CRISP 4-COLUMN MEDICAL RIBBON WITH HOVER LIFT
         ========================================================================= */}
      <div className="max-w-7xl mx-auto w-full pt-8 border-t border-slate-200 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">

          <div className="p-4 rounded-2xl bg-white/85 backdrop-blur-md border border-slate-200/90 shadow-sm card-hover-elevate text-left">
            <span className="text-2xl sm:text-4xl font-extrabold text-[#BE123C] tracking-tight block">22+</span>
            <span className="text-xs text-[#0A1128] font-bold uppercase tracking-wider block mt-0.5">Years Experience</span>
            <span className="text-[11px] text-slate-500">Unbroken leadership in Eastern UP</span>
          </div>

          <div className="p-4 rounded-2xl bg-white/85 backdrop-blur-md border border-slate-200/90 shadow-sm card-hover-elevate text-left">
            <span className="text-2xl sm:text-4xl font-extrabold text-[#0A1128] tracking-tight block">15,000+</span>
            <span className="text-xs text-[#0A1128] font-bold uppercase tracking-wider block mt-0.5">Cath Procedures</span>
            <span className="text-[11px] text-slate-500">Angiography, angioplasty &amp; stenting</span>
          </div>

          <div className="p-4 rounded-2xl bg-white/85 backdrop-blur-md border border-slate-200/90 shadow-sm card-hover-elevate text-left">
            <span className="text-2xl sm:text-4xl font-extrabold text-[#BE123C] tracking-tight block">99.4%</span>
            <span className="text-xs text-[#0A1128] font-bold uppercase tracking-wider block mt-0.5">Radial Success</span>
            <span className="text-[11px] text-slate-500">Pain-free wrist access &amp; rapid walking</span>
          </div>

          <div className="p-4 rounded-2xl bg-white/85 backdrop-blur-md border border-slate-200/90 shadow-sm card-hover-elevate text-left">
            <span className="text-2xl sm:text-4xl font-extrabold text-[#0A1128] tracking-tight block">&lt; 45 Min</span>
            <span className="text-xs text-[#0A1128] font-bold uppercase tracking-wider block mt-0.5">STEMI Door-To-Balloon</span>
            <span className="text-[11px] text-slate-500">24/7 emergency Code Blue response</span>
          </div>

        </div>
      </div>

    </section>
  );
}
