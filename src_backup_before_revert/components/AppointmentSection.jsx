import React, { useState } from 'react';
import { Calendar, Clock, User, Phone, CheckCircle2, ShieldCheck, MapPin, AlertCircle, X, Download } from 'lucide-react';
import confetti from 'canvas-confetti';
import { PULSE_DATA } from '../data/pulseData';

export default function AppointmentSection() {
  const { clinic, doctor } = PULSE_DATA;

  const [formData, setFormData] = useState({
    patientName: '',
    phone: '',
    preferredDate: '',
    preferredTime: 'Morning (10:00 AM – 1:00 PM)',
    reason: 'Interventional Cardiology Consultation',
    notes: ''
  });

  const [errors, setErrors] = useState({});
  const [submittedBooking, setSubmittedBooking] = useState(null);

  const timeSlots = [
    'Morning (10:00 AM – 1:00 PM)',
    'Afternoon (1:00 PM – 4:00 PM)',
    'Evening (4:00 PM – 8:00 PM)',
  ];

  const consultationReasons = [
    'Interventional Cardiology Consultation',
    'Permanent Pacemaker Evaluation / Follow-up',
    'Peripheral Angioplasty & Stenting Inquiry',
    'Coronary Angiogram Review / Scheduling',
    'CT Coronary Angiography Assessment',
    'Second Opinion on Coronary Blockages',
    'General Cardiac Evaluation'
  ];

  const validate = () => {
    const errs = {};
    if (!formData.patientName.trim()) {
      errs.patientName = 'Patient full name is required';
    }
    if (!formData.phone.trim()) {
      errs.phone = 'Contact phone number is required';
    } else if (!/^[0-9+ -]{8,15}$/.test(formData.phone.trim())) {
      errs.phone = 'Please enter a valid phone number';
    }
    if (!formData.preferredDate) {
      errs.preferredDate = 'Please select a preferred consultation date';
    } else {
      const selected = new Date(formData.preferredDate);
      const day = selected.getDay();
      if (day === 0) {
        errs.preferredDate = 'Pulse Heart Centre is closed on Sundays (Mon – Sat: 10:00 AM – 8:00 PM)';
      }
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    const token = 'PLS-' + Math.floor(100000 + Math.random() * 900000);
    const bookingRecord = {
      ...formData,
      bookingRef: token,
      timestamp: new Date().toLocaleString(),
      doctor: doctor.name,
      clinic: clinic.name,
      address: clinic.address,
    };

    setSubmittedBooking(bookingRecord);

    try {
      confetti({
        particleCount: 50,
        spread: 60,
        colors: ['#8B5CF6', '#A78BFA', '#38BDF8'],
        origin: { y: 0.7 }
      });
    } catch (err) {}
  };

  const handleReset = () => {
    setSubmittedBooking(null);
    setFormData({
      patientName: '',
      phone: '',
      preferredDate: '',
      preferredTime: 'Morning (10:00 AM – 1:00 PM)',
      reason: 'Interventional Cardiology Consultation',
      notes: ''
    });
    setErrors({});
  };

  return (
    <section id="contact" className="relative py-16 lg:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-xs font-semibold text-white bg-gradient-to-r from-purple-700 via-indigo-600 to-purple-800 px-3.5 py-1 rounded-full shadow-sm">
              Appointment Concierge
            </span>
            <div className="w-10 h-0.5 bg-gradient-to-r from-purple-500 to-sky-400" />
            <span className="text-xs font-medium tracking-wider text-purple-900 uppercase">
              Schedule Your Consultation
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
            <div className="lg:col-span-8">
              <span className="text-purple-700 font-semibold text-xs uppercase tracking-widest block mb-1">
                Priority Cardiology Booking & Triage
              </span>
              <h2 className="text-3xl sm:text-4xl font-light text-slate-900 tracking-tight leading-tight">
                Request a <span className="font-serif italic font-normal text-purple-700">Consultation</span>
              </h2>
            </div>
            <div className="lg:col-span-4 text-slate-600 text-xs sm:text-sm font-light leading-relaxed">
              Submit your preferred date and clinical background for direct in-person consultation with Dr. Prakash Chand Shahi at Pulse Heart Centre, Betiahata.
            </div>
          </div>
        </div>

        {/* Console Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: Direct Clinic Desk (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="p-8 sm:p-9 rounded-[2.5rem] bg-gradient-to-br from-white via-purple-50/60 to-white text-slate-900 shadow-layered border-2 border-purple-200/90 space-y-5">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-purple-700 font-semibold">
                  Direct Clinic Desk
                </span>
                <span className="w-2 h-2 rounded-full bg-purple-500 animate-ping" />
              </div>

              <h3 className="font-display font-semibold text-2xl text-slate-950">
                {clinic.name}
              </h3>
              
              <p className="text-slate-600 text-xs sm:text-sm font-light leading-relaxed">
                Super-specialty cardiology and catheterization consultations by <strong className="text-purple-950 font-medium">{doctor.name}</strong>.
              </p>

              <div className="space-y-4 pt-3 border-t border-purple-100 text-xs text-slate-600 font-medium">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-slate-900 block">Location</span>
                    <span>{clinic.address}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-slate-900 block">Consultation Hours</span>
                    <span>{clinic.hours}</span>
                    <span className="text-rose-600 block mt-0.5 font-bold">{clinic.sunday}</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-purple-100 text-[11px] text-purple-800 flex items-center gap-2 font-medium">
                <ShieldCheck className="w-4 h-4 text-purple-600 shrink-0" />
                <span>Verified clinic timings. Appointments coordinated directly with Pulse Heart Centre.</span>
              </div>
            </div>

          </div>

          {/* Right Column: Appointment Form (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-[2.5rem] bg-white/85 backdrop-blur-2xl border border-purple-100 shadow-luxury">
              
              <form onSubmit={handleSubmit} className="space-y-5">
                
                {/* Patient Name */}
                <div>
                  <label className="block text-[10px] font-mono uppercase tracking-[0.2em] text-slate-500 font-semibold mb-2">
                    Patient Full Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      placeholder="e.g. Ramesh Kumar"
                      value={formData.patientName}
                      onChange={(e) => setFormData({ ...formData, patientName: e.target.value })}
                      className={`w-full pl-11 pr-4 py-3.5 rounded-xl border text-sm text-slate-900 focus:outline-none transition-all ${
                        errors.patientName 
                          ? 'border-rose-400 bg-rose-50/20' 
                          : 'border-slate-200 focus:border-purple-500 bg-white/90'
                      }`}
                    />
                  </div>
                  {errors.patientName && (
                    <p className="text-xs text-rose-500 mt-1 flex items-center gap-1 font-light">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.patientName}</span>
                    </p>
                  )}
                </div>

                {/* Contact Phone Number */}
                <div>
                  <label className="block text-[10px] font-mono uppercase tracking-[0.2em] text-slate-500 font-semibold mb-2">
                    Contact Phone Number *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
                    <input
                      type="tel"
                      placeholder="e.g. +91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className={`w-full pl-11 pr-4 py-3.5 rounded-xl border text-sm text-slate-900 focus:outline-none transition-all ${
                        errors.phone 
                          ? 'border-rose-400 bg-rose-50/20' 
                          : 'border-slate-200 focus:border-purple-500 bg-white/90'
                      }`}
                    />
                  </div>
                  {errors.phone && (
                    <p className="text-xs text-rose-500 mt-1 flex items-center gap-1 font-light">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.phone}</span>
                    </p>
                  )}
                </div>

                {/* Date & Time Slot */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-mono uppercase tracking-[0.2em] text-slate-500 font-semibold mb-2">
                      Preferred Date *
                    </label>
                    <div className="relative">
                      <Calendar className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
                      <input
                        type="date"
                        min={new Date().toISOString().split('T')[0]}
                        value={formData.preferredDate}
                        onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                        className={`w-full pl-11 pr-4 py-3.5 rounded-xl border text-sm text-slate-900 focus:outline-none transition-all ${
                          errors.preferredDate 
                            ? 'border-rose-400 bg-rose-50/20' 
                            : 'border-slate-200 focus:border-purple-500 bg-white/90'
                        }`}
                      />
                    </div>
                    {errors.preferredDate && (
                      <p className="text-xs text-rose-500 mt-1 flex items-center gap-1 font-light">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.preferredDate}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono uppercase tracking-[0.2em] text-slate-500 font-semibold mb-2">
                      Preferred Time Slot *
                    </label>
                    <div className="relative">
                      <Clock className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
                      <select
                        value={formData.preferredTime}
                        onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                        className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-slate-200 focus:border-purple-500 bg-white/90 text-sm text-slate-900 focus:outline-none transition-all"
                      >
                        {timeSlots.map((slot) => (
                          <option key={slot} value={slot}>{slot}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                {/* Reason */}
                <div>
                  <label className="block text-[10px] font-mono uppercase tracking-[0.2em] text-slate-500 font-semibold mb-2">
                    Reason for Consultation *
                  </label>
                  <select
                    value={formData.reason}
                    onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl border border-slate-200 focus:border-purple-500 bg-white/90 text-sm text-slate-900 focus:outline-none transition-all"
                  >
                    {consultationReasons.map((r) => (
                      <option key={r} value={r}>{r}</option>
                    ))}
                  </select>
                </div>

                {/* Notes */}
                <div>
                  <label className="block text-[10px] font-mono uppercase tracking-[0.2em] text-slate-500 font-semibold mb-2">
                    Symptoms or Prior Interventions (Optional)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Briefly state symptoms or stent/pacemaker history..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full p-4 rounded-xl border border-slate-200 focus:border-purple-500 bg-white/90 text-sm text-slate-900 focus:outline-none transition-all"
                  />
                </div>

                {/* Submit */}
                <div>
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-3 py-4 px-8 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-medium text-xs tracking-wider uppercase shadow-md transition-all duration-300"
                  >
                    <Calendar className="w-4 h-4 text-purple-300" />
                    <span>Confirm & Generate Consultation Slip</span>
                  </button>
                  <p className="text-center text-[10px] text-slate-400 font-mono mt-3">
                    Monday–Saturday: 10:00 AM–8:00 PM • Pulse Heart Centre, Betiahata, Gorakhpur
                  </p>
                </div>

              </form>

            </div>
          </div>

        </div>

      </div>

      {/* Confirmation Modal */}
      {submittedBooking && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md animate-in fade-in duration-300">
          <div className="relative w-full max-w-lg rounded-[2.5rem] bg-white p-7 sm:p-9 shadow-2xl border border-purple-100">
            <button
              onClick={handleReset}
              className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-center mb-6">
              <div className="w-12 h-12 rounded-2xl bg-purple-50 text-purple-600 border border-purple-100 flex items-center justify-center mx-auto mb-3">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="font-display font-medium text-2xl text-slate-900">
                Consultation Slip Generated
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Ref ID: <span className="font-mono font-medium text-purple-700">{submittedBooking.bookingRef}</span>
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100 space-y-2.5 text-xs">
              <div className="flex justify-between border-b border-slate-200/60 pb-2">
                <span className="text-slate-500">Patient:</span>
                <span className="font-medium text-slate-900">{submittedBooking.patientName}</span>
              </div>
              <div className="flex justify-between border-b border-slate-200/60 pb-2">
                <span className="text-slate-500">Contact:</span>
                <span className="font-mono font-medium text-slate-900">{submittedBooking.phone}</span>
              </div>
              <div className="flex justify-between border-b border-slate-200/60 pb-2">
                <span className="text-slate-500">Consultant:</span>
                <span className="font-medium text-slate-900">{submittedBooking.doctor}</span>
              </div>
              <div className="flex justify-between border-b border-slate-200/60 pb-2">
                <span className="text-slate-500">Date & Slot:</span>
                <span className="font-medium text-purple-800">{submittedBooking.preferredDate} ({submittedBooking.preferredTime})</span>
              </div>
              <div className="flex justify-between pt-1">
                <span className="text-slate-500">Clinic:</span>
                <span className="font-medium text-slate-900 text-right">{clinic.name}, Betiahata, Gorakhpur</span>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-between gap-3">
              <button
                onClick={() => window.print()}
                className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-50 text-xs font-medium"
              >
                <Download className="w-4 h-4" />
                <span>Print Slip</span>
              </button>
              <button
                onClick={handleReset}
                className="flex-1 py-3 px-4 rounded-xl bg-slate-900 text-white text-xs font-medium hover:bg-slate-800 transition-colors"
              >
                Close & Return
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
