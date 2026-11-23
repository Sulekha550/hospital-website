import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, ShieldCheck, CheckCircle2, Eye, X, 
  Activity, ArrowRight, Sparkles 
} from 'lucide-react';
import { PULSE_DATA } from '../data/pulseData';

export default function FacilitiesPage() {
  const { hospitalTour } = PULSE_DATA;
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const facilityBlocks = [
    {
      title: "Siemens Artis Zee Flat-Panel Digital Cath Lab",
      desc: "Ultra-low radiation fluoroscopic vascular imaging suite with real-time stent enhancement and hemodynamic tracking for 24/7 primary angioplasties.",
      image: "/images/cath-lab.jpg",
      specs: ["Sub-Millimeter Stent Visualization", "Ultra-Low Radiation Protocol", "Integrated Hemodynamic Lab"]
    },
    {
      title: "Level-3 Cardiac & Surgical Intensive Care Unit (ICU)",
      desc: "Equipped with invasive arterial pressure monitors, high-end Dräger mechanical ventilators, and 24/7 dedicated in-house intensivists.",
      image: "/images/pacemaker-tech.jpg",
      specs: ["1:1 Critical Care Nursing Ratio", "Central Telemetry Console", "Negative Pressure Isolation Pods"]
    },
    {
      title: "Class-100 Laminar Airflow Modular Operating Theatres",
      desc: "Seamless antibacterial panels and positive-pressure HEPA filtration curtains maintaining zero surgical-site particulate contamination.",
      image: "/images/hospital-facility.jpg",
      specs: ["HEPA Class-100 Sterility", "4K Karl Storz Towers", "Anti-Static Floor Architecture"]
    },
    {
      title: "3.0 Tesla Silent Whole-Body MRI & 128-Slice CT",
      desc: "Advanced diagnostic imaging delivering crystal-clear 3D coronary angiograms, acute stroke diffusion scans, and soft-tissue joint clarity.",
      image: "/images/angiogram-scan.jpg",
      specs: ["70% Acoustic Noise Reduction", "Single-Heartbeat Coronary Scan", "Instant Stroke Diffusion"]
    },
    {
      title: "Executive Outpatient Consultation Suites",
      desc: "Private, acoustic-dampened consultation chambers designed for unhurried dialogues, digital angiogram display, and patient comfort.",
      image: "/images/doctor-consulting.jpg",
      specs: ["Unhurried Consultation Policy", "Digital Records Integration", "Comfortable Family Waiting"]
    },
    {
      title: "24/7 In-House Diagnostic Pathology & Blood Bank Linkage",
      desc: "Fully automated biochemistry, cardiac enzyme biomarkers (High-Sensitivity Troponin-I), and rapid hematology reporting within 30 minutes.",
      image: "/images/doctor-portrait.jpg",
      specs: ["HS-Troponin 20-Min Turnaround", "Automated Bio-Chemistry Analyzers", "24/7 Blood Cross-Matching Linkage"]
    }
  ];

  return (
    <div className="pt-24 pb-20 bg-[#F7FAFC]">
      
      {/* 1. Facilities Hero (~100vh) */}
      <section className="min-h-[75vh] flex items-center bg-gradient-to-b from-[#F0F7FB] via-white to-[#F7FAFC] px-4 sm:px-6 lg:px-8 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto w-full py-16 text-center max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#173C59]/10 text-[#173C59] text-xs font-bold uppercase tracking-widest">
            <Building2 className="w-3.5 h-3.5 text-[#2788B8]" />
            <span>Infrastructure & Architectural Capabilities</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold text-[#173C59] tracking-tight leading-[1.1]">
            Hospital Facilities & <br />
            <span className="text-[#2788B8]">Clinical Infrastructure.</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Constructed to international medical standards with laminar airflow operating suites, radiation-shielded digital catheterization labs, and 24/7 Level-3 intensive care.
          </p>
        </div>
      </section>

      {/* 2. Facilities Cards Grid */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilityBlocks.map((fac, idx) => (
            <div
              key={idx}
              className="group rounded-3xl bg-white border border-slate-200/90 hover:border-[#2788B8]/40 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              <div>
                <div className="relative h-56 overflow-hidden bg-slate-100">
                  <img
                    src={fac.image}
                    alt={fac.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#173C59]/80 via-transparent to-transparent" />
                  
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <span className="text-[10px] uppercase font-bold text-[#A9D8E9]">Accredited Facility</span>
                    <h3 className="text-sm font-bold text-white line-clamp-1">{fac.title}</h3>
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {fac.desc}
                  </p>

                  <div className="space-y-1 pt-2">
                    {fac.specs.map((spec, sIdx) => (
                      <div key={sIdx} className="flex items-center gap-2 text-[11px] text-slate-700 font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#2788B8] shrink-0" />
                        <span>{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-slate-100 mt-2 flex items-center justify-between">
                <span className="text-[11px] font-bold text-[#173C59]">Operational 24/7</span>
                <Link
                  to="/book-appointment"
                  className="text-xs font-bold text-[#2788B8] hover:text-[#173C59]"
                >
                  Schedule Tour / OPD →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
