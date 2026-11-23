import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Clock, ArrowRight, User, X, CheckCircle2 } from 'lucide-react';
import { PULSE_DATA } from '../data/pulseData';

export default function HealthInsightsSection() {
  const { healthInsights } = PULSE_DATA;
  const [selectedArticle, setSelectedArticle] = useState(null);

  return (
    <section id="insights" className="py-20 lg:py-28 bg-white border-b border-slate-200/80 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-14">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#2788B8]">
              Section 11 • Clinical Education
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#173C59] mt-1">
              Health Insights & Doctor's Advice
            </h2>
          </div>
          <p className="text-sm text-slate-500 max-w-md">
            Evidence-based medical publications authored by our senior faculty to empower patients with preventive health literacy.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {healthInsights.map((article) => (
            <div
              key={article.id}
              className="group rounded-3xl bg-[#F7FAFC] border border-slate-200/90 hover:border-[#2788B8]/40 hover:bg-white p-6 transition-all duration-300 flex flex-col justify-between space-y-4 card-hover-lift shadow-xs hover:shadow-md"
            >
              <div className="space-y-3">
                
                {/* Meta Badge */}
                <div className="flex items-center justify-between text-[11px]">
                  <span className="px-2.5 py-1 rounded-full bg-sky-50 text-[#2788B8] font-bold uppercase tracking-wider border border-sky-100">
                    {article.category}
                  </span>
                  <span className="text-slate-400 flex items-center gap-1 font-medium">
                    <Clock className="w-3 h-3" />
                    <span>{article.readTime}</span>
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-base font-bold text-[#173C59] group-hover:text-[#2788B8] transition-colors leading-snug">
                  {article.title}
                </h3>

                {/* Summary */}
                <p className="text-xs text-slate-500 leading-relaxed line-clamp-3">
                  {article.summary}
                </p>

              </div>

              {/* Author & Action */}
              <div className="pt-3 border-t border-slate-200/60 flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-slate-400 block font-semibold">Author</span>
                  <span className="text-xs font-bold text-[#173C59]">{article.author}</span>
                </div>

                <button
                  onClick={() => setSelectedArticle(article)}
                  className="p-2 rounded-full bg-white border border-slate-200 text-[#2788B8] group-hover:bg-[#173C59] group-hover:text-white transition-all shadow-xs"
                  title="Read Article"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Read Article Modal */}
        {selectedArticle && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="relative w-full max-w-2xl bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-2xl space-y-6 max-h-[85vh] overflow-y-auto">
              
              <div className="flex items-start justify-between gap-4 border-b border-slate-100 pb-4">
                <div>
                  <span className="px-2.5 py-1 rounded-full bg-sky-50 text-[#2788B8] text-[10px] font-bold uppercase tracking-wider">
                    {selectedArticle.category} • {selectedArticle.date}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#173C59] mt-2">
                    {selectedArticle.title}
                  </h3>
                  <div className="text-xs font-semibold text-slate-500 mt-1">
                    By {selectedArticle.author} ({selectedArticle.authorRole})
                  </div>
                </div>

                <button
                  onClick={() => setSelectedArticle(null)}
                  className="p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
                <p className="font-medium text-slate-800">
                  {selectedArticle.summary}
                </p>
                <p>
                  At PULSE Multispeciality Hospital, clinical experience underscores that over 80% of cardiovascular and neurological crises can be mitigated or reversed when early clinical markers are detected. Uncharacteristic chest fatigue, radiating numbness, or sudden changes in physical stamina should prompt immediate specialist consultation rather than watchful waiting.
                </p>
                <div className="p-4 rounded-2xl bg-sky-50 border border-sky-100 space-y-2">
                  <h5 className="text-xs font-bold uppercase tracking-wider text-[#173C59]">Specialist Recommendation:</h5>
                  <p className="text-xs text-slate-700">
                    If you or a loved one experience atypical exertional discomfort or high-risk metabolic parameters (uncontrolled HbA1c, elevated LDL), schedule an elective outpatient screening with our department consultants.
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <Link
                  to="/book-appointment"
                  onClick={() => setSelectedArticle(null)}
                  className="px-5 py-2.5 rounded-full bg-[#173C59] hover:bg-[#0E2538] text-white text-xs font-semibold"
                >
                  Book Consultation with Specialist
                </Link>

                <button
                  onClick={() => setSelectedArticle(null)}
                  className="px-4 py-2 text-xs font-bold text-slate-500 hover:text-slate-800"
                >
                  Close Article
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
