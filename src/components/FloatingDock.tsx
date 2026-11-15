import React, { useRef, useState, useEffect } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { cn } from "@/lib/utils";
import {
  Home,
  User,
  Briefcase,
  FolderGit2,
  GraduationCap,
  MessageSquare,
  Mail,
} from "lucide-react";

interface DockItem {
  icon: string;
  label: string;
  href: string;
}

interface FloatingDockProps {
  items: DockItem[];
  className?: string;
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  home: Home,
  user: User,
  briefcase: Briefcase,
  folder: FolderGit2,
  graduation: GraduationCap,
  messageSquare: MessageSquare,
  mail: Mail,
};

function DockIcon({
  item,
  mouseX,
}: {
  item: DockItem;
  mouseX: ReturnType<typeof useMotionValue<number>>;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const widthSync = useTransform(distance, [-150, 0, 150], [42, 60, 42]);
  const width = useSpring(widthSync, { mass: 0.1, stiffness: 180, damping: 16 });

  const IconComponent = iconMap[item.icon] || Home;

  const handleClick = (e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault();
    const target = document.querySelector(item.href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <motion.div
      ref={ref}
      style={{ width, height: width }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={handleClick}
      className="relative inline-flex items-center justify-center rounded-full bg-background/90 backdrop-blur-md border border-border shadow-md cursor-pointer hover:border-primary/50 transition-colors shrink-0 select-none active:scale-95"
      tabIndex={0}
      role="button"
      aria-label={item.label}
    >
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, y: 10, x: "-50%" }}
            animate={{ opacity: 1, y: 0, x: "-50%" }}
            exit={{ opacity: 0, y: 5, x: "-50%" }}
            transition={{ duration: 0.2 }}
            className="absolute -top-9 left-1/2 rounded-md bg-foreground text-background px-2.5 py-1 text-xs font-semibold whitespace-nowrap shadow-xl pointer-events-none z-50 hidden sm:block"
          >
            {item.label}
          </motion.div>
        )}
      </AnimatePresence>

      <IconComponent className="w-5 h-5 text-foreground/80 group-hover:text-primary transition-colors pointer-events-none" />
    </motion.div>
  );
}

export function FloatingDock({ items, className }: FloatingDockProps) {
  const mouseX = useMotionValue(Infinity);

  const handleMouseMove = (e: React.MouseEvent) => {
    mouseX.set(e.pageX);
  };

  const handleMouseLeave = () => {
    mouseX.set(Infinity);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length > 0) {
      mouseX.set(e.touches[0].clientX);
    }
  };

  const handleTouchEnd = () => {
    mouseX.set(Infinity);
  };

  return (
    <motion.nav
      aria-label="Quick Navigation Dock"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      className={cn(
        "mx-auto flex items-center justify-center gap-2 sm:gap-3 px-3 sm:px-4 py-2 sm:py-2.5 rounded-full border border-foreground/10 bg-background/80 backdrop-blur-2xl shadow-2xl transition-all duration-300 max-w-[95vw] overflow-x-auto no-scrollbar",
        className
      )}
    >
      {items.map((item, idx) => (
        <DockIcon key={idx} item={item} mouseX={mouseX} />
      ))}
    </motion.nav>
  );
}
