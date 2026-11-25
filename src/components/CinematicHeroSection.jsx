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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-5 lg:gap-y-4 lg:gap-x-10 items-center">

          {/* Block 1 (Mobile Top / Desktop Left-Top): Location Pill + "Precision Heart Care." */}
          <div className="order-1 lg:order-none lg:col-span-6 lg:col-start-1 lg:row-start-1 lg:self-end space-y-4 text-left">
            <div className="inline-flex flex-wrap items-center gap-x-2.5 gap-y-1 px-3.5 py-1.5 rounded-2xl sm:rounded-full bg-white border border-slate-200 shadow-xs text-[11px] sm:text-xs font-semibold text-[#0A1128]">
              <MapPin className="w-3.5 h-3.5 text-[#BE123C]" />
              <span>Pulse Heart Centre • Betiahata, Gorakhpur</span>
              <span className="text-slate-300">|</span>
              <Clock className="w-3.5 h-3.5 text-[#BE123C]" />
              <span>10 AM – 8 PM</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-extrabold text-[#0A1128] tracking-[-0.03em] leading-[1.07]">
              Precision Heart Care.
              <span className="hidden lg:block font-serif italic font-normal text-[#BE123C] mt-1">
                Built Around Trust.
              </span>
            </h1>
          </div>

          {/* Block 2 (Mobile Middle / Desktop Left-Bottom): "Built Around Trust." + Bio + CTAs + Proof Cards */}
          <div className="order-3 lg:order-none lg:col-span-6 lg:col-start-1 lg:row-start-2 lg:self-start space-y-5 text-left">
            <div className="space-y-2.5">
              <p className="lg:hidden text-4xl sm:text-5xl font-serif italic font-normal text-[#BE123C] tracking-[-0.02em] leading-[1.08]">
                Built Around Trust.
              </p>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-lg">
                <strong className="text-[#0A1128] font-bold">Dr. Prakash Chand Shahi</strong> (Heart Specialist • PGIMER &amp; KGMU) — painless wrist-route heart treatment, angioplasty &amp; 24/7 emergency care.
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
                { img: '/images/hero-architecture-entrance.jpg', stat: '22+ Yrs', label: 'Experience' },
                { img: '/images/cath-lab.jpg', stat: '15,000+', label: 'Procedures' },
                { img: '/images/radial-catheter-sheath.jpg', stat: '99.4%', label: 'Success Rate' },
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

          {/* Block 3 (Mobile Middle Above "Built Around Trust" / Desktop Right): Light Platinum Architectural Stage Panel */}
          <div className="order-2 lg:order-none lg:col-span-6 lg:col-start-7 lg:row-start-1 lg:row-span-2">
            <div className="relative rounded-2xl sm:rounded-[2rem] bg-gradient-to-br from-white via-[#FAF9F6] to-[#F1F5F9] p-4 sm:p-6 shadow-xl border border-slate-200/90 overflow-hidden">
              {/* Crimson Accent Bar on Left Edge */}
              <div className="absolute left-0 top-8 bottom-8 w-1.5 bg-gradient-to-b from-[#E11D48] via-[#BE123C] to-rose-200 rounded-r-full" />

              {/* Subtle Radial Glow Inside Light Stage */}
              <div
                className="absolute -top-20 -right-20 w-72 h-72 rounded-full pointer-events-none"
                style={{ background: 'radial-gradient(circle, rgba(225,29,72,0.09) 0%, transparent 70%)' }}
              />

              <div className="relative z-10 grid grid-cols-1 sm:grid-cols-12 gap-5 items-center">
                {/* Clean Uncropped Portrait of Dr. Prakash Chand Shahi */}
                <div className="sm:col-span-7 rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 shadow-md">
                  <div className="aspect-[4/4] sm:aspect-[4/5] sm:max-h-[54vh] w-full overflow-hidden">
                    <img
                      src="/images/doctor-portrait.jpg"
                      alt="Dr. Prakash Chand Shahi"
                      className="w-full h-full object-cover object-[50%_20%]"
                    />
                  </div>
                </div>

                {/* Right Side Credential & Live Care Stack */}
                <div className="sm:col-span-5 space-y-4 text-left text-[#0A1128]">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-rose-50 border border-rose-200 text-[10px] font-mono font-bold text-[#BE123C]">
                    <HeartPulse className="w-3.5 h-3.5 text-[#BE123C]" />
                    <span>CHIEF CARDIOLOGIST</span>
                  </div>

                  <div>
                    <h2 className="text-xl font-extrabold text-[#0A1128] leading-snug">
                      Dr. Prakash Chand Shahi
                    </h2>
                    <p className="text-xs text-[#BE123C] font-semibold mt-1">
                      DM Cardiology (PGIMER)
                    </p>
                    <p className="text-xs text-slate-600 mt-0.5">
                      MD Medicine (KGMU Lucknow)
                    </p>
                  </div>

                  <div className="space-y-2.5 pt-3 border-t border-slate-200 text-xs">
                    <div className="p-2.5 rounded-xl bg-white border border-slate-200/90 shadow-2xs">
                      <span className="text-[10px] font-mono text-slate-500 block">METHOD</span>
                      <span className="font-bold text-[#0A1128]">Painless Wrist-Route Care</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-white border border-slate-200/90 shadow-2xs">
                      <span className="text-[10px] font-mono text-slate-500 block">24/7 EMERGENCY</span>
                      <span className="font-bold text-[#BE123C]">Fast Heart Care (&lt; 45 Min)</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-[11px] text-slate-700 font-medium pt-1">
                    <ShieldCheck className="w-4 h-4 text-[#BE123C] shrink-0" />
                    <span>Safe &amp; Clean Heart Cath Lab</span>
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
