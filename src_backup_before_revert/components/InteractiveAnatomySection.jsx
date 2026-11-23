import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Heart, Brain, Bone, Activity, Wind, Apple, ArrowRight, 
  Stethoscope, ShieldCheck, Sparkles, UserCheck 
} from 'lucide-react';
import { PULSE_DATA } from '../data/pulseData';

export default function InteractiveAnatomySection() {
  const { anatomyHotspots } = PULSE_DATA;
  const [selectedOrganId, setSelectedOrganId] = useState(anatomyHotspots[0].id);

  const currentOrgan = anatomyHotspots.find((o) => o.id === selectedOrganId) || anatomyHotspots[0];

  const organIcons = {
    heart: Heart,
    brain: Brain,
    lungs: Wind,
    stomach: Apple,
    bones: Bone,
  };

  return (
    <section className="py-20 lg:py-28 bg-white border-b border-slate-200/80 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
          <span className="text-[11px] font-bold uppercase tracking-widest text-[#2788B8]">
            Section 04 • 3D Anatomy Architecture
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#173C59]">
            Interactive Human Anatomy
          </h2>
          <p className="text-sm text-slate-500">
            Select an anatomical organ to explore specialized surgical interventions, clinical departments, and lead doctors.
          </p>
        </div>

        {/* Master Anatomy Explorer Board */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#F7FAFC] rounded-3xl border border-slate-200/90 p-6 sm:p-10 shadow-sm">
          
          {/* Left Column (5 Cols): Interactive Anatomical Hotspots Map */}
          <div className="lg:col-span-5 relative flex flex-col items-center justify-center p-6 bg-white rounded-2xl border border-slate-200/80 shadow-xs min-h-[420px]">
            
            <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-6">
              Interactive Anatomical Body Map
            </div>

            {/* Stylized Human Anatomy Silhouette with Clickable Organ Nodes */}
            <div className="relative w-64 h-96 flex flex-col items-center justify-between py-4">
              
              {/* Silhouette Vector Lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20" viewBox="0 0 100 150">
                <circle cx="50" cy="18" r="12" fill="none" stroke="#173C59" strokeWidth="1.5" />
                <path d="M 50,30 L 50,85 M 30,50 L 70,50 M 35,140 L 50,85 L 65,140" fill="none" stroke="#173C59" strokeWidth="1.5" />
              </svg>

              {/* Organ Selection Buttons Placed on Anatomical Coordinates */}
              {anatomyHotspots.map((item) => {
                const Icon = organIcons[item.id] || Activity;
                const isSelected = item.id === selectedOrganId;

                return (
                  <button
                    key={item.id}
                    onClick={() => setSelectedOrganId(item.id)}
                    className={`group flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-bold transition-all duration-300 ${
                      isSelected
                        ? 'bg-[#173C59] text-white border-[#173C59] shadow-md scale-105 z-20'
                        : 'bg-white text-slate-700 border-slate-200 hover:border-[#2788B8] hover:bg-slate-50'
                    }`}
                  >
                    <Icon
                      className={`w-3.5 h-3.5 transition-colors ${
                        isSelected ? 'text-[#A9D8E9]' : 'text-[#2788B8]'
                      }`}
                    />
                    <span>{item.organ}</span>
                    {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />}
                  </button>
                );
              })}

            </div>

            <span className="text-[11px] text-slate-400 mt-4">
              Click any anatomical organ to view clinical telemetry
            </span>

          </div>

          {/* Right Column (7 Cols): Selected Organ Detailed Card */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/90 shadow-sm space-y-6">
            
            {/* Header info */}
            <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#2788B8]" />
                <span className="text-xs font-bold uppercase tracking-widest text-[#2788B8]">
                  {currentOrgan.tag}
                </span>
              </div>
              <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-slate-700">
                Department: {currentOrgan.department}
              </span>
            </div>

            {/* Organ Title & Description */}
            <div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#173C59]">
                {currentOrgan.name}
              </h3>
              <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                {currentOrgan.shortDesc}
              </p>
            </div>

            {/* Clinical Conditions Managed */}
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                Primary Conditions Evaluated & Treated:
              </span>
              <p className="text-xs font-medium text-slate-800">
                {currentOrgan.keyCondition}
              </p>
            </div>

            {/* Lead Clinical Specialist */}
            <div className="flex items-center justify-between p-4 rounded-xl bg-sky-50/60 border border-sky-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white border border-sky-200 flex items-center justify-center text-[#2788B8]">
                  <Stethoscope className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-slate-400 block">Lead Consultant</span>
                  <span className="text-sm font-bold text-[#173C59]">{currentOrgan.leadDoctor}</span>
                </div>
              </div>
              
              <Link
                to={`/doctors`}
                className="text-xs font-semibold text-[#2788B8] hover:underline"
              >
                View Profile
              </Link>
            </div>

            {/* Action Button */}
            <div className="pt-2">
              <Link
                to={`/specialities/${currentOrgan.slug}`}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#173C59] hover:bg-[#0E2538] text-white font-semibold text-xs uppercase tracking-wider shadow-sm transition-all duration-200"
              >
                <span>Navigate to {currentOrgan.organ} Department</span>
                <ArrowRight className="w-4 h-4 text-[#A9D8E9]" />
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
