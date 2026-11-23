import { useId } from "react";
import { cn } from "@/lib/utils";

interface DotPatternProps {
  width?: number;
  height?: number;
  x?: number;
  y?: number;
  cx?: number;
  cy?: number;
  cr?: number;
  glow?: boolean;
  className?: string;
  [key: string]: any;
}

export function DotPattern({
  width = 24,
  height = 24,
  x = 0,
  y = 0,
  cx = 1,
  cy = 1,
  cr = 1,
  glow = true,
  className,
  ...props
}: DotPatternProps) {
  const id = useId();

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
      <svg
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute inset-0 h-full w-full fill-neutral-400/20 dark:fill-neutral-600/30",
          className
        )}
        {...props}
      >
        <defs>
          <pattern
            id={id}
            width={width}
            height={height}
            patternUnits="userSpaceOnUse"
            patternTransform={`translate(${x},${y})`}
          >
            <circle cx={cx} cy={cy} r={cr} />
          </pattern>
        </defs>
        <rect width="100%" height="100%" strokeWidth={0} fill={`url(#${id})`} />
      </svg>
      {glow && (
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-primary/15 dark:bg-primary/25 blur-[140px] rounded-full pointer-events-none" />
      )}
    </div>
  );
}

export default DotPattern;
