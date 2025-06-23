import React from "react";
import clsx from "clsx";

export interface GlassAccordionItem {
  title: React.ReactNode;
  content: React.ReactNode;
}

export interface GlassAccordionProps {
  items: GlassAccordionItem[];
  className?: string;
}

export const GlassAccordion: React.FC<GlassAccordionProps> = ({
  items,
  className,
}) => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  return (
    <div className={clsx("rounded-xl bg-white/20 backdrop-blur-lg border border-white/30 shadow", className)}>
      {items.map((item, idx) => (
        <div key={idx} className="border-b border-white/20 last:border-b-0">
          <button
            className="w-full text-left px-6 py-4 font-semibold text-black flex justify-between items-center focus:outline-none"
            onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
            aria-expanded={openIndex === idx}
          >
            {item.title}
            <span className={clsx("ml-2 transition-transform", openIndex === idx && "rotate-90")}>▶</span>
          </button>
          {openIndex === idx && (
            <div className="px-6 pb-4 text-black">{item.content}</div>
          )}
        </div>
      ))}
    </div>
  );
};