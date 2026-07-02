'use client';
import React from 'react';

type MarqueeRowProps = {
  children: React.ReactNode;
  direction?: 'ltr' | 'rtl';
  speed?: number;
  repeat?: number;
  paused?: boolean;
};

export default function MarqueeRow({
  children,
  direction = 'rtl',
  speed = 25,
  repeat = 1,
  paused = false,
}: MarqueeRowProps) {
  const animationStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    paddingRight: '0.75rem',
    flexShrink: 0,
    animation: `${direction === 'ltr' ? 'marquee-ltr' : 'marquee-rtl'} ${speed}s infinite linear`,
    animationPlayState: paused ? 'paused' : 'running',
  };

  const renderRepeated = (key: string) =>
    Array.from({ length: repeat }, (_, i) => (
      <React.Fragment key={`${key}-${i}`}>{children}</React.Fragment>
    ));

  return (
    <>
      <style>{`
        @keyframes marquee-rtl {
          from { transform: translateX(0); }
          to   { transform: translateX(-100%); }
        }
        @keyframes marquee-ltr {
          from { transform: translateX(-100%); }
          to   { transform: translateX(0); }
        }
        .marquee-track:hover > div {
          animation-play-state: paused;
        }
        @media (prefers-reduced-motion: reduce) {
          .marquee-track > div {
            animation: none !important;
          }
        }
      `}</style>
      <div
        className="marquee-track"
        style={{
          display: 'flex',
          overflow: 'hidden',
          padding: '8px 0',
          maskImage: 'linear-gradient(to right, transparent, black 5%, black 95%, transparent)',
        }}
      >
        <div style={animationStyle}>
          {renderRepeated('a')}
        </div>
        <div style={animationStyle} aria-hidden>
          {renderRepeated('b')}
        </div>
      </div>
    </>
  );
}
