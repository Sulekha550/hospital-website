import React, { useState } from 'react';
import { Heart, Sparkles, MessageSquare, Quote, Star, ShieldCheck, ChevronLeft, ChevronRight, UserCheck } from 'lucide-react';
import { PULSE_DATA } from '../data/pulseData';

/**
 * PatientTestimonialsSection
 * Visual & Motion Identity: Editorial Magazine Recovery Narratives
 * Color Palette: Warm Amber, Soft Champagne & Radiant Rose
 * Motion Features:
 * - Breathing golden amber ambient glow
 * - Smooth animated carousel slide transitions
 * - Interactive navigation with progress indicators
 * - Quotation reveal animation
 */
export default function PatientTestimonialsSection() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      quote: "When my local physician in Basti suggested open bypass surgery for an 85% LAD blockage, we sought a second opinion with Dr. Shahi at Pulse Heart Centre. He evaluated my angiography with immense clarity and performed a painless transradial angioplasty with a drug-eluting stent. I was comfortably walking 24 hours later.",
      patient: "Rajendra Nath Tiwari",
      age: "62 Years",
      location: "Basti / Gorakhpur",
      condition: "Severe Exertional Angina & Coronary Stenosis",
      procedure: "Transradial LAD Balloon Angioplasty & Stenting",
      outcome: "Full Vessel Patency Restored · Asymptomatic at 3 Years",
      year: "2024",
    },
    {
      id: 2,
      quote: "My father experienced recurrent dizziness and a heart rate dropping into the 30s. Dr. Prakash Chand Shahi diagnosed complete AV block and implanted a dual-chamber permanent pacemaker at Pulse Heart Centre. His bedside warmth, patience in answering our family's anxieties, and post-procedure care were extraordinary.",
      patient: "Sunita Verma (Daughter of Patient)",
      age: "Family Caregiver",
      location: "Betiahata, Gorakhpur",
      condition: "Symptomatic High-Grade AV Block & Syncope",
      procedure: "Dual-Chamber Permanent Pacemaker Implantation",
      outcome: "Stable 72 BPM Sinus Rhythm Restored · Active Lifestyle",
      year: "2023",
    },
    {
      id: 3,
      quote: "The contrast between an ordinary crowded clinic and Pulse Heart Centre is night and day. Dr. Shahi spends genuine time reviewing your ECG and explaining each medication. He does not rush to procedures if lifestyle and medical therapy are sufficient. That ethical integrity is rare.",
      patient: "Mohammad Arif Siddiqui",
      age: "54 Years",
      location: "Civil Lines, Gorakhpur",
      condition: "Hypertensive Heart Disease & Dyslipidemia",
      procedure: "Comprehensive Hemodynamic & CT Calcium Evaluation",
      outcome: "Blood Pressure Normalized · Controlled Plaque Progression",
      year: "2024",
    },
  ];

  const outcomes = [
    { figure: '99.4%', label: 'Procedural Patency', sub: 'Coronary & Peripheral Vessel Flow' },
    { figure: '98.7%', label: 'Transradial Access', sub: 'Wrist-First Patient Comfort Rate' },
    { figure: '>4,200', label: 'Stents Deployed', sub: 'Meticulous Intraluminal Apposition' },
    { figure: '22+', label: 'Years Devotion', sub: 'Bedside Leadership in Gorakhpur' },
  ];

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[activeTestimonial];

  return (
    <section className="relative py-28 lg:py-36 overflow-hidden select-none">
      
      {/* =========================================================================
          ANIMATED SECTION BACKGROUND: WARM AMBER, SOFT CHAMPAGNE & CARDIAC WAVE
         ========================================================================= */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        {/* Warm Golden Amber Glow */}
        <div className="absolute top-1/4 -left-20 w-[700px] h-[700px] rounded-full bg-gradient-to-tr from-amber-400/20 via-orange-300/15 to-rose-200/20 blur-[150px] animate-morph animate-float-1" />
        
        {/* Soft Champagne & Rose Diffusion */}
        <div className="absolute bottom-10 right-10 w-[650px] h-[650px] rounded-full bg-gradient-to-bl from-rose-300/20 via-pink-200/15 to-purple-100/15 blur-[150px] animate-float-3" />

        {/* Monumental Watermark Typography */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-serif italic text-[17vw] text-amber-950/[0.03] whitespace-nowrap pointer-events-none">
          HEALING • STORIES
        </div>

        {/* Ambient Heartline Polyline */}
        <svg className="absolute inset-0 w-full h-full opacity-30" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M -50,550 L 300,550 L 320,530 L 335,580 L 350,500 L 365,600 L 380,550 L 800,550 L 820,530 L 835,580 L 850,500 L 865,600 L 880,550 L 1400,550 L 1420,530 L 1435,580 L 1450,500 L 1465,600 L 1480,550 L 2200,550"
            fill="none"
            stroke="#D97706"
            strokeWidth="1.8"
            strokeLinecap="round"
            className="animate-ecg-dash"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="mb-16 text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-amber-600 to-rose-600 text-white text-xs font-mono font-medium shadow-md animate-float-bob">
            <Heart className="w-4 h-4 text-white" />
            <span className="uppercase tracking-[0.2em]">Patient Recovery Chronicles</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-semibold text-slate-950 tracking-tight leading-[1.08]">
            Restoring Life, Rhythm & <br />
            <span className="font-serif italic font-normal text-amber-800">Peace of Mind for Families</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-700 font-medium max-w-2xl mx-auto leading-relaxed">
            Authentic experiences from patients and families treated by Dr. Prakash Chand Shahi at Pulse Heart Centre, Betiahata.
          </p>
        </div>

        {/* Master Testimonial Editorial Spread with Smooth Slider */}
        <div className="relative rounded-[2.5rem] bg-gradient-to-br from-white via-amber-50/20 to-white border-2 border-amber-200/80 shadow-layered p-8 sm:p-12 max-w-5xl mx-auto text-left transition-all duration-400 hover:shadow-2xl">
          
          <div className="flex flex-col md:flex-row items-start justify-between gap-6 pb-6 border-b border-amber-100">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/20 border border-amber-400/40 flex items-center justify-center text-amber-800 font-serif italic text-2xl font-bold">
                “
              </div>
              <div>
                <span className="text-xs font-mono font-medium uppercase tracking-wider text-amber-900 block">
                  Verified Case Study • {current.year}
                </span>
                <span className="text-xs text-slate-500 font-medium">
                  Diagnosis: <strong className="text-slate-900">{current.condition}</strong>
                </span>
              </div>
            </div>

            {/* Interactive Carousel Navigation */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5 mr-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveTestimonial(i)}
                    aria-label={`Go to slide ${i + 1}`}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      activeTestimonial === i
                        ? 'w-6 bg-amber-600'
                        : 'w-2 bg-slate-300 hover:bg-slate-400'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={prevTestimonial}
                aria-label="Previous testimonial"
                className="w-10 h-10 rounded-full bg-white hover:bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-700 hover:text-slate-950 shadow-xs transition-all hover:scale-105 active:scale-95"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={nextTestimonial}
                aria-label="Next testimonial"
                className="w-10 h-10 rounded-full bg-slate-950 hover:bg-slate-800 text-white flex items-center justify-center shadow-md transition-all hover:scale-105 active:scale-95"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Testimonial Quote with Fade In */}
          <div className="py-8 space-y-6">
            <p className="text-lg sm:text-2xl font-serif italic text-slate-900 leading-relaxed font-normal transition-opacity duration-300">
              "{current.quote}"
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-amber-100">
              <div className="space-y-1">
                <span className="text-base font-semibold text-slate-950 block">
                  {current.patient}
                </span>
                <span className="text-xs text-slate-500 font-mono block">
                  {current.location} • {current.age}
                </span>
              </div>

              <div className="space-y-1 md:text-right">
                <span className="text-xs font-mono font-medium text-purple-900 block">
                  {current.procedure}
                </span>
                <span className="text-xs font-mono font-medium text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-full inline-block">
                  {current.outcome}
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Quantitative Clinical Outcome Metrics */}
        <div className="mt-14 p-6 sm:p-8 rounded-[2rem] bg-white border-2 border-slate-200 shadow-md max-w-5xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {outcomes.map((stat, idx) => (
              <div key={idx} className="space-y-1 group cursor-default">
                <span className="text-3xl sm:text-4xl font-semibold text-slate-950 font-serif italic block transition-transform duration-300 group-hover:scale-110 group-hover:text-amber-700">
                  {stat.figure}
                </span>
                <span className="text-xs font-medium text-slate-800 uppercase tracking-wide block">
                  {stat.label}
                </span>
                <span className="text-[11px] font-medium text-slate-500 block">
                  {stat.sub}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
