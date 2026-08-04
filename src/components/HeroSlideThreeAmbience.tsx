"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

/** Hands / AI emblem sweet spot in the slide-3 portrait */
const AI_TOP = "62%";
const AI_LEFT = "48%";

interface Particle {
  x: number;
  y: number;
  size: number;
  speedY: number;
  speedX: number;
  opacity: number;
  hue: number;
  twinkle: number;
  /** Bias particles toward the AI core */
  orbit?: boolean;
  angle?: number;
  radius?: number;
  orbitSpeed?: number;
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

      const w = window.innerWidth;
      const h = window.innerHeight;
      const cx = w * 0.48;
      const cy = h * 0.62;

      const fieldCount = Math.min(
        Math.floor((w * h) / 14000),
        70
      );

      const field: Particle[] = Array.from({ length: fieldCount }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        size: Math.random() * 1.6 + 0.35,
        speedY: Math.random() * 0.22 + 0.05,
        speedX: (Math.random() - 0.5) * 0.18,
        opacity: Math.random() * 0.35 + 0.08,
        hue: Math.random() > 0.5 ? 270 : 210,
        twinkle: Math.random() * Math.PI * 2,
      }));

      const core: Particle[] = Array.from({ length: 28 }, () => {
        const angle = Math.random() * Math.PI * 2;
        const radius = 18 + Math.random() * 72;
        return {
          x: cx + Math.cos(angle) * radius,
          y: cy + Math.sin(angle) * radius,
          size: Math.random() * 1.8 + 0.6,
          speedY: 0,
          speedX: 0,
          opacity: Math.random() * 0.55 + 0.35,
          hue: Math.random() > 0.45 ? 265 : 205,
          twinkle: Math.random() * Math.PI * 2,
          orbit: true,
          angle,
          radius,
          orbitSpeed: (Math.random() * 0.008 + 0.003) * (Math.random() > 0.5 ? 1 : -1),
        };
      });

      particles = [...field, ...core];
    };

    const draw = () => {
      frame += 1;
      const w = window.innerWidth;
      const h = window.innerHeight;
      const cx = w * 0.48;
      const cy = h * 0.62;

      ctx.clearRect(0, 0, w, h);

      for (const p of particles) {
        if (p.orbit && p.angle != null && p.radius != null && p.orbitSpeed != null) {
          p.angle += p.orbitSpeed;
          p.x = cx + Math.cos(p.angle) * p.radius;
          p.y = cy + Math.sin(p.angle) * p.radius * 0.72;
          p.twinkle += 0.05;
        } else {
          p.y -= p.speedY;
          p.x += p.speedX;
          p.twinkle += 0.025;

          if (p.y < -8) {
            p.y = h + 8;
            p.x = Math.random() * w;
          }
          if (p.x < -8) p.x = w + 8;
          if (p.x > w + 8) p.x = -8;
        }

        const flicker = 0.5 + Math.sin(p.twinkle + frame * 0.02) * 0.5;
        const alpha = p.opacity * flicker;

        ctx.beginPath();
        ctx.fillStyle = `hsla(${p.hue}, 90%, 70%, ${alpha})`;
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();

        if (p.orbit) {
          ctx.beginPath();
          ctx.fillStyle = `hsla(${p.hue}, 95%, 78%, ${alpha * 0.35})`;
          ctx.arc(p.x, p.y, p.size * 2.4, 0, Math.PI * 2);
          ctx.fill();
        }
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
      {/* Soft page wash — kept quiet so the AI core reads first */}
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_48%_62%,rgba(139,92,246,0.05)_0%,transparent_40%)]"
        aria-hidden
      />

      {/* Primary AI bloom — locked to hands / AI badge */}
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.78, 0.5] }}
        transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
        style={{ top: AI_TOP, left: AI_LEFT }}
        className="absolute h-[min(26vw,200px)] w-[min(26vw,200px)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(167,139,250,0.5)_0%,rgba(59,130,246,0.22)_40%,transparent_70%)] blur-2xl"
        aria-hidden
      />

      {/* Crisp inner core glow — no hard ring/outline */}
      <motion.div
        animate={{ scale: [0.94, 1.06, 0.94], opacity: [0.65, 1, 0.65] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
        style={{ top: AI_TOP, left: AI_LEFT }}
        className="absolute h-[min(11vw,88px)] w-[min(11vw,88px)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.5)_0%,rgba(196,181,253,0.4)_40%,rgba(59,130,246,0.15)_65%,transparent_80%)] blur-[3px]"
        aria-hidden
      />

      <ParticleCanvas />

      {/* Tiny spark flares around the AI core */}
      {[
        { dx: "-3.5%", dy: "-4%", delay: 0, size: "h-1.5 w-1.5" },
        { dx: "4%", dy: "-2.5%", delay: 0.9, size: "h-1 w-1" },
        { dx: "-2%", dy: "3.5%", delay: 1.6, size: "h-1 w-1" },
        { dx: "3%", dy: "3%", delay: 2.2, size: "h-1.5 w-1.5" },
      ].map((spark, i) => (
        <motion.div
          key={i}
          animate={{ opacity: [0.15, 0.85, 0.15], scale: [0.7, 1.1, 0.7] }}
          transition={{
            duration: 2.8 + i * 0.35,
            repeat: Infinity,
            ease: "easeInOut",
            delay: spark.delay,
          }}
          style={{
            top: `calc(${AI_TOP} + ${spark.dy})`,
            left: `calc(${AI_LEFT} + ${spark.dx})`,
          }}
          className={`absolute ${spark.size} -translate-x-1/2 -translate-y-1/2 rounded-full bg-white shadow-[0_0_10px_rgba(196,181,253,0.9)]`}
          aria-hidden
        />
      ))}
    </div>
  );
}
