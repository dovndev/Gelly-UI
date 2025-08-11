import React from "react";
import clsx from "clsx";

export interface GellyNavbarProps {
  links: { label: string; href: string; active?: boolean }[];
  className?: string;
}

export const GellyNavbar: React.FC<GellyNavbarProps> = ({ links, className }) => (
  <nav className={clsx(
    "sticky top-0 z-40 flex gap-4 px-6 py-3 rounded-b-2xl bg-white/30 backdrop-blur-lg border-b border-white/30 shadow",
    className
  )}>
    {links.map(link => (
      <a
        key={link.href}
        href={link.href}
        className={clsx(
          "px-3 py-1 rounded-lg font-medium transition",
          link.active
            ? "bg-blue-400/40 text-blue-900 shadow"
            : "text-gray-900 hover:bg-white/40"
        )}
        aria-current={link.active ? "page" : undefined}
      >
        {link.label}
      </a>
    ))}
  </nav>
);

