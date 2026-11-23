import React, { useState, useEffect } from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { Activity, Menu, X, Calendar, Volume2, VolumeX, ArrowRight } from 'lucide-react';
import { pulseAudio } from '../utils/soundEffects';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 25);
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
          ? 'bg-white/95 backdrop-blur-2xl border border-white/90 shadow-[0_15px_35px_rgba(109,40,217,0.08)]'
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
              <span className="font-extrabold text-xl tracking-[0.2em] text-[#064E3B] group-hover:text-[#059669] transition-colors uppercase leading-none">
                PULSE
              </span>
              <span className="text-[10px] tracking-[0.26em] uppercase font-bold text-[#059669] font-mono mt-0.5">
                Heart Centre
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-1 px-3 py-1.5 rounded-full bg-slate-100/90 border border-slate-200/90 backdrop-blur-md">
            {navLinks.map((item) => (
              <NavLink
                key={item.label}
                to={item.path}
                className={({ isActive }) => `px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider transition-all duration-300 ${
                  isActive
                    ? 'bg-gradient-to-r from-[#064E3B] via-[#047857] to-[#059669] text-white shadow-md shadow-[#064E3B]/25 scale-102'
                    : 'text-slate-700 hover:text-[#059669] hover:bg-white'
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
                  ? 'bg-emerald-50 border-emerald-300 text-[#064E3B] shadow-sm' 
                  : 'bg-white border-slate-200 text-slate-700 hover:text-[#059669] hover:bg-slate-50'
              }`}
            >
              {soundEnabled ? <Volume2 className="w-4 h-4 text-[#059669]" /> : <VolumeX className="w-4 h-4" />}
            </button>

            <Link
              to="/book-appointment"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-[#064E3B] via-[#047857] to-[#059669] hover:from-[#022C22] hover:via-[#064E3B] hover:to-[#047857] text-white font-semibold text-xs uppercase tracking-wider shadow-md shadow-[#064E3B]/25 hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-0.5"
            >
              <Calendar className="w-3.5 h-3.5 text-amber-300" />
              <span>Book Appointment</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-slate-100 text-slate-900"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </nav>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 p-4 rounded-3xl bg-white/95 backdrop-blur-2xl border border-slate-200 shadow-2xl space-y-2">
            {navLinks.map((item) => (
              <Link
                key={item.label}
                to={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-2.5 rounded-2xl text-xs font-bold uppercase tracking-wider text-slate-800 hover:bg-purple-50 hover:text-purple-700 transition-colors text-left"
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-2 border-t border-slate-100">
              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3 rounded-full bg-slate-950 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md"
              >
                <Calendar className="w-4 h-4 text-purple-300" />
                <span>Book Priority Appointment</span>
              </Link>
            </div>
          </div>
        )}

      </div>
    </header>
  );
}
