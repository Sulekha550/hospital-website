import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  Award, Clock, Calendar, Globe2, ArrowRight, Upload, 
  CheckCircle2, Camera, User, Star, ChevronRight 
} from 'lucide-react';
import { PULSE_DATA } from '../data/pulseData';

export default function SpecialistsSection() {
  const { doctors } = PULSE_DATA;
  const [uploadedDoctorPhoto, setUploadedDoctorPhoto] = useState(null);
  const fileInputRef = useRef(null);

  const handlePhotoUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (uploadEvent) => {
        setUploadedDoctorPhoto(uploadEvent.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <section id="specialists" className="py-20 lg:py-28 bg-[#F7FAFC] border-b border-slate-200/80 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-14">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#2788B8]">
              Section 05 • Medical Faculty
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#173C59] mt-1">
              Meet Our Specialists
            </h2>
          </div>
          <div className="flex items-center gap-4">
            <p className="text-sm text-slate-500 max-w-sm">
              Distinguished clinicians from PGIMER, AIIMS, and KGMU delivering evidence-based, compassionate care.
            </p>
            <Link
              to="/doctors"
              className="hidden sm:inline-flex items-center gap-1.5 text-xs font-bold text-[#2788B8] hover:text-[#173C59] transition-colors whitespace-nowrap"
            >
              <span>View All 35+ Doctors</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Master Asymmetrical Doctor Showcase Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {doctors.slice(0, 6).map((doc, idx) => {
            const isChiefDoctor = doc.id === 'dr-prakash-chand-shahi';
            const displayPhoto = isChiefDoctor && uploadedDoctorPhoto ? uploadedDoctorPhoto : doc.image;

            return (
              <div
                key={doc.id}
                className="group relative rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-[#2788B8]/40 transition-all duration-300 flex flex-col overflow-hidden"
              >
                {/* Doctor Portrait Header Area */}
                <div className="relative h-[280px] bg-gradient-to-b from-slate-100 to-slate-200 overflow-hidden">
                  
                  {displayPhoto ? (
                    <img
                      src={displayPhoto}
                      alt={doc.name}
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    /* Clean Professional Medical Aperture for User's Own Photo Upload */
                    <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-sky-50/50">
                      <div className="w-20 h-20 rounded-full bg-white border border-sky-200 flex items-center justify-center text-[#2788B8] shadow-xs mb-3 group-hover:scale-105 transition-transform">
                        <User className="w-10 h-10 text-[#173C59]" />
                      </div>
                      <span className="text-xs font-bold text-[#173C59]">{doc.name}</span>
                      <span className="text-[11px] text-slate-500 mb-3">Reserved Space for Doctor Photo</span>

                      {/* Photo Upload Button */}
                      <button
                        onClick={() => fileInputRef.current?.click()}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white hover:bg-slate-50 text-slate-700 font-semibold text-[11px] border border-slate-200 shadow-xs hover:border-[#2788B8] transition-all"
                      >
                        <Camera className="w-3.5 h-3.5 text-[#2788B8]" />
                        <span>Upload Photo</span>
                      </button>

                      <input
                        type="file"
                        ref={fileInputRef}
                        onChange={handlePhotoUpload}
                        accept="image/*"
                        className="hidden"
                      />
                    </div>
                  )}

                  {/* Top Badge Overlay */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                    <span className="px-2.5 py-1 rounded-full bg-[#173C59]/90 backdrop-blur-md text-[10px] font-bold text-white shadow-xs">
                      {doc.experience} Experience
                    </span>
                    <span className="px-2 py-0.5 rounded-full bg-white/90 backdrop-blur-md text-[10px] font-bold text-[#173C59] border border-white">
                      Active OPD
                    </span>
                  </div>

                  {/* Bottom Vignette */}
                  <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white to-transparent" />
                </div>

                {/* Card Body Information */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  
                  <div className="space-y-1.5">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-[#2788B8]">
                      {doc.department}
                    </div>
                    <h3 className="text-xl font-bold text-[#173C59] group-hover:text-[#2788B8] transition-colors">
                      {doc.name}
                    </h3>
                    <p className="text-xs font-medium text-slate-600 line-clamp-1">
                      {doc.qualifications}
                    </p>
                  </div>

                  {/* Consultation Timings & OPD Suite */}
                  <div className="p-3 rounded-2xl bg-slate-50 border border-slate-100 space-y-1.5 text-xs text-slate-600">
                    <div className="flex items-center gap-2">
                      <Clock className="w-3.5 h-3.5 text-[#2788B8] shrink-0" />
                      <span className="font-medium line-clamp-1">{doc.consultationHours}</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-500">
                      <Globe2 className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <span>Languages: {doc.languages}</span>
                    </div>
                  </div>

                  {/* Action CTAs */}
                  <div className="pt-2 flex items-center justify-between gap-3 border-t border-slate-100">
                    <Link
                      to={`/doctors/${doc.slug}`}
                      className="text-xs font-bold text-slate-700 hover:text-[#2788B8] transition-colors"
                    >
                      View Profile
                    </Link>

                    <Link
                      to={`/book-appointment?doctor=${doc.slug}`}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#173C59] hover:bg-[#0E2538] text-white font-semibold text-xs transition-colors shadow-xs"
                    >
                      <Calendar className="w-3 h-3 text-[#A9D8E9]" />
                      <span>Book OPD</span>
                    </Link>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 p-6 rounded-3xl bg-white border border-slate-200/90 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <div className="w-10 h-10 rounded-2xl bg-sky-50 text-[#2788B8] flex items-center justify-center shrink-0">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#173C59]">Seeking an Angiogram CD or Super-Specialist Second Opinion?</h4>
              <p className="text-xs text-slate-500">Dr. Prakash Chand Shahi reviews previous diagnostic angiograms with honest ethical direction.</p>
            </div>
          </div>

          <Link
            to="/book-appointment?opinion=second"
            className="px-5 py-2.5 rounded-full bg-[#2788B8] hover:bg-[#1f739c] text-white font-semibold text-xs whitespace-nowrap shadow-xs"
          >
            Request Second Opinion
          </Link>
        </div>

      </div>
    </section>
  );
}
