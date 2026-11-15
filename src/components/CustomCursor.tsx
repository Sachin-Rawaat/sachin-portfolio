import React, { useState, useEffect, useRef } from "react";
import { motion, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";

interface CustomCursorProps {
  glowEffect?: boolean;
  showTrail?: boolean;
  trailLength?: number;
  className?: string;
  size?: number;
  magneticDistance?: number;
  magneticElements?: string;
}

export function CustomCursor({
  glowEffect = true,
  showTrail = true,
  trailLength = 4,
  className,
  size = 20,
  magneticDistance = 40,
  magneticElements = "a, button, [role='button'], input, textarea, select, .cursor-pointer, [data-magnetic]",
}: CustomCursorProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [trail, setTrail] = useState<{ x: number; y: number }[]>([]);

  // Smooth, buttery spring configurations
  const springConfig = { damping: 28, stiffness: 220, mass: 0.5 };
  const cursorX = useSpring(-100, springConfig);
  const cursorY = useSpring(-100, springConfig);
  const cursorScale = useSpring(1, { stiffness: 300, damping: 25 });
  const cursorRotate = useSpring(0, { damping: 35, stiffness: 180 });

  const prevPos = useRef({ x: 0, y: 0 });
  const velocity = useRef({ x: 0, y: 0 });
  const lastTime = useRef(Date.now());
  const prevAngle = useRef(0);
  const totalRotation = useRef(0);
  const touchTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Detect if primary input is touch - on touch/mobile devices, disable custom cursor to preserve 120Hz native touch scroll performance
    const isTouch =
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0 ||
      window.matchMedia("(pointer: coarse)").matches;

    if (isTouch) {
      setIsTouchDevice(true);
      return;
    }

    const checkMagnetic = (x: number, y: number) => {
      // Keep magnetic search lightweight
      const elements = document.querySelectorAll(magneticElements);
      for (const el of Array.from(elements)) {
        const rect = el.getBoundingClientRect();
        // Skip elements not in current viewport
        if (
          rect.bottom < 0 ||
          rect.top > window.innerHeight ||
          rect.right < 0 ||
          rect.left > window.innerWidth
        ) {
          continue;
        }
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const dist = Math.sqrt(Math.pow(x - centerX, 2) + Math.pow(y - centerY, 2));
        if (dist < magneticDistance) {
          return { x: centerX, y: centerY, distance: dist };
        }
      }
      return null;
    };

    let rafId: number | null = null;

    const updateCursorPosition = (clientX: number, clientY: number, isTouch = false) => {
      if (rafId) return;
      rafId = requestAnimationFrame(() => {
        let x = clientX;
        let y = clientY;

        // Hover detection
        const targetEl = document.elementFromPoint(x, y) as HTMLElement | null;
        const hovered = !!targetEl?.closest(magneticElements);
        setIsHovered(hovered);

        if (!isTouch) {
          document.body.style.cursor = hovered ? "pointer" : "none";

          const magnetic = checkMagnetic(x, y);
          if (magnetic) {
            const factor = 1 - magnetic.distance / magneticDistance;
            x += (magnetic.x - x) * factor * 0.28;
            y += (magnetic.y - y) * factor * 0.28;
          }
        }

        const now = Date.now();
        const dt = now - lastTime.current;
        if (dt > 0) {
          velocity.current = {
            x: (x - prevPos.current.x) / dt,
            y: (y - prevPos.current.y) / dt,
          };
        }
        lastTime.current = now;
        prevPos.current = { x, y };

        if (showTrail && !hovered) {
          setTrail((prev) => [{ x, y }, ...prev.slice(0, trailLength - 1)]);
        }

        cursorX.set(x);
        cursorY.set(y);

        const speed = Math.sqrt(
          Math.pow(velocity.current.x, 2) + Math.pow(velocity.current.y, 2)
        );
        if (speed > 0.08) {
          const targetAngle =
            Math.atan2(velocity.current.y, velocity.current.x) * (180 / Math.PI) + 90;
          let diff = targetAngle - prevAngle.current;
          if (diff > 180) diff -= 360;
          if (diff < -180) diff += 360;
          totalRotation.current += diff;
          cursorRotate.set(totalRotation.current);
          prevAngle.current = targetAngle;
        }

        setIsVisible(true);
        rafId = null;
      });
    };

    // Mouse Events (Desktop / Laptop)
    const handleMouseMove = (e: MouseEvent) => {
      updateCursorPosition(e.clientX, e.clientY, false);
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => {
      setIsVisible(false);
      document.body.style.cursor = "auto";
    };
    const handleMouseDown = () => cursorScale.set(0.85);
    const handleMouseUp = () => cursorScale.set(1);

    // Touch Events (Mobile / Tablet)
    const handleTouchStart = (e: TouchEvent) => {
      if (touchTimeout.current) clearTimeout(touchTimeout.current);
      if (e.touches.length > 0) {
        const touch = e.touches[0];
        cursorScale.set(1.2);
        updateCursorPosition(touch.clientX, touch.clientY, true);
        setIsVisible(true);
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const touch = e.touches[0];
        updateCursorPosition(touch.clientX, touch.clientY, true);
      }
    };

    const handleTouchEnd = () => {
      cursorScale.set(1);
      // Smoothly fade out cursor 1.2s after touch ends on mobile
      if (touchTimeout.current) clearTimeout(touchTimeout.current);
      touchTimeout.current = setTimeout(() => {
        setIsVisible(false);
      }, 1200);
    };

    // Attach listeners
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: true });
    window.addEventListener("touchend", handleTouchEnd, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);

      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);

      document.body.style.cursor = "auto";
      if (rafId) cancelAnimationFrame(rafId);
      if (touchTimeout.current) clearTimeout(touchTimeout.current);
    };
  }, [
    cursorX,
    cursorY,
    cursorScale,
    cursorRotate,
    showTrail,
    trailLength,
    magneticDistance,
    magneticElements,
  ]);

  if (isTouchDevice || !isVisible) return null;

  return (
    <>
      {/* Trail Dots (Smooth glowing particles) */}
      {showTrail &&
        !isHovered &&
        trail.map((point, idx) => (
          <motion.div
            key={idx}
            style={{
              position: "fixed",
              left: point.x,
              top: point.y,
              translateX: "-50%",
              translateY: "-50%",
              zIndex: 9998 - idx,
              pointerEvents: "none",
              opacity: ((trailLength - idx) / trailLength) * 0.35,
              scale: ((trailLength - idx) / trailLength) * 0.75,
              willChange: "transform, opacity",
            }}
            className="w-2.5 h-2.5 bg-primary rounded-full shadow-[0_0_8px_rgba(139,92,246,0.5)]"
          />
        ))}

      {/* Main Cursor Element - Works smoothly on Mobile, Laptop & Desktop */}
      <motion.div
        style={{
          position: "fixed",
          left: cursorX,
          top: cursorY,
          translateX: "-50%",
          translateY: "-50%",
          rotate: cursorRotate,
          scale: cursorScale,
          zIndex: 9999,
          pointerEvents: "none",
          willChange: "transform",
          filter: glowEffect
            ? "drop-shadow(0 0 12px rgba(139, 92, 246, 0.65))"
            : "none",
        }}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: isHovered ? 1.25 : 1, opacity: 1 }}
        exit={{ scale: 0, opacity: 0 }}
        transition={{ type: "spring", stiffness: 350, damping: 25 }}
        className={cn(
          "select-none pointer-events-none flex items-center justify-center",
          className
        )}
      >
        {isTouchDevice ? (
          // Sleek neon pulse ring on touch / mobile devices
          <div className="relative flex items-center justify-center">
            <span className="w-8 h-8 rounded-full border-2 border-primary/80 bg-primary/20 animate-ping opacity-60 absolute" />
            <span className="w-6 h-6 rounded-full border-2 border-primary bg-primary/40 backdrop-blur-[2px] shadow-[0_0_15px_rgba(139,92,246,0.8)]" />
          </div>
        ) : (
          // Elegant vector pointer with smooth inner gradient glow on desktop/laptop
          <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-primary fill-primary/35 drop-shadow-md"
          >
            <polygon points="3 3 10 21 13 13 21 10 3 3" />
          </svg>
        )}
      </motion.div>
    </>
  );
}
