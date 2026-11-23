import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Activity, ShieldCheck, Heart, Sparkles, ArrowRight, Eye, Layers, Gauge, Cpu, Stethoscope } from 'lucide-react';
import { PULSE_DATA } from '../data/pulseData';

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
      category: 'ENDOVASCULAR REVASCULARIZATION',
      desc: 'Minimally invasive catheterization restoring vital blood perfusion to ischemic lower extremities, renal arteries, and peripheral vasculature.',
      image: '/images/cath-lab.jpg',
      stat: '99.4% Flow Restored',
      statSub: 'Transradial / Femoral Sheath',
      aspect: 'aspect-[16/11]',
      rotation: 'lg:-rotate-2',
      link: '/treatments',
      badgeColor: 'bg-rose-100 text-rose-900 border-rose-300',
    },
    {
      id: 'angiogram',
      title: 'Coronary Angiogram (CAG)',
      category: 'DIAGNOSTIC FLUOROSCOPY',
      desc: 'Gold-standard cineangiography mapping exact luminal stenosis dimensions and collateral flow dynamics with sub-millimeter precision.',
      image: '/images/angiogram-scan.jpg',
      stat: '< 0.5 mm Accuracy',
      statSub: 'Painless Radial Wrist Access',
      aspect: 'aspect-[3/4]',
      rotation: 'lg:rotate-2',
      link: '/treatments',
      badgeColor: 'bg-sky-100 text-sky-900 border-sky-300',
    },
    {
      id: 'ct-angio',
      title: 'CT Coronary Angiography',
      category: 'NON-INVASIVE 3D IMAGING',
      desc: 'High-speed multislice 3D volumetric reconstruction and coronary calcium Agatston scoring with zero surgical invasiveness.',
      image: '/images/hospital-facility.jpg',
      stat: 'Zero Downtime',
      statSub: 'Outpatient 3D Volumetric Scan',
      aspect: 'aspect-square',
      rotation: 'lg:-rotate-2',
      link: '/treatments',
      badgeColor: 'bg-amber-100 text-amber-900 border-amber-300',
    },
    {
      id: 'pacemakers',
      title: 'Permanent Pacemaker Implantation',
      category: 'CARDIAC ELECTROPHYSIOLOGY',
      desc: 'Advanced transvenous single and dual-chamber pacing generators for symptomatic bradyarrhythmias, heart blocks, and syncope.',
      image: '/images/pacemaker-tech.jpg',
      stat: '10–14 Year Lifespan',
      statSub: 'Physiological Rhythm Pacing',
      aspect: 'aspect-[16/10]',
      rotation: 'lg:rotate-2',
      link: '/treatments',
      badgeColor: 'bg-purple-100 text-purple-900 border-purple-300',
    },
  ];

  return (
    <section className="relative py-28 lg:py-36 overflow-hidden select-none">

      {/* =========================================================================
          ANIMATED SECTION BACKGROUND: CORAL RED, CRIMSON & VASCULAR FLOW
         ========================================================================= */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        {/* Deep Coral & Crimson Arterial Glow */}
        <div className="absolute top-1/3 -right-24 w-[750px] h-[750px] rounded-full bg-gradient-to-bl from-rose-500/25 via-red-500/20 to-amber-300/15 blur-[150px] animate-pulse-glow animate-float-1" />

        {/* Soft Warm Peach & Magenta Diffusion */}
        <div className="absolute bottom-10 -left-20 w-[650px] h-[650px] rounded-full bg-gradient-to-tr from-pink-400/20 via-orange-300/15 to-purple-400/15 blur-[150px] animate-float-3" />

        {/* Monumental Watermark Typography */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-sans font-black text-[18vw] text-rose-950/[0.03] whitespace-nowrap pointer-events-none tracking-tighter">
          HEMODYNAMICS
        </div>

        {/* Capillary & Vascular Flow Curves */}
        <svg className="absolute inset-0 w-full h-full opacity-35" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M 100,200 Q 300,350 600,280 T 1100,320 T 1600,200"
            fill="none"
            stroke="#F43F5E"
            strokeWidth="1.8"
            strokeDasharray="8 6"
            className="animate-ecg-dash"
          />
          <path
            d="M 200,600 Q 500,450 900,550 T 1400,480 T 1800,620"
            fill="none"
            stroke="#FB7185"
            strokeWidth="2"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="mb-16 text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-rose-700 to-pink-700 text-white text-xs font-mono font-bold shadow-md animate-float-bob">
            <Activity className="w-4 h-4 text-white animate-pulse" />
            <span className="uppercase tracking-[0.2em]">Interventional Cardiology Specialties</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-950 tracking-tight leading-[1.08]">
            Restoring Vital Blood Flow with <br />
            <span className="font-serif italic font-normal text-rose-700">Sub-Millimeter Precision</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-700 font-medium max-w-2xl mx-auto leading-relaxed">
            From transradial coronary stenting to non-invasive multislice CT scans, explore Dr. Prakash Chand Shahi's core interventional specialties.
          </p>
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
                  ? 'bg-emerald-600 text-white shadow-md scale-105'
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
              <p className="text-xs text-slate-600 font-medium pt-1 leading-relaxed">
                {lumenState === 'stenosis'
                  ? 'Severe luminal obstruction restricts oxygenated blood supply to myocardium, causing exertional angina and risk of acute myocardial infarction.'
                  : 'Cobalt-chromium stent scaffold maintains long-term structural patency with continuous antiproliferative drug release to prevent restenosis.'}
              </p>
            </div>
          </div>
        </div>

        {/* =========================================================================
            STAGGERED OVERLAPPING SPECIALTY CARDS (Smooth 600ms Hover Elevation)
           ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {specialties.map((spec) => (
            <div
              key={spec.id}
              className={`group relative rounded-[2.2rem] bg-white p-4 border border-slate-200/90 shadow-layered transition-all duration-500 hover:-translate-y-4 hover:rotate-0 hover:z-40 hover:shadow-2xl flex flex-col justify-between ${spec.rotation}`}
            >
              <div>
                {/* Real Medical Photography Canvas with Image Zoom */}
                <div className={`relative ${spec.aspect} rounded-2xl overflow-hidden mb-4`}>
                  <img
                    src={spec.image}
                    alt={spec.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-115"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent" />

                  <span className={`absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-mono font-bold border ${spec.badgeColor}`}>
                    {spec.category}
                  </span>

                  <div className="absolute bottom-3 left-3 right-3 text-left">
                    <span className="text-xs font-mono font-extrabold text-emerald-300 block">
                      {spec.stat}
                    </span>
                    <span className="text-[10px] text-slate-300 font-mono block">
                      {spec.statSub}
                    </span>
                  </div>
                </div>

                <div className="space-y-2 text-left px-1">
                  <h3 className="text-lg font-extrabold text-slate-950 tracking-tight leading-snug group-hover:text-rose-700 transition-colors">
                    {spec.title}
                  </h3>
                  <p className="text-xs text-slate-600 font-medium leading-relaxed line-clamp-3">
                    {spec.desc}
                  </p>
                </div>
              </div>

              <div className="pt-4 mt-2 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#173C59] group-hover:text-[#2788B8]">
                <span>View Procedure Details</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5 text-[#2788B8]" />
              </div>
            </div>
          ))}
        </div>

        {/* Action Link to Full Treatments Page */}
        <div className="mt-14 text-center">
          <Link
            to="/treatments"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#173C59] via-[#1E4D74] to-[#2788B8] hover:from-[#0E2538] hover:to-[#173C59] text-white text-xs font-semibold uppercase tracking-wider shadow-lg shadow-[#173C59]/20 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:scale-102"
          >
            <span>Explore All Specialized Interventions</span>
            <ArrowRight className="w-4 h-4 text-[#A9D8E9]" />
          </Link>
        </div>

      </div>
    </section>
  );
}
