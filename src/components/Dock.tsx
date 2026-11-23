import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  AnimatePresence,
  MotionValue,
} from "framer-motion";

function useDockItemSize(
  mouseX: MotionValue<number>,
  baseItemSize: number,
  magnification: number,
  distance: number,
  ref: React.RefObject<HTMLDivElement | null>,
  spring: { mass: number; stiffness: number; damping: number }
) {
  const mouseDistance = useTransform(mouseX, (val) => {
    if (typeof val !== "number" || isNaN(val)) return 0;
    const rect = ref.current?.getBoundingClientRect() ?? {
      x: 0,
      width: baseItemSize,
    };
    return val - rect.x - baseItemSize / 2;
  });

  const targetSize = useTransform(
    mouseDistance,
    [-distance, 0, distance],
    [baseItemSize, magnification, baseItemSize]
  );

  return useSpring(targetSize, spring);
}

export interface DockItemData {
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
  badgeCount?: number;
}

interface DockItemProps {
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
  mouseX: MotionValue<number>;
  baseItemSize: number;
  magnification: number;
  distance: number;
  spring: { mass: number; stiffness: number; damping: number };
  badgeCount?: number;
}

function DockItem({
  icon,
  label,
  onClick,
  mouseX,
  baseItemSize,
  magnification,
  distance,
  spring,
  badgeCount,
}: DockItemProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isHovered = useMotionValue(0);
  const size = useDockItemSize(
    mouseX,
    baseItemSize,
    magnification,
    distance,
    ref,
    spring
  );
  const [showLabel, setShowLabel] = useState(false);

  useEffect(() => {
    const unsubscribe = isHovered.on("change", (value) =>
      setShowLabel(value === 1)
    );
    return () => unsubscribe();
  }, [isHovered]);

  return (
    <motion.div
      ref={ref}
      style={{ width: size, height: size }}
      onHoverStart={() => isHovered.set(1)}
      onHoverEnd={() => isHovered.set(0)}
      onFocus={() => isHovered.set(1)}
      onBlur={() => isHovered.set(0)}
      onClick={onClick}
      className="relative inline-flex items-center justify-center rounded-2xl 
      bg-slate-100 hover:bg-white dark:bg-zinc-800/80 dark:hover:bg-zinc-700/80 backdrop-blur-md border border-slate-300 dark:border-white/10 shadow-sm hover:shadow-md hover:border-primary/50 text-slate-800 dark:text-foreground transition-all cursor-pointer group"
      tabIndex={0}
      role="button"
      aria-label={label}
    >
      <div className="flex items-center justify-center text-slate-700 dark:text-zinc-200 group-hover:text-primary transition-colors">
        {icon}
      </div>
      {badgeCount !== undefined && badgeCount > 0 && (
        <span className="absolute -top-1.5 -right-1.5 flex items-center justify-center w-4 h-4 text-[10px] font-bold text-white bg-primary rounded-full shadow-sm">
          {badgeCount > 99 ? "99+" : badgeCount}
        </span>
      )}
      <AnimatePresence>
        {showLabel && (
          <motion.div
            initial={{ opacity: 0, y: 0, scale: 0.9 }}
            animate={{ opacity: 1, y: -10, scale: 1 }}
            exit={{ opacity: 0, y: 0, scale: 0.9 }}
            transition={{ duration: 0.15 }}
            className="absolute -top-7 left-1/2 w-fit whitespace-nowrap rounded-lg 
            border border-white/10 bg-zinc-950/90 backdrop-blur-md px-2.5 py-1 text-[11px] font-semibold text-white shadow-xl pointer-events-none"
            style={{ x: "-50%" }}
            role="tooltip"
          >
            {label}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export interface DockProps {
  items: DockItemData[];
  className?: string;
  spring?: { mass: number; stiffness: number; damping: number };
  magnification?: number;
  distance?: number;
  panelHeight?: number;
  dockHeight?: number;
  baseItemSize?: number;
}

export default function Dock({
  items,
  className = "",
  spring = { mass: 0.1, stiffness: 180, damping: 14 },
  magnification = 58,
  distance = 150,
  panelHeight = 64,
  dockHeight = 120,
  baseItemSize = 44,
}: DockProps) {
  const mouseX = useMotionValue(Infinity);
  const isHovered = useMotionValue(0);

  const maxHeight = useMemo(
    () => Math.max(dockHeight, magnification + magnification / 2 + 4),
    [magnification, dockHeight]
  );

  const animatedHeight = useSpring(
    useTransform(isHovered, [0, 1], [panelHeight, maxHeight]),
    spring
  );

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 pointer-events-auto">
      <motion.div
        style={{ height: animatedHeight }}
        className="flex max-w-full items-end"
      >
        <motion.div
          onMouseMove={({ pageX }) => {
            isHovered.set(1);
            mouseX.set(pageX);
          }}
          onMouseLeave={() => {
            isHovered.set(0);
            mouseX.set(Infinity);
          }}
          className={`flex items-center gap-3 w-fit rounded-3xl 
              border border-slate-300/90 dark:border-white/15 px-3.5 py-2.5
              bg-white/95 dark:bg-zinc-900/90 backdrop-blur-2xl shadow-2xl ${className}`}
          role="toolbar"
          aria-label="Application dock"
        >
          {items.map((item, index) => (
            <DockItem
              key={index}
              icon={item.icon}
              label={item.label}
              onClick={item.onClick}
              mouseX={mouseX}
              baseItemSize={baseItemSize}
              magnification={magnification}
              distance={distance}
              spring={spring}
              badgeCount={item.badgeCount}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}
