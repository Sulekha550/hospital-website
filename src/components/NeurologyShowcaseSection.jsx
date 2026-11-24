import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, CheckCircle2, ArrowRight, ShieldCheck, Zap, Award } from 'lucide-react';
import NeurologyFullCanvas from './NeurologyFullCanvas';
import SectionCinematicVideo from './SectionCinematicVideo';

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
    <section id="neurology" className="relative min-h-[90vh] lg:min-h-screen flex items-center py-24 px-4 sm:px-6 lg:px-12 overflow-hidden bg-gradient-to-b from-[#060A17] via-[#0A1124] to-[#040812] text-white border-b border-indigo-950/80 select-none">

      {/* 1. FULL-BLEED 3D NEURAL NETWORK CANVAS */}
      <NeurologyFullCanvas />

      {/* =========================================================================
          UNIQUE SECTION 4 BACKGROUND: AMBIENT SYNAPSE VIDEO + DEEP COSMIC NEURAL GRAPH
         ========================================================================= */}
      <div className="absolute inset-0 pointer-events-none -z-5 overflow-hidden" aria-hidden="true">
        {/* Ambient 4K Neural Network & Synapse Video Layer */}
        <div className="absolute inset-0 -z-10 overflow-hidden opacity-35 mix-blend-screen">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            className="w-full h-full object-cover filter contrast-125 saturate-150"
          >
            <source src="/videos/neurology-synapse.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-[#060A17]/70 via-transparent to-[#040812]/80" />
        </div>

        {/* Deep Indigo & Ultraviolet Cosmic Glows */}
        <div className="absolute top-1/4 right-1/4 w-[700px] h-[700px] bg-indigo-600/30 rounded-full blur-[130px]" />
        <div className="absolute -bottom-10 left-10 w-[650px] h-[650px] bg-violet-500/25 rounded-full blur-[120px]" />

        {/* Intricate Neural Axon Network & Synaptic Nodes Graph with Moving Action Potentials */}
        <svg className="absolute inset-0 w-full h-full opacity-70" viewBox="0 0 1440 900" fill="none">
          {/* Synaptic Pathway Lines with Flowing Ion Currents */}
          <line x1="200" y1="180" x2="420" y2="310" stroke="#818CF8" strokeWidth="2.5" strokeDasharray="180" className="animate-flow-dash" />
          <line x1="420" y1="310" x2="680" y2="240" stroke="#A78BFA" strokeWidth="3" strokeDasharray="220" className="animate-flow-dash-fast" />
          <line x1="420" y1="310" x2="520" y2="520" stroke="#818CF8" strokeWidth="2.2" strokeDasharray="160" className="animate-flow-dash" />
          <line x1="680" y1="240" x2="940" y2="380" stroke="#60A5FA" strokeWidth="3" strokeDasharray="260" className="animate-flow-dash-fast" />
          <line x1="940" y1="380" x2="1200" y2="260" stroke="#818CF8" strokeWidth="2.5" strokeDasharray="200" className="animate-flow-dash" />
          <line x1="940" y1="380" x2="1100" y2="560" stroke="#A78BFA" strokeWidth="3" strokeDasharray="220" className="animate-flow-dash-fast" />
          <line x1="520" y1="520" x2="780" y2="640" stroke="#818CF8" strokeWidth="2.2" strokeDasharray="190" className="animate-flow-dash" />
          <line x1="780" y1="640" x2="1100" y2="560" stroke="#60A5FA" strokeWidth="2.8" strokeDasharray="240" className="animate-flow-dash-fast" />

          {/* Firing Synaptic Ion Pulse Nodes */}
          <circle cx="200" cy="180" r="7" fill="#818CF8" />
          <circle cx="420" cy="310" r="10" fill="#A78BFA" className="animate-ping" />
          <circle cx="680" cy="240" r="8" fill="#60A5FA" />
          <circle cx="520" cy="520" r="7" fill="#818CF8" />
          <circle cx="940" cy="380" r="12" fill="#C084FC" className="animate-ping" />
          <circle cx="1200" cy="260" r="7" fill="#818CF8" />
          <circle cx="1100" cy="560" r="8" fill="#A78BFA" />
          <circle cx="780" cy="640" r="8" fill="#60A5FA" className="animate-ping" />
        </svg>

        {/* Continuous Electroencephalogram (EEG) Alpha Rhythm Streamer with Active Stroke Flow */}
        <div className="absolute bottom-16 left-0 right-0 opacity-60">
          <svg className="w-full h-24" viewBox="0 0 1440 80" fill="none" preserveAspectRatio="none">
            <path
              d="M0,40 Q30,10 60,40 T120,40 T180,40 T240,40 T300,40 Q315,5 330,75 T360,40 T420,40 T480,40 T540,40 T600,40 Q615,0 630,80 T660,40 T720,40 T780,40 T840,40 T900,40 Q915,5 930,75 T960,40 T1020,40 T1080,40 T1140,40 T1200,40 Q1215,0 1230,80 T1260,40 T1320,40 T1380,40 T1440,40"
              stroke="#A78BFA"
              strokeWidth="3.2"
              strokeDasharray="400"
              className="animate-flow-dash-fast"
            />
          </svg>
        </div>

        {/* Technical Brainstem & Stroke Telemetry Watermark */}
        <div className="absolute top-28 right-12 font-mono text-[10px] text-indigo-400/30 tracking-widest hidden md:block uppercase space-y-0.5 text-right">
          <div>GOLDEN-HOUR STROKE CODE 60 MIN</div>
          <div>KARL STORZ 4K ENDOSCOPIC NEUROSURGERY</div>
          <div>DIFFUSION TENSOR IMAGING (DTI) 3.0T</div>
        </div>
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

            {/* Minimal High-Impact Badges Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1 max-w-xl">
              <div className="p-2.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/15 text-left">
                <span className="text-sm font-mono font-bold text-violet-400 block">&lt; 60 Min</span>
                <span className="text-[10px] text-slate-300 uppercase block font-semibold">Stroke Window</span>
              </div>
              <div className="p-2.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/15 text-left">
                <span className="text-sm font-mono font-bold text-[#AFA0E9] block">3.0T MRI</span>
                <span className="text-[10px] text-slate-300 uppercase block font-semibold">Silent Scanner</span>
              </div>
              <div className="p-2.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/15 text-left">
                <span className="text-sm font-mono font-bold text-indigo-300 block">4K Optics</span>
                <span className="text-[10px] text-slate-300 uppercase block font-semibold">Micro-Neurosurgery</span>
              </div>
              <div className="p-2.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/15 text-left">
                <span className="text-sm font-mono font-bold text-[#0284C7] block">12-Bed</span>
                <span className="text-[10px] text-slate-300 uppercase block font-semibold">Neuro-ICU Care</span>
              </div>
            </div>

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

          {/* Right Column: Floating Telemetry Cards Array + Synapse Video Console */}
          <div className="lg:col-span-5 space-y-4">

            {/* Live Functional DTI Synaptic Video Panel */}
            <SectionCinematicVideo
              type="neurology-brain"
              styleVariant="curved-mask"
              posterImage="/images/neurology-brain-synapse.jpg"
              title="Cranial Functional DTI Feed"
              subtitle="3.0T MRI • Synaptic Ion Flashes"
              specs="Sub-Millimeter Neuronavigation • Karl Storz 4K"
              aspectRatio="aspect-[16/10]"
            />

            {/* Unique Neuroscience Visual Gallery (Dual Plates) */}
            <div className="grid grid-cols-2 gap-3">
              <div className="relative rounded-2xl overflow-hidden border border-purple-400/30 aspect-[4/3] shadow-md group">
                <img
                  src="/images/brain-mri-diffusion.jpg"
                  alt="MRI Stroke Diffusion"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-2 left-2 right-2 text-white text-left">
                  <span className="text-[9px] font-mono font-bold text-violet-300 block uppercase">3.0T Diffusion</span>
                  <span className="text-[11px] font-bold block">Stroke Mapping</span>
                </div>
              </div>

              <div className="relative rounded-2xl overflow-hidden border border-purple-400/30 aspect-[4/3] shadow-md group">
                <img
                  src="/images/eeg-brainwave-telemetry.jpg"
                  alt="EEG Telemetry"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-2 left-2 right-2 text-white text-left">
                  <span className="text-[9px] font-mono font-bold text-indigo-300 block uppercase">Digital EEG</span>
                  <span className="text-[11px] font-bold block">Synapse Telemetry</span>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/15 shadow-xl space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#AFA0E9]">Stroke Protocol</span>
                <span className="px-2 py-0.5 rounded bg-[#0EA5E9]/20 text-[#FECDD3] text-[10px] font-bold">BE-FAST Ready</span>
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
