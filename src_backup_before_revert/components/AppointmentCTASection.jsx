import React, { useState } from 'react';
import { 
  Calendar, Clock, CheckCircle2, ShieldCheck, User, Phone, 
  Mail, ArrowRight, Sparkles, Building, Stethoscope 
} from 'lucide-react';
import { PULSE_DATA } from '../data/pulseData';

export default function AppointmentCTASection() {
  const { departments, doctors } = PULSE_DATA;

  const [formData, setFormData] = useState({
    department: 'cardiology',
    doctor: 'dr-prakash-chand-shahi',
    date: '',
    timeSlot: '10:30 AM',
    patientName: '',
    phone: '',
    email: '',
    notes: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const timeSlots = [
    '09:30 AM', '10:30 AM', '11:30 AM', 
    '01:00 PM', '04:30 PM', '05:30 PM', '06:30 PM'
  ];

  const filteredDoctors = doctors.filter(
    (d) => !formData.department || d.departmentSlug === formData.department
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.patientName.trim() || !formData.phone.trim()) {
      setErrorMsg('Please enter patient name and contact phone number.');
      return;
    }
    setErrorMsg('');
    setIsSubmitted(true);
  };

  return (
    <section id="appointment-cta" className="py-20 lg:py-28 bg-[#FAF8F5] border-b border-slate-200/80 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
          <span className="text-[11px] font-bold uppercase tracking-widest text-[#2788B8]">
            Section 12 • Priority Access
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#173C59]">
            Book Your Priority Consultation
          </h2>
          <p className="text-sm text-slate-500">
            Schedule an unhurried clinical evaluation with our super-specialists at PULSE Multispeciality Hospital, Betiahata.
          </p>
        </div>

        {/* Master Appointment Booking Plate */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl border border-slate-200/90 shadow-xl overflow-hidden">
          
          <div className="p-6 sm:p-10">
            
            {isSubmitted ? (
              /* Success Confirmation View */
              <div className="py-12 text-center space-y-4 animate-in fade-in duration-300">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-sm">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                
                <h3 className="text-2xl font-extrabold text-[#173C59]">
                  Appointment Request Confirmed!
                </h3>
                
                <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                  Thank you, <span className="font-bold text-slate-800">{formData.patientName}</span>. Your priority consultation request has been registered for <span className="font-bold text-[#173C59]">{formData.timeSlot}</span>.
                </p>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 max-w-sm mx-auto text-left text-xs space-y-1.5 text-slate-600">
                  <div><strong>Specialist:</strong> {doctors.find(d => d.slug === formData.doctor)?.name || 'Consultant'}</div>
                  <div><strong>Location:</strong> Pulse Heart Centre, Betiahata, Gorakhpur</div>
                  <div><strong>Helpline:</strong> +91 98765 43211</div>
                </div>

                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({
                      department: 'cardiology',
                      doctor: 'dr-prakash-chand-shahi',
                      date: '',
                      timeSlot: '10:30 AM',
                      patientName: '',
                      phone: '',
                      email: '',
                      notes: ''
                    });
                  }}
                  className="px-6 py-2.5 rounded-full bg-[#173C59] text-white text-xs font-semibold hover:bg-[#0E2538] transition-colors"
                >
                  Book Another Appointment
                </button>
              </div>
            ) : (
              /* Booking Form */
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {errorMsg && (
                  <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-semibold">
                    {errorMsg}
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  
                  {/* Select Department */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
                      1. Select Department
                    </label>
                    <select
                      value={formData.department}
                      onChange={(e) => {
                        const newDept = e.target.value;
                        const firstDoc = doctors.find(d => d.departmentSlug === newDept);
                        setFormData({
                          ...formData,
                          department: newDept,
                          doctor: firstDoc ? firstDoc.slug : formData.doctor
                        });
                      }}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-xs font-semibold text-slate-800 focus:outline-none focus:border-[#2788B8] focus:bg-white transition-all"
                    >
                      {departments.map((dept) => (
                        <option key={dept.slug} value={dept.slug}>
                          {dept.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Select Doctor */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
                      2. Select Specialist Clinician
                    </label>
                    <select
                      value={formData.doctor}
                      onChange={(e) => setFormData({ ...formData, doctor: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-xs font-semibold text-slate-800 focus:outline-none focus:border-[#2788B8] focus:bg-white transition-all"
                    >
                      {filteredDoctors.map((doc) => (
                        <option key={doc.slug} value={doc.slug}>
                          {doc.name} ({doc.title})
                        </option>
                      ))}
                    </select>
                  </div>

                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  
                  {/* Date Selection */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
                      3. Preferred Date
                    </label>
                    <input
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-xs font-semibold text-slate-800 focus:outline-none focus:border-[#2788B8] focus:bg-white transition-all"
                    />
                  </div>

                  {/* Time Slot Selection */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
                      4. Preferred Time Window
                    </label>
                    <select
                      value={formData.timeSlot}
                      onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-xs font-semibold text-slate-800 focus:outline-none focus:border-[#2788B8] focus:bg-white transition-all"
                    >
                      {timeSlots.map((slot) => (
                        <option key={slot} value={slot}>
                          {slot}
                        </option>
                      ))}
                    </select>
                  </div>

                </div>

                {/* Patient Information Inputs */}
                <div className="pt-2 border-t border-slate-100">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-4">
                    5. Patient Contact Information
                  </span>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <input
                        type="text"
                        placeholder="Full Patient Name *"
                        required
                        value={formData.patientName}
                        onChange={(e) => setFormData({ ...formData, patientName: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-xs font-semibold text-slate-800 focus:outline-none focus:border-[#2788B8] focus:bg-white transition-all"
                      />
                    </div>

                    <div>
                      <input
                        type="tel"
                        placeholder="Contact Phone Number *"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-xs font-semibold text-slate-800 focus:outline-none focus:border-[#2788B8] focus:bg-white transition-all"
                      />
                    </div>
                  </div>

                  <div className="mt-4">
                    <textarea
                      rows={2}
                      placeholder="Brief description of primary symptoms, prior angiograms, or questions (optional)..."
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-xs font-medium text-slate-800 focus:outline-none focus:border-[#2788B8] focus:bg-white transition-all"
                    />
                  </div>
                </div>

                {/* Submission CTA */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-100">
                  <div className="text-xs text-slate-500 text-center sm:text-left">
                    <span className="font-semibold text-slate-700">Instant SMS confirmation</span> and zero booking convenience fee.
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#173C59] hover:bg-[#0E2538] text-white font-semibold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all duration-200"
                  >
                    Confirm Priority Consultation
                  </button>
                </div>

              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
