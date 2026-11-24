import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  HeartPulse, Brain, Bone, Activity, Stethoscope, 
  ArrowRight, CheckCircle2, ChevronRight, ShieldCheck, Sparkles 
} from 'lucide-react';
import CardiologyAmbientCanvas from './CardiologyAmbientCanvas';
import NeurologySynapseCanvas from './NeurologySynapseCanvas';
import OrthopaedicSkeletalCanvas from './OrthopaedicSkeletalCanvas';
import DiagnosticScannerCanvas from './DiagnosticScannerCanvas';
import { PULSE_DATA } from '../data/pulseData';

/**
 * DepartmentRealmsSection
 * Interactive Department Exploration where each faculty dynamically
 * transitions both its 3D canvas environment and atmospheric lighting.
 */
export default function DepartmentRealmsSection() {
  const [activeRealm, setActiveRealm] = useState('cardiology');

  const realms = [
    {
      id: 'cardiology',
      name: 'Cardiology & Vascular',
      tagline: 'Wrist-First Transradial Stenting & Pacemakers',
      leadDoctor: 'Dr. Prakash Chand Shahi',
      leadDegree: 'DM Cardiology (PGIMER), MD (KGMU)',
      accentColor: '#059669',
      accentBg: 'bg-emerald-50 text-[#064E3B] border-emerald-200',
      description: 'PULSE is Eastern UP’s apex destination for complex coronary bifurcation stenting, emergency primary angioplasties, and permanent physiological pacing.',
      procedures: [
        'Transradial Coronary Angioplasty & Stenting',
        'Coronary Angiogram (CAG)',
        'Dual-Chamber Permanent Pacemakers (PPI)',
        'Peripheral Vascular Revascularization'
      ],
      stats: { primary: '99.4%', label: 'Radial Patency Rate' },
      canvas: <CardiologyAmbientCanvas className="w-full h-full" />
    },
    {
      id: 'neurology',
      name: 'Neurology & Spine Surgery',
      tagline: 'Hyperacute Stroke Thrombolysis & Spine Endoscopy',
      leadDoctor: 'Dr. Ananya Sharma',
      leadDegree: 'MCh Neurosurgery (AIIMS New Delhi)',
      accentColor: '#7C3AED',
      accentBg: 'bg-purple-50 text-purple-700 border-purple-200',
      description: 'Equipped with rapid 3T MRI diffusion scanning, Karl Storz neuro-endoscopy, and dedicated Neuro-ICU for golden-hour ischemic stroke interventions.',
      procedures: [
        'Hyperacute Ischemic Stroke Thrombolysis',
        'Endoscopic Lumbar Spine Discectomy',
        'Microvascular Cranial Tumour Resection',
        'Epilepsy & Neuropathy Diagnostics'
      ],
      stats: { primary: '< 30 min', label: 'Stroke Door-To-Needle' },
      canvas: <NeurologySynapseCanvas className="w-full h-full" />
    },
    {
      id: 'orthopaedics',
      name: 'Orthopaedics & Joint Care',
      tagline: 'Robotic Total Knee Replacement & Sports Arthroscopy',
      leadDoctor: 'Dr. Vikramaditya Rathore',
      leadDegree: 'MS Ortho, MCh Ortho (UK)',
      accentColor: '#D97706',
      accentBg: 'bg-amber-50 text-amber-900 border-amber-200',
      description: 'Class-100 laminar airflow operating suites utilizing computer-navigated sub-millimeter robotic precision for fast-track 24-hour joint rehabilitation.',
      procedures: [
        'Robotic Total Knee Arthroplasty',
        'Tissue-Sparing Hip Replacement',
        'Arthroscopic ACL & Meniscal Repair',
        'Complex Pelvic Trauma Reconstruction'
      ],
      stats: { primary: '24 hrs', label: 'Post-Op First Step' },
      canvas: <OrthopaedicSkeletalCanvas className="w-full h-full" />
    },
    {
      id: 'diagnostics',
      name: 'Advanced Diagnostics & CT',
      tagline: '3.0T Silent MRI & 128-Slice Volumetric CT',
      leadDoctor: 'Diagnostic Imaging Faculty',
      leadDegree: 'Sub-Millimeter Non-Invasive Diagnostics',
      accentColor: '#0284C7',
      accentBg: 'bg-cyan-50 text-cyan-800 border-cyan-200',
      description: 'Non-invasive 3D cardiac angiograms reconstructed in a single heartbeat without arterial puncture, alongside automated 24/7 clinical pathology.',
      procedures: [
        '128-Slice CT Coronary Angiography',
        '3.0 Tesla Silent Whole-Body MRI',
        'Echocardiography & Strain Imaging',
        'HS-Troponin-I 20-Min Cardiac Profiling'
      ],
      stats: { primary: '< 0.3s', label: 'Rotation Gating Speed' },
      canvas: <DiagnosticScannerCanvas className="w-full h-full" />
    }
  ];

  const current = realms.find((r) => r.id === activeRealm) || realms[0];

  return (
    <section id="departments" className="py-20 lg:py-28 bg-[#F0F7FB] border-b border-slate-200/80 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#2788B8]">
              Department Exploration
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#173C59] mt-1">
              Clinical Speciality Realms
            </h2>
          </div>
          <p className="text-sm text-slate-500 max-w-md">
            Click any department realm to observe live 3D visual environments, lead consultants, and surgical capabilities.
          </p>
        </div>

        {/* Interactive Faculty Switcher Tabs */}
        <div className="flex flex-wrap items-center gap-3 mb-10 pb-2 overflow-x-auto">
          {realms.map((realm) => {
            const isSelected = realm.id === activeRealm;

            return (
              <button
                key={realm.id}
                onClick={() => setActiveRealm(realm.id)}
                className={`px-5 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 flex items-center gap-2.5 ${
                  isSelected
                    ? 'bg-[#173C59] text-white shadow-md scale-102'
                    : 'bg-white text-slate-700 border border-slate-200/90 hover:bg-slate-50 hover:text-[#173C59]'
                }`}
              >
                <span
                  className="w-2.5 h-2.5 rounded-full"
                  style={{ backgroundColor: realm.accentColor }}
                />
                <span>{realm.name}</span>
              </button>
            );
          })}
        </div>

        {/* Master Active Realm Visual Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-10 shadow-lg">
          
          {/* Left: Dynamic 3D Canvas Visual Stage (5 Cols) */}
          <div className="lg:col-span-5 relative rounded-2xl bg-[#F7FAFC] border border-slate-200/80 p-4 h-[340px] sm:h-[400px] flex items-center justify-center overflow-hidden">
            {current.canvas}

            {/* Floating Telemetry Metric */}
            <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-3 rounded-xl border border-slate-200/90 flex items-center justify-between shadow-xs">
              <div>
                <span className="text-lg font-extrabold text-[#173C59] block">{current.stats.primary}</span>
                <span className="text-[10px] uppercase font-bold text-slate-400">{current.stats.label}</span>
              </div>
              <span className="px-2 py-0.5 rounded bg-[#F0FDF4] text-[#047857] text-[10px] font-bold">
                Active Protocol
              </span>
            </div>
          </div>

          {/* Right: Departmental Telemetry & Clinical Capabilities (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="flex flex-wrap items-center justify-between gap-3">
              <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border ${current.accentBg}`}>
                {current.name}
              </span>
              <div className="text-right">
                <span className="text-[11px] text-slate-400 block font-semibold">Department Head</span>
                <span className="text-xs font-bold text-[#173C59]">{current.leadDoctor}</span>
                <span className="text-[10px] text-slate-500 block">{current.leadDegree}</span>
              </div>
            </div>

            <div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#173C59]">
                {current.tagline}
              </h3>
              <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                {current.description}
              </p>
            </div>

            {/* Procedures Grid */}
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                Signature Procedures & Interventions
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {current.procedures.map((proc, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs font-medium text-slate-700 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#2788B8] shrink-0" />
                    <span>{proc}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center justify-between gap-4 border-t border-slate-100">
              <Link
                to={`/specialities/${current.id}`}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#173C59] hover:bg-[#0E2538] text-white font-semibold text-xs uppercase tracking-wider shadow-sm transition-all"
              >
                <span>Navigate Department Page</span>
                <ArrowRight className="w-4 h-4 text-[#A9D8E9]" />
              </Link>

              <Link
                to={`/book-appointment?dept=${current.id}`}
                className="text-xs font-bold text-[#2788B8] hover:text-[#173C59] transition-colors"
              >
                Book Consultation with {current.leadDoctor} →
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
