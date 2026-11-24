import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ArrowRight, ShieldCheck, Activity, Award, Phone, CheckCircle2, ChevronRight, Clock, MapPin, Sparkles } from 'lucide-react';
import DoctorPlaceholder from './DoctorPlaceholder';
import SculpturalCardiac3D from './SculpturalCardiac3D';
import { PULSE_DATA } from '../data/pulseData';

/**
 * HeroSection: World-Class Bold Redesign with Advanced Motion
 * Motion Features:
 * - Interactive mouse-responsive parallax depth
 * - Slowly floating anatomical 3D heart with pulse rhythm
 * - Animated violet, electric cyan, and soft coral gradient lighting
 * - Animated ECG telemetry polyline
 * - Floating badges with subtle staggered bobbing
 * - Smooth card elevations on hover
 */
export default function HeroSection() {
  const { doctor, clinic } = PULSE_DATA;
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { clientX, clientY, currentTarget } = e;
    const rect = currentTarget.getBoundingClientRect();
    const x = (clientX - (rect.left + rect.width / 2)) / 35;
    const y = (clientY - (rect.top + rect.height / 2)) / 35;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  const keyStats = [
    { value: '22+', label: 'Years of Experience', desc: 'Dedicated Cardiac Care in Gorakhpur' },
    { value: '15,000+', label: 'Angiograms Evaluated', desc: 'Sub-Millimeter Lesion Precision' },
    { value: '99.4%', label: 'Vessel Patency Rate', desc: 'Transradial Stenting Success' },
    { value: 'DM & MD', label: 'Apex Institutions', desc: 'PGIMER Chandigarh & KGMU Alumni' },
  ];

  return (
    <section
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative pt-32 pb-20 lg:pt-36 lg:pb-28 overflow-hidden select-none transition-transform duration-300 ease-out"
    >

      {/* =========================================================================
          ANIMATED HERO BACKGROUND ENVIRONMENT (Mouse Responsive & Ambient)
         ========================================================================= */}
      <div
        className="absolute inset-0 pointer-events-none -z-10 overflow-hidden"
        style={{
          transform: `translate3d(${mousePos.x * 0.8}px, ${mousePos.y * 0.8}px, 0)`,
          transition: 'transform 400ms cubic-bezier(0.16, 1, 0.3, 1)'
        }}
      >
        {/* Floating Violet & Purple Morphing Glow */}
        <div className="absolute top-10 left-1/4 w-[750px] h-[750px] bg-gradient-to-tr from-purple-600/25 via-violet-500/20 to-indigo-600/20 rounded-full blur-[160px] animate-morph animate-float-1" />

        {/* Electric Cyan & Azure Floating Orb */}
        <div className="absolute top-1/3 right-10 w-[700px] h-[700px] bg-gradient-to-bl from-cyan-400/25 via-sky-400/20 to-blue-600/20 rounded-full blur-[160px] animate-float-2" />

        {/* Coral Rose Pulsing Ambient Accent */}
        <div className="absolute -bottom-20 left-10 w-[600px] h-[600px] bg-gradient-to-r from-rose-500/20 via-pink-400/15 to-purple-500/15 rounded-full blur-[170px] animate-float-3" />

        {/* Animated Continuous Cardiac ECG Pulse Line */}
        <svg className="absolute inset-0 w-full h-full opacity-40" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M -50,680 L 180,680 L 200,680 L 210,650 L 220,720 L 235,600 L 250,740 L 260,665 L 275,680 L 500,680 L 700,680 L 720,680 L 730,650 L 740,720 L 755,600 L 770,740 L 780,665 L 795,680 L 1100,680 L 1300,680 L 1320,680 L 1330,650 L 1340,720 L 1355,600 L 1370,740 L 1380,665 L 1395,680 L 1800,680 L 2300,680"
            fill="none"
            stroke="#8B5CF6"
            strokeWidth="2"
            strokeLinecap="round"
            className="animate-ecg-dash"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Top Status & Location Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-xs hover:shadow-md transition-all">
            <span className="w-2.5 h-2.5 rounded-full bg-[#0EA5E9 animate-ping" />
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-900">
              Pulse Heart Centre • Betiahata, Gorakhpur
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs font-semibold text-slate-700">
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-purple-700" />
              <span>Mon – Sat: 10:00 AM – 8:00 PM</span>
            </span>
            <span className="hidden sm:inline text-slate-300">•</span>
            <a href="tel:+919876543210" className="hidden sm:flex items-center gap-1.5 text-purple-900 hover:text-purple-700 font-bold transition-transform hover:scale-105">
              <Phone className="w-3.5 h-3.5 text-purple-700" />
              <span>+91 98765 43210</span>
            </a>
          </div>
        </div>

        {/* Master Headline & Lead-In (Bold, High-Contrast Typography) */}
        <div className="max-w-4xl text-left space-y-5 mb-12">

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-100/80 border border-purple-200 text-purple-900 text-xs font-mono font-bold animate-float-bob">
            <Sparkles className="w-3.5 h-3.5 text-purple-700" />
            <span>Senior Consultant & Interventional Cardiologist</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-slate-950 tracking-tight leading-[1.05]">
            Advanced Heart Care. <br />
            <span className="bg-gradient-to-r from-purple-700 via-violet-600 to-indigo-600 bg-clip-text text-transparent font-serif italic font-normal">
              World-Class Precision.
            </span>
          </h1>

          <p className="text-base sm:text-xl font-medium text-slate-700 max-w-3xl leading-relaxed">
            Directed by <strong>Dr. Prakash Chand Shahi</strong> (DM Cardiology PGIMER, MD KGMU). Combining apex institutional catheterization training with over two decades of compassionate clinical devotion at Pulse Heart Centre, Betiahata.
          </p>

          {/* Quick Action CTA Group */}
          <div className="pt-2 flex flex-wrap items-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-gradient-to-r from-purple-700 via-indigo-600 to-purple-800 hover:from-purple-800 hover:to-indigo-700 text-white font-semibold text-xs tracking-wider uppercase shadow-lg shadow-purple-500/25 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:scale-102"
            >
              <Calendar className="w-4 h-4 text-purple-200" />
              <span>Book Priority Consultation</span>
              <ArrowRight className="w-4 h-4 text-purple-200 ml-1 transition-transform group-hover:translate-x-1" />
            </Link>

            <a
              href="tel:+919876543210"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-white hover:bg-purple-50 text-slate-900 hover:text-purple-900 font-semibold text-xs tracking-wider uppercase border-2 border-purple-200/80 shadow-xs hover:shadow-md transition-all duration-300 hover:-translate-y-0.5"
            >
              <Phone className="w-4 h-4 text-purple-700" />
              <span>Direct OPD Helpline</span>
            </a>

            <Link
              to="/treatments"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-purple-800 hover:text-purple-950 px-3 py-2 transition-colors uppercase tracking-wider group"
            >
              <span>Explore Treatments</span>
              <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* =========================================================================
            ARTISTIC HERO SHOWCASE CLUSTER:
            - Left: 3D Anatomical Heart with Live Contraction & Interactive Controls
            - Right: Dedicated 45% Doctor Portrait Space with Official Credentials
            - Floating Badges & Real Medical Photography Tags
           ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mt-6">

          {/* Left Column (6 cols): 3D Heart Canvas + Clinical Highlights */}
          <div className="lg:col-span-6 space-y-6">

            {/* 3D Heart Card with Interactive Depth */}
            <div
              className="relative rounded-[2.5rem] bg-white/95 backdrop-blur-xl p-6 border-2 border-slate-200/90 shadow-layered card-motion-interactive text-left space-y-4"
              style={{
                transform: `perspective(1000px) rotateX(${mousePos.y * -0.2}deg) rotateY(${mousePos.x * 0.2}deg)`,
              }}
            >

              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-600 animate-pulse" />
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-900">
                    Live 3D Cardiac Anatomy
                  </span>
                </div>
                <span className="px-3 py-1 rounded-full bg-purple-50 text-[10px] font-mono font-bold text-purple-900 border border-purple-200">
                  72 BPM Active Rhythm
                </span>
              </div>

              {/* Three.js Canvas Container */}
              <div className="w-full h-64 sm:h-72 rounded-2xl overflow-hidden bg-gradient-to-b from-slate-50 to-purple-50/30 border border-slate-100 relative group cursor-grab active:cursor-grabbing">
                <SculpturalCardiac3D className="w-full h-full" />
                <div className="absolute bottom-3 left-3 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-[10px] font-mono font-medium text-slate-700 shadow-xs group-hover:bg-purple-700 group-hover:text-white transition-colors border border-purple-100">
                  Drag to rotate 360° • Scroll to zoom
                </div>
              </div>

              <div className="space-y-1">
                <h3 className="text-lg font-extrabold text-slate-950 tracking-tight">
                  Coronary Hemodynamics & Catheter Access
                </h3>
                <p className="text-xs font-medium text-slate-600 leading-relaxed">
                  Interactive visualization of the aortic arch, Left Anterior Descending (LAD), and Right Coronary Artery (RCA) treated during transradial catheterization.
                </p>
              </div>

            </div>

            {/* Supporting Real Medical Photography Banner */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

              <div className="group relative rounded-2xl overflow-hidden bg-white p-3 border border-purple-100 shadow-sm text-left transition-all duration-400 hover:shadow-lg hover:-translate-y-1">
                <div className="relative aspect-[16/10] rounded-xl overflow-hidden mb-2">
                  <img
                    src="/images/cath-lab.jpg"
                    alt="Pulse Heart Centre Cath Lab"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                  <span className="absolute bottom-2 left-2 text-[10px] font-mono font-semibold text-purple-900 bg-white/95 border border-purple-200 px-2 py-0.5 rounded-md shadow-xs">
                    CATH LAB
                  </span>
                </div>
                <h4 className="text-xs font-extrabold text-slate-950">
                  Radial Angioplasty
                </h4>
                <p className="text-[11px] font-medium text-slate-500">
                  Minimally invasive stenting
                </p>
              </div>

              <div className="group relative rounded-2xl overflow-hidden bg-white p-3 border border-purple-100 shadow-sm text-left transition-all duration-400 hover:shadow-lg hover:-translate-y-1">
                <div className="relative aspect-[16/10] rounded-xl overflow-hidden mb-2">
                  <img
                    src="/images/angiogram-scan.jpg"
                    alt="Coronary Angiogram Fluoroscopy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                  <span className="absolute bottom-2 left-2 text-[10px] font-mono font-semibold text-sky-900 bg-white/95 border border-sky-200 px-2 py-0.5 rounded-md shadow-xs">
                    FLUOROSCOPY
                  </span>
                </div>
                <h4 className="text-xs font-extrabold text-slate-950">
                  Coronary Angiogram
                </h4>
                <p className="text-[11px] font-medium text-slate-500">
                  Sub-millimeter stenosis mapping
                </p>
              </div>

            </div>

          </div>

          {/* Right Column (6 cols): Dedicated 45% Empty Doctor Portrait Niche */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <div
              className="w-full max-w-lg transition-transform duration-500 ease-out"
              style={{
                transform: `perspective(1000px) rotateY(${mousePos.x * -0.15}deg)`,
              }}
            >
              <DoctorPlaceholder
                className="w-full"
                aspectRatio="aspect-[4/5]"
                showUploadTrigger={true}
              />
            </div>
          </div>

        </div>

        {/* Executive Clinical Statistics Bar */}
        <div className="mt-16 p-6 sm:p-8 rounded-[2rem] bg-white/95 backdrop-blur-xl border-2 border-slate-200/90 shadow-layered hover:shadow-layered-hover transition-all duration-500">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {keyStats.map((stat, idx) => (
              <div key={idx} className="space-y-1 group cursor-default">
                <span className="text-3xl sm:text-5xl font-extrabold text-slate-950 font-serif italic block transition-transform group-hover:scale-110 group-hover:text-purple-700 duration-300">
                  {stat.value}
                </span>
                <span className="text-xs font-bold text-slate-900 uppercase tracking-wide block">
                  {stat.label}
                </span>
                <span className="text-[11px] font-medium text-slate-500 block">
                  {stat.desc}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>

    </section>
  );
}
