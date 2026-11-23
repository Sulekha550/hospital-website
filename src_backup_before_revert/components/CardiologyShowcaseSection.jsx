import React from 'react';
import { Link } from 'react-router-dom';
import { HeartPulse, CheckCircle2, ArrowRight, ShieldCheck, Activity, Award } from 'lucide-react';
import CardiologyFullCanvas from './CardiologyFullCanvas';

/**
 * CardiologyShowcaseSection
 * Full-bleed 3D Anatomical Heart environment with glowing coronary pathways,
 * rhythmic ventricular pulse, and floating translucent glass clinical telemetry.
 * Zero opaque white boxes hiding the artwork!
 */
export default function CardiologyShowcaseSection() {
  const procedures = [
    { title: "Transradial Coronary Angioplasty", desc: "Wrist-first stenting avoiding groin complications." },
    { title: "Coronary Angiogram (CAG)", desc: "Definitive fluoroscopic mapping of luminal stenosis." },
    { title: "Permanent Pacemaker Implantation", desc: "Dual-chamber & physiological conduction pacing." },
    { title: "CT Coronary Angiography", desc: "128-slice non-invasive 3D arterial visualization." },
  ];

  return (
    <section id="cardiology" className="relative min-h-[90vh] lg:min-h-screen flex items-center py-20 px-4 sm:px-6 lg:px-10 overflow-hidden bg-gradient-to-b from-[#FFF1F2]/70 via-[#FFF8F8]/80 to-[#FAF5FF]/70 border-b border-rose-200/50">
      
      {/* FULL-BLEED 3D ANATOMICAL HEART CANVAS */}
      <CardiologyFullCanvas />

      <div className="max-w-7xl mx-auto w-full relative z-10 py-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left: Editorial Clinical Typography (7 Cols) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-100/80 backdrop-blur-md border border-rose-200 text-rose-800 text-xs font-bold uppercase tracking-widest shadow-xs">
              <HeartPulse className="w-4 h-4 text-rose-600 animate-pulse" />
              <span>Cardiovascular Sciences & Hemodynamics</span>
            </div>

            <div className="space-y-2">
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#173C59] tracking-tight leading-[1.08]">
                Preserving Every <br />
                <span className="text-rose-600">Heartbeat with Precision.</span>
              </h2>
              <p className="text-base sm:text-lg font-semibold text-slate-700 pt-1">
                Directed by Dr. Prakash Chand Shahi (DM Cardiology PGIMER, MD KGMU Lucknow).
              </p>
            </div>

            <p className="text-sm sm:text-base text-slate-700 max-w-xl leading-relaxed bg-white/60 backdrop-blur-md p-4 rounded-2xl border border-white/80 shadow-xs">
              PULSE Cardiology Center is eastern UP's apex referral institute for wrist-first transradial coronary interventions, emergency primary angioplasties in acute myocardial infarction, and permanent physiological pacing.
            </p>

            {/* Floating Translucent Glass Procedures Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-xl pt-2">
              {procedures.map((proc, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-2xl bg-white/75 backdrop-blur-xl border border-white/90 shadow-sm hover:shadow-md hover:bg-white/90 transition-all space-y-1"
                >
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-rose-600 shrink-0" />
                    <h3 className="text-xs font-bold text-[#173C59]">{proc.title}</h3>
                  </div>
                  <p className="text-[11px] text-slate-600 pl-6 leading-tight">{proc.desc}</p>
                </div>
              ))}
            </div>

            {/* Action Row */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Link
                to="/specialities/cardiology"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-rose-600/25 transition-all"
              >
                <span>Cardiology Department Dossier</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                to="/book-appointment?dept=cardiology"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/85 hover:bg-white text-[#173C59] font-bold text-xs uppercase tracking-wider border border-white shadow-md transition-all backdrop-blur-md"
              >
                <span>Consult Dr. Prakash Chand Shahi</span>
              </Link>
            </div>

          </div>

          {/* Right Column: Floating Telemetry Cards Array */}
          <div className="lg:col-span-5 space-y-4">
            
            <div className="p-5 rounded-3xl bg-white/80 backdrop-blur-xl border border-white/95 shadow-xl space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-wider text-rose-600">Clinical Metric</span>
                <span className="text-xs font-bold text-slate-500">Gorakhpur Facility</span>
              </div>
              <div className="text-3xl font-extrabold text-[#173C59]">12,000+</div>
              <div className="text-xs font-bold text-slate-800">Cardiac Catheterizations Completed</div>
              <p className="text-[11px] text-slate-600 leading-relaxed">
                Pioneering transradial wrist access across eastern UP, northern Bihar, and Nepal with zero groin immobilization.
              </p>
            </div>

            <div className="p-5 rounded-3xl bg-white/80 backdrop-blur-xl border border-white/95 shadow-xl space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-wider text-rose-600">Acute STEMI Protocol</span>
                <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 text-[10px] font-bold">24/7 Active</span>
              </div>
              <div className="text-3xl font-extrabold text-rose-600">&lt; 45 Minutes</div>
              <div className="text-xs font-bold text-slate-800">Door-To-Balloon Response Time</div>
              <p className="text-[11px] text-slate-600 leading-relaxed">
                Immediate Code-Blue emergency triage with flat-panel digital Cath Lab activation within the golden window.
              </p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
