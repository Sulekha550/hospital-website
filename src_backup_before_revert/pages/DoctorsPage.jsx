import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, Filter, Clock, Calendar, Globe2, ArrowRight, 
  Award, Stethoscope, ChevronRight, User, CheckCircle2 
} from 'lucide-react';
import { PULSE_DATA } from '../data/pulseData';

export default function DoctorsPage() {
  const { doctors, departments } = PULSE_DATA;
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDept, setSelectedDept] = useState('all');

  const filteredDoctors = doctors.filter((doc) => {
    const matchesSearch = doc.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.department.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.qualifications.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesDept = selectedDept === 'all' || doc.departmentSlug === selectedDept;
    return matchesSearch && matchesDept;
  });

  return (
    <div className="pt-24 pb-20 bg-[#F7FAFC]">
      
      {/* 1. Doctor Directory Hero (~100vh) */}
      <section className="min-h-[75vh] flex items-center bg-gradient-to-b from-[#F0F7FB] via-white to-[#F7FAFC] px-4 sm:px-6 lg:px-8 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto w-full py-16 text-center max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#173C59]/10 text-[#173C59] text-xs font-bold uppercase tracking-widest">
            <Stethoscope className="w-3.5 h-3.5 text-[#2788B8]" />
            <span>Academic Faculty & Super-Specialists</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold text-[#173C59] tracking-tight leading-[1.1]">
            Meet Our Senior <br />
            <span className="text-[#2788B8]">Medical Specialists.</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Discover distinguished consultants trained at PGIMER Chandigarh, AIIMS New Delhi, and KGMU Lucknow—providing unhurried, evidence-based consultations at Betiahata, Gorakhpur.
          </p>

          {/* Search & Filter Bar */}
          <div className="pt-4 flex flex-col sm:flex-row items-center gap-3 max-w-xl mx-auto">
            <div className="relative flex-1 w-full">
              <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search clinician by name or speciality..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3.5 rounded-full border border-slate-200 bg-white text-xs font-semibold text-slate-800 shadow-sm focus:outline-none focus:border-[#2788B8]"
              />
            </div>

            <select
              value={selectedDept}
              onChange={(e) => setSelectedDept(e.target.value)}
              className="w-full sm:w-auto px-4 py-3.5 rounded-full border border-slate-200 bg-white text-xs font-semibold text-slate-700 shadow-sm focus:outline-none focus:border-[#2788B8]"
            >
              <option value="all">All Departments</option>
              {departments.map((d) => (
                <option key={d.slug} value={d.slug}>{d.name}</option>
              ))}
            </select>
          </div>
        </div>
      </section>

      {/* 2. Doctor Directory Cards Grid */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex items-center justify-between mb-8 text-xs font-semibold text-slate-500">
          <span>Showing {filteredDoctors.length} Specialists</span>
          <span>Betiahata, Gorakhpur</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDoctors.map((doc) => (
            <div
              key={doc.id}
              className="group rounded-3xl bg-white border border-slate-200/90 hover:border-[#2788B8]/40 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              <div>
                {/* Doctor Visual Header */}
                <div className="relative h-64 bg-slate-100 overflow-hidden">
                  {doc.image ? (
                    <img
                      src={doc.image}
                      alt={doc.name}
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center bg-sky-50/50 p-6 text-center">
                      <div className="w-16 h-16 rounded-full bg-white border border-sky-200 flex items-center justify-center text-[#2788B8] mb-2 shadow-xs">
                        <User className="w-8 h-8 text-[#173C59]" />
                      </div>
                      <span className="text-xs font-bold text-[#173C59]">{doc.name}</span>
                      <span className="text-[10px] text-slate-500">Dedicated Physician Suite</span>
                    </div>
                  )}

                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-[#173C59]/90 text-white text-[10px] font-bold">
                    {doc.experience} Experience
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <span className="text-[10px] uppercase font-bold text-[#A9D8E9] block">{doc.department}</span>
                  </div>
                </div>

                {/* Body Information */}
                <div className="p-6 space-y-3">
                  <div>
                    <h3 className="text-lg font-bold text-[#173C59] group-hover:text-[#2788B8] transition-colors">
                      {doc.name}
                    </h3>
                    <p className="text-xs font-semibold text-[#2788B8] line-clamp-1">{doc.title}</p>
                    <p className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">{doc.qualifications}</p>
                  </div>

                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                    {doc.bio}
                  </p>

                  <div className="p-3 rounded-2xl bg-slate-50 border border-slate-100 text-xs text-slate-600 space-y-1">
                    <div className="flex items-center gap-1.5 font-medium line-clamp-1">
                      <Clock className="w-3.5 h-3.5 text-[#2788B8] shrink-0" />
                      <span>{doc.consultationHours}</span>
                    </div>
                    <div className="text-[11px] text-slate-500">
                      Languages: {doc.languages}
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-6 pt-0 border-t border-slate-100 mt-2 flex items-center justify-between">
                <Link
                  to={`/doctors/${doc.slug}`}
                  className="text-xs font-bold text-slate-700 hover:text-[#2788B8]"
                >
                  View Profile
                </Link>

                <Link
                  to={`/book-appointment?doctor=${doc.slug}`}
                  className="px-4 py-2 rounded-full bg-[#173C59] hover:bg-[#0E2538] text-white text-xs font-semibold shadow-xs"
                >
                  Book OPD
                </Link>
              </div>

            </div>
          ))}
        </div>

      </section>

    </div>
  );
}
