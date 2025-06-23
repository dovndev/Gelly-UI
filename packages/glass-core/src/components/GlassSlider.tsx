import React from "react";
import clsx from "clsx";

export interface GlassSliderProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  className?: string;
}

export const GlassSlider: React.FC<GlassSliderProps> = ({
  label,
  className,
  ...props
}) => (
  <label className="block">
    {label && <span className="block mb-1 text-white font-medium">{label}</span>}
    <input
      type="range"
      className={clsx(
        "w-full h-2 rounded-lg appearance-none bg-white/20 backdrop-blur-lg border border-white/30 shadow-inner outline-none transition-all duration-200 focus:ring-2 focus:ring-blue-400",
        className
      )}
      {...props}
      style={{
        ...props.style,
        accentColor: "#60a5fa", // Tailwind blue-400
      }}
    />
  </label>
);