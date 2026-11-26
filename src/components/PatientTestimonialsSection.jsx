import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ShieldCheck, Heart, Sparkles, CheckCircle2, Quote, UserCheck } from 'lucide-react';
import { PULSE_DATA } from '../data/pulseData';
import SectionBackgroundMotion from './SectionBackgroundMotion';
import ThreeDImageCard from './ThreeDImageCard';
import Interactive3DTilt from './Interactive3DTilt';
import ScrollReveal from './ScrollReveal';

export default function PatientTestimonialsSection() {
  const [activeStory, setActiveStory] = useState(0);

  const stories = [
    {
      id: 'story-1',
      name: 'Ramakant Tripathi',
      age: '62 Yrs • Gorakhpur',
      condition: '3 Blocked Heart Arteries',
      procedure: 'Heart Stenting (Wrist)',
      recovery: 'Discharged in 24 Hrs',
      doctor: 'Dr. Prakash Chand Shahi',
      quote: 'Smooth stent treatment through the wrist with two stents. I was walking the next morning with no leg pain at all.',
      image: '/images/doctor-recovery-discharge.jpg',
      stat: '99.4% Blood Flow Restored',
      badge: 'Heart Recovery'
    },
    {
      id: 'story-2',
      name: 'Shanti Devi',
      age: '68 Yrs • Deoria',
      condition: 'Very Slow Heartbeat (Heart Block)',
      procedure: 'Pacemaker Implant',
      recovery: 'Active Lifestyle Restored',
      doctor: 'Dr. Prakash Chand Shahi',
      quote: 'Pulse rate was dropping below 35 BPM. Dr. Shahi placed the pacemaker smoothly; I feel healthy and active again.',
      image: '/images/hospital-ward-suites.jpg',
      stat: 'Steady Heartbeat',
      badge: 'Pacemaker Recovery'
    },
    {
      id: 'story-3',
      name: 'Mohd. Tariq Siddiqui',
      age: '52 Yrs • Basti',
      condition: 'Emergency Heart Attack',
      procedure: 'Urgent Heart Stenting',
      recovery: 'Discharged in 48 Hrs',
      doctor: 'Dr. Prakash Chand Shahi',
      quote: 'Reached PULSE in emergency. Dr. Shahi opened the 100% blocked heart artery quickly and saved my life.',
      image: '/images/patient-recovery-story.jpg',
      stat: 'Fast < 38 Min Care',
      badge: 'Emergency Heart Care'
    }
  ];

  const current = stories[activeStory];

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden select-none bg-gradient-to-b from-[#FAF9F6] via-[#F8FAFC] to-[#F1F5F9] border-b border-slate-200">
      {/* Bespoke Concentric Healing Resonance Waves & Luminescent Constellation */}
      <SectionBackgroundMotion variant="home-testimonials" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header with Doctor Stewardship Stamp */}
        <ScrollReveal variant="fade-down">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-rose-200 text-[#BE123C] text-xs font-mono font-bold shadow-xs">
              <Heart className="w-3.5 h-3.5 text-[#BE123C] fill-[#BE123C] animate-pulse" />
              <span className="uppercase tracking-widest">Verified Clinical Outcomes</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0A1128] tracking-tight">
              Patient Stories &amp; <span className="font-serif italic font-normal text-[#BE123C]">Recovery Journeys</span>
            </h2>

            <div className="flex items-center justify-center gap-2 pt-1">
              <div className="flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 shadow-xs">
                <img
                  src="/images/doctor-portrait.jpg"
                  alt="Dr. Prakash Chand Shahi"
                  loading="lazy"
                  className="w-7 h-7 rounded-full object-cover object-[50%_20%] border border-rose-300 shrink-0"
                />
                <span className="text-[11px] font-bold text-[#0A1128]">Under Clinical Direction of Dr. Prakash Chand Shahi</span>
              </div>
            </div>
          </div>
        </ScrollReveal>

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

          {/* Right: Minimal Punchy Testimonial Quote & Switchers with 3D Tilt */}
          <div className="lg:col-span-5 space-y-6">
            <Interactive3DTilt maxTilt={8} glowColor="rgba(190, 18, 60, 0.22)">
              <motion.div
                key={current.id + '-quote'}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="p-8 rounded-[2rem] bg-white/95 backdrop-blur-xl border-2 border-slate-200 shadow-xl space-y-4 text-left relative card-hover-elevate"
              >
                <Quote className="w-10 h-10 text-rose-200/60 absolute top-6 right-6 -z-0" />
                
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
                    <span className="text-xs font-bold text-[#0A1128] block">{current.procedure}</span>
                    <span className="text-[11px] font-mono text-[#BE123C] font-semibold">{current.recovery}</span>
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-50 text-[#BE123C] text-[10px] font-bold border border-rose-200">
                    <UserCheck className="w-3.5 h-3.5" />
                    <span>Clinical Case File</span>
                  </div>
                </div>
              </motion.div>
            </Interactive3DTilt>

            {/* Quick Case Switcher Tabs */}
            <div className="flex gap-3">
              {stories.map((s, idx) => {
                const isActive = activeStory === idx;
                return (
                  <button
                    key={s.id}
                    onClick={() => setActiveStory(idx)}
                    className={`flex-1 p-3 rounded-2xl border-2 transition-all duration-300 text-left cursor-pointer hover:scale-105 active:scale-95 ${
                      isActive
                        ? 'bg-white border-[#BE123C] shadow-lg ring-2 ring-rose-200 scale-102'
                        : 'bg-white/80 border-slate-200 hover:border-rose-300 shadow-xs'
                    }`}
                  >
                    <span className={`text-[10px] font-mono font-bold block ${isActive ? 'text-[#BE123C]' : 'text-slate-500'}`}>
                      CASE 0{idx + 1}
                    </span>
                    <span className="text-xs font-bold text-[#0A1128] truncate block mt-0.5">
                      {s.name.split(' ')[0]}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
