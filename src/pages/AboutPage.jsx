import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Award, ShieldCheck, Building2, Users, HeartPulse,
  Target, CheckCircle2, ArrowRight, Clock, MapPin, Sparkles, Calendar, Play, Stethoscope, Phone, Activity, Zap, Layers, RefreshCw
} from 'lucide-react';
import { PULSE_DATA } from '../data/pulseData';
import SectionCinematicVideo from '../components/SectionCinematicVideo';
import DoctorPlaceholder from '../components/DoctorPlaceholder';
import ThreeDImageCard from '../components/ThreeDImageCard';
import SectionBackgroundMotion from '../components/SectionBackgroundMotion';
import DoctorHeroMedicalCanvas from '../components/DoctorHeroMedicalCanvas';
import CylinderCarouselMilestones from '../components/CylinderCarouselMilestones';
import PixelatedImageTrailDemo from '../components/PixelatedImageTrailDemo';

export default function AboutPage() {
  const [timelineMode, setTimelineMode] = useState('cylinder'); // 'cylinder' | 'expanded'
  const milestones = [
    {
      year: "2002",
      phase: "PHASE 01",
      badge: "Clinical Genesis",
      institution: "Betiahata, Gorakhpur",
      title: "Foundation of Clinical Devotion",
      desc: "Initiation of specialized cardiovascular care in Betiahata, Gorakhpur with unhurried bedside ethics and patient-first clinical empathy.",
      tags: ["Betiahata Origin", "Bedside Ethics", "Day 1 Commitment"],
      icon: HeartPulse,
      accent: "from-[#0A1128] to-[#1E293B]",
      borderAccent: "border-slate-300",
      num: "01"
    },
    {
      year: "2007",
      phase: "PHASE 02",
      badge: "Apex Residency",
      institution: "KGMU Lucknow",
      title: "Apex Medical Training at KGMU",
      desc: "Rigorous MD General Medicine residency at King George's Medical University, Lucknow, solidifying diagnostic depth for complex multisystem cardiac patients.",
      tags: ["King George's Med Univ", "Diagnostic Mastery", "Gold Standard"],
      icon: Award,
      accent: "from-[#1E293B] to-[#334155]",
      borderAccent: "border-slate-300",
      num: "02"
    },
    {
      year: "2013",
      phase: "PHASE 03",
      badge: "Super-Specialty",
      institution: "PGIMER Chandigarh",
      title: "Super-Specialty DM in Interventional Cardiology",
      desc: "Completion of apex DM Cardiology at PGIMER Chandigarh, introducing high-volume transradial intervention and complex coronary bifurcation angioplasty to eastern UP.",
      tags: ["PGIMER Chandigarh", "Radial Access Pioneer", "Eastern UP First"],
      icon: Sparkles,
      accent: "from-[#BE123C] to-[#E11D48]",
      borderAccent: "border-rose-300",
      num: "03"
    },
    {
      year: "2018",
      phase: "PHASE 04",
      badge: "Cath Lab Suite",
      institution: "Siemens Artis Zee Flat-Panel",
      title: "Flat-Panel Digital Cath Lab Commissioned",
      desc: "Installation of the advanced Siemens Artis Zee digital catheterization suite, performing emergency primary angioplasties 24/7 with sub-millimeter stent visualization.",
      tags: ["Siemens Artis Zee", "Sub-Millimeter Stents", "24/7 STEMI Triage"],
      icon: ShieldCheck,
      accent: "from-[#0A1128] to-[#BE123C]",
      borderAccent: "border-rose-300",
      num: "04"
    },
    {
      year: "2023",
      phase: "PHASE 05",
      badge: "Next-Gen Era",
      institution: "IVUS • OCT • HD-ICU",
      title: "Next-Gen Cardiac Care Expansion",
      desc: "Advanced 24/7 Cardiac Emergency, Intra-Vascular Ultrasound (IVUS), Optical Coherence Tomography (OCT), and High-Dependency Cardiac ICU for precision coronary interventions.",
      tags: ["IVUS & OCT Guided", "High-Dependency ICU", "15,000+ Procedures"],
      icon: Activity,
      accent: "from-[#881337] to-[#BE123C]",
      borderAccent: "border-rose-300",
      num: "05"
    }
  ];

  return (
    <div className="relative pt-24 pb-24 select-none bg-[#FAF9F6] overflow-hidden">

      {/* =========================================================================
          HERO SECTION: BESPOKE BIOGRAPHICAL & CLINICAL LEADERSHIP DOSSIER
         ========================================================================= */}
      <section className="relative min-h-[90vh] lg:min-h-screen flex flex-col justify-between pt-16 pb-12 px-4 sm:px-6 lg:px-12 overflow-hidden select-none">

        {/* Bespoke High-Visibility Clinical Doctor Hero Background: Coronary Arteries, Acoustic Stethoscope Sonar, Real-time ECG & Telemetry */}
        <DoctorHeroMedicalCanvas />

        {/* Hero Content Canvas */}
        <div className="max-w-7xl mx-auto w-full flex-1 flex flex-col justify-center relative z-10 py-4 sm:py-6">

          {/* Top Editorial Monograph Banner: Distinction from Home */}
          <div className="text-center max-w-4xl mx-auto mb-8 sm:mb-12 space-y-3">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-50/90 text-[#BE123C] border border-rose-200/90 text-xs font-bold uppercase tracking-[0.24em] shadow-xs backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-[#BE123C]" />
              <span>Institutional Founder &amp; Chief Interventional Cardiologist</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#0A1128] tracking-tight leading-[1.08]">
              Dr. Prakash Chand Shahi <br />
              <span className="font-serif italic font-normal text-[#BE123C] text-2xl sm:text-4xl lg:text-5xl">
                22+ Years Pioneering Cardiovascular Devotion
              </span>
            </h1>

            <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto font-normal leading-relaxed pt-1">
              Directing Pulse Heart Centre, Betiahata, with apex clinical training from PGIMER Chandigarh and KGMU Lucknow. Dedicated to unhurried bedside ethics, wrist-first radial access, and zero-compromise emergency STEMI angioplasty.
            </p>
          </div>

          {/* Main 2-Column Bespoke Showcase Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

            {/* Left Column (5 cols): Bespoke Circular Medallion Portrait (Unique to About Page) */}
            <div className="lg:col-span-5 relative flex flex-col items-center justify-center py-4">
              <div className="relative w-72 h-72 sm:w-96 sm:h-96 rounded-full p-3 bg-white border-2 border-slate-200 shadow-[0_28px_65px_-15px_rgba(10,17,40,0.18)]">
                <div className="w-full h-full rounded-full overflow-hidden border-4 border-[#BE123C]/20 bg-slate-100">
                  <img
                    src="/images/doctor-portrait.jpg"
                    alt="Dr. Prakash Chand Shahi"
                    className="w-full h-full object-cover object-[50%_20%]"
                  />
                </div>
              </div>

              {/* Floating Top Right Pedigree Seal */}
              <div className="absolute top-2 right-2 sm:right-6 px-4 py-2.5 rounded-2xl bg-white border border-slate-200 shadow-lg text-left hidden sm:flex items-center gap-2.5 z-20">
                <div className="w-8 h-8 rounded-xl bg-rose-50 border border-rose-200/80 flex items-center justify-center text-[#BE123C]">
                  <HeartPulse className="w-4 h-4 text-[#BE123C]" />
                </div>
                <div>
                  <span className="text-[9px] font-bold uppercase tracking-wider text-[#BE123C] block">
                    APEX SUPER-SPECIALTY
                  </span>
                  <span className="text-xs font-extrabold text-[#0A1128] block">
                    DM (PGIMER) • MD (KGMU)
                  </span>
                </div>
              </div>

              {/* Floating Bottom Left Clinical Trust Seal */}
              <div className="absolute bottom-2 left-2 sm:left-6 px-4 py-2 rounded-2xl bg-[#0A1128] text-white border border-white/10 shadow-lg text-left hidden sm:flex items-center gap-2 z-20">
                <ShieldCheck className="w-4 h-4 text-rose-400" />
                <span className="text-xs font-bold">
                  15,000+ Interventions Done
                </span>
              </div>
            </div>

            {/* Right Column (7 cols): Academic Dossier & Key Clinical Pillars (Bespoke to About) */}
            <div className="lg:col-span-7 space-y-5 text-left">

              {/* 3 Academic & Clinical Credential Cards */}
              <div className="space-y-3">
                <div className="p-4 rounded-2xl bg-white/80 backdrop-blur-xl border border-slate-200/90 shadow-sm hover:border-rose-300 hover:bg-white/90 transition-all group">
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-rose-50 border border-rose-200 flex items-center justify-center text-[#BE123C] shrink-0 group-hover:scale-105 transition-transform">
                      <Award className="w-5 h-5 text-[#BE123C]" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-extrabold text-slate-900">DM Cardiology — PGIMER Chandigarh</span>
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-rose-50 text-[#BE123C] font-mono font-bold border border-rose-200">
                          Apex Super-Specialty
                        </span>
                      </div>
                      <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                        Rigorous clinical residency at India's premier postgraduate institute, mastering transradial catheterization, complex coronary bifurcation lesions, and permanent pacemaker therapies.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white/80 backdrop-blur-xl border border-slate-200/90 shadow-sm hover:border-rose-300 hover:bg-white/90 transition-all group">
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center text-[#0A1128] shrink-0 group-hover:scale-105 transition-transform">
                      <Building2 className="w-5 h-5 text-[#0A1128]" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-extrabold text-slate-900">MD Internal Medicine — KGMU Lucknow</span>
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-100 text-[#0A1128] font-mono font-bold border border-slate-200">
                          Gold Standard
                        </span>
                      </div>
                      <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                        Diagnostic depth forged at King George's Medical University, providing comprehensive evaluation for multi-morbidity cardiac patients, hypertension, and heart failure syndromes.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white/80 backdrop-blur-xl border border-slate-200/90 shadow-sm hover:border-rose-300 hover:bg-white/90 transition-all group">
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-rose-50 border border-rose-200 flex items-center justify-center text-[#BE123C] shrink-0 group-hover:scale-105 transition-transform">
                      <Stethoscope className="w-5 h-5 text-[#BE123C]" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-extrabold text-slate-900">Siemens Artis Zee Flat-Panel Digital Cath Lab</span>
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-rose-50 text-[#BE123C] font-mono font-bold border border-rose-200">
                          Betiahata, GKP
                        </span>
                      </div>
                      <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                        Directing Gorakhpur's leading high-volume catheterization facility with sub-millimeter fluoroscopic stent visualization and 24/7 dedicated primary angioplasty triage.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 4 Impact Micro-Metrics Cards */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-1">
                <div className="p-3 rounded-xl bg-white/85 backdrop-blur-md border border-slate-200/90 shadow-xs text-left">
                  <span className="text-lg sm:text-xl font-extrabold text-[#0A1128] block">22+ Yrs</span>
                  <span className="text-[10px] font-bold text-slate-700 uppercase tracking-tight block">Clinical Devotion</span>
                  <span className="text-[9px] text-slate-500">Betiahata, Gorakhpur</span>
                </div>
                <div className="p-3 rounded-xl bg-white/85 backdrop-blur-md border border-slate-200/90 shadow-xs text-left">
                  <span className="text-lg sm:text-xl font-extrabold text-[#BE123C] block">15,000+</span>
                  <span className="text-[10px] font-bold text-slate-700 uppercase tracking-tight block">Cath Procedures</span>
                  <span className="text-[9px] text-slate-500">Wrist-First Angioplasty</span>
                </div>
                <div className="p-3 rounded-xl bg-white/85 backdrop-blur-md border border-slate-200/90 shadow-xs text-left">
                  <span className="text-lg sm:text-xl font-extrabold text-[#0A1128] block">&lt; 45 Min</span>
                  <span className="text-[10px] font-bold text-slate-700 uppercase tracking-tight block">Door-To-Balloon</span>
                  <span className="text-[9px] text-slate-500">24/7 STEMI Response</span>
                </div>
                <div className="p-3 rounded-xl bg-white/85 backdrop-blur-md border border-slate-200/90 shadow-xs text-left">
                  <span className="text-lg sm:text-xl font-extrabold text-[#BE123C] block">99.4%</span>
                  <span className="text-[10px] font-bold text-slate-700 uppercase tracking-tight block">Radial Patency</span>
                  <span className="text-[9px] text-slate-500">Zero Groin Pain</span>
                </div>
              </div>

              {/* Direct Action Row */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                <Link
                  to="/book-appointment"
                  className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#0A1128] via-[#1E293B] to-[#BE123C] hover:from-[#BE123C] hover:to-[#0A1128] text-white font-bold text-xs uppercase tracking-wider shadow-xl shadow-navy/25 hover:shadow-2xl transition-all duration-300 hover:-translate-y-0.5 group border border-rose-300/40 text-center"
                >
                  <Calendar className="w-4 h-4 text-rose-200 group-hover:scale-110 transition-transform" />
                  <span>Book Priority OPD Pass</span>
                  <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
                </Link>

                <a
                  href="tel:+919876543210"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white hover:bg-slate-50 text-[#0A1128] font-bold text-xs uppercase tracking-wider border-2 border-slate-300 hover:border-[#BE123C] hover:text-[#BE123C] shadow-sm hover:shadow-md transition-all duration-300 text-center"
                >
                  <Phone className="w-4 h-4 text-[#BE123C]" />
                  <span>24/7 Cardiac Emergency Helpline</span>
                </a>
              </div>

            </div>

          </div>

        </div>

        {/* Bottom Institutional Core Ethics Ribbon: Unique to About Page */}
        <div className="max-w-7xl mx-auto w-full pt-6 border-t border-slate-200 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-left">
            <div className="p-3.5 rounded-2xl bg-white/90 border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow">
              <span className="text-xs font-extrabold text-[#0A1128] block">Unhurried Bedside Ethics</span>
              <span className="text-[11px] text-slate-600 block mt-0.5">Comprehensive, empathetic clinical listening for every cardiac patient.</span>
            </div>
            <div className="p-3.5 rounded-2xl bg-white/90 border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow">
              <span className="text-xs font-extrabold text-[#BE123C] block">Wrist-First Transradial Access</span>
              <span className="text-[11px] text-slate-600 block mt-0.5">Walk out within 2 hours of procedure with zero groin immobilization.</span>
            </div>
            <div className="p-3.5 rounded-2xl bg-white/90 border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow">
              <span className="text-xs font-extrabold text-[#0A1128] block">Ethical Angiogram CD Review</span>
              <span className="text-[11px] text-slate-600 block mt-0.5">Transparent second opinions with zero unnecessary stenting.</span>
            </div>
            <div className="p-3.5 rounded-2xl bg-white/90 border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow">
              <span className="text-xs font-extrabold text-[#BE123C] block">24/7 STEMI Code Blue Response</span>
              <span className="text-[11px] text-slate-600 block mt-0.5">Siemens Artis Zee digital cath lab ready day &amp; night.</span>
            </div>
          </div>
        </div>

      </section>

      {/* Panoramic Hospital Interior Video Console Section with Dynamic Ambient Theatre Background */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 my-8 overflow-hidden select-none bg-gradient-to-b from-[#FAF9F6] via-[#F8FAFC] to-[#F1F5F9] rounded-[3rem] border border-slate-200 shadow-lg">
        {/* Bespoke Cinematic Documentary Auditorium & Ambient Horizon Stage */}
        <SectionBackgroundMotion variant="about-video" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="max-w-5xl mx-auto relative z-10"
        >
          <SectionCinematicVideo
            type="about-hospital"
            videoUrl="/videos/about-hospital.mp4"
            styleVariant="panoramic-stage"
            posterImage="/images/hospital-facility.jpg"
            title="Hospital Interior &amp; Clinical Ward Walkthrough"
            subtitle="4K Interior Steady-Cam • 60 FPS"
            specs="14,000 Sq. Ft. Clinical Facility • Zero Particulate HEPA Filtered"
            aspectRatio="aspect-[16/8] sm:aspect-[21/9]"
          />
        </motion.div>

        {/* Interactive Pixelated Surgical & Facility Visual Trail */}
        <div className="max-w-5xl mx-auto mt-10 relative z-10">
          <PixelatedImageTrailDemo />
        </div>
      </section>

      <div className="relative z-10">
        <section className="relative py-20 overflow-hidden border-y border-slate-200 shadow-xs bg-gradient-to-b from-[#FAF9F6] via-[#F8FAFC] to-[#F1F5F9]">
          {/* Bespoke Four Monoliths of Trust & Sculptural Fluted Columns */}
          <SectionBackgroundMotion variant="about-pillars" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-xl mx-auto mb-10 space-y-2">
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#BE123C] bg-rose-50 border border-rose-200 px-3.5 py-1 rounded-full">Ethical Framework</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0A1128]">
                Core Pillars of <span className="font-serif italic font-normal text-[#BE123C]">Clinical Practice</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

              <div className="space-y-3">
                <ThreeDImageCard
                  src="/images/doctor-cathlab-procedure.jpg"
                  image="/images/doctor-cathlab-procedure.jpg"
                  alt="Cath Lab Mission"
                  badge="PILLAR 01"
                  title="Medical Mission"
                  stat="Zero Compromise"
                  substat="Tertiary Interventions"
                  aspectRatio="aspect-[16/10]"
                  laserBeam={false}
                />
                <div className="flex flex-wrap gap-1.5 justify-center">
                  <span className="text-[10px] font-semibold bg-white border border-slate-200 text-[#0A1128] px-2.5 py-1 rounded-md">Precision Angioplasty</span>
                  <span className="text-[10px] font-semibold bg-rose-50 text-[#BE123C] px-2.5 py-1 rounded-md">CD Review</span>
                </div>
              </div>

              <div className="space-y-3">
                <ThreeDImageCard
                  src="/images/doctor-patient-consult.jpg"
                  image="/images/doctor-patient-consult.jpg"
                  alt="Bedside Consult"
                  badge="PILLAR 02"
                  title="Clinical Philosophy"
                  stat="Unhurried Bedside"
                  substat="Ethical Guidance"
                  aspectRatio="aspect-[16/10]"
                  laserBeam={false}
                />
                <div className="flex flex-wrap gap-1.5 justify-center">
                  <span className="text-[10px] font-semibold bg-white border border-slate-200 text-[#0A1128] px-2.5 py-1 rounded-md">Direct Dialogue</span>
                  <span className="text-[10px] font-semibold bg-rose-50 text-[#BE123C] px-2.5 py-1 rounded-md">Clear Explanations</span>
                </div>
              </div>

              <div className="space-y-3">
                <ThreeDImageCard
                  src="/images/doctor-icu-rounds.jpg"
                  image="/images/doctor-icu-rounds.jpg"
                  alt="Sterility Protocols"
                  badge="PILLAR 03"
                  title="Evidence Protocols"
                  stat="NABH Sterility"
                  substat="ACC / AHA Standards"
                  aspectRatio="aspect-[16/10]"
                  laserBeam={false}
                />
                <div className="flex flex-wrap gap-1.5 justify-center">
                  <span className="text-[10px] font-semibold bg-white border border-slate-200 text-[#0A1128] px-2.5 py-1 rounded-md">Laminar Airflow</span>
                  <span className="text-[10px] font-semibold bg-rose-50 text-[#BE123C] px-2.5 py-1 rounded-md">Low Fluoroscopy</span>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 3. Milestones Timeline: 3D Cylinder Carousel & Architectural Clinical Dossiers */}
        <section className="relative py-24 sm:py-28 overflow-hidden bg-gradient-to-b from-[#FAF9F6] via-[#F8FAFC] to-[#F1F5F9]">
          {/* Bespoke Temporal Pathway & Luminous Chrono-Spine */}
          <SectionBackgroundMotion variant="about-milestones" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

            {/* Section Header */}
            <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 space-y-3">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-50 text-[#BE123C] border border-rose-200/90 text-xs font-bold uppercase tracking-[0.24em] shadow-xs">
                <Sparkles className="w-3.5 h-3.5 text-[#BE123C]" />
                <span>Two Decades of Clinical Leadership</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0A1128] tracking-tight leading-tight">
                Pioneering Milestones in <br />
                <span className="font-serif italic font-normal text-[#BE123C]">Cardiovascular Devotion</span>
              </h2>
              <p className="text-sm text-slate-600 max-w-xl mx-auto font-normal leading-relaxed">
                From foundation in Betiahata to apex training at KGMU &amp; PGIMER, delivering eastern UP's most advanced transradial catheterization center.
              </p>

              {/* View Switcher Pill: 3D Cylinder Carousel vs Vertical Spine */}
              <div className="pt-3 flex items-center justify-center">
                <div className="inline-flex p-1.5 rounded-2xl bg-white/95 backdrop-blur-md border-2 border-slate-200/90 shadow-sm">
                  <button
                    onClick={() => setTimelineMode('cylinder')}
                    className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all duration-300 flex items-center gap-2 ${
                      timelineMode === 'cylinder'
                        ? 'bg-gradient-to-r from-[#0A1128] via-[#1E293B] to-[#BE123C] text-white shadow-md'
                        : 'text-slate-600 hover:text-[#BE123C]'
                    }`}
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                    <span>3D Cylinder Carousel</span>
                  </button>
                  <button
                    onClick={() => setTimelineMode('expanded')}
                    className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all duration-300 flex items-center gap-2 ${
                      timelineMode === 'expanded'
                        ? 'bg-gradient-to-r from-[#0A1128] via-[#1E293B] to-[#BE123C] text-white shadow-md'
                        : 'text-slate-600 hover:text-[#BE123C]'
                    }`}
                  >
                    <Layers className="w-3.5 h-3.5" />
                    <span>Vertical Spine View</span>
                  </button>
                </div>
              </div>
            </div>

            {/* VIEW MODE 1: 3D CYLINDER CAROUSEL (DEFAULT) */}
            {timelineMode === 'cylinder' && (
              <div className="my-4">
                <CylinderCarouselMilestones items={milestones} />
              </div>
            )}

            {/* VIEW MODE 2: ARCHITECTURAL VERTICAL SPINE */}
            {timelineMode === 'expanded' && (
              <div className="relative mt-8">
                {/* Central Glowing Catheter Guide-Wire Spine (Desktop) */}
                <div className="hidden md:block absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-1 bg-gradient-to-b from-[#0A1128] via-[#BE123C] to-[#E11D48] rounded-full shadow-[0_0_16px_#E11D48]">
                  {/* Continuous Traveling Pulse Light Blip */}
                  <div className="absolute inset-x-0 w-3 h-12 -left-1 bg-white rounded-full blur-xs animate-laser-v" />
                </div>

                {/* Milestones Alternating Grid */}
                <div className="space-y-12 md:space-y-20">
                  {milestones.map((m, idx) => {
                    const isLeft = idx % 2 === 0;
                    const IconComp = m.icon;

                    return (
                      <div
                        key={idx}
                        className="relative flex flex-col md:flex-row items-center"
                      >
                        {/* Left Side Content Container */}
                        <div className={`w-full md:w-1/2 ${isLeft ? 'md:pr-14 md:text-right' : 'md:order-2 md:pl-14 md:text-left'}`}>
                          <motion.div
                            initial={{ opacity: 0, x: isLeft ? -40 : 40, y: 20 }}
                            whileInView={{ opacity: 1, x: 0, y: 0 }}
                            viewport={{ once: true, margin: '-60px' }}
                            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                            className="relative p-7 sm:p-9 rounded-[2.5rem] bg-white/95 backdrop-blur-2xl border-2 border-slate-200/90 shadow-[0_20px_50px_-10px_rgba(10,17,40,0.08)] hover:shadow-[0_28px_65px_-10px_rgba(190,18,60,0.15)] transition-all duration-500 hover:-translate-y-1.5 group overflow-hidden text-left"
                          >
                            {/* Giant Typographic Watermark Year */}
                            <div className="absolute -top-3 right-4 font-serif italic text-7xl sm:text-8xl text-slate-950/[0.04] select-none pointer-events-none group-hover:text-[#BE123C]/[0.08] transition-colors">
                              {m.year}
                            </div>

                            {/* Header Ribbon: Phase & Institution */}
                            <div className="flex items-center justify-between gap-3 mb-4">
                              <span className="text-[10px] font-mono font-bold uppercase tracking-[0.22em] text-[#BE123C] bg-rose-50/90 px-3.5 py-1.5 rounded-full border border-rose-200 shadow-xs">
                                {m.phase} • {m.badge}
                              </span>
                              <span className="text-[11px] font-mono font-bold text-slate-500">
                                {m.institution}
                              </span>
                            </div>

                            {/* Year and Title */}
                            <div className="flex items-baseline gap-3 mb-2">
                              <span className="text-3xl sm:text-4xl font-serif font-extrabold text-[#0A1128] group-hover:scale-105 transition-transform inline-block">
                                {m.year}
                              </span>
                              <span className="h-2 w-2 rounded-full bg-[#BE123C] animate-ping" />
                            </div>

                            <h3 className="text-xl sm:text-2xl font-extrabold text-[#0A1128] group-hover:text-[#BE123C] transition-colors leading-snug tracking-tight">
                              {m.title}
                            </h3>

                            <p className="text-sm text-slate-600 mt-2.5 leading-relaxed font-normal">
                              {m.desc}
                            </p>

                            {/* Interactive Tags Row */}
                            <div className="mt-5 pt-4 border-t border-slate-100 flex flex-wrap gap-1.5">
                              {m.tags.map((tag, tIdx) => (
                                <span
                                  key={tIdx}
                                  className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-700 bg-slate-50 hover:bg-slate-100 border border-slate-200 px-3 py-1 rounded-lg transition-colors shadow-2xs"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>

                            {/* Kinetic Accent Line in Bottom of Card */}
                            <div className="absolute bottom-0 inset-x-0 h-1.5 bg-gradient-to-r from-[#0A1128] via-[#BE123C] to-[#E11D48] opacity-0 group-hover:opacity-100 transition-opacity" />
                          </motion.div>
                        </div>

                        {/* Center Node on Central Guided Spine */}
                        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 z-20 items-center justify-center">
                          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#0A1128] via-[#1E293B] to-[#BE123C] border-4 border-white shadow-xl shadow-navy/25 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                            <IconComp className="w-6 h-6 animate-pulse" />
                          </div>
                        </div>

                        {/* Right Side Spacer Container (for alternating balance) */}
                        <div className={`hidden md:block w-1/2 ${isLeft ? 'order-2 pl-14' : 'order-1 pr-14'}`}>
                          {/* Interactive Holographic Year Chip */}
                          <div className={`flex items-center gap-3 ${isLeft ? 'justify-start' : 'justify-end'}`}>
                            <div className="px-5 py-3 rounded-2xl bg-white/90 backdrop-blur-xl border border-slate-200/90 shadow-md text-left">
                              <span className="text-[10px] font-mono font-bold uppercase tracking-[0.24em] text-[#BE123C] block">
                                CLINICAL RECORD #{m.num}
                              </span>
                              <span className="text-xs font-extrabold text-slate-900 block mt-0.5">
                                {m.institution}
                              </span>
                            </div>
                          </div>
                        </div>

                      </div>
                    );
                  })}
                </div>
              </div>
            )}

          </div>
        </section>

        {/* 4. Luxury Direct Consultation Pavilion & Priority Access Suite */}
        <section className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto overflow-hidden">
          {/* Bespoke Luminous Solarium Pavilion & Radiant Focus Ring */}
          <SectionBackgroundMotion variant="about-cta" />

          <div className="relative p-8 sm:p-14 lg:p-16 rounded-[3rem] bg-gradient-to-br from-white/95 via-slate-50 to-white/90 text-slate-900 shadow-2xl border-2 border-slate-200/90 overflow-hidden backdrop-blur-xl">

            {/* Glowing Internal Ambient Flare */}
            <div className="absolute -top-20 -right-20 w-80 h-80 bg-gradient-to-bl from-[#E11D48]/15 via-[#0A1128]/10 to-transparent rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-gradient-to-tr from-[#BE123C]/15 via-slate-100/40 to-transparent rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10 text-left">

              {/* Left Column (7 cols): Clinical Credibility & Doctor Endorsement */}
              <div className="lg:col-span-7 space-y-6">

                {/* Director Header Crest */}
                <div className="flex items-center gap-3.5">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#0A1128] via-[#1E293B] to-[#BE123C] border-2 border-rose-300/40 shadow-lg flex items-center justify-center text-white shrink-0">
                    <Stethoscope className="w-7 h-7 stroke-[1.8]" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="relative flex h-2.5 w-2.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                      </span>
                      <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#BE123C] font-bold">
                        OPD Consultations Active Today
                      </span>
                    </div>
                    <span className="text-base font-extrabold text-[#0A1128] block">
                      Dr. Prakash Chand Shahi • DM (PGIMER) • MD (KGMU)
                    </span>
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl sm:text-4xl font-extrabold text-[#0A1128] tracking-tight leading-tight">
                    Schedule Your <span className="font-serif italic font-normal text-[#BE123C]">Priority Consultation</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    Experience compassionate, unhurried cardiovascular consultation directly with Gorakhpur's leading interventional cardiologist. Dedicated bedside ethics, zero unnecessary procedures, and transparent clinical second opinions.
                  </p>
                </div>

                {/* 3 Clinical Guarantees */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-1">
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="text-[10px] font-bold uppercase text-[#BE123C] block">Unhurried OPD</span>
                    <span className="text-xs font-bold text-slate-800">1-on-1 Bedside Care</span>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="text-[10px] font-bold uppercase text-[#BE123C] block">Transparent Angio</span>
                    <span className="text-xs font-bold text-slate-800">CD &amp; Report Review</span>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="text-[10px] font-bold uppercase text-[#BE123C] block">STEMI Code Blue</span>
                    <span className="text-xs font-bold text-slate-800">24/7 Cath Lab Triage</span>
                  </div>
                </div>

              </div>

              {/* Right Column (5 cols): Instant Action Command Center */}
              <div className="lg:col-span-5 p-6 sm:p-8 rounded-3xl bg-white/95 border-2 border-slate-200 shadow-xl space-y-5 text-left">

                <div className="space-y-1">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500 font-bold block">
                    OPD TIMINGS &amp; LOCATION
                  </span>
                  <div className="text-sm font-extrabold text-slate-900">
                    Mon — Sat • 10:00 AM – 8:00 PM
                  </div>
                  <div className="text-xs text-slate-600 font-medium">
                    Pulse Heart Centre, Betiahata, Gorakhpur
                  </div>
                </div>

                <div className="space-y-3 pt-2">
                  <Link
                    to="/contact"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-gradient-to-r from-[#0A1128] via-[#1E293B] to-[#BE123C] hover:from-[#BE123C] hover:to-[#0A1128] text-white text-xs font-bold uppercase tracking-wider shadow-lg shadow-navy/25 transition-all hover:-translate-y-0.5 border border-rose-300/40 text-center"
                  >
                    <Calendar className="w-4 h-4 text-white" />
                    <span>Request Priority OPD Pass</span>
                    <ArrowRight className="w-4 h-4 text-white" />
                  </Link>

                  <a
                    href="tel:+919876543210"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white hover:bg-slate-50 text-[#0A1128] text-xs font-bold uppercase tracking-wider border-2 border-slate-300 hover:border-[#BE123C] hover:text-[#BE123C] shadow-sm transition-all text-center"
                  >
                    <Phone className="w-4 h-4 text-[#BE123C]" />
                    <span>Emergency: +91 98765 43210</span>
                  </a>
                </div>

                <div className="pt-2 border-t border-slate-200 flex items-center justify-between text-[11px] text-slate-500 font-medium">
                  <span>Fast-Track OPD Entry</span>
                  <span className="font-mono text-[#BE123C] font-bold">&lt; 15 Min Triage</span>
                </div>

              </div>

            </div>

          </div>
        </section>

      </div>
    </div>
  );
}
