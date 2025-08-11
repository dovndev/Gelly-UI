import React from "react";
import clsx from "clsx";

export interface GellyDividerProps {
  className?: string;
}

export const GellyDivider: React.FC<GellyDividerProps> = ({ className }) => (
  <hr
    className={clsx(
      "my-6 border-t-2 border-white/30 backdrop-blur-lg",
      className
    )}
  />
);