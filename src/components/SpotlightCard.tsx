import React, { useState, useCallback } from "react";
import { motion, useMotionValue, useMotionTemplate } from "framer-motion";
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
  gradientSize = 340,
  gradientColor = "rgba(139, 92, 246, 0.22)",
  gradientFrom = "#8b5cf6",
  gradientTo = "#38bdf8",
  ...props
}: SpotlightCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const mouseX = useMotionValue(-gradientSize);
  const mouseY = useMotionValue(-gradientSize);

  const updateCoordinates = useCallback(
    (clientX: number, clientY: number, currentTarget: HTMLElement) => {
      const { left, top } = currentTarget.getBoundingClientRect();
      mouseX.set(clientX - left);
      mouseY.set(clientY - top);
    },
    [mouseX, mouseY]
  );

  const handleMouseEnter = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      updateCoordinates(e.clientX, e.clientY, e.currentTarget);
      setIsHovered(true);
    },
    [updateCoordinates]
  );

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      updateCoordinates(e.clientX, e.clientY, e.currentTarget);
      if (!isHovered) setIsHovered(true);
    },
    [updateCoordinates, isHovered]
  );

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
  }, []);

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "group relative flex flex-col justify-between rounded-3xl border border-border/80 bg-card/90 backdrop-blur-md p-6 sm:p-8 shadow-sm transition-all duration-300 hover:shadow-2xl hover:-translate-y-1.5 overflow-hidden",
        className
      )}
      {...props}
    >
      {/* Radial subtle background glow on hover */}
      <motion.div
        className={cn(
          "pointer-events-none absolute -inset-px rounded-3xl transition-opacity duration-300 z-0",
          isHovered ? "opacity-100" : "opacity-0"
        )}
        style={{
          background: useMotionTemplate`
            radial-gradient(${gradientSize}px circle at ${mouseX}px ${mouseY}px, ${gradientColor}, transparent 75%)
          `,
        }}
      />

      {/* Radial border stroke highlight on hover */}
      <motion.div
        className={cn(
          "pointer-events-none absolute -inset-px rounded-3xl transition-opacity duration-300 z-0",
          isHovered ? "opacity-100" : "opacity-0"
        )}
        style={{
          background: useMotionTemplate`
            radial-gradient(${gradientSize}px circle at ${mouseX}px ${mouseY}px, ${gradientFrom}, ${gradientTo}, transparent 70%)
          `,
          maskImage:
            "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
          WebkitMaskImage:
            "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
          maskComposite: "exclude",
          WebkitMaskComposite: "xor",
          padding: "1.5px",
        }}
      />

      <div className="relative z-10 w-full flex flex-col h-full justify-between">
        {children}
      </div>
    </div>
  );
}
