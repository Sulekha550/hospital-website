import React from 'react';
import { Link } from 'react-router-dom';
import { Activity, MapPin, Clock, ArrowUp, Calendar, Heart, Facebook, Instagram, ShieldCheck, Stethoscope } from 'lucide-react';
import { PULSE_DATA } from '../data/pulseData';

export default function Footer() {
  const { clinic, doctor, socials } = PULSE_DATA;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gradient-to-b from-[#450A0A] via-[#011C15] to-[#00100C] text-white overflow-hidden border-t-2 border-[#FECDD3]/40 select-none">
      
      {/* =========================================================================
          UNIQUE FOOTER BACKGROUND: EMERALD, PINE & MINT GREEN AURA
         ========================================================================= */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        {/* Ambient Video Background Layer */}
        <div className="absolute inset-0 z-0 overflow-hidden opacity-20 mix-blend-screen">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            className="w-full h-full object-cover filter contrast-125 saturate-150"
          >
            <source src="/videos/hero-architecture.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-[#450A0A]/90 via-[#011C15]/85 to-[#00100C]" />
        </div>

        {/* Luminous Mint & Teal Depth Orbs */}
        <div className="absolute -top-24 left-1/4 w-[650px] h-[650px] bg-[#FECDD3]/15 rounded-full blur-[140px] animate-float-1" />
        <div className="absolute -bottom-20 right-10 w-[600px] h-[600px] bg-[#38BDF8]/15 rounded-full blur-[130px] animate-float-2" />
        <div className="absolute top-1/2 -right-20 w-[450px] h-[450px] bg-[#991B1B]/25 rounded-full blur-[120px]" />

        {/* Constellation Grid Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(#FECDD325_1.5px,transparent_1.5px)] bg-[size:32px_32px] opacity-40" />

        {/* Rotating Tech Compass Ring in Bottom-Right Corner */}
        <div className="absolute -bottom-24 -right-24 w-[420px] h-[420px] rounded-full border border-[#FECDD3]/20 pointer-events-none hidden lg:block">
          <div className="absolute inset-6 rounded-full border border-dashed border-[#38BDF8]/30 animate-radar-sweep" />
          <div className="absolute inset-16 rounded-full border border-[#FECDD3]/20 animate-rotate-reverse" />
        </div>

        {/* Flowing Golden ECG Cardiac Line Across Bottom */}
        <div className="absolute bottom-0 left-0 right-0 z-0 opacity-60">
          <svg className="w-full h-20" viewBox="0 0 1440 80" fill="none" preserveAspectRatio="none">
            <path
              d="M0,40 L300,40 L320,40 L330,15 L340,65 L350,5 L360,55 L370,40 L600,40 L620,40 L630,15 L640,65 L650,5 L660,55 L670,40 L1000,40 L1020,40 L1030,15 L1040,65 L1050,5 L1060,55 L1070,40 L1440,40"
              stroke="#FECDD3"
              strokeWidth="2.5"
              strokeDasharray="300"
              className="animate-flow-dash"
            />
            <circle cx="350" cy="5" r="5" fill="#38BDF8" className="animate-ping" />
            <circle cx="650" cy="5" r="5" fill="#FECDD3" className="animate-ping" />
            <circle cx="1050" cy="5" r="5" fill="#38BDF8" className="animate-ping" />
          </svg>
        </div>

        {/* Sweeping Laser Beam in Footer */}
        <div className="absolute left-0 right-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#FECDD3] to-transparent shadow-[0_0_15px_#0284C7] opacity-60 animate-laser-h pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 pt-16 pb-12 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-white/10">
          
          {/* Brand Identity */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl overflow-hidden bg-white p-1 border border-purple-300/40 shadow-sm flex items-center justify-center shrink-0">
                <img
                  src="/images/p.webp"
                  alt="Pulse Heart Centre Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col text-left">
                <span className="font-display font-bold text-xl tracking-[0.2em] text-white uppercase leading-none">
                  PULSE
                </span>
                <span className="text-[9px] tracking-[0.25em] uppercase font-bold text-purple-300 font-mono mt-0.5">
                  Heart Centre
                </span>
              </div>
            </div>

            <p className="text-slate-400 text-xs sm:text-sm font-light leading-relaxed max-w-sm text-left">
              Advanced cardiac care and catheterization guided by experience, precision and compassion. Directed by Dr. Prakash Chand Shahi.
            </p>

            <div className="pt-2 flex items-center gap-3 text-xs text-left p-2.5 rounded-2xl bg-white/5 border border-[#FECDD3]/30 w-fit">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#991B1B] to-[#B91C1C] border border-[#FECDD3] flex items-center justify-center text-[#FECDD3] shrink-0">
                <Stethoscope className="w-5 h-5 stroke-[1.8]" />
              </div>
              <div>
                <span className="font-bold text-white block text-sm">
                  {doctor.name}
                </span>
                <span className="text-[#FECDD3] block font-mono text-[10px]">
                  DM Cardiology (PGIMER) • MD (KGMU) • 22+ Yrs
                </span>
              </div>
            </div>

            {/* Official Social Media Channels */}
            <div className="pt-3 text-left">
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-purple-300 block mb-2 font-bold">
                Connect With Dr. Shahi
              </span>
              <div className="flex flex-wrap items-center gap-2.5">
                <a
                  href={socials?.facebook || "https://www.facebook.com/share/1EHVta9Gk8/"}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook Profile"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/10 hover:bg-[#1877F2] text-white text-xs font-medium border border-white/15 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/30"
                >
                  <Facebook className="w-4 h-4 text-blue-400 group-hover:text-white" />
                  <span>Facebook</span>
                </a>

                <a
                  href={socials?.instagram || "https://www.instagram.com/prakashchandshahi763?lqvp=MWdyN2Q0YTM1NmJxMA=="}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram Profile"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/10 hover:bg-gradient-to-r hover:from-[#833AB4] hover:via-[#FD1D1D] hover:to-[#F77737] text-white text-xs font-medium border border-white/15 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-pink-500/30"
                >
                  <Instagram className="w-4 h-4 text-pink-400 group-hover:text-white" />
                  <span>Instagram</span>
                </a>
              </div>
            </div>
          </div>

          {/* Quick Navigation Links to Separate Pages */}
          <div className="lg:col-span-3 space-y-3 text-left">
            <span className="text-xs uppercase tracking-wider text-purple-300 font-bold block">
              Pages
            </span>
            <ul className="space-y-2.5 text-xs font-light text-slate-300">
              <li>
                <Link to="/" className="hover:text-purple-300 transition-colors">Home Atelier</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-purple-300 transition-colors">About Dr. P. C. Shahi</Link>
              </li>
              <li>
                <Link to="/treatments" className="hover:text-purple-300 transition-colors">Treatments & Procedures</Link>
              </li>
              <li>
                <Link to="/hospital" className="hover:text-purple-300 transition-colors">Pulse Heart Centre, Betiahata</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-purple-300 transition-colors">Book Private Consultation</Link>
              </li>
            </ul>
          </div>

          {/* Clinic Information */}
          <div className="lg:col-span-5 space-y-3 text-left">
            <span className="text-xs uppercase tracking-wider text-purple-300 font-bold block">
              Pulse Heart Centre
            </span>

            <div className="space-y-2.5 text-xs text-slate-300 font-light">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                <span>{clinic.name}, {clinic.address}</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <span>{clinic.hours} ({clinic.sunday})</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Calendar className="w-4 h-4 text-purple-400 shrink-0" />
                <span>Gorakhpur, Uttar Pradesh — PIN 273001</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 font-light">
          <p>© {new Date().getFullYear()} Pulse Heart Centre. Professional Clinical Cardiology Practice.</p>

          <div className="flex items-center gap-4">
            <a
              href="https://www.facebook.com/share/1EHVta9Gk8/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors"
              title="Dr. Prakash Chand Shahi on Facebook"
            >
              <Facebook className="w-4 h-4" />
            </a>
            <a
              href="https://www.instagram.com/prakashchandshahi763?lqvp=MWdyN2Q0YTM1NmJxMA=="
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors"
              title="Dr. Prakash Chand Shahi on Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors ml-2"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5 text-purple-300" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
