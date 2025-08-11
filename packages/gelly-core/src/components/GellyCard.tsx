// packages/gelly-core/src/components/GellyCard.tsx
import React from "react";
import clsx from "clsx";

export const GellyCard: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className }) => {
  return (
    <div
      className={clsx(
        "rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-xl",
        "transition-all duration-300",
        className
      )}
    >
      {children}
    </div>
  );
};
