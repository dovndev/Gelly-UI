import React from "react";
import clsx from "clsx";

export interface GellyCardCarouselProps {
  cards: React.ReactNode[];
  className?: string;
}

export const GellyCardCarousel: React.FC<GellyCardCarouselProps> = ({
  cards,
  className,
}) => {
  const [idx, setIdx] = React.useState(0);
  return (
    <div className={clsx("flex flex-col items-center", className)}>
      <div className="flex items-center gap-4">
        <button
          className="px-3 py-1 rounded-full bg-white/30 text-black font-bold"
          onClick={() => setIdx(i => (i - 1 + cards.length) % cards.length)}
        >{"‹"}</button>
        <div className="w-64">
          {cards[idx]}
        </div>
        <button
          className="px-3 py-1 rounded-full bg-white/30 text-black font-bold"
          onClick={() => setIdx(i => (i + 1) % cards.length)}
        >{"›"}</button>
      </div>
      <div className="flex gap-2 mt-2">
        {cards.map((_, i) => (
          <span key={i} className={clsx(
            "w-2 h-2 rounded-full bg-white/40",
            i === idx && "bg-blue-400"
          )} />
        ))}
      </div>
    </div>
  );
};