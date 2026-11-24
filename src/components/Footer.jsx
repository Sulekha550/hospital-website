import React from 'react';
import { Link } from 'react-router-dom';
import { Activity, MapPin, Clock, ArrowUp, Calendar, Heart, Facebook, Instagram, ShieldCheck, Stethoscope } from 'lucide-react';
import { PULSE_DATA } from '../data/pulseData';
import SectionBackgroundMotion from './SectionBackgroundMotion';

export default function Footer() {
  const { clinic, doctor, socials } = PULSE_DATA;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gradient-to-b from-[#2A161B] via-[#1E0F13] to-[#140A0D] text-white overflow-hidden border-t-2 border-rose-400/40 select-none">
      
      {/* Rich but subtle coral and blush combination with elegant finishing */}
      <SectionBackgroundMotion variant="footer" />

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

            <div className="pt-2 flex items-center gap-3 text-xs text-left p-2.5 rounded-2xl bg-white/5 border border-[#A7F3D0]/30 w-fit">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#064E3B] to-[#047857] border border-[#A7F3D0] flex items-center justify-center text-[#A7F3D0] shrink-0">
                <Stethoscope className="w-5 h-5 stroke-[1.8]" />
              </div>
              <div>
                <span className="font-bold text-white block text-sm">
                  {doctor.name}
                </span>
                <span className="text-[#A7F3D0] block font-mono text-[10px]">
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
                <Clock className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
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
