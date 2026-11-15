import React, { useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

interface TextMorphProps {
  texts: string[];
  className?: string;
  morphTime?: number;
  cooldownTime?: number;
}

export function TextMorph({
  texts,
  className,
  morphTime = 1.6,
  cooldownTime = 0.8,
}: TextMorphProps) {
  const text1Ref = useRef<HTMLSpanElement>(null);
  const text2Ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!texts || texts.length === 0) return;

    let animId: number;
    let prevTime = new Date();
    let morphProgress = 0;
    let cooldownRemaining = cooldownTime;
    let currentIndex = 0;

    const el1 = text1Ref.current;
    const el2 = text2Ref.current;
    if (!el1 || !el2) return;

    el1.textContent = texts[currentIndex % texts.length];
    el2.textContent = texts[(currentIndex + 1) % texts.length];

    function setMorph(fraction: number) {
      if (!el1 || !el2) return;
      el2.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
      el2.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

      const inverse = 1 - fraction;
      el1.style.filter = `blur(${Math.min(8 / inverse - 8, 100)}px)`;
      el1.style.opacity = `${Math.pow(inverse, 0.4) * 100}%`;
    }

    function doMorph() {
      morphProgress -= cooldownRemaining;
      cooldownRemaining = 0;
      let fraction = morphProgress / morphTime;
      if (fraction > 1) {
        cooldownRemaining = cooldownTime;
        fraction = 1;
      }
      setMorph(fraction);
    }

    function doCooldown() {
      morphProgress = 0;
      if (el1 && el2) {
        el2.style.filter = "";
        el2.style.opacity = "100%";
        el1.style.filter = "";
        el1.style.opacity = "0%";
      }
    }

    function animate() {
      animId = requestAnimationFrame(animate);
      const currentTime = new Date();
      const dt = (currentTime.getTime() - prevTime.getTime()) / 1000;
      prevTime = currentTime;

      cooldownRemaining -= dt;
      if (cooldownRemaining <= 0) {
        doMorph();
      } else {
        doCooldown();
      }

      if (morphProgress >= morphTime) {
        currentIndex = (currentIndex + 1) % texts.length;
        if (el1 && el2) {
          el1.textContent = texts[currentIndex % texts.length];
          el2.textContent = texts[(currentIndex + 1) % texts.length];
        }
        morphProgress = 0;
      }
    }

    animate();

    return () => {
      cancelAnimationFrame(animId);
    };
  }, [texts, morphTime, cooldownTime]);

  return (
    <div
      className={cn(
        "relative inline-flex items-center justify-center font-extrabold select-none",
        className
      )}
    >
      <span
        ref={text1Ref}
        className="absolute inset-0 flex items-center justify-center inline-block"
      />
      <span
        ref={text2Ref}
        className="absolute inset-0 flex items-center justify-center inline-block"
      />
    </div>
  );
}
