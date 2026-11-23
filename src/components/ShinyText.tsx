import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ShinyTextProps {
  text: string;
  fontSize?: string;
  className?: string;
  textClassName?: string;
}

export const ShinyText: React.FC<ShinyTextProps> = ({
  text,
  fontSize = "clamp(3rem, 6.5vw, 5.5rem)",
  className,
  textClassName,
}) => {
  return (
    <div className={cn("relative inline-block overflow-hidden py-1", className)}>
      <motion.span
        initial={{ backgroundPosition: "-200% 0" }}
        animate={{ backgroundPosition: "200% 0" }}
        transition={{
          repeat: Infinity,
          duration: 3.5,
          ease: "linear",
        }}
        style={{
          fontSize,
          backgroundImage:
            "linear-gradient(110deg, #38bdf8 0%, #c084fc 25%, #ffffff 50%, #c084fc 75%, #38bdf8 100%)",
          backgroundSize: "200% 100%",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
        className={cn(
          "font-extrabold leading-none tracking-tight block pb-2 select-none",
          textClassName
        )}
      >
        {text}
      </motion.span>
    </div>
  );
};

export default ShinyText;
