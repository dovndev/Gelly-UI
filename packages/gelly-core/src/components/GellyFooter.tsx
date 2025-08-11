import React from "react";
import clsx from "clsx";

export interface GellyFooterProps {
  links: { label: string; href: string }[];
  className?: string;
}

export const GellyFooter: React.FC<GellyFooterProps> = ({ links, className }) => (
  <footer className={clsx(
    "w-full py-6 px-8 rounded-t-2xl bg-white/30 backdrop-blur-lg border-t border-white/30 shadow flex justify-center gap-8",
    className
  )}>
    {links.map(link => (
      <a
        key={link.href}
        href={link.href}
        className="text-blue-900 hover:underline font-medium transition"
      >
        {link.label}
      </a>
    ))}
  </footer>
);