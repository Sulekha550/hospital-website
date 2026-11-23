import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Calendar, ArrowRight, ShieldCheck, Activity, Award, 
  Clock, Phone, HeartPulse, ChevronRight, Sparkles, CheckCircle2, Stethoscope
} from 'lucide-react';
import { PULSE_DATA } from '../data/pulseData';

/**
 * CinematicHeroSection
 * Completely redesigned architectural hero:
 * - Brand-new clean architectural pearl background with subtle blueprint lines & soft medical azure lighting
 * - Split-screen editorial composition: monumental typography + real hospital architectural photography
 * - Dual-photo layered composition: Modern hospital facade & Dr. Shahi in clinical consultation
 * - Sleek linear metrics strip (ZERO boxed cards)
 */
export default function CinematicHeroSection() {
  const { doctor, clinic } = PULSE_DATA;

  return (
    <section className="relative min-h-[92vh] lg:min-h-screen flex flex-col justify-between pt-28 pb-12 px-4 sm:px-6 lg:px-12 overflow-hidden select-none bg-[#FAFBF9]">
      
      {/* =========================================================================
          HIGH-DEFINITION VISIBLE BACKGROUND ARTWORK: BIOMETRIC CAD & FLOWING MEDICAL WAVES
         ========================================================================= */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        
        {/* 1. Luminous Ambient Atmospheric Spheres */}
        <div className="absolute -top-32 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-emerald-400/20 via-teal-300/15 to-transparent rounded-full blur-[130px]" />
        <div className="absolute top-1/2 -left-32 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-[#064E3B]/15 via-emerald-500/12 to-transparent rounded-full blur-[140px]" />
        <div className="absolute -bottom-24 right-1/4 w-[600px] h-[600px] bg-gradient-to-t from-amber-400/12 via-emerald-400/10 to-transparent rounded-full blur-[120px]" />

        {/* 2. Crisp Medical Dot-Matrix Grid */}
        <div className="absolute inset-0 bg-[radial-gradient(#059669_1.5px,transparent_1.5px)] bg-[size:32px_32px] opacity-25 [mask-image:radial-gradient(ellipse_80%_65%_at_50%_35%,#000_75%,transparent_100%)]" />

        {/* 3. Hairline Architectural Blueprint Lines & Crosshairs */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#064e3b18_1px,transparent_1px),linear-gradient(to_bottom,#064e3b18_1px,transparent_1px)] bg-[size:6rem_6rem] [mask-image:radial-gradient(ellipse_75%_65%_at_50%_35%,#000_60%,transparent_100%)]" />
        
        {/* CAD Alignment Crosshairs */}
        <div className="absolute top-28 left-12 text-emerald-800/40 font-mono text-sm select-none">+</div>
        <div className="absolute top-28 right-12 text-emerald-800/40 font-mono text-sm select-none">+</div>
        <div className="absolute bottom-36 left-12 text-emerald-800/40 font-mono text-sm select-none">+</div>
        <div className="absolute bottom-36 right-12 text-emerald-800/40 font-mono text-sm select-none">+</div>

        {/* 4. Layered Flowing Translucent Architectural Waves (Visible Organic Medical Contours) */}
        <svg className="absolute inset-0 w-full h-full opacity-35" viewBox="0 0 1440 900" fill="none" preserveAspectRatio="none">
          <defs>
            <linearGradient id="heroWave1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#059669" stopOpacity="0.25" />
              <stop offset="50%" stopColor="#10B981" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#34D399" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="heroWave2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.18" />
              <stop offset="50%" stopColor="#059669" stopOpacity="0.12" />
              <stop offset="100%" stopColor="#064E3B" stopOpacity="0" />
            </linearGradient>
          </defs>
          
          {/* Flowing Ribbon 1 */}
          <path
            d="M-100,280 C320,150 540,420 920,290 C1200,200 1380,380 1550,260 L1550,900 L-100,900 Z"
            fill="url(#heroWave1)"
          />
          {/* Flowing Ribbon 2 */}
          <path
            d="M-50,450 C280,320 620,550 1020,410 C1280,330 1420,490 1550,420 L1550,900 L-50,900 Z"
            fill="url(#heroWave2)"
          />
        </svg>

        {/* 5. Prominent Rotating Biometric Telemetry Rings (Right Side HUD) */}
        <div className="absolute top-1/2 -right-24 -translate-y-1/2 w-[620px] h-[620px] rounded-full border-2 border-emerald-700/15 hidden lg:block">
          {/* Outer Dashed Rotating Ring */}
          <div className="absolute inset-6 rounded-full border border-dashed border-emerald-600/25 animate-spin" style={{ animationDuration: '75s' }} />
          {/* Middle Precision Ring */}
          <div className="absolute inset-20 rounded-full border border-emerald-700/20 flex items-center justify-center">
            {/* Cardinal Radar Crosshairs */}
            <div className="absolute inset-x-0 h-px bg-emerald-600/20" />
            <div className="absolute inset-y-0 w-px bg-emerald-600/20" />
          </div>
          {/* Inner Concentric Target Ring */}
          <div className="absolute inset-36 rounded-full border border-emerald-500/25 border-t-emerald-600 animate-spin" style={{ animationDuration: '30s', animationDirection: 'reverse' }} />
          <div className="absolute inset-52 rounded-full border border-dashed border-amber-500/30" />
        </div>

        {/* 6. Active Glowing Cardiac ECG Heartbeat Rhythm Graphic (High Visibility) */}
        <div className="absolute bottom-28 left-0 right-0 z-0">
          <svg className="w-full h-32 opacity-50" viewBox="0 0 1440 120" fill="none" preserveAspectRatio="none">
            <path
              d="M0,60 L240,60 L270,60 L280,30 L295,95 L310,10 L325,85 L335,60 L380,60 L540,60 L570,60 L580,25 L595,100 L610,15 L625,90 L635,60 L680,60 L920,60 L950,60 L960,30 L975,95 L990,10 L1005,85 L1015,60 L1060,60 L1260,60 L1290,60 L1300,25 L1315,100 L1330,15 L1345,90 L1355,60 L1440,60"
              stroke="#059669"
              strokeWidth="2.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Glowing Blip on Cardiac Peaks */}
            <circle cx="310" cy="10" r="4.5" fill="#10B981" className="animate-ping" />
            <circle cx="610" cy="15" r="4.5" fill="#10B981" className="animate-ping" />
            <circle cx="990" cy="10" r="4.5" fill="#10B981" className="animate-ping" />
            <circle cx="1330" cy="15" r="4.5" fill="#10B981" className="animate-ping" />
          </svg>
        </div>

        {/* 7. Visible Technical Coordinate Stamps & Telemetry Badges */}
        <div className="absolute top-32 left-8 font-mono text-[11px] text-[#064E3B]/40 tracking-widest hidden md:block uppercase space-y-1 bg-white/60 backdrop-blur-xs p-3 rounded-xl border border-emerald-900/10">
          <div className="flex items-center gap-2 font-bold text-[#064E3B]/60">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>GEO: 26.7606° N • 83.3732° E [GORAKHPUR]</span>
          </div>
          <div>CATH-LAB SIEMENS ARTIS ZEE • HEPA-14</div>
          <div className="text-[10px] text-amber-700/60 font-semibold">CARDIAC TELEMETRY • HR: 72 BPM • CODE BLUE 24/7</div>
        </div>

        {/* Subtle Watermark Headline */}
        <div className="absolute top-1/2 left-4 -translate-y-1/2 text-[12vw] font-black text-[#064E3B]/[0.03] tracking-tighter uppercase pointer-events-none select-none">
          PULSE
        </div>

      </div>

      <div className="max-w-7xl mx-auto w-full flex-1 flex flex-col justify-center relative z-10 py-6 sm:py-10">
        
        {/* Top Status & Accreditation Strip */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white border border-emerald-200 shadow-xs">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#064E3B]">
              NABH Standards • Tertiary Multispeciality Hospital
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs font-semibold text-slate-700 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full border border-slate-200 shadow-xs">
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#059669]" />
              <span>OPD: 08:30 AM – 08:30 PM</span>
            </span>
            <span className="text-slate-300">•</span>
            <a href="tel:+919876543210" className="flex items-center gap-1.5 text-rose-600 font-bold hover:underline">
              <span className="w-1.5 h-1.5 rounded-full bg-rose-600 animate-ping" />
              <span>24/7 STEMI Code-Blue: +91 98765 43210</span>
            </a>
          </div>
        </div>

        {/* Master Hero Split Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column (7 cols): Editorial Typography & Direct Clinical Actions */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 text-[#064E3B] border border-emerald-200 text-xs font-bold uppercase tracking-[0.22em] shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#059669]" />
              <span>Apex Cardiac & Surgical Care • Betiahata, Gorakhpur</span>
            </div>

            <div className="space-y-3">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-[#064E3B] tracking-[-0.035em] leading-[1.04]">
                Restoring Rhythms. <br />
                <span className="font-serif italic font-normal text-[#059669]">Preserving Every Heartbeat.</span>
              </h1>
              
              {/* Doctor Dual Pedigree Highlight */}
              <div className="pt-1 flex flex-wrap items-center gap-3">
                <span className="text-base sm:text-lg font-semibold text-slate-800">
                  Directed by Dr. Prakash Chand Shahi
                </span>
                <span className="px-3 py-1 rounded-full bg-amber-50 border border-amber-300 text-amber-900 text-xs font-bold font-mono">
                  DM Cardiology (PGIMER) • MD (KGMU)
                </span>
              </div>
            </div>

            <p className="text-sm sm:text-base text-slate-700 max-w-xl leading-relaxed">
              Eastern UP’s premier referral destination for wrist-first transradial coronary angioplasty, permanent physiological pacemakers, and 24/7 hyperacute STEMI heart attack emergencies with digital flat-panel Cath Lab precision.
            </p>

            {/* Direct Action Row */}
            <div className="flex flex-wrap items-center gap-4 pt-3">
              <Link
                to="/book-appointment"
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-gradient-to-r from-[#064E3B] via-[#047857] to-[#059669] hover:from-[#022C22] hover:to-[#064E3B] text-white font-bold text-xs uppercase tracking-wider shadow-xl shadow-[#064E3B]/25 hover:shadow-2xl transition-all duration-300 hover:-translate-y-0.5 group"
              >
                <Calendar className="w-4 h-4 text-amber-300 group-hover:scale-110 transition-transform" />
                <span>Book Priority Consultation</span>
                <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
              </Link>

              <a
                href="tel:+919876543210"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-white hover:bg-slate-50 text-rose-700 font-bold text-xs uppercase tracking-wider border border-rose-200 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <Phone className="w-4 h-4 text-rose-600" />
                <span>Call Emergency Helpline</span>
              </a>
            </div>

            {/* Trust Highlights Strip (Zero Cards - Clean Flow) */}
            <div className="pt-3 flex flex-wrap items-center gap-6 text-xs text-slate-700 font-medium border-t border-slate-200/80">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>22+ Years in Gorakhpur</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Siemens Flat-Panel Cath Lab</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>NABH Accredited Safety</span>
              </div>
            </div>

          </div>

          {/* Right Column (5 cols): Layered Architectural & Clinical Photography (NO CARDS) */}
          <div className="lg:col-span-5 relative">
            
            {/* Primary Frame: Grand Hospital Facility Architectural Visual */}
            <div className="relative rounded-[2.5rem] overflow-hidden border-4 border-white shadow-2xl aspect-[4/5] bg-slate-100 group">
              <img
                src="/images/hospital-facility.jpg"
                alt="PULSE Hospital Modern Architectural Facility"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#064E3B]/85 via-transparent to-transparent pointer-events-none" />

              {/* Top Operational Pill */}
              <div className="absolute top-4 left-4 z-20">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md text-[#064E3B] text-[11px] font-bold border border-emerald-200 shadow-md">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Tertiary Care Facility • Betiahata</span>
                </div>
              </div>

              {/* Bottom In-Image Badge */}
              <div className="absolute bottom-6 left-6 right-6 z-20 text-white space-y-1">
                <span className="text-[10px] font-mono tracking-widest text-emerald-200 uppercase block">
                  Apex Medical Infrastructure
                </span>
                <h3 className="text-xl font-extrabold text-white">
                  PULSE Multispeciality Hospital
                </h3>
                <p className="text-xs text-slate-200">
                  Class-100 laminar flow operating suites & round-the-clock cardiac ICU.
                </p>
              </div>
            </div>

            {/* Overlapping Secondary Frame: Dr. Prakash Chand Shahi in Consultation */}
            <div className="absolute -bottom-8 -left-8 sm:-left-10 w-48 sm:w-56 rounded-2xl overflow-hidden border-4 border-white shadow-2xl bg-white aspect-[4/3] hidden sm:block group/sub hover:scale-105 transition-transform duration-300">
              <img
                src="/images/doctor-consulting.jpg"
                alt="Dr. Prakash Chand Shahi Patient Consultation"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-2.5 left-2.5 right-2.5 text-white">
                <span className="text-[9px] font-mono font-bold text-amber-300 block">
                  BEDSIDE ETHICS
                </span>
                <span className="text-[11px] font-bold block leading-tight">
                  Dr. P. C. Shahi
                </span>
              </div>
            </div>

            {/* Floating Pedigree Badge */}
            <div className="absolute -top-4 -right-4 px-4 py-2 rounded-2xl bg-white border border-emerald-200 shadow-xl text-left hidden sm:block">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#059669] block">
                Lead Pedigree
              </span>
              <span className="text-xs font-extrabold text-[#064E3B] block">
                PGIMER & KGMU
              </span>
            </div>

          </div>

        </div>

      </div>

      {/* =========================================================================
          BOTTOM METRICS STRIP: SEAMLESS DIVIDED RIBBON (ZERO CARDS)
         ========================================================================= */}
      <div className="max-w-7xl mx-auto w-full pt-8 border-t border-slate-200/90 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-slate-200">
          
          <div className="px-4 py-2 text-left">
            <span className="text-2xl sm:text-4xl font-extrabold text-[#064E3B] tracking-tight block">22+</span>
            <span className="text-xs text-slate-700 font-semibold uppercase tracking-wider block">Years of Dedication</span>
            <span className="text-[11px] text-slate-500">Unbroken clinical leadership in eastern UP</span>
          </div>

          <div className="px-4 py-2 text-left">
            <span className="text-2xl sm:text-4xl font-extrabold text-[#059669] tracking-tight block">12,000+</span>
            <span className="text-xs text-slate-700 font-semibold uppercase tracking-wider block">Cath Interventions</span>
            <span className="text-[11px] text-slate-500">Angioplasty, stenting & pacemaker implants</span>
          </div>

          <div className="px-4 py-2 text-left">
            <span className="text-2xl sm:text-4xl font-extrabold text-[#047857] tracking-tight block">99.4%</span>
            <span className="text-xs text-slate-700 font-semibold uppercase tracking-wider block">Radial Patency Rate</span>
            <span className="text-[11px] text-slate-500">Wrist-first access with zero groin immobilization</span>
          </div>

          <div className="px-4 py-2 text-left">
            <span className="text-2xl sm:text-4xl font-extrabold text-rose-600 tracking-tight block">&lt; 45 Min</span>
            <span className="text-xs text-slate-700 font-semibold uppercase tracking-wider block">STEMI Door-To-Balloon</span>
            <span className="text-[11px] text-slate-500">Round-the-clock emergency Code-Blue response</span>
          </div>

        </div>
      </div>

    </section>
  );
}
