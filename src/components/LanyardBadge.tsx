import React, { useRef, useState, useEffect, useCallback } from "react";
import { cn } from "@/lib/utils";

interface LanyardBadgeProps {
  name?: string;
  role?: string;
  badgeId?: string;
  accentColor?: string;
  ropeLength?: number;
  ropeColor?: string;
  cardWidth?: string;
  children?: React.ReactNode;
}

function LanyardRope({ length = 75 }: { length: number; color?: string }) {
  const l = length;
  const r = length + 8;
  const c = length + 18;

  return (
    <svg
      width="56"
      height={length + 42}
      viewBox={`0 0 56 ${length + 42}`}
      style={{ display: "block", margin: "0 auto", overflow: "visible" }}
    >
      <defs>
        {/* Realistic Polished Chrome / Silver Buckle & Hook Gradients */}
        <linearGradient id="chromeGloss" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="25%" stopColor="#d4d4d8" />
          <stop offset="45%" stopColor="#a1a1aa" />
          <stop offset="65%" stopColor="#e4e4e7" />
          <stop offset="85%" stopColor="#71717a" />
          <stop offset="100%" stopColor="#fafafa" />
        </linearGradient>

        <linearGradient id="chromeRim" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
          <stop offset="50%" stopColor="#a1a1aa" />
          <stop offset="100%" stopColor="#52525b" />
        </linearGradient>

        {/* Deep Full Black Leather Strap */}
        <linearGradient id="leatherBlack" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#050505" />
          <stop offset="15%" stopColor="#121212" />
          <stop offset="50%" stopColor="#1e1e1e" />
          <stop offset="85%" stopColor="#121212" />
          <stop offset="100%" stopColor="#050505" />
        </linearGradient>

        {/* Soft Drop Shadow for Hardware */}
        <filter id="stealthShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="1.5" stdDeviation="1.2" floodColor="#000" floodOpacity="0.4" />
        </filter>
      </defs>

      {/* 1. Deep Black Leather Strap */}
      <rect
        x="19"
        y="0"
        width="18"
        height={l}
        rx="2"
        fill="url(#leatherBlack)"
        filter="drop-shadow(0 2px 4px rgba(0,0,0,0.6))"
      />

      {/* Leather Edge Creases */}
      <line x1="20" y1="0" x2="20" y2={l} stroke="#000000" strokeWidth="0.8" opacity="0.9" />
      <line x1="36" y1="0" x2="36" y2={l} stroke="#000000" strokeWidth="0.8" opacity="0.9" />

      {/* 2. Elegant Black Stitched Thread (Subtle, Realistic & High-End) */}
      {/* Stitch Indentation Line */}
      <line
        x1="22"
        y1="3"
        x2="22"
        y2={l - 3}
        stroke="#000000"
        strokeWidth="1.2"
        strokeDasharray="2.8 2"
        strokeLinecap="round"
        opacity="0.9"
      />
      <line
        x1="34"
        y1="3"
        x2="34"
        y2={l - 3}
        stroke="#000000"
        strokeWidth="1.2"
        strokeDasharray="2.8 2"
        strokeLinecap="round"
        opacity="0.9"
      />
      {/* Subtle Charcoal Black Stitch Fiber Highlight */}
      <line
        x1="22"
        y1="2.5"
        x2="22"
        y2={l - 3.5}
        stroke="#333338"
        strokeWidth="0.8"
        strokeDasharray="2.8 2"
        strokeLinecap="round"
        opacity="0.75"
      />
      <line
        x1="34"
        y1="2.5"
        x2="34"
        y2={l - 3.5}
        stroke="#333338"
        strokeWidth="0.8"
        strokeDasharray="2.8 2"
        strokeLinecap="round"
        opacity="0.75"
      />

      {/* 3. Realistic Polished Silver Buckle Clasp (Bakkal) */}
      <g filter="url(#stealthShadow)">
        <rect
          x="16"
          y={l - 3}
          width="24"
          height="8.5"
          rx="2"
          fill="url(#chromeGloss)"
          stroke="url(#chromeRim)"
          strokeWidth="0.6"
        />
        <rect
          x="18"
          y={l - 1.5}
          width="20"
          height="5.5"
          rx="1.2"
          fill="none"
          stroke="#71717a"
          strokeWidth="0.6"
          opacity="0.6"
        />
        {/* Silver Rivet */}
        <circle cx="28" cy={l + 1.25} r="1.3" fill="#ffffff" stroke="#71717a" strokeWidth="0.5" />
      </g>

      {/* 4. Polished Silver Ring */}
      <circle
        cx="28"
        cy={r + 3}
        r="6.5"
        fill="none"
        stroke="url(#chromeGloss)"
        strokeWidth="2.5"
        filter="url(#stealthShadow)"
      />
      <circle
        cx="28"
        cy={r + 3}
        r="6.5"
        fill="none"
        stroke="#ffffff"
        strokeWidth="0.5"
        opacity="0.8"
      />

      {/* 5. Realistic Polished Silver Hook Clasp */}
      <g filter="url(#stealthShadow)">
        <rect
          x="25"
          y={c - 1}
          width="6"
          height="4.5"
          rx="1"
          fill="url(#chromeGloss)"
          stroke="#a1a1aa"
          strokeWidth="0.5"
        />
        <path
          d={`M 24.5 ${c + 3.5} C 24.5 ${c + 1}, 31.5 ${c + 1}, 31.5 ${c + 3.5} L 30.5 ${c + 11.5} C 30.5 ${c + 14}, 25.5 ${c + 14}, 25.5 ${c + 11.5} Z`}
          fill="url(#chromeGloss)"
          stroke="url(#chromeRim)"
          strokeWidth="0.6"
        />
        <circle
          cx="28"
          cy={c + 15.5}
          r="3"
          fill="none"
          stroke="url(#chromeGloss)"
          strokeWidth="2.2"
        />
      </g>
    </svg>
  );
}

