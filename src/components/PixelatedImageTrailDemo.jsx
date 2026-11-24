import React from 'react';
import PixelatedImageTrail from "@/components/ui/pixelated-image-trail";
import { Sparkles, Activity, ShieldCheck, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function PixelatedImageTrailDemo() {
  return (
    <div className="relative h-[500px] overflow-hidden rounded-3xl bg-slate-950 border-2 border-orange-200/90 shadow-2xl group my-8">
      {/* The Pixelated Image Trail Cursor Effect */}
      <PixelatedImageTrail
        images={[
          "/trail-images/image1.jpg",
          "/trail-images/image4.jpg",
          "/trail-images/image5.jpg",
          "/trail-images/image2.jpg",
          "/trail-images/image3.jpg",
        ]}
        imageSize={220}
        slices={5}
        smoothing={0.32}
        spawnThreshold={32}
        config={{
          imageLifespan: 1500,
          inDuration: 280,
          outDuration: 620,
          staggerIn: 12,
          staggerOut: 9,
          slideDuration: 1300,
        }}
        className="w-full h-full"
      >
        {/* Sleek Cinematic Overlay Content */}
        <div className="absolute inset-0 flex flex-col justify-between p-8 sm:p-12 text-left pointer-events-none select-none">
          {/* Top Badge Row */}
          <div className="flex items-center justify-between gap-3">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-mono font-bold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-[#EA580C] animate-ping" />
              <span>Interactive Clinical Facility Visual Trail</span>
            </div>
            <div className="text-[11px] font-mono text-white/60 hidden sm:block">
              [ MOVE CURSOR OR TOUCH TO REVEAL ARCHIVES ]
            </div>
          </div>

          {/* Center Visual Invitation */}
          <div className="max-w-xl space-y-3">
            <h3 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight drop-shadow-md">
              Surgical Suites &amp; <br />
              <span className="font-serif italic font-normal text-[#FB923C]">Cath-Lab In Motion</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 font-normal leading-relaxed drop-shadow-sm max-w-md">
              Glide your mouse across this canvas to generate real-time pixelated slice streams of Pulse Heart Centre's flat-panel digital catheterization laboratory, laminar operation theatres, and inpatient suites.
            </p>
          </div>

          {/* Bottom Telemetry Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/10">
            <div className="flex items-center gap-4 text-xs font-mono text-white/80">
              <span className="flex items-center gap-1.5">
                <Activity className="w-3.5 h-3.5 text-[#EA580C]" />
                <span>Siemens Artis Zee Fluoroscopy</span>
              </span>
              <span className="hidden md:inline text-white/30">•</span>
              <span className="hidden md:flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Class-100 Laminar Sterility</span>
              </span>
            </div>

            <div className="pointer-events-auto">
              <Link
                to="/hospital"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/90 hover:bg-white text-slate-900 font-bold text-xs uppercase tracking-wider shadow-lg hover:shadow-xl transition-all hover:scale-105"
              >
                <span>View Full Hospital Tour</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#EA580C]" />
              </Link>
            </div>
          </div>
        </div>
      </PixelatedImageTrail>
    </div>
  );
}

export default PixelatedImageTrailDemo;
