import React from "react";
import clsx from "clsx";

export interface GlassProgressProps {
  value: number; // 0 to 100
  className?: string;
  color?: "blue" | "green" | "red" | "purple";
}

const colorMap = {
  blue: "bg-blue-400/70",
  green: "bg-green-400/70",
  red: "bg-red-400/70",
  purple: "bg-purple-400/70",
};

export const GlassProgress: React.FC<GlassProgressProps> = ({
  value,
  className,
  color = "blue",
}) => (
  <div
    className={clsx(
      "w-full h-5 rounded-xl bg-white/20 backdrop-blur-lg border border-white/30 shadow-inner overflow-hidden",
      className
    )}
  >
    <div
      className={clsx(
        "h-full transition-all duration-300",
        colorMap[color]
      )}
      style={{ width: `${Math.max(0, Math.min(100, value))}%` }}
    />
  </div>
);