import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ArrowRight, Phone, MapPin, Clock, ShieldCheck, HeartPulse } from 'lucide-react';
import SectionBackgroundMotion from './SectionBackgroundMotion';

/**
 * CinematicHeroSection
 * New Architectural Split-Stage Hero (100vh):
 * - Left: Clean editorial typography, direct actions & compact visual facility strip
 * - Right: Deep Midnight Navy architectural showcase panel framing Dr. Prakash Chand Shahi's portrait cleanly
 */
export default function CinematicHeroSection() {
  return (
    <section className="relative min-h-screen lg:h-screen flex items-center pt-24 pb-8 lg:pt-20 lg:pb-6 px-4 sm:px-6 lg:px-10 border-b border-slate-200/80 overflow-hidden select-none">

      {/* Animated Medical & Silk Background */}
      <SectionBackgroundMotion variant="home-hero" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">

          {/* Left Column (6 cols): Editorial Lead & Compact Visual Cards (below image on mobile, left on desktop) */}
          <div className="lg:col-span-6 order-2 lg:order-1 space-y-6 text-left">

            <div className="inline-flex flex-wrap items-center gap-x-2.5 gap-y-1 px-3.5 py-1.5 rounded-2xl sm:rounded-full bg-white border border-slate-200 shadow-xs text-[11px] sm:text-xs font-semibold text-[#0A1128]">
              <MapPin className="w-3.5 h-3.5 text-[#BE123C]" />
              <span>Pulse Heart Centre • Betiahata, Gorakhpur</span>
              <span className="text-slate-300">|</span>
              <Clock className="w-3.5 h-3.5 text-[#BE123C]" />
              <span>10 AM – 8 PM</span>
            </div>

            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-extrabold text-[#0A1128] tracking-[-0.03em] leading-[1.07]">
                Precision Heart Care. <br />
                <span className="font-serif italic font-normal text-[#BE123C]">
                  Built Around Trust.
                </span>
              </h1>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-lg">
                <strong className="text-[#0A1128] font-bold">Dr. Prakash Chand Shahi</strong> (DM Cardiology, PGIMER • MD, KGMU) — painless wrist-first angioplasty &amp; 24/7 emergency cardiac care.
              </p>
            </div>

            {/* Primary CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <Link to="/contact" className="luxury-btn-primary group">
                <Calendar className="w-4 h-4 text-rose-200" />
                <span>Book Consultation</span>
                <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
              </Link>
              <a href="tel:+919876543210" className="luxury-btn-secondary">
                <Phone className="w-4 h-4 text-[#BE123C]" />
                <span>24/7 Emergency: +91 98765 43210</span>
              </a>
            </div>

            {/* 3 Visual Proof Thumbnails */}
            <div className="pt-4 border-t border-slate-200/80 grid grid-cols-3 gap-2 sm:gap-3 max-w-lg">
              {[
                { img: '/images/hero-architecture-entrance.jpg', stat: '22+ Yrs', label: 'Legacy' },
                { img: '/images/cath-lab.jpg', stat: '15,000+', label: 'Cath Lab' },
                { img: '/images/radial-catheter-sheath.jpg', stat: '99.4%', label: 'Radial' },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex flex-col sm:flex-row items-center text-center sm:text-left gap-1.5 sm:gap-2.5 p-2 rounded-xl bg-white/95 border border-slate-200 shadow-xs"
                >
                  <img
                    src={item.img}
                    alt={item.label}
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg object-cover shrink-0"
                  />
                  <div className="min-w-0">
                    <span className="text-xs sm:text-sm font-extrabold text-[#0A1128] block leading-none">{item.stat}</span>
                    <span className="text-[9px] sm:text-[10px] font-semibold text-[#BE123C] block mt-0.5 truncate">{item.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column (6 cols): Deep Midnight Navy Architectural Stage Panel (above text on mobile, right on desktop) */}
          <div className="lg:col-span-6 order-1 lg:order-2">
            <div className="relative rounded-2xl sm:rounded-[2rem] bg-[#0A1128] p-4 sm:p-6 shadow-[0_30px_70px_-15px_rgba(10,17,40,0.3)] border border-slate-800 overflow-hidden">
              {/* Crimson Accent Bar on Left Edge */}
              <div className="absolute left-0 top-8 bottom-8 w-1.5 bg-gradient-to-b from-[#E11D48] via-[#BE123C] to-transparent rounded-r-full" />

              {/* Subtle Radial Glow Inside Navy Stage */}
              <div
                className="absolute -top-20 -right-20 w-72 h-72 rounded-full pointer-events-none"
                style={{ background: 'radial-gradient(circle, rgba(225,29,72,0.28) 0%, transparent 70%)' }}
              />

              <div className="relative z-10 grid grid-cols-1 sm:grid-cols-12 gap-5 items-center">
                {/* Clean Uncropped Portrait of Dr. Prakash Chand Shahi */}
                <div className="sm:col-span-7 rounded-2xl overflow-hidden bg-slate-900 border border-white/10 shadow-lg">
                  <div className="aspect-[4/4] sm:aspect-[4/5] sm:max-h-[54vh] w-full overflow-hidden">
                    <img
                      src="/images/doctor-portrait.jpg"
                      alt="Dr. Prakash Chand Shahi"
                      className="w-full h-full object-cover object-[50%_20%]"
                    />
                  </div>
                </div>

                {/* Right Side Credential & Live Care Stack Inside Dark Stage */}
                <div className="sm:col-span-5 space-y-4 text-left text-white">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-rose-500/20 border border-rose-400/30 text-[10px] font-mono font-bold text-rose-200">
                    <HeartPulse className="w-3.5 h-3.5 text-rose-400" />
                    <span>CHIEF CARDIOLOGIST</span>
                  </div>

                  <div>
                    <h2 className="text-xl font-extrabold text-white leading-snug">
                      Dr. Prakash Chand Shahi
                    </h2>
                    <p className="text-xs text-rose-300 font-semibold mt-1">
                      DM Cardiology (PGIMER)
                    </p>
                    <p className="text-xs text-slate-300 mt-0.5">
                      MD Medicine (KGMU Lucknow)
                    </p>
                  </div>

                  <div className="space-y-2.5 pt-3 border-t border-white/10 text-xs">
                    <div className="p-2.5 rounded-xl bg-white/[0.06] border border-white/10">
                      <span className="text-[10px] font-mono text-slate-400 block">APPROACH</span>
                      <span className="font-bold text-white">Wrist-First Radial Stenting</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-white/[0.06] border border-white/10">
                      <span className="text-[10px] font-mono text-slate-400 block">EMERGENCY</span>
                      <span className="font-bold text-rose-300">&lt; 45 Min Door-to-Balloon</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-[11px] text-slate-300 pt-1">
                    <ShieldCheck className="w-4 h-4 text-rose-400 shrink-0" />
                    <span>NABH Sterile Cath Suite</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
