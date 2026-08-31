"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { MATRIX_SHAPE } from "./fourierDft";

export default function MatrixTab() {
  const [matrix, setMatrix] = useState({ a: 1.0, b: 0.0, c: 0.0, d: 1.0 });
  const matrixCanvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = matrixCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Clear background
    ctx.fillStyle = "#0a0a0c";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.save();
    // Translate origin to canvas center
    ctx.translate(canvas.width / 2, canvas.height / 2);

    // Draw coordinate grids
    ctx.beginPath();
    for (let i = -canvas.width / 2; i <= canvas.width / 2; i += 25) {
      // Verticals
      ctx.moveTo(i, -canvas.height / 2);
      ctx.lineTo(i, canvas.height / 2);
      // Horizontals
      ctx.moveTo(-canvas.width / 2, i);
      ctx.lineTo(canvas.width / 2, i);
    }
    ctx.strokeStyle = "rgba(255, 255, 255, 0.02)";
    ctx.lineWidth = 0.5;
    ctx.stroke();

    // Draw X and Y Axes
    ctx.beginPath();
    ctx.moveTo(-canvas.width / 2, 0);
    ctx.lineTo(canvas.width / 2, 0);
    ctx.moveTo(0, -canvas.height / 2);
    ctx.lineTo(0, canvas.height / 2);
    ctx.strokeStyle = "rgba(59, 130, 246, 0.2)";
    ctx.lineWidth = 1;
    ctx.stroke();

    // Draw Original Shape in faint outline
    ctx.beginPath();
    MATRIX_SHAPE.forEach((pt, i) => {
      if (i === 0) ctx.moveTo(pt.x, pt.y);
      else ctx.lineTo(pt.x, pt.y);
    });
    ctx.closePath();
    ctx.strokeStyle = "rgba(255, 255, 255, 0.15)";
    ctx.setLineDash([4, 4]);
    ctx.lineWidth = 1.5;
    ctx.stroke();
    ctx.setLineDash([]); // reset

    // Compute transformed shape coordinates
    const transformed = MATRIX_SHAPE.map((pt) => ({
      x: matrix.a * pt.x + matrix.b * pt.y,
      y: matrix.c * pt.x + matrix.d * pt.y,
    }));

    // Draw transformed shape
    ctx.beginPath();
    transformed.forEach((pt, i) => {
      if (i === 0) ctx.moveTo(pt.x, pt.y);
      else ctx.lineTo(pt.x, pt.y);
    });
    ctx.closePath();
    ctx.fillStyle = "rgba(59, 130, 246, 0.08)";
    ctx.fill();
    ctx.strokeStyle = "#3b82f6";
    ctx.lineWidth = 2.5;
    ctx.shadowBlur = 10;
    ctx.shadowColor = "rgba(59, 130, 246, 0.4)";
    ctx.stroke();
    ctx.shadowBlur = 0; // reset

    // Draw basis vector: T(i-hat) = [a, c]^T
    const iHatX = matrix.a * 40;
    const iHatY = matrix.c * 40;
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(iHatX, iHatY);
    ctx.strokeStyle = "#ff4a7d"; // Red for i-hat
    ctx.lineWidth = 2.0;
    ctx.stroke();

    // Draw basis vector: T(j-hat) = [b, d]^T
    const jHatX = matrix.b * 40;
    const jHatY = matrix.d * 40;
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(jHatX, jHatY);
    ctx.strokeStyle = "#38bdf8"; // Blue for j-hat
    ctx.lineWidth = 2.0;
    ctx.stroke();

    ctx.restore();
  }, [matrix]);

  // Apply preset coordinates
  const applyPreset = (a: number, b: number, c: number, d: number) => {
    setMatrix({ a, b, c, d });
  };

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
            Transformation Matrix
          </h3>

          {/* 2x2 Matrix Input Grid */}
          <div className="grid grid-cols-2 gap-4 max-w-xs mx-auto p-4 bg-surface rounded-2xl border border-border/10 font-mono">
            <div className="space-y-1">
              <label className="text-[10px] text-text-muted">a (Scale X)</label>
              <input
                type="number"
                step="0.1"
                value={matrix.a.toFixed(1)}
                disabled
                className="w-full bg-background border border-border/20 rounded-lg p-2 text-center text-accent font-bold text-xs"
              />
            </div>
            <div className="space-y-1">
              <label className="text-[10px] text-text-muted">b (Shear X)</label>
              <input
                type="number"
                step="0.1"
                value={matrix.b.toFixed(1)}
                disabled
                className="w-full bg-background border border-border/20 rounded-lg p-2 text-center text-accent font-bold text-xs"
              />
            </div>
            <div className="space-y-1">
              <label className="text-[10px] text-text-muted">c (Shear Y)</label>
              <input
                type="number"
                step="0.1"
                value={matrix.c.toFixed(1)}
                disabled
                className="w-full bg-background border border-border/20 rounded-lg p-2 text-center text-accent font-bold text-xs"
              />
            </div>
            <div className="space-y-1">
              <label className="text-[10px] text-text-muted">d (Scale Y)</label>
              <input
                type="number"
                step="0.1"
                value={matrix.d.toFixed(1)}
                disabled
                className="w-full bg-background border border-border/20 rounded-lg p-2 text-center text-accent font-bold text-xs"
              />
            </div>
          </div>

          {/* Sliders for elements */}
          <div className="space-y-4 pt-2">
            <div className="space-y-1">
              <div className="flex justify-between text-xs font-mono">
                <span className="text-text-secondary">a (Scale X):</span>
                <span className="text-accent font-bold">{matrix.a.toFixed(1)}</span>
              </div>
              <input
                type="range"
                min="-2.0"
                max="2.0"
                step="0.1"
                value={matrix.a}
                onChange={(e) => setMatrix({ ...matrix, a: Number(e.target.value) })}
                className="w-full h-1.5 rounded-lg bg-surface appearance-none cursor-pointer accent-accent"
              />
            </div>

            <div className="space-y-1">
              <div className="flex justify-between text-xs font-mono">
                <span className="text-text-secondary">b (Shear X):</span>
                <span className="text-accent font-bold">{matrix.b.toFixed(1)}</span>
              </div>
              <input
                type="range"
                min="-2.0"
                max="2.0"
                step="0.1"
                value={matrix.b}
                onChange={(e) => setMatrix({ ...matrix, b: Number(e.target.value) })}
                className="w-full h-1.5 rounded-lg bg-surface appearance-none cursor-pointer accent-accent"
              />
            </div>

            <div className="space-y-1">
              <div className="flex justify-between text-xs font-mono">
                <span className="text-text-secondary">c (Shear Y):</span>
                <span className="text-accent font-bold">{matrix.c.toFixed(1)}</span>
              </div>
              <input
                type="range"
                min="-2.0"
                max="2.0"
                step="0.1"
                value={matrix.c}
                onChange={(e) => setMatrix({ ...matrix, c: Number(e.target.value) })}
                className="w-full h-1.5 rounded-lg bg-surface appearance-none cursor-pointer accent-accent"
              />
            </div>

            <div className="space-y-1">
              <div className="flex justify-between text-xs font-mono">
                <span className="text-text-secondary">d (Scale Y):</span>
                <span className="text-accent font-bold">{matrix.d.toFixed(1)}</span>
              </div>
              <input
                type="range"
                min="-2.0"
                max="2.0"
                step="0.1"
                value={matrix.d}
                onChange={(e) => setMatrix({ ...matrix, d: Number(e.target.value) })}
                className="w-full h-1.5 rounded-lg bg-surface appearance-none cursor-pointer accent-accent"
              />
            </div>
          </div>

          {/* Presets Grid */}
          <div className="space-y-2 pt-2">
            <span className="text-[10px] font-mono text-text-muted uppercase tracking-wider block">Transform Presets</span>
            <div className="grid grid-cols-3 gap-2">
              <button
                onClick={() => applyPreset(1, 0, 0, 1)}
                className="px-2 py-1.5 rounded-lg bg-background border border-border/20 text-[10px] font-mono text-text-secondary hover:text-accent hover:border-accent/40 transition-colors cursor-pointer"
              >
                Identity
              </button>
              <button
                onClick={() => applyPreset(1.5, 0, 0, 1.5)}
                className="px-2 py-1.5 rounded-lg bg-background border border-border/20 text-[10px] font-mono text-text-secondary hover:text-accent hover:border-accent/40 transition-colors cursor-pointer"
              >
                Scale 1.5x
              </button>
              <button
                onClick={() => applyPreset(0.7, -0.7, 0.7, 0.7)}
                className="px-2 py-1.5 rounded-lg bg-background border border-border/20 text-[10px] font-mono text-text-secondary hover:text-accent hover:border-accent/40 transition-colors cursor-pointer"
              >
                Rotate 45°
              </button>
              <button
                onClick={() => applyPreset(1, 1.0, 0, 1)}
                className="px-2 py-1.5 rounded-lg bg-background border border-border/20 text-[10px] font-mono text-text-secondary hover:text-accent hover:border-accent/40 transition-colors cursor-pointer"
              >
                Shear X
              </button>
              <button
                onClick={() => applyPreset(-1, 0, 0, 1)}
                className="px-2 py-1.5 rounded-lg bg-background border border-border/20 text-[10px] font-mono text-text-secondary hover:text-accent hover:border-accent/40 transition-colors cursor-pointer"
              >
                Reflect Y
              </button>
              <button
                onClick={() => applyPreset(0.5, 0, 0, 0.5)}
                className="px-2 py-1.5 rounded-lg bg-background border border-border/20 text-[10px] font-mono text-text-secondary hover:text-accent hover:border-accent/40 transition-colors cursor-pointer"
              >
                Shrink
              </button>
            </div>
          </div>

        </div>

        {/* Math Theory info card */}
        <div className="glass-card rounded-2xl p-6 border-glow border-glow-hover space-y-4 text-xs leading-relaxed text-text-secondary">
          <h4 className="font-mono text-text-primary font-bold uppercase">The Math Behind It</h4>
          <p>
            Transformasi linear 2D memetakan setiap vektor koordinat $[x, y]^T$ pada objek menjadi koordinat baru $[x&apos;, y&apos;]^T$ melalui perkalian matriks:
          </p>
          <code className="block bg-surface p-3 rounded-lg font-mono text-[10px] text-accent text-center whitespace-pre">
            {"[x']   [a  b]   [x]\n[y'] = [c  d] * [y]"}
          </code>
          <p>
            Vektor basis merah menggambarkan transformasi dari vektor $[1, 0]$ (i-hat) sedangkan basis biru menggambarkan transformasi $[0, 1]$ (j-hat). Bidang grid siber ikut melar/bergeser secara interaktif.
          </p>
        </div>
      </motion.div>

      {/* Live Canvas Grid Screen */}
      <div className="lg:col-span-7 flex flex-col items-center">
        <div className="relative w-full aspect-square md:h-112.5 md:w-112.5 rounded-3xl overflow-hidden border border-border/15 bg-background-card/40 backdrop-blur-md shadow-2xl flex items-center justify-center p-2">
          <div className="absolute inset-0 bg-radial-to-br from-accent/2 to-transparent pointer-events-none" />
          <canvas
            ref={matrixCanvasRef}
            width={450}
            height={450}
            className="w-full h-full object-contain rounded-2xl"
          />
        </div>
      </div>
    </div>
  );
}
