import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Activity, ShieldCheck, Heart, Sparkles, Calendar, ArrowRight, CheckCircle2, Stethoscope, Compass, Play } from 'lucide-react';
import AnatomicalSpecialtyShowcase from '../components/AnatomicalSpecialtyShowcase';
import TreatmentStorytellingSection from '../components/TreatmentStorytellingSection';
import MedicalTechnologyShowcase from '../components/MedicalTechnologyShowcase';
import InteractiveCardiacExplorer from '../components/InteractiveCardiacExplorer';
import SectionCinematicVideo from '../components/SectionCinematicVideo';
import SectionBackgroundMotion from '../components/SectionBackgroundMotion';

export default function TreatmentsPage() {
  return (
    <div className="relative pt-24 pb-24 select-none bg-[#FDFBF7] overflow-hidden">

      {/* =========================================================================
          1. MASTER EDITORIAL HEADER & FLUOROSCOPY VIDEO STAGE
         ========================================================================= */}
      <section className="relative pt-12 pb-16 px-4 sm:px-6 lg:px-8 text-center overflow-hidden">
        {/* Bespoke Interventional Catheterization Theater & Fluoroscopic Rayfield */}
        <SectionBackgroundMotion variant="treatments-hero" />

        <div className="max-w-7xl mx-auto space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#BE123C] via-[#E11D48] to-[#FB923C] text-white text-xs font-mono font-medium shadow-md shadow-rose-600/20">
            <Activity className="w-4 h-4 text-amber-200 animate-pulse" />
            <span className="uppercase tracking-[0.2em]">Interventional Treatments &amp; Procedures</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-slate-950 tracking-tight leading-[1.05]">
            Interventional &amp; Diagnostic <br />
            <span className="font-serif italic font-normal text-[#BE123C]">Cardiovascular Therapies</span>
          </h1>

          {/* Lead Operator Spotlight Badge (With Stethoscope Crest) */}
          <div className="pt-1 flex items-center justify-center gap-3">
            <div className="flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-white border-2 border-orange-200 shadow-md">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#BE123C] to-[#FB923C] flex items-center justify-center text-white shrink-0 border border-rose-200">
                <Stethoscope className="w-5 h-5 stroke-[1.8]" />
              </div>
              <div className="text-left">
                <span className="text-xs font-extrabold text-slate-900 block">
                  Lead Interventionalist: Dr. Prakash Chand Shahi
                </span>
                <span className="text-[10px] font-mono text-[#C2410C] font-bold block">
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
              title="Cineangiography Stenosis Mapping &amp; Stent Placement"
              subtitle="Siemens Artis Zee Fluoroscopy • 60 FPS"
              specs="Sub-Millimeter Stenosis Resolution • 0.014-Inch Micro-Guidewire"
              aspectRatio="aspect-[16/8] sm:aspect-[21/9]"
            />
          </motion.div>
        </div>
      </section>

      {/* =========================================================================
          2. ANATOMICAL SPECIALTY SHOWCASE (TREATMENTS BESPOKE CELLULAR VARIANT)
         ========================================================================= */}
      <AnatomicalSpecialtyShowcase variant="treatments-specialties" />

      {/* =========================================================================
          3. VISUAL STORYTELLING PROCEDURAL SUITE (CARE ODYSSEY VARIANT)
         ========================================================================= */}
      <div className="my-8">
        <TreatmentStorytellingSection variant="treatments-storytelling" />
      </div>

      {/* =========================================================================
          4. MEDICAL TECHNOLOGY SHOWCASE (SCHEMATIC RETICLE VARIANT)
         ========================================================================= */}
      <div className="my-8">
        <MedicalTechnologyShowcase variant="treatments-technology" />
      </div>

      {/* =========================================================================
          5. INTERACTIVE DIAGNOSTIC LIGHTBOX (BACKLIT MATRIX VARIANT)
         ========================================================================= */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 my-8 overflow-hidden rounded-[3rem] border border-amber-200/50 shadow-md">
        {/* Bespoke Backlit Radiographic Lightbox & Perfusion Grid Matrix */}
        <SectionBackgroundMotion variant="treatments-explorer" />

        <div className="max-w-7xl mx-auto relative z-10">
          <InteractiveCardiacExplorer />
        </div>
      </section>

      {/* =========================================================================
          6. DIRECT SECOND OPINION CONSULTATION CALLOUT (ATELIER SEAL VARIANT)
         ========================================================================= */}
      <section className="relative py-20 px-4 mt-12 overflow-hidden text-center">
        {/* Bespoke Atelier Second Opinion Chamber & Compassionate Medical Seal */}
        <SectionBackgroundMotion variant="treatments-cta" />

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="p-8 sm:p-12 rounded-[2.5rem] bg-gradient-to-br from-white via-rose-50/30 to-white text-slate-900 shadow-xl border-2 border-rose-200 space-y-5">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#BE123C] font-bold block">
              Ethical Second Opinions • Gorakhpur
            </span>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              Bring Your Angiogram CD for a <span className="font-serif italic font-normal text-[#BE123C]">Physician Review</span>
            </h3>
            <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto font-medium leading-relaxed">
              Receive unbiased, evidence-based guidance on whether balloon dilation, drug-eluting stenting, or conservative medical optimization is best for your heart.
            </p>
            <div className="pt-2 flex items-center justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#BE123C] via-[#E11D48] to-[#FB923C] hover:from-[#9F1239] hover:to-[#BE123C] text-white text-xs font-semibold uppercase tracking-wider shadow-md shadow-rose-600/20 transition-all hover:scale-105"
              >
                <Calendar className="w-4 h-4 text-amber-200" />
                <span>Schedule Second Opinion Session</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
