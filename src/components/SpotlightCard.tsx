import React, { useCallback } from "react";
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
  gradientSize = 280,
  gradientColor = "rgba(139, 92, 246, 0.12)",
  gradientFrom = "#8b5cf6",
  gradientTo = "#38bdf8",
  ...props
}: SpotlightCardProps) {
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

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      updateCoordinates(e.clientX, e.clientY, e.currentTarget);
    },
    [updateCoordinates]
  );

  const handleReset = useCallback(() => {
    mouseX.set(-gradientSize);
    mouseY.set(-gradientSize);
  }, [mouseX, mouseY, gradientSize]);

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleReset}
      className={cn(
        "group relative flex flex-col justify-between rounded-3xl border border-border/80 bg-card/90 backdrop-blur-md p-6 sm:p-8 shadow-sm transition-all duration-300 hover:shadow-2xl hover:-translate-y-1.5 overflow-hidden",
        className
      )}
      {...props}
    >
      {/* Radial subtle background glow */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-0"
        style={{
          background: useMotionTemplate`
            radial-gradient(${gradientSize}px circle at ${mouseX}px ${mouseY}px, ${gradientColor}, transparent 75%)
          `,
        }}
      />
      {/* Radial border stroke highlight */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-0"
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
