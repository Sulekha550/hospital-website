import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Activity, CheckCircle2, ArrowRight, Stethoscope,
  Search, ShieldCheck, HeartPulse, Clock, Sparkles
} from 'lucide-react';
import { PULSE_DATA } from '../data/pulseData';

export default function TreatmentsPage() {
  const { departments } = PULSE_DATA;
  const [selectedCategory, setSelectedCategory] = useState('all');

  return (
    <div className="pt-24 pb-20 bg-[#F7FAFC]">

      {/* 1. Treatments Hero (~100vh) */}
      <section className="min-h-[75vh] flex items-center bg-gradient-to-b from-[#F0F7FB] via-white to-[#F7FAFC] px-4 sm:px-6 lg:px-8 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto w-full py-16 text-center max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#173C59]/10 text-[#173C59] text-xs font-bold uppercase tracking-widest">
            <HeartPulse className="w-3.5 h-3.5 text-[#2788B8]" />
            <span>Surgical & Interventional Procedures</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold text-[#173C59] tracking-tight leading-[1.1]">
            Evidence-Based Treatments & <br />
            <span className="text-[#2788B8]">Surgical Protocols.</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            From emergency primary angioplasties within the 45-minute golden window to robotic total joint replacements and endoscopic spine decompressions.
          </p>
        </div>
      </section>

      {/* 2. Treatments List by Department */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {departments.map((dept) => (
          <div
            key={dept.id}
            className="p-8 rounded-3xl bg-white border border-slate-200/90 shadow-sm space-y-6"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#2788B8]">
                  {dept.organ} Sciences
                </span>
                <h3 className="text-2xl font-extrabold text-[#173C59]">
                  {dept.name}
                </h3>
              </div>
              <div className="text-right">
                <span className="text-xs text-slate-500 block">Lead Surgeon / Specialist</span>
                <span className="text-xs font-bold text-[#173C59]">{dept.leadDoctor}</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {dept.keyProcedures.map((proc, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-[#F7FAFC] border border-slate-100 hover:border-[#2788B8]/30 transition-all space-y-2 flex flex-col justify-between"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#2788B8] shrink-0" />
                      <h4 className="text-xs sm:text-sm font-bold text-[#173C59]">{proc}</h4>
                    </div>
                    <p className="text-[11px] text-slate-500 pl-6">
                      Performed at PULSE with sub-millimeter precision and dedicated post-procedure ICU observation.
                    </p>
                  </div>

                  <div className="pt-2 pl-6">
                    <Link
                      to={`/book-appointment?dept=${dept.slug}`}
                      className="text-[11px] font-bold text-[#2788B8] hover:underline"
                    >
                      Consult Specialist →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

    </div>
  );
}
