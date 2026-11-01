'use client';

import React from 'react';

/**
 * BackgroundEffect Component
 * Redesigned based on UI/UX Pro Max 'Dark Mode (OLED)' + 'Aurora UI' specifications.
 * Combines a precision engineering micro-grid with smooth radial edge-masking
 * and multi-layered GPU-accelerated ambient aurora light blooms.
 */
export const BackgroundEffect: React.FC = () => {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none overflow-hidden z-0"
    >
      {/* Aurora Ambient Bloom 1: Primary Cyan & Electric Blue (Hero Core) */}
      <div
        className="absolute -top-32 left-1/2 -translate-x-1/2 w-[650px] sm:w-[900px] h-[480px] sm:h-[600px] rounded-full animate-aurora-drift opacity-80"
        style={{
          background:
            'radial-gradient(circle, var(--aurora-1) 0%, var(--aurora-2) 45%, transparent 70%)',
          filter: 'blur(75px)',
          willChange: 'transform, opacity',
        }}
      />

      {/* Aurora Ambient Bloom 2: Purple & Indigo Accent (Projects & Depth) */}
      <div
        className="absolute top-[35%] -right-24 sm:right-[5%] w-[420px] sm:w-[600px] h-[380px] sm:h-[500px] rounded-full animate-aurora-pulse opacity-70"
        style={{
          background:
            'radial-gradient(circle, var(--aurora-3) 0%, transparent 68%)',
          filter: 'blur(85px)',
          willChange: 'transform, opacity',
        }}
      />

      {/* Aurora Ambient Bloom 3: Emerald & Mint Subtle Horizon Accent (Footer / Contact) */}
      <div
        className="absolute -bottom-24 -left-20 sm:left-[5%] w-[400px] sm:w-[550px] h-[360px] sm:h-[450px] rounded-full animate-aurora-drift-reverse opacity-60"
        style={{
          background:
            'radial-gradient(circle, rgba(16, 185, 129, 0.08) 0%, transparent 65%)',
          filter: 'blur(80px)',
          willChange: 'transform, opacity',
        }}
      />

      {/* Precision Engineering Tech Grid with Radial Dissolve Mask */}
      <div
        className="absolute inset-0 precision-tech-grid"
        style={{
          maskImage:
            'radial-gradient(ellipse 90% 70% at 50% 20%, black 35%, transparent 85%)',
          WebkitMaskImage:
            'radial-gradient(ellipse 90% 70% at 50% 20%, black 35%, transparent 85%)',
        }}
      />

      {/* High-Tech Gradient Horizon Beam */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 max-w-4xl h-[1px]"
        style={{
          background:
            'linear-gradient(90deg, transparent 0%, var(--accent-cyan) 30%, var(--accent-blue) 70%, transparent 100%)',
          opacity: 0.35,
        }}
      />
    </div>
  );
};

