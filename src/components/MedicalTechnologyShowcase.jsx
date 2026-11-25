import React, { useState } from 'react';
import { Radio, Zap, ShieldCheck, CheckCircle2 } from 'lucide-react';
import DiagnosticScannerFullCanvas from './DiagnosticScannerFullCanvas';
import SectionBackgroundMotion from './SectionBackgroundMotion';
import SectionCinematicVideo from './SectionCinematicVideo';
import Interactive3DTilt from './Interactive3DTilt';
import ScrollReveal from './ScrollReveal';

/**
 * MedicalTechnologyShowcase
 * Visual & Motion Identity: Luminous High-Tech Fluoroscopy Suite (Deep Midnight Navy & Crimson Ruby)
 * Features 3D Tilt interaction on 4K equipment console, animated technical specifications,
 * and live C-Arm fluoroscopy telemetry.
 */
export default function MedicalTechnologyShowcase({ variant = 'home-technology' }) {
  const [activeTech, setActiveTech] = useState(0);

  const techArsenal = [
    {
      id: 'cathlab-system',
      title: 'Digital Flat-Panel Cath Suite',
      category: 'C-ARM FLUOROSCOPY',
      description: 'Sub-millimeter roadmap clarity with DoseSense -40% radiation minimization.',
      image: '/images/doctor-cathlab-procedure.jpg',
      videoUrl: '/videos/facilities-walkthrough.mp4',
      type: 'facilities-walkthrough',
      specs: [
        { label: 'Spatial Resolution', value: '< 0.3 mm Matrix' },
        { label: 'Frame Rate', value: '15–30 fps Cine' },
        { label: 'Dose Reduction', value: '-40% Exposure' },
        { label: 'Scope', value: 'Coronary & Peripheral' },
      ],
      clinicalValue: 'Micro-guidewire navigation across calcified bifurcations & CTO lesions.',
    },
    {
      id: 'angiogram-fluoroscopy',
      title: 'Cineangiographic Stenosis Mapping',
      category: 'DIAGNOSTIC LESION QCA',
      description: 'Dynamic non-ionic contrast cine evaluating stenosis dimensions.',
      image: '/images/doctor-angiogram-explain.jpg',
      videoUrl: '/videos/cardiac-catheterization.mp4',
      type: 'cardiac-catheterization',
      specs: [
        { label: 'Projection Angles', value: 'RAO/LAO Cranial' },
        { label: 'Calibration', value: 'QCA Stenosis Mapping' },
        { label: 'Approach', value: 'Right Transradial Wrist' },
        { label: 'Recovery', value: '2 Hours Post-Op' },
      ],
      clinicalValue: 'Gold-standard roadmap distinguishing medical vs. stent therapy.',
    },
    {
      id: 'stent-biomaterials',
      title: 'Cobalt-Chromium DES Stents',
      category: 'ENDOVASCULAR BIO-IMPLANTS',
      description: 'Ultra-thin strut lattices coated with 90-day antiproliferative polymer.',
      image: '/images/doctor-echo-checkup.jpg',
      videoUrl: '/videos/cardiology-heart.mp4',
      type: 'cardiology-heart',
      specs: [
        { label: 'Strut Thickness', value: '60–81 Microns' },
        { label: 'Polymer Matrix', value: 'Bio-Absorbable' },
        { label: 'Elution Agent', value: 'Everolimus' },
        { label: 'Patency Rate', value: '99.4% Flow' },
      ],
      clinicalValue: 'Rapid endothelial healing with zero foreign-body inflammation.',
    },
    {
      id: 'pacemaker-conduction',
      title: 'Micro-Lithium Rhythm Generator',
      category: 'ELECTROPHYSIOLOGY',
      description: 'Hermetically sealed titanium pulse generator with rate-responsive pacing.',
      image: '/images/pacemaker-tech.jpg',
      videoUrl: '/videos/cardiology-heart.mp4',
      type: 'cardiology-heart',
      specs: [
        { label: 'Battery Lifespan', value: '10–14 Years' },
        { label: 'Pacing Chambers', value: 'Single & Dual' },
        { label: 'Sensing Tech', value: 'Auto-Capture™' },
        { label: 'Telemetry Link', value: 'Wireless Inductive' },
      ],
      clinicalValue: 'Maintains physiological cardiac rhythm in severe heart blocks.',
    },
  ];

  const current = techArsenal[activeTech];

  return (
    <section className="relative py-28 lg:py-36 overflow-hidden select-none bg-gradient-to-b from-[#FAF9F6] via-[#F8FAFC] to-[#F1F5F9] border-b border-slate-200">

      {/* Bespoke Cleanroom Background */}
      <SectionBackgroundMotion variant={variant} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <ScrollReveal variant="fade-down">
          <div className="mb-10 text-center max-w-3xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-rose-200 text-[#0A1128] text-xs font-mono font-medium shadow-xs">
              <Radio className="w-4 h-4 text-[#BE123C] animate-pulse" />
              <span className="uppercase tracking-[0.2em]">Cath Lab &amp; Diagnostic Systems</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0A1128] tracking-tight">
              Interventional Technology <span className="font-serif italic font-normal text-[#BE123C]">Suite</span>
            </h2>

            <div className="flex flex-wrap items-center justify-center gap-2 pt-1 font-mono text-[11px] font-bold">
              <span className="bg-rose-50 text-rose-950 px-3 py-1 rounded-full border border-rose-200 shadow-xs">&lt; 0.3 mm Matrix</span>
              <span className="bg-slate-100 text-[#0A1128] px-3 py-1 rounded-full border border-slate-200 shadow-xs">DoseSense -40%</span>
              <span className="bg-rose-50 text-[#BE123C] px-3 py-1 rounded-full border border-rose-200 shadow-xs">99.4% Flow Restored</span>
            </div>
          </div>
        </ScrollReveal>

        {/* Main Content Grid: Balanced Side-by-Side Architecture */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start my-8">

          {/* Left Column (7 cols): Completely Unobstructed 4K Cinematic Equipment Showcase with 3D Tilt */}
          <div className="lg:col-span-7 space-y-4">
            <Interactive3DTilt maxTilt={8} glowColor="rgba(190, 18, 60, 0.22)">
              <div className="group relative rounded-[2.5rem] overflow-hidden bg-white/95 p-3 sm:p-4 border-2 border-slate-200 shadow-xl hover:shadow-2xl hover:border-rose-300 transition-all duration-500">
                <div className="relative rounded-[2rem] overflow-hidden">
                  <SectionCinematicVideo
                    type={current.type || "facilities-walkthrough"}
                    videoUrl={current.videoUrl}
                    styleVariant="floating-3d"
                    posterImage={current.image}
                    title={current.title}
                    subtitle={current.category}
                    specs={current.clinicalValue}
                    aspectRatio="aspect-[16/10]"
                  />
                </div>

                {/* Bottom Equipment Status Ticker with Lead Operator PiP Portrait */}
                <div className="mt-3 px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200 flex flex-wrap items-center justify-between gap-2 text-xs">
                  <div className="flex items-center gap-2.5">
                    <img
                      src="/images/doctor-portrait.jpg"
                      alt="Dr. Prakash Chand Shahi"
                      loading="lazy"
                      className="w-8 h-8 rounded-lg object-cover object-[50%_20%] border border-slate-300 shrink-0"
                    />
                    <div className="text-left">
                      <span className="font-mono font-bold text-[#0A1128] block leading-tight">{current.title}</span>
                      <span className="text-[10px] text-slate-500 block">Directed by Dr. Prakash Chand Shahi</span>
                    </div>
                  </div>
                  <div className="font-mono text-[11px] text-[#BE123C] font-bold">
                    {current.category}
                  </div>
                </div>
              </div>
            </Interactive3DTilt>

            {/* Clinical Value Callout */}
            <div className="p-4 rounded-2xl bg-white/90 border border-slate-200 shadow-xs text-left flex items-start gap-3 card-hover-elevate">
              <div className="w-8 h-8 rounded-xl bg-rose-50 flex items-center justify-center text-[#BE123C] shrink-0 mt-0.5">
                <ShieldCheck className="w-4 h-4 text-[#BE123C]" />
              </div>
              <div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#BE123C] block">
                  Clinical Value &amp; Safety Standard
                </span>
                <p className="text-xs text-slate-800 font-medium mt-0.5 leading-relaxed">
                  {current.clinicalValue}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column (5 cols): Interactive Technology Selector & Technical Specifications */}
          <div className="lg:col-span-5 space-y-5 text-left">

            {/* Technology Selection Tabs */}
            <div className="space-y-2">
              <span className="text-xs font-mono uppercase tracking-wider text-[#0A1128] font-bold block">
                Select Interventional Suite
              </span>
              <div className="grid grid-cols-1 gap-2">
                {techArsenal.map((tech, idx) => {
                  const isActive = activeTech === idx;

                  return (
                    <button
                      key={tech.id}
                      onClick={() => setActiveTech(idx)}
                      className={`w-full p-3.5 rounded-2xl text-left transition-all duration-300 flex items-center justify-between border cursor-pointer ${
                        isActive
                          ? 'bg-gradient-to-r from-[#0A1128] via-[#1E293B] to-[#BE123C] text-white shadow-lg scale-[1.01] border-rose-300/40'
                          : 'bg-white hover:bg-slate-50 text-slate-800 border-slate-200 shadow-2xs hover:border-slate-300'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <img
                          src={tech.image}
                          alt={tech.title}
                          loading="lazy"
                          className="w-12 h-12 rounded-xl object-cover border border-white/20 shrink-0"
                        />
                        <div className="space-y-0.5 text-left">
                          <span className={`text-xs font-bold block ${isActive ? 'text-white' : 'text-[#0A1128]'}`}>
                            {tech.title}
                          </span>
                          <span className={`text-[10px] font-mono block ${isActive ? 'text-slate-200' : 'text-slate-500'}`}>
                            {tech.category}
                          </span>
                        </div>
                      </div>
                      <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full ${
                        isActive ? 'bg-white/20 text-white font-bold' : 'bg-slate-100 text-slate-600'
                      }`}>
                        0{idx + 1}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Dedicated Technical Specifications HUD Table with Interactive Card Hover */}
            <div className="p-5 rounded-2xl bg-white/95 backdrop-blur-md border-2 border-slate-200 shadow-md space-y-3.5">
              <div className="flex items-center justify-between pb-2.5 border-b border-slate-100">
                <span className="text-xs font-mono uppercase tracking-wider text-[#0A1128] font-bold flex items-center gap-1.5">
                  <Zap className="w-4 h-4 text-[#BE123C]" />
                  <span>Technical Specifications</span>
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-rose-50 text-[10px] font-mono font-bold text-[#BE123C] border border-rose-200">
                  VERIFIED
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2">
                {current.specs.map((s, i) => (
                  <div key={i} className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 hover:bg-rose-50/50 hover:border-rose-200 transition-all text-left">
                    <span className="text-[10px] font-medium text-slate-500 block uppercase">
                      {s.label}
                    </span>
                    <span className="text-xs font-mono font-bold text-[#0A1128] block mt-0.5">
                      {s.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
