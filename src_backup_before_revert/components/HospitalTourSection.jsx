import React, { useState } from 'react';
import { Eye, X, ArrowRight, Camera, Sparkles } from 'lucide-react';
import { PULSE_DATA } from '../data/pulseData';

export default function HospitalTourSection() {
  const { hospitalTour } = PULSE_DATA;
  const [activePhoto, setActivePhoto] = useState(null);

  const featured = hospitalTour.find((t) => t.featured) || hospitalTour[0];
  const galleryItems = hospitalTour.filter((t) => !t.featured);

  return (
    <section id="tour" className="py-20 lg:py-28 bg-[#F7FAFC] border-b border-slate-200/80 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-14">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#2788B8]">
              Section 10 • Architectural Gallery
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#173C59] mt-1">
              Hospital Tour & Infrastructure
            </h2>
          </div>
          <p className="text-sm text-slate-500 max-w-md">
            Engineered to international hospital accreditation standards for air sterility, radiation shielding, and patient comfort.
          </p>
        </div>

        {/* Asymmetrical Editorial Photo Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Left Column (7 Cols): Featured Architectural Hero Image */}
          <div
            onClick={() => setActivePhoto(featured)}
            className="lg:col-span-7 group relative rounded-3xl overflow-hidden border border-slate-200 bg-white shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer min-h-[380px] lg:min-h-[460px] flex flex-col justify-end p-6 sm:p-8"
          >
            <img
              src={featured.image}
              alt={featured.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#173C59]/90 via-[#173C59]/30 to-transparent" />

            <div className="relative z-10 text-white space-y-2">
              <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-[10px] font-bold uppercase tracking-wider text-[#A9D8E9] border border-white/20">
                {featured.category}
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                {featured.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-200 max-w-lg leading-relaxed">
                {featured.description}
              </p>
              <div className="pt-2 flex items-center gap-1.5 text-xs font-semibold text-[#A9D8E9]">
                <Eye className="w-3.5 h-3.5" />
                <span>Click to view high-resolution full screen</span>
              </div>
            </div>
          </div>

          {/* Right Column (5 Cols): 4 Supporting Clinical Photography Blocks */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
            {galleryItems.map((item) => (
              <div
                key={item.id}
                onClick={() => setActivePhoto(item)}
                className="group relative rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-xs hover:shadow-md transition-all duration-300 cursor-pointer h-[180px] sm:h-[220px] flex flex-col justify-end p-4"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#173C59]/80 via-transparent to-transparent" />

                <div className="relative z-10 text-white space-y-1">
                  <span className="text-[9px] uppercase font-bold tracking-wider text-[#A9D8E9]">
                    {item.category}
                  </span>
                  <h4 className="text-xs font-bold text-white line-clamp-1">
                    {item.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Fullscreen Photo Lightbox Modal */}
        {activePhoto && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
            <div className="relative w-full max-w-4xl bg-[#0E2538] rounded-3xl overflow-hidden border border-white/20 shadow-2xl">
              
              <div className="relative h-[420px] sm:h-[500px]">
                <img
                  src={activePhoto.image}
                  alt={activePhoto.title}
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={() => setActivePhoto(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-black/60 hover:bg-black/80 text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-6 bg-[#0E2538] text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#A9D8E9]">
                    {activePhoto.category}
                  </span>
                  <h3 className="text-lg font-bold text-white mt-0.5">
                    {activePhoto.title}
                  </h3>
                  <p className="text-xs text-slate-300 mt-1 max-w-xl">
                    {activePhoto.description}
                  </p>
                </div>

                <button
                  onClick={() => setActivePhoto(null)}
                  className="px-5 py-2 rounded-full bg-white/10 hover:bg-white/20 text-xs font-bold text-white uppercase tracking-wider"
                >
                  Close Preview
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
