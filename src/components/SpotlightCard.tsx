import React, { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface SpotlightCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  gradientSize?: number;
  gradientColor?: string;
  gradientFrom?: string;
  gradientTo?: string;
}

export function SpotlightCard({
  children,
  className,
  gradientSize = 280,
  gradientColor = "rgba(139, 92, 246, 0.12)",
  gradientFrom = "#8b5cf6",
  gradientTo = "#38bdf8",
  ...props
}: SpotlightCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: -gradientSize, y: -gradientSize });
  const [isHovered, setIsHovered] = useState(false);
  const [canHover, setCanHover] = useState(false);

  useEffect(() => {
    // Only enable hover spotlight on devices that actually support mouse hover (laptops / desktops)
    // Touchscreens/mobile will never trigger on tap
    if (typeof window !== "undefined") {
      setCanHover(window.matchMedia("(hover: hover) and (pointer: fine)").matches);
    }
  }, []);

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!canHover || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    setIsHovered(true);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!canHover || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    if (!isHovered) setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      ref={cardRef}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "group relative flex flex-col justify-between rounded-3xl border border-border/80 bg-card/90 backdrop-blur-md p-6 sm:p-8 shadow-sm transition-all duration-300 hover:shadow-2xl hover:-translate-y-1.5 overflow-hidden",
        className
      )}
      {...props}
    >
      {/* 1. Subtle Original Ambient Glow (Only on real mouse hover, never on mobile tap) */}
      {canHover && (
        <div
          className={cn(
            "pointer-events-none absolute -inset-px rounded-3xl transition-opacity duration-300 z-0",
            isHovered ? "opacity-100" : "opacity-0"
          )}
          style={{
            background: `radial-gradient(${gradientSize}px circle at ${position.x}px ${position.y}px, ${gradientColor}, transparent 75%)`,
          }}
        />
      )}

      {/* 2. Original Border Stroke Highlight (Only on real mouse hover, never on mobile tap) */}
      {canHover && (
        <div
          className={cn(
            "pointer-events-none absolute -inset-px rounded-3xl transition-opacity duration-300 z-0",
            isHovered ? "opacity-100" : "opacity-0"
          )}
          style={{
            background: `radial-gradient(${gradientSize}px circle at ${position.x}px ${position.y}px, ${gradientFrom}, ${gradientTo}, transparent 70%)`,
            maskImage: "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
            WebkitMaskImage: "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
            maskComposite: "exclude",
            WebkitMaskComposite: "xor",
            padding: "1.5px",
          }}
        />
      )}

      <div className="relative z-10 w-full flex flex-col h-full justify-between">
        {children}
      </div>
    </div>
  );
}
