import React from 'react';
import { ClipboardList, CheckCircle2, Sparkles, ArrowRight } from 'lucide-react';
import { PULSE_DATA } from '../data/pulseData';
import SectionCinematicVideo from './SectionCinematicVideo';
import SectionBackgroundMotion from './SectionBackgroundMotion';
import Interactive3DTilt from './Interactive3DTilt';
import ScrollReveal, { ScrollStagger, StaggerItem } from './ScrollReveal';

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
    <section id="patient-experience" className="relative py-16 lg:py-24 overflow-hidden select-none bg-gradient-to-b from-[#FAF9F6] via-[#F8FAFC] to-[#F1F5F9] rounded-[3rem] border border-slate-200 shadow-lg my-12">
      {/* Bespoke Serene Hospitality & Calming Organic Waves */}
      <SectionBackgroundMotion variant="hospital-experience" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <ScrollReveal variant="fade-down">
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-xs font-semibold text-white bg-gradient-to-r from-[#0A1128] via-[#1E293B] to-[#BE123C] px-3.5 py-1 rounded-full shadow-sm border border-rose-300/30">
                Clinical Stewardship
              </span>
              <div className="w-10 h-0.5 bg-gradient-to-r from-[#0A1128] to-[#BE123C]" />
              <span className="text-xs font-medium tracking-wider text-[#BE123C] uppercase font-mono">
                The Consultation Pathway
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
              <div className="lg:col-span-8">
                <span className="text-[#0A1128] font-semibold text-xs uppercase tracking-widest block mb-1">
                  Transparent &amp; Evidence-Based Stewardship
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A1128] tracking-tight leading-tight">
                  The Consultation <span className="font-serif italic font-normal text-[#BE123C]">Pathway</span>
                </h2>
              </div>
              <div className="lg:col-span-4 text-slate-600 text-xs sm:text-sm font-normal leading-relaxed">
                Transparent, evidence-based medical consultation with clear steps from record review to post-intervention follow-up.
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* 4-Stage Pathway Cards with 3D Tilt & Stagger Entrance */}
        <ScrollStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-14" staggerDelay={0.12}>
          {patientJourney.map((step, index) => {
            const accents = [
              { border: 'border-slate-200', text: 'text-[#0A1128]', pill: 'bg-slate-100 text-[#0A1128]' },
              { border: 'border-rose-200', text: 'text-[#BE123C]', pill: 'bg-rose-50 text-[#BE123C]' },
              { border: 'border-slate-200', text: 'text-[#0A1128]', pill: 'bg-slate-100 text-[#0A1128]' },
              { border: 'border-rose-200', text: 'text-[#BE123C]', pill: 'bg-rose-50 text-[#BE123C]' },
            ];
            const a = accents[index % accents.length];
            return (
              <StaggerItem key={step.step}>
                <Interactive3DTilt maxTilt={9} glowColor="rgba(190, 18, 60, 0.2)">
                  <div
                    className={`p-7 rounded-[2rem] bg-white/95 backdrop-blur-xl border-2 ${a.border} shadow-sm flex flex-col justify-between h-full hover:border-rose-300 transition-all duration-300 card-hover-elevate`}
                  >
                    <div>
                      <span className={`font-serif font-bold text-4xl ${a.text} block mb-3`}>
                        {step.step}
                      </span>
                      <h3 className="font-extrabold text-base text-[#0A1128] leading-snug mb-2">
                        {step.title}
                      </h3>
                      <p className="text-xs text-slate-600 font-normal leading-relaxed">
                        {step.description}
                      </p>
                    </div>

                    <div className={`mt-6 pt-3 border-t border-slate-100 text-[10px] font-mono tracking-widest uppercase font-bold ${a.pill} px-2.5 py-1 rounded-full w-fit`}>
                      Phase {step.step}
                    </div>
                  </div>
                </Interactive3DTilt>
              </StaggerItem>
            );
          })}
        </ScrollStagger>

        {/* Pre-Visit Records Checklist with Interactive Document Hover */}
        <ScrollReveal variant="fade-up">
          <div className="rounded-[2.5rem] bg-gradient-to-r from-[#0A1128] via-[#1E293B] to-[#0A1128] text-white p-8 sm:p-12 shadow-2xl border-2 border-rose-300/25 relative overflow-hidden">
            {/* Luminous Ambient Glow inside card */}
            <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-[#E11D48]/20 blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              
              <div className="lg:col-span-5 space-y-4">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-xs font-mono text-rose-200 border border-rose-300/30">
                  <ClipboardList className="w-3.5 h-3.5" />
                  <span>Pre-Consultation Checklist</span>
                </div>

                <h3 className="font-extrabold text-2xl sm:text-3xl text-white leading-snug">
                  Essential Records for Your Evaluation
                </h3>

                <p className="text-slate-300 text-xs sm:text-sm font-normal leading-relaxed">
                  Prior ECGs, angiogram CDs, and current cardiovascular medications allow Dr. Prakash Chand Shahi to assess temporal changes in coronary patency with precision.
                </p>

                <div className="pt-2">
                  <button
                    onClick={onBookClick}
                    className="luxury-btn-ruby group"
                  >
                    <span>Schedule Your Consultation</span>
                    <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1.5 transition-transform" />
                  </button>
                </div>
              </div>

              <div className="lg:col-span-7 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {preVisitDocuments.map((doc, idx) => (
                    <div 
                      key={idx}
                      className="p-3.5 rounded-xl bg-white/8 border border-white/15 hover:border-rose-300/50 hover:bg-white/15 transition-all flex items-start gap-2.5 cursor-default hover:scale-[1.02]"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#E11D48] shrink-0 mt-0.5" />
                      <span className="text-xs text-slate-200 font-medium leading-snug">
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
        </ScrollReveal>

      </div>
    </section>
  );
}
