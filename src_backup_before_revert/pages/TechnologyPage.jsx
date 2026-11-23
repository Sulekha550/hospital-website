import React from 'react';
import { Link } from 'react-router-dom';
import { Cpu, Zap, CheckCircle2, ShieldCheck, ArrowRight } from 'lucide-react';
import { PULSE_DATA } from '../data/pulseData';

export default function TechnologyPage() {
  const { technology } = PULSE_DATA;

  return (
    <div className="pt-24 pb-20 bg-[#173C59] text-white">
      
      {/* 1. Deep Technology Hero (~100vh) */}
      <section className="min-h-[75vh] flex items-center px-4 sm:px-6 lg:px-8 border-b border-white/10 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#2788B8] rounded-full blur-[140px]" />
        </div>

        <div className="max-w-7xl mx-auto w-full py-16 text-center max-w-3xl space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#A9D8E9] border border-white/20 text-xs font-bold uppercase tracking-widest">
            <Cpu className="w-3.5 h-3.5 text-[#A9D8E9]" />
            <span>Digital Medical Instrumentation</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
            Advanced Medical <br />
            <span className="text-[#A9D8E9]">Technology & Precision.</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Eliminating guesswork with sub-millimeter flat-panel cardiac fluoroscopy, 3.0 Tesla whole-body silent resonance imaging, and ultra-high-speed 128-slice computed tomography.
          </p>
        </div>
      </section>

      {/* 2. Deep Technology Detailed Showcase */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {technology.map((tech) => (
          <div
            key={tech.id}
            className="rounded-3xl bg-white/5 border border-white/10 p-8 sm:p-10 backdrop-blur-md grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
          >
            <div className="lg:col-span-6 rounded-2xl overflow-hidden border border-white/15 h-72 sm:h-80">
              <img
                src={tech.image}
                alt={tech.name}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="lg:col-span-6 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#A9D8E9]">
                {tech.category}
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                {tech.name}
              </h2>
              <p className="text-xs sm:text-sm font-semibold text-[#A9D8E9]">
                {tech.tagline}
              </p>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {tech.description}
              </p>

              <div className="space-y-1.5 pt-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                  Key Technical Features:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {tech.specs.map((s, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-200">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#A9D8E9] shrink-0" />
                      <span>{s}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-3">
                <Link
                  to="/book-appointment"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#2788B8] hover:bg-[#1f739c] text-white text-xs font-semibold"
                >
                  <span>Book Diagnostic / Procedure</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </section>

    </div>
  );
}
