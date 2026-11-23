import React from 'react';
import { Link } from 'react-router-dom';
import { Building2, MapPin, Clock, Phone, Sparkles, Calendar, Navigation, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';
import PulseCentreSection from '../components/PulseCentreSection';
import PatientExperienceSection from '../components/PatientExperienceSection';
import { PULSE_DATA } from '../data/pulseData';

export default function HospitalPage() {
  const { clinic, doctor } = PULSE_DATA;

  const facilityGallery = [
    {
      title: 'Digital Catheterization Lab',
      category: 'INTERVENTIONAL SUITE',
      image: '/images/cath-lab.jpg',
      desc: 'Sub-millimeter C-Arm fluoroscopy for radial angioplasty, stenting, and pacemaker implantation.',
    },
    {
      title: 'Fluoroscopy Stenosis Mapping',
      category: 'DIAGNOSTIC CINE',
      image: '/images/angiogram-scan.jpg',
      desc: 'Dynamic vessel imaging verifying luminal diameter and coronary perfusion.',
    },
    {
      title: 'Pulse Heart Centre Architecture',
      category: 'OUTPATIENT PAVILION',
      image: '/images/hospital-facility.jpg',
      desc: 'Centrally located in Betiahata, Gorakhpur with peaceful consultation suites and diagnostic rooms.',
    },
  ];

  return (
    <div className="pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 select-none">
      
      {/* 1. Master Editorial Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#173C59] via-[#1E4D74] to-[#2788B8] text-white text-xs font-mono font-medium shadow-md shadow-[#173C59]/20">
          <Building2 className="w-4 h-4 text-[#A9D8E9]" />
          <span className="uppercase tracking-[0.2em]">Pulse Heart Centre • Betiahata</span>
        </div>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-semibold text-slate-950 tracking-tight leading-[1.05]">
          Clinical Facilities & <br />
          <span className="font-serif italic font-normal text-[#173C59]">Outpatient Architecture</span>
        </h1>

        <p className="text-base sm:text-lg text-slate-700 font-medium max-w-2xl mx-auto leading-relaxed">
          Modern outpatient clinical pavilion directed by <strong>Dr. Prakash Chand Shahi</strong>. Designed to provide serene consultation suites, real-time diagnostic ECG/Echo units, and accessible ambulatory cardiology in Gorakhpur.
        </p>
      </div>

      {/* 2. Facility Architecture & Overlapping Highlights */}
      <PulseCentreSection />

      {/* 3. Full-Width Clinical Equipment & Facility Gallery */}
      <div className="my-20">
        <div className="mb-10 text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-mono font-medium uppercase tracking-wider text-[#173C59] bg-sky-100/70 px-3 py-1 rounded-full">
            Clinical Environments
          </span>
          <h2 className="text-3xl sm:text-4xl font-semibold text-slate-950 tracking-tight">
            Advanced Clinical Suites
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 font-medium">
            Explore the high-precision equipment and sterile environments supporting every patient intervention.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {facilityGallery.map((item, idx) => (
            <div
              key={idx}
              className="group relative rounded-[2rem] bg-white p-4 border border-slate-200 shadow-layered hover:shadow-layered-hover transition-all duration-500 hover:-translate-y-2 space-y-4 text-left"
            >
              <div className="relative aspect-[16/10] rounded-2xl overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-white/95 text-[10px] font-mono font-bold text-[#173C59] border border-slate-200 shadow-xs">
                  {item.category}
                </span>
              </div>
              <div className="px-1 space-y-1">
                <h3 className="text-lg font-semibold text-slate-950 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-600 font-medium leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 4. Patient Experience & Pre-Visit Checklist */}
      <div className="my-16">
        <PatientExperienceSection />
      </div>

      {/* 5. Direct OPD Directions & Priority Booking Callout */}
      <div className="mt-20 p-8 sm:p-12 rounded-[2.5rem] bg-gradient-to-br from-white via-sky-50/50 to-white text-slate-900 shadow-layered border-2 border-slate-200 text-center max-w-4xl mx-auto space-y-5">
        <h3 className="text-3xl sm:text-4xl font-semibold text-slate-950">
          Visit Pulse Heart Centre in <span className="font-serif italic font-normal text-[#173C59]">Betiahata, Gorakhpur</span>
        </h3>
        <p className="text-sm text-slate-600 max-w-xl mx-auto font-medium leading-relaxed">
          Conveniently located at Betiahata, Gorakhpur. Outpatient consultations run Monday through Saturday from 10:00 AM to 8:00 PM.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#173C59] via-[#1E4D74] to-[#2788B8] hover:from-[#0E2538] hover:to-[#173C59] text-white text-xs font-semibold uppercase tracking-wider shadow-md shadow-[#173C59]/20 transition-all"
          >
            <Calendar className="w-4 h-4 text-[#A9D8E9]" />
            <span>Book Consultation Pass</span>
          </Link>
          <a
            href="tel:+919876543210"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white hover:bg-sky-50 text-[#173C59] border-2 border-slate-200 text-xs font-semibold uppercase tracking-wider transition-all shadow-xs"
          >
            <Phone className="w-4 h-4 text-[#2788B8]" />
            <span>Emergency / OPD Helpline</span>
          </a>
        </div>
      </div>

    </div>
  );
}
