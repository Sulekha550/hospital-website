import React from 'react';
import { Link } from 'react-router-dom';
import {
  Award, ShieldCheck, Building2, Users, HeartPulse,
  Target, CheckCircle2, ArrowRight, Clock, MapPin, Sparkles, Calendar
} from 'lucide-react';
import { PULSE_DATA } from '../data/pulseData';

export default function AboutPage() {
  const milestones = [
    { year: "2002", title: "Foundation of Clinical Devotion", desc: "Initiation of specialized cardiovascular care in Betiahata, Gorakhpur with compassionate bedside ethics." },
    { year: "2007", title: "Apex Medical Training at KGMU", desc: "MD General Medicine residency at King George's Medical University, Lucknow, solidifying clinical diagnostic depth." },
    { year: "2013", title: "Super-Specialty DM from PGIMER", desc: "Completion of DM Cardiology at PGIMER Chandigarh, introducing high-volume transradial intervention to eastern UP." },
    { year: "2018", title: "Flat-Panel Digital Cath Lab Commissioned", desc: "Installation of the Siemens Artis Zee digital catheterization suite, performing emergency primary angioplasties 24/7." },
    { year: "2023", title: "Expansion into Tertiary Multispeciality", desc: "Unifying Neurology, Robotic Orthopaedics, Onco-Surgery, Pulmonology, and Level-3 NICU under PULSE Hospital." }
  ];

  return (
    <div className="relative pt-28 pb-24 select-none bg-[#FAFBF9] overflow-hidden">
      
      {/* =========================================================================
          DESIGNED VISIBLE BACKGROUND: PINE, EMERALD & ARCHITECTURAL GRID
         ========================================================================= */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Ambient Emerald & Warm Amber Diffusions */}
        <div className="absolute -top-32 right-10 w-[700px] h-[700px] bg-[#059669]/12 rounded-full blur-[140px]" />
        <div className="absolute top-1/3 -left-20 w-[600px] h-[600px] bg-[#064E3B]/8 rounded-full blur-[150px]" />
        <div className="absolute bottom-20 right-1/4 w-[500px] h-[500px] bg-[#D97706]/6 rounded-full blur-[130px]" />

        {/* Visible Architectural Hairline Blueprint Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#064e3b0f_1px,transparent_1px),linear-gradient(to_bottom,#064e3b0f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_30%,#000_70%,transparent_100%)]" />

        {/* Topographic Elevation Contour Rings */}
        <div className="absolute top-20 right-1/4 w-96 h-96 rounded-full border border-emerald-900/[0.06] hidden md:block" />
        <div className="absolute top-28 right-[27%] w-72 h-72 rounded-full border border-dashed border-emerald-900/[0.08]" />
      </div>

      <div className="relative z-10">

        {/* 1. Master Editorial Page Header */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#064E3B] via-[#047857] to-[#059669] text-white text-xs font-mono font-medium shadow-md shadow-[#064E3B]/20">
            <Sparkles className="w-4 h-4 text-amber-300" />
            <span className="uppercase tracking-[0.2em]">Senior Consultant & Interventional Cardiologist</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-[#064E3B] tracking-tight leading-[1.05]">
            Dr. Prakash Chand Shahi <br />
            <span className="font-serif italic font-normal text-[#059669]">DM Cardiology (PGIMER) • MD (KGMU)</span>
          </h1>

          <p className="text-base sm:text-xl text-slate-700 font-medium max-w-3xl mx-auto leading-relaxed">
            Combining apex super-specialty training from <strong>PGIMER Chandigarh</strong> and <strong>KGMU Lucknow</strong> with 22+ years of clinical devotion in Eastern Uttar Pradesh, directing Pulse Heart Centre, Betiahata.
          </p>
        </section>

        {/* 2. Pillars of Practice Grid */}
        <section className="py-12 bg-white/80 backdrop-blur-md border-y border-emerald-100 shadow-xs">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

              <div className="p-8 rounded-3xl bg-white border-2 border-emerald-100/90 shadow-md hover:shadow-xl transition-all duration-300 space-y-4 text-left group">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-[#059669] flex items-center justify-center group-hover:scale-105 transition-transform">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#064E3B]">Our Medical Mission</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                  To deliver tertiary-grade healthcare with zero ethical compromise—ensuring every patient receives precision interventional solutions, transparent diagnostic explanations, and compassionate rehabilitation.
                </p>
              </div>

              <div className="p-8 rounded-3xl bg-white border-2 border-emerald-100/90 shadow-md hover:shadow-xl transition-all duration-300 space-y-4 text-left group">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-[#064E3B] flex items-center justify-center group-hover:scale-105 transition-transform">
                  <HeartPulse className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#064E3B]">Clinical Philosophy</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                  We reject high-pressure assembly-line consultations. Our clinicians dedicate unhurried bedside time to each patient, explaining angiogram findings, lab parameters, and medical roadmaps in clear terms.
                </p>
              </div>

              <div className="p-8 rounded-3xl bg-white border-2 border-emerald-100/90 shadow-md hover:shadow-xl transition-all duration-300 space-y-4 text-left group">
                <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-700 flex items-center justify-center group-hover:scale-105 transition-transform">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#064E3B]">Evidence-Based Standards</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                  Adhering to international ACC/AHA guidelines for cardiology and strict NABH protocols for surgical sterility, laminar airflow operating theatres, and digital radiation minimization.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* 3. Milestones Timeline */}
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-14 space-y-2">
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#059669]">Chronology</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#064E3B]">Two Decades of Clinical Milestones</h2>
          </div>

          <div className="space-y-6 max-w-4xl mx-auto">
            {milestones.map((m, idx) => (
              <div key={idx} className="p-6 sm:p-7 rounded-3xl bg-white border-2 border-slate-200/90 shadow-sm hover:shadow-md transition-all flex flex-col sm:flex-row items-start sm:items-center gap-6 text-left">
                <span className="text-2xl font-extrabold font-mono text-[#059669] shrink-0 w-20">
                  {m.year}
                </span>
                <div className="border-l-2 border-slate-200 pl-6 space-y-1">
                  <h3 className="text-base font-bold text-[#064E3B]">{m.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-medium">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 4. Direct Consultation Callout */}
        <section className="mt-8 text-center max-w-4xl mx-auto px-4">
          <div className="p-8 sm:p-12 rounded-[2.5rem] bg-gradient-to-br from-white via-emerald-50/40 to-white text-slate-900 shadow-xl border-2 border-emerald-200 space-y-5">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#064E3B] font-bold block">
              Direct Outpatient Access • Gorakhpur
            </span>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-[#064E3B]">
              Consult <span className="font-serif italic font-normal text-[#059669]">Dr. Prakash Chand Shahi</span>
            </h3>
            <p className="text-sm sm:text-base text-slate-600 max-w-lg mx-auto font-medium leading-relaxed">
              Pulse Heart Centre, Betiahata, Gorakhpur. OPD consultations run Monday to Saturday, 10:00 AM – 8:00 PM.
            </p>
            <div className="pt-2 flex items-center justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#064E3B] via-[#047857] to-[#059669] hover:from-[#022C22] hover:to-[#064E3B] text-white text-xs font-semibold uppercase tracking-wider shadow-md shadow-[#064E3B]/20 transition-all"
              >
                <Calendar className="w-4 h-4 text-amber-300" />
                <span>Request Priority OPD Pass</span>
              </Link>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
