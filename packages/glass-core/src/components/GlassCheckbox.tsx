import React from "react";
import clsx from "clsx";

export interface GlassCheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  className?: string;
}

export const GlassCheckbox: React.FC<GlassCheckboxProps> = ({
  label,
  className,
  ...props
}) => (
  <label className={clsx("flex items-center gap-3 cursor-pointer select-none", className)}>
    <span className="relative inline-block w-6 h-6">
      <input
        type="checkbox"
        className="opacity-0 w-6 h-6 peer"
        {...props}
      />
      <span
        className={clsx(
          "absolute left-0 top-0 w-6 h-6 rounded-md bg-white/20 backdrop-blur-lg border border-white/30 transition peer-checked:bg-blue-400/40 flex items-center justify-center"
        )}
      >
        <svg
          className={clsx(
            "w-4 h-4 text-blue-600 opacity-0 transition-opacity duration-150",
            props.checked && "opacity-100"
          )}
          fill="none"
          stroke="currentColor"
          strokeWidth={3}
          viewBox="0 0 24 24"
        >
          <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
    </span>
    {label && <span className="text-white">{label}</span>}
  </label>
);