import React from "react";
import clsx from "clsx";

export interface GlassTabsBarProps {
  tabs: string[];
  activeTab: number;
  onTabChange: (idx: number) => void;
  className?: string;
}

export const GlassTabsBar: React.FC<GlassTabsBarProps> = ({
  tabs,
  activeTab,
  onTabChange,
  className,
}) => (
  <div
    className={clsx(
      "flex gap-2 px-2 py-2 rounded-xl bg-white/20 backdrop-blur-lg border border-white/30 shadow",
      className
    )}
  >
    {tabs.map((tab, idx) => (
      <button
        key={tab}
        onClick={() => onTabChange(idx)}
        className={clsx(
          "px-4 py-1 rounded-lg font-medium transition focus:outline-none",
          idx === activeTab
            ? "bg-blue-400/40 text-blue-900 shadow"
            : "text-gray-900 hover:bg-white/40"
        )}
        aria-current={idx === activeTab ? "page" : undefined}
        type="button"
      >
        {tab}
      </button>
    ))}
  </div>
);