import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Building2, MapPin, Clock, Phone, Sparkles, Calendar, Navigation, ShieldCheck, CheckCircle2, ArrowRight, Stethoscope } from 'lucide-react';
import PulseCentreSection from '../components/PulseCentreSection';
import PatientExperienceSection from '../components/PatientExperienceSection';
import { PULSE_DATA } from '../data/pulseData';
import SectionCinematicVideo from '../components/SectionCinematicVideo';
import SectionBackgroundMotion from '../components/SectionBackgroundMotion';

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
    <div className="relative pt-32 pb-24 select-none bg-gradient-to-b from-[#FDFBF7] via-[#FAF7F0] to-[#FDF5EE] overflow-hidden">

      {/* Bespoke Campus Masterplan Background: Laminar Airflow Streams & Blueprint Grid */}
      <SectionBackgroundMotion variant="hospital-hero" />

      {/* =====================================================================
          CONTENT
         ===================================================================== */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* 1. Master Editorial Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <motion.div {...fadeUp(0)} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#BE123C] via-[#E11D48] to-[#FB923C] text-white text-xs font-mono font-medium shadow-md shadow-rose-600/20">
            <Building2 className="w-4 h-4 text-amber-200" />
            <span className="uppercase tracking-[0.2em]">Pulse Heart Centre • Betiahata</span>
          </motion.div>

          <motion.h1 {...fadeUp(0.1)} className="text-4xl sm:text-6xl lg:text-7xl font-semibold text-slate-950 tracking-tight leading-[1.05]">
            Clinical Facilities &amp; <br />
            <span className="font-serif italic font-normal text-[#BE123C]">Outpatient Architecture</span>
          </motion.h1>

          {/* Director Badge with Stethoscope Crest */}
          <div className="pt-1 flex items-center justify-center gap-3">
            <div className="flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-white border-2 border-orange-200 shadow-md">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#BE123C] to-[#FB923C] border border-rose-200 flex items-center justify-center text-white shrink-0">
                <Stethoscope className="w-5 h-5 stroke-[1.8]" />
              </div>
              <div className="text-left">
                <span className="text-xs font-extrabold text-slate-900 block">
                  Clinical Director: Dr. Prakash Chand Shahi
                </span>
                <span className="text-[10px] font-mono text-[#C2410C] font-bold block">
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
        <div className="my-20 p-6 sm:p-10 rounded-[3rem] bg-gradient-to-b from-[#FFF8F5]/80 via-white/90 to-[#FFF3EE]/70 border-2 border-orange-200/80 shadow-xl relative overflow-hidden">
          {/* Bespoke Tri-Suite Cleanroom Isolation & Laminar Airflow Streams */}
          <SectionBackgroundMotion variant="hospital-suites" />

          <div className="relative z-10">
            <motion.div {...fadeUp(0)} className="mb-10 text-center max-w-2xl mx-auto space-y-2">
              <span className="text-xs font-mono font-medium uppercase tracking-wider text-[#C2410C] bg-orange-50 px-3 py-1 rounded-full border border-orange-200">
                Clinical Environments
              </span>
              <h2 className="text-3xl sm:text-4xl font-semibold text-slate-950 tracking-tight">
                Advanced Clinical Suites
              </h2>
              <p className="text-xs sm:text-sm text-slate-700 font-medium">
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
                  className="group relative rounded-[2rem] bg-white/85 backdrop-blur-xl p-4 border border-orange-200/90 shadow-md hover:shadow-2xl hover:border-orange-400 hover:bg-white/95 transition-all duration-500 space-y-4 text-left"
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
                    <h3 className="text-base font-bold text-slate-900 tracking-tight group-hover:text-[#EA580C] transition-colors">{item.title}</h3>
                    <span className="text-[10px] font-mono font-bold text-[#C2410C] bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200/80">{item.category}</span>
                  </div>
                </motion.div>
              ))}
            </div>
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
          className="mt-20 p-8 sm:p-12 rounded-[2.5rem] bg-gradient-to-br from-white via-orange-50/40 to-white text-slate-900 shadow-xl border-2 border-orange-200 text-center max-w-4xl mx-auto space-y-5 relative overflow-hidden"
        >
          {/* Bespoke Betiahata Gateway & Radiant Geographic Beacon */}
          <SectionBackgroundMotion variant="hospital-cta" />
          <div className="relative z-10 space-y-5">
            <h3 className="text-3xl sm:text-4xl font-semibold text-slate-950">
              Visit Pulse Heart Centre in <span className="font-serif italic font-normal text-[#BE123C]">Betiahata, Gorakhpur</span>
            </h3>
            <p className="text-sm text-slate-600 max-w-xl mx-auto font-medium leading-relaxed">
              Conveniently located at Betiahata, Gorakhpur. Outpatient consultations run Monday through Saturday from 10:00 AM to 8:00 PM.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#BE123C] via-[#E11D48] to-[#FB923C] hover:from-[#9F1239] hover:to-[#BE123C] text-white text-xs font-semibold uppercase tracking-wider shadow-md shadow-rose-600/20 transition-all hover:scale-105"
              >
                <Calendar className="w-4 h-4 text-amber-200" />
                <span>Book Consultation Pass</span>
              </Link>
              <a
                href="tel:+919876543210"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white hover:bg-orange-50/60 text-[#BE123C] border-2 border-orange-200 text-xs font-semibold uppercase tracking-wider transition-all shadow-xs"
              >
                <Phone className="w-4 h-4 text-[#EA580C]" />
                <span>Emergency / OPD Helpline</span>
              </a>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
