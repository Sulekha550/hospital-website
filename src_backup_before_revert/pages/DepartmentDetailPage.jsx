import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { 
  ArrowLeft, CheckCircle2, Calendar, Phone, ShieldCheck, 
  Clock, MapPin, Award, Stethoscope, ChevronRight, ArrowRight 
} from 'lucide-react';
import { PULSE_DATA } from '../data/pulseData';

export default function DepartmentDetailPage() {
  const { slug } = useParams();
  const { departments, doctors } = PULSE_DATA;

  const department = departments.find((d) => d.slug === slug);

  if (!department) {
    return <Navigate to="/specialities" replace />;
  }

  const deptDoctors = doctors.filter((doc) => doc.departmentSlug === slug);

  return (
    <div className="pt-24 pb-20 bg-[#F7FAFC]">
      
      {/* 1. Department Hero Section (~100vh) */}
      <section className="min-h-[80vh] flex items-center bg-gradient-to-b from-[#F0F7FB] via-white to-[#F7FAFC] px-4 sm:px-6 lg:px-8 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto w-full py-12">
          
          <Link
            to="/specialities"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-[#173C59] mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Specialities</span>
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 text-[#2788B8] border border-sky-200 text-xs font-bold uppercase tracking-widest">
                <span>{department.organ} Super-Speciality</span>
                <span>•</span>
                <span>Apex Care</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-extrabold text-[#173C59] tracking-tight">
                {department.name}
              </h1>

              <p className="text-base sm:text-lg font-semibold text-[#2788B8]">
                {department.tagline}
              </p>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-xl">
                {department.description}
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  to={`/book-appointment?dept=${department.slug}`}
                  className="px-6 py-3.5 rounded-full bg-[#173C59] hover:bg-[#0E2538] text-white font-semibold text-xs uppercase tracking-wider shadow-md transition-all flex items-center gap-2"
                >
                  <Calendar className="w-4 h-4 text-[#A9D8E9]" />
                  <span>Book Department OPD</span>
                </Link>

                <a
                  href="tel:+919876543211"
                  className="px-5 py-3.5 rounded-full bg-white text-[#173C59] font-semibold text-xs border border-slate-200 hover:bg-slate-50 transition-all flex items-center gap-2"
                >
                  <Phone className="w-4 h-4 text-[#2788B8]" />
                  <span>Helpline: +91 98765 43211</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="rounded-3xl overflow-hidden border border-slate-200 bg-white p-2 shadow-xl">
                <img
                  src={department.image}
                  alt={department.name}
                  className="w-full h-80 object-cover rounded-2xl"
                />
                <div className="p-4 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-slate-400 block">Lead Consultant</span>
                    <span className="text-xs font-bold text-[#173C59]">{department.leadDoctor}</span>
                    <span className="text-[10px] text-slate-500 block">{department.leadDegree}</span>
                  </div>
                  <div className="text-right">
                    <span className="text-lg font-extrabold text-[#2788B8] block">{department.stats.primary}</span>
                    <span className="text-[10px] uppercase font-semibold text-slate-400">{department.stats.primaryLabel}</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 2. Key Procedures & Clinical Infrastructure */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          
          {/* Key Procedures */}
          <div className="p-8 rounded-3xl bg-white border border-slate-200/90 shadow-sm space-y-6">
            <h3 className="text-xl font-bold text-[#173C59]">
              Signature Clinical Interventions & Procedures
            </h3>
            <div className="space-y-3">
              {department.keyProcedures.map((proc, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3 rounded-2xl bg-[#F7FAFC] border border-slate-100">
                  <CheckCircle2 className="w-4 h-4 text-[#2788B8] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm font-semibold text-slate-700">{proc}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Department Features & Technology */}
          <div className="p-8 rounded-3xl bg-white border border-slate-200/90 shadow-sm space-y-6">
            <h3 className="text-xl font-bold text-[#173C59]">
              Specialized Infrastructure & Protocols
            </h3>
            <div className="space-y-4">
              {department.features.map((feat, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-sky-50/50 border border-sky-100 space-y-1">
                  <div className="text-xs font-bold text-[#173C59] flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#2788B8]" />
                    <span>Clinical Standard {idx + 1}</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed pl-6">{feat}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 3. Attending Specialists for this Department */}
      <section className="py-16 bg-white border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#2788B8]">Medical Faculty</span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#173C59] mt-1">
              Consultants in {department.name}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {deptDoctors.map((doc) => (
              <div key={doc.id} className="p-6 rounded-3xl bg-[#F7FAFC] border border-slate-200/90 shadow-xs flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-[#2788B8]">
                    <Stethoscope className="w-6 h-6" />
                  </div>
                  <h4 className="text-base font-bold text-[#173C59]">{doc.name}</h4>
                  <p className="text-xs text-[#2788B8] font-semibold">{doc.title}</p>
                  <p className="text-[11px] text-slate-500">{doc.qualifications}</p>
                  <div className="pt-2 text-xs text-slate-600 font-medium">
                    <Clock className="w-3.5 h-3.5 inline mr-1 text-[#2788B8]" />
                    <span>{doc.consultationHours}</span>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-200/60 flex items-center justify-between">
                  <Link to={`/doctors/${doc.slug}`} className="text-xs font-bold text-slate-700 hover:text-[#2788B8]">
                    Profile
                  </Link>
                  <Link
                    to={`/book-appointment?doctor=${doc.slug}`}
                    className="px-3 py-1.5 rounded-full bg-[#173C59] text-white text-xs font-semibold"
                  >
                    Book OPD
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
