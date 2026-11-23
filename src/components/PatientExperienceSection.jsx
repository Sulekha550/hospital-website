import React from 'react';
import { ClipboardList, CheckCircle2, Sparkles } from 'lucide-react';
import { PULSE_DATA } from '../data/pulseData';
import SectionCinematicVideo from './SectionCinematicVideo';

export default function PatientExperienceSection({ onBookClick }) {
  const { patientJourney } = PULSE_DATA;

  const preVisitDocuments = [
    "Previous Electrocardiograms (ECG traces)",
    "Past Coronary Angiogram or CT Angiography CD/Reports",
    "Current prescriptions & cardiovascular medication list",
    "Recent blood tests (Lipid Profile, Renal Function, HbA1c)",
    "Echocardiography (Echo) reports, if available",
    "Discharge summaries from prior hospital admissions or stent procedures"
  ];

  return (
    <section id="patient-experience" className="relative py-16 lg:py-24 overflow-hidden bg-gradient-to-b from-[#FAFBF9] via-[#F0FDF4]/40 to-[#FAFBF9]">
      {/* Animated Acoustic Resonance Ripple Background in Emerald & Mint */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <svg className="absolute -top-20 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] opacity-35" viewBox="0 0 1000 600" fill="none">
          <circle cx="500" cy="300" r="100" stroke="#059669" strokeWidth="1" strokeDasharray="4 6" className="animate-spin" style={{ animationDuration: '30s' }} />
          <circle cx="500" cy="300" r="200" stroke="#047857" strokeWidth="1.2" strokeDasharray="6 8" />
          <circle cx="500" cy="300" r="320" stroke="#10B981" strokeWidth="0.8" />
          <circle cx="500" cy="300" r="450" stroke="#A7F3D0" strokeWidth="0.8" strokeDasharray="3 3" />
        </svg>
        <div className="absolute top-1/3 left-10 w-96 h-96 bg-[#10B981]/15 rounded-full blur-[110px]" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#047857]/15 rounded-full blur-[110px]" />
        <div className="absolute inset-x-0 h-[2.5px] bg-gradient-to-r from-transparent via-[#10B981] to-transparent shadow-[0_0_20px_#059669] opacity-45 animate-laser-sweep pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-xs font-semibold text-white bg-[#064E3B] px-3.5 py-1 rounded-full shadow-sm">
              Clinical Stewardship
            </span>
            <div className="w-10 h-0.5 bg-gradient-to-r from-[#047857] to-[#10B981]" />
            <span className="text-xs font-medium tracking-wider text-[#064E3B] uppercase">
              The Consultation Pathway
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
            <div className="lg:col-span-8">
              <span className="text-[#047857] font-semibold text-xs uppercase tracking-widest block mb-1">
                Transparent &amp; Evidence-Based Stewardship
              </span>
              <h2 className="text-3xl sm:text-4xl font-light text-slate-900 tracking-tight leading-tight">
                The Consultation <span className="font-serif italic font-normal text-[#059669]">Pathway</span>
              </h2>
            </div>
            <div className="lg:col-span-4 text-slate-600 text-xs sm:text-sm font-light leading-relaxed">
              Transparent, evidence-based medical consultation with clear steps from record review to post-intervention follow-up.
            </div>
          </div>
        </div>

        {/* 4-Stage Pathway Cards with Iridescent Frosted Glass */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {patientJourney.map((step, index) => {
            const accents = [
              { border: 'border-[#A7F3D0]', text: 'text-[#064E3B]', pill: 'bg-[#F0FDF4] text-[#047857]' },
              { border: 'border-emerald-300', text: 'text-[#047857]', pill: 'bg-emerald-50 text-emerald-800' },
              { border: 'border-teal-300', text: 'text-teal-700', pill: 'bg-teal-50 text-teal-800' },
              { border: 'border-slate-300', text: 'text-slate-800', pill: 'bg-slate-100 text-slate-800' },
            ];
            const a = accents[index % accents.length];
            return (
              <div
                key={step.step}
                className={`p-7 rounded-[2rem] bg-white/80 backdrop-blur-xl border-2 ${a.border} shadow-sm flex flex-col justify-between hover:scale-[1.02] transition-all duration-300`}
              >
                <div>
                  <span className={`font-serif font-light text-4xl ${a.text} block mb-3`}>
                    {step.step}
                  </span>
                  <h3 className="font-display font-medium text-base text-slate-900 leading-snug mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs text-slate-600 font-light leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className={`mt-6 pt-3 border-t border-slate-100 text-[10px] font-mono tracking-widest uppercase font-semibold ${a.pill} px-2.5 py-1 rounded-full w-fit`}>
                  Phase {step.step}
                </div>
              </div>
            );
          })}
        </div>

        {/* Pre-Visit Records Checklist */}
        <div className="rounded-[2.5rem] bg-gradient-to-r from-slate-950 via-[#160D29] to-slate-950 text-white p-8 sm:p-12 shadow-2xl border border-purple-500/20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-5 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-mono text-purple-300">
                <ClipboardList className="w-3.5 h-3.5" />
                <span>Pre-Consultation Checklist</span>
              </div>

              <h3 className="font-display font-light text-2xl sm:text-3xl text-white leading-snug">
                Essential Records for Your Evaluation
              </h3>

              <p className="text-slate-300 text-xs sm:text-sm font-light leading-relaxed">
                Prior ECGs, angiogram CDs, and current cardiovascular medications allow Dr. Prakash Chand Shahi to assess temporal changes in coronary patency with precision.
              </p>

              <div className="pt-2">
                <button
                  onClick={onBookClick}
                  className="px-7 py-3 rounded-full bg-white text-slate-900 font-semibold text-xs tracking-wider uppercase transition-colors shadow-sm hover:bg-slate-100"
                >
                  Schedule Your Consultation
                </button>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {preVisitDocuments.map((doc, idx) => (
                  <div 
                    key={idx}
                    className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex items-start gap-2.5"
                  >
                    <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                    <span className="text-xs text-slate-200 font-light leading-snug">
                      {doc}
                    </span>
                  </div>
                ))}
              </div>

              {/* Patient Care Video Telemetry */}
              <div className="pt-2">
                <SectionCinematicVideo
                  type="patient-care"
                  videoUrl="/videos/patient-care.mp4"
                  styleVariant="video-card"
                  posterImage="/images/patient-care-recovery.jpg"
                  title="Bedside Consultation & Telemetry Stream"
                  subtitle="Pulse Heart Centre • Inpatient Care"
                  specs="Attending Physician: Dr. Prakash Chand Shahi"
                  aspectRatio="aspect-[16/8]"
                />
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
