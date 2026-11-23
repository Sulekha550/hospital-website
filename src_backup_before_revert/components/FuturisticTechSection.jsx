import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Cpu, Zap, CheckCircle2, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { PULSE_DATA } from '../data/pulseData';
import DiagnosticScannerCanvas from './DiagnosticScannerCanvas';

/**
 * FuturisticTechSection
 * Full-screen deep cobalt medical technology suite showcasing
 * flat-panel digital catheterization, 3T silent MRI, 128-slice CT, and modular OTs.
 */
export default function FuturisticTechSection() {
  const { technology } = PULSE_DATA;
  const [activeTechIndex, setActiveTechIndex] = useState(0);

  const activeTech = technology[activeTechIndex] || technology[0];

  return (
    <section id="technology" className="py-20 lg:py-28 bg-[#0B1E2D] text-white relative z-10 overflow-hidden border-y border-white/10">
      
      {/* Ambient Cobalt Glowing Lighting & Coordinate Grid */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-10 right-10 w-[700px] h-[700px] bg-gradient-to-bl from-[#2788B8] via-[#0284C7] to-transparent rounded-full blur-[140px]" />
        <div className="absolute bottom-10 left-10 w-[600px] h-[600px] bg-[#65BCA6]/25 rounded-full blur-[130px]" />
        <div 
          className="absolute inset-0 opacity-10" 
          style={{ backgroundImage: `radial-gradient(#A9D8E9 1px, transparent 1px)`, backgroundSize: '32px 32px' }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-14 border-b border-white/10 pb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#A9D8E9] border border-white/15 text-[11px] font-bold uppercase tracking-widest mb-2">
              <Zap className="w-3.5 h-3.5 text-[#A9D8E9]" />
              <span>Advanced Medical Physics</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white">
              Advanced Medical Technology
            </h2>
          </div>
          <p className="text-sm text-slate-300 max-w-md">
            State-of-the-art flat-panel fluoroscopy, sub-millimeter whole-body resonance, and single-heartbeat 128-slice CT angiography.
          </p>
        </div>

        {/* Equipment Selector Ribbon */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10">
          {technology.map((tech, idx) => {
            const isSelected = idx === activeTechIndex;

            return (
              <button
                key={tech.id}
                onClick={() => setActiveTechIndex(idx)}
                className={`p-4 rounded-2xl text-left transition-all duration-300 border flex flex-col justify-between ${
                  isSelected
                    ? 'bg-[#173C59] border-[#2788B8] shadow-lg shadow-[#2788B8]/20 translate-y-[-2px]'
                    : 'bg-white/5 border-white/10 hover:bg-white/10 text-slate-300'
                }`}
              >
                <div className="text-[10px] font-mono text-[#A9D8E9] mb-1">
                  0{idx + 1} // TECH
                </div>
                <div className="text-xs sm:text-sm font-bold text-white line-clamp-1">
                  {tech.name.split(' ')[0]} {tech.name.split(' ')[1]}
                </div>
                <span className="text-[10px] text-slate-400 mt-2 block">
                  {tech.status}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Tech Showcase Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white/5 rounded-3xl border border-white/10 p-6 sm:p-10 backdrop-blur-md">
          
          {/* Left: 3D Holographic Diagnostic Scanner Canvas (5 Cols) */}
          <div className="lg:col-span-5 h-[340px] sm:h-[400px] rounded-2xl bg-[#07131D] border border-white/10 p-4 relative flex items-center justify-center overflow-hidden">
            <DiagnosticScannerCanvas className="w-full h-full" />

            <div className="absolute top-4 left-4 px-2.5 py-1 rounded bg-black/60 text-[10px] font-mono text-[#A9D8E9] border border-white/10">
              VOLUMETRIC RECONSTRUCTION
            </div>

            <div className="absolute bottom-4 left-4 right-4 bg-black/70 backdrop-blur-md p-3 rounded-xl border border-white/15 flex items-center justify-between text-xs">
              <span className="text-slate-300">Radiation Dosage:</span>
              <span className="text-emerald-400 font-bold">Ultra-Low Protocol (-65%)</span>
            </div>
          </div>

          {/* Right: Technical Specifications & Capabilities (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-[#A9D8E9]">
                {activeTech.category}
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                {activeTech.name}
              </h3>
              <p className="text-xs sm:text-sm font-semibold text-[#A9D8E9]">
                {activeTech.tagline}
              </p>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {activeTech.description}
            </p>

            <div className="space-y-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                Technical Specifications:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {activeTech.specs.map((spec, sIdx) => (
                  <div key={sIdx} className="flex items-center gap-2 text-xs text-slate-200 bg-white/5 p-2.5 rounded-xl border border-white/5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#A9D8E9] shrink-0" />
                    <span>{spec}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-2 flex items-center justify-between border-t border-white/10">
              <span className="text-xs text-slate-400">
                Maintained under annual OEM calibration contracts.
              </span>

              <Link
                to="/technology"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#2788B8] hover:bg-[#1f739c] text-white text-xs font-semibold transition-all"
              >
                <span>Full Technical Dossier</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
