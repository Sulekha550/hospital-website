import React, { useState } from 'react';
import { Star, CheckCircle2, Play, Quote, ShieldCheck, X } from 'lucide-react';
import { PULSE_DATA } from '../data/pulseData';

/**
 * PatientOutcomesSection
 * Verified clinical recovery testimonials and consent-based video stories.
 */
export default function PatientOutcomesSection() {
  const { patientStories } = PULSE_DATA;
  const [activeVideo, setActiveVideo] = useState(null);

  return (
    <section id="outcomes" className="py-20 lg:py-28 bg-[#0A1C2C] text-white relative z-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-16">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#2788B8]">
              Recovery Telemetry
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white mt-1">
              Patient Stories & Verified Outcomes
            </h2>
          </div>
          <p className="text-sm text-slate-300 max-w-md">
            Unfiltered accounts from patients whose cardiac, neurological, and joint vitality was restored through evidence-based interventions.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {patientStories.map((story) => (
            <div
              key={story.id}
              className="rounded-3xl bg-white/5 border border-white/10 hover:border-[#2788B8]/40 transition-all duration-300 p-8 flex flex-col justify-between space-y-6 relative overflow-hidden backdrop-blur-md"
            >
              <Quote className="absolute top-4 right-4 w-12 h-12 text-white/5 pointer-events-none" />

              <div className="space-y-4 relative z-10">
                <div className="flex items-center gap-1 text-[#EBCB91]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                <div className="inline-block px-3 py-1 rounded-full bg-white/10 text-[#A9D8E9] text-[11px] font-bold uppercase tracking-wider">
                  {story.condition}
                </div>

                <p className="text-xs sm:text-sm text-slate-200 italic leading-relaxed">
                  "{story.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 space-y-2 relative z-10">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-bold text-white flex items-center gap-1.5">
                      <span>{story.patientName}</span>
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    </h3>
                    <span className="text-[11px] text-slate-400">
                      {story.age} • {story.location}
                    </span>
                  </div>

                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                    {story.recoveryTime}
                  </span>
                </div>

                <div className="text-[11px] text-slate-400">
                  Attending Specialist: <strong className="text-white font-semibold">{story.doctor}</strong>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Video Story Feature Bar */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-white/5 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#2788B8]">
              Video Testimonial Archive
            </span>
            <h4 className="text-lg font-bold text-white">
              Watch Patients Share Their Transradial Angioplasty Experience
            </h4>
            <p className="text-xs text-slate-300 max-w-xl">
              Hear directly how wrist-access catheterization eliminated painful bed rest and allowed next-day discharge.
            </p>
          </div>

          <button
            onClick={() => setActiveVideo({ title: "Transradial Recovery Story", patient: "Ramakant Tripathi" })}
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[#2788B8] hover:bg-[#1f739c] text-white font-bold text-xs uppercase tracking-wider shadow-md transition-all whitespace-nowrap"
          >
            <Play className="w-4 h-4 fill-current" />
            <span>Play Video Story</span>
          </button>
        </div>

        {/* Video Modal */}
        {activeVideo && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
            <div className="relative w-full max-w-2xl bg-[#0E2538] rounded-3xl p-6 border border-white/20 shadow-2xl space-y-4">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <h5 className="text-sm font-bold text-white">{activeVideo.title} — {activeVideo.patient}</h5>
                <button
                  onClick={() => setActiveVideo(null)}
                  className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="relative h-72 rounded-2xl overflow-hidden bg-black flex items-center justify-center border border-white/10">
                <img
                  src="/images/doctor-consulting.jpg"
                  alt="Doctor with patient"
                  className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 space-y-3">
                  <div className="w-14 h-14 rounded-full bg-[#2788B8] text-white flex items-center justify-center shadow-lg">
                    <Play className="w-6 h-6 fill-current ml-0.5" />
                  </div>
                  <span className="text-xs font-bold text-white">Transradial Recovery Dialogue (Recorded with Consent)</span>
                  <span className="text-[11px] text-slate-300">PULSE Heart Centre Clinical Archive</span>
                </div>
              </div>

              <div className="text-right">
                <button
                  onClick={() => setActiveVideo(null)}
                  className="px-5 py-2 rounded-full bg-white/10 text-xs font-bold text-white hover:bg-white/20"
                >
                  Close Video
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
