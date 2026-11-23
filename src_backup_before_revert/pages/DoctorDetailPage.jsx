import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { 
  ArrowLeft, Calendar, Clock, MapPin, Award, CheckCircle2, 
  Globe2, ShieldCheck, Phone, Stethoscope, ChevronRight 
} from 'lucide-react';
import { PULSE_DATA } from '../data/pulseData';

export default function DoctorDetailPage() {
  const { slug } = useParams();
  const { doctors } = PULSE_DATA;

  const doctor = doctors.find((d) => d.slug === slug);

  if (!doctor) {
    return <Navigate to="/doctors" replace />;
  }

  return (
    <div className="pt-24 pb-20 bg-[#F7FAFC]">
      
      {/* 1. Doctor Profile Hero (~100vh) */}
      <section className="min-h-[85vh] flex items-center bg-gradient-to-b from-[#F0F7FB] via-white to-[#F7FAFC] px-4 sm:px-6 lg:px-8 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto w-full py-12">
          
          <Link
            to="/doctors"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-[#173C59] mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Specialists</span>
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-5 relative">
              <div className="rounded-3xl overflow-hidden border border-slate-200 bg-white p-3 shadow-xl">
                {doctor.image ? (
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-full h-96 object-cover object-top rounded-2xl"
                  />
                ) : (
                  <div className="w-full h-96 bg-sky-50 rounded-2xl flex flex-col items-center justify-center p-6 text-center">
                    <div className="w-24 h-24 rounded-full bg-white border border-sky-200 flex items-center justify-center text-[#2788B8] mb-3">
                      <Stethoscope className="w-12 h-12 text-[#173C59]" />
                    </div>
                    <span className="text-base font-bold text-[#173C59]">{doctor.name}</span>
                    <span className="text-xs text-slate-500">{doctor.title}</span>
                  </div>
                )}

                <div className="p-4 space-y-2">
                  <div className="flex items-center justify-between text-xs font-semibold text-slate-600">
                    <span>Experience: {doctor.experience}</span>
                    <span className="text-emerald-600 font-bold">● Active OPD</span>
                  </div>
                  <div className="text-xs text-slate-500">
                    Consultation Room: <strong className="text-slate-800">{doctor.opdRoom}</strong>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 text-[#2788B8] border border-sky-200 text-xs font-bold uppercase tracking-widest">
                <span>{doctor.department}</span>
                <span>•</span>
                <span>Senior Faculty</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-extrabold text-[#173C59] tracking-tight">
                {doctor.name}
              </h1>

              <p className="text-base sm:text-lg font-semibold text-[#2788B8]">
                {doctor.title}
              </p>

              <div className="p-3 rounded-2xl bg-white border border-slate-200 text-xs text-slate-700 font-medium">
                <strong>Qualifications:</strong> {doctor.qualifications}
              </div>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {doctor.bio}
              </p>

              {/* Consultation Timing & Languages */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-1">
                  <span className="text-[10px] uppercase font-bold text-slate-400">OPD Timings</span>
                  <div className="text-xs font-bold text-[#173C59] flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#2788B8]" />
                    <span>{doctor.consultationHours}</span>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-1">
                  <span className="text-[10px] uppercase font-bold text-slate-400">Communication</span>
                  <div className="text-xs font-bold text-[#173C59] flex items-center gap-1.5">
                    <Globe2 className="w-3.5 h-3.5 text-[#2788B8]" />
                    <span>{doctor.languages}</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  to={`/book-appointment?doctor=${doctor.slug}`}
                  className="px-7 py-3.5 rounded-full bg-[#173C59] hover:bg-[#0E2538] text-white font-semibold text-xs uppercase tracking-wider shadow-md transition-all flex items-center gap-2"
                >
                  <Calendar className="w-4 h-4 text-[#A9D8E9]" />
                  <span>Book Consultation With {doctor.shortName}</span>
                </Link>

                <a
                  href="tel:+919876543211"
                  className="px-5 py-3.5 rounded-full bg-white text-[#173C59] font-semibold text-xs border border-slate-200 hover:bg-slate-50 transition-all"
                >
                  OPD Helpline Desk
                </a>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 2. Key Achievements & Specialties */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <div className="p-8 rounded-3xl bg-white border border-slate-200/90 shadow-sm space-y-4">
            <h3 className="text-lg font-bold text-[#173C59] flex items-center gap-2">
              <Award className="w-5 h-5 text-[#2788B8]" />
              <span>Career Milestones & Achievements</span>
            </h3>
            <div className="space-y-2.5">
              {doctor.achievements.map((ach, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-[#2788B8] shrink-0 mt-0.5" />
                  <span>{ach}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-slate-200/90 shadow-sm space-y-4">
            <h3 className="text-lg font-bold text-[#173C59] flex items-center gap-2">
              <Stethoscope className="w-5 h-5 text-[#2788B8]" />
              <span>Specialized Clinical Interests</span>
            </h3>
            <div className="space-y-2.5">
              {doctor.specialties.map((spec, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-[#2788B8] shrink-0 mt-0.5" />
                  <span>{spec}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
