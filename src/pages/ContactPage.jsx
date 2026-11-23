import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Phone, MapPin, Clock, Navigation, Mail, Sparkles, Play, Stethoscope } from 'lucide-react';
import AppointmentExperienceSection from '../components/AppointmentExperienceSection';
import { PULSE_DATA } from '../data/pulseData';
import SectionCinematicVideo from '../components/SectionCinematicVideo';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] },
});

/* ─── Animated Map Canvas ─────────────────────────────────────────── */
function MapPulseCanvas() {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let frame;
    let t = 0;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    /* grid points that form a soft city-map lattice */
    const gridCols = 10;
    const gridRows = 7;
    const nodes = [];
    for (let r = 0; r < gridRows; r++) {
      for (let c = 0; c < gridCols; c++) {
        nodes.push({
          x: (c / (gridCols - 1)) * 100,   // % of width
          y: (r / (gridRows - 1)) * 100,   // % of height
          pulse: Math.random() * Math.PI * 2,
        });
      }
    }

    /* the "Gorakhpur" centre node */
    const centre = { x: 52, y: 46 };

    const draw = () => {
      const W = canvas.width;
      const H = canvas.height;
      ctx.clearRect(0, 0, W, H);
      t += 0.012;

      /* ─ grid lines ─ */
      ctx.strokeStyle = 'rgba(5,150,105,0.12)';
      ctx.lineWidth = 1;
      nodes.forEach((n, i) => {
        const nx = (n.x / 100) * W;
        const ny = (n.y / 100) * H;
        if ((i + 1) % gridCols !== 0) {
          const right = nodes[i + 1];
          if (right) {
            ctx.beginPath();
            ctx.moveTo(nx, ny);
            ctx.lineTo((right.x / 100) * W, (right.y / 100) * H);
            ctx.stroke();
          }
        }
        if (i + gridCols < nodes.length) {
          const below = nodes[i + gridCols];
          ctx.beginPath();
          ctx.moveTo(nx, ny);
          ctx.lineTo((below.x / 100) * W, (below.y / 100) * H);
          ctx.stroke();
        }
      });

      /* ─ connection lines to centre ─ */
      const cx = (centre.x / 100) * W;
      const cy = (centre.y / 100) * H;
      nodes.forEach((n) => {
        const nx = (n.x / 100) * W;
        const ny = (n.y / 100) * H;
        const dist = Math.hypot(nx - cx, ny - cy);
        if (dist < W * 0.4) {
          const alpha = (1 - dist / (W * 0.4)) * 0.18 * (0.6 + 0.4 * Math.sin(t + n.pulse));
          ctx.strokeStyle = `rgba(5,150,105,${alpha})`;
          ctx.lineWidth = 0.8;
          ctx.setLineDash([4, 8]);
          ctx.beginPath();
          ctx.moveTo(nx, ny);
          ctx.lineTo(cx, cy);
          ctx.stroke();
          ctx.setLineDash([]);
        }
      });

      /* ─ node dots ─ */
      nodes.forEach((n) => {
        const nx = (n.x / 100) * W;
        const ny = (n.y / 100) * H;
        const r = 1.8 + 0.6 * Math.sin(t * 0.7 + n.pulse);
        ctx.beginPath();
        ctx.arc(nx, ny, r, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(5,150,105,0.25)';
        ctx.fill();
      });

      /* ─ pulse rings at centre ─ */
      for (let i = 0; i < 4; i++) {
        const phase = (t * 0.6 + i * 0.8) % (Math.PI * 2);
        const progress = (Math.sin(phase) + 1) / 2;
        const radius = 20 + progress * 90;
        const alpha = (1 - progress) * 0.5;
        ctx.beginPath();
        ctx.arc(cx, cy, radius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(5,150,105,${alpha})`;
        ctx.lineWidth = 1.5;
        ctx.stroke();
      }

      /* ─ centre dot (location pin) ─ */
      ctx.beginPath();
      ctx.arc(cx, cy, 6, 0, Math.PI * 2);
      ctx.fillStyle = '#047857';
      ctx.fill();
      ctx.beginPath();
      ctx.arc(cx, cy, 3, 0, Math.PI * 2);
      ctx.fillStyle = '#fff';
      ctx.fill();

      frame = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ opacity: 0.9 }}
    />
  );
}

export default function ContactPage() {
  const { clinic, doctor } = PULSE_DATA;

  const infoCards = [
    {
      icon: Navigation,
      color: 'bg-[#F0FDF4] text-[#064E3B]',
      title: 'How to Reach Us',
      text: 'Located in the central Betiahata medical hub, 10 minutes from Gorakhpur Railway Station and Golghar commercial centre.',
    },
    {
      icon: Clock,
      color: 'bg-[#F0FDF4] text-[#047857]',
      title: 'Arrival & Token Protocol',
      text: 'Please arrive 15 minutes prior to your scheduled slot. Bring prior ECGs, echocardiography reports, and angiogram CDs.',
    },
    {
      icon: Phone,
      color: 'bg-rose-50 text-rose-700',
      title: 'Emergency Cardiac Triage',
      text: 'Patients presenting with acute crushing chest pain, diaphoresis, or sudden syncope are granted immediate priority triage.',
    },
  ];

  return (
    <div className="relative select-none bg-[#FAFBF9] overflow-hidden">

      {/* ===================================================================
          HERO SECTION — Map Pulse Canvas + Luminous Clinical Medical Theme
         =================================================================== */}
      <div className="relative min-h-[72vh] flex flex-col justify-center items-center pt-28 pb-20 overflow-hidden bg-gradient-to-b from-[#F0FDF4] via-[#FAFBF9] to-[#FAFBF9]">

        {/* Full-bleed animated map canvas with ambient cinematic video */}
        <div className="absolute inset-0">
          {/* Ambient Video Background Layer */}
          <div className="absolute inset-0 z-0 overflow-hidden opacity-20 mix-blend-multiply pointer-events-none">
            <video
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              className="w-full h-full object-cover scale-105"
            >
              <source src="/videos/contact-location.mp4" type="video/mp4" />
            </video>
          </div>
          <MapPulseCanvas />
          {/* Soft luminous radial gradient */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_80%_at_50%_50%,rgba(16,185,129,0.06),transparent_80%)] pointer-events-none" />
          {/* Top/bottom soft fades */}
          <div className="absolute top-0 left-0 right-0 h-28 bg-gradient-to-b from-[#F0FDF4]/80 to-transparent pointer-events-none" />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#FAFBF9] to-transparent pointer-events-none" />
        </div>

        {/* Floating medical crosses on luminous bg */}
        <svg className="absolute top-20 left-16 w-14 h-14 opacity-25 animate-medical-cross-1" viewBox="0 0 60 60" fill="none">
          <rect x="24" y="4" width="12" height="52" rx="3" fill="#047857" />
          <rect x="4" y="24" width="52" height="12" rx="3" fill="#047857" />
        </svg>
        <svg className="absolute top-32 right-20 w-10 h-10 opacity-20 animate-medical-cross-2" viewBox="0 0 60 60" fill="none">
          <rect x="24" y="4" width="12" height="52" rx="3" fill="#D97706" />
          <rect x="4" y="24" width="52" height="12" rx="3" fill="#D97706" />
        </svg>
        <svg className="absolute bottom-40 left-1/4 w-8 h-8 opacity-25 animate-medical-cross-1" viewBox="0 0 60 60" fill="none" style={{ animationDelay: '2s' }}>
          <rect x="24" y="4" width="12" height="52" rx="3" fill="#059669" />
          <rect x="4" y="24" width="52" height="12" rx="3" fill="#059669" />
        </svg>

        {/* Rotating rings overlay */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] pointer-events-none hidden lg:block">
          <div className="absolute inset-0 rounded-full border border-[#059669]/15 animate-gentle-cw" />
          <div className="absolute inset-10 rounded-full border border-dashed border-[#059669]/20 animate-gentle-ccw" />
          <div className="absolute inset-24 rounded-full border border-[#064E3B]/15" />
        </div>

        {/* Hero text — crisp high-contrast emerald & white */}
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 space-y-5">

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#064E3B] via-[#047857] to-[#047857] text-white text-xs font-mono font-medium shadow-md shadow-[#064E3B]/20"
          >
            <Sparkles className="w-4 h-4 text-amber-300" />
            <span className="uppercase tracking-[0.2em]">Priority Appointments &amp; Triage • Gorakhpur</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.95, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-[#064E3B] tracking-tight leading-[1.05]"
          >
            Book Consultation with <br />
            <span className="font-serif italic font-normal text-[#047857]">Dr. Prakash Chand Shahi</span>
          </motion.h1>

          {/* Doctor Spotlight Pill with Stethoscope Crest */}
          <div className="flex items-center justify-center gap-3 pt-1">
            <div className="flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-white/95 backdrop-blur-md border-2 border-[#A7F3D0] text-slate-900 text-xs shadow-md">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#064E3B] via-[#047857] to-[#047857] border-2 border-[#A7F3D0] flex items-center justify-center text-[#A7F3D0] shrink-0">
                <Stethoscope className="w-6 h-6 stroke-[1.8]" />
              </div>
              <div className="text-left">
                <span className="font-extrabold text-[#064E3B] text-sm block">Dr. Prakash Chand Shahi</span>
                <span className="text-[11px] text-[#047857] font-mono font-bold">DM Cardiology (PGIMER) • OPD Mon–Sat (10 AM – 8 PM)</span>
              </div>
            </div>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-base sm:text-lg text-slate-700 font-semibold max-w-2xl mx-auto leading-relaxed"
          >
            Direct consultation at <strong className="text-[#064E3B]">Pulse Heart Centre, Betiahata, Gorakhpur</strong>.
          </motion.p>

          {/* Contact Chips */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.32, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap items-center justify-center gap-3 pt-2"
          >
            <a
              href="tel:+919876543210"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#064E3B] via-[#047857] to-[#047857] hover:from-[#022C22] hover:to-[#064E3B] text-white text-xs font-bold shadow-md shadow-[#064E3B]/20 transition-all duration-300 hover:scale-105"
            >
              <Phone className="w-3.5 h-3.5 text-amber-300" />
              <span>OPD Helpline: +91 98765 43210</span>
            </a>

            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border-2 border-[#A7F3D0] text-xs font-bold text-[#064E3B] shadow-xs">
              <Clock className="w-3.5 h-3.5 text-[#047857]" />
              <span>Mon – Sat: 10:00 AM – 8:00 PM</span>
            </div>

            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border-2 border-[#A7F3D0] text-xs font-bold text-[#064E3B] shadow-xs">
              <MapPin className="w-3.5 h-3.5 text-rose-500" />
              <span>Betiahata, Gorakhpur, UP 273001</span>
            </div>
          </motion.div>

          {/* Architectural Campus & Location Video Console */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.95, delay: 0.4 }}
            className="pt-6 max-w-4xl mx-auto w-full"
          >
            <SectionCinematicVideo
              type="contact-location"
              videoUrl="/videos/contact-location.mp4"
              styleVariant="panoramic-stage"
              posterImage="/images/hospital-facility.jpg"
              title="Pulse Heart Centre Betiahata Campus"
              subtitle="GPS Navigation • 26.7606° N, 83.3732° E"
              specs="Centrally Located in Gorakhpur • 10 Min from Railway Station"
              aspectRatio="aspect-[16/8] sm:aspect-[21/9]"
            />
          </motion.div>
        </div>
      </div>

      {/* ===================================================================
          APPOINTMENT SECTION
         =================================================================== */}
      <div className="relative bg-[#FAFBF9]">
        {/* Subtle pattern */}
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(#04785708_1.5px,transparent_1.5px)] bg-[size:30px_30px]" />
        <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(to_right,#064E3B06_1px,transparent_1px),linear-gradient(to_bottom,#064E3B06_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        {/* Ambient orbs */}
        <div className="absolute -top-24 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-[#059669]/12 to-transparent rounded-full blur-[130px] pointer-events-none animate-orb-1" />
        <div className="absolute top-1/2 -left-24 w-[400px] h-[400px] bg-gradient-to-tr from-[#064E3B]/10 to-transparent rounded-full blur-[120px] pointer-events-none animate-orb-2" />
        <div className="relative z-10">
          <AppointmentExperienceSection />
        </div>
      </div>

      {/* ===================================================================
          INFO CARDS + BOTTOM SECTION WITH AMBIENT VIDEO
         =================================================================== */}
      <div className="relative pb-24 bg-[#FAFBF9] overflow-hidden">

        {/* Ambient Video Background Layer */}
        <div className="absolute inset-0 z-0 overflow-hidden opacity-20 mix-blend-multiply pointer-events-none">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            className="w-full h-full object-cover scale-105"
          >
            <source src="/videos/contact-location.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-[#FAFBF9]/80 via-transparent to-[#FAFBF9]/90" />
        </div>

        {/* Animated emerald wave separator */}
        <div className="relative h-20 overflow-hidden mb-4">
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1440 80" fill="none" preserveAspectRatio="none">
            <path
              d="M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,80 L0,80 Z"
              fill="#047857" fillOpacity="0.18"
              className="animate-wave-flow"
            />
            <path
              d="M0,55 C200,20 500,70 800,45 C1100,20 1300,60 1440,50 L1440,80 L0,80 Z"
              fill="#D97706" fillOpacity="0.12"
              className="animate-wave-flow"
              style={{ animationDelay: '1.5s' }}
            />
          </svg>
        </div>

        {/* Animated SVG medical pattern lines */}
        <svg className="absolute inset-0 w-full h-full opacity-45 pointer-events-none" viewBox="0 0 1440 600" fill="none" preserveAspectRatio="none">
          <path d="M0,100 Q360,50 720,100 Q1080,150 1440,100" stroke="#047857" strokeWidth="2" strokeDasharray="8 6" className="animate-contact-dash" />
          <path d="M0,400 Q300,350 600,400 Q900,450 1440,380" stroke="#D97706" strokeWidth="2" strokeDasharray="6 8" className="animate-contact-dash" style={{ animationDelay: '2s' }} />
          {/* Medical cross watermarks */}
          <line x1="100" y1="200" x2="100" y2="260" stroke="#047857" strokeWidth="2" opacity="0.8" />
          <line x1="70" y1="230" x2="130" y2="230" stroke="#047857" strokeWidth="2" opacity="0.8" />
          <line x1="1340" y1="350" x2="1340" y2="410" stroke="#D97706" strokeWidth="2" opacity="0.8" />
          <line x1="1310" y1="380" x2="1370" y2="380" stroke="#D97706" strokeWidth="2" opacity="0.8" />
        </svg>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="p-8 sm:p-10 rounded-[2.5rem] bg-white/90 backdrop-blur-md border-2 border-[#A7F3D0]/60 shadow-2xl grid grid-cols-1 md:grid-cols-3 gap-6 text-left relative overflow-hidden"
          >
            {/* Inner animated background */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(5,150,105,0.04),transparent)] pointer-events-none" />
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#064E3B] via-[#047857] to-[#D97706]" />

            {infoCards.map((card, idx) => (
              <motion.div
                key={idx}
                {...fadeUp(idx * 0.12)}
                className="relative space-y-3"
              >
                <div className={`p-2.5 rounded-xl ${card.color} w-fit`}>
                  <card.icon className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-[#064E3B]">{card.title}</h4>
                <p className="text-xs text-slate-600 font-medium leading-relaxed">{card.text}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Bottom floating badge */}
          <motion.div
            {...fadeUp(0.3)}
            className="mt-10 text-center"
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-[#064E3B] to-[#047857] text-white text-xs font-semibold shadow-lg shadow-[#047857]/30">
              <div className="w-2 h-2 rounded-full bg-[#34D399] animate-pulse" />
              <span>Pulse Heart Centre • Betiahata, Gorakhpur — Open Mon–Sat, 10 AM – 8 PM</span>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
