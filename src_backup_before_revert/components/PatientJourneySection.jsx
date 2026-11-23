import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, ChevronRight, Sparkles } from 'lucide-react';
import { PULSE_DATA } from '../data/pulseData';

export default function PatientJourneySection() {
  const { patientJourney } = PULSE_DATA;
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="py-20 lg:py-28 bg-[#0E2538] text-white relative z-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-16">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#2788B8]">
              Section 08 • Process Architecture
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-1">
              The Patient Care Journey
            </h2>
          </div>
          <p className="text-sm text-slate-300 max-w-md">
            Inspired by international clinical workflows—transparent, unhurried, and designed for complete physical and emotional recovery.
          </p>
        </div>

        {/* 5-Step Process Timeline Board */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 relative">
          
          {/* Subtle Horizontal Connecting Progress Line for Desktop */}
          <div className="hidden lg:block absolute top-12 left-8 right-8 h-0.5 bg-white/15 -z-0" />

          {patientJourney.map((step, idx) => {
            const isActive = idx === activeStep;

            return (
              <div
                key={step.step}
                onClick={() => setActiveStep(idx)}
                className={`cursor-pointer rounded-3xl p-6 transition-all duration-300 border flex flex-col justify-between relative z-10 ${
                  isActive
                    ? 'bg-[#173C59] border-[#2788B8] shadow-xl shadow-[#2788B8]/15 translate-y-[-6px]'
                    : 'bg-white/5 border-white/10 hover:bg-white/10'
                }`}
              >
                <div>
                  {/* Top Step Number Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <span
                      className={`text-2xl font-extrabold font-mono transition-colors ${
                        isActive ? 'text-[#A9D8E9]' : 'text-slate-500'
                      }`}
                    >
                      {step.step}
                    </span>

                    <span
                      className={`w-3 h-3 rounded-full border-2 transition-all ${
                        isActive
                          ? 'border-[#2788B8] bg-white scale-125'
                          : 'border-slate-500 bg-transparent'
                      }`}
                    />
                  </div>

                  {/* Step Title & Subtitle */}
                  <h3
                    className={`text-base font-bold transition-colors ${
                      isActive ? 'text-white' : 'text-slate-200'
                    }`}
                  >
                    {step.title}
                  </h3>
                  <div className="text-[11px] font-semibold text-[#A9D8E9] mt-0.5">
                    {step.subtitle}
                  </div>

                  {/* Step Detailed Description */}
                  <p className="text-xs text-slate-300 mt-3 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Active Indicator Strip */}
                <div className="mt-6 pt-3 border-t border-white/10 flex items-center justify-between text-[11px]">
                  <span className={isActive ? 'text-[#A9D8E9] font-bold' : 'text-slate-500'}>
                    Phase {step.step}
                  </span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#A9D8E9] animate-pulse" />}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Booking Quick Bar */}
        <div className="mt-14 p-6 rounded-3xl bg-white/5 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-sm font-bold text-white">Ready to begin your consultation?</h4>
            <p className="text-xs text-slate-300">Schedule your OPD slot with our senior consultants or call our 24/7 priority line.</p>
          </div>

          <div className="flex items-center gap-3">
            <Link
              to="/book-appointment"
              className="px-6 py-2.5 rounded-full bg-[#2788B8] hover:bg-[#1f739c] text-white font-semibold text-xs transition-colors shadow-xs"
            >
              Start Step 01 Online
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
