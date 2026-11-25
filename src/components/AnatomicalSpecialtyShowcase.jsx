import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Clock, ShieldCheck } from 'lucide-react';
import SectionBackgroundMotion from './SectionBackgroundMotion';

/**
 * AnatomicalSpecialtyShowcase
 * Redesigned Interactive Split Showcase:
 * - Distinct asymmetric layout (interactive procedure list on left + large uncluttered real photo on right)
 * - Uses 100% real clinical & hospital photography (zero AI-generated faces, zero text overlaid on photos)
 * - Paired with Dr. Prakash Chand Shahi's real portrait & credentials
 */
export default function AnatomicalSpecialtyShowcase({ variant = 'home-specialties' }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const specialties = [
    {
      id: 'angioplasty',
      num: '01',
      title: 'Peripheral Angioplasty & Stenting',
      category: 'Interventional Cath Lab',
      desc: 'Restoring arterial blood flow using painless transradial (wrist-first) balloon dilation and drug-eluting stents.',
      image: '/images/radial-catheter-sheath.jpg',
      stat: '99.4% Flow Restored',
      recovery: 'Walk in 2 Hours',
      points: [
        'Wrist-first radial artery entry (no groin immobilization)',
        'Cobalt-chromium drug-eluting stent placement',
        'Performed under Siemens flat-panel fluoroscopy',
      ],
    },
    {
      id: 'angiogram',
      num: '02',
      title: 'Coronary Angiogram (CAG)',
      category: 'Diagnostic Imaging',
      desc: 'High-resolution cineangiography mapping coronary blockages with sub-millimeter precision in under 15 minutes.',
      image: '/images/coronary-artery-perfusion.jpg',
      stat: '< 0.5 mm Accuracy',
      recovery: 'Same-Day Discharge',
      points: [
        'Outpatient painless radial wrist procedure',
        'Frame-by-frame CD review with Dr. Shahi & family',
        'Ultra-low contrast & low-dose radiation protocol',
      ],
    },
    {
      id: 'pacemakers',
      num: '03',
      title: 'Permanent Pacemaker (PPI)',
      category: 'Cardiac Rhythm Care',
      desc: 'Single and dual-chamber rate-responsive pacemaker implantation for complete heart block and bradycardia.',
      image: '/images/pacemaker-tech.jpg',
      stat: '10–14 Yr Battery',
      recovery: '24–48 Hr Recovery',
      points: [
        'Physiological AV-synchronous pacing leads',
        'Automated threshold & impedance telemetry checks',
        'Minimally invasive sub-clavicular pocket',
      ],
    },
    {
      id: 'icu-emergency',
      num: '04',
      title: '24/7 STEMI & Cardiac Care',
      category: 'Emergency Heart Centre',
      desc: 'Round-the-clock primary angioplasty and high-dependency cardiac care at Pulse Heart Centre, Betiahata.',
      image: '/images/cardiac-icu-telemetry.jpg',
      stat: '< 45 Min Door-to-Balloon',
      recovery: '24/7 Emergency Team',
      points: [
        'Immediate Code-Blue heart attack triage',
        'Dedicated Class-100 sterile cath & ICU wing',
        'Direct supervision by Dr. Prakash Chand Shahi',
      ],
    },
  ];

  const current = specialties[activeIndex];

  return (
    <section className="relative py-20 lg:py-28 overflow-hidden select-none bg-[#FAF9F6] border-b border-slate-200">
      <SectionBackgroundMotion variant={variant} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Clean Editorial Header */}
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6 text-left">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#BE123C] block">
              Specialized Cardiac Care
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0A1128] tracking-tight leading-tight">
              Core Treatments &amp; Procedures
            </h2>
          </div>

          <Link to="/treatments" className="luxury-btn-secondary shrink-0 w-fit">
            <span>All Treatments</span>
            <ArrowRight className="w-4 h-4 text-[#BE123C]" />
          </Link>
        </div>

        {/* Distinct Asymmetric Interactive Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* Left Column (5 cols): Interactive Procedure Selector */}
          <div className="lg:col-span-5 space-y-3 text-left">
            {specialties.map((item, idx) => {
              const isActive = idx === activeIndex;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveIndex(idx)}
                  className={`w-full p-5 rounded-2xl border text-left transition-all duration-300 flex items-start justify-between gap-4 ${
                    isActive
                      ? 'bg-[#0A1128] text-white border-[#0A1128] shadow-lg'
                      : 'bg-white text-[#0A1128] border-slate-200 hover:border-[#BE123C]/40 hover:bg-slate-50/80'
                  }`}
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className={`text-[11px] font-mono font-bold ${isActive ? 'text-rose-300' : 'text-[#BE123C]'}`}>
                        {item.num}
                      </span>
                      <span className={`text-[10px] font-mono uppercase tracking-wider ${isActive ? 'text-slate-300' : 'text-slate-500'}`}>
                        {item.category}
                      </span>
                    </div>
                    <h3 className={`text-base font-extrabold leading-snug ${isActive ? 'text-white' : 'text-[#0A1128]'}`}>
                      {item.title}
                    </h3>
                    <p className={`text-xs leading-relaxed ${isActive ? 'text-slate-300' : 'text-slate-600'}`}>
                      {item.desc}
                    </p>
                  </div>
                  <ArrowRight className={`w-4 h-4 shrink-0 mt-1 transition-transform ${isActive ? 'text-rose-300 translate-x-0.5' : 'text-slate-400'}`} />
                </button>
              );
            })}
          </div>

          {/* Right Column (7 cols): Large Clean Real Photography Showcase + Attending Doctor Strip */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 shadow-lg overflow-hidden text-left">
            {/* Uncluttered Real Clinical Photo */}
            <div className="aspect-[16/10] w-full overflow-hidden bg-slate-100">
              <img
                key={current.id}
                src={current.image}
                alt={current.title}
                className="w-full h-full object-cover transition-opacity duration-300"
              />
            </div>

            {/* Clean Clinical Details Below Photo */}
            <div className="p-6 sm:p-8 space-y-5">
              <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-100">
                <div>
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#BE123C] block">
                    {current.category}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-[#0A1128] mt-0.5">
                    {current.title}
                  </h3>
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-rose-50 border border-rose-200 text-[#BE123C] text-xs font-bold">
                    {current.stat}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-[#0A1128] text-xs font-semibold inline-flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-[#BE123C]" />
                    {current.recovery}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {current.points.map((pt, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#BE123C] shrink-0 mt-0.5" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>

              {/* Attending Doctor Footer Strip (Real Photo of Dr. Prakash Chand Shahi) */}
              <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <img
                    src="/images/doctor-portrait.jpg"
                    alt="Dr. Prakash Chand Shahi"
                    className="w-11 h-11 rounded-full object-cover object-[50%_20%] border border-slate-300 shrink-0"
                  />
                  <div>
                    <span className="text-xs font-extrabold text-[#0A1128] flex items-center gap-1.5">
                      <span>Dr. Prakash Chand Shahi</span>
                      <ShieldCheck className="w-3.5 h-3.5 text-[#BE123C]" />
                    </span>
                    <span className="text-[11px] text-slate-500 block">
                      DM Cardiology (PGIMER) • MD (KGMU)
                    </span>
                  </div>
                </div>

                <Link to="/contact" className="luxury-btn-primary !py-2.5 !px-5 !text-xs w-fit">
                  <span>Book Consultation</span>
                  <ArrowRight className="w-3.5 h-3.5 text-white" />
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
