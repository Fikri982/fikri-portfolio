"use client";

import { useState, useEffect, useRef, useMemo } from "react";
import { motion } from "framer-motion";
import { FH_POINTS, dft2D } from "./fourierDft";

export default function FourierTab() {
  const [harmonicsCount, setHarmonicsCount] = useState(25);
  const [speedMultiplier, setSpeedMultiplier] = useState(1);
  const fourierCanvasRef = useRef<HTMLCanvasElement>(null);
  
  // Prefetch DFT calculations
  const epicycles = useMemo(() => dft2D(FH_POINTS), []);
  const fourierTraceRef = useRef<{ x: number; y: number }[]>([]);
  const fourierTimeRef = useRef(0);

  useEffect(() => {
    const canvas = fourierCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;

    const render = () => {
      // Clear with small opacity for traces trails effect
      ctx.fillStyle = "rgba(10, 10, 12, 0.25)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.save();
      // Translate to place the model centered
      ctx.translate(canvas.width / 2 - 95, canvas.height / 2 - 90);

      // Draw original sketch shape in faint background
      ctx.beginPath();
      FH_POINTS.forEach((pt, i) => {
        if (i === 0) ctx.moveTo(pt.x, pt.y);
        else ctx.lineTo(pt.x, pt.y);
      });
      ctx.strokeStyle = "rgba(255, 255, 255, 0.03)";
      ctx.lineWidth = 1;
      ctx.stroke();

      // Chain of epicycles calculation
      let x = 0;
      let y = 0;

      const limit = Math.min(harmonicsCount, epicycles.length);
      for (let i = 0; i < limit; i++) {
        const epi = epicycles[i];
        const prevX = x;
        const prevY = y;

        const theta = epi.freq * fourierTimeRef.current + epi.phase;
        x += epi.amp * Math.cos(theta);
        y += epi.amp * Math.sin(theta);

        // Draw circle
        ctx.beginPath();
        ctx.arc(prevX, prevY, epi.amp, 0, Math.PI * 2);
        ctx.strokeStyle = i === 0 ? "rgba(59, 130, 246, 0.15)" : "rgba(59, 130, 246, 0.04)";
        ctx.lineWidth = 1;
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(prevX, prevY);
        ctx.lineTo(x, y);
        ctx.strokeStyle = "rgba(59, 130, 246, 0.3)";
        ctx.stroke();
      }

      // Add endpoint to trace buffer
      fourierTraceRef.current.push({ x, y });
      if (fourierTraceRef.current.length > 500) {
        fourierTraceRef.current.shift();
      }

      // Draw traced path in bright neon green glow
      ctx.beginPath();
      fourierTraceRef.current.forEach((pt, idx) => {
        if (idx === 0) ctx.moveTo(pt.x, pt.y);
        else ctx.lineTo(pt.x, pt.y);
      });
      ctx.strokeStyle = "#3b82f6";
      ctx.lineWidth = 2.5;
      ctx.shadowBlur = 8;
      ctx.shadowColor = "rgba(59, 130, 246, 0.5)";
      ctx.stroke();
      ctx.shadowBlur = 0; // reset

      // Draw vector cursor head
      ctx.beginPath();
      ctx.arc(x, y, 4, 0, Math.PI * 2);
      ctx.fillStyle = "#ffffff";
      ctx.fill();

      ctx.restore();

      // Progress time
      const dt = (Math.PI * 2) / epicycles.length;
      fourierTimeRef.current += dt * 0.45 * speedMultiplier;

      animId = requestAnimationFrame(render);
    };

    render();

    return () => cancelAnimationFrame(animId);
  }, [harmonicsCount, speedMultiplier, epicycles]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start w-full">
      {/* Control panel */}
      <motion.div
        className="lg:col-span-5 space-y-6"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
      >
        <div className="glass-card rounded-3xl p-6 md:p-8 border-glow border-glow-hover space-y-6">
          <h3 className="text-sm font-mono text-accent font-bold uppercase tracking-wider">
            Tracer Parameters
          </h3>

          {/* Slider 1: Harmonics */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs font-mono">
              <span className="text-text-secondary">Circles (Harmonics):</span>
              <span className="text-accent font-bold">{harmonicsCount}</span>
            </div>
            <input
              type="range"
              min="1"
              max={FH_POINTS.length}
              value={harmonicsCount}
              onChange={(e) => {
                fourierTraceRef.current = []; // Reset trace
                setHarmonicsCount(Number(e.target.value));
              }}
              className="w-full h-1.5 rounded-lg bg-surface appearance-none cursor-pointer accent-accent"
            />
            <p className="text-[10px] text-text-muted leading-relaxed">
              Increasing the number of epicycle circles approximates the target path with higher Fourier mathematical detail.
            </p>
          </div>

          {/* Slider 2: Speed */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs font-mono">
              <span className="text-text-secondary">Orbit Speed multiplier:</span>
              <span className="text-accent font-bold">{speedMultiplier}x</span>
            </div>
            <input
              type="range"
              min="0.2"
              max="2.5"
              step="0.1"
              value={speedMultiplier}
              onChange={(e) => setSpeedMultiplier(Number(e.target.value))}
              className="w-full h-1.5 rounded-lg bg-surface appearance-none cursor-pointer accent-accent"
            />
          </div>
        </div>

        {/* Math Theory info card */}
        <div className="glass-card rounded-2xl p-6 border-glow border-glow-hover space-y-4 text-xs leading-relaxed text-text-secondary">
          <h4 className="font-mono text-text-primary font-bold uppercase">The Math Behind It</h4>
          <p>
            Setiap titik koordinat 2D pada inisial <strong>&quot;FH&quot;</strong> diperlakukan sebagai angka kompleks $x_n + i y_n$. Kita menerapkan <strong>Discrete Fourier Transform (DFT)</strong> untuk mengubah himpunan koordinat spasial tersebut menjadi representasi frekuensi:
          </p>
          <code className="block bg-surface p-3 rounded-lg font-mono text-[10px] text-accent text-center">
            X_k = ∑ [ x_n * e^(-i * 2π * k * n / N) ]
          </code>
          <p>
            Dari hasil transformasi ini, kita mendapatkan <strong>amplitudo</strong> (jari-jari lingkaran) dan <strong>fase</strong> (sudut awal) untuk setiap harmonik $k$. Menggabungkan lingkaran-lingkaran ini melahirkan visualisasi deret Fourier penelusur kurva.
          </p>
        </div>
      </motion.div>

      {/* Live Canvas Screen */}
      <div className="lg:col-span-7 flex flex-col items-center">
        <div className="relative w-full aspect-square md:h-112.5 md:w-112.5 rounded-3xl overflow-hidden border border-border/15 bg-background-card/40 backdrop-blur-md shadow-2xl flex items-center justify-center p-2">
          <div className="absolute inset-0 bg-radial-to-br from-accent/2 to-transparent pointer-events-none" />
          <canvas
            ref={fourierCanvasRef}
            width={450}
            height={450}
            className="w-full h-full object-contain rounded-2xl"
          />
        </div>
        <button
          onClick={() => {
            fourierTraceRef.current = [];
            fourierTimeRef.current = 0;
          }}
          className="mt-6 px-6 py-2.5 rounded-xl border border-border text-xs font-mono font-bold text-text-secondary hover:text-accent hover:border-accent/40 transition-colors cursor-pointer"
        >
          Clear & Reset Draw Trace
        </button>
      </div>
    </div>
  );
}
