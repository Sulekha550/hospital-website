import React from 'react';
import { Link } from 'react-router-dom';
import { Award, GraduationCap, ShieldCheck, Heart, Sparkles, MapPin, Calendar, CheckCircle2, ArrowRight } from 'lucide-react';
import DoctorMonographSection from '../components/DoctorMonographSection';
import CredentialsEditorialSection from '../components/CredentialsEditorialSection';
import ExperienceTimeline from '../components/ExperienceTimeline';
import PatientTestimonialsSection from '../components/PatientTestimonialsSection';
import { PULSE_DATA } from '../data/pulseData';

export default function AboutPage() {
  const { doctor, clinic } = PULSE_DATA;

  return (
    <div className="pt-28 pb-24 select-none">
      
      {/* 1. Master Editorial Page Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-6 space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-700 via-indigo-600 to-purple-800 text-white text-xs font-mono font-medium shadow-md">
          <Sparkles className="w-4 h-4 text-amber-300" />
          <span className="uppercase tracking-[0.2em]">Senior Consultant & Interventional Cardiologist</span>
        </div>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-semibold text-slate-950 tracking-tight leading-[1.05]">
          Dr. Prakash Chand Shahi <br />
          <span className="font-serif italic font-normal text-purple-700">DM Cardiology (PGIMER) • MD (KGMU)</span>
        </h1>

        <p className="text-base sm:text-xl text-slate-700 font-medium max-w-3xl mx-auto leading-relaxed">
          Combining apex super-specialty training from <strong>PGIMER Chandigarh</strong> and <strong>KGMU Lucknow</strong> with 22+ years of clinical devotion in Eastern Uttar Pradesh, directing Pulse Heart Centre, Betiahata.
        </p>
      </div>

      {/* 2. Immersive Doctor Monograph with Oversized Portrait Space */}
      <DoctorMonographSection />

      {/* 3. Credentials Editorial Section (Degrees & Institutions) */}
      <CredentialsEditorialSection />

      {/* 4. Detailed Career Milestones Timeline */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 my-16">
        <ExperienceTimeline />
      </div>

      {/* 5. Patient Testimonials & Outcomes */}
      <PatientTestimonialsSection />

      {/* 6. Direct Consultation Callout */}
      <div className="mt-16 text-center max-w-4xl mx-auto px-4">
        <div className="p-8 sm:p-12 rounded-[2.5rem] bg-gradient-to-br from-white via-purple-50/70 to-indigo-50/60 text-slate-900 shadow-layered border-2 border-purple-200/90 space-y-5">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-purple-800 font-bold block">
            Direct Outpatient Access • Gorakhpur
          </span>
          <h3 className="text-3xl sm:text-4xl font-semibold text-slate-950">
            Consult <span className="font-serif italic font-normal text-purple-700">Dr. Prakash Chand Shahi</span>
          </h3>
          <p className="text-sm sm:text-base text-slate-600 max-w-lg mx-auto font-medium leading-relaxed">
            Pulse Heart Centre, Betiahata, Gorakhpur. OPD consultations run Monday to Saturday, 10:00 AM – 8:00 PM.
          </p>
          <div className="pt-2 flex items-center justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-purple-700 via-indigo-600 to-purple-800 hover:from-purple-800 hover:to-indigo-700 text-white text-xs font-semibold uppercase tracking-wider shadow-md shadow-purple-500/25 transition-all"
            >
              <Calendar className="w-4 h-4 text-purple-200" />
              <span>Request Priority OPD Pass</span>
            </Link>
          </div>
        </div>
      </div>

    </div>
  );
}
