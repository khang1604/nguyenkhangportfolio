'use client';

import React from 'react';
import { useScrollReveal } from '../../core/hooks/useScrollReveal';

export type RevealAnimation = 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'zoom-in';

interface RevealOnScrollProps {
  children: React.ReactNode;
  animation?: RevealAnimation;
  delayMs?: number;
  className?: string;
}

export const RevealOnScroll: React.FC<RevealOnScrollProps> = ({
  children,
  animation = 'fade-up',
  delayMs = 0,
  className = '',
}) => {
  const { ref, isRevealed } = useScrollReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`reveal-wrapper reveal-${animation} ${isRevealed ? 'is-revealed' : ''} ${className}`}
      style={{
        transitionDelay: delayMs > 0 ? `${delayMs}ms` : undefined,
      }}
    >
      {children}
    </div>
  );
};

