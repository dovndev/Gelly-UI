import React from "react";
import clsx from "clsx";

export interface GlassTimelineItem {
  title: React.ReactNode;
  description?: React.ReactNode;
  time?: React.ReactNode;
  icon?: React.ReactNode;
}

export interface GlassTimelineProps {
  items: GlassTimelineItem[];
  className?: string;
}

export const GlassTimeline: React.FC<GlassTimelineProps> = ({
  items,
  className,
}) => (
  <div className={clsx("relative pl-8", className)}>
    <div className="absolute left-3 top-0 bottom-0 w-1 bg-white/30 rounded-full" />
    <ul className="space-y-8">
      {items.map((item, idx) => (
        <li key={idx} className="relative flex items-start gap-4">
          <span className="absolute left-[-1.5rem] top-1.5 flex items-center justify-center w-6 h-6 rounded-full bg-white/60 border border-white/40 shadow">
            {item.icon || (
              <span className="block w-3 h-3 rounded-full bg-blue-400" />
            )}
          </span>
          <div className="flex-1 rounded-xl bg-white/20 backdrop-blur-lg border border-white/30 shadow px-4 py-3">
            <div className="font-semibold text-black">{item.title}</div>
            {item.time && (
              <div className="text-xs text-gray-700 mb-1">{item.time}</div>
            )}
            {item.description && (
              <div className="text-black/80">{item.description}</div>
            )}
          </div>
        </li>
      ))}
    </ul>
  </div>
);