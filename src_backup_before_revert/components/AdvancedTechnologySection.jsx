import React from 'react';
import { Link } from 'react-router-dom';
import { Cpu, Activity, Zap, CheckCircle2, ArrowRight } from 'lucide-react';
import { PULSE_DATA } from '../data/pulseData';

export default function AdvancedTechnologySection() {
  const { technology } = PULSE_DATA;

  return (
    <section id="technology" className="py-20 lg:py-28 bg-[#173C59] text-white relative z-10 overflow-hidden">
      
      {/* Subtle Glowing Cyan Accents & Technical Vector Grid */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-10 right-10 w-[600px] h-[600px] bg-gradient-to-bl from-[#2788B8] via-[#A9D8E9] to-transparent rounded-full blur-[140px]" />
        <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-[#65BCA6]/30 rounded-full blur-[120px]" />
        <div
          className="absolute inset-0 opacity-10"
          style={{ backgroundImage: `radial-gradient(#A9D8E9 1px, transparent 1px)`, backgroundSize: '28px 28px' }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-14 border-b border-white/10 pb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#A9D8E9] border border-white/15 text-[11px] font-bold uppercase tracking-widest mb-2">
              <Zap className="w-3.5 h-3.5 text-[#A9D8E9]" />
              <span>Section 07 • Deep Technology</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Advanced Medical Technology
            </h2>
          </div>
          <p className="text-sm text-slate-300 max-w-md">
            State-of-the-art medical instrumentation bringing sub-millimeter precision, low-radiation imaging, and zero-compromise surgical sterility.
          </p>
        </div>

        {/* Equipment Photographic Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {technology.map((tech) => (
            <div
              key={tech.id}
              className="group rounded-3xl bg-white/5 border border-white/10 hover:border-[#A9D8E9]/40 hover:bg-white/10 transition-all duration-300 p-6 sm:p-8 flex flex-col justify-between space-y-6 backdrop-blur-md"
            >
              <div className="space-y-4">
                
                {/* Visual Imagery */}
                <div className="relative h-[220px] rounded-2xl overflow-hidden border border-white/10">
                  <img
                    src={tech.image}
                    alt={tech.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0E2538] via-transparent to-transparent" />
                  
                  {/* Status Badge */}
                  <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-[10px] font-bold text-[#A9D8E9]">
                    {tech.status}
                  </div>
                </div>

                {/* Tech Title & Category */}
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#A9D8E9]">
                    {tech.category}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                    {tech.name}
                  </h3>
                  <p className="text-xs font-medium text-slate-300 mt-1">
                    {tech.tagline}
                  </p>
                </div>

                {/* Specifications List */}
                <div className="space-y-2 pt-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                    Technical Specifications:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {tech.specs.map((spec, sIdx) => (
                      <div key={sIdx} className="flex items-center gap-2 text-xs text-slate-200 bg-white/5 p-2 rounded-xl border border-white/5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#A9D8E9] shrink-0" />
                        <span className="line-clamp-1">{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* Bottom Action */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <p className="text-xs text-slate-400 line-clamp-1 max-w-sm">
                  {tech.description}
                </p>

                <Link
                  to="/technology"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#A9D8E9] hover:text-white transition-colors whitespace-nowrap"
                >
                  <span>Full Specs</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
