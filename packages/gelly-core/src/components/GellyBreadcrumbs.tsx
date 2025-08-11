import React from "react";
import clsx from "clsx";

export interface GellyBreadcrumbsProps {
  items: { label: string; href?: string }[];
  className?: string;
}

export const GellyBreadcrumbs: React.FC<GellyBreadcrumbsProps> = ({
  items,
  className,
}) => (
  <nav
    className={clsx(
      "flex items-center gap-2 px-4 py-2 rounded-xl bg-white/20 backdrop-blur-lg border border-white/30 shadow text-sm",
      className
    )}
    aria-label="Breadcrumb"
  >
    {items.map((item, idx) => (
      <span key={item.label} className="flex items-center gap-2">
        {item.href ? (
          <a
            href={item.href}
            className="text-blue-700 hover:underline font-medium"
          >
            {item.label}
          </a>
        ) : (
          <span className="text-gray-900 font-semibold">{item.label}</span>
        )}
        {idx < items.length - 1 && (
          <span className="text-gray-400 select-none">/</span>
        )}
      </span>
    ))}
  </nav>
);