import React from "react";
import clsx from "clsx";

export interface GellyInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  className?: string;
}

export const GellyInput: React.FC<GellyInputProps> = ({
  label,
  className,
  ...props
}) => (
  <label className="block">
    {label && <span className="block mb-1 text-white font-medium">{label}</span>}
    <input
      className={clsx(
        "w-full px-4 py-2 rounded-xl bg-white/20 backdrop-blur-lg border border-white/30 shadow-inner text-black placeholder-black/50 outline-none transition-all duration-200 focus:ring-2 focus:ring-blue-400 focus:bg-white/40",
        className
      )}
      {...props}
    />
  </label>
);