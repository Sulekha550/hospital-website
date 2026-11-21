import React, { useEffect, useRef } from 'react';
import { pulseAudio } from '../utils/soundEffects';

/**
 * ECGMonitor: Real-time clinical ECG sweep canvas
 * Styled with Royal Violet, Radiant Aqua, and Coral Rose accents
 */
export default function ECGMonitor({ bpm = 72, className = "" }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let animationFrameId;
    let width = canvas.width;
    let height = canvas.height;
    let xPos = 0;
    const sweepSpeed = 2.2;
    let lastY = height / 2;
    let cycleTime = 0;
    let lastAudioTrigger = 0;

    const getWaveValue = (phase) => {
      const mid = height / 2;
      const amp = height * 0.38;

      if (phase >= 0.08 && phase < 0.16) {
        const pNorm = (phase - 0.08) / 0.08;
        return mid - Math.sin(pNorm * Math.PI) * (amp * 0.22);
      } else if (phase >= 0.20 && phase < 0.23) {
        const qNorm = (phase - 0.20) / 0.03;
        return mid + Math.sin(qNorm * Math.PI) * (amp * 0.15);
      } else if (phase >= 0.23 && phase < 0.29) {
        const rNorm = (phase - 0.23) / 0.06;
        if (rNorm < 0.5) {
          return mid - (rNorm * 2) * amp;
        } else {
          return mid - (2 - rNorm * 2) * amp;
        }
      } else if (phase >= 0.29 && phase < 0.33) {
        const sNorm = (phase - 0.29) / 0.04;
        return mid + Math.sin(sNorm * Math.PI) * (amp * 0.32);
      } else if (phase >= 0.44 && phase < 0.58) {
        const tNorm = (phase - 0.44) / 0.14;
        return mid - Math.sin(tNorm * Math.PI) * (amp * 0.38);
      } else if (phase >= 0.62 && phase < 0.68) {
        const uNorm = (phase - 0.62) / 0.06;
        return mid - Math.sin(uNorm * Math.PI) * (amp * 0.08);
      }

      return mid + (Math.sin(phase * 40) * 0.6);
    };

    const drawGrid = () => {
      ctx.strokeStyle = 'rgba(124, 58, 237, 0.07)';
      ctx.lineWidth = 1;
      const step = 16;
      for (let x = 0; x < width; x += step) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += step) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }
    };

    ctx.fillStyle = '#FAF7FD';
    ctx.fillRect(0, 0, width, height);
    drawGrid();

    const render = () => {
      animationFrameId = requestAnimationFrame(render);

      const cycleLength = (60 / bpm) * 60;
      cycleTime = (cycleTime + 1) % cycleLength;
      const phase = cycleTime / cycleLength;

      if (phase >= 0.24 && phase < 0.28 && Date.now() - lastAudioTrigger > 600) {
        pulseAudio.playHeartbeat();
        lastAudioTrigger = Date.now();
      }

      const nextY = getWaveValue(phase);

      // Sweep erase
      ctx.fillStyle = 'rgba(250, 247, 253, 0.28)';
      ctx.fillRect(xPos, 0, 18, height);

      // Draw ECG Line with Royal Violet to Coral glow
      ctx.beginPath();
      ctx.moveTo(xPos, lastY);
      ctx.lineTo(xPos + sweepSpeed, nextY);
      ctx.strokeStyle = '#7C3AED';
      ctx.lineWidth = 2.4;
      ctx.shadowColor = '#06B6D4';
      ctx.shadowBlur = 6;
      ctx.stroke();
      ctx.shadowBlur = 0;

      lastY = nextY;
      xPos += sweepSpeed;

      if (xPos >= width) {
        xPos = 0;
        ctx.fillStyle = 'rgba(250, 247, 253, 0.9)';
        ctx.fillRect(0, 0, width, height);
        drawGrid();
      }
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [bpm]);

  return (
    <div className={`relative overflow-hidden rounded-2xl border border-violet-100 bg-[#FAF7FD] shadow-inner p-1 ${className}`}>
      <div className="absolute top-2 left-3 z-10 flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-rose-500 animate-ping"></span>
        <span className="font-mono text-[11px] font-semibold tracking-wider text-violet-800">
          LEAD II • {bpm} BPM • SINUS RHYTHM
        </span>
      </div>
      <canvas 
        ref={canvasRef} 
        width={380} 
        height={90} 
        className="w-full h-full block"
      />
    </div>
  );
}
