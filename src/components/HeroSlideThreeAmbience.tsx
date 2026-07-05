"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  size: number;
  speedY: number;
  speedX: number;
  opacity: number;
  hue: number;
  twinkle: number;
}

function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let frame = 0;
    let particles: Particle[] = [];
    let raf = 0;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio, 2);
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = Math.floor((window.innerWidth * window.innerHeight) / 9000);
      particles = Array.from({ length: Math.min(count, 140) }, () => ({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 2.2 + 0.4,
        speedY: Math.random() * 0.35 + 0.08,
        speedX: (Math.random() - 0.5) * 0.25,
        opacity: Math.random() * 0.55 + 0.15,
        hue: Math.random() > 0.5 ? 270 : 210,
        twinkle: Math.random() * Math.PI * 2,
      }));
    };

    const draw = () => {
      frame += 1;
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

      for (const p of particles) {
        p.y -= p.speedY;
        p.x += p.speedX;
        p.twinkle += 0.03;

        if (p.y < -8) {
          p.y = window.innerHeight + 8;
          p.x = Math.random() * window.innerWidth;
        }
        if (p.x < -8) p.x = window.innerWidth + 8;
        if (p.x > window.innerWidth + 8) p.x = -8;

        const flicker = 0.45 + Math.sin(p.twinkle + frame * 0.02) * 0.55;
        ctx.beginPath();
        ctx.fillStyle = `hsla(${p.hue}, 85%, 68%, ${p.opacity * flicker})`;
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      }

      raf = requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 h-full w-full"
      aria-hidden
    />
  );
}

export default function HeroSlideThreeAmbience() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div
        className="absolute left-1/2 top-[44%] h-[min(92vw,720px)] w-[min(92vw,720px)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(139,92,246,0.22)_0%,rgba(59,130,246,0.1)_38%,transparent_68%)]"
        aria-hidden
      />

      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 48, repeat: Infinity, ease: "linear" }}
        className="absolute left-1/2 top-[44%] h-[min(110vw,860px)] w-[min(110vw,860px)] -translate-x-1/2 -translate-y-1/2 opacity-[0.28]"
        aria-hidden
      >
        <div className="h-full w-full bg-[conic-gradient(from_0deg,transparent_0deg,rgba(139,92,246,0.18)_32deg,transparent_64deg,rgba(59,130,246,0.12)_120deg,transparent_160deg,rgba(168,85,247,0.14)_220deg,transparent_260deg,rgba(96,165,250,0.1)_300deg,transparent_360deg)]" />
      </motion.div>

      <motion.div
        animate={{ scale: [1, 1.08, 1], opacity: [0.35, 0.55, 0.35] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-1/2 top-[44%] h-[min(52vw,420px)] w-[min(52vw,420px)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(167,139,250,0.35)_0%,transparent_70%)] blur-2xl"
        aria-hidden
      />

      <ParticleCanvas />

      {[
        { top: "18%", left: "58%", delay: 0 },
        { top: "62%", left: "42%", delay: 1.2 },
        { top: "34%", left: "68%", delay: 2.1 },
      ].map((orb, i) => (
        <motion.div
          key={i}
          animate={{ y: [0, -14, 0], opacity: [0.25, 0.55, 0.25] }}
          transition={{
            duration: 4.5 + i,
            repeat: Infinity,
            ease: "easeInOut",
            delay: orb.delay,
          }}
          style={{ top: orb.top, left: orb.left }}
          className="absolute h-2 w-2 rounded-full bg-violet-400 blur-[1px] shadow-[0_0_18px_rgba(167,139,250,0.9)]"
          aria-hidden
        />
      ))}
    </div>
  );
}
