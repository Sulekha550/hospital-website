import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Activity, ShieldCheck, Heart, Sparkles, ArrowRight, Eye, Layers, Gauge, Cpu, Stethoscope } from 'lucide-react';
import { PULSE_DATA } from '../data/pulseData';
import SectionBackgroundMotion from './SectionBackgroundMotion';
import ThreeDImageCard from './ThreeDImageCard';

/**
 * AnatomicalSpecialtyShowcase
 * Visual & Motion Identity: Arterial Hemodynamics & Interventional Revascularization
 * Color Palette: Coral Red, Crimson Arterial Flow, Warm Peach & Slate Obsidian
 * Motion Features:
 * - Pulsing arterial crimson background simulating cardiac systolic/diastolic cycles
 * - Interactive Cross-Sectional Arterial Lumen Simulator (75% Stenosis vs. 99.4% Stented)
 * - Staggered asymmetric cards that lift (-12px), un-tilt, zoom images, and advance to z-40 on hover
 */
export default function AnatomicalSpecialtyShowcase({ variant = 'home-specialties' }) {
  const [lumenState, setLumenState] = useState('stented'); // 'stenosis' or 'stented'

  const specialties = [
    {
      id: 'angioplasty',
      title: 'Peripheral Angioplasty & Stenting',
      category: 'REVASCULARIZATION',
      desc: 'Restoring distal blood perfusion with balloon dilation & stents.',
      image: '/images/stent-catheter-fluoroscopy.jpg',
      stat: '99.4% Flow Restored',
      statSub: 'Transradial Access',
      aspect: 'aspect-[16/11]',
      rotation: 'lg:-rotate-2',
      link: '/treatments',
      badgeClass: 'bg-rose-50 text-[#BE123C] border-rose-300',
      glowColor: 'from-rose-500/35 via-orange-400/25 to-transparent',
      borderColor: 'border-rose-300',
      statColor: 'text-[#BE123C]',
    },
    {
      id: 'angiogram',
      title: 'Coronary Angiogram (CAG)',
      category: 'FLUOROSCOPY',
      desc: 'Sub-millimeter stenosis mapping via painless radial wrist entry.',
      image: '/images/angiogram-scan.jpg',
      stat: '< 0.5 mm Accuracy',
      statSub: 'Painless Wrist Access',
      aspect: 'aspect-[3/4]',
      rotation: 'lg:rotate-2',
      link: '/treatments',
      badgeClass: 'bg-cyan-50 text-cyan-900 border-cyan-300',
      glowColor: 'from-cyan-500/35 via-blue-400/25 to-transparent',
      borderColor: 'border-cyan-300',
      statColor: 'text-cyan-700',
    },
    {
      id: 'ct-angio',
      title: 'CT Coronary Angiography',
      category: 'NON-INVASIVE 3D',
      desc: 'Multislice 3D volumetric calcium Agatston scoring with zero downtime.',
      image: '/images/ct-calcium-score.jpg',
      stat: 'Zero Downtime',
      statSub: 'Outpatient 3D Scan',
      aspect: 'aspect-square',
      rotation: 'lg:-rotate-2',
      link: '/treatments',
      badgeClass: 'bg-amber-50 text-amber-900 border-amber-300',
      glowColor: 'from-amber-500/35 via-orange-400/25 to-transparent',
      borderColor: 'border-amber-300',
      statColor: 'text-amber-700',
    },
    {
      id: 'pacemakers',
      title: 'Permanent Pacemaker',
      category: 'ELECTROPHYSIOLOGY',
      desc: 'Rate-responsive single & dual-chamber pacing for heart blocks.',
      image: '/images/pacemaker-tech.jpg',
      stat: '10–14 Year Lifespan',
      statSub: 'Physiological Rhythm',
      aspect: 'aspect-[16/10]',
      rotation: 'lg:rotate-2',
      link: '/treatments',
      badgeClass: 'bg-purple-50 text-purple-900 border-purple-300',
      glowColor: 'from-purple-500/35 via-indigo-400/25 to-transparent',
      borderColor: 'border-purple-300',
      statColor: 'text-purple-700',
    },
  ];

  return (
    <section className="relative py-28 lg:py-36 overflow-hidden select-none bg-gradient-to-b from-[#FAF9F6] via-[#F8FAFC] to-[#F1F5F9] border-b border-slate-200">

      {/* Bespoke Luxury Hemodynamic Flow & Precision Optical Glass Fields */}
      <SectionBackgroundMotion variant={variant} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header with Haute Horlogerie Typography */}
        <div className="mb-14 text-center max-w-3xl mx-auto space-y-3">
          <div className="luxury-badge-pill">
            <Activity className="w-3.5 h-3.5 text-[#BE123C] animate-pulse" />
            <span className="uppercase tracking-[0.24em]">Interventional Specialties</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#0A1128] tracking-[-0.035em] leading-[1.12]">
            Sub-Millimeter <span className="font-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#0A1128] via-[#BE123C] to-[#E11D48]">Hemodynamic Solutions</span>
          </h2>

          <div className="flex flex-wrap items-center justify-center gap-2 pt-2 font-mono text-[11px] font-bold">
            <span className="bg-rose-50/90 text-rose-950 px-3.5 py-1 rounded-full border border-rose-200 shadow-xs">Radial Stenting</span>
            <span className="bg-slate-100/90 text-[#0A1128] px-3.5 py-1 rounded-full border border-slate-200 shadow-xs">Cineangiography</span>
            <span className="bg-slate-100/90 text-[#0A1128] px-3.5 py-1 rounded-full border border-slate-200 shadow-xs">CT Angiogram</span>
            <span className="bg-purple-50/90 text-purple-950 px-3.5 py-1 rounded-full border border-purple-200 shadow-xs">Pacemakers</span>
          </div>
        </div>

        {/* =========================================================================
            INTERACTIVE ARTERIAL LUMEN SIMULATOR (Visual Medical Storytelling)
           ========================================================================= */}
        <div className="mb-16 p-7 sm:p-10 rounded-[2.75rem] bg-white/95 backdrop-blur-2xl border-2 border-slate-200/90 shadow-[0_20px_50px_-10px_rgba(10,17,40,0.08)] max-w-4xl mx-auto transition-all duration-400 hover:shadow-[0_28px_65px_-10px_rgba(190,18,60,0.12)]">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-6 border-b border-slate-100">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 border border-rose-200 text-xs font-mono font-bold text-[#BE123C] mb-1">
                <span className="w-2 h-2 rounded-full bg-[#BE123C] animate-ping" />
                <span>HEMODYNAMIC CROSS-SECTION SIMULATOR</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-[#0A1128] tracking-tight">
                Vascular Occlusion vs. Post-Stent Lumen
              </h3>
            </div>

            <div className="flex items-center gap-2 bg-slate-100/90 p-1.5 rounded-full border border-slate-200/90">
              <button
                onClick={() => setLumenState('stenosis')}
                className={`px-5 py-2 rounded-full text-xs font-bold transition-all duration-300 ${lumenState === 'stenosis'
                  ? 'bg-gradient-to-r from-[#881337] to-[#BE123C] text-white shadow-md shadow-rose-900/25 scale-105'
                  : 'text-slate-600 hover:text-slate-900'
                  }`}
              >
                75% Stenosis (Ischemic)
              </button>
              <button
                onClick={() => setLumenState('stented')}
                className={`px-5 py-2 rounded-full text-xs font-bold transition-all duration-300 ${lumenState === 'stented'
                  ? 'bg-gradient-to-r from-[#0A1128] via-[#1E293B] to-[#BE123C] text-white shadow-md shadow-navy/25 scale-105 border border-rose-300/30'
                  : 'text-slate-600 hover:text-slate-900'
                  }`}
              >
                Stented (99.4% Flow)
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center pt-6 text-left">
            {/* Visual Lumen Cross-Section Graphic with Smooth Transitions */}
            <div className="md:col-span-5 flex justify-center">
              <div className="relative w-48 h-48 rounded-full bg-gradient-to-br from-slate-50 via-white to-rose-50 flex items-center justify-center p-4 shadow-xl border-4 border-slate-200 transition-all duration-500">
                {lumenState === 'stenosis' ? (
                  <>
                    <div className="w-32 h-32 rounded-full bg-gradient-to-br from-amber-400 to-amber-500 border-4 border-amber-600 flex items-center justify-center relative transition-all duration-500 animate-pulse shadow-md">
                      <div className="w-10 h-10 rounded-full bg-[#881337] flex items-center justify-center text-[10px] font-mono font-bold text-white shadow-inner">
                        25%
                      </div>
                    </div>
                    <span className="absolute bottom-2 text-[10px] font-mono text-amber-900 font-bold bg-white/95 border border-amber-300 px-2.5 py-0.5 rounded shadow-xs">
                      CALCIFIED PLAQUE
                    </span>
                  </>
                ) : (
                  <>
                    <div className="w-40 h-40 rounded-full border-4 border-dashed border-rose-300 bg-gradient-to-br from-[#0A1128] via-[#1E293B] to-[#BE123C] flex items-center justify-center shadow-inner relative transition-all duration-500">
                      <div className="w-32 h-32 rounded-full bg-gradient-to-r from-[#BE123C] to-[#9F1239] flex items-center justify-center text-xs font-mono font-bold text-white shadow-sm">
                        99.4% PATENCY
                      </div>
                    </div>
                    <span className="absolute bottom-2 text-[10px] font-mono text-[#0A1128] font-bold bg-white/95 border border-rose-300 px-2.5 py-0.5 rounded shadow-xs">
                      DES STENT STRUTS
                    </span>
                  </>
                )}
              </div>
            </div>

            {/* Diagnostic Metrics Display */}
            <div className="md:col-span-7 space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-slate-100 text-xs">
                <span className="font-medium text-slate-500">Coronary Lumen Diameter:</span>
                <span className="font-mono font-extrabold text-[#0A1128]">
                  {lumenState === 'stenosis' ? '0.8 mm (Severely Restricted)' : '3.25 mm (Fully Restored)'}
                </span>
              </div>
              <div className="flex items-center justify-between pb-2 border-b border-slate-100 text-xs">
                <span className="font-medium text-slate-500">Blood Flow Velocity:</span>
                <span className="font-mono font-extrabold text-[#0A1128]">
                  {lumenState === 'stenosis' ? 'Reduced (Ischemia / Angina)' : 'Physiological Laminar Flow'}
                </span>
              </div>
              <div className="flex items-center justify-between pb-2 border-b border-slate-100 text-xs">
                <span className="font-medium text-slate-500">Clinical Protocol:</span>
                <span className="font-mono font-extrabold text-[#0A1128]">
                  {lumenState === 'stenosis' ? 'Requires Catheter Revascularization' : 'Post-Stent Dual Antiplatelet Therapy'}
                </span>
              </div>
              <div className="flex items-center gap-2 pt-2 text-[11px] font-mono font-bold text-[#BE123C]">
                <span className="w-2 h-2 rounded-full bg-[#BE123C] animate-pulse" />
                <span>{lumenState === 'stenosis' ? 'Critical Ischemic Narrowing • Radial Intervention Indicated' : 'DES Cobalt-Chromium Patency • Optimal Perfusion Restored'}</span>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================================
            3D INTERACTIVE SPECIALTY SHOWCASE (Minimal Text, Maximum 3D Visual Depth)
           ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {specialties.map((spec) => (
            <Link
              key={spec.id}
              to="/treatments"
              className="group block"
            >
              <ThreeDImageCard
                src={spec.image}
                alt={spec.title}
                aspectRatio="aspect-[4/3]"
                badge={spec.category}
                badgeClass={spec.badgeClass}
                glowColor={spec.glowColor}
                borderColor={spec.borderColor}
                statColor={spec.statColor}
                title={spec.title}
                stat={spec.stat}
                statSub={spec.statSub}
              />
            </Link>
          ))}
        </div>

        {/* Action Link to Full Treatments Page */}
        <div className="mt-12 text-center">
          <Link
            to="/treatments"
            className="luxury-btn-primary"
          >
            <span>Explore All Interventions</span>
            <ArrowRight className="w-4 h-4 text-white" />
          </Link>
        </div>

      </div>
    </section>
  );
}
