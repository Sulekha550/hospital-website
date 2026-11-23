import React from 'react';
import { Link } from 'react-router-dom';
import { Activity, CheckCircle2, ArrowRight, Zap, ShieldCheck, Cpu } from 'lucide-react';
import DiagnosticScannerFullCanvas from './DiagnosticScannerFullCanvas';

/**
 * DiagnosticShowcaseSection
 * Full-bleed 3D Volumetric Diagnostic Scanner environment with moving laser beam,
 * layered tomographic imaging slices, and floating medical physics telemetry.
 */
export default function DiagnosticShowcaseSection() {
  const imagingTech = [
    { title: "128-Slice Cardiac CT", desc: "Non-invasive 3D coronary angiograms in a single heartbeat." },
    { title: "3.0 Tesla Silent MRI", desc: "Sub-millimeter soft tissue resolution with 70% acoustic suppression." },
    { title: "Siemens Flat-Panel Cath Lab", desc: "Ultra-low radiation fluoroscopic vascular guidance." },
    { title: "Automated Clinical Pathology", desc: "HS-Troponin-I cardiac enzyme profiling within 20 minutes." },
  ];

  return (
    <section id="diagnostics" className="relative min-h-[90vh] lg:min-h-screen flex items-center py-20 px-4 sm:px-6 lg:px-10 overflow-hidden bg-gradient-to-b from-[#0B1E2D] via-[#0E2538] to-[#173C59] text-white border-b border-sky-500/20">
      
      {/* FULL-BLEED 3D VOLUMETRIC SCANNER CANVAS */}
      <DiagnosticScannerFullCanvas />

      <div className="max-w-7xl mx-auto w-full relative z-10 py-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left: Editorial Diagnostic Physics Typography (7 Cols) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/20 backdrop-blur-md border border-sky-400/30 text-sky-200 text-xs font-bold uppercase tracking-widest shadow-xs">
              <Zap className="w-4 h-4 text-sky-300" />
              <span>Advanced Diagnostic Radiology & Volumetric CT</span>
            </div>

            <div className="space-y-2">
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.08]">
                Sub-Millimeter Insight. <br />
                <span className="text-[#38BDF8]">Zero Clinical Guesswork.</span>
              </h2>
              <p className="text-base sm:text-lg font-semibold text-sky-200 pt-1">
                Equipped with Siemens Artis Zee Cath Lab, 3T Silent MRI & 128-Slice Cardiac CT.
              </p>
            </div>

            <p className="text-sm sm:text-base text-slate-300 max-w-xl leading-relaxed bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/15 shadow-xs">
              Visualizing coronary blockages, acute stroke diffusion, and musculoskeletal wear in outpatient settings with ultra-low radiation protocols and whisper-quiet acoustic dampening.
            </p>

            {/* Floating Glass Imaging Tech Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-xl pt-2">
              {imagingTech.map((tech, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/15 shadow-sm hover:bg-white/15 transition-all space-y-1"
                >
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#38BDF8] shrink-0" />
                    <h3 className="text-xs font-bold text-white">{tech.title}</h3>
                  </div>
                  <p className="text-[11px] text-slate-300 pl-6 leading-tight">{tech.desc}</p>
                </div>
              ))}
            </div>

            {/* Action Row */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Link
                to="/technology"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#0284C7] hover:bg-[#0369A1] text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-sky-600/30 transition-all"
              >
                <span>Explore Medical Technology</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                to="/book-appointment"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-wider border border-white/20 shadow-md transition-all backdrop-blur-md"
              >
                <span>Schedule 3D Cardiac CT / MRI</span>
              </Link>
            </div>

          </div>

          {/* Right Column: Floating Telemetry Cards Array */}
          <div className="lg:col-span-5 space-y-4">
            
            <div className="p-5 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/15 shadow-xl space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#38BDF8]">Gating Speed</span>
                <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-[10px] font-bold">Outpatient Procedure</span>
              </div>
              <div className="text-3xl font-extrabold text-[#38BDF8]">&lt; 0.3 Seconds</div>
              <div className="text-xs font-bold text-white">Single-Heartbeat 3D Coronary Scan</div>
              <p className="text-[11px] text-slate-300 leading-relaxed">
                Comprehensive 3D anatomical reconstruction of the coronary tree and soft plaque without arterial catheter puncture.
              </p>
            </div>

            <div className="p-5 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/15 shadow-xl space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#38BDF8]">Patient Comfort</span>
                <span className="text-xs font-bold text-slate-400">Silent Scan Protocol</span>
              </div>
              <div className="text-3xl font-extrabold text-white">-70% Noise</div>
              <div className="text-xs font-bold text-white">3.0 Tesla Whole-Body MRI</div>
              <p className="text-[11px] text-slate-300 leading-relaxed">
                Exceptional soft-tissue contrast for brain tumours, spinal nerve root impingement, and cartilage wear in total comfort.
              </p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
