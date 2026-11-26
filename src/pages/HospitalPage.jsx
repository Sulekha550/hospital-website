import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Building2, MapPin, Clock, Phone, Sparkles, Calendar, Navigation, ShieldCheck, CheckCircle2, ArrowRight, Stethoscope } from 'lucide-react';
import PulseCentreSection from '../components/PulseCentreSection';
import PatientExperienceSection from '../components/PatientExperienceSection';
import { PULSE_DATA } from '../data/pulseData';
import SectionCinematicVideo from '../components/SectionCinematicVideo';
import SectionBackgroundMotion from '../components/SectionBackgroundMotion';
import Interactive3DTilt from '../components/Interactive3DTilt';
import ScrollReveal from '../components/ScrollReveal';

export default function HospitalPage() {
  const { clinic, doctor } = PULSE_DATA;

  const facilityGallery = [
    {
      title: 'Modern Cath Lab',
      category: 'HEART PROCEDURE ROOM',
      image: '/images/doctor-cathlab-procedure.jpg',
      videoUrl: '/videos/facilities-walkthrough.mp4',
      type: 'facilities-walkthrough',
      desc: 'Dr. Shahi opening blocked heart arteries safely through the wrist.',
    },
    {
      title: 'Heart Scan & Guidance',
      category: 'FAMILY CONSULTATION',
      image: '/images/doctor-angiogram-explain.jpg',
      videoUrl: '/videos/cardiac-catheterization.mp4',
      type: 'cardiac-catheterization',
      desc: 'Dr. Shahi personally explains the heart scan video clearly to patients and families.',
    },
    {
      title: 'Recovery & OPD Care',
      category: 'OUTPATIENT CLINIC',
      image: '/images/doctor-icu-rounds.jpg',
      videoUrl: '/videos/about-hospital.mp4',
      type: 'about-hospital',
      desc: 'Easy-to-reach centre in Betiahata, Gorakhpur with personal recovery checkups by Dr. Shahi.',
    },
  ];

  return (
    <div className="relative pt-32 pb-24 select-none bg-gradient-to-b from-[#FAF9F6] via-[#F8FAFC] to-[#F1F5F9] overflow-hidden">

      {/* Bespoke Campus Masterplan Background: Laminar Airflow Streams & Blueprint Grid */}
      <SectionBackgroundMotion variant="hospital-hero" />

      {/* =====================================================================
          CONTENT
         ===================================================================== */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* 1. Master Editorial Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <ScrollReveal animation="fade-down">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#0A1128] via-[#1E293B] to-[#BE123C] text-white text-xs font-mono font-medium shadow-md shadow-navy/20 border border-rose-300/30">
              <Building2 className="w-4 h-4 text-rose-300" />
              <span className="uppercase tracking-[0.2em]">Pulse Heart Centre • Betiahata</span>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={0.1}>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-[#0A1128] tracking-tight leading-[1.05]">
              Modern Hospital &amp; <br />
              <span className="font-serif italic font-normal text-[#BE123C]">Heart Care Facilities</span>
            </h1>
          </ScrollReveal>

          {/* Director Portrait Badge (Unique to Hospital Page) */}
          <ScrollReveal animation="fade-up" delay={0.15}>
            <div className="pt-1 flex items-center justify-center gap-3">
              <div className="flex items-center gap-3.5 px-4 py-2.5 rounded-2xl bg-[#0A1128] text-white border border-slate-700 shadow-lg">
                <img
                  src="/images/p2.jpeg"
                  alt="Dr. Prakash Chand Shahi"
                  className="w-12 h-12 rounded-full object-cover object-top border-2 border-rose-400 shrink-0"
                />
                <div className="text-left">
                  <span className="text-xs font-extrabold text-white block">
                    Clinical Director: Dr. Prakash Chand Shahi
                  </span>
                  <span className="text-[10px] font-mono text-rose-300 font-bold block">
                    DM Cardiology (PGIMER) • MD (KGMU Lucknow)
                  </span>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={0.2}>
            <p className="text-sm sm:text-base text-slate-700 font-normal max-w-2xl mx-auto leading-relaxed">
              Clean consultation rooms, modern Cath Lab, and 24/7 Heart ICU directed personally by Dr. Shahi.
            </p>
          </ScrollReveal>

          {/* Virtual Facility Video Tour Console */}
          <ScrollReveal animation="scale-up" delay={0.25} className="pt-6 max-w-5xl mx-auto">
            <Interactive3DTilt maxTilt={5} scale={1.01}>
              <SectionCinematicVideo
                type="facilities-walkthrough"
                videoUrl="/videos/facilities-walkthrough.mp4"
                styleVariant="panoramic-stage"
                posterImage="/images/operation-theatre-laminar.jpg"
                title="Pulse Heart Centre Cath Lab"
                subtitle="Safe &amp; Clean Heart Suite"
                specs="Sterile Cleanroom • Clear Live Heart Imaging"
                aspectRatio="aspect-[16/8] sm:aspect-[21/9]"
              />
            </Interactive3DTilt>
          </ScrollReveal>
        </div>

        {/* 2. Facility Architecture & Overlapping Highlights */}
        <PulseCentreSection />

        {/* 3. Full-Width Clinical Equipment & Facility Gallery */}
        <div className="my-20 p-6 sm:p-10 rounded-[3rem] bg-gradient-to-b from-white/95 via-slate-50/90 to-white/95 border-2 border-slate-200/90 shadow-2xl relative overflow-hidden backdrop-blur-xl">
          {/* Bespoke Tri-Suite Cleanroom Isolation & Laminar Airflow Streams */}
          <SectionBackgroundMotion variant="hospital-suites" />

          <div className="relative z-10">
            <ScrollReveal animation="fade-down" className="mb-10 text-center max-w-2xl mx-auto space-y-2">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#BE123C] bg-rose-50 px-3.5 py-1 rounded-full border border-rose-200 shadow-xs">
                Clinical Environments
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A1128] tracking-tight">
                Advanced Clinical Suites
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
                Explore our clean heart care rooms and safe modern medical equipment.
              </p>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {facilityGallery.map((item, idx) => (
                <ScrollReveal key={idx} animation="fade-up" delay={idx * 0.12}>
                  <Interactive3DTilt maxTilt={8} scale={1.02}>
                    <div className="group relative rounded-[2rem] bg-white/95 backdrop-blur-xl p-4 border border-slate-200 shadow-lg hover:shadow-2xl hover:border-rose-300 transition-all duration-500 space-y-4 text-left">
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
                        <h3 className="text-base font-extrabold text-[#0A1128] tracking-tight group-hover:text-[#BE123C] transition-colors">{item.title}</h3>
                        <span className="text-[10px] font-mono font-bold text-[#BE123C] bg-rose-50 px-2.5 py-1 rounded-md border border-rose-200 shadow-xs">{item.category}</span>
                      </div>
                    </div>
                  </Interactive3DTilt>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>

        {/* 4. Patient Experience & Pre-Visit Checklist */}
        <div className="my-16">
          <PatientExperienceSection />
        </div>

        {/* 5. Direct OPD Directions & Priority Booking Callout */}
        <ScrollReveal animation="fade-up" className="mt-20">
          <Interactive3DTilt maxTilt={4} scale={1.01} className="max-w-4xl mx-auto">
            <div className="p-8 sm:p-14 rounded-[2.5rem] bg-gradient-to-br from-white via-slate-50 to-white text-slate-900 shadow-2xl border-2 border-slate-200/90 text-center space-y-6 relative overflow-hidden backdrop-blur-xl">
              {/* Bespoke Betiahata Gateway & Radiant Geographic Beacon */}
              <SectionBackgroundMotion variant="hospital-cta" />
              <div className="relative z-10 space-y-5">
                <h3 className="text-3xl sm:text-5xl font-extrabold text-[#0A1128] tracking-tight">
                  Visit Pulse Heart Centre in <span className="font-serif italic font-normal text-[#BE123C]">Betiahata, Gorakhpur</span>
                </h3>
                <p className="text-sm text-slate-600 max-w-xl mx-auto font-normal leading-relaxed">
                  Conveniently located at Betiahata, Gorakhpur. Outpatient consultations run Monday through Saturday from 10:00 AM to 8:00 PM.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
                  <Link
                    to="/contact"
                    className="luxury-btn-primary"
                  >
                    <Calendar className="w-4 h-4 text-white" />
                    <span>Book Consultation Pass</span>
                  </Link>
                  <a
                    href="tel:+919876543210"
                    className="luxury-btn-secondary"
                  >
                    <Phone className="w-4 h-4 text-[#BE123C]" />
                    <span>Emergency / OPD Helpline</span>
                  </a>
                </div>
              </div>
            </div>
          </Interactive3DTilt>
        </ScrollReveal>

      </div>
    </div>
  );
}
