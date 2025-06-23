import React from "react";
import clsx from "clsx";

export interface GlassDividerProps {
  className?: string;
}

export const GlassDivider: React.FC<GlassDividerProps> = ({ className }) => (
  <hr
    className={clsx(
      "my-6 border-t-2 border-white/30 backdrop-blur-lg",
      className
    )}
  />
);