import React, { useEffect, useRef } from 'react';

/**
 * CinematicHospitalCanvas
 * Authentic Premier Hospital & Clinical Cardiology Light Environment
 * - Tonal Palette: Hospital Sapphire Blue, Medical Cerulean, Surgical Ice Cyan, and subtle Cardiac Pulse Crimson
 * - Dynamic harmonic cardiac waveforms gliding across the visual plane
 * - Interactive biophotonic energy motes responding to mouse & scroll
 * - Pure, sterile, professional hospital daylight atmosphere
 */
export default function CinematicHospitalCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let animationId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Scroll tracking
    let scrollY = window.scrollY;
    const handleScroll = () => {
      scrollY = window.scrollY;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Mouse tracking for reactive fluid tilt
    let mouseX = width / 2;
    let mouseY = height / 2;
    let targetMouseX = width / 2;
    let targetMouseY = height / 2;

    const handleMouseMove = (e) => {
      targetMouseX = e.clientX;
      targetMouseY = e.clientY;
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Clinical Hospital & Cardiac Pulse Motes
    const colors = [
      'rgba(2, 132, 199, ',    // Medical Sky Blue
      'rgba(14, 165, 233, ',   // Clinical Cyan
      'rgba(30, 64, 175, ',    // Hospital Navy
      'rgba(56, 189, 248, ',   // Ice Azure
      'rgba(225, 29, 72, ',    // Cardiac Pulse Ruby
      'rgba(37, 99, 235, ',    // Sapphire Clinical Blue
    ];

    const particles = Array.from({ length: 60 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 3.5 + 1.5,
      vx: (Math.random() - 0.5) * 0.7,
      vy: -Math.random() * 0.6 - 0.25,
      colorBase: colors[Math.floor(Math.random() * colors.length)],
      alpha: Math.random() * 0.5 + 0.25,
      pulseSpeed: Math.random() * 0.03 + 0.015,
      phase: Math.random() * Math.PI * 2,
    }));

    let clock = 0;

    const render = () => {
      animationId = requestAnimationFrame(render);
      clock += 0.016;

      // Parallax smooth interpolation
      mouseX += (targetMouseX - mouseX) * 0.04;
      mouseY += (targetMouseY - mouseY) * 0.04;
      const parallaxX = (mouseX - width / 2) * 0.06;
      const parallaxY = (mouseY - height / 2) * 0.05;

      ctx.clearRect(0, 0, width, height);

      // --- 1. CLEAN IMMACULATE HOSPITAL WHITE & SURGICAL BLUE BASE ---
      const baseGrad = ctx.createLinearGradient(0, 0, width, height);
      baseGrad.addColorStop(0, '#F8FAFC');     // Pristine Hospital Slate 50
      baseGrad.addColorStop(0.35, '#F0F6FA');  // Clean Clinical Ice Mist
      baseGrad.addColorStop(0.75, '#E6F0F8');  // Surgical Sky 100
      baseGrad.addColorStop(1, '#DCEBF6');     // Soft Daylight Blue
      ctx.fillStyle = baseGrad;
      ctx.fillRect(0, 0, width, height);

      // --- 2. VIBRANT CLINICAL HOSPITAL LIGHT BLOBS ---
      // Blob 1: Medical Sky Blue Glow (Top Left)
      const blob1X = width * 0.2 + Math.sin(clock * 0.6) * 120 + parallaxX * 0.8;
      const blob1Y = height * 0.25 + Math.cos(clock * 0.5) * 80 + parallaxY * 0.8;
      const g1 = ctx.createRadialGradient(blob1X, blob1Y, 10, blob1X, blob1Y, width * 0.45);
      g1.addColorStop(0, 'rgba(2, 132, 199, 0.16)');
      g1.addColorStop(0.5, 'rgba(14, 165, 233, 0.08)');
      g1.addColorStop(1, 'rgba(255, 255, 255, 0)');
      ctx.fillStyle = g1;
      ctx.beginPath();
      ctx.arc(blob1X, blob1Y, width * 0.45, 0, Math.PI * 2);
      ctx.fill();

      // Blob 2: Hospital Navy Glow (Top Right)
      const blob2X = width * 0.8 + Math.cos(clock * 0.5) * 100 - parallaxX;
      const blob2Y = height * 0.3 + Math.sin(clock * 0.7) * 90 - parallaxY;
      const g2 = ctx.createRadialGradient(blob2X, blob2Y, 10, blob2X, blob2Y, width * 0.4);
      g2.addColorStop(0, 'rgba(30, 64, 175, 0.12)');
      g2.addColorStop(0.5, 'rgba(37, 99, 235, 0.06)');
      g2.addColorStop(1, 'rgba(255, 255, 255, 0)');
      ctx.fillStyle = g2;
      ctx.beginPath();
      ctx.arc(blob2X, blob2Y, width * 0.4, 0, Math.PI * 2);
      ctx.fill();

      // Blob 3: Ice Azure & Diagnostic Cyan Pulse (Center-Bottom)
      const blob3X = width * 0.5 + Math.sin(clock * 0.8) * 140;
      const blob3Y = height * 0.75 + Math.cos(clock * 0.6) * 70;
      const g3 = ctx.createRadialGradient(blob3X, blob3Y, 10, blob3X, blob3Y, width * 0.38);
      g3.addColorStop(0, 'rgba(14, 165, 233, 0.13)');
      g3.addColorStop(0.5, 'rgba(56, 189, 248, 0.06)');
      g3.addColorStop(1, 'rgba(255, 255, 255, 0)');
      ctx.fillStyle = g3;
      ctx.beginPath();
      ctx.arc(blob3X, blob3Y, width * 0.38, 0, Math.PI * 2);
      ctx.fill();

      // Blob 4: Subtle Cardiac Pulse Red / Coral Glow (Bottom Left)
      const blob4X = width * 0.15 + Math.cos(clock * 0.4) * 80;
      const blob4Y = height * 0.85 + Math.sin(clock * 0.5) * 60;
      const g4 = ctx.createRadialGradient(blob4X, blob4Y, 10, blob4X, blob4Y, width * 0.28);
      g4.addColorStop(0, 'rgba(225, 29, 72, 0.09)');
      g4.addColorStop(1, 'rgba(255, 255, 255, 0)');
      ctx.fillStyle = g4;
      ctx.beginPath();
      ctx.arc(blob4X, blob4Y, width * 0.28, 0, Math.PI * 2);
      ctx.fill();

      // --- 3. PRISMATIC SURGICAL CAUSTICS ---
      ctx.save();
      ctx.translate(parallaxX * 0.4, 0);
      for (let i = 0; i < 5; i++) {
        const rayGrad = ctx.createLinearGradient(width * 0.75 + i * 80, 0, width * 0.2 + i * 70, height);
        rayGrad.addColorStop(0, 'rgba(255, 255, 255, 0.45)');
        rayGrad.addColorStop(0.35, i % 2 === 0 ? 'rgba(2, 132, 199, 0.10)' : 'rgba(14, 165, 233, 0.08)');
        rayGrad.addColorStop(0.7, 'rgba(30, 64, 175, 0.06)');
        rayGrad.addColorStop(1, 'rgba(255, 255, 255, 0)');

        ctx.fillStyle = rayGrad;
        ctx.beginPath();
        ctx.moveTo(width * 0.65 + i * 95, 0);
        ctx.lineTo(width * 0.76 + i * 95, 0);
        ctx.lineTo(width * 0.42 + i * 95, height);
        ctx.lineTo(width * 0.28 + i * 95, height);
        ctx.closePath();
        ctx.fill();
      }
      ctx.restore();

      // --- 4. RHYTHMIC HARMONIC CARDIAC WAVES ---
      const waveY = height * 0.65;
      for (let w = 0; w < 3; w++) {
        ctx.beginPath();
        const strokeGrad = ctx.createLinearGradient(0, 0, width, 0);
        strokeGrad.addColorStop(0, 'rgba(2, 132, 199, 0)');
        strokeGrad.addColorStop(0.35, w === 0 ? 'rgba(2, 132, 199, 0.40)' : 'rgba(14, 165, 233, 0.28)');
        strokeGrad.addColorStop(0.7, 'rgba(37, 99, 235, 0.32)');
        strokeGrad.addColorStop(1, 'rgba(225, 29, 72, 0)');
        ctx.strokeStyle = strokeGrad;
        ctx.lineWidth = 2.0 - w * 0.5;

        for (let x = 0; x <= width; x += 15) {
          const freq = 0.003 + w * 0.001;
          const amp = 28 + w * 14;
          const y = waveY + Math.sin(x * freq + clock * (1.2 + w * 0.3)) * amp 
                          + Math.cos(x * 0.006 + clock * 0.8) * 12;
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
      }

      // --- 5. FLOATING BIOPHOTONIC ENERGY MOTES ---
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.phase += p.pulseSpeed;

        if (p.y < -10) {
          p.y = height + 10;
          p.x = Math.random() * width;
        }
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;

        const currentAlpha = p.alpha * (0.6 + Math.sin(p.phase) * 0.4);
        ctx.fillStyle = `${p.colorBase}${currentAlpha})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      });
    };

    render();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.95 }}
    />
  );
}
