import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Activity, ShieldCheck, Heart, Sparkles, Calendar, ArrowRight, CheckCircle2, Stethoscope, Compass, Play } from 'lucide-react';
import AnatomicalSpecialtyShowcase from '../components/AnatomicalSpecialtyShowcase';
import TreatmentStorytellingSection from '../components/TreatmentStorytellingSection';
import MedicalTechnologyShowcase from '../components/MedicalTechnologyShowcase';
import InteractiveCardiacExplorer from '../components/InteractiveCardiacExplorer';
import SectionCinematicVideo from '../components/SectionCinematicVideo';

export default function TreatmentsPage() {
  return (
    <div className="relative pt-28 pb-24 select-none bg-[#FAFBFD] overflow-hidden">

      {/* =========================================================================
          UNIQUE HIGH-END MEDICAL BACKGROUND: VASCULAR ARTERIAL PATHWAYS & STENT MESH
         ========================================================================= */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">

        {/* Ambient Motion Video Background Layer */}
        <div className="absolute inset-0 z-0 overflow-hidden opacity-25 mix-blend-multiply">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            className="w-full h-full object-cover scale-105"
          >
            <source src="/videos/cardiac-catheterization.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-[#FAFBFD]/80 via-transparent to-[#FAFBFD]/90" />
        </div>

        {/* 1. Luminous Ambient Glow Spheres */}
        <div className="absolute -top-32 right-10 w-[750px] h-[750px] bg-gradient-to-bl from-rose-400/25 via-teal-300/18 to-transparent rounded-full blur-[140px]" />
        <div className="absolute top-1/4 -left-28 w-[700px] h-[700px] bg-gradient-to-tr from-[#991B1B]/20 via-rose-500/15 to-transparent rounded-full blur-[150px]" />
        <div className="absolute top-1/2 right-0 w-[650px] h-[650px] bg-gradient-to-bl from-amber-400/15 via-rose-400/12 to-transparent rounded-full blur-[130px]" />
        <div className="absolute bottom-20 left-10 w-[700px] h-[700px] bg-gradient-to-tr from-[#991B1B]/18 via-teal-400/14 to-transparent rounded-full blur-[140px]" />

        {/* 2. Microscopic Endovascular Stent Diamond Mesh Grid */}
        <svg className="absolute inset-0 w-full h-full opacity-25" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="stentDiamondMesh" width="48" height="48" patternUnits="userSpaceOnUse">
              <path d="M24,0 L48,24 L24,48 L0,24 Z" fill="none" stroke="#991B1B" strokeWidth="1.2" />
              <path d="M24,12 L36,24 L24,36 L12,24 Z" fill="none" stroke="#0284C7" strokeWidth="0.8" strokeDasharray="2 3" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#stentDiamondMesh)" />
        </svg>

        {/* 3. Branching Coronary & Vascular Arterial Streamlines (Visible Continuous Curves) */}
        <svg className="absolute top-0 left-0 right-0 w-full h-[1800px] opacity-65" viewBox="0 0 1440 1800" fill="none" preserveAspectRatio="none">
          <defs>
            <linearGradient id="vascularStream1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0284C7" stopOpacity="0.7" />
              <stop offset="50%" stopColor="#0EA5E9" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#991B1B" stopOpacity="0.3" />
            </linearGradient>
            <linearGradient id="vascularStream2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.6" />
              <stop offset="50%" stopColor="#0284C7" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#B91C1C" stopOpacity="0.1" />
            </linearGradient>
          </defs>

          {/* Main Left Coronary / Aortic Pathway with Active Flowing Contrast Stream */}
          <path
            d="M720,0 C740,160 880,240 850,420 C810,600 620,700 660,920 C700,1140 920,1280 880,1500 C850,1660 760,1750 720,1800"
            stroke="url(#vascularStream1)"
            strokeWidth="3.5"
            strokeDasharray="400"
            className="animate-flow-dash"
          />

          {/* Circumflex & Peripheral Branches */}
          <path
            d="M850,420 C1020,480 1180,620 1260,780 C1320,900 1300,1050 1220,1180"
            stroke="url(#vascularStream2)"
            strokeWidth="2.5"
            strokeDasharray="300"
            className="animate-flow-dash-fast"
          />
          <path
            d="M660,920 C480,980 320,1120 240,1280 C180,1400 200,1550 280,1680"
            stroke="url(#vascularStream1)"
            strokeWidth="2.5"
            strokeDasharray="300"
            className="animate-flow-dash-fast"
          />

          {/* Moving Micro-Contrast Telemetry Nodes on Vessel Pathways */}
          <circle cx="850" cy="420" r="5" fill="#0EA5E9" className="animate-ping" />
          <circle cx="660" cy="920" r="5" fill="#0284C7" className="animate-ping" />
          <circle cx="1260" cy="780" r="4" fill="#F59E0B" className="animate-ping" />
          <circle cx="240" cy="1280" r="4" fill="#0EA5E9" className="animate-ping" />
        </svg>

        {/* Dynamic Sweeping Fluoroscopy Laser Beam */}
        <div className="absolute left-0 right-0 h-[2.5px] bg-gradient-to-r from-transparent via-rose-400 to-transparent shadow-[0_0_20px_#0EA5E9] opacity-45 animate-laser-sweep pointer-events-none" />

        {/* 4. Fluoroscopy C-Arm Angle Gauges & Caliper Markings */}
        <div className="absolute top-28 right-8 font-mono text-[10px] text-[#991B1B]/35 tracking-widest hidden lg:block uppercase space-y-1 bg-white/70 backdrop-blur-xs p-3.5 rounded-2xl border border-rose-900/10">
          <div className="flex items-center gap-2 font-bold text-[#991B1B]/70">
            <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
            <span>SIEMENS ARTIS ZEE • C-ARM ANGLE</span>
          </div>
          <div>PROJECTION: LAO 45° · CRANIAL 20°</div>
          <div>CATHETER: 6-FRENCH TRANSRADIAL SHEATH</div>
          <div className="text-amber-700/60 font-semibold">QCA STENOSIS RESOLUTION: 0.014" WIRE</div>
        </div>

        <div className="absolute top-72 left-8 font-mono text-[10px] text-[#991B1B]/35 tracking-widest hidden lg:block uppercase space-y-1 bg-white/70 backdrop-blur-xs p-3.5 rounded-2xl border border-rose-900/10">
          <div className="flex items-center gap-2 font-bold text-[#991B1B]/70">
            <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
            <span>CORONARY PERFUSION ZONES</span>
          </div>
          <div>LAD: ANTERIOR VENTRICULAR MYOCARDIUM</div>
          <div>LCX: LATERAL WALL & POSTERIOR CIRCLE</div>
          <div>RCA: INFERIOR WALL & SINOATRIAL NODE</div>
        </div>

        {/* 5. Precision CAD Technical Crosshairs Along Viewport Edges */}
        <div className="absolute top-36 left-6 text-rose-800/30 font-mono text-base select-none">┌</div>
        <div className="absolute top-36 right-6 text-rose-800/30 font-mono text-base select-none">┐</div>
        <div className="absolute bottom-36 left-6 text-rose-800/30 font-mono text-base select-none">└</div>
        <div className="absolute bottom-36 right-6 text-rose-800/30 font-mono text-base select-none">┘</div>

        {/* 6. Subtle Watermark Text */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[14vw] font-black text-[#991B1B]/[0.02] tracking-tighter uppercase pointer-events-none select-none">
          CATHETER
        </div>

      </div>

      <div className="relative z-10">

        {/* 1. Master Editorial Header */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#991B1B] via-[#B91C1C] to-[#DC2626] text-white text-xs font-mono font-medium shadow-md shadow-[#991B1B]/20">
            <Activity className="w-4 h-4 text-amber-300 animate-pulse" />
            <span className="uppercase tracking-[0.2em]">Interventional Treatments & Procedures</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-[#991B1B] tracking-tight leading-[1.05]">
            Interventional &amp; Diagnostic <br />
            <span className="font-serif italic font-normal text-[#0284C7]">Cardiovascular Therapies</span>
          </h1>

          {/* Lead Operator Spotlight Badge (With Stethoscope Crest) */}
          <div className="pt-1 flex items-center justify-center gap-3">
            <div className="flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-white border-2 border-[#FECDD3] shadow-md">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#991B1B] to-[#B91C1C] flex items-center justify-center text-[#FECDD3] shrink-0 border border-[#FECDD3]">
                <Stethoscope className="w-5 h-5 stroke-[1.8]" />
              </div>
              <div className="text-left">
                <span className="text-xs font-extrabold text-[#991B1B] block">
                  Lead Interventionalist: Dr. Prakash Chand Shahi
                </span>
                <span className="text-[10px] font-mono text-[#B91C1C] font-bold block">
                  DM Cardiology (PGIMER) • MD (KGMU Lucknow) • 15,000+ Procedures
                </span>
              </div>
            </div>
          </div>

          <p className="text-sm sm:text-base font-semibold text-slate-800 max-w-2xl mx-auto leading-relaxed">
            Peripheral Angioplasty, Radial Stenting, Coronary Angiogram &amp; Pacemaker Implantation with Siemens Flat-Panel Clarity.
          </p>

          {/* Interactive Vascular Intervention Video Console */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="pt-6 max-w-5xl mx-auto"
          >
            <SectionCinematicVideo
              type="cardiac-catheterization"
              videoUrl="/videos/cardiac-catheterization.mp4"
              styleVariant="panoramic-stage"
              posterImage="/images/angiogram-scan.jpg"
              title="Cineangiography Stenosis Mapping & Stent Placement"
              subtitle="Siemens Artis Zee Fluoroscopy • 60 FPS"
              specs="Sub-Millimeter Stenosis Resolution • 0.014-Inch Micro-Guidewire"
              aspectRatio="aspect-[16/8] sm:aspect-[21/9]"
            />
          </motion.div>
        </div>

        {/* 2. Anatomical Specialty Showcase with Interactive Arterial Lumen Simulator */}
        <AnatomicalSpecialtyShowcase />

        {/* 3. Visual Storytelling Procedural Suite */}
        <div className="my-10">
          <TreatmentStorytellingSection />
        </div>

        {/* 4. Cinematic Medical Technology Showcase (Fluoroscopy Suite) */}
        <div className="my-10">
          <MedicalTechnologyShowcase />
        </div>

        {/* 5. Interactive Diagnostic Lightbox */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-16">
          <InteractiveCardiacExplorer />
        </div>

        {/* 6. Direct Second Opinion Consultation Callout */}
        <div className="mt-16 text-center max-w-4xl mx-auto px-4">
          <div className="p-8 sm:p-12 rounded-[2.5rem] bg-gradient-to-br from-white via-rose-50/40 to-white text-slate-900 shadow-xl border-2 border-rose-200 space-y-5">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#991B1B] font-bold block">
              Ethical Second Opinions • Gorakhpur
            </span>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-[#991B1B]">
              Bring Your Angiogram CD for a <span className="font-serif italic font-normal text-[#0284C7]">Physician Review</span>
            </h3>
            <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto font-medium leading-relaxed">
              Receive unbiased, evidence-based guidance on whether balloon dilation, drug-eluting stenting, or conservative medical optimization is best for your heart.
            </p>
            <div className="pt-2 flex items-center justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#991B1B] via-[#B91C1C] to-[#DC2626] hover:from-[#7F1D1D] hover:to-[#991B1B] text-white text-xs font-semibold uppercase tracking-wider shadow-md shadow-[#991B1B]/20 transition-all"
              >
                <Calendar className="w-4 h-4 text-amber-300" />
                <span>Schedule Second Opinion Session</span>
              </Link>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}
