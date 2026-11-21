import React from 'react';
import { Calendar, Phone, MapPin, Clock, ShieldCheck, Mail, Sparkles, Navigation } from 'lucide-react';
import AppointmentExperienceSection from '../components/AppointmentExperienceSection';
import { PULSE_DATA } from '../data/pulseData';

export default function ContactPage() {
  const { clinic, doctor } = PULSE_DATA;

  return (
    <div className="pt-28 pb-24 select-none">
      
      {/* 1. Master Editorial Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-10 space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-700 via-indigo-600 to-purple-800 text-white text-xs font-mono font-medium shadow-md">
          <Calendar className="w-4 h-4 text-purple-200" />
          <span className="uppercase tracking-[0.2em]">Priority Appointments & Triage</span>
        </div>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-semibold text-slate-950 tracking-tight leading-[1.05]">
          Book Consultation with <br />
          <span className="font-serif italic font-normal text-purple-700">Dr. Prakash Chand Shahi</span>
        </h1>

        <p className="text-base sm:text-xl text-slate-700 font-medium max-w-3xl mx-auto leading-relaxed">
          Reserve your outpatient token at <strong>Pulse Heart Centre, Betiahata, Gorakhpur</strong>. Walk-ins and acute emergencies prioritized.
        </p>

        {/* Quick Contact Chips */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <a
            href="tel:+919876543210"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-slate-200 text-xs font-bold text-slate-900 shadow-xs hover:shadow transition-all"
          >
            <Phone className="w-3.5 h-3.5 text-purple-600" />
            <span>OPD Helpline: +91 98765 43210</span>
          </a>

          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-slate-200 text-xs font-bold text-slate-900 shadow-xs">
            <Clock className="w-3.5 h-3.5 text-emerald-600" />
            <span>Mon – Sat: 10:00 AM – 8:00 PM</span>
          </div>

          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-slate-200 text-xs font-bold text-slate-900 shadow-xs">
            <MapPin className="w-3.5 h-3.5 text-rose-600" />
            <span>Betiahata, Gorakhpur, UP 273001</span>
          </div>
        </div>
      </div>

      {/* 2. Interactive Consultation & Digital Pass Terminal */}
      <AppointmentExperienceSection />

      {/* 3. Landmark & Clinic Directions Guide */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="p-8 rounded-[2.5rem] bg-white border-2 border-slate-200 shadow-layered grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          
          <div className="space-y-2">
            <div className="p-2 rounded-xl bg-purple-50 text-purple-700 w-fit">
              <Navigation className="w-5 h-5" />
            </div>
            <h4 className="text-base font-semibold text-slate-950">
              How to Reach Us
            </h4>
            <p className="text-xs text-slate-600 font-medium leading-relaxed">
              Located in the central Betiahata medical hub, 10 minutes from Gorakhpur Railway Station and Golghar commercial centre.
            </p>
          </div>

          <div className="space-y-2">
            <div className="p-2 rounded-xl bg-sky-50 text-sky-700 w-fit">
              <Clock className="w-5 h-5" />
            </div>
            <h4 className="text-base font-semibold text-slate-950">
              Arrival & Token Protocol
            </h4>
            <p className="text-xs text-slate-600 font-medium leading-relaxed">
              Please arrive 15 minutes prior to your scheduled slot. Bring prior ECGs, echocardiography reports, and angiogram CDs.
            </p>
          </div>

          <div className="space-y-2">
            <div className="p-2 rounded-xl bg-rose-50 text-rose-700 w-fit">
              <Phone className="w-5 h-5" />
            </div>
            <h4 className="text-base font-semibold text-slate-950">
              Emergency Cardiac Triage
            </h4>
            <p className="text-xs text-slate-600 font-medium leading-relaxed">
              Patients presenting with acute crushing chest pain, diaphoresis, or sudden syncope are granted immediate priority triage.
            </p>
          </div>

        </div>
      </div>

    </div>
  );
}
