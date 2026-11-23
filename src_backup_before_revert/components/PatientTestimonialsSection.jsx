import React from 'react';
import { Star, CheckCircle2, Quote, Award, ShieldCheck } from 'lucide-react';

/**
 * PatientTestimonialsSection
 * Clean, luxurious patient recovery stories with verified clinical outcomes.
 */
export default function PatientTestimonialsSection() {
  const testimonials = [
    {
      name: "Ramakant Tripathi",
      age: "62 Yrs",
      city: "Gorakhpur",
      condition: "Severe Triple Vessel CAD",
      outcome: "Discharged in 24 Hours",
      quote: "I was told elsewhere that open-heart bypass surgery was my only option. Dr. Prakash Chand Shahi examined my angiogram CD, explained every block clearly, and performed a flawless wrist-first angioplasty with two stents. I was walking the very next morning without any groin pain or bleeding.",
      doctor: "Dr. Prakash Chand Shahi"
    },
    {
      name: "Sunita Devi",
      age: "58 Yrs",
      city: "Deoria",
      condition: "Severe Knee Osteoarthritis",
      outcome: "Walked on Day 2",
      quote: "For four years I could not climb even two steps without agonizing pain. Dr. Vikramaditya Rathore replaced both my knees with robotic sub-millimeter precision. Today I take my grandchildren to the park every single evening with zero pain.",
      doctor: "Dr. Vikramaditya Rathore"
    },
    {
      name: "Mohd. Aslam Khan",
      age: "47 Yrs",
      city: "Basti",
      condition: "Acute Ischemic Stroke",
      outcome: "Full Speech & Motor Recovery",
      quote: "When my father suddenly lost speech and facial control, PULSE's emergency team initiated the Stroke Code immediately. The 3T MRI and intravenous thrombolysis happened within 35 minutes of arrival. His speech and motor functions returned completely.",
      doctor: "Dr. Ananya Sharma"
    }
  ];

  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-[#FAF8F5] border-y border-slate-200/80 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-14">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#2788B8]">
              Verified Telemetry
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#173C59] mt-1">
              Patient Stories & Verified Outcomes
            </h2>
          </div>
          <p className="text-sm text-slate-600 max-w-md">
            Authentic reflections from patients whose cardiac and neurological vitality was restored at PULSE Hospital.
          </p>
        </div>

        {/* 3 Patient Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-6 relative"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-slate-100 pointer-events-none" />

              <div className="space-y-4 relative z-10">
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                <div className="inline-block px-3 py-1 rounded-full bg-purple-50 text-purple-700 text-[11px] font-bold uppercase tracking-wider border border-purple-200">
                  {item.condition}
                </div>

                <p className="text-xs sm:text-sm text-slate-700 italic leading-relaxed">
                  "{item.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 space-y-1.5 relative z-10">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-bold text-[#173C59] flex items-center gap-1.5">
                    <span>{item.name}</span>
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  </h4>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200">
                    {item.outcome}
                  </span>
                </div>
                <div className="text-xs text-slate-500">
                  {item.age} • {item.city} | Consultant: <strong className="text-slate-800">{item.doctor}</strong>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
