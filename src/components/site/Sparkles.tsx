import { useMemo } from "react";

type Star = {
  left: string;
  top: string;
  size: number;
  delay: string;
  duration: string;
  opacity: number;
};

function seeded(i: number, salt: number) {
  const x = Math.sin(i * 12.9898 + salt * 78.233) * 43758.5453;
  return x - Math.floor(x);
}

/** Drifting, twinkling starfield used behind the whole page. */
export function Sparkles({ count = 70 }: { count?: number }) {
  const stars = useMemo<Star[]>(
    () =>
      Array.from({ length: count }, (_, i) => ({
        left: `${seeded(i, 1) * 100}%`,
        top: `${seeded(i, 2) * 100}%`,
        size: 1 + seeded(i, 3) * 2.4,
        delay: `${seeded(i, 4) * 6}s`,
        duration: `${3 + seeded(i, 5) * 5}s`,
        opacity: 0.3 + seeded(i, 6) * 0.7,
      })),
    [count],
  );

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 animate-drift">
        {stars.map((s, i) => (
          <span
            key={i}
            className="absolute rounded-full bg-highlight animate-twinkle"
            style={{
              left: s.left,
              top: s.top,
              width: s.size,
              height: s.size,
              animationDelay: s.delay,
              animationDuration: s.duration,
              opacity: s.opacity,
              boxShadow: "0 0 6px currentColor",
            }}
          />
        ))}
      </div>
      <div className="absolute -top-40 left-1/2 h-[38rem] w-[38rem] -translate-x-1/2 rounded-full bg-primary/10 blur-[140px] animate-pulse-glow" />
      <div className="absolute bottom-0 right-0 h-[30rem] w-[30rem] rounded-full bg-secondary/10 blur-[150px] animate-pulse-glow" />
    </div>
  );
}

/** One-time radial sparkle burst, rendered around the hero logo on load. */
export function SparkleBurst({ count = 22 }: { count?: number }) {
  const shards = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => {
        const angle = (i / count) * Math.PI * 2;
        const dist = 130 + seeded(i, 9) * 110;
        return {
          bx: `${Math.cos(angle) * dist}px`,
          by: `${Math.sin(angle) * dist}px`,
          delay: `${seeded(i, 11) * 0.35}s`,
          size: 3 + seeded(i, 12) * 4,
        };
      }),
    [count],
  );

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 grid place-items-center">
      {shards.map((s, i) => (
        <span
          key={i}
          className="absolute rounded-full bg-highlight animate-burst"
          style={
            {
              width: s.size,
              height: s.size,
              animationDelay: s.delay,
              boxShadow: "0 0 12px 2px currentColor",
              "--bx": s.bx,
              "--by": s.by,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
}
