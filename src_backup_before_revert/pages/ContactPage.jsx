import React, { useState } from 'react';
import { 
  MapPin, Phone, Mail, Clock, ShieldAlert, Send, 
  CheckCircle2, Building, MessageSquare, ArrowRight 
} from 'lucide-react';
import { PULSE_DATA } from '../data/pulseData';

export default function ContactPage() {
  const { location, emergencyPhone, opdHelpline, email, opdHours } = PULSE_DATA;

  const [formState, setFormState] = useState({
    name: '',
    phone: '',
    email: '',
    subject: 'General Enquiry',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-24 pb-20 bg-[#F7FAFC]">
      
      {/* 1. Contact Hero (~100vh) */}
      <section className="min-h-[75vh] flex items-center bg-gradient-to-b from-[#F0F7FB] via-white to-[#F7FAFC] px-4 sm:px-6 lg:px-8 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto w-full py-16 text-center max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#173C59]/10 text-[#173C59] text-xs font-bold uppercase tracking-widest">
            <MapPin className="w-3.5 h-3.5 text-[#2788B8]" />
            <span>Betiahata, Gorakhpur, Uttar Pradesh</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold text-[#173C59] tracking-tight leading-[1.1]">
            Contact PULSE <br />
            <span className="text-[#2788B8]">Multispeciality Hospital.</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Direct outpatient desk, 24/7 Code-Blue cardiac emergency response, and location directions for patients across Eastern UP, Bihar, and Nepal.
          </p>
        </div>
      </section>

      {/* 2. Contact Details & Enquiry Form */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Contact Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* 24/7 Emergency Box */}
            <div className="p-6 rounded-3xl bg-red-50 border border-red-200 text-red-950 space-y-3">
              <div className="flex items-center gap-2 text-red-700 font-bold text-xs uppercase tracking-wider">
                <ShieldAlert className="w-4 h-4 text-red-600" />
                <span>24/7 Acute Cardiac & Trauma Emergency</span>
              </div>
              <h3 className="text-2xl font-extrabold text-red-900">
                {emergencyPhone}
              </h3>
              <p className="text-xs text-red-800 leading-relaxed">
                Direct hotline to our Code-Blue Emergency Triage, Flat-Panel Cath Lab, and Level-3 Cardiac ICU.
              </p>
            </div>

            {/* OPD Desk & Location Card */}
            <div className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-sm space-y-4">
              <div className="space-y-3 text-xs text-slate-700">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#2788B8] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-[#173C59] font-bold text-sm">Hospital Address:</strong>
                    <span>{location}</span>
                    <span className="text-slate-400 block mt-0.5">Prime Medical District, Near Betiahata Chowk</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-2 border-t border-slate-100">
                  <Phone className="w-5 h-5 text-[#2788B8] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-[#173C59] font-bold text-sm">OPD Appointments:</strong>
                    <span>{opdHelpline}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-2 border-t border-slate-100">
                  <Clock className="w-5 h-5 text-[#2788B8] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-[#173C59] font-bold text-sm">Consultation Timings:</strong>
                    <span>{opdHours}</span>
                    <span className="text-slate-400 block mt-0.5">Sunday: Closed for routine OPD (Emergencies 24/7)</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-2 border-t border-slate-100">
                  <Mail className="w-5 h-5 text-[#2788B8] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-[#173C59] font-bold text-sm">Email Correspondence:</strong>
                    <span>{email}</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Direct Clinical Enquiry Form */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl border border-slate-200/90 shadow-sm">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-[#173C59]">Message Received!</h3>
                <p className="text-xs text-slate-500 max-w-md mx-auto">
                  Thank you for reaching out to PULSE Hospital. Our patient coordination desk will contact you within 2 working hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 rounded-full bg-[#173C59] text-white text-xs font-semibold"
                >
                  Send Another Enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-1 mb-4">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#2788B8]">Patient Desk</span>
                  <h3 className="text-xl font-bold text-[#173C59]">Send an Enquiry or Message</h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Your Full Name *"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-xs font-semibold text-slate-800 focus:outline-none focus:border-[#2788B8]"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      placeholder="Contact Phone Number *"
                      required
                      value={formState.phone}
                      onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-xs font-semibold text-slate-800 focus:outline-none focus:border-[#2788B8]"
                    />
                  </div>
                </div>

                <div>
                  <input
                    type="email"
                    placeholder="Email Address (Optional)"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-xs font-semibold text-slate-800 focus:outline-none focus:border-[#2788B8]"
                  />
                </div>

                <div>
                  <select
                    value={formState.subject}
                    onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-xs font-semibold text-slate-800 focus:outline-none focus:border-[#2788B8]"
                  >
                    <option value="General Enquiry">General Hospital Enquiry</option>
                    <option value="Angiogram CD Second Opinion">Angiogram CD Second Opinion</option>
                    <option value="Cashless Insurance Query">Cashless Insurance / TPA Query</option>
                    <option value="Doctor Availability">Doctor Availability Check</option>
                  </select>
                </div>

                <div>
                  <textarea
                    rows={4}
                    placeholder="Your message, inquiry, or question for our medical team..."
                    required
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-xs font-medium text-slate-800 focus:outline-none focus:border-[#2788B8]"
                  />
                </div>

                <button
                  type="submit"
                  className="px-7 py-3 rounded-full bg-[#173C59] hover:bg-[#0E2538] text-white text-xs font-bold uppercase tracking-wider shadow-md transition-all flex items-center gap-2"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Submit Clinical Message</span>
                </button>
              </form>
            )}
          </div>

        </div>
      </section>

    </div>
  );
}
