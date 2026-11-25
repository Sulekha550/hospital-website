import React, { useState, useEffect } from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { Activity, Menu, X, Calendar, Volume2, VolumeX, ArrowRight, Stethoscope } from 'lucide-react';
import { pulseAudio } from '../utils/soundEffects';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const next = window.scrollY > 25;
      setScrolled((prev) => (prev === next ? prev : next));
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleSound = () => {
    const nextState = !soundEnabled;
    setSoundEnabled(nextState);
    pulseAudio.isEnabled = nextState;
    if (nextState) {
      pulseAudio.playBeep();
      pulseAudio.playHeartbeat();
    }
  };

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Treatments', path: '/treatments' },
    { label: 'Hospital', path: '/hospital' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-3.5 px-4 sm:px-8 select-none">
      <div className="max-w-7xl mx-auto">
        <nav className={`flex items-center justify-between px-5 sm:px-7 py-2.5 rounded-full transition-all duration-300 ${scrolled
          ? 'bg-white/95 backdrop-blur-2xl border border-white/90 shadow-[0_15px_35px_rgba(6,78,59,0.08)]'
          : 'bg-white/80 backdrop-blur-xl border border-white/90 shadow-sm'
          }`}>

          {/* Brand Logo: PULSE Heart Centre */}
          <Link
            to="/"
            className="group flex items-center gap-3"
            onClick={() => setMobileMenuOpen(false)}
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl overflow-hidden bg-white/95 p-1 border border-slate-200 shadow-sm flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-300">
              <img
                src="/images/p.webp"
                alt="Pulse Heart Centre Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col text-left">
              <span className="font-extrabold text-xl tracking-[0.2em] text-[#0A1128] group-hover:text-[#BE123C] transition-colors uppercase leading-none">
                PULSE
              </span>
              <span className="text-[10px] tracking-[0.26em] uppercase font-bold text-[#BE123C] font-mono mt-0.5">
                Heart Centre
              </span>
            </div>
          </Link>

          {/* Lead Doctor Identification Pill (With Stethoscope Crest) */}
          <Link
            to="/about"
            className="hidden xl:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-[11px] font-mono text-[#0A1128] font-bold hover:border-rose-300 hover:text-[#BE123C] transition-colors shadow-2xs"
          >
            <div className="w-5 h-5 rounded-full bg-gradient-to-br from-[#0A1128] to-[#BE123C] flex items-center justify-center text-white">
              <Stethoscope className="w-3 h-3" />
            </div>
            <span>Dr. Prakash Chand Shahi • DM (PGIMER)</span>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-1 px-3 py-1.5 rounded-full bg-slate-100/90 border border-slate-200/90 backdrop-blur-md">
            {navLinks.map((item) => (
              <NavLink
                key={item.label}
                to={item.path}
                className={({ isActive }) => `relative px-4 py-1.5 rounded-full text-xs font-bold tracking-wider transition-all duration-300 ${
                  isActive
                    ? 'bg-gradient-to-r from-[#0A1128] via-[#1E293B] to-[#BE123C] text-white shadow-md shadow-navy/30 scale-102 border border-rose-300/30'
                    : 'text-slate-700 hover:text-[#BE123C] hover:bg-white/80'
                }`}
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          {/* Actions: Sound Toggle + Prominent Book Appointment CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={toggleSound}
              title={soundEnabled ? "Mute cardiac audio" : "Enable cardiac bio-rhythm audio"}
              className={`p-2.5 rounded-full border transition-all duration-300 hover:scale-105 active:scale-95 ${
                soundEnabled 
                  ? 'bg-rose-50 border-rose-300 text-[#BE123C] shadow-sm' 
                  : 'bg-white border-slate-200 text-slate-700 hover:text-[#BE123C] hover:bg-slate-50'
              }`}
            >
              {soundEnabled ? <Volume2 className="w-4 h-4 text-[#BE123C]" /> : <VolumeX className="w-4 h-4" />}
            </button>

            <Link
              to="/book-appointment"
              className="luxury-btn-primary !px-5 !py-2 !text-xs group"
            >
              <Calendar className="w-3.5 h-3.5 text-rose-200 group-hover:scale-110 transition-transform" />
              <span>Book Appointment</span>
              <ArrowRight className="w-3.5 h-3.5 text-rose-300 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Mobile Menu Button + Sound Toggle */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={toggleSound}
              title={soundEnabled ? "Mute cardiac audio" : "Enable cardiac bio-rhythm audio"}
              className={`p-2 rounded-xl border transition-all ${
                soundEnabled 
                  ? 'bg-rose-50 border-rose-300 text-[#BE123C]' 
                  : 'bg-white border-slate-200 text-slate-700'
              }`}
            >
              {soundEnabled ? <Volume2 className="w-4 h-4 text-[#BE123C]" /> : <VolumeX className="w-4 h-4" />}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-slate-100 text-slate-900 hover:bg-slate-200"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-[#BE123C]" /> : <Menu className="w-5 h-5 text-[#0A1128]" />}
            </button>
          </div>

        </nav>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 p-4 rounded-3xl bg-white/98 backdrop-blur-2xl border-2 border-slate-200 shadow-2xl space-y-2.5 animate-in fade-in slide-in-from-top-2 duration-200">
            {/* Mobile Lead Doctor Banner */}
            <div className="flex items-center gap-2.5 p-2 rounded-2xl bg-rose-50 border border-rose-200 mb-2">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#0A1128] to-[#BE123C] flex items-center justify-center text-white shrink-0">
                <Stethoscope className="w-4 h-4" />
              </div>
              <div className="text-left">
                <span className="text-xs font-bold text-[#0A1128] block leading-tight">Dr. Prakash Chand Shahi</span>
                <span className="text-[10px] text-[#BE123C] font-mono font-semibold block">DM Cardiology (PGIMER)</span>
              </div>
            </div>

            {navLinks.map((item) => (
              <NavLink
                key={item.label}
                to={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) => `block px-4 py-2.5 rounded-2xl text-xs font-bold uppercase tracking-wider transition-all text-left ${
                  isActive
                    ? 'bg-gradient-to-r from-[#0A1128] to-[#BE123C] text-white shadow-md'
                    : 'text-slate-800 hover:bg-rose-50 hover:text-[#BE123C]'
                }`}
              >
                {item.label}
              </NavLink>
            ))}

            <div className="pt-2 border-t border-slate-100 space-y-2">
              <Link
                to="/book-appointment"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3 rounded-full bg-gradient-to-r from-[#0A1128] via-[#1E293B] to-[#BE123C] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md shadow-navy/20"
              >
                <Calendar className="w-4 h-4 text-rose-200" />
                <span>Book Priority Appointment</span>
              </Link>

              <a
                href="tel:+919876543210"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-2.5 rounded-full bg-slate-50 hover:bg-rose-50 text-[#0A1128] hover:text-[#BE123C] font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 border border-slate-200"
              >
                <span className="w-2 h-2 rounded-full bg-[#BE123C] animate-ping" />
                <span>24/7 Helpline: +91 98765 43210</span>
              </a>
            </div>
          </div>
        )}

      </div>
    </header>
  );
}
