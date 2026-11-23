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
    <section id="neurology" className="relative min-h-[90vh] lg:min-h-screen flex items-center py-20 px-4 sm:px-6 lg:px-10 overflow-hidden bg-gradient-to-b from-[#100C1F] via-[#150F2C] to-[#0D1527] text-white border-b border-purple-500/20">
      
      {/* FULL-BLEED 3D NEURAL NETWORK CANVAS */}
      <NeurologyFullCanvas />

      <div className="max-w-7xl mx-auto w-full relative z-10 py-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left: Editorial Neuroscience Typography (7 Cols) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/20 backdrop-blur-md border border-purple-400/30 text-purple-200 text-xs font-bold uppercase tracking-widest shadow-xs">
              <Brain className="w-4 h-4 text-purple-300" />
              <span>Neurology, Neuro-Spine & Golden-Hour Stroke</span>
            </div>

            <div className="space-y-2">
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.08]">
                Every Synapse Safeguarded. <br />
                <span className="text-[#AFA0E9]">Every Second Counted.</span>
              </h2>
              <p className="text-base sm:text-lg font-semibold text-purple-200 pt-1">
                Directed by Dr. Ananya Sharma (MCh Neurosurgery AIIMS New Delhi).
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
