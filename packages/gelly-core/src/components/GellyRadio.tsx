import React from "react";
import clsx from "clsx";

export interface GellyRadioProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  className?: string;
}

export const GellyRadio: React.FC<GellyRadioProps> = ({
  label,
  className,
  ...props
}) => (
  <label className={clsx("flex items-center gap-3 cursor-pointer select-none", className)}>
    <span className="relative inline-block w-6 h-6">
      <input
        type="radio"
        className="opacity-0 w-6 h-6 peer"
        {...props}
      />
      <span
        className={clsx(
          "absolute left-0 top-0 w-6 h-6 rounded-full bg-white/20 backdrop-blur-lg border border-white/30 transition peer-checked:bg-blue-400/40 flex items-center justify-center"
        )}
      >
        <span
          className={clsx(
            "w-3 h-3 rounded-full bg-blue-600 opacity-0 transition-opacity duration-150",
            props.checked && "opacity-100"
          )}
        />
      </span>
    </span>
    {label && <span className="text-white">{label}</span>}
  </label>
);