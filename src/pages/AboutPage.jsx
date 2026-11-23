import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Award, ShieldCheck, Building2, Users, HeartPulse,
  Target, CheckCircle2, ArrowRight, Clock, MapPin, Sparkles, Calendar, Play, Stethoscope
} from 'lucide-react';
import { PULSE_DATA } from '../data/pulseData';
import SectionCinematicVideo from '../components/SectionCinematicVideo';
import DoctorPlaceholder from '../components/DoctorPlaceholder';
import ThreeDImageCard from '../components/ThreeDImageCard';

export default function AboutPage() {
  const milestones = [
    { year: "2002", title: "Foundation of Clinical Devotion", desc: "Initiation of specialized cardiovascular care in Betiahata, Gorakhpur with compassionate bedside ethics." },
    { year: "2007", title: "Apex Medical Training at KGMU", desc: "MD General Medicine residency at King George's Medical University, Lucknow, solidifying clinical diagnostic depth." },
    { year: "2013", title: "Super-Specialty DM from PGIMER", desc: "Completion of DM Cardiology at PGIMER Chandigarh, introducing high-volume transradial intervention to eastern UP." },
    { year: "2018", title: "Flat-Panel Digital Cath Lab Commissioned", desc: "Installation of the Siemens Artis Zee digital catheterization suite, performing emergency primary angioplasties 24/7." },
    { year: "2023", title: "Next-Gen Cardiac Care Expansion", desc: "Advanced 24/7 Cardiac Emergency, Intra-Vascular Ultrasound (IVUS), Optical Coherence Tomography (OCT), and High-Dependency Cardiac ICU." }
  ];

  return (
    <div className="relative pt-28 pb-24 select-none bg-[#FAFBF9] overflow-hidden">

      {/* =========================================================================
          DESIGNED VISIBLE BACKGROUND: AMBIENT HOSPITAL VIDEO, PINE & ARCHITECTURAL GRID
         ========================================================================= */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Ambient 4K Hospital Interior Video Layer */}
        <div className="absolute inset-0 -z-10 overflow-hidden opacity-25 mix-blend-multiply">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            className="w-full h-full object-cover filter contrast-125 saturate-125"
          >
            <source src="/videos/about-hospital.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-[#FAFBF9]/80 via-transparent to-[#FAFBF9]/85" />
        </div>

        {/* Ambient Emerald & Warm Amber Diffusions */}
        <div className="absolute -top-32 right-10 w-[700px] h-[700px] bg-[#047857]/25 rounded-full blur-[120px]" />
        <div className="absolute top-1/3 -left-20 w-[600px] h-[600px] bg-[#064E3B]/20 rounded-full blur-[130px]" />
        <div className="absolute bottom-20 right-1/4 w-[500px] h-[500px] bg-[#D97706]/15 rounded-full blur-[110px]" />

        {/* Visible Architectural Hairline Blueprint Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#064E3B20_1.5px,transparent_1.5px),linear-gradient(to_bottom,#064E3B20_1.5px,transparent_1.5px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_65%_at_50%_30%,#000_75%,transparent_100%)]" />

        {/* Active Rotating Topographic Elevation Contour Rings */}
        <div className="absolute top-20 right-1/4 w-96 h-96 rounded-full border-2 border-[#064E3B]/30 hidden md:block animate-radar-sweep" />
        <div className="absolute top-28 right-[27%] w-72 h-72 rounded-full border-2 border-dashed border-[#022C22]/40 animate-rotate-reverse" />

        {/* Sweeping Laser Line & Floating Medical Crosses */}
        <div className="absolute inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#10B981] to-transparent shadow-[0_0_15px_#059669] opacity-40 animate-laser-v pointer-events-none" />
        <div className="absolute top-24 left-12 text-[#059669]/30 font-mono text-base font-bold animate-medical-cross-1 select-none">+</div>
        <div className="absolute bottom-32 right-16 text-[#059669]/25 font-mono text-base font-bold animate-medical-cross-2 select-none">+</div>
      </div>

      <div className="relative z-10">

        {/* 1. Master Editorial Page Header with Doctor Spotlight */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#064E3B] via-[#047857] to-[#047857] text-white text-xs font-mono font-medium shadow-md shadow-[#064E3B]/20">
            <Sparkles className="w-4 h-4 text-amber-300" />
            <span className="uppercase tracking-[0.2em]">Senior Consultant &amp; Interventional Cardiologist</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-[#064E3B] tracking-tight leading-[1.05]">
            Dr. Prakash Chand Shahi <br />
            <span className="font-serif italic font-normal text-[#047857]">DM Cardiology (PGIMER) • MD (KGMU)</span>
          </h1>

          <p className="text-sm sm:text-base font-semibold text-slate-800 max-w-2xl mx-auto leading-relaxed">
            Directing Pulse Heart Centre, Betiahata with 22+ years of apex clinical devotion and 15,000+ successful cardiac interventions.
          </p>

          {/* Grand Doctor Portrait & In-Action Photo Split Visual */}
          <div className="pt-2 grid grid-cols-1 md:grid-cols-12 gap-6 items-center text-left max-w-4xl mx-auto">
            {/* Doctor Photo Upload Placeholder Canvas */}
            <div className="md:col-span-5">
              <DoctorPlaceholder
                aspectRatio="aspect-[4/5]"
                showUploadTrigger={true}
              />
            </div>

            {/* In-Action Consultation Photo + Cath Lab Specs */}
            <div className="md:col-span-7 space-y-4">
              <ThreeDImageCard
                src="/images/cath-lab.jpg"
                image="/images/cath-lab.jpg"
                alt="Siemens Artis Zee Cath Lab"
                badge="INTERVENTIONAL CATH LAB"
                title="Siemens Artis Zee"
                stat="< 45 Min Door-To-Balloon"
                substat="Sub-mm Precision"
                aspectRatio="aspect-[16/10]"
                laserBeam={true}
                className="w-full"
              />

              {/* 3 Metric Pills */}
              <div className="grid grid-cols-3 gap-2 text-center">
                <div className="p-2.5 rounded-2xl bg-white border border-[#A7F3D0] shadow-xs">
                  <span className="text-base font-extrabold text-[#064E3B] block">22+ YRS</span>
                  <span className="text-[9px] font-bold text-slate-700 uppercase">Experience</span>
                </div>
                <div className="p-2.5 rounded-2xl bg-white border border-[#A7F3D0] shadow-xs">
                  <span className="text-base font-extrabold text-[#059669] block">15,000+</span>
                  <span className="text-[9px] font-bold text-slate-700 uppercase">Procedures</span>
                </div>
                <div className="p-2.5 rounded-2xl bg-white border border-[#34D399] shadow-xs">
                  <span className="text-base font-extrabold text-[#047857] block">99.4%</span>
                  <span className="text-[9px] font-bold text-slate-700 uppercase">Patency</span>
                </div>
              </div>
            </div>
          </div>

          {/* Cinematic Hospital Interior Video Console */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="pt-6 max-w-5xl mx-auto"
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
        </section>

        {/* 2. Pillars of Practice Grid with Dynamic Hexagonal Bio-Shield Lattice Background */}
        <section className="relative py-16 overflow-hidden border-y border-[#A7F3D0]/60 shadow-xs bg-gradient-to-b from-white via-[#F0FDF4]/30 to-white">
          {/* Animated Hexagonal Medical Lattice Layer */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
            <svg className="absolute inset-0 w-full h-full opacity-30" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="bioHexPattern" width="56" height="96" patternUnits="userSpaceOnUse" patternTransform="rotate(15)">
                  <path d="M28,0 L56,16 L56,48 L28,64 L0,48 L0,16 Z" fill="none" stroke="#047857" strokeWidth="1.2" />
                  <path d="M28,96 L56,80 L56,48 L28,64 L0,48 L0,80 Z" fill="none" stroke="#047857" strokeWidth="0.8" strokeDasharray="3 3" />
                  <circle cx="28" cy="32" r="3" fill="#059669" opacity="0.6" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#bioHexPattern)" />
            </svg>
            <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-[#059669]/20 rounded-full blur-[100px] animate-pulse" />
            <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-teal-400/20 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1.5s' }} />
            {/* Rotating CAD Coordinate Rings */}
            <div className="absolute top-10 left-10 w-72 h-72 rounded-full border-2 border-[#047857]/30 hidden md:block animate-gentle-cw" />
            <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full border-2 border-dashed border-[#10B981]/35 hidden md:block animate-gentle-ccw" />
            {/* Sweeping laser scanning beam */}
            <div className="absolute left-0 right-0 h-[2.5px] bg-gradient-to-r from-transparent via-[#10B981] to-transparent shadow-[0_0_15px_#059669] opacity-50 animate-laser-sweep" />
            {/* Floating medical crosses */}
            <div className="absolute top-12 left-12 text-[#059669]/35 font-mono text-base font-bold animate-medical-cross-1 select-none">+</div>
            <div className="absolute bottom-12 right-16 text-[#059669]/35 font-mono text-base font-bold animate-medical-cross-2 select-none">+</div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-xl mx-auto mb-10 space-y-2">
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#047857] bg-[#F0FDF4]/80 px-3.5 py-1 rounded-full">Ethical Framework</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#064E3B]">Core Pillars of Clinical Practice</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

              <div className="space-y-3">
                <ThreeDImageCard
                  src="/images/cath-lab.jpg"
                  image="/images/cath-lab.jpg"
                  alt="Cath Lab Mission"
                  badge="PILLAR 01"
                  title="Medical Mission"
                  stat="Zero Compromise"
                  substat="Tertiary Interventions"
                  aspectRatio="aspect-[16/10]"
                  laserBeam={true}
                />
                <div className="flex flex-wrap gap-1.5 justify-center">
                  <span className="text-[10px] font-semibold bg-white border border-[#A7F3D0] text-[#064E3B] px-2.5 py-1 rounded-md">Precision Angioplasty</span>
                  <span className="text-[10px] font-semibold bg-[#F0FDF4] text-[#047857] px-2.5 py-1 rounded-md">CD Review</span>
                </div>
              </div>

              <div className="space-y-3">
                <ThreeDImageCard
                  src="/images/doctor-bedside-consult.jpg"
                  image="/images/doctor-bedside-consult.jpg"
                  alt="Bedside Consult"
                  badge="PILLAR 02"
                  title="Clinical Philosophy"
                  stat="Unhurried Bedside"
                  substat="Ethical Guidance"
                  aspectRatio="aspect-[16/10]"
                  laserBeam={true}
                />
                <div className="flex flex-wrap gap-1.5 justify-center">
                  <span className="text-[10px] font-semibold bg-white border border-[#A7F3D0] text-[#064E3B] px-2.5 py-1 rounded-md">Direct Dialogue</span>
                  <span className="text-[10px] font-semibold bg-[#F0FDF4] text-[#047857] px-2.5 py-1 rounded-md">Clear Explanations</span>
                </div>
              </div>

              <div className="space-y-3">
                <ThreeDImageCard
                  src="/images/operation-theatre-laminar.jpg"
                  image="/images/operation-theatre-laminar.jpg"
                  alt="Sterility Protocols"
                  badge="PILLAR 03"
                  title="Evidence Protocols"
                  stat="NABH Sterility"
                  substat="ACC / AHA Standards"
                  aspectRatio="aspect-[16/10]"
                  laserBeam={true}
                />
                <div className="flex flex-wrap gap-1.5 justify-center">
                  <span className="text-[10px] font-semibold bg-white border border-[#A7F3D0] text-[#064E3B] px-2.5 py-1 rounded-md">Laminar Airflow</span>
                  <span className="text-[10px] font-semibold bg-[#F0FDF4] text-[#047857] px-2.5 py-1 rounded-md">Low Fluoroscopy</span>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 3. Milestones Timeline with Dynamic Vertical Neon Laser Cadence & Chronometer Background */}
        <section className="relative py-24 overflow-hidden bg-gradient-to-b from-[#FAFBF9] via-[#F0FDF4]/50 to-[#FAFBF9]">
          {/* Animated Chronology Background Systems */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
            {/* Luminous Glow Spheres */}
            <div className="absolute top-1/4 -left-20 w-[650px] h-[650px] bg-gradient-to-tr from-[#064E3B]/20 via-[#059669]/15 to-transparent rounded-full blur-[140px] animate-pulse-glow" />
            <div className="absolute bottom-10 -right-20 w-[650px] h-[650px] bg-gradient-to-bl from-[#10B981]/20 via-[#F0FDF4]/40 to-transparent rounded-full blur-[140px] animate-float-2" />
            
            {/* Precision Blueprint Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#064E3B18_1px,transparent_1px),linear-gradient(to_bottom,#064E3B18_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_85%_70%_at_50%_40%,#000_75%,transparent_100%)] pointer-events-none" />

            {/* Continuous Rotating CAD Technical Rings */}
            <div className="absolute top-16 -left-20 w-96 h-96 rounded-full border-2 border-[#047857]/30 hidden md:block animate-gentle-cw" />
            <div className="absolute top-24 -left-12 w-72 h-72 rounded-full border-2 border-dashed border-[#10B981]/40 hidden md:block animate-gentle-ccw" />
            <div className="absolute bottom-16 -right-20 w-96 h-96 rounded-full border-2 border-[#047857]/25 hidden md:block animate-gentle-ccw" />
            <div className="absolute bottom-24 -right-12 w-72 h-72 rounded-full border-2 border-dashed border-emerald-600/35 hidden md:block animate-gentle-cw" />

            {/* Active Sweeping Fluoroscopy Laser Beam */}
            <div className="absolute inset-x-0 h-[2.5px] bg-gradient-to-r from-transparent via-[#10B981] to-transparent shadow-[0_0_20px_#059669] opacity-50 animate-laser-sweep pointer-events-none" />

            {/* Floating Medical Crosshairs (+) */}
            <div className="absolute top-16 left-12 text-[#059669]/40 font-mono text-base font-bold animate-medical-cross-1 select-none">+</div>
            <div className="absolute top-36 right-16 text-[#059669]/40 font-mono text-base font-bold animate-medical-cross-2 select-none">+</div>
            <div className="absolute bottom-20 left-20 text-[#059669]/35 font-mono text-base font-bold animate-medical-cross-2 select-none">+</div>
            <div className="absolute bottom-32 right-32 text-[#059669]/35 font-mono text-base font-bold animate-medical-cross-1 select-none">+</div>

            {/* Center Flowing Vascular/ECG Timeline Lifeline Stream */}
            <svg className="absolute left-1/2 top-0 -translate-x-1/2 h-full w-[800px] opacity-45 pointer-events-none" viewBox="0 0 800 1200" fill="none">
              <path d="M400,0 L400,1200" stroke="#047857" strokeWidth="2.5" strokeDasharray="8 8" />
              <path d="M370,100 C430,220 370,340 400,460 C430,580 370,700 400,820 C430,940 370,1060 400,1180" stroke="#059669" strokeWidth="2.5" strokeDasharray="300" className="animate-flow-dash" />
              {/* Pulsing Cardiac Nodes at Each Milestone Height */}
              <circle cx="400" cy="180" r="10" fill="#10B981" className="animate-ping" />
              <circle cx="400" cy="390" r="10" fill="#059669" className="animate-ping" />
              <circle cx="400" cy="600" r="10" fill="#10B981" className="animate-ping" />
              <circle cx="400" cy="810" r="10" fill="#047857" className="animate-ping" />
              <circle cx="400" cy="1020" r="10" fill="#10B981" className="animate-ping" />
            </svg>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-xl mx-auto mb-14 space-y-2">
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#047857] bg-[#F0FDF4] border border-[#A7F3D0] px-3.5 py-1 rounded-full">Chronology</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#064E3B]">Two Decades of Clinical Milestones</h2>
            </div>

            <div className="space-y-6 max-w-4xl mx-auto">
              {milestones.map((m, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -32 : 32 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="p-6 sm:p-7 rounded-3xl bg-white/95 backdrop-blur-md border-2 border-[#A7F3D0] shadow-md hover:shadow-xl transition-all flex flex-col sm:flex-row items-start sm:items-center gap-6 text-left hover:-translate-y-0.5 group"
                >
                  <div className="flex items-center gap-3 shrink-0">
                    <span className="text-3xl font-extrabold font-mono text-[#047857] w-20 group-hover:text-[#059669] transition-colors">
                      {m.year}
                    </span>
                    <span className="w-3 h-3 rounded-full bg-[#10B981] animate-ping" />
                  </div>
                  <div className="border-l-2 border-[#A7F3D0] pl-6 space-y-1">
                    <h3 className="text-base font-bold text-[#064E3B]">{m.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed font-medium">{m.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Direct Consultation Callout with Doctor Spotlight & Pulsing Sonar Waves */}
        <section className="relative py-20 text-center max-w-5xl mx-auto px-4 overflow-hidden">
          {/* Animated Ambient Rings & Laser around the CTA container */}
          <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden" aria-hidden="true">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-[#059669]/20 via-[#10B981]/15 to-transparent rounded-full blur-[140px] animate-pulse-glow" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] rounded-full border border-[#059669]/25 animate-gentle-cw" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] rounded-full border-2 border-dashed border-[#10B981]/30 animate-gentle-ccw" />
            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[2px] bg-gradient-to-r from-transparent via-[#10B981] to-transparent shadow-[0_0_15px_#059669] opacity-40 animate-laser-sweep" />
          </div>

          <div className="relative p-8 sm:p-14 rounded-[2.5rem] bg-gradient-to-br from-white via-[#F0FDF4]/70 to-white text-slate-900 shadow-2xl border-2 border-[#A7F3D0] space-y-6 overflow-hidden">
            {/* Animated Radar Sonar Rings in Background inside Card */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] rounded-full border-2 border-[#059669]/20 animate-ping" style={{ animationDuration: '4s' }} />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-[#059669]/30 animate-radar-sweep" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[240px] h-[240px] rounded-full border border-[#10B981]/40" />
              {/* Flowing ECG Waveform Ribbon */}
              <svg className="absolute bottom-0 left-0 right-0 w-full h-16 opacity-35 pointer-events-none" viewBox="0 0 800 64" fill="none" preserveAspectRatio="none">
                <path d="M0,32 L200,32 L220,10 L235,55 L250,5 L265,45 L280,32 L500,32 L520,10 L535,55 L550,5 L565,45 L580,32 L800,32" stroke="#059669" strokeWidth="2.5" strokeDasharray="300" className="animate-flow-dash-fast" />
              </svg>
            </div>

            <div className="relative z-10 space-y-5">
              <div className="flex items-center justify-center gap-3">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#064E3B] via-[#047857] to-[#047857] border-2 border-[#A7F3D0] shadow-md flex items-center justify-center text-[#A7F3D0] shrink-0">
                  <Stethoscope className="w-7 h-7 stroke-[1.8]" />
                </div>
                <div className="text-left">
                  <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#064E3B] font-bold block">
                    Direct Outpatient Access • Gorakhpur
                  </span>
                  <span className="text-sm font-extrabold text-[#064E3B] block">
                    Dr. Prakash Chand Shahi • DM Cardiology PGIMER
                  </span>
                </div>
              </div>

              <h3 className="text-2xl sm:text-4xl font-extrabold text-[#064E3B]">
                Consult <span className="font-serif italic font-normal text-[#059669]">Dr. Prakash Chand Shahi</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-700 max-w-lg mx-auto font-medium leading-relaxed">
                Pulse Heart Centre, Betiahata, Gorakhpur. OPD consultations run Monday to Saturday, 10:00 AM – 8:00 PM.
              </p>
              <div className="pt-2 flex items-center justify-center gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#064E3B] via-[#047857] to-[#047857] hover:from-[#022C22] hover:to-[#064E3B] text-[#A7F3D0] text-xs font-bold uppercase tracking-wider shadow-lg shadow-[#064E3B]/25 transition-all hover:scale-105 border border-[#A7F3D0]/40"
                >
                  <Calendar className="w-4 h-4 text-[#34D399]" />
                  <span>Request Priority OPD Pass</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
