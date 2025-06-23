import React from "react";
import clsx from "clsx";

export interface GlassSwitchProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
  className?: string;
}

export const GlassSwitch: React.FC<GlassSwitchProps> = ({
  checked,
  onChange,
  label,
  className,
}) => (
  <label className={clsx("flex items-center gap-3 cursor-pointer select-none", className)}>
    <span className="relative inline-block w-12 h-7">
      <input
        type="checkbox"
        checked={checked}
        onChange={e => onChange(e.target.checked)}
        className="opacity-0 w-0 h-0 peer"
      />
      <span
        className={clsx(
          "absolute left-0 top-0 w-12 h-7 rounded-full bg-white/20 backdrop-blur-lg border border-white/30 transition peer-checked:bg-blue-400/40"
        )}
      />
      <span
        className={clsx(
          "absolute top-1 left-1 w-5 h-5 rounded-full bg-white/70 shadow transition-transform duration-200",
          checked ? "translate-x-5" : "translate-x-0"
        )}
      />
    </span>
    {label && <span className="text-white">{label}</span>}
  </label>
);