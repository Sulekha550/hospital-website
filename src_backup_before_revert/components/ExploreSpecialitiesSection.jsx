import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, CheckCircle2, ChevronRight, Activity, 
  HeartPulse, Brain, Bone, ShieldAlert, Apple, Wind, Heart, Baby, Stethoscope 
} from 'lucide-react';
import { PULSE_DATA } from '../data/pulseData';

export default function ExploreSpecialitiesSection() {
  const { departments } = PULSE_DATA;
  const [activeDeptId, setActiveDeptId] = useState(departments[0].id);

  const activeDept = departments.find((d) => d.id === activeDeptId) || departments[0];

  const iconMap = {
    HeartPulse: HeartPulse,
    Brain: Brain,
    Bone: Bone,
    ShieldAlert: ShieldAlert,
    Apple: Apple,
    Activity: Activity,
    Wind: Wind,
    Heart: Heart,
    Baby: Baby,
    Stethoscope: Stethoscope
  };

  return (
    <section id="specialities" className="py-20 lg:py-28 bg-[#F0F7FB] border-b border-slate-200/80 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#2788B8]">
              Section 03 • Super-Speciality Departments
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#173C59] mt-1">
              Explore Specialities
            </h2>
          </div>
          <p className="text-sm text-slate-600 max-w-md">
            10 comprehensive medical faculties led by apex academic specialists from PGIMER, AIIMS, and KGMU.
          </p>
        </div>

        {/* Master Asymmetric Editorial Showcase Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column (5 Cols): Department Interactive Selector List */}
          <div className="lg:col-span-5 bg-white p-3 rounded-3xl border border-slate-200/90 shadow-sm space-y-1.5 max-h-[620px] overflow-y-auto">
            {departments.map((dept) => {
              const Icon = iconMap[dept.icon] || Activity;
              const isActive = dept.id === activeDeptId;

              return (
                <button
                  key={dept.id}
                  onClick={() => setActiveDeptId(dept.id)}
                  className={`w-full flex items-center justify-between p-3.5 rounded-2xl text-left transition-all duration-200 group ${
                    isActive
                      ? 'bg-[#173C59] text-white shadow-md'
                      : 'hover:bg-slate-50 text-slate-700'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-9 h-9 rounded-xl flex items-center justify-center transition-colors ${
                        isActive
                          ? 'bg-white/20 text-[#A9D8E9]'
                          : 'bg-slate-100 text-[#2788B8] group-hover:bg-white'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className={`text-xs sm:text-sm font-bold ${isActive ? 'text-white' : 'text-[#173C59]'}`}>
                        {dept.name}
                      </div>
                      <div className={`text-[11px] ${isActive ? 'text-slate-300' : 'text-slate-500'}`}>
                        {dept.organ} • {dept.leadDoctor}
                      </div>
                    </div>
                  </div>

                  <ChevronRight
                    className={`w-4 h-4 transition-transform ${
                      isActive ? 'text-[#A9D8E9] translate-x-1' : 'text-slate-400 group-hover:translate-x-0.5'
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right Column (7 Cols): Active Department Editorial Showcase Card */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-slate-200/90 shadow-lg p-6 sm:p-8 space-y-6 relative overflow-hidden">
            
            {/* Top Accent Strip */}
            <div 
              className="absolute top-0 left-0 right-0 h-1.5"
              style={{ backgroundColor: activeDept.accentColor || '#2788B8' }}
            />

            {/* Department Header */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-sky-50 text-[#2788B8] border border-sky-200">
                <span>{activeDept.organ} Care</span>
                <span>•</span>
                <span>Apex Center</span>
              </div>

              <div className="text-right">
                <span className="text-xs text-slate-500 block">Department Faculty Lead</span>
                <span className="text-xs font-bold text-[#173C59]">{activeDept.leadDoctor}</span>
              </div>
            </div>

            {/* Title & Tagline */}
            <div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#173C59] tracking-tight">
                {activeDept.name}
              </h3>
              <p className="text-sm font-semibold text-[#2788B8] mt-1">
                {activeDept.tagline}
              </p>
            </div>

            {/* Department Image & Key Stats Overlay */}
            <div className="relative h-[220px] sm:h-[260px] rounded-2xl overflow-hidden border border-slate-200">
              <img
                src={activeDept.image}
                alt={activeDept.name}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#173C59]/80 via-transparent to-transparent" />
              
              {/* Floating Stat Pill on Image */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                <div>
                  <div className="text-2xl font-extrabold text-white">{activeDept.stats.primary}</div>
                  <div className="text-[10px] uppercase font-bold tracking-wider text-[#A9D8E9]">{activeDept.stats.primaryLabel}</div>
                </div>
                <div className="text-right">
                  <div className="text-xl font-extrabold text-white">{activeDept.stats.secondary}</div>
                  <div className="text-[10px] uppercase font-bold tracking-wider text-slate-300">{activeDept.stats.secondaryLabel}</div>
                </div>
              </div>
            </div>

            {/* Description Paragraph */}
            <p className="text-sm text-slate-600 leading-relaxed">
              {activeDept.description}
            </p>

            {/* Key Clinical Procedures Grid */}
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                Signature Procedures & Interventions
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {activeDept.keyProcedures.map((proc, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs font-medium text-slate-700 bg-slate-50 p-2 rounded-xl">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#2788B8] shrink-0" />
                    <span>{proc}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action CTAs */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-100">
              <Link
                to={`/specialities/${activeDept.slug}`}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#173C59] hover:bg-[#0E2538] text-white font-semibold text-xs uppercase tracking-wider shadow-sm transition-all duration-200"
              >
                <span>Explore Department</span>
                <ArrowRight className="w-4 h-4 text-[#A9D8E9]" />
              </Link>

              <Link
                to={`/book-appointment?dept=${activeDept.slug}`}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#2788B8] hover:text-[#173C59] transition-colors"
              >
                <span>Book Consultation with {activeDept.shortName} Specialist</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
