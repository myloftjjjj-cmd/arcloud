import { useState } from "react";
import { cn } from "@/lib/utils";

interface VirtualButtonProps {
  label: string;
  shape?: "round" | "pill";
  className?: string;
}

export const VirtualButton = ({ label, shape = "round", className }: VirtualButtonProps) => {
  const [pressed, setPressed] = useState(false);

  return (
    <button
      type="button"
      aria-label={label}
      onPointerDown={(e) => {
        e.preventDefault();
        setPressed(true);
      }}
      onPointerUp={() => setPressed(false)}
      onPointerLeave={() => setPressed(false)}
      onPointerCancel={() => setPressed(false)}
      onContextMenu={(e) => e.preventDefault()}
      className={cn(
        "flex select-none touch-none items-center justify-center border border-border bg-background/60 font-bold text-foreground backdrop-blur transition-transform active:scale-90",
        shape === "round" ? "h-8 w-8 rounded-full text-xs" : "h-6 w-12 rounded-full text-[9px] uppercase tracking-wide",
        pressed && "scale-90 bg-primary text-primary-foreground",
        className,
      )}
    >
      {label}
    </button>
  );
};

type Cell = string | null;

const DPAD: Cell[] = [null, "↑", null, "←", null, "→", null, "↓", null];
const FACE: Cell[] = [null, "Y", null, "X", null, "B", null, "A", null];

const Cluster = ({ cells, label }: { cells: Cell[]; label: string }) => (
  <div role="group" aria-label={label} className="grid grid-cols-3 gap-1">
    {cells.map((cell, i) =>
      cell ? <VirtualButton key={i} label={cell} /> : <span key={i} className="h-8 w-8" />,
    )}
  </div>
);

/** On-screen gamepad overlay for controller games (no physical controller needed). */
export const TouchControls = () => (
  <div className="flex flex-col gap-2 rounded-2xl bg-black/30 p-2">
    <div className="flex justify-between gap-1">
      <VirtualButton label="LB" shape="pill" />
      <VirtualButton label="Select" shape="pill" className="w-14" />
      <VirtualButton label="Start" shape="pill" className="w-14" />
      <VirtualButton label="RB" shape="pill" />
    </div>
    <div className="flex items-center justify-between">
      <Cluster cells={DPAD} label="Directional pad" />
      <Cluster cells={FACE} label="Face buttons" />
    </div>
  </div>
);

export default TouchControls;
