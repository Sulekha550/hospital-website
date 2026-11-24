import React from 'react';

/**
 * DoctorHeroMedicalCanvas
 * Dedicated high-visibility animated background design system for the About Page Doctor Hero section.
 * Authentic medical/cardiology elements:
 * - Branching coronary arterial tree with traveling hemodynamic pulse blips
 * - Pulsing cardiac silhouette & stethoscope acoustic diagnostic rings
 * - Real-time ECG sinus rhythm waveforms with millimetric medical graph grid
 * - Floating clinical telemetry vitals (72 BPM Sinus, 120/80 mmHg, SpO2 99%)
 * - Stent catheterization caliper crosshairs & fluoroscopy scanning beam
 * - Deep Midnight Navy, Crimson Ruby & Warm Platinum palette
 */
export default function DoctorHeroMedicalCanvas({ className = "" }) {
  return (
    <div
      className={`absolute inset-0 pointer-events-none z-0 overflow-hidden select-none ${className}`}
      aria-hidden="true"
    >
      {/* 1. Base Ambient Medical Lighting Wash (Warm Platinum Alabaster Silk) */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#FAF9F6] via-[#F8FAFC] to-[#F1F5F9]" />

      {/* Floating Luminous Vitality Spheres */}
      <div className="absolute -top-20 right-1/4 w-[600px] h-[600px] bg-gradient-to-bl from-[#BE123C]/12 via-[#0A1128]/10 to-transparent rounded-full blur-[100px] animate-float-1" />
      <div className="absolute top-1/4 -left-20 w-[550px] h-[550px] bg-gradient-to-tr from-[#0A1128]/10 via-[#E11D48]/12 to-transparent rounded-full blur-[110px] animate-float-2" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-gradient-to-t from-[#BE123C]/15 via-slate-200/40 to-transparent rounded-full blur-[100px] animate-float-3" />

      {/* 2. Authentic Medical ECG Graph Paper Blueprint Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#0A112815_1.5px,transparent_1.5px)] bg-[size:20px_20px] [mask-image:radial-gradient(ellipse_95%_85%_at_50%_40%,#000_80%,transparent_100%)] opacity-70" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0A112810_1px,transparent_1px),linear-gradient(to_bottom,#0A112810_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_90%_80%_at_50%_40%,#000_80%,transparent_100%)] pointer-events-none" />

      {/* 3. Sweeping Echocardiogram / Fluoroscopy Scanning Laser Beam */}
      <div className="absolute inset-x-0 h-[2.5px] bg-gradient-to-r from-transparent via-[#BE123C] to-transparent shadow-[0_0_24px_#E11D48] opacity-80 animate-laser-sweep pointer-events-none" />
      <div className="absolute -inset-x-full inset-y-0 w-[200%] h-full bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none animate-laser-diag" />

      {/* 4. Large Pulsing Cardiac Silhouette with Coronary Arterial Tree (Right Side Behind Credentials) */}
      <div className="absolute top-1/2 -right-6 -translate-y-1/2 w-[580px] h-[580px] opacity-75 pointer-events-none">
        <svg viewBox="0 0 400 400" className="w-full h-full" fill="none">
          <defs>
            <linearGradient id="arterialFlowGradBespoke" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0A1128" stopOpacity="0.9" />
              <stop offset="50%" stopColor="#BE123C" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#E11D48" stopOpacity="0.9" />
            </linearGradient>
            <linearGradient id="heartShadowGradBespoke" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F1F5F9" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#FFE4E6" stopOpacity="0.35" />
            </linearGradient>
          </defs>

          {/* Anatomical Heart Organic Outline (Breathing Pulse) */}
          <g className="animate-pulse-glow" style={{ transformOrigin: '200px 200px' }}>
            <path
              d="M200,90 C220,50 290,40 320,100 C350,160 300,240 200,330 C100,240 50,160 80,100 C110,40 180,50 200,90 Z"
              fill="url(#heartShadowGradBespoke)"
              stroke="#BE123C"
              strokeWidth="2.2"
              strokeDasharray="6 4"
              opacity="0.85"
            />
          </g>

          {/* Ascending Aorta & Major Arch Branches */}
          <path
            d="M200,100 C200,60 215,40 235,40 C255,40 265,65 260,95"
            stroke="#0A1128"
            strokeWidth="4"
            strokeLinecap="round"
          />
          {/* Brachiocephalic & Carotid Vessels */}
          <path d="M220,45 L220,18" stroke="#0A1128" strokeWidth="3" strokeLinecap="round" />
          <path d="M235,40 L235,15" stroke="#BE123C" strokeWidth="3" strokeLinecap="round" />
          <path d="M250,45 L255,20" stroke="#0A1128" strokeWidth="3" strokeLinecap="round" />

          {/* Left Anterior Descending (LAD) Coronary Artery with Pulsing Flow */}
          <path
            d="M200,100 Q195,160 170,210 T185,290"
            stroke="url(#arterialFlowGradBespoke)"
            strokeWidth="3.5"
            strokeDasharray="180"
            className="animate-flow-dash"
          />
          {/* Circumflex & Diagonal Branching Capillaries */}
          <path d="M190,140 Q160,165 130,175" stroke="#BE123C" strokeWidth="2.4" strokeDasharray="6 4" />
          <path d="M175,190 Q150,215 135,245" stroke="#E11D48" strokeWidth="2.2" strokeDasharray="5 4" />
          <path d="M180,240 Q205,260 215,280" stroke="#0A1128" strokeWidth="2.4" strokeDasharray="6 3" />

          {/* Right Coronary Artery (RCA) Branch */}
          <path
            d="M215,105 Q260,150 250,220 Q240,260 210,310"
            stroke="url(#arterialFlowGradBespoke)"
            strokeWidth="3.2"
            strokeDasharray="200"
            className="animate-flow-dash-fast"
          />
          <path d="M255,170 Q285,185 300,200" stroke="#BE123C" strokeWidth="2.2" strokeDasharray="5 5" />

          {/* Dynamic Traveling Blood Flow Beacons (Active Angioplasty Markers) */}
          <circle cx="170" cy="210" r="5.5" fill="#BE123C" className="animate-ping" />
          <circle cx="250" cy="220" r="5" fill="#0A1128" className="animate-ping" />
          <circle cx="200" cy="330" r="6" fill="#E11D48" className="animate-ping" />
        </svg>
      </div>

      {/* 5. Medical Stethoscope Acoustic Diaphragm Sonar Rings (Left Side Behind Doctor Photo) */}
      <div className="absolute top-1/2 -left-20 -translate-y-1/2 w-[520px] h-[520px] rounded-full border-2 border-slate-300/60 pointer-events-none">
        {/* Continuous Diagnostic Sonar Acoustic Waves */}
        <div className="absolute inset-8 rounded-full border-2 border-dashed border-rose-300/50 animate-radar-sweep" />
        <div className="absolute inset-20 rounded-full border-2 border-slate-300/60 animate-gentle-cw">
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-0.5 bg-slate-300/60" />
          <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-0.5 bg-slate-300/60" />
        </div>
        <div className="absolute inset-32 rounded-full border-2 border-rose-400/50 animate-pulse-glow" />
        <div className="absolute inset-44 rounded-full bg-gradient-to-br from-slate-100 via-white/90 to-rose-50 border-2 border-slate-300 shadow-lg flex items-center justify-center">
          <div className="w-6 h-6 rounded-full bg-[#BE123C] animate-ping opacity-90" />
        </div>
      </div>

      {/* 6. Floating Diagnostic Cardiology Telemetry HUD Chips */}
      {/* Chip 1: Live Sinus Rhythm Telemetry (Top Left) */}
      <div className="absolute top-24 left-6 sm:left-12 flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/95 backdrop-blur-md border-2 border-slate-200 shadow-md animate-float-1 z-10">
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
        </span>
        <span className="text-xs font-mono font-extrabold text-[#0A1128]">
          72 BPM • NSR Sinus Rhythm
        </span>
        <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-700 font-bold border border-emerald-200">
          NORMAL
        </span>
      </div>

      {/* Chip 2: Catheterization Lab Telemetry (Top Right) */}
      <div className="absolute top-24 right-6 sm:right-12 flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/95 backdrop-blur-md border-2 border-rose-200 shadow-md animate-float-2 z-10">
        <span className="w-2.5 h-2.5 rounded-full bg-[#BE123C] animate-ping" />
        <span className="text-xs font-mono font-extrabold text-[#0A1128]">
          Artis Zee Cath Lab • Transradial
        </span>
        <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-rose-50 text-[#BE123C] font-bold border border-rose-200">
          24/7 ACTIVE
        </span>
      </div>

      {/* Chip 3: Arterial Pressure & SpO2 Monitor (Middle Left) */}
      <div className="absolute top-2/3 left-4 sm:left-8 hidden md:flex items-center gap-3 px-3.5 py-2 rounded-xl bg-white/95 backdrop-blur-md border border-slate-200 shadow-md animate-float-3 z-10">
        <div className="text-left font-mono">
          <div className="text-[11px] text-slate-700 font-bold">BP 120/80 mmHg • Radial Pulse 72/m</div>
          <div className="text-[11px] text-[#BE123C] font-extrabold">SpO2 99% • Door-To-Balloon &lt; 45 Min</div>
        </div>
      </div>

      {/* 7. Clinical Measurement Calipers & Fluoroscopy Crosshairs */}
      <div className="absolute top-36 left-1/3 text-[#BE123C] font-mono text-[11px] font-bold tracking-wider select-none hidden md:block bg-rose-50/90 px-2.5 py-0.5 rounded border border-rose-200">
        [+ CORONARY STENT CALIPER: 3.0mm × 28mm DES]
      </div>
      <div className="absolute bottom-28 right-1/4 text-[#BE123C] font-mono text-[11px] font-bold tracking-wider select-none hidden md:block bg-rose-50/90 px-2.5 py-0.5 rounded border border-rose-200">
        [+ TRANSRADIAL ACCESS: SHEATHLESS 6F GUIDING]
      </div>

      {/* Floating Animated Medical Crosses (+) */}
      <div className="absolute top-1/2 left-8 text-[#BE123C] font-mono text-2xl font-black animate-medical-cross-1 select-none opacity-80">+</div>
      <div className="absolute top-1/4 right-24 text-[#0A1128] font-mono text-2xl font-black animate-medical-cross-2 select-none opacity-70">+</div>
      <div className="absolute bottom-36 left-1/4 text-[#BE123C] font-mono text-xl font-black animate-medical-cross-2 select-none opacity-70">+</div>
      <div className="absolute bottom-20 right-16 text-[#0A1128] font-mono text-2xl font-black animate-medical-cross-1 select-none opacity-80">+</div>

      {/* Bioluminescent Micro-Particles */}
      <div className="absolute top-1/3 right-1/4 text-[#BE123C] text-lg animate-float-bob">✦</div>
      <div className="absolute bottom-1/3 left-1/3 text-[#0A1128] text-xl animate-float-1">✦</div>
      <div className="absolute top-20 right-1/3 text-[#E11D48] text-sm animate-float-2">✦</div>

      {/* 8. Continuous Moving High-Precision Clinical ECG Waveform with Traveling Pulse */}
      {/* Upper ECG Ribbon (Behind Heading and Hero Top) */}
      <div className="absolute top-44 left-0 right-0 z-0 opacity-85 pointer-events-none">
        <svg className="w-full h-20" viewBox="0 0 1440 80" fill="none" preserveAspectRatio="none">
          <defs>
            <linearGradient id="doctorHeroEcgGradTop" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#0A1128" stopOpacity="0.2" />
              <stop offset="30%" stopColor="#BE123C" stopOpacity="0.9" />
              <stop offset="60%" stopColor="#E11D48" stopOpacity="1" />
              <stop offset="100%" stopColor="#0A1128" stopOpacity="0.3" />
            </linearGradient>
          </defs>
          <path
            d="M0,40 L260,40 L280,40 L290,15 L305,65 L320,5 L335,55 L345,40 L400,40 L640,40 L660,40 L670,12 L685,68 L700,4 L715,60 L725,40 L780,40 L1020,40 L1040,40 L1050,15 L1065,65 L1080,5 L1095,55 L1105,40 L1440,40"
            stroke="url(#doctorHeroEcgGradTop)"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray="600"
            className="animate-flow-dash"
          />
          <circle cx="320" cy="5" r="5" fill="#BE123C" className="animate-ping" />
          <circle cx="700" cy="4" r="5" fill="#0A1128" className="animate-ping" />
          <circle cx="1080" cy="5" r="5" fill="#BE123C" className="animate-ping" />
        </svg>
      </div>

      {/* Bottom ECG Ribbon */}
      <div className="absolute bottom-2 left-0 right-0 z-0 opacity-95 pointer-events-none">
        <svg className="w-full h-24" viewBox="0 0 1440 100" fill="none" preserveAspectRatio="none">
          <defs>
            <linearGradient id="doctorHeroEcgGradBottom" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#0A1128" stopOpacity="0.3" />
              <stop offset="30%" stopColor="#BE123C" stopOpacity="0.95" />
              <stop offset="60%" stopColor="#E11D48" stopOpacity="1" />
              <stop offset="100%" stopColor="#0A1128" stopOpacity="0.4" />
            </linearGradient>
          </defs>
          <path
            d="M0,50 L260,50 L280,50 L290,25 L305,80 L320,8 L335,70 L345,50 L400,50 L640,50 L660,50 L670,20 L685,82 L700,6 L715,72 L725,50 L780,50 L1020,50 L1040,50 L1050,25 L1065,80 L1080,8 L1095,70 L1105,50 L1440,50"
            stroke="url(#doctorHeroEcgGradBottom)"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray="600"
            className="animate-flow-dash"
          />
          {/* Active Cardiac Peak Ping Beacons */}
          <circle cx="320" cy="8" r="6" fill="#BE123C" className="animate-ping" />
          <circle cx="700" cy="6" r="6" fill="#0A1128" className="animate-ping" />
          <circle cx="1080" cy="8" r="6" fill="#BE123C" className="animate-ping" />
        </svg>
      </div>
    </div>
  );
}
