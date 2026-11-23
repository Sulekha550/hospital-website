import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Building2, MapPin, Clock, Phone, Sparkles, Calendar, Navigation,
  ShieldCheck, CheckCircle2, ArrowRight, Activity, Cpu, Layers,
  Award, Stethoscope, Compass, ExternalLink, ChevronRight
} from 'lucide-react';
import PatientExperienceSection from '../components/PatientExperienceSection';
import { PULSE_DATA } from '../data/pulseData';

export default function HospitalPage() {
  const { clinic, doctor } = PULSE_DATA;
  const [activeWing, setActiveWing] = useState(0);

  // 5 Master Clinical Wings & Departments
  const pavilionWings = [
    {
      id: 'cath-lab',
      name: 'Catheterization Laboratory',
      subtitle: 'Sub-Millimeter Hemodynamic Intervention Suite',
      image: '/images/cath-lab.jpg',
      tag: 'WING 01 • SURGICAL INTERVENTION',
      color: 'from-purple-600 via-indigo-600 to-purple-800',
      badgeColor: 'bg-purple-100 text-purple-900 border-purple-200',
      description: 'Equipped with digital C-Arm fluoroscopic imaging for transradial coronary angioplasty, balloon revascularization, and bi-ventricular permanent pacemaker implantation under laminar airflow sterility.',
      specs: [
        { label: 'Sterility Benchmark', value: 'ISO Class-5 Positive Airflow' },
        { label: 'Vascular Access', value: 'Transradial Puncture First' },
        { label: 'Telemetry Monitoring', value: 'Continuous Multi-Lead Hemodynamics' },
        { label: 'Surgical Team', value: 'Directed by Dr. Prakash Chand Shahi' },
      ],
      highlights: [
        'Real-time fluoroscopic stenosis mapping with sub-millimeter lesion measurement',
        'Direct stent deployment and post-dilation balloon optimization',
        'Emergency standby power and uninterrupted oxygen supply infrastructure',
      ]
    },
    {
      id: 'diagnostics',
      name: 'Cardiovascular Diagnostics',
      subtitle: 'Non-Invasive Diagnostic & Imaging Pavilion',
      image: '/images/angiogram-scan.jpg',
      tag: 'WING 02 • COMPREHENSIVE IMAGING',
      color: 'from-sky-600 via-cyan-600 to-blue-700',
      badgeColor: 'bg-sky-100 text-sky-900 border-sky-200',
      description: 'Dedicated diagnostic suite providing same-day 12-lead digital electrocardiograms (ECG), high-resolution 2D transthoracic echocardiography, color Doppler vascular mapping, and CD angiogram review.',
      specs: [
        { label: 'Echo Resolution', value: 'High-Resolution 2D Transthoracic' },
        { label: 'ECG Acquisition', value: '12-Lead Digital Telemetry' },
        { label: 'Reporting Speed', value: 'Same-Day Physician Turnaround' },
        { label: 'Archival System', value: '100% Digital Cine PACS Format' },
      ],
      highlights: [
        'Echocardiographic left ventricular ejection fraction (LVEF) analysis',
        'Valvular regurgitation and stenosis gradient quantification',
        'Frame-by-frame fluoroscopy CD review for ethical second opinions',
      ]
    },
    {
      id: 'consultation',
      name: 'Physician Consultation Suites',
      subtitle: 'Private Outpatient Clinical Chambers',
      image: '/images/hospital-facility.jpg',
      tag: 'WING 03 • AMBULATORY OP CLINIC',
      color: 'from-violet-700 via-purple-600 to-indigo-800',
      badgeColor: 'bg-violet-100 text-violet-900 border-violet-200',
      description: 'Peaceful, unhurried consultation chambers designed for in-depth physician-patient dialogue. Directed by Dr. Prakash Chand Shahi for diagnostic evaluation, therapy optimization, and long-term coronary preservation.',
      specs: [
        { label: 'Consultant', value: 'Dr. Prakash Chand Shahi (DM, MD)' },
        { label: 'OPD Schedule', value: 'Mon – Sat: 10:00 AM – 8:00 PM' },
        { label: 'Location', value: 'Betiahata Medical Corridor, Gorakhpur' },
        { label: 'Consultation Mode', value: 'In-Person Ambulatory Clinic' },
      ],
      highlights: [
        'Meticulous review of past cardiac interventions and medication charts',
        'Tailored lifestyle and dual antiplatelet therapy (DAPT) management',
        'Clear, compassionate counseling for patients and their families',
      ]
    },
    {
      id: 'pacemaker',
      name: 'Pacemaker & Device Clinic',
      subtitle: 'Electrophysiology Interrogation Suite',
      image: '/images/cath-lab.jpg',
      tag: 'WING 04 • RHYTHM MANAGEMENT',
      color: 'from-rose-600 via-pink-600 to-purple-700',
      badgeColor: 'bg-rose-100 text-rose-900 border-rose-200',
      description: 'Specialized facility for pacemaker interrogation, battery longevity monitoring, pacing lead threshold testing, and programming adjustments for permanent cardiac pacing systems.',
      specs: [
        { label: 'Device Support', value: 'Single & Dual Chamber Pacemakers' },
        { label: 'Programmer Suite', value: 'Multi-Manufacturer Telemetry' },
        { label: 'Monitoring Focus', value: 'Lead Impedance & Battery Life' },
        { label: 'Clinical Indication', value: 'Symptomatic Bradycardia & Heart Block' },
      ],
      highlights: [
        'Non-invasive device interrogation via specialized telemetry wand',
        'Optimization of rate-response pacing according to patient activity',
        'Regular follow-up protocols extending device longevity past 10–15 years',
      ]
    },
    {
      id: 'recovery',
      name: 'Ambulatory Observation Lounge',
      subtitle: 'Post-Procedure Recovery & Family Briefing',
      image: '/images/hospital-facility.jpg',
      tag: 'WING 05 • POST-PROCEDURE CARE',
      color: 'from-emerald-600 via-teal-600 to-cyan-700',
      badgeColor: 'bg-emerald-100 text-emerald-900 border-emerald-200',
      description: 'Serene day-care observation bays where patients rest comfortably following radial catheterization. Dedicated nursing staff monitor radial band compression, vital signs, and patient comfort before same-day discharge.',
      specs: [
        { label: 'Care Focus', value: 'Radial Artery Hemostasis & Recovery' },
        { label: 'Discharge Protocol', value: 'Same-Day Ambulatory Discharge' },
        { label: 'Environment', value: 'Quiet, Temperature-Regulated Bays' },
        { label: 'Family Briefing', value: 'Dedicated Physician Counseling Area' },
      ],
      highlights: [
        'Continuous pulse oximetry and radial puncture site monitoring',
        'Post-stent dietary briefing and medication orientation before departure',
        'Immediate emergency physician response protocols in place',
      ]
    }
  ];

  // Infrastructure Standards (Bento Matrix)
  const infrastructureStandards = [
    {
      title: 'ISO Class-5 Laminar Sterility',
      subtitle: 'Zero Airborne Contamination',
      desc: 'High-efficiency particulate air (HEPA) filtration with positive pressure circulation, maintaining cleanroom sterility standards across all catheterization procedures.',
      icon: ShieldCheck,
      color: 'text-purple-700 bg-purple-50 border-purple-200',
    },
    {
      title: 'Same-Day Diagnostic Turnaround',
      subtitle: 'In-House 2D Echo & 12-Lead ECG',
      desc: 'No external lab delays. Real-time echocardiography and digital electrocardiography performed on-site with immediate physician assessment.',
      icon: Activity,
      color: 'text-sky-700 bg-sky-50 border-sky-200',
    },
    {
      title: 'Angiogram CD Second Opinions',
      subtitle: 'Objective Evidence-Based Review',
      desc: 'Dedicated digital review workstations for evaluating outside angiogram discs, offering transparent guidance on whether stenting or conservative therapy is warranted.',
      icon: Cpu,
      color: 'text-amber-700 bg-amber-50 border-amber-200',
    },
    {
      title: 'Betiahata Central Medical Corridor',
      subtitle: 'Immediate Urban Accessibility',
      desc: 'Centrally situated in Betiahata with direct arterial road connections to Gorakhpur Railway Junction (3.8 km) and Gorakhpur Airport (9.2 km).',
      icon: MapPin,
      color: 'text-emerald-700 bg-emerald-50 border-emerald-200',
    },
  ];

  const currentWing = pavilionWings[activeWing];

  return (
    <div className="pt-28 pb-24 select-none">

      {/* =========================================================================
          1. MASTER ARCHITECTURAL HERO SECTION
         ========================================================================= */}
      <section className="relative py-16 lg:py-24 overflow-hidden bg-gradient-to-b from-purple-900/[0.05] via-cyan-600/[0.03] to-slate-900/[0.04] backdrop-blur-[1px]">

        {/* Ambient Moving Glow Orbs */}
        <div className="absolute top-10 left-1/4 w-[700px] h-[700px] bg-gradient-to-tr from-purple-500/35 via-violet-400/30 to-fuchsia-400/25 rounded-full blur-[85px] pointer-events-none -z-10 animate-float-1" />
        <div className="absolute bottom-10 right-10 w-[650px] h-[650px] bg-gradient-to-bl from-sky-400/35 via-cyan-300/30 to-indigo-400/25 rounded-full blur-[85px] pointer-events-none -z-10 animate-float-2" />



        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">

          {/* Status Pills Bar */}
          <div className="flex flex-wrap items-center justify-center gap-2.5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 border border-purple-200 text-xs font-mono font-bold text-purple-900 shadow-xs">
              <Building2 className="w-4 h-4 text-purple-700" />
              <span>Pulse Heart Centre • Betiahata Pavilion</span>
            </div>

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 border border-emerald-200 text-xs font-mono font-bold text-emerald-800 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>OPD Active: Mon – Sat (10:00 AM – 8:00 PM)</span>
            </div>

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 border border-sky-200 text-xs font-mono font-bold text-sky-800 shadow-xs">
              <ShieldCheck className="w-4 h-4 text-sky-600" />
              <span>ISO Class-5 Sterility Protocols</span>
            </div>
          </div>

          {/* Master Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-semibold text-slate-950 tracking-tight leading-[1.06] max-w-4xl mx-auto">
            Clinical Pavilion & <br />
            <span className="font-serif italic font-normal text-shining-purple">Outpatient Architecture</span>
          </h1>

          {/* Editorial Lead Description */}
          <p className="text-base sm:text-xl text-slate-700 font-medium max-w-3xl mx-auto leading-relaxed">
            Centrally located in the Betiahata medical corridor of Gorakhpur, directed by <strong className="text-purple-950">Dr. Prakash Chand Shahi</strong> (DM Cardiology PGIMER, MD KGMU). Purpose-built for non-invasive hemodynamics, high-resolution echocardiography, and compassionate outpatient cardiac care.
          </p>

          {/* Action CTAs */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-purple-700 via-indigo-600 to-purple-800 hover:from-purple-800 hover:to-indigo-700 text-white text-xs font-semibold uppercase tracking-wider shadow-lg shadow-purple-500/25 transition-all hover:scale-105 shining-sweep"
            >
              <Calendar className="w-4 h-4 text-purple-200" />
              <span>Book Priority Outpatient Pass</span>
              <ArrowRight className="w-4 h-4 text-purple-200 ml-1" />
            </Link>

            <a
              href="https://maps.google.com/?q=Pulse+Heart+Centre+Betiahata+Gorakhpur"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-white hover:bg-purple-50 text-slate-900 hover:text-purple-900 border-2 border-purple-200 text-xs font-semibold uppercase tracking-wider shadow-xs transition-all hover:scale-105"
            >
              <Compass className="w-4 h-4 text-purple-700" />
              <span>Get Driving Directions (GPS)</span>
              <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
            </a>

            <a
              href="tel:+919876543210"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-white/80 hover:bg-white text-purple-900 border border-purple-200 text-xs font-semibold uppercase tracking-wider shadow-xs transition-all"
            >
              <Phone className="w-4 h-4 text-purple-700" />
              <span>OPD Helpline: +91 98765 43210</span>
            </a>
          </div>

        </div>
      </section>

      {/* =========================================================================
          2. INTERACTIVE PAVILION WINGS & DEPARTMENT NAVIGATOR
         ========================================================================= */}
      <section className="relative py-20 lg:py-28 overflow-hidden bg-gradient-to-b from-sky-600/[0.06] via-indigo-600/[0.03] to-purple-600/[0.05] backdrop-blur-[1px]">



        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">

          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-purple-800 bg-purple-100 px-3.5 py-1.5 rounded-full border border-purple-200">
              Department Explorer
            </span>
            <h2 className="text-3xl sm:text-5xl font-semibold text-slate-950 tracking-tight leading-tight">
              Interactive Pavilion <span className="font-serif italic font-normal text-purple-700">Wings & Suites</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-medium">
              Explore the five specialized clinical dimensions operating under Dr. Prakash Chand Shahi's direct supervision at Pulse Heart Centre.
            </p>
          </div>

          {/* Department Selection Pills Bar */}
          <div className="flex flex-wrap items-center justify-center gap-2 p-2 rounded-3xl bg-white/90 backdrop-blur-xl border border-purple-200 shadow-md max-w-4xl mx-auto">
            {pavilionWings.map((wing, idx) => (
              <button
                key={wing.id}
                onClick={() => setActiveWing(idx)}
                className={`px-4 py-2.5 rounded-2xl text-xs font-mono font-semibold transition-all duration-300 ${activeWing === idx
                  ? 'bg-gradient-to-r from-purple-700 via-indigo-600 to-purple-800 text-white shadow-md shadow-purple-500/25 scale-102'
                  : 'text-slate-700 hover:text-purple-800 hover:bg-purple-50/70'
                  }`}
              >
                {wing.name}
              </button>
            ))}
          </div>

          {/* Active Department Showcase Stage */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white/90 backdrop-blur-2xl rounded-[2.5rem] p-6 sm:p-10 border-2 border-purple-200/90 shadow-layered text-left">

            {/* Left: 100% Clean Image Showcase (Zero Overlays) */}
            <div className="lg:col-span-6 space-y-4">
              <div className="relative aspect-[16/11] rounded-2xl overflow-hidden border border-purple-100 shadow-lg group">
                <img
                  src={currentWing.image}
                  alt={currentWing.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                />
              </div>

              {/* Clean Image Metadata Placed Gracefully Below the Image */}
              <div className="flex items-center justify-between text-xs text-slate-500 font-mono pt-1 px-1">
                <span className="font-bold text-purple-900">{currentWing.tag}</span>
                <span>Pulse Heart Centre Architecture</span>
              </div>
            </div>

            {/* Right: Rich Clinical Specifications & Protocols */}
            <div className="lg:col-span-6 space-y-6">

              <div className="space-y-2">
                <span className={`inline-block px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider font-bold border ${currentWing.badgeColor}`}>
                  {currentWing.tag}
                </span>
                <h3 className="text-2xl sm:text-3xl font-semibold text-slate-950 tracking-tight leading-snug">
                  {currentWing.name}
                </h3>
                <span className="text-sm font-serif italic text-purple-700 block font-normal">
                  {currentWing.subtitle}
                </span>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                {currentWing.description}
              </p>

              {/* 4-Item Telemetry Matrix */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                {currentWing.specs.map((item, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-purple-50/60 border border-purple-100">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 block">
                      {item.label}
                    </span>
                    <span className="text-xs font-semibold text-slate-950 block mt-0.5">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Key Department Highlights */}
              <div className="space-y-2 pt-2 border-t border-purple-100">
                <span className="text-[10px] font-mono uppercase tracking-wider text-purple-900 font-bold block">
                  Core Clinical Highlights
                </span>
                <ul className="space-y-1.5 text-xs text-slate-600 font-medium">
                  {currentWing.highlights.map((h, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-purple-600 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Direct Booking CTA */}
              <div className="pt-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-purple-700 to-indigo-600 hover:from-purple-800 hover:to-indigo-700 text-white text-xs font-semibold uppercase tracking-wider shadow-md shadow-purple-500/25 transition-all"
                >
                  <span>Book Consultation For This Wing</span>
                  <ArrowRight className="w-3.5 h-3.5 text-purple-200" />
                </Link>
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =========================================================================
          3. CLEAN PHOTOGRAPHIC SHOWCASE (FACILITY, CATH LAB & CINE IMAGING)
         ========================================================================= */}
      <section className="relative py-20 lg:py-28 overflow-hidden bg-gradient-to-b from-amber-500/[0.05] via-purple-900/[0.03] to-rose-500/[0.04] backdrop-blur-[1px]">

        {/* Ambient Moving Glows */}
        <div className="absolute top-1/3 -left-20 w-[650px] h-[650px] bg-gradient-to-tr from-amber-400/35 via-rose-300/30 to-purple-300/25 rounded-full blur-[85px] pointer-events-none -z-10 animate-float-1" />
        <div className="absolute bottom-10 -right-20 w-[600px] h-[600px] bg-gradient-to-bl from-purple-500/35 via-indigo-400/30 to-sky-400/25 rounded-full blur-[85px] pointer-events-none -z-10 animate-float-3" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">

          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-purple-800 bg-purple-100 px-3.5 py-1.5 rounded-full border border-purple-200">
              Photographic Monograph
            </span>
            <h2 className="text-3xl sm:text-5xl font-semibold text-slate-950 tracking-tight leading-tight">
              Hospital Architecture & <br />
              <span className="font-serif italic font-normal text-purple-700">Clinical Suites Gallery</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-medium">
              Explore the sterile procedural suites, dynamic angiogram review stations, and modern patient spaces in Betiahata.
            </p>
          </div>

          {/* 3-Card Visual Matrix (Images Remain Clean Without Overlaid Text) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* Card 1: Facility Architecture */}
            <div className="group relative rounded-[2rem] bg-white/95 p-4 border-2 border-purple-100 shadow-layered hover:shadow-layered-hover transition-all duration-500 hover:-translate-y-2 text-left space-y-4">
              <div className="relative aspect-[16/10] rounded-2xl overflow-hidden">
                <img
                  src="/images/hospital-facility.jpg"
                  alt="Pulse Heart Centre Outpatient Facility Architecture"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                />
              </div>
              <div className="space-y-1.5 px-1">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="text-lg font-semibold text-slate-950">
                    Pavilion Architecture
                  </h3>
                  <span className="px-2.5 py-0.5 rounded-full bg-purple-50 text-[10px] font-mono font-bold text-purple-800 border border-purple-200">
                    BETIAHATA CLINIC
                  </span>
                </div>
                <p className="text-xs text-slate-600 font-medium leading-relaxed">
                  Centrally situated in the prominent Betiahata medical corridor in Gorakhpur, featuring peaceful consultation suites and diagnostic rooms.
                </p>
              </div>
            </div>

            {/* Card 2: Catheterization Laboratory */}
            <div className="group relative rounded-[2rem] bg-white/95 p-4 border-2 border-purple-100 shadow-layered hover:shadow-layered-hover transition-all duration-500 hover:-translate-y-2 text-left space-y-4">
              <div className="relative aspect-[16/10] rounded-2xl overflow-hidden">
                <img
                  src="/images/cath-lab.jpg"
                  alt="Pulse Heart Centre Catheterization Laboratory"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                />
              </div>
              <div className="space-y-1.5 px-1">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="text-lg font-semibold text-slate-950">
                    Catheterization Suite
                  </h3>
                  <span className="px-2.5 py-0.5 rounded-full bg-sky-50 text-[10px] font-mono font-bold text-sky-800 border border-sky-200">
                    SURGICAL CATH LAB
                  </span>
                </div>
                <p className="text-xs text-slate-600 font-medium leading-relaxed">
                  Digital C-Arm fluoroscopic system for transradial angioplasty, coronary stenting, and permanent pacemaker implantation.
                </p>
              </div>
            </div>

            {/* Card 3: Fluoroscopy Cine Imaging */}
            <div className="group relative rounded-[2rem] bg-white/95 p-4 border-2 border-purple-100 shadow-layered hover:shadow-layered-hover transition-all duration-500 hover:-translate-y-2 text-left space-y-4">
              <div className="relative aspect-[16/10] rounded-2xl overflow-hidden">
                <img
                  src="/images/angiogram-scan.jpg"
                  alt="Coronary Angiogram Fluoroscopic Imaging"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                />
              </div>
              <div className="space-y-1.5 px-1">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="text-lg font-semibold text-slate-950">
                    Cine Fluoroscopy
                  </h3>
                  <span className="px-2.5 py-0.5 rounded-full bg-rose-50 text-[10px] font-mono font-bold text-rose-800 border border-rose-200">
                    DIAGNOSTIC CINE
                  </span>
                </div>
                <p className="text-xs text-slate-600 font-medium leading-relaxed">
                  High-speed dynamic cine recording assessing coronary lumen diameter and blood flow velocity down to sub-millimeter margins.
                </p>
              </div>
            </div>

          </div>

        </div>

      </section>

      {/* =========================================================================
          4. CLINICAL STANDARDS & OPERATIONAL BENCHMARKS (BENTO MATRIX)
         ========================================================================= */}
      <section className="relative py-20 lg:py-28 overflow-hidden bg-gradient-to-b from-emerald-600/[0.06] via-teal-600/[0.03] to-cyan-600/[0.05] backdrop-blur-[1px]">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">

          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-emerald-800 bg-emerald-100 px-3.5 py-1.5 rounded-full border border-emerald-200">
              Institutional Benchmarks
            </span>
            <h2 className="text-3xl sm:text-5xl font-semibold text-slate-950 tracking-tight leading-tight">
              Clinical Quality & <br />
              <span className="font-serif italic font-normal text-emerald-700">Hygiene Protocols</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-medium">
              Every square meter of Pulse Heart Centre is calibrated to apex national tertiary hospital specifications.
            </p>
          </div>

          {/* 4 Bento Grid Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {infrastructureStandards.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-7 rounded-[2rem] bg-white/95 backdrop-blur-xl border-2 border-purple-100 shadow-layered hover:shadow-layered-hover transition-all duration-400 hover:-translate-y-1.5 text-left flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className={`w-12 h-12 rounded-2xl ${item.color} flex items-center justify-center border shadow-xs`}>
                      <Icon className="w-6 h-6 stroke-[1.8]" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-slate-950 leading-snug">
                        {item.title}
                      </h4>
                      <span className="text-[11px] font-mono text-purple-700 font-bold block mt-0.5">
                        {item.subtitle}
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 font-medium leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-purple-900 font-bold">
                    <span>Verified Protocol</span>
                    <span>✓ ISO Standards</span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </section>

      {/* =========================================================================
          5. PATIENT TRANSIT & ARRIVAL LOGISTICS (BETIAHATA, GORAKHPUR)
         ========================================================================= */}
      <section className="relative py-20 lg:py-28 overflow-hidden bg-gradient-to-b from-indigo-700/[0.06] via-blue-600/[0.03] to-violet-700/[0.05] backdrop-blur-[1px]">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">

          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-indigo-800 bg-indigo-100 px-3.5 py-1.5 rounded-full border border-indigo-200">
              Transit & Logistics
            </span>
            <h2 className="text-3xl sm:text-5xl font-semibold text-slate-950 tracking-tight leading-tight">
              Patient Arrival & <br />
              <span className="font-serif italic font-normal text-indigo-700">Gorakhpur Transit Guide</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-medium">
              Convenient connections from railway terminals, regional highway corridors, and the local airport.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">

            {/* Transit 1: Railway */}
            <div className="p-7 rounded-[2rem] bg-white/95 border-2 border-indigo-100 shadow-layered space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold uppercase text-indigo-800 bg-indigo-50 px-3 py-1 rounded-full">
                  Rail Connections
                </span>
                <span className="text-xs font-mono font-bold text-slate-500">~12 Mins</span>
              </div>
              <h4 className="text-lg font-semibold text-slate-950">
                From Gorakhpur Junction (GKP)
              </h4>
              <p className="text-xs text-slate-600 font-medium leading-relaxed">
                Direct ~3.8 km drive via Station Road into the Betiahata main medical avenue. Pre-paid auto-rickshaws, cabs, and taxis available round the clock outside Platform 1.
              </p>
              <div className="pt-2 text-xs font-semibold text-indigo-700">
                Distance: 3.8 km • Betiahata Main Road
              </div>
            </div>

            {/* Transit 2: Airport */}
            <div className="p-7 rounded-[2rem] bg-white/95 border-2 border-indigo-100 shadow-layered space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold uppercase text-indigo-800 bg-indigo-50 px-3 py-1 rounded-full">
                  Air Connections
                </span>
                <span className="text-xs font-mono font-bold text-slate-500">~22 Mins</span>
              </div>
              <h4 className="text-lg font-semibold text-slate-950">
                Mahayogi Gorakhnath Airport (GOP)
              </h4>
              <p className="text-xs text-slate-600 font-medium leading-relaxed">
                Located ~9.2 km east via Airport Road / Mohaddipur. Patients arriving from Delhi, Mumbai, or Kolkata can reach the OPD suites within 22 minutes.
              </p>
              <div className="pt-2 text-xs font-semibold text-indigo-700">
                Distance: 9.2 km • Via Airport Road
              </div>
            </div>

            {/* Transit 3: Regional Corridors */}
            <div className="p-7 rounded-[2rem] bg-white/95 border-2 border-indigo-100 shadow-layered space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold uppercase text-indigo-800 bg-indigo-50 px-3 py-1 rounded-full">
                  Regional Highways
                </span>
                <span className="text-xs font-mono font-bold text-slate-500">Direct Entry</span>
              </div>
              <h4 className="text-lg font-semibold text-slate-950">
                Deoria, Kushinagar & Basti
              </h4>
              <p className="text-xs text-slate-600 font-medium leading-relaxed">
                Direct highway access leading into Gorakhpur city center. Betiahata is an internationally recognized healthcare district with clear parking and drop-off access.
              </p>
              <div className="pt-2 text-xs font-semibold text-indigo-700">
                Prime Betiahata Medical District
              </div>
            </div>

          </div>

          {/* Interactive Google Maps Route Card */}
          <div className="p-8 sm:p-10 rounded-[2.5rem] bg-gradient-to-r from-indigo-50/90 via-purple-50/80 to-white border-2 border-indigo-200/90 shadow-layered flex flex-col md:flex-row items-center justify-between gap-6 text-left">
            <div className="space-y-2 max-w-xl">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-indigo-900">
                <MapPin className="w-4 h-4 text-rose-600" />
                <span>{clinic.name} • {clinic.address}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-semibold text-slate-950">
                Navigate Directly to the Pavilion
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                Tap below to open turn-by-turn Google Maps GPS navigation directly to the Pulse Heart Centre outpatient reception in Betiahata.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <a
                href="https://maps.google.com/?q=Pulse+Heart+Centre+Betiahata+Gorakhpur"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-700 hover:from-indigo-700 hover:to-purple-700 text-white text-xs font-semibold uppercase tracking-wider shadow-md shadow-indigo-500/25 transition-all hover:scale-105"
              >
                <Compass className="w-4 h-4 text-indigo-200" />
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5 text-indigo-200 ml-1" />
              </a>

              <a
                href="tel:+919876543210"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white hover:bg-indigo-50 text-indigo-950 border border-indigo-200 text-xs font-semibold uppercase tracking-wider shadow-xs transition-all"
              >
                <Phone className="w-4 h-4 text-indigo-600" />
                <span>Call Desk: +91 98765 43210</span>
              </a>
            </div>
          </div>

        </div>

      </section>

      {/* =========================================================================
          6. PATIENT CONSULTATION PATHWAY & PRE-VISIT CHECKLIST
         ========================================================================= */}
      <div className="my-8">
        <PatientExperienceSection />
      </div>

      {/* =========================================================================
          7. MASTER PRIORITY OPD PASS BOOKING BANNER
         ========================================================================= */}
      <div className="mt-16 text-center max-w-4xl mx-auto px-4">
        <div className="p-8 sm:p-12 rounded-[2.5rem] bg-gradient-to-br from-white via-purple-50/70 to-indigo-50/60 text-slate-900 shadow-layered border-2 border-purple-200/90 space-y-5">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-purple-800 font-bold block">
            Direct Outpatient Access • Gorakhpur
          </span>
          <h3 className="text-3xl sm:text-4xl font-semibold text-slate-950">
            Consult <span className="font-serif italic font-normal text-purple-700">Dr. Prakash Chand Shahi</span>
          </h3>
          <p className="text-sm sm:text-base text-slate-600 max-w-lg mx-auto font-medium leading-relaxed">
            Pulse Heart Centre, Betiahata, Gorakhpur. Outpatient consultations run Monday through Saturday, 10:00 AM – 8:00 PM.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-purple-700 via-indigo-600 to-purple-800 hover:from-purple-800 hover:to-indigo-700 text-white text-xs font-semibold uppercase tracking-wider shadow-md shadow-purple-500/25 transition-all hover:scale-105"
            >
              <Calendar className="w-4 h-4 text-purple-200" />
              <span>Request Priority OPD Pass</span>
            </Link>
            <a
              href="tel:+919876543210"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white hover:bg-purple-50 text-purple-900 border-2 border-purple-200 text-xs font-semibold uppercase tracking-wider transition-all shadow-xs"
            >
              <Phone className="w-4 h-4 text-purple-700" />
              <span>Call +91 98765 43210</span>
            </a>
          </div>
        </div>
      </div>

    </div>
  );
}
