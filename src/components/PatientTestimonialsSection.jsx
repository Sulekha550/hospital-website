import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, ShieldCheck, Heart, Sparkles, CheckCircle2, Quote, UserCheck } from 'lucide-react';
import { PULSE_DATA } from '../data/pulseData';
import SectionCinematicVideo from './SectionCinematicVideo';
import ThreeDImageCard from './ThreeDImageCard';

export default function PatientTestimonialsSection() {
  const [activeStory, setActiveStory] = useState(0);

  const stories = [
    {
      id: 'story-1',
      name: 'Ramakant Tripathi',
      age: '62 Yrs • Gorakhpur',
      condition: 'Triple Vessel Disease',
      procedure: 'Transradial Stenting',
      recovery: 'Discharged in 24 Hrs',
      doctor: 'Dr. Prakash Chand Shahi',
      quote: 'Flawless wrist-first angioplasty with two stents. Walking the next morning with zero groin pain.',
      image: '/images/patient-recovery-story.jpg',
      stat: '99.4% Flow Restored',
      badge: 'Cardiac Recovery'
    },
    {
      id: 'story-2',
      name: 'Shanti Devi',
      age: '68 Yrs • Deoria',
      condition: 'Complete Heart Block (Bradycardia)',
      procedure: 'Dual-Chamber Pacemaker (PPI)',
      recovery: 'Active Lifestyle Restored',
      doctor: 'Dr. Prakash Chand Shahi',
      quote: 'Pulse rate was dropping below 35 BPM. Dr. Shahi implanted the pacemaker smoothly; feeling energetic now.',
      image: '/images/patient-care-recovery.jpg',
      stat: '100% Sinus Synchrony',
      badge: 'Pacemaker Recovery'
    },
    {
      id: 'story-3',
      name: 'Mohd. Tariq Siddiqui',
      age: '52 Yrs • Basti',
      condition: 'Acute Anterior Wall STEMI',
      procedure: 'Primary Transradial Angioplasty',
      recovery: 'Discharged in 48 Hrs',
      doctor: 'Dr. Prakash Chand Shahi',
      quote: 'Reached PULSE Cath-Lab in emergency. Immediate stent opened 100% blocked LAD artery within minutes.',
      image: '/images/doctor-bedside-consult.jpg',
      stat: '< 38 Min Door-to-Balloon',
      badge: 'Emergency Angioplasty'
    }
  ];

  const current = stories[activeStory];

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden select-none bg-gradient-to-b from-[#FAFBFD] via-[#FEF2F2]/25 to-[#FAFBFD]">
      
      {/* =========================================================================
          UNIQUE SECTION BACKGROUND: TESTIMONIAL VIDEO & SOUNDWAVE HARMONICS
         ========================================================================= */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        {/* Ambient Video Background Layer */}
        <div className="absolute inset-0 z-0 opacity-20 mix-blend-multiply overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            className="w-full h-full object-cover scale-105"
          >
            <source src="/videos/testimonials-stories.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-[#FAFBFD]/80 via-transparent to-[#FAFBFD]/90" />
        </div>

        {/* Luminous Glow Spheres */}
        <div className="absolute top-1/4 -left-20 w-[600px] h-[600px] bg-gradient-to-tr from-[#0284C7]/20 via-teal-300/15 to-transparent rounded-full blur-[140px]" />
        <div className="absolute bottom-10 -right-20 w-[600px] h-[600px] bg-gradient-to-bl from-amber-400/15 via-rose-300/10 to-transparent rounded-full blur-[140px]" />

        {/* Dynamic Heartbeat Soundwave Harmonics */}
        <svg className="absolute inset-0 w-full h-full opacity-25" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="soundwaveGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#B91C1C" stopOpacity="0.2" />
              <stop offset="50%" stopColor="#0284C7" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#F59E0B" stopOpacity="0.3" />
            </linearGradient>
          </defs>
          <path
            d="M 0,260 Q 300,180 600,260 T 1200,260 T 1800,260"
            fill="none"
            stroke="url(#soundwaveGrad)"
            strokeWidth="2"
            strokeDasharray="6 6"
            className="animate-flow-dash"
          />
          <path
            d="M 0,480 Q 400,560 800,480 T 1600,480"
            fill="none"
            stroke="#B91C1C"
            strokeWidth="1.5"
            strokeDasharray="4 8"
          />
        </svg>

        {/* Sweeping Laser Beam in Testimonials Section */}
        <div className="absolute inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#0EA5E9] to-transparent shadow-[0_0_15px_#0284C7] opacity-40 animate-laser-v pointer-events-none" />

        {/* Rotating CAD Precision Ring */}
        <div className="absolute -bottom-16 -left-16 w-80 h-80 rounded-full border border-[#0284C7]/20 hidden lg:block">
          <div className="absolute inset-4 rounded-full border border-dashed border-[#0EA5E9]/30 animate-gentle-cw" />
        </div>

        {/* Floating Medical Crosses */}
        <div className="absolute top-16 right-16 text-[#0284C7]/30 font-mono text-base font-bold animate-medical-cross-1 select-none">+</div>
        <div className="absolute bottom-20 left-12 text-[#0284C7]/25 font-mono text-base font-bold animate-medical-cross-2 select-none">+</div>

        {/* Big Watermark */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[16vw] font-black text-[#991B1B]/[0.02] tracking-tighter uppercase select-none">
          RECOVERY
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header with Doctor Stewardship Stamp */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FEF2F2]/80 border border-[#FECDD3] text-[#991B1B] text-xs font-mono font-bold shadow-xs">
            <Heart className="w-3.5 h-3.5 text-rose-600 fill-rose-600 animate-pulse" />
            <span className="uppercase tracking-widest">Verified Clinical Outcomes</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#991B1B] tracking-tight">
            Patient Stories &amp; <span className="font-serif italic font-normal text-[#B91C1C]">Recovery Journeys</span>
          </h2>

          <div className="flex items-center justify-center gap-2 pt-1">
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#FECDD3] shadow-xs">
              <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#991B1B] to-[#B91C1C] flex items-center justify-center text-[#FECDD3] border border-[#FECDD3]">
                <ShieldCheck className="w-3.5 h-3.5" />
              </div>
              <span className="text-[11px] font-bold text-[#991B1B]">Under Clinical Direction of Dr. Prakash Chand Shahi</span>
            </div>
          </div>
        </div>

        {/* 90% Visual Showcase: Grand Interactive Story Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-6xl mx-auto">
          
          {/* Left: Large High-Resolution Patient Recovery Imagery in 3D */}
          <div className="lg:col-span-7">
            <ThreeDImageCard
              key={current.id}
              src={current.image}
              alt={current.name}
              aspectRatio="aspect-[16/10] sm:aspect-[16/11]"
              badge={current.badge}
              stat={current.stat}
              statSub={`${current.condition} • ${current.recovery}`}
              title={`${current.name} (${current.age}) — ${current.doctor}`}
            />
          </div>

          {/* Right: Minimal Punchy Testimonial Quote & Switchers */}
          <div className="lg:col-span-5 space-y-6">
            <motion.div
              key={current.id + '-quote'}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="p-8 rounded-[2rem] bg-white border-2 border-[#FECDD3]/90 shadow-xl space-y-4 text-left relative"
            >
              <Quote className="w-10 h-10 text-[#FECDD3] absolute top-6 right-6 -z-0" />
              
              <div className="flex items-center gap-1 text-amber-400 relative z-10">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
                <span className="text-xs font-bold text-slate-700 ml-2">5.0 Verified Care</span>
              </div>

              <p className="text-base sm:text-lg font-medium text-slate-800 leading-snug relative z-10 italic">
                "{current.quote}"
              </p>

              <div className="pt-2 border-t border-slate-100 flex items-center justify-between relative z-10">
                <div>
                  <span className="text-xs font-bold text-[#991B1B] block">{current.procedure}</span>
                  <span className="text-[11px] font-mono text-[#B91C1C] font-semibold">{current.recovery}</span>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FEF2F2] text-[#991B1B] text-[10px] font-bold">
                  <UserCheck className="w-3.5 h-3.5" />
                  <span>Clinical Case File</span>
                </div>
              </div>
            </motion.div>

            {/* Quick Selectors */}
            <div className="flex gap-3">
              {stories.map((s, idx) => (
                <button
                  key={s.id}
                  onClick={() => setActiveStory(idx)}
                  className={`flex-1 p-3 rounded-2xl border-2 transition-all text-left ${
                    activeStory === idx
                      ? 'bg-white border-[#0284C7] shadow-md ring-2 ring-rose-200'
                      : 'bg-white/70 border-slate-200 hover:border-[#FECDD3]'
                  }`}
                >
                  <span className="text-[10px] font-mono font-bold text-[#991B1B] block">CASE 0{idx + 1}</span>
                  <span className="text-xs font-bold text-slate-900 truncate block">{s.name.split(' ')[0]}</span>
                </button>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
