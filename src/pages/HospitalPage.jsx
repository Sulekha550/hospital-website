import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Building2, MapPin, Clock, Phone, Sparkles, Calendar, Navigation, ShieldCheck, CheckCircle2, ArrowRight, Stethoscope } from 'lucide-react';
import PulseCentreSection from '../components/PulseCentreSection';
import PatientExperienceSection from '../components/PatientExperienceSection';
import { PULSE_DATA } from '../data/pulseData';
import SectionCinematicVideo from '../components/SectionCinematicVideo';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 36 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.85, delay, ease: [0.16, 1, 0.3, 1] },
});

export default function HospitalPage() {
  const { clinic, doctor } = PULSE_DATA;

  const facilityGallery = [
    {
      title: 'Digital Catheterization Lab',
      category: 'INTERVENTIONAL SUITE',
      image: '/images/cath-lab.jpg',
      videoUrl: '/videos/facilities-walkthrough.mp4',
      type: 'facilities-walkthrough',
      desc: 'Sub-millimeter C-Arm fluoroscopy for radial angioplasty, stenting, and pacemaker implantation.',
    },
    {
      title: 'Fluoroscopy Stenosis Mapping',
      category: 'DIAGNOSTIC CINE',
      image: '/images/stent-catheter-fluoroscopy.jpg',
      videoUrl: '/videos/cardiac-catheterization.mp4',
      type: 'cardiac-catheterization',
      desc: 'Dynamic vessel imaging verifying luminal diameter and coronary perfusion.',
    },
    {
      title: 'Pulse Heart Centre Architecture',
      category: 'OUTPATIENT PAVILION',
      image: '/images/pulse-betiahata-campus.jpg',
      videoUrl: '/videos/about-hospital.mp4',
      type: 'about-hospital',
      desc: 'Centrally located in Betiahata, Gorakhpur with peaceful consultation suites and diagnostic rooms.',
    },
  ];

  return (
    <div className="relative pt-32 pb-24 select-none bg-[#FAFBF9] overflow-hidden">

      {/* =====================================================================
          ANIMATED ARCHITECTURAL BACKGROUND WITH AMBIENT VIDEO
         ===================================================================== */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">

        {/* Ambient Architectural Video Background Layer */}
        <div className="absolute inset-0 z-0 overflow-hidden opacity-25 mix-blend-multiply">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            className="w-full h-full object-cover scale-105"
          >
            <source src="/videos/facilities-walkthrough.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-[#FAFBF9]/80 via-transparent to-[#FAFBF9]/90" />
        </div>

        {/* Soft Ambient Emerald Glow Spheres */}
        <div className="absolute -top-32 right-0 w-[750px] h-[750px] bg-gradient-to-bl from-[#059669]/25 via-teal-300/18 to-transparent rounded-full blur-[160px] animate-orb-1" />
        <div className="absolute top-1/2 -left-40 w-[650px] h-[650px] bg-gradient-to-tr from-[#064E3B]/20 via-[#047857]/15 to-transparent rounded-full blur-[150px] animate-orb-2" />
        <div className="absolute -bottom-20 right-1/4 w-[500px] h-[500px] bg-amber-400/15 rounded-full blur-[130px]" />

        {/* Moving Architectural Grid Lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#064E3B22_1px,transparent_1px),linear-gradient(to_bottom,#064E3B22_1px,transparent_1px)] bg-[size:5rem_5rem] animate-arch-grid [mask-image:radial-gradient(ellipse_85%_70%_at_50%_25%,#000_65%,transparent_100%)]" />

        {/* Dot Matrix */}
        <div className="absolute inset-0 bg-[radial-gradient(#04785725_1.5px,transparent_1.5px)] bg-[size:36px_36px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_20%,#000_75%,transparent_100%)]" />

        {/* Rotating Topographic Elevation Rings (top-right) */}
        <div className="absolute top-20 right-10 w-96 h-96 rounded-full border-2 border-[#022C22]/30 hidden lg:block animate-gentle-cw" />
        <div className="absolute top-28 right-16 w-64 h-64 rounded-full border-2 border-dashed border-[#064E3B]/40 hidden lg:block animate-gentle-ccw" />
        <div className="absolute top-40 right-24 w-32 h-32 rounded-full border border-[#059669]/45 hidden lg:block" />

        {/* Rotating Topographic Rings (bottom-left) */}
        <div className="absolute bottom-20 left-10 w-72 h-72 rounded-full border-2 border-[#022C22]/25 hidden lg:block animate-gentle-ccw" />
        <div className="absolute bottom-28 left-16 w-48 h-48 rounded-full border-2 border-dashed border-amber-600/35 hidden lg:block animate-gentle-cw" />

        {/* Dynamic Sweeping Architectural Laser Beam */}
        <div className="absolute left-0 right-0 h-[2.5px] bg-gradient-to-r from-transparent via-[#047857] to-transparent shadow-[0_0_20px_#059669] opacity-50 animate-laser-sweep pointer-events-none" />

        {/* Animated SVG architectural lines */}
        <svg className="absolute inset-0 w-full h-full opacity-45" viewBox="0 0 1440 900" fill="none" preserveAspectRatio="none">
          <path
            d="M0,100 L200,100 L200,300 L400,300 L400,500 L600,500 L600,700 L800,700"
            stroke="#047857" strokeWidth="2" fill="none"
            strokeDasharray="8 6"
            className="animate-contact-dash"
          />
          <path
            d="M1440,800 L1240,800 L1240,600 L1040,600 L1040,400 L840,400 L840,200 L640,200"
            stroke="#D97706" strokeWidth="2" fill="none"
            strokeDasharray="6 8"
            className="animate-contact-dash"
            style={{ animationDelay: '1.5s' }}
          />
        </svg>
      </div>

      {/* =====================================================================
          CONTENT
         ===================================================================== */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* 1. Master Editorial Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <motion.div {...fadeUp(0)} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#064E3B] via-[#047857] to-[#047857] text-white text-xs font-mono font-medium shadow-md shadow-[#064E3B]/20">
            <Building2 className="w-4 h-4 text-amber-300" />
            <span className="uppercase tracking-[0.2em]">Pulse Heart Centre • Betiahata</span>
          </motion.div>

          <motion.h1 {...fadeUp(0.1)} className="text-4xl sm:text-6xl lg:text-7xl font-semibold text-[#064E3B] tracking-tight leading-[1.05]">
            Clinical Facilities &amp; <br />
            <span className="font-serif italic font-normal text-[#059669]">Outpatient Architecture</span>
          </motion.h1>

          {/* Director Badge with Stethoscope Crest */}
          <div className="pt-1 flex items-center justify-center gap-3">
            <div className="flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-white border-2 border-[#A7F3D0] shadow-md">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#064E3B] to-[#047857] border border-[#A7F3D0] flex items-center justify-center text-[#A7F3D0] shrink-0">
                <Stethoscope className="w-5 h-5 stroke-[1.8]" />
              </div>
              <div className="text-left">
                <span className="text-xs font-extrabold text-[#064E3B] block">
                  Clinical Director: Dr. Prakash Chand Shahi
                </span>
                <span className="text-[10px] font-mono text-[#047857] font-bold block">
                  DM Cardiology (PGIMER) • MD (KGMU Lucknow)
                </span>
              </div>
            </div>
          </div>

          <motion.p {...fadeUp(0.2)} className="text-sm sm:text-base text-slate-800 font-semibold max-w-2xl mx-auto leading-relaxed">
            Modern outpatient clinical pavilion, Siemens Cath-Lab, and consultation suites directed personally by Dr. Shahi.
          </motion.p>

          {/* Virtual Facility Video Tour Console */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="pt-6 max-w-5xl mx-auto"
          >
            <SectionCinematicVideo
              type="facilities-walkthrough"
              videoUrl="/videos/facilities-walkthrough.mp4"
              styleVariant="panoramic-stage"
              posterImage="/images/operation-theatre-laminar.jpg"
              title="Siemens Artis Zee Fluoroscopy Suite"
              subtitle="Flat-Panel C-Arm Virtual Tour • 60 FPS"
              specs="Class-100 Laminar Cleanroom • Sub-Millimeter Spatial Resolution"
              aspectRatio="aspect-[16/8] sm:aspect-[21/9]"
            />
          </motion.div>
        </div>

        {/* 2. Facility Architecture & Overlapping Highlights */}
        <PulseCentreSection />

        {/* 3. Full-Width Clinical Equipment & Facility Gallery */}
        <div className="my-20">
          <motion.div {...fadeUp(0)} className="mb-10 text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-mono font-medium uppercase tracking-wider text-[#047857] bg-[#F0FDF4] px-3 py-1 rounded-full">
              Clinical Environments
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#064E3B] tracking-tight">
              Advanced Clinical Suites
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 font-medium">
              Explore the high-precision equipment and sterile environments supporting every patient intervention.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {facilityGallery.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.8, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group relative rounded-[2rem] bg-white p-4 border border-[#A7F3D0]/60 shadow-md hover:shadow-2xl hover:border-[#A7F3D0] transition-all duration-500 space-y-4 text-left"
              >
                <SectionCinematicVideo
                  type={item.type}
                  videoUrl={item.videoUrl}
                  styleVariant="floating-3d"
                  posterImage={item.image}
                  title={item.title}
                  subtitle={item.category}
                  specs={item.desc}
                  aspectRatio="aspect-[16/10]"
                />
                <div className="px-1 flex items-center justify-between">
                  <h3 className="text-base font-bold text-[#064E3B] tracking-tight">{item.title}</h3>
                  <span className="text-[10px] font-mono font-bold text-[#047857] bg-[#F0FDF4] px-2.5 py-1 rounded-md border border-[#A7F3D0]/60">{item.category}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 4. Patient Experience & Pre-Visit Checklist */}
        <div className="my-16">
          <PatientExperienceSection />
        </div>

        {/* 5. Direct OPD Directions & Priority Booking Callout */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mt-20 p-8 sm:p-12 rounded-[2.5rem] bg-gradient-to-br from-white via-[#F0FDF4]/50 to-white text-slate-900 shadow-xl border-2 border-[#A7F3D0] text-center max-w-4xl mx-auto space-y-5 relative overflow-hidden"
        >
          {/* Subtle animated bg inside CTA */}
          <div className="absolute inset-0 bg-[radial-gradient(#04785708_2px,transparent_2px)] bg-[size:28px_28px] pointer-events-none" />
          <div className="relative z-10 space-y-5">
            <h3 className="text-3xl sm:text-4xl font-semibold text-[#064E3B]">
              Visit Pulse Heart Centre in <span className="font-serif italic font-normal text-[#047857]">Betiahata, Gorakhpur</span>
            </h3>
            <p className="text-sm text-slate-600 max-w-xl mx-auto font-medium leading-relaxed">
              Conveniently located at Betiahata, Gorakhpur. Outpatient consultations run Monday through Saturday from 10:00 AM to 8:00 PM.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#064E3B] via-[#047857] to-[#047857] hover:from-[#022C22] hover:to-[#064E3B] text-white text-xs font-semibold uppercase tracking-wider shadow-md shadow-[#064E3B]/20 transition-all"
              >
                <Calendar className="w-4 h-4 text-amber-300" />
                <span>Book Consultation Pass</span>
              </Link>
              <a
                href="tel:+919876543210"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white hover:bg-[#F0FDF4] text-[#064E3B] border-2 border-[#A7F3D0] text-xs font-semibold uppercase tracking-wider transition-all shadow-sm"
              >
                <Phone className="w-4 h-4 text-[#047857]" />
                <span>Emergency / OPD Helpline</span>
              </a>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
