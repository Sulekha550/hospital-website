import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  Award, Clock, Calendar, Globe2, ArrowRight, Upload, 
  Camera, User, CheckCircle2, ChevronRight, Stethoscope 
} from 'lucide-react';
import { PULSE_DATA } from '../data/pulseData';

/**
 * EditorialSpecialistsSection
 * Large editorial doctor portraits, sophisticated typography, animated profile reveals,
 * distinctive asymmetrical compositions, keeping medical credentials readable and
 * providing an authentic photo upload aperture for Dr. Prakash Chand Shahi.
 */
export default function EditorialSpecialistsSection() {
  const { doctors } = PULSE_DATA;
  const [uploadedPhoto, setUploadedPhoto] = useState(null);
  const fileInputRef = useRef(null);

  const chiefDoctor = doctors.find((d) => d.id === 'dr-prakash-chand-shahi') || doctors[0];
  const otherDoctors = doctors.filter((d) => d.id !== 'dr-prakash-chand-shahi').slice(0, 3);

  const handlePhotoUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (ev) => {
        setUploadedPhoto(ev.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <section id="specialists" className="py-20 lg:py-28 bg-white border-b border-slate-200/80 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-16">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#2788B8]">
              Senior Medical Faculty
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#173C59] mt-1">
              Meet Our Specialists
            </h2>
          </div>
          <div className="flex items-center gap-4">
            <p className="text-sm text-slate-500 max-w-sm">
              Distinguished academic clinicians trained at PGIMER Chandigarh, AIIMS New Delhi, and KGMU Lucknow.
            </p>
            <Link
              to="/doctors"
              className="hidden sm:inline-flex items-center gap-1.5 text-xs font-bold text-[#2788B8] hover:text-[#173C59] transition-colors whitespace-nowrap"
            >
              <span>View All 35+ Faculty</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Master Asymmetric Editorial Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left: Oversized Chief Clinician Dossier (7 Cols) */}
          <div className="lg:col-span-7 rounded-3xl bg-gradient-to-br from-[#F7FAFC] via-[#F0F7FB] to-white border border-slate-200/90 p-8 sm:p-10 shadow-lg flex flex-col justify-between space-y-8">
            
            <div className="space-y-6">
              
              {/* Top Tag & Credentials Badge */}
              <div className="flex flex-wrap items-center justify-between gap-3">
                <span className="px-3.5 py-1 rounded-full bg-[#173C59] text-white text-[11px] font-bold uppercase tracking-wider shadow-xs">
                  Director & Chief Interventional Cardiologist
                </span>
                <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                  ● OPD Active • Gorakhpur
                </span>
              </div>

              {/* Title & Degrees */}
              <div>
                <h3 className="text-3xl sm:text-4xl font-extrabold text-[#173C59]">
                  {chiefDoctor.name}
                </h3>
                <div className="text-sm font-bold text-[#2788B8] mt-1">
                  DM Cardiology (PGIMER Chandigarh, 2013) • MD Medicine (KGMU Lucknow, 2007)
                </div>
              </div>

              {/* Bio Paragraph */}
              <p className="text-sm text-slate-600 leading-relaxed">
                {chiefDoctor.bio}
              </p>

              {/* 3 Pillars of Practice */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-3.5 rounded-2xl bg-white border border-slate-200/90 shadow-xs space-y-1">
                  <span className="text-[10px] uppercase font-bold text-[#2788B8] block">Pillar 01</span>
                  <div className="text-xs font-bold text-[#173C59]">Transradial-First</div>
                  <p className="text-[11px] text-slate-500">Wrist-access catheterization eliminating groin bleeding & immobilization.</p>
                </div>
                <div className="p-3.5 rounded-2xl bg-white border border-slate-200/90 shadow-xs space-y-1">
                  <span className="text-[10px] uppercase font-bold text-[#7C3AED] block">Pillar 02</span>
                  <div className="text-xs font-bold text-[#173C59]">Evidence-Based</div>
                  <p className="text-[11px] text-slate-500">Zero unnecessary procedures. Honest review of prior angiogram CDs.</p>
                </div>
                <div className="p-3.5 rounded-2xl bg-white border border-slate-200/90 shadow-xs space-y-1">
                  <span className="text-[10px] uppercase font-bold text-[#10B981] block">Pillar 03</span>
                  <div className="text-xs font-bold text-[#173C59]">Unhurried Care</div>
                  <p className="text-[11px] text-slate-500">Generous consultation time dedicated to patient and family dialogue.</p>
                </div>
              </div>

            </div>

            {/* Timings & Action Row */}
            <div className="pt-6 border-t border-slate-200/80 flex flex-wrap items-center justify-between gap-4">
              <div className="text-xs text-slate-600 space-y-0.5">
                <div><strong>Suite:</strong> {chiefDoctor.opdRoom}</div>
                <div><strong>Timings:</strong> {chiefDoctor.consultationHours}</div>
              </div>

              <Link
                to={`/book-appointment?doctor=${chiefDoctor.slug}`}
                className="px-6 py-3 rounded-full bg-[#173C59] hover:bg-[#0E2538] text-white text-xs font-bold uppercase tracking-wider shadow-md transition-all"
              >
                Book Consultation With Dr. Shahi
              </Link>
            </div>

          </div>

          {/* Right: Portrait Aperture & Secondary Specialists (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            
            {/* Dedicated Doctor Portrait Showcase with Photo Upload Aperture */}
            <div className="rounded-3xl bg-[#F7FAFC] border border-slate-200/90 p-6 shadow-sm text-center flex flex-col items-center justify-center relative overflow-hidden min-h-[280px]">
              {uploadedPhoto ? (
                <div className="relative w-full h-64 rounded-2xl overflow-hidden shadow-inner">
                  <img
                    src={uploadedPhoto}
                    alt={chiefDoctor.name}
                    className="w-full h-full object-cover"
                  />
                  <button
                    onClick={() => fileInputRef.current?.click()}
                    className="absolute bottom-3 right-3 px-3 py-1 rounded-full bg-black/70 text-white text-[10px] font-bold backdrop-blur-md"
                  >
                    Change Photo
                  </button>
                </div>
              ) : (
                <div className="space-y-3 py-4">
                  <div className="w-20 h-20 rounded-full bg-white border border-slate-200 flex items-center justify-center text-[#2788B8] mx-auto shadow-xs">
                    <User className="w-10 h-10 text-[#173C59]" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-[#173C59]">{chiefDoctor.name}</h4>
                    <p className="text-xs text-slate-500">Reserved dedicated space for authentic doctor portrait</p>
                  </div>

                  <button
                    onClick={() => fileInputRef.current?.click()}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white hover:bg-slate-50 text-slate-800 text-xs font-bold border border-slate-200 shadow-xs hover:border-[#2788B8] transition-all"
                  >
                    <Camera className="w-4 h-4 text-[#2788B8]" />
                    <span>Upload Doctor Photo</span>
                  </button>
                </div>
              )}

              <input
                type="file"
                ref={fileInputRef}
                onChange={handlePhotoUpload}
                accept="image/*"
                className="hidden"
              />
            </div>

            {/* Other Key Faculty Staggered List */}
            <div className="space-y-3">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block px-2">
                Associate Medical Directorate:
              </span>
              {otherDoctors.map((doc) => (
                <div
                  key={doc.id}
                  className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:shadow-md transition-all flex items-center justify-between gap-4"
                >
                  <div className="space-y-0.5">
                    <span className="text-[10px] uppercase font-bold text-[#2788B8] block">{doc.department}</span>
                    <h5 className="text-sm font-bold text-[#173C59]">{doc.name}</h5>
                    <p className="text-[11px] text-slate-500 line-clamp-1">{doc.qualifications}</p>
                  </div>

                  <Link
                    to={`/doctors/${doc.slug}`}
                    className="p-2 rounded-full bg-slate-50 text-slate-700 hover:bg-[#173C59] hover:text-white transition-colors shrink-0"
                    title="View Doctor Profile"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
