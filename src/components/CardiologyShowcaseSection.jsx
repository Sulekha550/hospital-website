import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HeartPulse, CheckCircle2, ArrowRight, ShieldCheck, Activity, Award, Play, Eye, Sparkles, ChevronRight } from 'lucide-react';
import CardiologyFullCanvas from './CardiologyFullCanvas';

/**
 * CardiologyShowcaseSection
 * Section just below Hero:
 * - Full-bleed 3D Anatomical Heart environment with glowing coronary pathways & ventricular pulse
 * - Dual-pane cinematic medical video & real clinical photography showcase
 * - ZERO boxed cards: seamless linear procedural streamers & integrated telemetry ribbons
 */
export default function CardiologyShowcaseSection() {
  const [activeVisual, setActiveVisual] = useState('angiogram');

  const visuals = {
    angiogram: {
      id: 'angiogram',
      title: 'Digital Cineangiography Fluoroscopy',
      badge: 'LIVE CATH-LAB FLURO',
      image: '/images/angiogram-scan.jpg',
      caption: 'Real-time fluoroscopic stenosis localization & micro-guidewire navigation.',
      stat: '0.5 mm Spatial Stenosis Resolution',
      tag: 'DIAGNOSTIC CATHETERIZATION'
    },
    cathlab: {
      id: 'cathlab',
      title: 'Siemens Artis Zee Flat-Panel Cath Lab',
      badge: 'SURGICAL THEATRE',
      image: '/images/cath-lab.jpg',
      caption: 'Ultra-low radiation fluoroscopic vascular intervention suite in Betiahata.',
      stat: '< 45 Min STEMI Door-To-Balloon',
      tag: 'INTERVENTIONAL SUITE'
    },
    consult: {
      id: 'consult',
      title: 'Executive Bedside Dialogue',
      badge: 'DR. PRAKASH CHAND SHAHI',
      image: '/images/doctor-consulting.jpg',
      caption: 'Unhurried review of angiogram CDs and customized medical therapy.',
      stat: '22+ Years Clinical Ethics',
      tag: 'OPD CONSULTATION'
    }
  };

  const currentVisual = visuals[activeVisual];

  const procedures = [
    {
      num: "01",
      title: "Transradial Coronary Angioplasty & Stenting",
      tagline: "Wrist-First Access",
      desc: "Microscopic radial artery puncture eliminating painful groin immobilization and reducing bleeding complications to near-zero."
    },
    {
      num: "02",
      title: "Definitive Coronary Angiogram (CAG)",
      tagline: "Fluoroscopic Mapping",
      desc: "Under 15 minutes outpatient exam establishing precise luminal stenosis architecture and myocardial collateral flow."
    },
    {
      num: "03",
      title: "Permanent Pacemaker Implantation (PPI)",
      tagline: "Physiological Pacing",
      desc: "Dual-chamber rate-responsive pulse generators restoring natural cardiac rhythm with 10–14 year titanium battery longevity."
    },
    {
      num: "04",
      title: "128-Slice Volumetric CT Coronary Angiography",
      tagline: "Non-Invasive 3D Scan",
      desc: "Ultra-fast coronary tree and plaque calcification evaluation in a single breath-hold without catheter insertion."
    }
  ];

  return (
    <section id="cardiology" className="relative min-h-[90vh] lg:min-h-screen flex items-center py-24 px-4 sm:px-6 lg:px-12 overflow-hidden bg-gradient-to-b from-[#FFFFFF] via-[#F4F9FD] to-[#EBF4FA] border-b border-sky-100 select-none">
      
      {/* 1. FULL-BLEED 3D ENDOVASCULAR STENT SCULPTURE & PULSE CANVAS (Background) */}
      <CardiologyFullCanvas />

      {/* Distinct Section 2 Background: Medical Azure, Sky & Delicate Coral Laser Guides */}
      <div className="absolute inset-0 pointer-events-none -z-5 overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-[#2788B8]/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-10 right-1/4 w-[600px] h-[600px] bg-[#A9D8E9]/20 rounded-full blur-[150px]" />
        
        {/* Concentric Architectural Radar Scan Rings */}
        <svg className="absolute -right-32 top-1/2 -translate-y-1/2 w-[700px] h-[700px] opacity-15" viewBox="0 0 700 700">
          <circle cx="350" cy="350" r="180" fill="none" stroke="#2788B8" strokeWidth="1" strokeDasharray="4 8" />
          <circle cx="350" cy="350" r="280" fill="none" stroke="#2788B8" strokeWidth="0.8" strokeDasharray="6 12" />
          <circle cx="350" cy="350" r="340" fill="none" stroke="#2788B8" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10 py-6">
        
        {/* Section Headline & Pedigree (No Boxed Cards) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          
          {/* Left Column (6 Cols): Editorial Flow & Linear Procedure Streamers */}
          <div className="lg:col-span-6 space-y-6 text-left">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 text-[#173C59] border border-sky-200/80 text-xs font-bold uppercase tracking-[0.22em] shadow-xs">
              <HeartPulse className="w-4 h-4 text-[#2788B8] animate-pulse" />
              <span>Cardiovascular Sciences & Hemodynamics</span>
            </div>

            <div className="space-y-3">
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#173C59] tracking-[-0.03em] leading-[1.06]">
                Preserving Every <br />
                <span className="font-serif italic font-normal text-[#2788B8]">Heartbeat with Precision.</span>
              </h2>
              <p className="text-base sm:text-lg font-light text-slate-700 tracking-[-0.01em]">
                Directed by <strong className="font-semibold text-[#173C59]">Dr. Prakash Chand Shahi</strong> (DM Cardiology PGIMER, MD KGMU Lucknow).
              </p>
            </div>

            <p className="text-sm sm:text-base text-slate-700 max-w-xl leading-relaxed">
              Pulse Heart Centre is eastern UP’s apex institute for complex coronary bifurcation stenting, emergency primary angioplasties in acute myocardial infarction, and permanent physiological pacing.
            </p>

            {/* Linear Procedure Streamers (NO BOXED CARDS - Clean Seamless Typography) */}
            <div className="space-y-4 pt-2 max-w-xl">
              {procedures.map((proc, idx) => (
                <div 
                  key={idx}
                  className="group flex items-start gap-4 pb-4 border-b border-rose-200/60 transition-all duration-300 hover:translate-x-1"
                >
                  <span className="font-mono text-sm font-extrabold text-rose-600/80 group-hover:text-rose-600 transition-colors shrink-0 pt-0.5">
                    {proc.num}
                  </span>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <h3 className="text-sm sm:text-base font-bold text-[#173C59] group-hover:text-rose-700 transition-colors">
                        {proc.title}
                      </h3>
                      <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full bg-rose-50 text-rose-700 border border-rose-200">
                        {proc.tagline}
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {proc.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Action Row */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Link
                to="/specialities/cardiology"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-rose-600/25 transition-all hover:scale-102"
              >
                <span>Explore Cardiology Dossier</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                to="/book-appointment?dept=cardiology"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/80 hover:bg-white text-[#173C59] font-bold text-xs uppercase tracking-wider border border-white/90 shadow-md transition-all backdrop-blur-md"
              >
                <span>Consult Dr. Prakash Chand Shahi</span>
                <ChevronRight className="w-4 h-4 text-rose-600" />
              </Link>
            </div>

          </div>

          {/* Right Column (6 Cols): Cinematic Medical Video / Fluoroscopic Image Showcase (NO CARDS) */}
          <div className="lg:col-span-6 space-y-4">
            
            {/* The Main High-End Visual Console */}
            <div className="relative rounded-[2.5rem] overflow-hidden border-2 border-white/90 shadow-2xl bg-slate-950 aspect-[4/3] sm:aspect-[16/11] group">
              
              {/* Active Image / Fluoroscopy Frame */}
              <img
                src={currentVisual.image}
                alt={currentVisual.title}
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 filter brightness-[0.9] contrast-[1.08]"
              />

              {/* Dynamic Laser Scanning Plane Effect Over Angiogram */}
              {activeVisual === 'angiogram' && (
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                  <div className="w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_15px_#22d3ee] animate-pulse-glow" style={{ animationDuration: '2.5s' }} />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-cyan-400/50 rounded-full animate-ping pointer-events-none" style={{ animationDuration: '3s' }} />
                </div>
              )}

              {/* Video Scanline & Vignette Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/20 to-slate-950/30 pointer-events-none" />

              {/* Top Status HUD */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-20 text-white text-[11px] font-mono">
                <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20">
                  <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
                  <span className="font-bold tracking-wider">{currentVisual.badge}</span>
                </div>

                <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-emerald-400 font-bold">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{currentVisual.stat}</span>
                </div>
              </div>

              {/* Bottom Visual Meta & Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-6 z-20 text-white space-y-1.5">
                <span className="text-[10px] font-mono tracking-widest text-rose-300 uppercase block">
                  {currentVisual.tag}
                </span>
                <h3 className="text-xl font-extrabold text-white tracking-tight">
                  {currentVisual.title}
                </h3>
                <p className="text-xs text-slate-300 max-w-md leading-relaxed">
                  {currentVisual.caption}
                </p>
              </div>

            </div>

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
                        ? 'bg-rose-600 text-white shadow-md scale-102'
                        : 'bg-white/70 hover:bg-white text-slate-700 border border-white/90'
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
                <span className="text-2xl font-extrabold text-[#173C59] block">12,000+</span>
                <span className="text-xs text-slate-600 font-semibold uppercase tracking-wider block">Catheter Interventions</span>
                <span className="text-[11px] text-slate-500">Transradial angioplasty, stenting & pacemakers</span>
              </div>
              <div className="pl-4 text-left">
                <span className="text-2xl font-extrabold text-rose-600 block">&lt; 45 Min</span>
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
