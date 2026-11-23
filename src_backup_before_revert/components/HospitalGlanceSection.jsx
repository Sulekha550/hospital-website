import React from 'react';
import { Award, Users, Layers, Activity, ArrowUpRight } from 'lucide-react';
import { PULSE_DATA } from '../data/pulseData';
import { Link } from 'react-router-dom';

export default function HospitalGlanceSection() {
  const { stats } = PULSE_DATA;

  const iconMap = {
    Award: Award,
    Users: Users,
    Layers: Layers,
    Activity: Activity,
  };

  return (
    <section className="py-16 lg:py-20 bg-white border-y border-slate-200/80 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#2788B8]">
              Section 02 • Institutional Benchmark
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#173C59] mt-1">
              Hospital At A Glance
            </h2>
          </div>
          <p className="text-sm text-slate-500 max-w-md">
            Verified institutional capabilities serving Gorakhpur and eastern Uttar Pradesh with clinical excellence.
          </p>
        </div>

        {/* 4 Elegant Floating Information Blocks */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((item, idx) => {
            const Icon = iconMap[item.icon] || Activity;
            return (
              <div
                key={idx}
                className="group relative p-7 rounded-3xl bg-[#F7FAFC] border border-slate-200/90 hover:border-[#2788B8]/40 hover:bg-white card-hover-lift transition-all duration-300"
              >
                {/* Top Icon & Metric Value */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-[#2788B8] shadow-xs group-hover:bg-[#173C59] group-hover:text-white transition-colors duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#173C59]">
                    {item.value}
                  </span>
                </div>

                {/* Metric Label */}
                <h3 className="text-base font-bold text-[#173C59] mb-1.5 group-hover:text-[#2788B8] transition-colors">
                  {item.label}
                </h3>

                {/* Subtitle / Clinical Detail */}
                <p className="text-xs text-slate-500 leading-relaxed">
                  {item.detail}
                </p>

                {/* Bottom Accent Line */}
                <div className="mt-4 pt-3 border-t border-slate-200/60 flex items-center justify-between text-[11px] font-semibold text-slate-400 group-hover:text-[#2788B8]">
                  <span>Verified Capability</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 -translate-y-0.5 transition-all" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
