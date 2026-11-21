import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Activity, ShieldCheck, Heart, Sparkles, ArrowRight, CheckCircle2, ChevronRight, Stethoscope, Clock, Zap, Target } from 'lucide-react';
import { PULSE_DATA } from '../data/pulseData';

/**
 * TreatmentStorytellingSection
 * Visual & Motion Identity: Visual Procedural Storytelling & Stepped Clinical Roadmap
 * Color Palette: Soft Peach, Vibrant Magenta, Warm Amber & Electric Violet
 * Motion Features:
 * - Flowing peach/magenta ambient ribbon gradients
 * - Sequential numbered step progression with animated connector line
 * - Interactive step cards that elevate (-8px) and illuminate on hover
 * - Smooth transition when switching between procedures
 */
export default function TreatmentStorytellingSection() {
  const [activeProcedure, setActiveProcedure] = useState('peripheral-angioplasty');

  const storyboards = {
    'peripheral-angioplasty': {
      title: 'Peripheral Angioplasty & Stenting',
      badge: 'Vascular Revascularization',
      tagline: 'Restoring distal arterial blood flow to ischemic lower extremities and renal vasculature.',
      recovery: 'Discharged within 24–48 hours · Rapid recovery compared to open bypass surgery',
      stats: '99.4% Endovascular Patency Rate',
      steps: [
        {
          num: '01',
          phase: 'Transradial / Femoral Micro-Access',
          detail: 'Under local anesthesia, a microscopic needle puncture establishes vascular entry via a fine 6-French sheath, minimizing tissue trauma and bleeding.',
        },
        {
          num: '02',
          phase: 'Guidewire Crossing of Stenotic Lesion',
          detail: 'A specialized 0.014" steerable hydrophilic micro-guidewire carefully navigates across the narrowed arterial segment under high-resolution fluoroscopy.',
        },
        {
          num: '03',
          phase: 'High-Pressure Balloon Pre-Dilation',
          detail: 'An appropriately sized angioplasty balloon is inflated across the stenosis to fracture calcified atherosclerotic plaque and restore vessel diameter.',
        },
        {
          num: '04',
          phase: 'Drug-Eluting Stent Scaffold Deployment',
          detail: 'A precision cobalt-chromium stent is permanently expanded against the vessel wall, continuously releasing antiproliferative medication to prevent re-narrowing.',
        },
      ],
      indications: [
        'Critical limb ischemia & resting leg pain',
        'Severe intermittent claudication limiting mobility',
        'Non-healing peripheral ischemic diabetic ulcers',
        'Renal artery stenosis inducing refractory hypertension',
      ],
    },
    'coronary-angiogram': {
      title: 'Coronary Angiogram (CAG)',
      badge: 'Diagnostic Catheterization',
      tagline: 'The definitive gold-standard fluoroscopic examination for coronary artery stenosis mapping.',
      recovery: 'Same-day outpatient procedure · Ambulatory within 2 hours with radial wrist access',
      stats: '< 0.5 mm Spatial Stenosis Resolution',
      steps: [
        {
          num: '01',
          phase: 'Painless Transradial Wrist Access',
          detail: 'The right radial artery at the wrist is numbed with local anesthetic. Radial access eliminates bed rest and minimizes vascular puncture complications.',
        },
        {
          num: '02',
          phase: 'Selective Coronary Cannulation',
          detail: 'A slender diagnostic catheter is advanced through the aorta to engage the Left Main and Right Coronary artery ostia with millimeter precision.',
        },
        {
          num: '03',
          phase: 'Iso-Osmolar Contrast Injection',
          detail: 'A biocompatible radiopaque dye is gently injected into the coronary tree, instantly illuminating blood flow dynamics and identifying luminal narrowings.',
        },
        {
          num: '04',
          phase: 'Cineangiographic Stenosis Mapping',
          detail: 'Multi-angle digital cine projections evaluate lesion length, calcification, and myocardial perfusion to determine the optimal treatment strategy.',
        },
      ],
      indications: [
        'Unexplained exertional chest pain or angina',
        'Positive Treadmill Test (TMT) or Stress Echo',
        'Recent acute coronary event or heart attack',
        'Pre-operative cardiac clearance for major surgery',
      ],
    },
    'pacemaker-implantation': {
      title: 'Permanent Pacemaker Implantation',
      badge: 'Cardiac Electrophysiology',
      tagline: 'Precision rate-responsive pacing generators restoring physiological heart rhythm.',
      recovery: 'Overnight observation · Normal routine resumed in 3–5 days',
      stats: '10–14 Year Titanium Battery Life',
      steps: [
        {
          num: '01',
          phase: 'Subclavian Venous Cannulation',
          detail: 'Under sterile cath lab conditions, transvenous access is established via the cephalic or axillary vein below the left collarbone.',
        },
        {
          num: '02',
          phase: 'Lead Placement in Right Atrium / Ventricle',
          detail: 'Specialized active-fixation bipolar pacing leads are guided into optimal anatomical endocardial contact under continuous fluoroscopy.',
        },
        {
          num: '03',
          phase: 'Electrical Pacing Threshold Testing',
          detail: 'Impedance, sensing amplitudes, and pacing thresholds are calibrated to verify ideal lead fixation with minimal energy consumption.',
        },
        {
          num: '04',
          phase: 'Subcutaneous Pocket Placement',
          detail: 'The hermetically sealed titanium pulse generator is connected and placed into a small subcutaneous pocket beneath the skin.',
        },
      ],
      indications: [
        'Complete Atrioventricular (AV) heart block',
        'Symptomatic Sinus Node Dysfunction (Sick Sinus)',
        'Recurrent syncopal episodes with bradycardia',
        'Chronotropic incompetence limiting daily activity',
      ],
    },
  };

  const currentStory = storyboards[activeProcedure];

  return (
    <section className="relative py-28 lg:py-36 overflow-hidden select-none">

      {/* =========================================================================
          ANIMATED SECTION BACKGROUND: SOFT PEACH, MAGENTA & FLOWING ROADMAP
         ========================================================================= */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        {/* Soft Peach & Warm Amber Glow */}
        <div className="absolute top-1/4 -left-20 w-[700px] h-[700px] rounded-full bg-gradient-to-tr from-orange-400/20 via-rose-300/15 to-amber-200/20 blur-[150px] animate-morph animate-float-1" />

        {/* Vibrant Magenta & Violet Diffusion */}
        <div className="absolute bottom-10 right-0 w-[650px] h-[650px] rounded-full bg-gradient-to-bl from-purple-500/20 via-pink-500/15 to-rose-400/15 blur-[150px] animate-float-2" />

        {/* Monumental Watermark Typography */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-sans font-black text-[18vw] text-orange-950/[0.03] whitespace-nowrap pointer-events-none tracking-tight">
          PROTOCOLS
        </div>

        {/* Flowing Roadmap Curves */}
        <svg className="absolute inset-0 w-full h-full opacity-35" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M -100,300 C 400,100 800,500 1300,300 C 1700,150 2000,450 2300,300"
            fill="none"
            stroke="#F97316"
            strokeWidth="2"
            strokeDasharray="8 8"
            className="animate-ecg-dash"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="mb-14 text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-orange-600 to-rose-600 text-white text-xs font-mono font-bold shadow-md animate-float-bob">
            <Target className="w-4 h-4 text-amber-200" />
            <span className="uppercase tracking-[0.2em]">Step-by-Step Clinical Journeys</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-950 tracking-tight leading-[1.08]">
            Transparent Pathways to <br />
            <span className="font-serif italic font-normal text-rose-700">Restored Cardiovascular Health</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-700 font-medium max-w-2xl mx-auto leading-relaxed">
            Every procedure at Pulse Heart Centre is mapped step-by-step so patients and families understand exactly what to expect from prep to discharge.
          </p>
        </div>

        {/* Procedure Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-14">
          {Object.entries(storyboards).map(([key, data]) => {
            const isActive = activeProcedure === key;
            return (
              <button
                key={key}
                onClick={() => setActiveProcedure(key)}
                className={`px-6 py-3 rounded-full text-xs font-semibold tracking-wide transition-all duration-300 ${
                  isActive
                    ? 'bg-gradient-to-r from-orange-600 to-rose-600 text-white shadow-lg scale-105'
                    : 'bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 shadow-xs'
                }`}
              >
                {data.title}
              </button>
            );
          })}
        </div>

        {/* Master Procedural Journey Card with Smooth Step Elevation */}
        <div className="rounded-[2.5rem] bg-white/95 backdrop-blur-xl border-2 border-orange-200 shadow-layered p-6 sm:p-10 space-y-8 text-left transition-all duration-400 hover:shadow-2xl">

          {/* Header Banner */}
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 pb-6 border-b border-slate-100">
            <div>
              <span className="text-xs font-mono font-bold text-orange-700 uppercase tracking-wider block mb-1">
                {currentStory.badge}
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
                {currentStory.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 font-medium mt-1">
                {currentStory.tagline}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
              <div className="px-4 py-2 rounded-xl bg-orange-50 border border-orange-200 text-xs font-mono font-bold text-orange-900">
                <Clock className="w-3.5 h-3.5 inline mr-1 text-orange-600" />
                {currentStory.recovery}
              </div>
              <div className="px-4 py-2 rounded-xl bg-emerald-50 border border-emerald-200 text-xs font-mono font-bold text-emerald-900">
                <CheckCircle2 className="w-3.5 h-3.5 inline mr-1 text-emerald-600" />
                {currentStory.stats}
              </div>
            </div>
          </div>

          {/* Stepped Procedural Grid (4 Steps) with Hover Elevation */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {currentStory.steps.map((step) => (
              <div
                key={step.num}
                className="group relative p-6 rounded-2xl bg-gradient-to-b from-orange-50/40 via-white to-white border border-orange-100 hover:border-orange-300 shadow-xs transition-all duration-400 hover:-translate-y-2 hover:shadow-lg space-y-3 cursor-default"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-orange-500 to-rose-500 text-white flex items-center justify-center font-mono text-sm font-semibold shadow-sm group-hover:scale-105 transition-transform">
                  {step.num}
                </div>
                <h4 className="text-sm font-extrabold text-slate-950 tracking-tight group-hover:text-rose-700 transition-colors">
                  {step.phase}
                </h4>
                <p className="text-xs text-slate-600 font-medium leading-relaxed">
                  {step.detail}
                </p>
              </div>
            ))}
          </div>

          {/* Indications & Candidacy Banner - Luminous Pearl & Warm Amber (No Black Box) */}
          <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-orange-50 via-rose-50/40 to-amber-50 border-2 border-orange-200 text-slate-900 shadow-md flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-1">
              <span className="text-xs font-mono text-orange-900 font-semibold uppercase tracking-wider block">
                Primary Clinical Indications
              </span>
              <div className="flex flex-wrap gap-2 pt-1">
                {currentStory.indications.map((ind, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white text-[11px] font-medium text-slate-800 border border-orange-200/80 shadow-xs"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>{ind}</span>
                  </span>
                ))}
              </div>
            </div>

            <Link
              to="/contact"
              className="px-6 py-3 rounded-full bg-gradient-to-r from-orange-600 to-rose-600 hover:from-orange-700 hover:to-rose-700 text-white text-xs font-semibold uppercase tracking-wider shrink-0 transition-all duration-300 hover:scale-105 shadow-md"
            >
              Discuss with Dr. Shahi
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}
