import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Activity, ShieldCheck, Heart, Sparkles, ArrowRight, CheckCircle2, ChevronRight, Stethoscope, Clock, Zap, Target } from 'lucide-react';
import { PULSE_DATA } from '../data/pulseData';
import SectionCinematicVideo from './SectionCinematicVideo';
import SectionBackgroundMotion from './SectionBackgroundMotion';

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
export default function TreatmentStorytellingSection({ variant = 'home-storytelling' }) {
  const [activeProcedure, setActiveProcedure] = useState('peripheral-angioplasty');

  const storyboards = {
    'peripheral-angioplasty': {
      title: 'Peripheral Angioplasty & Stenting',
      badge: 'Vascular Revascularization',
      tagline: 'Restoring arterial perfusion to lower extremities & renal vessels.',
      recovery: 'Discharged within 24–48 Hours',
      stats: '99.4% Patency Rate',
      steps: [
        {
          num: '01',
          phase: 'Radial Wrist Micro-Access',
          detail: 'Microscopic 6-French wrist puncture with zero bleeding.',
        },
        {
          num: '02',
          phase: 'Guidewire Lesion Crossing',
          detail: '0.014" steerable micro-wire navigates stenotic segment.',
        },
        {
          num: '03',
          phase: 'Balloon Pre-Dilation',
          detail: 'Controlled balloon inflation fractures calcified plaque.',
        },
        {
          num: '04',
          phase: 'Stent Scaffold Deployment',
          detail: 'Cobalt-chromium drug-eluting stent permanently placed.',
        },
      ],
      indications: [
        'Resting leg pain & claudication',
        'Non-healing peripheral ulcers',
        'Renal artery refractory stenosis',
      ],
    },
    'coronary-angiogram': {
      title: 'Coronary Angiogram (CAG)',
      badge: 'Diagnostic Catheterization',
      tagline: 'Gold-standard cineangiography mapping exact luminal stenosis.',
      recovery: 'Same-Day Outpatient (2 Hrs Post-Op)',
      stats: '< 0.5 mm Accuracy',
      steps: [
        {
          num: '01',
          phase: 'Painless Wrist Numbing',
          detail: 'Local anesthetic numbs right radial artery entry.',
        },
        {
          num: '02',
          phase: 'Catheter Engagement',
          detail: 'Diagnostic catheter engages coronary ostia precisely.',
        },
        {
          num: '03',
          phase: 'Iso-Osmolar Contrast',
          detail: 'Biocompatible contrast dye visualizes blood vessels.',
        },
        {
          num: '04',
          phase: 'Digital Cine Mapping',
          detail: 'Multi-angle cine records lesion length and calcification.',
        },
      ],
      indications: [
        'Exertional angina / chest discomfort',
        'Positive TMT / Stress Echo test',
        'Post-infarct vessel evaluation',
      ],
    },
    'pacemaker-implantation': {
      title: 'Permanent Pacemaker',
      badge: 'Cardiac Electrophysiology',
      tagline: 'Rate-responsive pacing generators restoring physiological rhythm.',
      recovery: 'Overnight Observation • Rapid Discharge',
      stats: '10–14 Year Battery Life',
      steps: [
        {
          num: '01',
          phase: 'Subclavian Access',
          detail: 'Transvenous access established beneath collarbone.',
        },
        {
          num: '02',
          phase: 'Lead Positioning',
          detail: 'Active-fixation leads anchored under fluoroscopy.',
        },
        {
          num: '03',
          phase: 'Threshold Calibration',
          detail: 'Sensing amplitudes calibrated for minimal energy drain.',
        },
        {
          num: '04',
          phase: 'Pocket Placement',
          detail: 'Titanium pulse generator secured subcutaneously.',
        },
      ],
      indications: [
        'Complete AV heart block',
        'Symptomatic Sinus Dysfunction',
        'Recurrent syncopal bradycardia',
      ],
    },
  };

  const currentStory = storyboards[activeProcedure];

  return (
    <section className="relative py-28 lg:py-36 overflow-hidden select-none bg-gradient-to-b from-[#FFF4ED] via-[#FFF8F3] to-[#FDF5EC] border-b border-orange-100/60">

      {/* Bespoke Asymmetric Circadian Recovery Trajectory & Layered Paper-Glass */}
      <SectionBackgroundMotion variant={variant} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="mb-10 text-center max-w-3xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#BE123C] via-[#E11D48] to-[#FB923C] text-white text-xs font-mono font-bold shadow-md shadow-rose-600/20 border border-white/20">
            <Target className="w-4 h-4 text-amber-200" />
            <span className="uppercase tracking-[0.2em]">Step-by-Step Clinical Journeys</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-950 tracking-tight">
            Clinical <span className="font-serif italic font-normal text-[#BE123C]">Procedural Roadmap</span>
          </h2>

          <div className="flex flex-wrap items-center justify-center gap-2 pt-1 font-mono text-[11px] font-bold">
            <span className="bg-rose-50 text-rose-900 px-3 py-0.5 rounded-full border border-rose-200">Pre-Op Evaluation</span>
            <span className="bg-orange-50 text-orange-950 px-3 py-0.5 rounded-full border border-orange-200">Radial Micro-Access</span>
            <span className="bg-amber-50 text-amber-950 px-3 py-0.5 rounded-full border border-amber-200">Stent Deployment</span>
            <span className="bg-rose-50 text-rose-900 px-3 py-0.5 rounded-full border border-rose-200">24-Hr Discharge</span>
          </div>
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
                    ? 'bg-gradient-to-r from-[#BE123C] to-[#FB923C] text-white shadow-md shadow-rose-600/25 scale-105'
                    : 'bg-white/80 hover:bg-white text-slate-700 border border-rose-100 shadow-xs'
                }`}
              >
                {data.title}
              </button>
            );
          })}
        </div>

        {/* Master Procedural Journey Card with Smooth Step Elevation */}
        <div className="rounded-[2.5rem] bg-white/95 backdrop-blur-xl border-2 border-[#A7F3D0] shadow-layered p-6 sm:p-10 space-y-8 text-left transition-all duration-400 hover:shadow-2xl">

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
              <div className="px-4 py-2 rounded-xl bg-[#F0FDF4] border border-[#A7F3D0] text-xs font-mono font-bold text-[#064E3B]">
                <CheckCircle2 className="w-3.5 h-3.5 inline mr-1 text-[#047857]" />
                {currentStory.stats}
              </div>
            </div>
          </div>

          {/* Active Procedural Cinematic Video Feed in 3D */}
          <div className="py-2">
            <SectionCinematicVideo
              type={activeProcedure === 'ct-coronary-angiography' ? 'advanced-tech' : activeProcedure === 'pacemaker-implantation' ? 'cardiology-heart' : 'cardiac-catheterization'}
              videoUrl={activeProcedure === 'ct-coronary-angiography' ? '/videos/advanced-tech.mp4' : activeProcedure === 'pacemaker-implantation' ? '/videos/cardiology-heart.mp4' : '/videos/cardiac-catheterization.mp4'}
              styleVariant="floating-3d"
              posterImage={activeProcedure === 'pacemaker-implantation' ? '/images/pacemaker-tech.jpg' : '/images/angiogram-scan.jpg'}
              title={`${currentStory.title} • Live Procedural Cine`}
              subtitle={currentStory.badge}
              specs={currentStory.stats}
              aspectRatio="aspect-[16/8] sm:aspect-[21/9]"
            />
          </div>

          {/* Stepped Procedural Grid (4 Steps) - Minimal Text & High Visual Impact */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {currentStory.steps.map((step) => (
              <div
                key={step.num}
                className="group relative p-5 rounded-2xl bg-white border-2 border-emerald-100 hover:border-emerald-300 shadow-xs transition-all duration-400 hover:-translate-y-2 hover:shadow-lg space-y-2 cursor-default text-left"
              >
                <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#064E3B] to-[#059669] text-white flex items-center justify-center font-mono text-xs font-bold shadow-sm group-hover:scale-105 transition-transform">
                  {step.num}
                </div>
                <h4 className="text-xs sm:text-sm font-extrabold text-slate-900 tracking-tight group-hover:text-[#064E3B] transition-colors">
                  {step.phase}
                </h4>
                <p className="text-[11px] text-slate-600 font-medium leading-normal">
                  {step.detail}
                </p>
              </div>
            ))}
          </div>

          {/* Indications & Candidacy Banner */}
          <div className="p-6 sm:p-7 rounded-2xl bg-gradient-to-r from-emerald-50 via-white to-teal-50 border-2 border-emerald-200 text-slate-900 shadow-md flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-1 text-left">
              <span className="text-[10px] font-mono text-[#064E3B] font-bold uppercase tracking-wider block">
                Primary Clinical Indications
              </span>
              <div className="flex flex-wrap gap-2 pt-1">
                {currentStory.indications.map((ind, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-[11px] font-bold text-slate-800 border border-emerald-200 shadow-xs"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#047857]" />
                    <span>{ind}</span>
                  </span>
                ))}
              </div>
            </div>

            <Link
              to="/contact"
              className="px-7 py-3 rounded-full bg-gradient-to-r from-[#064E3B] via-[#047857] to-[#059669] hover:from-[#022C22] hover:to-[#064E3B] text-white text-xs font-bold uppercase tracking-wider shrink-0 transition-all duration-300 hover:scale-105 shadow-md border border-emerald-400/30"
            >
              Discuss with Dr. Shahi
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}
