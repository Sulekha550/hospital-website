import React from 'react';
import { Link } from 'react-router-dom';
import { Activity, ShieldCheck, Heart, Sparkles, Calendar, ArrowRight, CheckCircle2, Stethoscope } from 'lucide-react';
import AnatomicalSpecialtyShowcase from '../components/AnatomicalSpecialtyShowcase';
import TreatmentStorytellingSection from '../components/TreatmentStorytellingSection';
import MedicalTechnologyShowcase from '../components/MedicalTechnologyShowcase';
import InteractiveCardiacExplorer from '../components/InteractiveCardiacExplorer';

export default function TreatmentsPage() {
  return (
    <div className="pt-28 pb-24 select-none">

      {/* 1. Master Editorial Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-8 space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#173C59] via-[#1E4D74] to-[#2788B8] text-white text-xs font-mono font-medium shadow-md shadow-[#173C59]/20">
          <Activity className="w-4 h-4 text-[#A9D8E9] animate-pulse" />
          <span className="uppercase tracking-[0.2em]">Interventional Treatments & Procedures</span>
        </div>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-semibold text-slate-950 tracking-tight leading-[1.05]">
          Interventional & Diagnostic <br />
          <span className="font-serif italic font-normal text-[#173C59]">Cardiovascular Therapies</span>
        </h1>

        <p className="text-base sm:text-xl text-slate-700 font-medium max-w-3xl mx-auto leading-relaxed">
          Specializing in <strong>Peripheral Angioplasty & Stenting</strong>, <strong>Coronary Angiogram</strong>, <strong>CT Coronary Angiography</strong>, and <strong>Permanent Pacemaker Implantation</strong>.
        </p>
      </div>

      {/* 2. Anatomical Specialty Showcase with Interactive Arterial Lumen Simulator */}
      <AnatomicalSpecialtyShowcase />

      {/* 3. Visual Storytelling Procedural Suite */}
      <div className="my-8">
        <TreatmentStorytellingSection />
      </div>

      {/* 4. Cinematic Medical Technology Showcase (Dark Cockpit) */}
      <div className="my-8">
        <MedicalTechnologyShowcase />
      </div>

      {/* 5. Interactive Diagnostic Lightbox */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-16">
        <InteractiveCardiacExplorer />
      </div>

      {/* 6. Direct Second Opinion Consultation Callout */}
      <div className="mt-16 text-center max-w-4xl mx-auto px-4">
        <div className="p-8 sm:p-12 rounded-[2.5rem] bg-gradient-to-br from-white via-sky-50/50 to-white text-slate-900 shadow-layered border-2 border-slate-200 space-y-5">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#173C59] font-bold block">
            Ethical Second Opinions
          </span>
          <h3 className="text-3xl sm:text-4xl font-semibold text-slate-950">
            Bring Your Angiogram CD for a <span className="font-serif italic font-normal text-[#173C59]">Physician Review</span>
          </h3>
          <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto font-medium leading-relaxed">
            Receive unbiased, evidence-based guidance on whether balloon dilation, drug-eluting stenting, or conservative medical optimization is best for your heart.
          </p>
          <div className="pt-2 flex items-center justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#173C59] via-[#1E4D74] to-[#2788B8] hover:from-[#0E2538] hover:to-[#173C59] text-white text-xs font-semibold uppercase tracking-wider shadow-md shadow-[#173C59]/20 transition-all"
            >
              <Calendar className="w-4 h-4 text-[#A9D8E9]" />
              <span>Schedule Second Opinion Session</span>
            </Link>
          </div>
        </div>
      </div>

    </div>
  );
}
