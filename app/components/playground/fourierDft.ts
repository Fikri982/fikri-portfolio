// Discrete Fourier Transform structures
export interface Epicycle {
  freq: number;
  amp: number;
  phase: number;
}

// Coordinates sketch for the initials "FH" inside a 200x200 canvas viewport
export const FH_POINTS = [
  // Letter F
  { x: 30, y: 150 }, { x: 30, y: 130 }, { x: 30, y: 110 }, { x: 30, y: 90 },
  { x: 30, y: 70 }, { x: 30, y: 50 }, { x: 30, y: 30 }, { x: 50, y: 30 },
  { x: 70, y: 30 }, { x: 50, y: 30 }, { x: 30, y: 30 }, { x: 30, y: 50 },
  { x: 30, y: 70 }, { x: 30, y: 80 }, { x: 50, y: 80 }, { x: 65, y: 80 },
  { x: 50, y: 80 }, { x: 30, y: 80 }, { x: 30, y: 110 }, { x: 30, y: 130 },
  { x: 30, y: 150 },
  
  // Transition path from F bottom to H left top
  { x: 50, y: 150 }, { x: 70, y: 150 }, { x: 90, y: 150 }, { x: 110, y: 130 },
  { x: 110, y: 90 }, { x: 110, y: 50 }, { x: 110, y: 30 },
  
  // Letter H (Left Bar)
  { x: 110, y: 30 }, { x: 110, y: 60 }, { x: 110, y: 90 }, { x: 110, y: 120 },
  { x: 110, y: 150 }, { x: 110, y: 120 }, { x: 110, y: 90 },
  
  // Letter H (Crossbar)
  { x: 130, y: 90 }, { x: 150, y: 90 }, { x: 160, y: 90 },
  
  // Letter H (Right Bar)
  { x: 160, y: 30 }, { x: 160, y: 60 }, { x: 160, y: 90 }, { x: 160, y: 120 },
  { x: 160, y: 150 }, { x: 160, y: 120 }, { x: 160, y: 90 }, { x: 160, y: 50 },
  { x: 160, y: 30 },
  
  // Close the loop back to F
  { x: 130, y: 30 }, { x: 90, y: 30 }, { x: 60, y: 60 }, { x: 45, y: 100 },
  { x: 30, y: 150 }
];

// Perform DFT on 2D coordinates representing complex numbers x + i*y
export function dft2D(points: { x: number; y: number }[]): Epicycle[] {
  const N = points.length;
  const X: Epicycle[] = [];

  for (let k = 0; k < N; k++) {
    let re = 0;
    let im = 0;

    for (let n = 0; n < N; n++) {
      const phi = (Math.PI * 2 * k * n) / N;
      const cos = Math.cos(phi);
      const sin = Math.sin(phi);

      // Complex number multiplication: (x + iy) * (cos(phi) - i*sin(phi))
      re += points[n].x * cos + points[n].y * sin;
      im += -points[n].x * sin + points[n].y * cos;
    }

    re = re / N;
    im = im / N;

    const amp = Math.sqrt(re * re + im * im);
    const phase = Math.atan2(im, re);

    X.push({ freq: k, amp, phase });
  }

  // Sort by amplitude (largest circles first) to make the visualization clean
  return X.sort((a, b) => b.amp - a.amp);
}

// 2D Polygon shape for Matrix transformations
export const MATRIX_SHAPE = [
  { x: 0, y: -40 },   // Arrow tip
  { x: 30, y: 0 },    // Right ear
  { x: 15, y: 0 },    // Outer neck
  { x: 15, y: 40 },   // Bottom right stem
  { x: -15, y: 40 },  // Bottom left stem
  { x: -15, y: 0 },   // Outer neck
  { x: -30, y: 0 },   // Left ear
];
