import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Award, ShieldCheck, Building2, Users, HeartPulse, 
  Target, CheckCircle2, ArrowRight, Clock, MapPin, Sparkles 
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
    <div className="pt-24 pb-20 bg-[#F7FAFC] text-slate-800">

      {/* 1. Architectural Hero Section (~100vh) */}
      <section className="min-h-[85vh] flex items-center bg-gradient-to-b from-[#F0F7FB] via-white to-[#F7FAFC] relative overflow-hidden px-4 sm:px-6 lg:px-8 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto w-full py-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#173C59]/10 text-[#173C59] text-xs font-bold uppercase tracking-widest">
              <Building2 className="w-3.5 h-3.5 text-[#2788B8]" />
              <span>Institutional Legacy & Leadership</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#173C59] tracking-tight leading-[1.1]">
              Architecting the Future of <br />
              <span className="text-[#2788B8]">Multispeciality Care.</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl">
              Under the clinical directorship of <strong>Dr. Prakash Chand Shahi</strong> (DM Cardiology PGIMER, MD KGMU), PULSE Multispeciality Hospital stands as eastern Uttar Pradesh's beacon for unhurried, ethical, and technology-driven healing.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                to="/book-appointment"
                className="px-7 py-3.5 rounded-full bg-[#173C59] hover:bg-[#0E2538] text-white font-semibold text-xs uppercase tracking-wider shadow-md transition-all"
              >
                Book Consultation
              </Link>

              <Link
                to="/doctors"
                className="px-6 py-3.5 rounded-full bg-white hover:bg-slate-50 text-[#173C59] font-semibold text-xs uppercase tracking-wider border border-slate-200 transition-all"
              >
                Meet Medical Faculty
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-2xl bg-white p-2">
              <img
                src="/images/hospital-facility.jpg"
                alt="PULSE Hospital Exterior Architecture"
                className="w-full h-80 sm:h-96 object-cover rounded-2xl"
              />
              <div className="p-4 bg-white space-y-1">
                <span className="text-[10px] uppercase font-bold text-[#2788B8] tracking-widest block">Tertiary Medical Center</span>
                <h3 className="text-sm font-bold text-[#173C59]">Pulse Heart Centre & Multispeciality Wings</h3>
                <p className="text-xs text-slate-500">Betiahata, Gorakhpur • 24/7 Level-3 Critical Care</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. Institutional Mission & Clinical Vision */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="p-8 rounded-3xl bg-white border border-slate-200/90 shadow-xs space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-sky-50 text-[#2788B8] flex items-center justify-center">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-[#173C59]">Our Medical Mission</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              To deliver tertiary-grade healthcare with zero ethical compromise—ensuring every patient receives precision interventional solutions, transparent diagnostic explanations, and compassionate rehabilitation.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-slate-200/90 shadow-xs space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-purple-50 text-[#7C3AED] flex items-center justify-center">
              <HeartPulse className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-[#173C59]">Clinical Philosophy</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              We reject high-pressure assembly-line consultations. Our clinicians dedicate unhurried bedside time to each patient, explaining angiogram findings, lab parameters, and medical roadmaps in clear terms.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-slate-200/90 shadow-xs space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-[#0D9488] flex items-center justify-center">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-[#173C59]">Evidence-Based Standards</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Adhering to international ACC/AHA guidelines for cardiology and strict NABH protocols for surgical sterility, laminar airflow operating theatres, and digital radiation minimization.
            </p>
          </div>

        </div>
      </section>

      {/* 3. Executive Clinical Leadership: Dr. Prakash Chand Shahi */}
      <section className="py-20 bg-white border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 rounded-3xl overflow-hidden border border-slate-200 bg-[#F7FAFC] p-3 shadow-md">
              <img
                src="/images/cath-lab.jpg"
                alt="Dr. Prakash Chand Shahi in Cath Lab"
                className="w-full h-[380px] object-cover rounded-2xl"
              />
              <div className="p-4 text-center">
                <span className="text-xs font-bold text-[#173C59]">Dr. Prakash Chand Shahi</span>
                <p className="text-[11px] text-slate-500">Director & Chief Interventional Cardiologist</p>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#2788B8]">
                Founding Clinical Leadership
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#173C59]">
                Dual Apex Pedigree: PGIMER & KGMU
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Dr. Prakash Chand Shahi earned his super-specialty Doctorate of Medicine (DM) in Cardiology from the renowned <strong>Postgraduate Institute of Medical Education and Research (PGIMER), Chandigarh</strong> (2013), and his MD in General Medicine from <strong>King George's Medical University (KGMU), Lucknow</strong> (2007).
              </p>
              <p className="text-sm text-slate-600 leading-relaxed">
                With over 22 years of clinical devotion in Gorakhpur and more than 12,000 successful transradial cardiac interventions, he has transformed cardiac outcomes across eastern UP, northern Bihar, and Nepal.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2">
                <div className="p-3 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className="text-xl font-extrabold text-[#173C59]">12,000+</div>
                  <div className="text-[10px] text-slate-500 uppercase font-semibold">Cath Procedures</div>
                </div>
                <div className="p-3 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className="text-xl font-extrabold text-[#2788B8]">99.4%</div>
                  <div className="text-[10px] text-slate-500 uppercase font-semibold">Radial Success</div>
                </div>
                <div className="p-3 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className="text-xl font-extrabold text-[#173C59]">22+ Yrs</div>
                  <div className="text-[10px] text-slate-500 uppercase font-semibold">Clinical Mastery</div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 4. Milestones Timeline */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-14 space-y-2">
          <span className="text-[11px] font-bold uppercase tracking-widest text-[#2788B8]">Chronology</span>
          <h2 className="text-3xl font-extrabold text-[#173C59]">Two Decades of Clinical Milestones</h2>
        </div>

        <div className="space-y-6 max-w-4xl mx-auto">
          {milestones.map((m, idx) => (
            <div key={idx} className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-xs flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <span className="text-2xl font-extrabold font-mono text-[#2788B8] shrink-0 w-20">
                {m.year}
              </span>
              <div className="border-l-2 border-slate-100 pl-6 space-y-1">
                <h3 className="text-base font-bold text-[#173C59]">{m.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">{m.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
