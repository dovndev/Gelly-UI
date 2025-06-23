import React from "react";
import clsx from "clsx";

export interface GlassCalendarProps {
  value: string;
  onChange: (value: string) => void;
  className?: string;
}

export const GlassCalendar: React.FC<GlassCalendarProps> = ({
  value,
  onChange,
  className,
}) => (
  <input
    type="date"
    value={value}
    onChange={e => onChange(e.target.value)}
    className={clsx(
      "px-4 py-2 rounded-xl bg-white/20 backdrop-blur-lg border border-white/30 shadow-inner text-black outline-none transition-all duration-200 focus:ring-2 focus:ring-blue-400 focus:bg-white/40",
      className
    )}
  />
);