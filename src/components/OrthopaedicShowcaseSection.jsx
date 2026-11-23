import React from 'react';
import { Link } from 'react-router-dom';
import { Bone, CheckCircle2, ArrowRight, ShieldCheck, Activity, Award } from 'lucide-react';
import OrthopaedicFullCanvas from './OrthopaedicFullCanvas';
import SectionCinematicVideo from './SectionCinematicVideo';

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
    <section id="orthopaedics" className="relative min-h-[90vh] lg:min-h-screen flex items-center py-24 px-4 sm:px-6 lg:px-12 overflow-hidden bg-gradient-to-b from-[#F2FBF6] via-[#FAFDFB] to-[#EDF8F2] border-b border-[#A7F3D0]/60 select-none">

      {/* 1. FULL-BLEED 3D BIOMETRIC SKELETAL & JOINT MECHANICS CANVAS */}
      <OrthopaedicFullCanvas />

      {/* =========================================================================
          UNIQUE SECTION 5 BACKGROUND: AMBIENT BIOMECHANICS VIDEO & GONIOMETER CAD
         ========================================================================= */}
      <div className="absolute inset-0 pointer-events-none -z-5 overflow-hidden" aria-hidden="true">
        {/* Ambient 4K Biomechanical Joint Video Layer */}
        <div className="absolute inset-0 -z-10 overflow-hidden opacity-25 mix-blend-multiply">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            className="w-full h-full object-cover filter contrast-125 saturate-125"
          >
            <source src="/videos/orthopedics-joint.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-[#F2FBF6]/80 via-transparent to-[#EDF8F2]/80" />
        </div>

        {/* Fresh Mint & Sage Depth Glows */}
        <div className="absolute top-1/3 left-1/4 w-[650px] h-[650px] bg-[#059669]/25 rounded-full blur-[120px]" />
        <div className="absolute bottom-10 right-1/4 w-[600px] h-[600px] bg-[#047857]/20 rounded-full blur-[120px]" />

        {/* Biomechanical Goniometer / Joint Angle Measurement Protractor Arc with Active Sweeping Needle */}
        <svg className="absolute -left-20 top-1/2 -translate-y-1/2 w-[750px] h-[750px] opacity-65" viewBox="0 0 700 700" fill="none">
          {/* Protractor Semi-Circle */}
          <circle cx="350" cy="350" r="260" stroke="#047857" strokeWidth="2" strokeDasharray="3 6" />
          <circle cx="350" cy="350" r="180" stroke="#059669" strokeWidth="1.8" />
          <circle cx="350" cy="350" r="100" stroke="#047857" strokeWidth="2.5" />

          {/* Degree Calibration Lines */}
          <line x1="90" y1="350" x2="610" y2="350" stroke="#047857" strokeWidth="2" />
          <line x1="350" y1="90" x2="350" y2="610" stroke="#047857" strokeWidth="2" />
          <line x1="166" y1="166" x2="534" y2="534" stroke="#059669" strokeWidth="1.5" strokeDasharray="4 6" />
          <line x1="534" y1="166" x2="166" y2="534" stroke="#059669" strokeWidth="1.5" strokeDasharray="4 6" />

          {/* Active Biomechanical Sweeping Goniometer Pointer Arm */}
          <g className="animate-goniometer-sweep origin-center" style={{ transformOrigin: '350px 350px' }}>
            <line x1="350" y1="350" x2="590" y2="350" stroke="#047857" strokeWidth="4.5" strokeLinecap="round" />
            <circle cx="590" cy="350" r="8" fill="#059669" className="animate-ping" />
            <circle cx="590" cy="350" r="5" fill="#047857" />
          </g>

          {/* Angle degree indicators */}
          <text x="360" y="115" fill="#047857" fontSize="12" fontFamily="monospace" fontWeight="bold">90° EXTENSION</text>
          <text x="540" y="180" fill="#047857" fontSize="12" fontFamily="monospace" fontWeight="bold">135° FLEXION</text>
          <text x="590" y="340" fill="#047857" fontSize="12" fontFamily="monospace" fontWeight="bold">0° NEUTRAL</text>
        </svg>

        {/* Hexagonal Bone Mineral Matrix Tessellation Pattern */}
        <svg className="absolute right-0 top-1/4 w-[450px] h-[450px] opacity-[0.16]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="boneMatrix" width="56" height="96" patternUnits="userSpaceOnUse">
              <path d="M28,0 L56,16 L56,48 L28,64 L0,48 L0,16 Z M28,96 L56,80 L56,48 L28,64 L0,48 L0,80 Z" fill="none" stroke="#064E3B" strokeWidth="1.8" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#boneMatrix)" />
        </svg>

        {/* Technical Orthopaedic Navigation Stamp */}
        <div className="absolute top-28 right-12 font-mono text-[10px] text-[#064E3B]/30 tracking-widest hidden md:block uppercase space-y-0.5 text-right">
          <div>ROBOTIC COMPUTER NAVIGATION &lt; 0.5mm</div>
          <div>CLASS-100 LAMINAR AIRFLOW SURGICAL SUITE</div>
          <div>CERAMIC-ON-POLYETHYLENE LOW-FRICTION BEARINGS</div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10 py-8">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">

          {/* Left: Editorial Orthopaedic Typography (7 Cols) */}
          <div className="lg:col-span-7 space-y-6 text-left">

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F0FDF4] text-[#064E3B] border border-[#A7F3D0]/80 text-xs font-bold uppercase tracking-[0.22em] shadow-xs">
              <Bone className="w-4 h-4 text-[#047857]" />
              <span>Robotic Orthopaedics & Joint Reconstruction</span>
            </div>

            <div className="space-y-3">
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#064E3B] tracking-[-0.03em] leading-[1.08]">
                Restoring Motion. <br />
                <span className="font-serif italic font-normal text-[#047857]">Rebuilding Vitality.</span>
              </h2>
              <p className="text-base sm:text-lg font-light text-slate-700 tracking-[-0.01em] pt-1">
                Directed by <strong className="font-semibold text-[#064E3B]">Dr. Vikramaditya Rathore</strong> (MS Ortho, MCh Ortho UK).
              </p>
            </div>

            {/* Minimal High-Impact Badges Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1 max-w-xl">
              <div className="p-2.5 rounded-xl bg-white/70 backdrop-blur-md border border-[#A7F3D0]/60 text-left shadow-xs">
                <span className="text-sm font-mono font-bold text-[#047857] block">Day-1</span>
                <span className="text-[10px] text-slate-700 uppercase block font-semibold">Walking Mobility</span>
              </div>
              <div className="p-2.5 rounded-xl bg-white/70 backdrop-blur-md border border-[#A7F3D0]/60 text-left shadow-xs">
                <span className="text-sm font-mono font-bold text-[#064E3B] block">&lt; 0.5 mm</span>
                <span className="text-[10px] text-slate-700 uppercase block font-semibold">Robotic Precision</span>
              </div>
              <div className="p-2.5 rounded-xl bg-white/70 backdrop-blur-md border border-[#A7F3D0]/60 text-left shadow-xs">
                <span className="text-sm font-mono font-bold text-amber-700 block">Class-100</span>
                <span className="text-[10px] text-slate-700 uppercase block font-semibold">Laminar OTs</span>
              </div>
              <div className="p-2.5 rounded-xl bg-white/70 backdrop-blur-md border border-[#A7F3D0]/60 text-left shadow-xs">
                <span className="text-sm font-mono font-bold text-teal-700 block">15+ Yrs</span>
                <span className="text-[10px] text-slate-700 uppercase block font-semibold">Joint Longevity</span>
              </div>
            </div>

            {/* Floating Translucent Glass Procedures Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-xl pt-2">
              {procedures.map((proc, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-2xl bg-white/75 backdrop-blur-xl border border-white/90 shadow-sm hover:shadow-md hover:bg-white/90 transition-all space-y-1"
                >
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#047857] shrink-0" />
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
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#047857] hover:bg-[#064E3B] text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-emerald-600/25 transition-all"
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

          {/* Right Column: Floating Telemetry Cards Array + Joint Motion Video */}
          <div className="lg:col-span-5 space-y-4">

            {/* Live Biomechanical Joint Motion Video */}
            <SectionCinematicVideo
              type="orthopedics-joint"
              styleVariant="asymmetric"
              posterImage="/images/orthopedics-biomechanical-joint.jpg"
              title="Robotic Arthroplasty Vector"
              subtitle="Dynamic Goniometry • 0°–135° Range"
              specs="Sub-Millimeter Prosthetic Calibration • Mako Robot"
              aspectRatio="aspect-[16/10]"
            />

            {/* Unique Orthopaedic Visual Gallery (Dual Plates) */}
            <div className="grid grid-cols-2 gap-3">
              <div className="relative rounded-2xl overflow-hidden border border-[#A7F3D0] aspect-[4/3] shadow-md group">
                <img
                  src="/images/robotic-knee-navigation.jpg"
                  alt="Robotic Knee Navigation"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-2 left-2 right-2 text-white text-left">
                  <span className="text-[9px] font-mono font-bold text-[#A7F3D0] block uppercase">Sub-Millimeter</span>
                  <span className="text-[11px] font-bold block">Robotic Navigation</span>
                </div>
              </div>

              <div className="relative rounded-2xl overflow-hidden border border-[#A7F3D0] aspect-[4/3] shadow-md group">
                <img
                  src="/images/bone-mineral-dexa.jpg"
                  alt="Bone Mineral Matrix"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-2 left-2 right-2 text-white text-left">
                  <span className="text-[9px] font-mono font-bold text-amber-300 block uppercase">DEXA Density</span>
                  <span className="text-[11px] font-bold block">Bone Matrix Scan</span>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-3xl bg-white/80 backdrop-blur-xl border border-white/95 shadow-xl space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#047857]">Surgical Sterility</span>
                <span className="text-xs font-bold text-slate-500">HEPA Filtered</span>
              </div>
              <div className="text-3xl font-extrabold text-[#047857]">Class-100</div>
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
