import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { HeartPulse, CheckCircle2, ArrowRight, ShieldCheck, Activity, Award, Play, Eye, Sparkles, ChevronRight, Stethoscope } from 'lucide-react';
import CardiologyFullCanvas from './CardiologyFullCanvas';
import SectionCinematicVideo from './SectionCinematicVideo';

/**
 * CardiologyShowcaseSection
 * Section just below Hero:
 * - Full-bleed 3D Anatomical Heart environment with glowing coronary pathways & ventricular pulse
 * - Dual-pane cinematic medical video & real clinical photography showcase
 * - ZERO boxed cards: seamless linear procedural streamers & integrated telemetry ribbons
 */
export default function CardiologyShowcaseSection() {
  const visuals = {
    heart3d: {
      id: 'heart3d',
      type: 'cardiology-heart',
      title: '3D Beating Heart & Coronary Perfusion',
      badge: '3D ANATOMICAL HEART',
      image: '/images/cardiology-3d-heart-beat.jpg',
      videoUrl: '/videos/cardiology-heart.mp4',
      caption: 'High-definition 3D cardiac cycle with glowing coronary tree & synchronized ECG.',
      stat: '72 BPM Synchronized Sinus Rhythm',
      tag: 'ANATOMICAL 3D SIMULATION'
    },
    angiogram: {
      id: 'angiogram',
      type: 'cardiac-catheterization',
      title: 'Digital Cineangiography Fluoroscopy',
      badge: 'LIVE CATH-LAB FLURO',
      image: '/images/stent-catheter-fluoroscopy.jpg',
      videoUrl: '/videos/cardiac-catheterization.mp4',
      caption: 'Real-time fluoroscopic stenosis localization, balloon dilation & stent apposition.',
      stat: '0.5 mm Spatial Stenosis Resolution',
      tag: 'DIAGNOSTIC CATHETERIZATION'
    },
    cathlab: {
      id: 'cathlab',
      type: 'facilities-walkthrough',
      title: 'Siemens Artis Zee Flat-Panel Cath Lab',
      badge: 'SURGICAL THEATRE',
      image: '/images/cath-lab.jpg',
      videoUrl: '/videos/facilities-walkthrough.mp4',
      caption: 'Ultra-low radiation fluoroscopic vascular intervention suite in Betiahata.',
      stat: '< 45 Min STEMI Door-To-Balloon',
      tag: 'INTERVENTIONAL SUITE'
    },
    consult: {
      id: 'consult',
      type: 'doctors-procedure',
      title: 'Executive Bedside Dialogue',
      badge: 'DR. PRAKASH CHAND SHAHI',
      image: '/images/doctor-bedside-consult.jpg',
      videoUrl: '/videos/doctors-procedure.mp4',
      caption: 'Unhurried review of angiogram CDs and customized medical therapy.',
      stat: '22+ Years Clinical Ethics',
      tag: 'OPD CONSULTATION'
    }
  };

  const [activeVisual, setActiveVisual] = useState('heart3d');
  const currentVisual = visuals[activeVisual] || visuals.heart3d;

  const procedures = [
    {
      num: "01",
      title: "Transradial Coronary Angioplasty & Stenting",
      tagline: "Wrist-First Access",
      image: "/images/radial-catheter-sheath.jpg",
      metric: "99.4% Flow Restored",
      desc: "Microscopic radial artery access eliminating groin immobilization."
    },
    {
      num: "02",
      title: "Definitive Coronary Angiogram (CAG)",
      tagline: "Fluoroscopic Mapping",
      image: "/images/angiogram-scan.jpg",
      metric: "< 15 Min Outpatient",
      desc: "Gold-standard sub-millimeter stenosis localization by Dr. Shahi."
    },
    {
      num: "03",
      title: "Permanent Pacemaker Implantation (PPI)",
      tagline: "Physiological Pacing",
      image: "/images/pacemaker-tech.jpg",
      metric: "14-Yr Battery Life",
      desc: "Dual-chamber rate-responsive pulse generators restoring rhythm."
    },
    {
      num: "04",
      title: "128-Slice Volumetric CT Angiography",
      tagline: "Non-Invasive 3D Scan",
      image: "/images/ct-calcium-score.jpg",
      metric: "Zero Downtime",
      desc: "Ultra-fast 3D coronary calcium Agatston scoring in a single breath."
    }
  ];

  return (
    <section id="cardiology" className="relative min-h-[90vh] lg:min-h-screen flex items-center py-24 px-4 sm:px-6 lg:px-12 overflow-hidden bg-gradient-to-b from-[#FFFDF9] via-[#F0FDF4] to-[#F0FDF4] border-b border-[#A7F3D0]/60 select-none">
      
      {/* 1. FULL-BLEED 3D ENDOVASCULAR STENT SCULPTURE & PULSE CANVAS (Background) */}
      <CardiologyFullCanvas />

      {/* =========================================================================
          UNIQUE SECTION 2 BACKGROUND: AMBIENT 3D HEART VIDEO + VASCULAR CAPILLARY TREE & ECHO ARC
         ========================================================================= */}
      <div className="absolute inset-0 pointer-events-none -z-5 overflow-hidden" aria-hidden="true">
        {/* Ambient 4K Cardiology Video Layer */}
        <div className="absolute inset-0 -z-10 overflow-hidden opacity-25 mix-blend-color-burn">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            className="w-full h-full object-cover filter contrast-125 saturate-150"
          >
            <source src="/videos/cardiology-heart.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-[#FFFDF9]/80 via-transparent to-[#F0FDF4]/85" />
        </div>

        {/* Velvet Emerald & Teal Glow Spheres */}
        <div className="absolute top-1/4 left-1/4 w-[650px] h-[650px] bg-gradient-to-tr from-[#064E3B]/20 via-[#34D399]/30 to-transparent rounded-full blur-[120px]" />
        <div className="absolute bottom-10 right-1/4 w-[700px] h-[700px] bg-gradient-to-bl from-[#059669]/25 via-[#F0FDF4]/40 to-transparent rounded-full blur-[130px]" />
        
        {/* Branching Arterial Capillary Tree SVG Graphic with Active Cardiac Contraction Beat */}
        <svg className="absolute -left-20 top-1/2 -translate-y-1/2 w-[750px] h-[750px] opacity-60 animate-cardiac-beat" viewBox="0 0 800 800" fill="none">
          <path d="M400,800 C400,600 420,480 400,350 C380,240 280,180 200,100" stroke="#064E3B" strokeWidth="4" strokeDasharray="300" className="animate-flow-dash" />
          <path d="M400,350 C440,240 540,190 620,110" stroke="#047857" strokeWidth="3" strokeDasharray="250" className="animate-flow-dash-fast" />
          <path d="M300,200 C240,160 180,180 120,130" stroke="#059669" strokeWidth="2.5" />
          <path d="M500,210 C560,160 620,180 680,130" stroke="#34D399" strokeWidth="2.5" />
          {/* Pulsing Contrast Dye Nodes */}
          <circle cx="400" cy="350" r="8" fill="#064E3B" className="animate-ping" />
          <circle cx="200" cy="100" r="7" fill="#047857" className="animate-ping" />
          <circle cx="620" cy="110" r="7" fill="#059669" className="animate-ping" />
        </svg>

        {/* Continuous Rotating Echocardiography Doppler Ultrasound Transducer Arc */}
        <div className="absolute -right-24 top-1/3 -translate-y-1/2 w-[650px] h-[650px] opacity-45 pointer-events-none">
          <svg className="w-full h-full animate-radar-sweep" viewBox="0 0 650 650">
            <circle cx="325" cy="325" r="160" fill="none" stroke="#059669" strokeWidth="2" strokeDasharray="8 8" />
            <circle cx="325" cy="325" r="240" fill="none" stroke="#047857" strokeWidth="1.8" strokeDasharray="4 12" />
            <circle cx="325" cy="325" r="310" fill="none" stroke="#059669" strokeWidth="1.2" />
            {/* Pie Sector Ultrasound Scan Rays */}
            <line x1="325" y1="325" x2="600" y2="180" stroke="#047857" strokeWidth="2" strokeDasharray="4 6" />
            <line x1="325" y1="325" x2="600" y2="470" stroke="#047857" strokeWidth="2" strokeDasharray="4 6" />
          </svg>
        </div>

        {/* Clinical Hemodynamics Watermark Stamp */}
        <div className="absolute top-28 right-12 font-mono text-[10px] text-[#064E3B]/30 tracking-widest hidden md:block uppercase space-y-0.5 text-right">
          <div>LV-EF: 62% • TIMI-3 CORONARY FLOW</div>
          <div>TRANSRADIAL CATHETER SUITE 01</div>
          <div>BALLOON EXPANDABLE DRUG-ELUTING STENT</div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10 py-6">
        
        {/* Section Headline & Pedigree (No Boxed Cards) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          
          {/* Left Column (6 Cols): Editorial Flow & Linear Procedure Streamers */}
          <div className="lg:col-span-6 space-y-6 text-left">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F0FDF4] text-[#064E3B] border border-[#A7F3D0] text-xs font-bold uppercase tracking-[0.22em] shadow-xs">
              <HeartPulse className="w-4 h-4 text-[#059669] animate-pulse" />
              <span>Cardiovascular Sciences &amp; Hemodynamics</span>
            </div>

            <div className="space-y-3">
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#064E3B] tracking-[-0.03em] leading-[1.06]">
                Preserving Every <br />
                <span className="font-serif italic font-normal text-[#059669]">Heartbeat with Precision.</span>
              </h2>

              {/* Lead Cardiologist Pill with Stethoscope Crest */}
              <div className="flex items-center gap-3 p-2.5 rounded-2xl bg-white border border-[#A7F3D0] shadow-xs max-w-md">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#064E3B] to-[#047857] border border-[#A7F3D0] flex items-center justify-center text-[#A7F3D0] shrink-0">
                  <Stethoscope className="w-5 h-5 stroke-[1.8]" />
                </div>
                <div className="text-left">
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs font-extrabold text-[#064E3B]">Dr. Prakash Chand Shahi</span>
                    <span className="text-[9px] font-mono font-bold px-2 py-0.5 rounded-full bg-[#F0FDF4] text-[#064E3B] border border-[#34D399]">LEAD CLINICIAN</span>
                  </div>
                  <span className="text-[10px] text-slate-700 font-mono font-semibold block">
                    DM Cardiology (PGIMER) • MD (KGMU Lucknow)
                  </span>
                </div>
              </div>
            </div>

            {/* Linear Procedure Streamers with Thumbnail Images (VISUAL-FIRST) */}
            <div className="space-y-3 pt-1 max-w-xl">
              {procedures.map((proc, idx) => (
                <div 
                  key={idx}
                  className="group flex items-center gap-3.5 p-2 rounded-2xl bg-white/80 hover:bg-white border border-[#A7F3D0]/70 hover:border-[#059669] shadow-xs hover:shadow-md transition-all duration-300 hover:translate-x-1"
                >
                  <img
                    src={proc.image}
                    alt={proc.title}
                    className="w-14 h-14 rounded-xl object-cover shrink-0 border border-[#A7F3D0]/60 group-hover:scale-105 transition-transform"
                  />
                  <div className="space-y-0.5 flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="text-xs sm:text-sm font-bold text-[#064E3B] group-hover:text-[#047857] transition-colors truncate">
                        {proc.title}
                      </h3>
                      <span className="text-[9px] font-mono font-bold px-2 py-0.5 rounded-full bg-[#F0FDF4] text-[#064E3B] border border-[#A7F3D0] shrink-0">
                        {proc.metric}
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-600 leading-snug truncate">
                      {proc.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Action Row */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Link
                to="/treatments"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#064E3B] via-[#047857] to-[#059669] hover:from-[#022C22] hover:to-[#064E3B] text-white font-bold text-xs uppercase tracking-wider shadow-md shadow-[#064E3B]/20 transition-all hover:scale-102"
              >
                <span>Explore Treatments Dossier</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                to="/book-appointment"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/90 hover:bg-white text-[#064E3B] font-bold text-xs uppercase tracking-wider border border-[#A7F3D0] shadow-sm transition-all backdrop-blur-md"
              >
                <span>Consult Dr. Prakash Chand Shahi</span>
                <ChevronRight className="w-4 h-4 text-[#059669]" />
              </Link>
            </div>

          </div>

          {/* Right Column (6 Cols): Cinematic Medical Video / Fluoroscopic Image Showcase (NO CARDS) */}
          <div className="lg:col-span-6 space-y-4">
            
            {/* The Main High-End Visual Console Powered by SectionCinematicVideo */}
            <SectionCinematicVideo
              type={currentVisual.type || "cardiology-heart"}
              videoUrl={currentVisual.videoUrl}
              styleVariant="floating-3d"
              posterImage={currentVisual.image}
              title={currentVisual.title}
              subtitle={currentVisual.tag}
              specs={`${currentVisual.stat} • Live Broadcast`}
              aspectRatio="aspect-[4/3] sm:aspect-[16/11]"
            />

            {/* Seamless Visual Channel Switcher (NO CARDS) */}
            <div className="flex items-center gap-2 pt-1">
              {Object.values(visuals).map((vis) => {
                const active = activeVisual === vis.id;
                return (
                  <button
                    key={vis.id}
                    onClick={() => setActiveVisual(vis.id)}
                    className={`flex-1 py-2.5 px-3 rounded-2xl text-xs font-bold tracking-wide transition-all duration-300 text-center ${
                      active
                        ? 'bg-[#064E3B] text-white shadow-md scale-102'
                        : 'bg-white/80 hover:bg-white text-slate-700 border border-[#A7F3D0]/60'
                    }`}
                  >
                    {vis.title.split(' ')[0]} {vis.title.split(' ')[1] || ''}
                  </button>
                );
              })}
            </div>

            {/* Verified Clinical Facts Ribbon Seamlessly Under Visual (NO CARDS) */}
            <div className="pt-3 grid grid-cols-2 divide-x divide-slate-300/70 border-t border-slate-200/80">
              <div className="pr-4 text-left">
                <span className="text-2xl font-extrabold text-[#064E3B] block">12,000+</span>
                <span className="text-xs text-slate-600 font-semibold uppercase tracking-wider block">Catheter Interventions</span>
                <span className="text-[11px] text-slate-500">Transradial angioplasty, stenting & pacemakers</span>
              </div>
              <div className="pl-4 text-left">
                <span className="text-2xl font-extrabold text-[#047857] block">&lt; 45 Min</span>
                <span className="text-xs text-slate-600 font-semibold uppercase tracking-wider block">Door-To-Balloon STEMI</span>
                <span className="text-[11px] text-slate-500">24/7 flat-panel Artis Zee Cath Lab standby</span>
              </div>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
