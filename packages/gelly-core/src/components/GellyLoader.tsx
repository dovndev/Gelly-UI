import React from "react";
import clsx from "clsx";

export interface GellyLoaderProps {
  size?: number;
  color?: "blue" | "green" | "red" | "purple";
  className?: string;
}

const colorMap = {
  blue: "border-blue-400",
  green: "border-green-400",
  red: "border-red-400",
  purple: "border-purple-400",
};

export const GellyLoader: React.FC<GellyLoaderProps> = ({
  size = 40,
  color = "blue",
  className,
}) => (
  <div
    className={clsx(
      "inline-block rounded-full border-4 border-t-transparent animate-spin bg-white/20 backdrop-blur-lg border-solid",
      colorMap[color],
      className
    )}
    style={{ width: size, height: size }}
    aria-label="Loading"
  />
);