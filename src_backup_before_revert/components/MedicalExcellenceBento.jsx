import React from 'react';
import { Award, Users, Layers, Activity, ShieldCheck, HeartPulse, Stethoscope, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

/**
 * MedicalExcellenceBento
 * Asymmetric kinetic bento composition highlighting apex clinical benchmarks,
 * institutional credentials, and technology infrastructure.
 */
export default function MedicalExcellenceBento() {
  return (
    <section className="py-20 lg:py-28 bg-white border-y border-slate-200/80 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-14">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#2788B8]">
              Institutional Benchmark
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#173C59] mt-1">
              Medical Excellence & Standards
            </h2>
          </div>
          <p className="text-sm text-slate-500 max-w-md">
            Verified tertiary infrastructure and faculty credentials serving eastern Uttar Pradesh with clinical transparency.
          </p>
        </div>

        {/* Asymmetrical Bento Board */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          
          {/* Card 1: Apex Directorship Spotlight (7 Cols) */}
          <div className="md:col-span-7 rounded-3xl bg-gradient-to-br from-[#F7FAFC] to-[#F0F7FB] border border-slate-200/90 p-8 sm:p-10 flex flex-col justify-between space-y-6 shadow-xs hover:shadow-lg transition-all duration-300">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-xs font-bold text-[#173C59] shadow-xs">
                <Award className="w-3.5 h-3.5 text-[#2788B8]" />
                <span>Super-Specialty Leadership</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#173C59] leading-snug">
                Trained at India's Foremost Apex Institutions
              </h3>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-xl">
                Dr. Prakash Chand Shahi earned his <strong>DM in Cardiology from PGIMER Chandigarh (2013)</strong> and his <strong>MD in Medicine from KGMU Lucknow (2007)</strong>. Pioneering transradial coronary catheterization in Gorakhpur, he has guided over 12,000 successful cardiac interventions.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-200/60">
              <div>
                <span className="text-2xl font-extrabold text-[#173C59]">2013</span>
                <span className="text-[10px] text-slate-500 uppercase font-bold block">DM PGIMER</span>
              </div>
              <div>
                <span className="text-2xl font-extrabold text-[#2788B8]">2007</span>
                <span className="text-[10px] text-slate-500 uppercase font-bold block">MD KGMU</span>
              </div>
              <div>
                <span className="text-2xl font-extrabold text-[#173C59]">99.4%</span>
                <span className="text-[10px] text-slate-500 uppercase font-bold block">Radial Success</span>
              </div>
            </div>
          </div>

          {/* Card 2: 24/7 Digital Cath Lab & Critical Care (5 Cols) */}
          <div className="md:col-span-5 rounded-3xl bg-[#173C59] text-white p-8 sm:p-10 flex flex-col justify-between space-y-6 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#2788B8]/30 rounded-full blur-[70px] pointer-events-none" />

            <div className="space-y-3 relative z-10">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#A9D8E9] px-2.5 py-1 rounded-full bg-white/10 border border-white/20">
                Level-3 Critical Care
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Siemens Artis Zee Flat-Panel Cath Lab
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Ultra-low radiation vascular imaging suite operating 24/7 with immediate door-to-balloon STEMI heart attack intervention protocols under 45 minutes.
              </p>
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-semibold relative z-10">
              <span className="text-[#A9D8E9]">Operational 24/7/365</span>
              <Link to="/technology" className="text-white hover:text-[#A9D8E9] flex items-center gap-1">
                <span>View Tech Specs</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Card 3: 35+ Super-Specialists Network (4 Cols) */}
          <div className="md:col-span-4 rounded-3xl bg-[#FAF8F5] border border-slate-200/90 p-6 sm:p-8 space-y-3 shadow-xs">
            <div className="w-10 h-10 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-[#2788B8]">
              <Users className="w-5 h-5" />
            </div>
            <h4 className="text-lg font-bold text-[#173C59]">35+ Medical Specialists</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Cardiology, Neurosurgery, Robotic Orthopaedics, Fetal Medicine, Oncology, and Pulmonology clinicians working collaboratively.
            </p>
          </div>

          {/* Card 4: 10 Super-Speciality Departments (4 Cols) */}
          <div className="md:col-span-4 rounded-3xl bg-[#FAF8F5] border border-slate-200/90 p-6 sm:p-8 space-y-3 shadow-xs">
            <div className="w-10 h-10 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-[#2788B8]">
              <Layers className="w-5 h-5" />
            </div>
            <h4 className="text-lg font-bold text-[#173C59]">10 Integrated Faculties</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Class-100 laminar flow operating theatres, 3T silent MRI, 128-slice CT scan, and modern Level-3 NICU.
            </p>
          </div>

          {/* Card 5: Ethical Unhurried Bedside Policy (4 Cols) */}
          <div className="md:col-span-4 rounded-3xl bg-[#FAF8F5] border border-slate-200/90 p-6 sm:p-8 space-y-3 shadow-xs">
            <div className="w-10 h-10 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-[#2788B8]">
              <HeartPulse className="w-5 h-5" />
            </div>
            <h4 className="text-lg font-bold text-[#173C59]">Zero Ethical Compromise</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Unhurried consultations where angiograms and lab results are thoroughly explained directly to patients and families.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
