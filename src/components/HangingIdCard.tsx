import React, { useRef, useEffect, useCallback, useState } from "react";
import { cn } from "@/lib/utils";

// ─── Physics constants ────────────────────────────────────────────────────────
const SPRING_K = 0;          // A real pendulum relies on gravity
const DAMPING  = 0.9;        // Light air resistance so it swings naturally
const GRAVITY  = 3000;       // Gravity scalar for snappy momentum
const MASS     = 1;

interface CardPhysicsState {
  angle:  number;   // radians from vertical
  vel:    number;   // angular velocity rad/s
}

export interface HangingIdCardProps {
  children?: React.ReactNode;
  ropeLength?: number;
  ropeColor?: string;
  className?: string;
  name?: string;
  role?: string;
  badgeId?: string;
  accentColor?: string;
  cardWidth?: string;
}

// ─── SVG Thick Lanyard / Ribbon ──────────────────────────────────────────────────────
const Lanyard = ({ length, color }: { length: number; color: string }) => {
  return (
    <svg 
      width="30" 
      height={length} 
      viewBox={`0 0 30 ${length}`} 
      style={{ display: "block", margin: "0 auto", overflow: "visible" }}
    >
      {/* Anchor ring */}
      <circle cx="15" cy="0" r="5" fill={color} />
      
      {/* Left thick ribbon */}
      <path d={`M 13 0 L 10 ${length}`} stroke={color} strokeWidth="6" opacity="0.9" />
      
      {/* Right thick ribbon */}
      <path d={`M 17 0 L 20 ${length}`} stroke={color} strokeWidth="6" opacity="0.9" />
      
      {/* Metal clip part connecting to card */}
      <rect x="10" y={length - 6} width="10" height="8" rx="2" fill="#94a3b8" />
      <circle cx="15" cy={length + 2} r="3" fill="#e2e8f0" />
    </svg>
  );
};

