"use client";

import { useState } from "react";

const PHOTOS = [
  {
    id: 1,
    src: "/about/about-1.jpeg",
    alt: "M. Fikri Hidayat - Profile Picture",
    fallbackText: "Primary Portrait",
  },
  {
    id: 2,
    src: "/about/about-2.jpeg",
    alt: "M. Fikri Hidayat - Leadership & Campus",
    fallbackText: "Community Work",
  },
  {
    id: 3,
    src: "/about/about-3.jpeg",
    alt: "M. Fikri Hidayat - Teaching Activity",
    fallbackText: "Teaching Activity",
  },
];

/* 
  Each card position is defined purely in CSS.
  offset 0 = front, 1 = middle-back, 2 = far-back
*/
const CARD_STYLES: Record<number, React.CSSProperties> = {
  0: {
    transform: "scale(1) rotate(0deg) translate(0px, 0px)",
    zIndex: 3,
  },
  1: {
    transform: "scale(0.94) rotate(6deg) translate(16px, 10px)",
    zIndex: 2,
  },
  2: {
    transform: "scale(0.88) rotate(-6deg) translate(-16px, 20px)",
    zIndex: 1,
  },
};

export default function PhotoSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});

  const nextCard = () => {
    setCurrentIndex((prev) => (prev + 1) % PHOTOS.length);
  };

  const handleImageError = (id: number) => {
    setImageErrors((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <div
      className="relative w-full aspect-4/5 max-w-70 md:max-w-xs lg:max-w-none mx-auto flex items-center justify-center py-8 cursor-pointer select-none"
      onClick={nextCard}
    >
      <div className="relative w-11/12 h-full">
        {PHOTOS.map((photo, index) => {
          const offset = (index - currentIndex + PHOTOS.length) % PHOTOS.length;
          const cardStyle = CARD_STYLES[offset];

          return (
            <div
              key={photo.id}
              className="absolute inset-0 w-full h-full rounded-3xl overflow-hidden bg-background-card border border-border/15 shadow-2xl flex items-center justify-center"
              style={{
                ...cardStyle,
                transformOrigin: "bottom center",
                transition: "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
              }}
            >
              {!imageErrors[photo.id] ? (
                /* eslint-disable-next-line @next/next/no-img-element */
                <img
                  src={photo.src}
                  alt={photo.alt}
                  onError={() => handleImageError(photo.id)}
                  className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                />
              ) : (
                <div className="absolute inset-0 w-full h-full bg-surface-dim/40 flex flex-col items-center justify-center p-6 text-center">
                  <div className="w-12 h-12 rounded-2xl bg-accent-dim border border-accent/20 flex items-center justify-center mb-3">
                    <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375 0 11-.75 0 .375 0 01.75 0z" />
                    </svg>
                  </div>
                  <span className="text-[9px] font-mono font-bold tracking-widest text-accent uppercase mb-1">
                    {photo.fallbackText}
                  </span>
                  <h4 className="text-xs font-semibold text-text-primary mb-1">
                    Photo {photo.id} Placeholder
                  </h4>
                  <p className="text-[10px] text-text-muted leading-relaxed max-w-45">
                    Save image to <code className="text-accent font-mono">public/about/about-{photo.id}.jpeg</code>
                  </p>
                </div>
              )}

              {offset === 0 && (
                <div className="absolute bottom-4 left-4 right-4 z-20 py-2.5 px-4 rounded-xl border border-border/10 bg-background-card/45 backdrop-blur-md text-center text-[10px] font-mono text-text-secondary select-none">
                  Click to Cycle Stack • Slide {photo.id} of 3
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
