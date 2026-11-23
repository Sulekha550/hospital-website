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
export default function AnatomicalSpecialtyShowcase() {
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
      badgeColor: 'bg-rose-100 text-rose-900 border-rose-300',
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
      badgeColor: 'bg-sky-100 text-sky-900 border-sky-300',
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
      badgeColor: 'bg-amber-100 text-amber-900 border-amber-300',
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
      badgeColor: 'bg-purple-100 text-purple-900 border-purple-300',
    },
  ];

  return (
    <section className="relative py-28 lg:py-36 overflow-hidden select-none">

      {/* =========================================================================
          ANIMATED SECTION BACKGROUND: FLOWING ECG, ROTATING RINGS & EMERALD LASER
         ========================================================================= */}
      <SectionBackgroundMotion watermark="HEMODYNAMICS" position="right" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="mb-12 text-center max-w-3xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-rose-700 to-pink-700 text-white text-xs font-mono font-bold shadow-md">
            <Activity className="w-4 h-4 text-white animate-pulse" />
            <span className="uppercase tracking-[0.2em]">Interventional Specialties</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-950 tracking-tight">
            Sub-Millimeter <span className="font-serif italic font-normal text-rose-700">Hemodynamic Solutions</span>
          </h2>

          <div className="flex flex-wrap items-center justify-center gap-2 pt-1 font-mono text-[11px] font-bold">
            <span className="bg-rose-100 text-rose-900 px-3 py-0.5 rounded-full border border-rose-300">Radial Stenting</span>
            <span className="bg-sky-100 text-sky-900 px-3 py-0.5 rounded-full border border-sky-300">Cineangiography</span>
            <span className="bg-amber-100 text-amber-900 px-3 py-0.5 rounded-full border border-amber-300">CT Angiogram</span>
            <span className="bg-purple-100 text-purple-900 px-3 py-0.5 rounded-full border border-purple-300">Pacemakers</span>
          </div>
        </div>

        {/* =========================================================================
            INTERACTIVE ARTERIAL LUMEN SIMULATOR (Visual Medical Storytelling)
           ========================================================================= */}
        <div className="mb-16 p-6 sm:p-8 rounded-[2.5rem] bg-white/95 backdrop-blur-xl border-2 border-rose-200 shadow-layered max-w-4xl mx-auto transition-all duration-400 hover:shadow-2xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-6 border-b border-rose-100">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 border border-rose-200 text-xs font-mono font-bold text-rose-900 mb-1">
                <span className="w-2 h-2 rounded-full bg-rose-600 animate-ping" />
                <span>HEMODYNAMIC CROSS-SECTION SIMULATOR</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-950 tracking-tight">
                Vascular Occlusion vs. Post-Stent Lumen
              </h3>
            </div>

            <div className="flex items-center gap-2 bg-slate-100 p-1.5 rounded-full">
              <button
                onClick={() => setLumenState('stenosis')}
                className={`px-5 py-2 rounded-full text-xs font-bold transition-all duration-300 ${lumenState === 'stenosis'
                  ? 'bg-rose-600 text-white shadow-md scale-105'
                  : 'text-slate-600 hover:text-slate-900'
                  }`}
              >
                75% Stenosis (Ischemic)
              </button>
              <button
                onClick={() => setLumenState('stented')}
                className={`px-5 py-2 rounded-full text-xs font-bold transition-all duration-300 ${lumenState === 'stented'
                  ? 'bg-[#047857] text-white shadow-md scale-105'
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
              <div className="relative w-44 h-44 rounded-full bg-gradient-to-br from-rose-100 via-white to-purple-100 flex items-center justify-center p-4 shadow-xl border-4 border-rose-300 transition-all duration-500">
                {lumenState === 'stenosis' ? (
                  <>
                    <div className="w-28 h-28 rounded-full bg-amber-400/90 border-4 border-amber-600 flex items-center justify-center relative transition-all duration-500 animate-pulse">
                      <div className="w-8 h-8 rounded-full bg-rose-700 flex items-center justify-center text-[9px] font-mono font-bold text-white shadow-inner">
                        25%
                      </div>
                    </div>
                    <span className="absolute bottom-2 text-[10px] font-mono text-amber-900 font-bold bg-white/95 border border-amber-200 px-2.5 py-0.5 rounded shadow-xs">
                      CALCIFIED PLAQUE
                    </span>
                  </>
                ) : (
                  <>
                    <div className="w-36 h-36 rounded-full border-4 border-dashed border-sky-400 bg-rose-600 flex items-center justify-center shadow-inner relative transition-all duration-500">
                      <div className="w-28 h-28 rounded-full bg-rose-500 flex items-center justify-center text-xs font-mono font-bold text-white">
                        99.4% PATENCY
                      </div>
                    </div>
                    <span className="absolute bottom-2 text-[10px] font-mono text-sky-900 font-bold bg-white/95 border border-sky-200 px-2.5 py-0.5 rounded shadow-xs">
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
                <span className="font-mono font-extrabold text-slate-950">
                  {lumenState === 'stenosis' ? '0.8 mm (Severely Restricted)' : '3.25 mm (Fully Restored)'}
                </span>
              </div>
              <div className="flex items-center justify-between pb-2 border-b border-slate-100 text-xs">
                <span className="font-medium text-slate-500">Blood Flow Velocity:</span>
                <span className="font-mono font-extrabold text-slate-950">
                  {lumenState === 'stenosis' ? 'Reduced (Ischemia / Angina)' : 'Physiological Laminar Flow'}
                </span>
              </div>
              <div className="flex items-center justify-between pb-2 border-b border-slate-100 text-xs">
                <span className="font-medium text-slate-500">Clinical Protocol:</span>
                <span className="font-mono font-extrabold text-slate-950">
                  {lumenState === 'stenosis' ? 'Requires Catheter Revascularization' : 'Post-Stent Dual Antiplatelet Therapy'}
                </span>
              </div>
              <div className="flex items-center gap-2 pt-2 text-[11px] font-mono font-bold text-[#059669]">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
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
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#064E3B] via-[#047857] to-[#059669] hover:from-[#022C22] hover:to-[#064E3B] text-white text-xs font-bold uppercase tracking-wider shadow-lg shadow-[#064E3B]/25 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:scale-102 border border-emerald-400/30"
          >
            <span>Explore All Interventions</span>
            <ArrowRight className="w-4 h-4 text-emerald-300" />
          </Link>
        </div>

      </div>
    </section>
  );
}
