import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, ChevronRight, ShieldCheck, Clock } from 'lucide-react';
import { PULSE_DATA } from '../data/pulseData';

/**
 * ProcessArchitectureSection
 * Dark navy process architecture: 5-step luminous clinical sequence
 * with glowing progress lines connecting Phase 01 to Phase 05.
 */
export default function ProcessArchitectureSection() {
  const { patientJourney } = PULSE_DATA;
  const [selectedPhase, setSelectedPhase] = useState(0);

  return (
    <section className="py-20 lg:py-28 bg-[#0E2538] text-white relative z-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-16">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#2788B8]">
              Process Architecture
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white mt-1">
              The Patient Care Journey
            </h2>
          </div>
          <p className="text-sm text-slate-300 max-w-md">
            Engineered to eliminate clinical anxiety through transparent steps, unhurried consultations, and dedicated post-procedure rehabilitation.
          </p>
        </div>

        {/* 5-Step Luminous Timeline */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 relative">
          
          {/* Subtle Progress Line across Desktop */}
          <div className="hidden lg:block absolute top-12 left-10 right-10 h-0.5 bg-white/15 -z-0" />

          {patientJourney.map((step, idx) => {
            const isCurrent = idx === selectedPhase;

            return (
              <div
                key={step.step}
                onClick={() => setSelectedPhase(idx)}
                className={`cursor-pointer rounded-3xl p-6 transition-all duration-300 border flex flex-col justify-between relative z-10 ${
                  isCurrent
                    ? 'bg-[#173C59] border-[#2788B8] shadow-2xl shadow-[#2788B8]/20 translate-y-[-6px]'
                    : 'bg-white/5 border-white/10 hover:bg-white/10'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className={`text-2xl font-extrabold font-mono ${isCurrent ? 'text-[#A9D8E9]' : 'text-slate-500'}`}>
                      {step.step}
                    </span>
                    <span className={`w-3 h-3 rounded-full border-2 transition-all ${isCurrent ? 'border-[#2788B8] bg-white scale-125' : 'border-slate-500 bg-transparent'}`} />
                  </div>

                  <h3 className={`text-base font-bold transition-colors ${isCurrent ? 'text-white' : 'text-slate-200'}`}>
                    {step.title}
                  </h3>
                  <div className="text-[11px] font-semibold text-[#A9D8E9] mt-0.5">
                    {step.subtitle}
                  </div>

                  <p className="text-xs text-slate-300 mt-3 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-white/10 flex items-center justify-between text-[11px]">
                  <span className={isCurrent ? 'text-[#A9D8E9] font-bold' : 'text-slate-500'}>
                    Phase {step.step}
                  </span>
                  {isCurrent && <span className="w-1.5 h-1.5 rounded-full bg-[#A9D8E9] animate-pulse" />}
                </div>
              </div>
            );
          })}
        </div>

        {/* Quick Booking Callout */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-white/5 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-base font-bold text-white">Begin Step 01: Schedule Your Consultation</h4>
            <p className="text-xs text-slate-300">Choose your specialist, review available slots, and obtain immediate digital confirmation.</p>
          </div>

          <Link
            to="/book-appointment"
            className="px-7 py-3 rounded-full bg-[#2788B8] hover:bg-[#1f739c] text-white font-bold text-xs uppercase tracking-wider shadow-md transition-all whitespace-nowrap"
          >
            Start Digital Booking
          </Link>
        </div>

      </div>
    </section>
  );
}
