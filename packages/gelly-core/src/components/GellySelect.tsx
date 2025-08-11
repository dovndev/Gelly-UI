import React from "react";
import clsx from "clsx";

export interface GellySelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  className?: string;
  options: { label: string; value: string }[];
}

export const GellySelect: React.FC<GellySelectProps> = ({
  label,
  className,
  options,
  ...props
}) => (
  <label className="block">
    {label && <span className="block mb-1 text-white font-medium">{label}</span>}
    <select
      className={clsx(
        "w-full px-4 py-2 rounded-xl bg-white/20 backdrop-blur-lg border border-white/30 shadow-inner text-black outline-none transition-all duration-200 focus:ring-2 focus:ring-blue-400 focus:bg-white/40",
        className
      )}
      {...props}
    >
      {options.map(opt => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  </label>
);