import React, { useCallback } from "react";
import { motion, useMotionValue, useMotionTemplate } from "framer-motion";
import { cn } from "@/lib/utils";

interface InteractiveGradientCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  gradientSize?: number;
  gradientColor?: string;
  gradientFrom?: string;
  gradientTo?: string;
}

export const InteractiveGradientCard: React.FC<InteractiveGradientCardProps> = ({
  children,
  className,
  gradientSize = 280,
  gradientColor = "rgba(139, 92, 246, 0.12)",
  gradientFrom = "#8b5cf6",
  gradientTo = "#38bdf8",
  ...props
}) => {
  const mouseX = useMotionValue(-gradientSize);
  const mouseY = useMotionValue(-gradientSize);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const { left, top } = e.currentTarget.getBoundingClientRect();
      mouseX.set(e.clientX - left);
      mouseY.set(e.clientY - top);
    },
    [mouseX, mouseY]
  );

  const handleMouseLeave = useCallback(() => {
    mouseX.set(-gradientSize);
    mouseY.set(-gradientSize);
  }, [mouseX, mouseY, gradientSize]);

  const bgTemplate = useMotionTemplate`radial-gradient(${gradientSize}px circle at ${mouseX}px ${mouseY}px, ${gradientColor}, transparent 80%)`;
  const borderTemplate = useMotionTemplate`radial-gradient(${gradientSize}px circle at ${mouseX}px ${mouseY}px, ${gradientFrom}, ${gradientTo}, transparent 80%)`;

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "group relative flex flex-col justify-between rounded-3xl border border-border/80 bg-card/90 backdrop-blur-md p-8 shadow-sm transition-all duration-300 hover:shadow-2xl hover:-translate-y-1.5 overflow-hidden",
        className
      )}
      {...props}
    >
      {/* Dynamic cursor glowing background */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: bgTemplate,
        }}
      />
      {/* Dynamic cursor border glow */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 -z-10"
        style={{
          background: borderTemplate,
        }}
      />
      <div className="relative z-10 h-full flex flex-col justify-between">
        {children}
      </div>
    </div>
  );
};

export default InteractiveGradientCard;
