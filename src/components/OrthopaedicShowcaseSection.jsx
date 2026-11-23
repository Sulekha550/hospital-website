import React from 'react';
import { Link } from 'react-router-dom';
import { Bone, CheckCircle2, ArrowRight, ShieldCheck, Activity, Award } from 'lucide-react';
import OrthopaedicFullCanvas from './OrthopaedicFullCanvas';

/**
 * OrthopaedicShowcaseSection
 * Full-bleed 3D Biometric Joint & Skeletal Mechanics with sub-millimeter robotic alignment guides.
 * Translucent frosted glass telemetry, fast-track rehabilitation, and surgical outcomes.
 */
export default function OrthopaedicShowcaseSection() {
  const procedures = [
    { title: "Robotic Total Knee Arthroplasty", desc: "Sub-millimeter prosthetic alignment for lifetime durability." },
    { title: "Tissue-Sparing Hip Replacement", desc: "Direct anterior approach preserving abductor muscle integrity." },
    { title: "Arthroscopic Sports Ligament Repair", desc: "Keyhole reconstruction of ACL, PCL, and meniscus tears." },
    { title: "Geriatric Fragility Fracture Care", desc: "Fast-track fixation enabling early pain-free ambulation." },
  ];

  return (
    <section id="orthopaedics" className="relative min-h-[90vh] lg:min-h-screen flex items-center py-24 px-4 sm:px-6 lg:px-12 overflow-hidden bg-gradient-to-b from-[#F2FBF7] via-[#F7FAFC] to-[#EFF8F4] border-b border-emerald-100 select-none">
      
      {/* 1. FULL-BLEED 3D BIOMETRIC SKELETAL & JOINT MECHANICS CANVAS */}
      <OrthopaedicFullCanvas />

      {/* Distinct Section 5 Background: Clean Architectural Mint & Botanical Precision Atmosphere */}
      <div className="absolute inset-0 pointer-events-none -z-5 overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-[550px] h-[550px] bg-[#65BCA6]/12 rounded-full blur-[140px]" />
        <div className="absolute bottom-10 right-1/4 w-[500px] h-[500px] bg-[#10B981]/10 rounded-full blur-[140px]" />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10 py-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          
          {/* Left: Editorial Orthopaedic Typography (7 Cols) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-900 border border-emerald-200/80 text-xs font-bold uppercase tracking-[0.22em] shadow-xs">
              <Bone className="w-4 h-4 text-emerald-600" />
              <span>Robotic Orthopaedics & Joint Reconstruction</span>
            </div>

            <div className="space-y-3">
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#173C59] tracking-[-0.03em] leading-[1.08]">
                Restoring Motion. <br />
                <span className="font-serif italic font-normal text-emerald-700">Rebuilding Vitality.</span>
              </h2>
              <p className="text-base sm:text-lg font-light text-slate-700 tracking-[-0.01em] pt-1">
                Directed by <strong className="font-semibold text-[#173C59]">Dr. Vikramaditya Rathore</strong> (MS Ortho, MCh Ortho UK).
              </p>
            </div>

            <p className="text-sm sm:text-base text-slate-700 max-w-xl leading-relaxed bg-white/60 backdrop-blur-md p-4 rounded-2xl border border-white/80 shadow-xs">
              PULSE Bone & Joint Centre combines sub-millimeter robotic computer navigation with Class-100 laminar airflow operating suites, enabling patients to take their first pain-free assisted steps within 24 hours of surgery.
            </p>

            {/* Floating Translucent Glass Procedures Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-xl pt-2">
              {procedures.map((proc, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-2xl bg-white/75 backdrop-blur-xl border border-white/90 shadow-sm hover:shadow-md hover:bg-white/90 transition-all space-y-1"
                >
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <h3 className="text-xs font-bold text-[#173C59]">{proc.title}</h3>
                  </div>
                  <p className="text-[11px] text-slate-600 pl-6 leading-tight">{proc.desc}</p>
                </div>
              ))}
            </div>

            {/* Action Row */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Link
                to="/specialities/orthopaedics"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-emerald-600/25 transition-all"
              >
                <span>Orthopaedics Department Dossier</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                to="/book-appointment?dept=orthopaedics"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/85 hover:bg-white text-[#173C59] font-bold text-xs uppercase tracking-wider border border-white shadow-md transition-all backdrop-blur-md"
              >
                <span>Consult Dr. Vikramaditya Rathore</span>
              </Link>
            </div>

          </div>

          {/* Right Column: Floating Telemetry Cards Array */}
          <div className="lg:col-span-5 space-y-4">
            
            <div className="p-5 rounded-3xl bg-white/80 backdrop-blur-xl border border-white/95 shadow-xl space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-600">Rehabilitation Telemetry</span>
                <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 text-[10px] font-bold">Fast-Track Protocol</span>
              </div>
              <div className="text-3xl font-extrabold text-[#173C59]">24 Hours</div>
              <div className="text-xs font-bold text-slate-800">Post-Op Assisted Walking</div>
              <p className="text-[11px] text-slate-600 leading-relaxed">
                Tissue-sparing surgical cuts reduce post-operative pain and swelling, allowing immediate assisted ambulation.
              </p>
            </div>

            <div className="p-5 rounded-3xl bg-white/80 backdrop-blur-xl border border-white/95 shadow-xl space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-600">Surgical Sterility</span>
                <span className="text-xs font-bold text-slate-500">HEPA Filtered</span>
              </div>
              <div className="text-3xl font-extrabold text-emerald-600">Class-100</div>
              <div className="text-xs font-bold text-slate-800">Laminar Airflow Modular Theatres</div>
              <p className="text-[11px] text-slate-600 leading-relaxed">
                Positive-pressure sterile air exchange maintaining zero particulate contamination for joint replacements.
              </p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
