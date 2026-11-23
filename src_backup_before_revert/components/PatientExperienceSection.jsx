import React from 'react';
import { Link } from 'react-router-dom';
import { ClipboardList, CheckCircle2, Sparkles } from 'lucide-react';
import { PULSE_DATA } from '../data/pulseData';

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
    <section id="patient-experience" className="relative py-16 lg:py-24 overflow-hidden bg-gradient-to-b from-purple-600/[0.05] via-sky-600/[0.03] to-emerald-600/[0.04] backdrop-blur-[1px]">
      
      {/* Ambient Floating Atmospheric Glows */}
      <div className="absolute top-1/4 -right-20 w-[600px] h-[600px] bg-gradient-to-bl from-purple-400/30 via-violet-300/25 to-sky-300/20 rounded-full blur-[85px] pointer-events-none -z-10 animate-float-1" />
      <div className="absolute bottom-10 -left-20 w-[550px] h-[550px] bg-gradient-to-tr from-emerald-400/25 via-teal-300/20 to-purple-300/20 rounded-full blur-[85px] pointer-events-none -z-10 animate-float-2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-xs font-semibold text-white bg-gradient-to-r from-purple-700 via-indigo-600 to-purple-800 px-3.5 py-1 rounded-full shadow-sm">
              Clinical Stewardship
            </span>
            <div className="w-10 h-0.5 bg-gradient-to-r from-purple-500 to-sky-400" />
            <span className="text-xs font-medium tracking-wider text-purple-900 uppercase">
              The Consultation Pathway
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
            <div className="lg:col-span-8">
              <span className="text-purple-700 font-semibold text-xs uppercase tracking-widest block mb-1">
                Transparent & Evidence-Based Stewardship
              </span>
              <h2 className="text-3xl sm:text-4xl font-light text-slate-900 tracking-tight leading-tight">
                The Consultation <span className="font-serif italic font-normal text-purple-700">Pathway</span>
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
              { border: 'border-purple-200/90', text: 'text-purple-700', pill: 'bg-purple-50 text-purple-800' },
              { border: 'border-sky-200/90', text: 'text-sky-700', pill: 'bg-sky-50 text-sky-800' },
              { border: 'border-amber-200/90', text: 'text-amber-700', pill: 'bg-amber-50 text-amber-800' },
              { border: 'border-slate-300', text: 'text-slate-800', pill: 'bg-slate-100 text-slate-800' },
            ];
            const a = accents[index % accents.length];
            return (
              <div
                key={step.step}
                className={`p-7 rounded-[2rem] bg-white/90 backdrop-blur-xl border-2 ${a.border} shadow-sm flex flex-col justify-between hover:scale-[1.02] transition-all duration-300`}
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
        <div className="rounded-[2.5rem] bg-gradient-to-br from-white via-purple-50/70 to-indigo-50/60 text-slate-900 p-8 sm:p-12 shadow-layered border-2 border-purple-200/90">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-5 space-y-4 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-100 text-xs font-mono font-bold text-purple-900 border border-purple-200">
                <ClipboardList className="w-3.5 h-3.5 text-purple-700" />
                <span>Pre-Consultation Checklist</span>
              </div>

              <h3 className="font-display font-semibold text-2xl sm:text-3xl text-slate-950 leading-snug">
                Essential Records for Your Evaluation
              </h3>

              <p className="text-slate-600 text-xs sm:text-sm font-medium leading-relaxed">
                Prior ECGs, angiogram CDs, and current cardiovascular medications allow Dr. Prakash Chand Shahi to assess temporal changes in coronary patency with precision.
              </p>

              <div className="pt-2">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-gradient-to-r from-purple-700 via-indigo-600 to-purple-800 hover:from-purple-800 hover:to-indigo-700 text-white font-semibold text-xs tracking-wider uppercase transition-all shadow-md shadow-purple-500/25"
                >
                  <span>Schedule Your Consultation</span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {preVisitDocuments.map((doc, idx) => (
                  <div 
                    key={idx}
                    className="p-3.5 rounded-xl bg-white/90 border border-purple-100 shadow-xs flex items-start gap-2.5 text-left"
                  >
                    <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
                    <span className="text-xs text-slate-700 font-medium leading-snug">
                      {doc}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
