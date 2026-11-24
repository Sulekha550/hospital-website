import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Phone, MapPin, ShieldCheck, Heart, Sparkles, CheckCircle2, AlertCircle, ArrowRight, UserCheck, Stethoscope } from 'lucide-react';
import confetti from 'canvas-confetti';
import { PULSE_DATA } from '../data/pulseData';
import { pulseAudio } from '../utils/soundEffects';
import SectionCinematicVideo from './SectionCinematicVideo';

/**
 * AppointmentExperienceSection
 * Visual & Motion Identity: Priority Triage Pavilion & Live Digital Boarding Pass
 * Color Palette: Royal Midnight Purple, Emerald Verification & Luminous Pearl
 * Motion Features:
 * - Floating royal purple & emerald ambient glow orbs
 * - Live real-time consultation boarding pass slip generation
 * - Confetti celebration upon confirmed submission
 * - Shimmer button hover animation
 */
export default function AppointmentExperienceSection() {
  const { clinic, doctor } = PULSE_DATA;

  const [triageCategory, setTriageCategory] = useState('angiogram-review');
  const [patientName, setPatientName] = useState('');
  const [patientPhone, setPatientPhone] = useState('');
  const [preferredDate, setPreferredDate] = useState('2026-11-23');
  const [preferredSlot, setPreferredSlot] = useState('11:30 AM');
  const [isBooked, setIsBooked] = useState(false);

  const triageOptions = [
    {
      id: 'angiogram-review',
      label: 'Angiogram & Stent Review',
      sub: 'Second opinion or post-revascularization check',
      badge: 'HIGH PRIORITY',
    },
    {
      id: 'routine-evaluation',
      label: 'Comprehensive Cardiac OPD',
      sub: 'Hypertension, lipid control, breathlessness',
      badge: 'CONSULTATION',
    },
    {
      id: 'chest-pain',
      label: 'Chest Tightness / ECG Check',
      sub: 'Same-day evaluation for exertional discomfort',
      badge: 'CLINICAL TRIAGE',
    },
    {
      id: 'pacemaker-check',
      label: 'Pacemaker Follow-up',
      sub: 'Telemetry check & pacing optimization',
      badge: 'ELECTROPHYSIOLOGY',
    },
  ];

  const timeSlots = [
    '10:30 AM', '11:30 AM', '12:30 PM', '04:00 PM', '05:30 PM', '07:00 PM'
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!patientName || !patientPhone) return;

    setIsBooked(true);
    pulseAudio.playSuccess();

    // Trigger celebratory confetti in prestigious emerald, pine and gold
    confetti({
      particleCount: 90,
      spread: 75,
      origin: { y: 0.6 },
      colors: ['#991B1B', '#B91C1C', '#F59E0B', '#0284C7', '#D97706']
    });
  };

  return (
    <section id="appointment-experience" className="relative py-24 lg:py-32 overflow-hidden select-none bg-gradient-to-b from-[#FAFBFD] via-[#FEF2F2]/20 to-[#FAFBFD] text-slate-900 border-t border-[#FECDD3]/60">

      {/* =========================================================================
          UNIQUE SECTION 9 BACKGROUND: AMBIENT APPOINTMENT VIDEO, LASER, ECG & CAD HUD
         ========================================================================= */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden" aria-hidden="true">
        {/* Ambient 4K Appointment Suite & Triage Video Layer */}
        <div className="absolute inset-0 -z-10 overflow-hidden opacity-25 mix-blend-multiply">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            className="w-full h-full object-cover scale-105 filter contrast-125 saturate-125"
          >
            <source src="/videos/appointment-suite.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-[#FAFBFD]/85 via-[#FEF2F2]/50 to-[#FAFBFD]/90" />
        </div>

        {/* Luminous Emerald, Mint & Amber Ambient Atmosphere Orbs */}
        <div className="absolute -top-24 left-1/4 w-[750px] h-[750px] bg-gradient-to-tr from-[#0284C7]/20 via-[#0EA5E9]/15 to-transparent rounded-full blur-[140px] animate-pulse-glow" />
        <div className="absolute bottom-10 right-10 w-[700px] h-[700px] bg-gradient-to-bl from-[#B91C1C]/18 via-[#38BDF8]/15 to-transparent rounded-full blur-[130px] animate-float-2" />
        <div className="absolute top-1/2 -left-20 w-[500px] h-[500px] bg-[#0EA5E9]/15 rounded-full blur-[120px]" />

        {/* Dynamic Sweeping Fluoroscopy / Priority Laser Beam */}
        <div className="absolute inset-x-0 h-[2.5px] bg-gradient-to-r from-transparent via-[#0EA5E9] to-transparent shadow-[0_0_20px_#0284C7] opacity-55 animate-laser-sweep pointer-events-none" />

        {/* Counter-Rotating CAD Technical Angle Gauges (Top-Left & Bottom-Right) */}
        <div className="absolute top-16 -left-16 w-80 h-80 rounded-full border-2 border-[#B91C1C]/30 hidden lg:block animate-gentle-cw" />
        <div className="absolute top-24 -left-8 w-64 h-64 rounded-full border-2 border-dashed border-[#0EA5E9]/40 hidden lg:block animate-gentle-ccw" />
        <div className="absolute bottom-16 -right-16 w-96 h-96 rounded-full border-2 border-[#B91C1C]/25 hidden lg:block animate-gentle-ccw" />
        <div className="absolute bottom-24 -right-8 w-72 h-72 rounded-full border-2 border-dashed border-rose-600/35 hidden lg:block animate-gentle-cw" />

        {/* Continuous Flowing Cardiac Lifeline Waveform Across Viewport */}
        <svg className="absolute left-0 right-0 top-1/3 -translate-y-1/2 w-full h-32 opacity-45 pointer-events-none" viewBox="0 0 1440 128" fill="none" preserveAspectRatio="none">
          <path
            d="M0,64 L300,64 L330,64 L350,15 L370,110 L390,5 L415,95 L435,64 L720,64 L750,64 L770,15 L790,110 L810,5 L835,95 L855,64 L1140,64 L1170,64 L1190,15 L1210,110 L1230,5 L1255,95 L1275,64 L1440,64"
            stroke="#0284C7" strokeWidth="2.5" strokeDasharray="400" className="animate-flow-dash-fast"
          />
          <circle cx="370" cy="110" r="5" fill="#0EA5E9" className="animate-ping" />
          <circle cx="790" cy="110" r="5" fill="#B91C1C" className="animate-ping" />
          <circle cx="1210" cy="110" r="5" fill="#0EA5E9" className="animate-ping" />
        </svg>

        {/* Precision Blueprint Architectural Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#991B1B18_1px,transparent_1px),linear-gradient(to_bottom,#991B1B18_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_85%_70%_at_50%_35%,#000_75%,transparent_100%)] pointer-events-none" />

        {/* Floating Precision Medical Crosshairs (+) at Quadrants */}
        <div className="absolute top-16 left-12 text-[#0284C7]/40 font-mono text-base font-bold animate-medical-cross-1 select-none">+</div>
        <div className="absolute top-36 right-16 text-[#0284C7]/40 font-mono text-base font-bold animate-medical-cross-2 select-none">+</div>
        <div className="absolute bottom-20 left-20 text-[#0284C7]/35 font-mono text-base font-bold animate-medical-cross-2 select-none">+</div>
        <div className="absolute bottom-32 right-32 text-[#0284C7]/35 font-mono text-base font-bold animate-medical-cross-1 select-none">+</div>

        {/* Digital Boarding Gate Matrix Grid */}
        <div className="absolute inset-0 bg-[radial-gradient(#B91C1C20_2px,transparent_2px)] bg-[size:32px_32px] opacity-40" />

        {/* Priority Pass Barcode with Active Holographic Scanning Laser */}
        <div className="absolute -left-10 bottom-6 w-[450px] h-[180px] opacity-40 pointer-events-none">
          <div className="absolute top-4 bottom-8 w-[2px] bg-gradient-to-b from-transparent via-[#B91C1C] to-transparent shadow-[0_0_15px_#0284C7] animate-laser-h" />
          <svg className="w-full h-full" viewBox="0 0 450 180" fill="none">
            <line x1="20" y1="20" x2="20" y2="150" stroke="#B91C1C" strokeWidth="2.5" />
            <line x1="30" y1="20" x2="30" y2="150" stroke="#B91C1C" strokeWidth="1" />
            <line x1="45" y1="20" x2="45" y2="150" stroke="#B91C1C" strokeWidth="5" />
            <line x1="60" y1="20" x2="60" y2="150" stroke="#B91C1C" strokeWidth="1.5" />
            <line x1="75" y1="20" x2="75" y2="150" stroke="#B91C1C" strokeWidth="3" />
            <line x1="95" y1="20" x2="95" y2="150" stroke="#B91C1C" strokeWidth="1.5" />
            <line x1="110" y1="20" x2="110" y2="150" stroke="#B91C1C" strokeWidth="4" />
            <line x1="130" y1="20" x2="130" y2="150" stroke="#B91C1C" strokeWidth="1.5" />
            <line x1="150" y1="20" x2="150" y2="150" stroke="#B91C1C" strokeWidth="6" />
            <line x1="175" y1="20" x2="175" y2="150" stroke="#B91C1C" strokeWidth="2.5" />
            <line x1="195" y1="20" x2="195" y2="150" stroke="#B91C1C" strokeWidth="1.5" />
            <line x1="215" y1="20" x2="215" y2="150" stroke="#B91C1C" strokeWidth="4" />
            <text x="20" y="170" fill="#991B1B" fontSize="11" fontFamily="monospace" fontWeight="bold">GATEWAY: PHC-2026-PRIORITY-OPD</text>
          </svg>
        </div>

        {/* Security Watermark Stamp */}
        <div className="absolute top-12 right-12 text-right font-mono text-[11px] text-[#991B1B]/30 tracking-widest hidden md:block">
          <div>PULSE OPD PRIORITY CONCIERGE</div>
          <div>ENCRYPTED TOKEN DISPATCH SYSTEM</div>
          <div>BETIAHATA CLINIC HUB • GORAKHPUR</div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="mb-12 text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FEF2F2]/90 backdrop-blur-md border border-[#FECDD3] text-xs font-mono font-bold text-[#991B1B] shadow-xs">
            <Calendar className="w-4 h-4 text-[#B91C1C]" />
            <span className="uppercase tracking-[0.2em]">Priority Consultation &amp; Direct Triage</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#991B1B] tracking-[-0.03em] leading-[1.08]">
            Direct Consultation with <br />
            <span className="font-serif italic font-normal text-[#B91C1C]">Dr. Prakash Chand Shahi</span>
          </h2>

          <div className="inline-flex items-center gap-3 p-2.5 px-4 rounded-2xl bg-white border-2 border-[#FECDD3] shadow-sm text-slate-900 text-xs font-medium">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#991B1B] to-[#B91C1C] border border-[#FECDD3] flex items-center justify-center text-[#FECDD3] shrink-0">
              <Stethoscope className="w-4 h-4 stroke-[1.8]" />
            </div>
            <div className="text-left">
              <span className="font-bold block text-[#991B1B]">Dr. Prakash Chand Shahi • OPD Room 101</span>
              <span className="text-[10px] text-[#B91C1C] font-mono font-bold">DM Cardiology (PGIMER) • Mon–Sat, 10 AM – 8 PM</span>
            </div>
          </div>
        </div>

        {/* Master Appointment Composition: Interactive Booking Engine (Left) + Live Digital Pass Slip (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

          {/* Left Column (7 cols): Interactive Concierge Scheduling Form */}
          <div className="lg:col-span-7">
            <div className="rounded-[2.5rem] bg-white/95 backdrop-blur-xl p-6 sm:p-10 text-left space-y-8 border-2 border-slate-200/90 shadow-layered transition-all duration-400 hover:shadow-2xl">

              {/* Step 1: Clinical Triage Reason */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono uppercase tracking-wider text-[#173C59] font-bold flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-sky-100 text-[#173C59] flex items-center justify-center text-[10px]">1</span>
                    Select Consultation Domain
                  </span>
                  <span className="text-[10px] font-mono text-slate-400 font-bold">Step 1 of 3</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {triageOptions.map((opt) => {
                    const isSelected = triageCategory === opt.id;
                    return (
                      <div
                        key={opt.id}
                        onClick={() => setTriageCategory(opt.id)}
                        className={`p-4 rounded-2xl border-2 cursor-pointer transition-all duration-300 ${isSelected
                          ? 'bg-[#FEF2F2] border-[#0284C7] shadow-md ring-2 ring-[#0EA5E9]/25 scale-102'
                          : 'bg-white hover:bg-slate-50 border-slate-200'
                          }`}
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-[9px] font-mono font-bold text-[#991B1B] uppercase bg-[#FEF2F2] border border-[#FECDD3] px-2 py-0.5 rounded-full">
                            {opt.badge}
                          </span>
                          <div className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center ${isSelected ? 'border-[#0284C7] bg-[#0284C7]' : 'border-slate-300'
                            }`}>
                            {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-white" />}
                          </div>
                        </div>
                        <h4 className="text-xs sm:text-sm font-extrabold text-slate-950 tracking-tight">
                          {opt.label}
                        </h4>
                        <p className="text-[10px] sm:text-[11px] text-slate-500 font-medium mt-0.5">
                          {opt.sub}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Step 2: Date & Slot Selection */}
              <div className="space-y-3 pt-4 border-t border-slate-100">
                <div className="flex flex-wrap items-center justify-between gap-1">
                  <span className="text-xs font-mono uppercase tracking-wider text-[#991B1B] font-bold flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-[#FEF2F2] border border-[#FECDD3] text-[#991B1B] flex items-center justify-center text-[10px]">2</span>
                    Select Consultation Slot
                  </span>
                  <span className="text-[10px] font-mono text-[#B91C1C] font-bold">
                    Mon – Sat (10 AM – 8 PM)
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-[11px] text-slate-700 font-bold block mb-1">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      value={preferredDate}
                      onChange={(e) => setPreferredDate(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-mono font-bold text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0284C7]"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] text-slate-700 font-bold block mb-1">
                      Available OPD Slots
                    </label>
                    <div className="grid grid-cols-3 gap-1.5">
                      {timeSlots.map((slot) => (
                        <button
                          key={slot}
                          type="button"
                          onClick={() => setPreferredSlot(slot)}
                          className={`py-2 px-1 rounded-xl text-[11px] font-mono font-bold transition-all duration-200 ${preferredSlot === slot
                            ? 'bg-gradient-to-r from-[#991B1B] via-[#B91C1C] to-[#DC2626] text-white shadow-md shadow-[#991B1B]/20 scale-105'
                            : 'bg-white hover:bg-[#FEF2F2] text-slate-700 border border-slate-200'
                            }`}
                        >
                          {slot}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 3: Patient Information Form */}
              <form onSubmit={handleSubmit} className="space-y-4 pt-4 border-t border-slate-100">
                <span className="text-xs font-mono uppercase tracking-wider text-[#991B1B] font-bold flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-[#FEF2F2] border border-[#FECDD3] text-[#991B1B] flex items-center justify-center text-[10px]">3</span>
                  Patient Identification
                </span>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-[11px] text-slate-700 font-bold block mb-1">
                      Patient Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh Kumar"
                      value={patientName}
                      onChange={(e) => setPatientName(e.target.value)}
                      className="w-full px-4 py-3 rounded-2xl bg-white border border-slate-200 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0284C7] font-medium"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] text-slate-700 font-bold block mb-1">
                      Phone Number (WhatsApp Active) *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={patientPhone}
                      onChange={(e) => setPatientPhone(e.target.value)}
                      className="w-full px-4 py-3 rounded-2xl bg-white border border-slate-200 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0284C7] font-medium"
                    />
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-4 rounded-full bg-gradient-to-r from-[#991B1B] via-[#B91C1C] to-[#DC2626] hover:from-[#7F1D1D] hover:to-[#991B1B] text-white font-bold text-xs tracking-wider uppercase shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-2 hover:scale-102"
                  >
                    <Calendar className="w-4 h-4 text-amber-300" />
                    <span>Confirm Priority Consultation Request</span>
                    <ArrowRight className="w-3.5 h-3.5 text-white ml-1" />
                  </button>
                </div>
              </form>

            </div>
          </div>

          {/* Right Column (5 cols): Live Digital Consultation Pass Preview (Boarding Pass Design) */}
          <div className="lg:col-span-5 space-y-6">

            {/* Live Triage & Priority Booking Video HUD */}
            <SectionCinematicVideo
              type="appointment-suite"
              videoUrl="/videos/appointment-suite.mp4"
              styleVariant="video-card"
              posterImage="/images/hospital-facility.jpg"
              title="Priority OPD Gateway"
              subtitle="Real-Time Triage & Slot Availability"
              specs="Gorakhpur Campus • Betiahata Wing"
              aspectRatio="aspect-[16/8]"
            />

            {/* Real-Time Boarding Pass Slip - Luminous Pearl & Medical Emerald */}
            <div className="relative rounded-[2.5rem] bg-gradient-to-br from-white via-[#FEF2F2]/30 to-white text-slate-900 shadow-layered border-2 border-[#FECDD3] p-6 sm:p-8 text-left space-y-6 overflow-hidden transition-all duration-400 hover:shadow-2xl">

              {/* Luminous Ambient Blobs */}
              <div className="absolute top-0 right-0 w-60 h-60 bg-[#FECDD3]/40 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-60 h-60 bg-[#991B1B]/10 rounded-full blur-3xl pointer-events-none" />

              {/* Pass Header */}
              <div className="flex items-center justify-between pb-4 border-b border-[#FECDD3]/60 relative z-10">
                <div className="flex items-center gap-2.5">
                  <img src="/images/p.webp" alt="Pulse Logo" className="w-6 h-6 object-contain rounded-md bg-white p-0.5 border border-[#FECDD3]" />
                  <div>
                    <span className="font-semibold text-sm tracking-widest uppercase block leading-none text-[#991B1B]">
                      PULSE
                    </span>
                    <span className="text-[8px] font-mono text-[#B91C1C] tracking-wider uppercase block mt-0.5 font-bold">
                      Consultation Pass
                    </span>
                  </div>
                </div>

                <span className="px-2.5 py-0.5 rounded-full bg-[#FEF2F2] text-[#991B1B] border border-[#FECDD3] text-[9px] font-mono font-medium flex items-center gap-1 shadow-xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0EA5E9] animate-ping" />
                  <span>LIVE PREVIEW</span>
                </span>
              </div>

              {/* Physician & Clinic Identity with Stethoscope Emblem */}
              <div className="flex items-center gap-3.5 relative z-10 p-2.5 rounded-2xl bg-white border border-[#FECDD3]">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#991B1B] via-[#B91C1C] to-[#B91C1C] border-2 border-[#FECDD3] flex items-center justify-center text-[#FECDD3] shrink-0">
                  <Stethoscope className="w-6 h-6 stroke-[1.8]" />
                </div>
                <div className="space-y-0.5 text-left">
                  <div className="flex items-center gap-1.5">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#991B1B] font-bold">
                      ATTENDING CARDIOLOGIST
                    </span>
                    <ShieldCheck className="w-3.5 h-3.5 text-[#991B1B]" />
                  </div>
                  <h4 className="text-sm font-extrabold text-slate-950 tracking-tight leading-tight">
                    {doctor.name}
                  </h4>
                  <p className="text-[10px] font-mono text-[#B91C1C] font-bold">
                    DM Cardiology (PGIMER) • MD (KGMU Lucknow)
                  </p>
                </div>
              </div>

              {/* Patient Dynamic Ticket Card */}
              <div className="p-4 rounded-2xl bg-[#FEF2F2]/80 border border-[#FECDD3] space-y-3 relative z-10">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-600 font-medium">Patient:</span>
                  <span className="font-semibold text-slate-950 font-mono">
                    {patientName || 'Patient Name'}
                  </span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-600 font-medium">Date &amp; Slot:</span>
                  <span className="font-bold text-[#991B1B] font-mono">
                    {preferredDate} • {preferredSlot}
                  </span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-600 font-medium">Category:</span>
                  <span className="font-bold text-[#B91C1C] font-mono uppercase text-[10px]">
                    {triageCategory.replace('-', ' ')}
                  </span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-600 font-medium">Location:</span>
                  <span className="font-bold text-slate-900 font-mono text-[10px]">
                    Pulse Heart Centre, Betiahata
                  </span>
                </div>
              </div>

              {/* Barcode & Verification */}
              <div className="pt-2 border-t border-[#FECDD3]/60 flex items-center justify-between text-[11px] font-mono relative z-10">
                <span className="text-slate-500">PASS-ID: PHC-2026-9812</span>
                <span className="text-[#B91C1C] font-bold flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#B91C1C]" />
                  <span>OPD PRIORITY PASS</span>
                </span>
              </div>

            </div>

            {/* Direct Helpline Banner */}
            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-between">
              <div className="space-y-0.5 text-left">
                <span className="text-xs font-bold text-slate-900 block">
                  Need Immediate Guidance?
                </span>
                <span className="text-[11px] text-slate-500 font-medium block">
                  OPD Desk: +91 98765 43210
                </span>
              </div>
              <a
                href="tel:+919876543210"
                className="px-4 py-2 rounded-xl bg-sky-50 text-[#173C59] text-xs font-bold hover:bg-sky-100 transition-colors"
              >
                Call OPD
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
