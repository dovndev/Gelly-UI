import React from "react";
import clsx from "clsx";

export interface GlassBadgePillProps {
  children: React.ReactNode;
  color?: "blue" | "green" | "red" | "yellow" | "purple" | "gray";
  count?: number;
  className?: string;
}

const colorMap = {
  blue: "bg-blue-400/30 text-blue-900",
  green: "bg-green-400/30 text-green-900",
  red: "bg-red-400/30 text-red-900",
  yellow: "bg-yellow-300/30 text-yellow-900",
  purple: "bg-purple-400/30 text-purple-900",
  gray: "bg-gray-400/30 text-gray-900",
};

export const GlassBadgePill: React.FC<GlassBadgePillProps> = ({
  children,
  color = "blue",
  count,
  className,
}) => (
  <span
    className={clsx(
      "inline-flex items-center px-3 py-1 rounded-full font-semibold text-xs backdrop-blur-lg border border-white/30 shadow",
      colorMap[color],
      className
    )}
  >
    {children}
    {typeof count === "number" && (
      <span className="ml-2 bg-white/60 text-black rounded-full px-2 py-0.5">{count}</span>
    )}
  </span>
);