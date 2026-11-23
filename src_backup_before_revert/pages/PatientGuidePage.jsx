import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FileText, ShieldCheck, CheckCircle2, HelpCircle, 
  CreditCard, Clock, Phone, Building, ArrowRight 
} from 'lucide-react';
import { PULSE_DATA } from '../data/pulseData';

export default function PatientGuidePage() {
  const { insurancePartners, faqs } = PULSE_DATA;

  const guideSteps = [
    {
      title: "Outpatient (OPD) Consultation Process",
      desc: "Register at our digital kiosk or priority reception counter. Bring past medical records, ECG tracings, angiogram CDs, and current prescription bottles for comprehensive review."
    },
    {
      title: "Planned Admission & Daycare Procedures",
      desc: "For transradial angioplasty, pacemaker implantation, or elective surgeries, our admission desk completes pre-authorization with your insurance/TPA within 2 hours."
    },
    {
      title: "24/7 Emergency & Code-Blue Admission",
      desc: "Immediate clinical triage without financial paperwork delays. Acute STEMI heart attack and stroke patients are transferred directly to the Cath Lab or Neuro-ICU."
    },
    {
      title: "Transparent Billing & Discharge Summary",
      desc: "Itemized billing with zero hidden hospital costs. A detailed, doctor-verified discharge summary and clear home medication instructions are provided upon discharge."
    }
  ];

  return (
    <div className="pt-24 pb-20 bg-[#F7FAFC]">
      
      {/* 1. Patient Guide Hero (~100vh) */}
      <section className="min-h-[75vh] flex items-center bg-gradient-to-b from-[#F0F7FB] via-white to-[#F7FAFC] px-4 sm:px-6 lg:px-8 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto w-full py-16 text-center max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#173C59]/10 text-[#173C59] text-xs font-bold uppercase tracking-widest">
            <FileText className="w-3.5 h-3.5 text-[#2788B8]" />
            <span>Patient Information & Care Guide</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold text-[#173C59] tracking-tight leading-[1.1]">
            Everything You Need For a <br />
            <span className="text-[#2788B8]">Seamless Hospital Visit.</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Transparent admissions, cashless TPA insurance processing, emergency triage protocols, and answers to frequently asked patient questions.
          </p>
        </div>
      </section>

      {/* 2. Admission & Patient Steps */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-[#173C59] mb-8 text-center sm:text-left">
          Patient Care & Admission Protocol
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {guideSteps.map((step, idx) => (
            <div key={idx} className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-xs space-y-3">
              <div className="w-8 h-8 rounded-full bg-sky-50 text-[#2788B8] font-bold text-xs flex items-center justify-center">
                0{idx + 1}
              </div>
              <h3 className="text-base font-bold text-[#173C59]">{step.title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Cashless Insurance & TPA Partners */}
      <section className="py-16 bg-white border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#2788B8]">Financial Transparency</span>
            <h2 className="text-3xl font-extrabold text-[#173C59]">Cashless Health Insurance & TPA Tie-Ups</h2>
            <p className="text-xs text-slate-500">
              PULSE Hospital maintains a dedicated 24/7 TPA Desk that coordinates cashless approvals with all leading health insurance networks.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {insurancePartners.map((ins, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-[#F7FAFC] border border-slate-200 text-center font-bold text-xs text-[#173C59] flex items-center justify-center">
                {ins}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Frequently Asked Questions */}
      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-2">
          <span className="text-[11px] font-bold uppercase tracking-widest text-[#2788B8]">FAQ</span>
          <h2 className="text-3xl font-extrabold text-[#173C59]">Frequently Asked Questions</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-xs space-y-2">
              <h3 className="text-sm sm:text-base font-bold text-[#173C59] flex items-start gap-2">
                <HelpCircle className="w-4 h-4 text-[#2788B8] shrink-0 mt-0.5" />
                <span>{faq.q}</span>
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed pl-6">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
