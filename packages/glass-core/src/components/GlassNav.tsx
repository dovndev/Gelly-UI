import React from "react";
import clsx from "clsx";

export interface GlassNavItem {
  label: string;
  href: string;
  active?: boolean;
  icon?: React.ReactNode;
}

export interface GlassNavProps {
  items: GlassNavItem[];
  className?: string;
}

export const GlassNav: React.FC<GlassNavProps> = ({ items, className }) => (
  <nav
    className={clsx(
      "flex gap-2 px-4 py-2 rounded-xl bg-white/20 backdrop-blur-lg border border-white/30 shadow",
      className
    )}
  >
    {items.map((item) => (
      <a
        key={item.href}
        href={item.href}
        className={clsx(
          "flex items-center gap-2 px-3 py-1 rounded-lg font-medium transition",
          item.active
            ? "bg-blue-400/40 text-blue-900 shadow"
            : "text-gray-900 hover:bg-white/40"
        )}
        aria-current={item.active ? "page" : undefined}
      >
        {item.icon}
        {item.label}
      </a>
    ))}
  </nav>
);