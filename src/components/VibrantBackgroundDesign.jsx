import React from 'react';

/**
 * VibrantBackgroundDesign -> Clean, Calm Warm Platinum Silk Canvas
 * Static, distraction-free architectural backdrop so images and typography stay crisp.
 */
export default function VibrantBackgroundDesign() {
  return (
    <div
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none"
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#FAF9F6] via-[#F8FAFC] to-[#F1F5F9]" />
      <div
        className="absolute -top-32 -left-32 w-[720px] h-[720px] rounded-full opacity-55"
        style={{ background: 'radial-gradient(circle, rgba(10,17,40,0.08) 0%, transparent 70%)' }}
      />
      <div
        className="absolute -top-24 right-0 w-[680px] h-[680px] rounded-full opacity-55"
        style={{ background: 'radial-gradient(circle, rgba(190,18,60,0.08) 0%, transparent 70%)' }}
      />
    </div>
  );
}
