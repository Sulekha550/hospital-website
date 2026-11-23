import React, { useState, useEffect, useRef } from 'react';
import { NavLink, Link, useNavigate, useLocation } from 'react-router-dom';
import { 
  Menu, X, Calendar, ChevronDown, PhoneCall, ShieldAlert, 
  Activity, Stethoscope, Building2, Heart, Award, Sparkles 
} from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [moreDropdownOpen, setMoreDropdownOpen] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setMoreDropdownOpen(false);
  }, [location.pathname]);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setMoreDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const primaryNavLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Specialities', path: '/specialities' },
    { label: 'Doctors', path: '/doctors' },
    { label: 'Facilities', path: '/facilities' },
  ];

  const moreNavLinks = [
    { label: 'Treatments & Procedures', path: '/treatments', desc: 'Surgical & non-invasive protocols' },
    { label: 'Advanced Technology', path: '/technology', desc: 'Cath Lab, 3T MRI & 128-Slice CT' },
    { label: 'Patient Guide & Insurance', path: '/patient-guide', desc: 'Cashless TPA, admissions & FAQs' },
    { label: 'Patient Stories', path: '/patient-stories', desc: 'Verified recovery journeys & video stories' },
    { label: 'Health Insights', path: '/health-insights', desc: 'Clinical articles & specialist advice' },
    { label: 'Contact & Location', path: '/contact', desc: 'Betiahata, Gorakhpur emergency map' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-3 px-3 sm:px-6 md:px-8 select-none">
      <div className="max-w-7xl mx-auto">
        <nav
          className={`flex items-center justify-between px-4 sm:px-6 py-2.5 rounded-full transition-all duration-300 ${
            scrolled
              ? 'bg-white/95 backdrop-blur-xl border border-slate-200/90 shadow-[0_10px_30px_-5px_rgba(23,60,89,0.12)]'
              : 'bg-white/90 backdrop-blur-lg border border-slate-200/70 shadow-sm'
          }`}
        >
          {/* Brand Logo: PULSE Multispeciality Hospital */}
          <Link
            to="/"
            className="group flex items-center gap-2.5 sm:gap-3"
            aria-label="PULSE Multispeciality Hospital Home"
          >
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl overflow-hidden bg-[#173C59] p-1.5 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-300 shadow-sm">
              <img
                src="/images/p.webp"
                alt="PULSE Hospital Emblem"
                className="w-full h-full object-contain filter invert"
              />
            </div>
            <div className="flex flex-col text-left">
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-base sm:text-lg tracking-[0.16em] text-[#173C59] group-hover:text-[#2788B8] transition-colors uppercase leading-none font-sans">
                  PULSE
                </span>
                <span className="hidden sm:inline-block px-1.5 py-0.5 rounded text-[9px] font-bold tracking-wider uppercase bg-sky-100 text-[#2788B8]">
                  Hospital
                </span>
              </div>
              <span className="text-[9px] sm:text-[10px] tracking-[0.22em] uppercase font-semibold text-slate-500 mt-0.5">
                Multispeciality Care
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1 px-3 py-1 rounded-full bg-slate-100/80 border border-slate-200/60">
            {primaryNavLinks.map((item) => (
              <NavLink
                key={item.label}
                to={item.path}
                className={({ isActive }) =>
                  `px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 ${
                    isActive
                      ? 'bg-[#173C59] text-white shadow-sm'
                      : 'text-slate-700 hover:text-[#173C59] hover:bg-white/80'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}

            {/* Expandable "More" Menu */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setMoreDropdownOpen(!moreDropdownOpen)}
                className={`flex items-center gap-1 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-colors ${
                  moreDropdownOpen
                    ? 'bg-white text-[#173C59]'
                    : 'text-slate-700 hover:text-[#173C59] hover:bg-white/80'
                }`}
                aria-expanded={moreDropdownOpen}
              >
                <span>Explore</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    moreDropdownOpen ? 'rotate-180 text-[#2788B8]' : 'text-slate-500'
                  }`}
                />
              </button>

              {moreDropdownOpen && (
                <div className="absolute top-full right-0 mt-2.5 w-72 p-2 rounded-2xl bg-white border border-slate-200 shadow-xl shadow-slate-900/10 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="px-3 py-2 border-b border-slate-100 mb-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      Hospital Services & Resources
                    </span>
                  </div>
                  {moreNavLinks.map((item) => (
                    <Link
                      key={item.label}
                      to={item.path}
                      className="block px-3 py-2 rounded-xl hover:bg-slate-50 transition-colors group"
                    >
                      <div className="text-xs font-semibold text-slate-800 group-hover:text-[#2788B8]">
                        {item.label}
                      </div>
                      <div className="text-[11px] text-slate-500 line-clamp-1">
                        {item.desc}
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Right Action: 24/7 Helpline Pill + Book Appointment CTA */}
          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href="tel:+919876543210"
              className="hidden xl:flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-50 border border-red-200 text-red-700 text-xs font-semibold hover:bg-red-100 transition-colors"
              title="24/7 Emergency Helpline"
            >
              <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
              <span>24/7 Emergency</span>
            </a>

            <Link
              to="/book-appointment"
              className="inline-flex items-center gap-1.5 sm:gap-2 px-4 sm:px-5 py-2 rounded-full bg-[#173C59] hover:bg-[#0E2538] text-white font-semibold text-xs tracking-wide shadow-md shadow-[#173C59]/20 hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5"
            >
              <Calendar className="w-3.5 h-3.5 text-sky-300" />
              <span>Book Appointment</span>
            </Link>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-full bg-slate-100 text-slate-800 hover:bg-slate-200 transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>

        {/* Mobile Slide-down Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-2 p-4 rounded-3xl bg-white/98 backdrop-blur-2xl border border-slate-200 shadow-2xl space-y-3 animate-in fade-in duration-200 max-h-[82vh] overflow-y-auto">
            {/* Primary Mobile Links */}
            <div className="space-y-1">
              <span className="px-3 text-[10px] font-bold uppercase tracking-wider text-slate-400">
                Main Navigation
              </span>
              {primaryNavLinks.map((item) => (
                <NavLink
                  key={item.label}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `block px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors ${
                      isActive
                        ? 'bg-[#173C59] text-white'
                        : 'text-slate-800 hover:bg-slate-100'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </div>

            {/* Extended Mobile Links */}
            <div className="pt-2 border-t border-slate-100 space-y-1">
              <span className="px-3 text-[10px] font-bold uppercase tracking-wider text-slate-400">
                Services & Patient Care
              </span>
              {moreNavLinks.map((item) => (
                <Link
                  key={item.label}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-4 py-2 rounded-xl text-xs font-medium text-slate-700 hover:bg-slate-100 transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Emergency & Booking Action in Mobile */}
            <div className="pt-3 border-t border-slate-100 space-y-2">
              <a
                href="tel:+919876543210"
                className="w-full py-2.5 rounded-2xl bg-red-50 text-red-700 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 border border-red-200"
              >
                <ShieldAlert className="w-4 h-4 text-red-600" />
                <span>24/7 Emergency: +91 98765 43210</span>
              </a>

              <Link
                to="/book-appointment"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3 rounded-2xl bg-[#173C59] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md"
              >
                <Calendar className="w-4 h-4 text-sky-300" />
                <span>Book Priority Appointment</span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
