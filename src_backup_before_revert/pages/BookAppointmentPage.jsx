import React from 'react';
import AppointmentCTASection from '../components/AppointmentCTASection';
import { Calendar, ShieldCheck, Clock, Award } from 'lucide-react';

export default function BookAppointmentPage() {
  return (
    <div className="pt-24 pb-20 bg-[#FAF8F5]">
      
      {/* Dedicated Distraction-Free Header */}
      <section className="min-h-[45vh] flex items-center justify-center text-center px-4 sm:px-6 lg:px-8 border-b border-slate-200/80">
        <div className="max-w-2xl mx-auto space-y-4 py-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-xs font-bold uppercase tracking-widest text-[#173C59] shadow-xs">
            <Calendar className="w-3.5 h-3.5 text-[#2788B8]" />
            <span>Dedicated Consultation Portal</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#173C59] tracking-tight">
            Schedule Your Priority Consultation
          </h1>

          <p className="text-sm text-slate-600 leading-relaxed">
            Direct outpatient booking with Dr. Prakash Chand Shahi and our super-specialist faculty. No waiting queues, instant SMS confirmation.
          </p>

          <div className="flex items-center justify-center gap-6 text-xs font-medium text-slate-500 pt-2">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Zero Convenience Fee</span>
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-[#2788B8]" />
              <span>Unhurried Bedside Dialogue</span>
            </span>
          </div>
        </div>
      </section>

      {/* Embedded Full Functional Appointment Section */}
      <AppointmentCTASection />

    </div>
  );
}
