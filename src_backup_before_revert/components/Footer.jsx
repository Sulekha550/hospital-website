import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Calendar, Phone, Mail, MapPin, Clock, ShieldCheck, 
  ArrowUpRight, Heart, HeartPulse, ChevronRight, Award 
} from 'lucide-react';
import { PULSE_DATA } from '../data/pulseData';

export default function Footer() {
  const { brand, location, emergencyPhone, opdHelpline, email, opdHours, departments } = PULSE_DATA;

  return (
    <footer className="bg-[#173C59] text-white relative z-20 pt-16 pb-12 overflow-hidden border-t border-white/10">
      
      {/* Floating Appointment Banner Above Footer Columns */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-14">
        <div className="rounded-3xl bg-gradient-to-r from-[#2788B8] to-[#173C59] p-8 sm:p-10 border border-white/20 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-6 text-center lg:text-left">
          
          <div className="space-y-2">
            <span className="text-[10px] uppercase font-bold tracking-widest text-[#A9D8E9] px-3 py-1 rounded-full bg-white/10 border border-white/20">
              Immediate Clinical Care
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Consult With Our Senior Specialists Today
            </h3>
            <p className="text-xs sm:text-sm text-slate-200 max-w-xl">
              From wrist-first transradial angioplasty to robotic joint replacement and neurosurgery—experience unhurried, evidence-based care.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              to="/book-appointment"
              className="px-6 py-3 rounded-full bg-white text-[#173C59] font-bold text-xs uppercase tracking-wider hover:bg-slate-100 transition-all shadow-md"
            >
              Book OPD Appointment
            </Link>

            <a
              href="tel:+919876543210"
              className="px-6 py-3 rounded-full bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md flex items-center gap-2"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Emergency 24/7</span>
            </a>
          </div>

        </div>
      </div>

      {/* Main Footer Links Columns */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          
          {/* Col 1: Hospital Brand Identity */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white p-1.5 flex items-center justify-center shrink-0 shadow-sm">
                <img
                  src="/images/p.webp"
                  alt="PULSE Emblem"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col text-left">
                <span className="font-extrabold text-xl tracking-wider text-white uppercase leading-none">
                  PULSE
                </span>
                <span className="text-[10px] tracking-[0.24em] uppercase font-bold text-[#A9D8E9] mt-0.5">
                  Multispeciality Hospital
                </span>
              </div>
            </Link>

            <p className="text-xs text-slate-300 leading-relaxed max-w-sm">
              Eastern Uttar Pradesh's apex tertiary medical institute directed by Dr. Prakash Chand Shahi (DM Cardiology PGIMER Chandigarh, MD KGMU Lucknow). Dedicated to ethical, evidence-based multispeciality medicine.
            </p>

            <div className="space-y-1.5 text-xs text-slate-300 pt-2">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#A9D8E9] shrink-0 mt-0.5" />
                <span>{location}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>OPD Desk: {opdHelpline}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#A9D8E9] shrink-0" />
                <span>{email}</span>
              </div>
            </div>
          </div>

          {/* Col 2: Super-Specialities */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#A9D8E9]">
              Specialities
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              {departments.slice(0, 6).map((dept) => (
                <li key={dept.slug}>
                  <Link
                    to={`/specialities/${dept.slug}`}
                    className="hover:text-white transition-colors flex items-center gap-1.5"
                  >
                    <ChevronRight className="w-3 h-3 text-[#2788B8]" />
                    <span>{dept.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Quick Navigation */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#A9D8E9]">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>
                <Link to="/about" className="hover:text-white transition-colors">About Hospital</Link>
              </li>
              <li>
                <Link to="/doctors" className="hover:text-white transition-colors">Find a Doctor</Link>
              </li>
              <li>
                <Link to="/facilities" className="hover:text-white transition-colors">Hospital Facilities</Link>
              </li>
              <li>
                <Link to="/technology" className="hover:text-white transition-colors">Advanced Technology</Link>
              </li>
              <li>
                <Link to="/patient-stories" className="hover:text-white transition-colors">Patient Stories</Link>
              </li>
              <li>
                <Link to="/health-insights" className="hover:text-white transition-colors">Health Insights</Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Patient Resources & Accreditation */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#A9D8E9]">
              Patient Resources
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>
                <Link to="/patient-guide" className="hover:text-white transition-colors">Cashless TPA Insurance</Link>
              </li>
              <li>
                <Link to="/patient-guide" className="hover:text-white transition-colors">Admission & Discharge</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">Emergency & Location</Link>
              </li>
              <li>
                <Link to="/book-appointment" className="hover:text-white transition-colors">Book Priority OPD</Link>
              </li>
            </ul>

            <div className="pt-4 border-t border-white/10">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                Accreditation & Standards
              </span>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-white/10 text-white text-[10px] font-bold">
                <Award className="w-3.5 h-3.5 text-emerald-400" />
                <span>NABH Accredited Tertiary Center</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} PULSE Multispeciality Hospital. All clinical rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span>Privacy Policy</span>
            <span>Terms of Clinical Service</span>
            <span>NABH Compliance</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
