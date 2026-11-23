import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, CheckCircle2, ArrowRight, ShieldCheck, Zap, Award } from 'lucide-react';
import NeurologyFullCanvas from './NeurologyFullCanvas';

/**
 * NeurologyShowcaseSection
 * Full-bleed 3D Neural Network with firing action potentials across deep blue-violet space.
 * Floating translucent glass clinical telemetry and acute stroke protocols.
 */
export default function NeurologyShowcaseSection() {
  const protocols = [
    { title: "Hyperacute Stroke Thrombolysis", desc: "Golden-hour intravenous thrombolytic protocol within 4.5 hours." },
    { title: "Endoscopic Spine Discectomy", desc: "Minimally invasive keyhole decompression for disc prolapse." },
    { title: "Microvascular Cranial Resection", desc: "High-definition Karl Storz 4K neuro-endoscopic tumor surgery." },
    { title: "Epilepsy & Neuropathy Diagnostics", desc: "Digital EEG, EMG, nerve conduction velocity (NCV) evaluations." },
  ];

  return (
    <section id="neurology" className="relative min-h-[90vh] lg:min-h-screen flex items-center py-24 px-4 sm:px-6 lg:px-12 overflow-hidden bg-gradient-to-b from-[#0A1224] via-[#0E1B38] to-[#080E1C] text-white border-b border-sky-900/40 select-none">
      
      {/* 1. FULL-BLEED 3D NEURAL NETWORK CANVAS */}
      <NeurologyFullCanvas />

      {/* Distinct Section 4 Background: Deep Synaptic Navy & Lavender Ion Beams */}
      <div className="absolute inset-0 pointer-events-none -z-5 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-[#3B82F6]/15 rounded-full blur-[150px]" />
        <div className="absolute -bottom-10 left-10 w-[550px] h-[550px] bg-[#AFA0E9]/10 rounded-full blur-[140px]" />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10 py-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          
          {/* Left: Editorial Neuroscience Typography (7 Cols) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-900/40 backdrop-blur-md border border-blue-400/30 text-blue-200 text-xs font-bold uppercase tracking-[0.22em] shadow-xs">
              <Brain className="w-4 h-4 text-blue-300" />
              <span>Neurology, Neuro-Spine & Golden-Hour Stroke</span>
            </div>

            <div className="space-y-3">
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-[-0.03em] leading-[1.08]">
                Every Synapse Safeguarded. <br />
                <span className="font-serif italic font-normal text-[#AFA0E9]">Every Second Counted.</span>
              </h2>
              <p className="text-base sm:text-lg font-light text-slate-300 pt-1 tracking-[-0.01em]">
                Directed by <strong className="font-semibold text-white">Dr. Ananya Sharma</strong> (MCh Neurosurgery AIIMS New Delhi).
              </p>
            </div>

            <p className="text-sm sm:text-base text-slate-300 max-w-xl leading-relaxed bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/15 shadow-xs">
              PULSE Neuro-Spine Pavilion integrates instant 3.0T silent MRI stroke diffusion mapping, microscopic cranial neurosurgery, endoscopic spinal decompression, and a dedicated 12-bed Neuro-ICU.
            </p>

            {/* Floating Glass Protocols Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-xl pt-2">
              {protocols.map((proto, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/15 shadow-sm hover:bg-white/15 transition-all space-y-1"
                >
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#AFA0E9] shrink-0" />
                    <h3 className="text-xs font-bold text-white">{proto.title}</h3>
                  </div>
                  <p className="text-[11px] text-slate-300 pl-6 leading-tight">{proto.desc}</p>
                </div>
              ))}
            </div>

            {/* Action Row */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Link
                to="/specialities/neurology"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-purple-600/30 transition-all"
              >
                <span>Neurology Department Dossier</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                to="/book-appointment?dept=neurology"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-wider border border-white/20 shadow-md transition-all backdrop-blur-md"
              >
                <span>Consult Dr. Ananya Sharma</span>
              </Link>
            </div>

          </div>

          {/* Right Column: Floating Telemetry Cards Array */}
          <div className="lg:col-span-5 space-y-4">
            
            <div className="p-5 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/15 shadow-xl space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#AFA0E9]">Stroke Protocol</span>
                <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-[10px] font-bold">BE-FAST Ready</span>
              </div>
              <div className="text-3xl font-extrabold text-[#AFA0E9]">&lt; 30 Minutes</div>
              <div className="text-xs font-bold text-white">Stroke Door-To-Needle Thrombolysis</div>
              <p className="text-[11px] text-slate-300 leading-relaxed">
                Emergency 3T MRI perfusion diffusion sequencing immediately upon arrival to preserve speech and motor vitality.
              </p>
            </div>

            <div className="p-5 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/15 shadow-xl space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#AFA0E9]">Surgical Precision</span>
                <span className="text-xs font-bold text-slate-400">Karl Storz 4K</span>
              </div>
              <div className="text-3xl font-extrabold text-white">Sub-Millimeter</div>
              <div className="text-xs font-bold text-white">Endoscopic Spine Decompression</div>
              <p className="text-[11px] text-slate-300 leading-relaxed">
                Targeted microscopic relief of herniated discs and spinal cord compression with minimal muscle incision.
              </p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
