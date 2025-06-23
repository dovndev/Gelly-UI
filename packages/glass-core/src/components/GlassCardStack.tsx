import React from "react";
import clsx from "clsx";

export interface GlassCardStackProps {
  cards: React.ReactNode[];
  className?: string;
}

export const GlassCardStack: React.FC<GlassCardStackProps> = ({
  cards,
  className,
}) => (
  <div className={clsx("relative w-64 h-40", className)}>
    {cards.map((card, i) => (
      <div
        key={i}
        className={clsx(
          "absolute left-0 top-0 w-full h-full transition-transform duration-200",
          `z-${cards.length - i}`,
          i > 0 && `translate-y-[${i * 8}px] scale-[${1 - i * 0.05}] blur-[${i * 2}px]`
        )}
        style={{
          zIndex: cards.length - i,
          transform: `translateY(${i * 8}px) scale(${1 - i * 0.05})`,
          filter: `blur(${i * 2}px)`,
        }}
      >
        {card}
      </div>
    ))}
  </div>
);