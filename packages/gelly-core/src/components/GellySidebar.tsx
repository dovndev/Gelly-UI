import React from "react";
import clsx from "clsx";

export interface GellySidebarProps {
  items: { label: string; icon?: React.ReactNode; active?: boolean }[];
  className?: string;
}

export const GellySidebar: React.FC<GellySidebarProps> = ({ items, className }) => (
  <aside className={clsx(
    "w-56 min-h-[300px] rounded-2xl bg-white/30 backdrop-blur-lg border border-white/30 shadow flex flex-col gap-2 p-4",
    className
  )}>
    {items.map((item, idx) => (
      <button
        key={item.label}
        className={clsx(
          "flex items-center gap-3 px-3 py-2 rounded-lg font-medium transition w-full text-left",
          item.active
            ? "bg-blue-400/40 text-blue-900 shadow"
            : "text-gray-900 hover:bg-white/40"
        )}
      >
        {item.icon}
        {item.label}
      </button>
    ))}
  </aside>
);