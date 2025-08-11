import React from "react";
import clsx from "clsx";

export interface GellyTabsProps {
  tabs: string[];
  value: number;
  onChange: (index: number) => void;
  className?: string;
}

export const GellyTabs: React.FC<GellyTabsProps> = ({
  tabs,
  value,
  onChange,
  className,
}) => {
  return (
    <div className={clsx("relative flex space-x-2 bg-white/20 backdrop-blur-lg rounded-xl p-1", className)}>
      {tabs.map((tab, i) => (
        <button
          key={tab}
          className={clsx(
            "relative z-10 px-4 py-2 rounded-lg font-medium transition-colors duration-200",
            value === i
              ? "text-black"
              : "text-black/60 hover:text-black"
          )}
          onClick={() => onChange(i)}
        >
          {tab}
          {value === i && (
            <span
              className="absolute left-0 right-0 bottom-0 h-1 rounded-b-lg bg-white/60"
              style={{ zIndex: -1 }}
            />
          )}
        </button>
      ))}
    </div>
  );
};