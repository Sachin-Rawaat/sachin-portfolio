import React from "react";
import { cn } from "@/lib/utils";

interface AuroraTextProps {
  text: string;
  className?: string;
  fontSize?: string;
}

export function AuroraText({
  text,
  className,
  fontSize = "clamp(3rem, 6.5vw, 5.5rem)",
}: AuroraTextProps) {
  return (
    <div className={cn("relative inline-block select-none", className)}>
      <span
        style={{ fontSize }}
        className="aurora-text-gradient font-extrabold tracking-tight leading-none block pb-2 drop-shadow-[0_2px_15px_rgba(139,92,246,0.35)]"
      >
        {text}
      </span>
    </div>
  );
}