// ─── Main Component ───────────────────────────────────────────────────────────
export const HangingIdCard = ({
  children,
  ropeLength  = 75,
  ropeColor   = "#27272a",
  className,
  name        = "Lokes Kumar V",
  role        = "B.Tech IT | Software & IoT Engineer",
  badgeId     = "LK-202428-IT",
  accentColor = "#8b5cf6",
  cardWidth   = "w-72 sm:w-80 md:w-84",
}: HangingIdCardProps) => {
  const physRef       = useRef<CardPhysicsState>({ angle: 0, vel: 0 });
  const rafRef        = useRef<number | null>(null);
  const prevTimeRef   = useRef<number | null>(null);
  const prevAngleRef  = useRef<number>(0);
  const isDraggingRef = useRef(false);

  const [angle, setAngle] = useState(0);
  const dragStartX   = useRef(0);
  const dragAngle0   = useRef(0);

  // ── Physics loop ────────────────────────────────────────────────────────────
  const tick = useCallback((now: number) => {
    if (prevTimeRef.current === null) { prevTimeRef.current = now; }
    const dt = Math.min((now - prevTimeRef.current) / 1000, 0.05); // cap at 50ms
    prevTimeRef.current = now;

    const s = physRef.current;
    if (!isDraggingRef.current) {
      // Realistic pendulum: L is approximate center of mass
      const L = ropeLength + 100; 
      const torque =
        -(GRAVITY / L)    * Math.sin(s.angle) -
        (DAMPING  / MASS) * s.vel             -
        (SPRING_K / MASS) * s.angle;

      s.vel   += torque * dt;
      s.angle += s.vel  * dt;

      setAngle(s.angle);

      if (Math.abs(s.angle) > 0.001 || Math.abs(s.vel) > 0.001) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        s.angle = 0; s.vel = 0;
        setAngle(0);
      }
    } else {
      if (dt > 0) {
        s.vel = (s.angle - prevAngleRef.current) / dt;
      }
      prevAngleRef.current = s.angle;
      rafRef.current = requestAnimationFrame(tick);
    }
  }, [ropeLength]);

  const startPhysics = useCallback(() => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    prevTimeRef.current = null;
    rafRef.current = requestAnimationFrame(tick);
  }, [tick]);

  // ── Pointer events ──────────────────────────────────────────────────────────
  const onPointerDown = useCallback((e: React.PointerEvent) => {
    e.currentTarget.setPointerCapture(e.pointerId);
    isDraggingRef.current = true;
    dragStartX.current   = e.clientX;
    dragAngle0.current   = physRef.current.angle;
    prevAngleRef.current = physRef.current.angle;
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    prevTimeRef.current = null;
    rafRef.current = requestAnimationFrame(tick);
  }, [tick]);

  const onPointerMove = useCallback((e: React.PointerEvent) => {
    if (!isDraggingRef.current) return;
    const dx = e.clientX - dragStartX.current;
    const L = ropeLength + 100; 
    const newAngle = dragAngle0.current - dx / L;
    const clamped  = Math.max(-1.4, Math.min(1.4, newAngle));
    physRef.current.angle = clamped;
    setAngle(clamped);
  }, [ropeLength]);

  const onPointerUp = useCallback((e: React.PointerEvent) => {
    try {
      e.currentTarget.releasePointerCapture(e.pointerId);
    } catch (_) {}
    isDraggingRef.current = false;
  }, []);

  const onCardClick = useCallback(() => {
    if (Math.abs(physRef.current.vel) < 0.1 && Math.abs(physRef.current.angle) < 0.05) {
      physRef.current.vel = 3.8;
      startPhysics();
    }
  }, [startPhysics]);

  useEffect(() => () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); }, []);

  const cardRotateDeg = angle * (180 / Math.PI);

  return (
    <div
      className={cn("flex flex-col items-center select-none", className)}
      style={{ touchAction: "none" }}
    >
      {/* Ceiling anchor */}
      <div
        className="w-3.5 h-3.5 rounded-full shadow-lg z-10 relative"
        style={{ background: accentColor }}
      />

      {/* The Pendulum Assembly (Rope + Card) */}
      <div 
        className="flex flex-col items-center cursor-grab active:cursor-grabbing"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onClick={onCardClick}
        style={{
          transform: `rotate(${cardRotateDeg}deg)`,
          transformOrigin: "top center",
          willChange: "transform",
          marginTop: "-6px"
        }}
      >
        {/* Lanyard */}
        <div style={{ pointerEvents: "none" }}>
          <Lanyard length={ropeLength} color={ropeColor} />
        </div>

        {/* ID Card */}
        <div className={cn("relative rounded-3xl overflow-hidden shadow-2xl border border-white/20 dark:border-white/10 bg-card pointer-events-none mt-[-2px]", cardWidth)}>
          {children ?? (
            <div className="flex flex-col h-full bg-card">
              <div
                className="px-5 py-4 flex flex-col items-center gap-1"
                style={{ background: `linear-gradient(135deg, ${accentColor} 0%, #3758f9 100%)` }}
              >
                <p className="text-[10px] font-bold tracking-[0.25em] text-white/80 uppercase">
                  Lightswind UI
                </p>
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-sm mt-1 shadow-inner">
                  <div className="h-8 w-8 rounded-full bg-white flex items-center justify-center text-primary font-black text-xs">
                    LK
                  </div>
                </div>
              </div>
              <div className="p-5 flex flex-col items-center text-center bg-card text-card-foreground flex-1 gap-2">
                <p className="text-base font-bold text-foreground">{name}</p>
                <p className="text-xs text-muted-foreground">{role}</p>
                <p className="text-xs font-mono font-bold mt-2 text-primary">{badgeId}</p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Drag hint */}
      <p className="mt-6 text-[11px] text-muted-foreground font-medium select-none pointer-events-none opacity-70">
        ✦ Drag or tap card to swing
      </p>
    </div>
  );
};

export default HangingIdCard;
