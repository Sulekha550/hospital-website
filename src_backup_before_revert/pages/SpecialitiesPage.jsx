import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, CheckCircle2, ChevronRight, Activity, 
  HeartPulse, Brain, Bone, ShieldAlert, Apple, Wind, Heart, Baby, Stethoscope, Search 
} from 'lucide-react';
import { PULSE_DATA } from '../data/pulseData';
import SculpturalCardiac3D from '../components/SculpturalCardiac3D';

export default function SpecialitiesPage() {
  const { departments } = PULSE_DATA;
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');

  const iconMap = {
    HeartPulse, Brain, Bone, ShieldAlert, Apple, Activity, Wind, Heart, Baby, Stethoscope
  };

  const filteredDepts = departments.filter((d) => {
    const matchesSearch = d.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      d.organ.toLowerCase().includes(searchQuery.toLowerCase()) ||
      d.leadDoctor.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSearch;
  });

  return (
    <div className="pt-24 pb-20 bg-[#F7FAFC]">
      
      {/* 1. 3D Medical Hero Section (~100vh) */}
      <section className="min-h-[85vh] flex items-center bg-gradient-to-b from-[#F0F7FB] via-white to-[#F7FAFC] px-4 sm:px-6 lg:px-8 border-b border-slate-200/80 relative overflow-hidden">
        <div className="max-w-7xl mx-auto w-full py-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#173C59]/10 text-[#173C59] text-xs font-bold uppercase tracking-widest">
              <Activity className="w-3.5 h-3.5 text-[#2788B8]" />
              <span>Tertiary Clinical Super-Specialities</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#173C59] tracking-tight leading-[1.1]">
              Precision Medicine Across <br />
              <span className="text-[#2788B8]">10 Clinical Super-Specialities.</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl">
              From transradial coronary angioplasty and acute stroke thrombolysis to robotic joint replacement and fetal medicine—discover comprehensive healthcare directed by apex academic faculty.
            </p>

            {/* Quick Search Input */}
            <div className="relative max-w-md">
              <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search speciality, organ, or doctor..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3.5 rounded-full border border-slate-200 bg-white text-xs font-semibold text-slate-800 shadow-sm focus:outline-none focus:border-[#2788B8]"
              />
            </div>
          </div>

          <div className="lg:col-span-5 relative flex items-center justify-center">
            <div className="w-full max-w-[420px] rounded-3xl bg-white border border-slate-200/90 shadow-2xl p-4 space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                <span className="text-xs font-bold text-[#173C59] uppercase tracking-wider">3D Medical Anatomy Stage</span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-sky-50 text-[#2788B8]">Apex Cardiology</span>
              </div>
              <div className="h-64 flex items-center justify-center">
                <SculpturalCardiac3D className="w-full h-full" />
              </div>
              <div className="text-[11px] text-slate-500 text-center font-medium">
                PULSE Centre of Excellence for Cardiovascular Sciences
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. All Specialities Grid Showcase */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-12">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#173C59]">
              Speciality Directory
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Showing {filteredDepts.length} specialized medical departments
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDepts.map((dept) => {
            const Icon = iconMap[dept.icon] || Activity;

            return (
              <div
                key={dept.id}
                className="group rounded-3xl bg-white border border-slate-200/90 hover:border-[#2788B8]/40 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                <div>
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden bg-slate-100">
                    <img
                      src={dept.image}
                      alt={dept.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#173C59]/80 via-transparent to-transparent" />
                    
                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-md text-[10px] font-bold text-[#173C59]">
                      {dept.organ} Care
                    </div>

                    <div className="absolute bottom-3 left-3 right-3 text-white">
                      <span className="text-[10px] uppercase font-bold text-[#A9D8E9] block">Faculty Lead</span>
                      <h4 className="text-xs font-bold text-white">{dept.leadDoctor}</h4>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-6 space-y-3">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-xl bg-sky-50 text-[#2788B8] flex items-center justify-center shrink-0">
                        <Icon className="w-4 h-4" />
                      </div>
                      <h3 className="text-base font-bold text-[#173C59] group-hover:text-[#2788B8] transition-colors">
                        {dept.name}
                      </h3>
                    </div>

                    <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                      {dept.description}
                    </p>

                    <div className="pt-2 space-y-1">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                        Signature Procedures:
                      </span>
                      <div className="text-[11px] text-slate-700 font-medium line-clamp-2">
                        {dept.keyProcedures.slice(0, 3).join(" • ")}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="p-6 pt-0 border-t border-slate-100 mt-2 flex items-center justify-between">
                  <Link
                    to={`/specialities/${dept.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#173C59] group-hover:text-[#2788B8] transition-colors"
                  >
                    <span>Department Details</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>

                  <Link
                    to={`/book-appointment?dept=${dept.slug}`}
                    className="px-3 py-1.5 rounded-full bg-sky-50 text-[#2788B8] hover:bg-[#173C59] hover:text-white text-[11px] font-bold transition-colors"
                  >
                    Book OPD
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

      </section>

    </div>
  );
}
