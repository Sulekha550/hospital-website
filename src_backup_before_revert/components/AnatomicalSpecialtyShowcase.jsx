import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, ChevronRight, Activity, ShieldCheck, Sparkles, HeartPulse, Cpu } from 'lucide-react';

/**
 * AnatomicalSpecialtyShowcase
 * Compact, uniform 16/10 aspect cards with interactive animations:
 * - Subtle hover lift and laser line glow
 * - High-contrast text on clean translucent cards
 * - Real medical photography
 */
export default function AnatomicalSpecialtyShowcase() {
  const specialties = [
    {
      id: 'peripheral-angioplasty',
      title: 'Peripheral Angioplasty & Stenting',
      category: 'Endovascular Revascularization',
      stat: '99.4% Flow Restored',
      image: '/images/cath-lab.jpg',
      badgeColor: 'bg-rose-50 text-rose-700 border-rose-200',
      description: 'Minimally invasive catheterization restoring vital blood perfusion to ischemic lower extremities and renal vasculature.',
      access: 'Transradial / Femoral Sheath',
      route: '/treatments'
    },
    {
      id: 'coronary-angiogram',
      title: 'Coronary Angiogram (CAG)',
      category: 'Diagnostic Fluoroscopy',
      stat: '< 0.5 mm Accuracy',
      image: '/images/angiogram-scan.jpg',
      badgeColor: 'bg-sky-50 text-sky-700 border-sky-200',
      description: 'Gold-standard cineangiography mapping exact luminal stenosis dimensions and collateral flow dynamics with sub-millimeter precision.',
      access: 'Painless Radial Wrist Access',
      route: '/treatments'
    },
    {
      id: 'ct-coronary-angiography',
      title: 'CT Coronary Angiography',
      category: 'Non-Invasive 3D Imaging',
      stat: 'Zero Downtime',
      image: '/images/hospital-facility.jpg',
      badgeColor: 'bg-amber-50 text-amber-800 border-amber-200',
      description: 'High-speed multislice 3D volumetric reconstruction and coronary calcium Agatston scoring with zero surgical puncture.',
      access: 'Outpatient 3D Volumetric Scan',
      route: '/treatments'
    },
    {
      id: 'pacemaker-implantation',
      title: 'Permanent Pacemaker Implantation',
      category: 'Cardiac Electrophysiology',
      stat: '10–14 Year Lifespan',
      image: '/images/pacemaker-tech.jpg',
      badgeColor: 'bg-purple-50 text-purple-700 border-purple-200',
      description: 'Advanced transvenous single and dual-chamber pacing generators for symptomatic bradyarrhythmias and heart blocks.',
      access: 'Physiological Rhythm Pacing',
      route: '/treatments'
    }
  ];

  return (
    <section id="specialty-showcase" className="py-20 lg:py-28 bg-[#F8FAFC] border-y border-slate-200/80 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-14">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 text-purple-900 border border-purple-200 text-xs font-bold uppercase tracking-widest mb-2">
              <Sparkles className="w-3.5 h-3.5 text-purple-700" />
              <span>Interventional Cardiology</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#173C59] tracking-tight">
              Anatomical Specialty Showcase
            </h2>
          </div>
          <p className="text-sm text-slate-600 max-w-md">
            Advanced catheter-based interventions and non-invasive cardiovascular diagnostics directed by Dr. Prakash Chand Shahi.
          </p>
        </div>

        {/* 4 Compact Uniform 16/10 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {specialties.map((item) => (
            <div
              key={item.id}
              className="group rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:shadow-2xl hover:border-purple-300 transition-all duration-300 flex flex-col justify-between overflow-hidden relative card-hover-lift"
            >
              <div>
                {/* 16/10 Image Container */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />

                  {/* Top Floating Badge */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between text-white pointer-events-none">
                    <span className="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-[10px] font-bold border border-white/20">
                      {item.stat}
                    </span>
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  </div>

                  {/* Bottom Category on Image */}
                  <div className="absolute bottom-2.5 left-3 right-3">
                    <span className="text-[10px] uppercase font-bold text-sky-200 tracking-wider block">
                      {item.category}
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5 space-y-2.5">
                  <h3 className="text-base font-bold text-[#173C59] group-hover:text-purple-700 transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                    {item.description}
                  </p>
                  <div className="text-[11px] font-semibold text-purple-700 bg-purple-50 px-2.5 py-1 rounded-lg border border-purple-100 inline-block">
                    ● {item.access}
                  </div>
                </div>
              </div>

              {/* Bottom Card Action Link */}
              <div className="p-5 pt-0 border-t border-slate-100 mt-2">
                <Link
                  to={item.route}
                  className="inline-flex items-center justify-between w-full text-xs font-bold text-[#173C59] group-hover:text-purple-700 transition-colors pt-2"
                >
                  <span>View Procedural Protocol</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-purple-600" />
                </Link>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