export function LanyardBadge({
  name = "Sachin Rawat",
  role = "Software Engineer & AI Engineer",
  badgeId = "SR-89240-PRO",
  accentColor = "#8b5cf6",
  ropeLength = 75,
  ropeColor = "#27272a",
  cardWidth = "w-72 sm:w-80 md:w-84",
  children,
}: LanyardBadgeProps) {
  const physics = useRef({ angle: 0, vel: 0 });
  const animFrame = useRef<number | null>(null);
  const lastTime = useRef<number | null>(null);
  const lastAngle = useRef(0);
  const isDragging = useRef(false);
  const [angle, setAngle] = useState(0);
  const startX = useRef(0);
  const startAngle = useRef(0);

  const GRAVITY = 980;
  const DAMPING = 0.5;
  const SPRING = 0.8;
  const MASS = 1.0;

  const updatePhysics = useCallback(
    (time: number) => {
      if (lastTime.current === null) lastTime.current = time;
      const dt = Math.min((time - lastTime.current) / 1000, 0.05);
      lastTime.current = time;

      const p = physics.current;
      if (isDragging.current) {
        if (dt > 0) {
          p.vel = (p.angle - lastAngle.current) / dt;
        }
        lastAngle.current = p.angle;
        animFrame.current = requestAnimationFrame(updatePhysics);
      } else {
        const pendulumLen = ropeLength + 100;
        const acc =
          -(GRAVITY / pendulumLen) * Math.sin(p.angle) -
          (DAMPING / MASS) * p.vel -
          (SPRING / MASS) * p.angle;
        p.vel += acc * dt;
        p.angle += p.vel * dt;

        setAngle(p.angle);

        if (Math.abs(p.angle) > 0.001 || Math.abs(p.vel) > 0.001) {
          animFrame.current = requestAnimationFrame(updatePhysics);
        } else {
          p.angle = 0;
          p.vel = 0;
          setAngle(0);
        }
      }
    },
    [ropeLength]
  );

  const startAnimation = useCallback(() => {
    if (animFrame.current) cancelAnimationFrame(animFrame.current);
    lastTime.current = null;
    animFrame.current = requestAnimationFrame(updatePhysics);
  }, [updatePhysics]);

  const handlePointerDown = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      e.currentTarget.setPointerCapture(e.pointerId);
      isDragging.current = true;
      startX.current = e.clientX;
      startAngle.current = physics.current.angle;
      lastAngle.current = physics.current.angle;
      if (animFrame.current) cancelAnimationFrame(animFrame.current);
      lastTime.current = null;
      animFrame.current = requestAnimationFrame(updatePhysics);
    },
    [updatePhysics]
  );

  const handlePointerMove = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      if (!isDragging.current) return;
      const deltaX = e.clientX - startX.current;
      const pendulumLen = ropeLength + 100;
      const targetAngle = startAngle.current - deltaX / pendulumLen;
      const clampedAngle = Math.max(-1.4, Math.min(1.4, targetAngle));
      physics.current.angle = clampedAngle;
      setAngle(clampedAngle);
    },
    [ropeLength]
  );

  const handlePointerUp = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      e.currentTarget.releasePointerCapture(e.pointerId);
      isDragging.current = false;
    },
    []
  );

  const handleClick = useCallback(() => {
    if (Math.abs(physics.current.vel) < 0.1 && Math.abs(physics.current.angle) < 0.05) {
      physics.current.vel = 4;
      startAnimation();
    }
  }, [startAnimation]);

  useEffect(() => {
    return () => {
      if (animFrame.current) cancelAnimationFrame(animFrame.current);
    };
  }, []);

  const degrees = angle * (180 / Math.PI);

  return (
    <div className="flex flex-col items-center select-none" style={{ touchAction: "none" }}>
      {/* Sleek Minimalist Matte Black Anchor Pin */}
      <div className="w-3.5 h-3.5 rounded-full shadow-md z-10 relative bg-zinc-900 border border-zinc-700/80 flex items-center justify-center">
        <div className="w-1.5 h-1.5 rounded-full bg-zinc-950" />
      </div>

      {/* Swinging Assembly */}
      <div
        className="flex flex-col items-center cursor-grab active:cursor-grabbing"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onClick={handleClick}
        style={{
          transform: `rotate(${degrees}deg)`,
          transformOrigin: "top center",
          willChange: "transform",
          marginTop: "-6px",
        }}
      >
        <div style={{ pointerEvents: "none" }}>
          <LanyardRope length={ropeLength} color={ropeColor} />
        </div>

        {/* Card Shell */}
        <div
          className={cn(
            "relative rounded-[1.75rem] overflow-hidden shadow-2xl border border-foreground/10 dark:border-white/10 glass-panel backdrop-blur-2xl pointer-events-none mt-[-16px]",
            cardWidth
          )}
        >
          {/* Top Slot Hole with Clean Dark Rim */}
          <div className="absolute top-2.5 left-1/2 -translate-x-1/2 z-30 pointer-events-none">
            <div className="w-10 h-2.5 rounded-full bg-black/90 border border-zinc-700/60 shadow-inner flex items-center justify-center">
              <div className="w-7 h-1 rounded-full bg-zinc-950 opacity-90" />
            </div>
          </div>

          {children}
        </div>
      </div>
    </div>
  );
}
