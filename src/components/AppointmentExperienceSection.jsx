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
      colors: ['#064E3B', '#047857', '#F59E0B', '#059669', '#D97706']
    });
  };

  return (
    <section id="appointment-experience" className="relative py-24 lg:py-32 overflow-hidden select-none bg-gradient-to-b from-[#FAFBF9] via-[#F0FDF4]/20 to-[#FAFBF9] text-slate-900 border-t border-[#A7F3D0]/60">

      {/* =========================================================================
          UNIQUE SECTION 9 BACKGROUND: AMBIENT APPOINTMENT VIDEO + BOARDING PASS HUD
         ========================================================================= */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden" aria-hidden="true">
        {/* Ambient 4K Appointment Suite & Triage Video Layer */}
        <div className="absolute inset-0 -z-10 overflow-hidden opacity-20 mix-blend-multiply">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            className="w-full h-full object-cover scale-105"
          >
            <source src="/videos/appointment-suite.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-[#FAFBF9]/85 via-transparent to-[#FAFBF9]/90" />
        </div>

        {/* Emerald & Warm Gold Ambient Lights */}
        <div className="absolute -top-24 left-1/4 w-[750px] h-[750px] bg-[#059669]/15 rounded-full blur-[140px]" />
        <div className="absolute bottom-10 right-10 w-[700px] h-[700px] bg-amber-400/12 rounded-full blur-[130px]" />

        {/* Digital Boarding Gate Matrix Grid */}
        <div className="absolute inset-0 bg-[radial-gradient(#04785715_2px,transparent_2px)] bg-[size:32px_32px] opacity-40" />

        {/* Priority Pass Barcode with Active Holographic Scanning Laser */}
        <div className="absolute -left-10 bottom-6 w-[450px] h-[180px] opacity-40 pointer-events-none">
          {/* Active Horizontal Holographic Scanner Laser */}
          <div className="absolute top-4 bottom-8 w-[2px] bg-gradient-to-b from-transparent via-[#047857] to-transparent shadow-[0_0_15px_#059669] animate-laser-h" />
          
          <svg className="w-full h-full" viewBox="0 0 450 180" fill="none">
            <line x1="20" y1="20" x2="20" y2="150" stroke="#047857" strokeWidth="2.5" />
            <line x1="30" y1="20" x2="30" y2="150" stroke="#047857" strokeWidth="1" />
            <line x1="45" y1="20" x2="45" y2="150" stroke="#047857" strokeWidth="5" />
            <line x1="60" y1="20" x2="60" y2="150" stroke="#047857" strokeWidth="1.5" />
            <line x1="75" y1="20" x2="75" y2="150" stroke="#047857" strokeWidth="3" />
            <line x1="95" y1="20" x2="95" y2="150" stroke="#047857" strokeWidth="1.5" />
            <line x1="110" y1="20" x2="110" y2="150" stroke="#047857" strokeWidth="4" />
            <line x1="130" y1="20" x2="130" y2="150" stroke="#047857" strokeWidth="1.5" />
            <line x1="150" y1="20" x2="150" y2="150" stroke="#047857" strokeWidth="6" />
            <line x1="175" y1="20" x2="175" y2="150" stroke="#047857" strokeWidth="2.5" />
            <line x1="195" y1="20" x2="195" y2="150" stroke="#047857" strokeWidth="1.5" />
            <line x1="215" y1="20" x2="215" y2="150" stroke="#047857" strokeWidth="4" />
            <text x="20" y="170" fill="#064E3B" fontSize="11" fontFamily="monospace" fontWeight="bold">GATEWAY: PHC-2026-PRIORITY-OPD</text>
          </svg>
        </div>

        {/* Security Watermark Stamp */}
        <div className="absolute top-12 right-12 text-right font-mono text-[11px] text-[#064E3B]/20 tracking-widest hidden md:block">
          <div>PULSE OPD PRIORITY CONCIERGE</div>
          <div>ENCRYPTED TOKEN DISPATCH SYSTEM</div>
          <div>BETIAHATA CLINIC HUB • GORAKHPUR</div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="mb-12 text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F0FDF4]/90 backdrop-blur-md border border-[#A7F3D0] text-xs font-mono font-bold text-[#064E3B] shadow-xs">
            <Calendar className="w-4 h-4 text-[#047857]" />
            <span className="uppercase tracking-[0.2em]">Priority Consultation &amp; Direct Triage</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#064E3B] tracking-[-0.03em] leading-[1.08]">
            Direct Consultation with <br />
            <span className="font-serif italic font-normal text-[#047857]">Dr. Prakash Chand Shahi</span>
          </h2>

          <div className="inline-flex items-center gap-3 p-2.5 px-4 rounded-2xl bg-white border-2 border-[#A7F3D0] shadow-sm text-slate-900 text-xs font-medium">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#064E3B] to-[#047857] border border-[#A7F3D0] flex items-center justify-center text-[#A7F3D0] shrink-0">
              <Stethoscope className="w-4 h-4 stroke-[1.8]" />
            </div>
            <div className="text-left">
              <span className="font-bold block text-[#064E3B]">Dr. Prakash Chand Shahi • OPD Room 101</span>
              <span className="text-[10px] text-[#047857] font-mono font-bold">DM Cardiology (PGIMER) • Mon–Sat, 10 AM – 8 PM</span>
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
                          ? 'bg-sky-50/90 border-[#2788B8] shadow-md ring-2 ring-sky-400/20 scale-102'
                          : 'bg-white hover:bg-slate-50 border-slate-200'
                          }`}
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-[9px] font-mono font-bold text-[#173C59] uppercase bg-sky-100 px-2 py-0.5 rounded-full">
                            {opt.badge}
                          </span>
                          <div className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center ${isSelected ? 'border-[#2788B8] bg-[#2788B8]' : 'border-slate-300'
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
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono uppercase tracking-wider text-[#173C59] font-bold flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-sky-100 text-[#173C59] flex items-center justify-center text-[10px]">2</span>
                    Select Consultation Slot
                  </span>
                  <span className="text-[10px] font-mono text-[#2788B8] font-bold">
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
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-mono font-bold text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#2788B8]"
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
                            ? 'bg-gradient-to-r from-[#173C59] via-[#1E4D74] to-[#2788B8] text-white shadow-md shadow-[#173C59]/20 scale-105'
                            : 'bg-white hover:bg-sky-50 text-slate-700 border border-slate-200'
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
                <span className="text-xs font-mono uppercase tracking-wider text-[#173C59] font-bold flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-sky-100 text-[#173C59] flex items-center justify-center text-[10px]">3</span>
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
                      className="w-full px-4 py-3 rounded-2xl bg-white border border-slate-200 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#2788B8] font-medium"
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
                      className="w-full px-4 py-3 rounded-2xl bg-white border border-slate-200 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#2788B8] font-medium"
                    />
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-4 rounded-full bg-gradient-to-r from-[#173C59] via-[#1E4D74] to-[#2788B8] hover:from-[#0E2538] hover:via-[#173C59] hover:to-[#1E4D74] text-white font-semibold text-xs tracking-wider uppercase shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-2 hover:scale-102"
                  >
                    <Calendar className="w-4 h-4 text-[#A9D8E9]" />
                    <span>Confirm Priority Consultation Request</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#A9D8E9] ml-1" />
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

            {/* Real-Time Boarding Pass Slip - Luminous Pearl & Deep Navy */}
            <div className="relative rounded-[2.5rem] bg-gradient-to-br from-white via-slate-50 to-white text-slate-900 shadow-layered border-2 border-slate-200 p-6 sm:p-8 text-left space-y-6 overflow-hidden transition-all duration-400 hover:shadow-2xl">

              {/* Luminous Ambient Blobs */}
              <div className="absolute top-0 right-0 w-60 h-60 bg-sky-100/50 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-60 h-60 bg-[#173C59]/10 rounded-full blur-3xl pointer-events-none" />

              {/* Pass Header */}
              <div className="flex items-center justify-between pb-4 border-b border-sky-100 relative z-10">
                <div className="flex items-center gap-2.5">
                  <img src="/images/p.webp" alt="Pulse Logo" className="w-6 h-6 object-contain rounded-md bg-white p-0.5 border border-slate-200" />
                  <div>
                    <span className="font-semibold text-sm tracking-widest uppercase block leading-none text-slate-950">
                      PULSE
                    </span>
                    <span className="text-[8px] font-mono text-[#2788B8] tracking-wider uppercase block mt-0.5 font-bold">
                      Consultation Pass
                    </span>
                  </div>
                </div>

                <span className="px-2.5 py-0.5 rounded-full bg-[#F0FDF4] text-[#064E3B] border border-[#A7F3D0] text-[9px] font-mono font-medium flex items-center gap-1 shadow-xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#10B981 animate-ping" />
                  <span>LIVE PREVIEW</span>
                </span>
              </div>

              {/* Physician & Clinic Identity with Stethoscope Emblem */}
              <div className="flex items-center gap-3.5 relative z-10 p-2.5 rounded-2xl bg-slate-50 border border-[#A7F3D0]">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#064E3B] via-[#047857] to-[#047857] border-2 border-[#A7F3D0] flex items-center justify-center text-[#A7F3D0] shrink-0">
                  <Stethoscope className="w-6 h-6 stroke-[1.8]" />
                </div>
                <div className="space-y-0.5 text-left">
                  <div className="flex items-center gap-1.5">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#064E3B] font-bold">
                      ATTENDING CARDIOLOGIST
                    </span>
                    <ShieldCheck className="w-3.5 h-3.5 text-[#064E3B]" />
                  </div>
                  <h4 className="text-sm font-extrabold text-slate-950 tracking-tight leading-tight">
                    {doctor.name}
                  </h4>
                  <p className="text-[10px] font-mono text-[#047857] font-bold">
                    DM Cardiology (PGIMER) • MD (KGMU Lucknow)
                  </p>
                </div>
              </div>

              {/* Patient Dynamic Ticket Card */}
              <div className="p-4 rounded-2xl bg-sky-50/70 border border-sky-200 space-y-3 relative z-10">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-600 font-medium">Patient:</span>
                  <span className="font-semibold text-slate-950 font-mono">
                    {patientName || 'Patient Name'}
                  </span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-600 font-medium">Date & Slot:</span>
                  <span className="font-bold text-[#173C59] font-mono">
                    {preferredDate} • {preferredSlot}
                  </span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-600 font-medium">Category:</span>
                  <span className="font-bold text-sky-800 font-mono uppercase text-[10px]">
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
              <div className="pt-2 border-t border-slate-200 flex items-center justify-between text-[11px] font-mono relative z-10">
                <span className="text-slate-500">PASS-ID: PHC-2026-9812</span>
                <span className="text-[#047857] font-bold flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#047857]" />
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
