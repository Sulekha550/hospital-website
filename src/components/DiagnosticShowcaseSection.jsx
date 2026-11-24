import React from 'react';
import { Link } from 'react-router-dom';
import { Activity, CheckCircle2, ArrowRight, Zap, ShieldCheck, Cpu, Stethoscope } from 'lucide-react';
import DiagnosticScannerFullCanvas from './DiagnosticScannerFullCanvas';
import SectionCinematicVideo from './SectionCinematicVideo';

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
    <section id="diagnostics" className="relative min-h-[90vh] lg:min-h-screen flex items-center py-24 px-4 sm:px-6 lg:px-12 overflow-hidden bg-gradient-to-b from-[#1C0107] via-[#2A020D] to-[#140005] text-white border-b border-[#450A0A]/80 select-none">

      {/* 1. FULL-BLEED 3D VOLUMETRIC SCANNER CANVAS */}
      <DiagnosticScannerFullCanvas />

      {/* =========================================================================
          UNIQUE SECTION 6 BACKGROUND: AMBIENT MRI/CT VIDEO + VOLUMETRIC CT SCANNER APERTURE
         ========================================================================= */}
      <div className="absolute inset-0 pointer-events-none -z-5 overflow-hidden" aria-hidden="true">
        {/* Ambient 4K Radiology & CT Scanner Video Layer */}
        <div className="absolute inset-0 -z-10 overflow-hidden opacity-35 mix-blend-screen">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            className="w-full h-full object-cover filter contrast-125 saturate-150"
          >
            <source src="/videos/advanced-tech.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-[#1C0107]/85 via-transparent to-[#140005]/90" />
        </div>

        {/* Velvet Emerald & Mint Volumetric Ambient Beams */}
        <div className="absolute top-1/4 right-1/4 w-[700px] h-[700px] bg-[#991B1B]/40 rounded-full blur-[130px]" />
        <div className="absolute -bottom-10 left-10 w-[650px] h-[650px] bg-[#0284C7]/25 rounded-full blur-[120px]" />

        {/* Multi-Slice Axial CT Scanner Gantry Aperture Rings with Counter-Rotating Gantry Motion */}
        <div className="absolute -right-28 top-1/2 -translate-y-1/2 w-[720px] h-[720px] opacity-55 pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 720 720">
            <g className="animate-radar-sweep origin-center" style={{ transformOrigin: '360px 360px' }}>
              <circle cx="360" cy="360" r="320" stroke="#0284C7" strokeWidth="2" strokeDasharray="4 8" fill="none" />
              <line x1="360" y1="20" x2="360" y2="700" stroke="#B91C1C" strokeWidth="1.5" strokeDasharray="4 10" />
            </g>
            <g className="animate-rotate-reverse origin-center" style={{ transformOrigin: '360px 360px' }}>
              <circle cx="360" cy="360" r="240" stroke="#B91C1C" strokeWidth="2.5" strokeDasharray="16 8" fill="none" />
              <circle cx="360" cy="360" r="160" stroke="#38BDF8" strokeWidth="2" fill="none" />
              <line x1="20" y1="360" x2="700" y2="360" stroke="#B91C1C" strokeWidth="1.5" strokeDasharray="4 10" />
            </g>
            <circle cx="360" cy="360" r="90" stroke="#0284C7" strokeWidth="1.5" strokeDasharray="3 3" fill="none" className="animate-pulse" />
          </svg>
        </div>

        {/* Live Sweeping Vertical Tomography Laser Scanner Beam */}
        <div className="absolute inset-x-0 h-[3.5px] bg-gradient-to-r from-transparent via-[#0284C7] to-transparent shadow-[0_0_25px_#0284C7] animate-laser-v" />

        {/* Digital Radiology DICOM Crosshairs */}
        <div className="absolute top-28 left-8 text-[#0284C7]/40 font-mono text-sm select-none flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#0284C7] animate-ping" />
          <span>⊕ AXIAL 1.25mm HIGH-RES RECON</span>
        </div>
        <div className="absolute bottom-28 left-8 text-[#0284C7]/30 font-mono text-sm select-none">⊕ CORONAL 3D VOLUMETRIC</div>
        <div className="absolute top-28 right-8 text-[#0284C7]/30 font-mono text-sm select-none">⊕ SAGITTAL 3.0T MATRIX</div>

        {/* Technical Specification HUD */}
        <div className="absolute top-28 right-12 font-mono text-[10px] text-[#0284C7]/35 tracking-widest hidden md:block uppercase space-y-0.5 text-right">
          <div>SIEMENS ARTIS ZEE • FLAT-PANEL CATH LAB</div>
          <div>128-SLICE DUAL-SOURCE CARDIAC CT</div>
          <div>3.0T WHISPER-QUIET SILENT MRI SCANNER</div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10 py-8">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">

          {/* Left: Editorial Diagnostic Physics Typography (7 Cols) */}
          <div className="lg:col-span-7 space-y-6 text-left">

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#450A0A]/80 backdrop-blur-md border border-[#0284C7]/40 text-[#FECDD3] text-xs font-bold uppercase tracking-[0.22em] shadow-xs">
              <Zap className="w-4 h-4 text-[#0284C7]" />
              <span>Advanced Diagnostic Radiology & Volumetric CT</span>
            </div>

            <div className="space-y-3">
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-[-0.03em] leading-[1.08]">
                Sub-Millimeter Insight. <br />
                <span className="font-serif italic font-normal text-[#0284C7]">Zero Clinical Guesswork.</span>
              </h2>
              <p className="text-base sm:text-lg font-light text-[#FECDD3]/90 pt-1 tracking-[-0.01em]">
                Equipped with Siemens Artis Zee Cath Lab, 3T Silent MRI & 128-Slice Cardiac CT.
              </p>
            </div>

            {/* Minimal High-Impact Badges Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1 max-w-xl">
              <div className="p-2.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/15 text-left">
                <span className="text-sm font-mono font-bold text-[#0284C7] block">&lt; 0.3s</span>
                <span className="text-[10px] text-slate-300 uppercase block font-semibold">Single Breath</span>
              </div>
              <div className="p-2.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/15 text-left">
                <span className="text-sm font-mono font-bold text-[#38BDF8] block">-40%</span>
                <span className="text-[10px] text-slate-300 uppercase block font-semibold">Ultra-Low Dose</span>
              </div>
              <div className="p-2.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/15 text-left">
                <span className="text-sm font-mono font-bold text-amber-400 block">3.0 Tesla</span>
                <span className="text-[10px] text-slate-300 uppercase block font-semibold">Silent MRI</span>
              </div>
              <div className="p-2.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/15 text-left">
                <span className="text-sm font-mono font-bold text-teal-400 block">&lt; 0.5 mm</span>
                <span className="text-[10px] text-slate-300 uppercase block font-semibold">Sub-Millimeter</span>
              </div>
            </div>

            {/* Doctor Review Guarantee Stamp with Stethoscope Crest */}
            <div className="flex items-center gap-3 p-2.5 rounded-2xl bg-white/10 backdrop-blur-md border border-[#FECDD3]/40 max-w-xl text-left">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#991B1B] to-[#B91C1C] border border-[#FECDD3] flex items-center justify-center text-[#FECDD3] shrink-0">
                <Stethoscope className="w-5 h-5 stroke-[1.8]" />
              </div>
              <div>
                <span className="text-xs font-bold text-white block">
                  Physician Review: Dr. Prakash Chand Shahi
                </span>
                <span className="text-[10px] text-[#FECDD3] font-mono">
                  All cardiac angiograms, CTs &amp; Echo reports personally analyzed.
                </span>
              </div>
            </div>

            {/* Floating Glass Imaging Tech Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-xl pt-2">
              {imagingTech.map((tech, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/15 shadow-sm hover:bg-white/15 transition-all space-y-1"
                >
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#0284C7] shrink-0" />
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
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#0EA5E9 hover:bg-[#0284C7] text-slate-950 font-bold text-xs uppercase tracking-wider shadow-lg shadow-rose-500/25 transition-all"
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

          {/* Right Column: Floating Telemetry Cards Array + CT/MRI Scanner Video */}
          <div className="lg:col-span-5 space-y-4">

            {/* Live CT Gantry & Laser Scanner Video Console */}
            <SectionCinematicVideo
              type="advanced-tech"
              styleVariant="curved-mask"
              posterImage="/images/advanced-mri-scanner.jpg"
              title="Volumetric 128-Slice CT Gantry"
              subtitle="360° Laser Reconstruction • Axial Matrix"
              specs="Single-Heartbeat Cardiac Gating • < 0.3s"
              aspectRatio="aspect-[16/10]"
            />

            {/* Unique Radiology Visual Gallery (Dual Plates) */}
            <div className="grid grid-cols-2 gap-3">
              <div className="relative rounded-2xl overflow-hidden border border-[#0284C7]/30 aspect-[4/3] shadow-md group">
                <img
                  src="/images/ct-calcium-score.jpg"
                  alt="128-Slice CT Calcium Score"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-2 left-2 right-2 text-white text-left">
                  <span className="text-[9px] font-mono font-bold text-[#0284C7] block uppercase">128-Slice Matrix</span>
                  <span className="text-[11px] font-bold block">CT Calcium Score</span>
                </div>
              </div>

              <div className="relative rounded-2xl overflow-hidden border border-[#0284C7]/30 aspect-[4/3] shadow-md group">
                <img
                  src="/images/cardiac-icu-telemetry.jpg"
                  alt="Level-3 ICU Monitor"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-2 left-2 right-2 text-white text-left">
                  <span className="text-[9px] font-mono font-bold text-teal-300 block uppercase">Level-3 ICU</span>
                  <span className="text-[11px] font-bold block">Cardiac Telemetry</span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
