import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, ChevronRight, ShieldCheck } from 'lucide-react';
import { PULSE_DATA } from '../data/pulseData';

export default function CentresOfExcellenceSection() {
  const { centresOfExcellence } = PULSE_DATA;

  return (
    <section className="py-20 lg:py-28 bg-white border-b border-slate-200/80 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-14">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#2788B8]">
              Section 06 • Integrated Clinical Wings
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#173C59] mt-1">
              Centres of Excellence
            </h2>
          </div>
          <p className="text-sm text-slate-500 max-w-md">
            Dedicated multidisciplinary institutes with integrated ICU facilities, cutting-edge surgical theatres, and post-operative wings.
          </p>
        </div>

        {/* 5 Visual Showcase Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {centresOfExcellence.map((centre, idx) => (
            <div
              key={centre.id}
              className={`group rounded-3xl bg-[#F7FAFC] border border-slate-200/90 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between ${
                idx === 0 ? 'md:col-span-2 lg:col-span-2' : ''
              }`}
            >
              <div>
                {/* Visual Imagery */}
                <div className="relative h-[220px] overflow-hidden">
                  <img
                    src={centre.image}
                    alt={centre.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#173C59]/80 via-transparent to-transparent" />
                  
                  {/* Floating Tag */}
                  <div className="absolute bottom-3 left-4 right-4 text-white">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-[#A9D8E9]">
                      {centre.subtitle}
                    </span>
                    <h3 className="text-lg font-bold text-white leading-snug">
                      {centre.name}
                    </h3>
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-6 space-y-4">
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {centre.description}
                  </p>

                  {/* Clinical Services List */}
                  <div className="space-y-1.5">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                      Core Speciality Services:
                    </span>
                    <div className="space-y-1">
                      {centre.services.slice(0, 3).map((serv, sIdx) => (
                        <div key={sIdx} className="flex items-center gap-2 text-xs font-medium text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#2788B8] shrink-0" />
                          <span className="line-clamp-1">{serv}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Card Action */}
              <div className="p-6 pt-0 border-t border-slate-200/50 mt-4">
                <Link
                  to={`/specialities`}
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#173C59] group-hover:text-[#2788B8] transition-colors"
                >
                  <span>Explore Centre Details</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
