import React from "react";
import clsx from "clsx";

export interface GlassSearchBarProps {
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  className?: string;
}

export const GlassSearchBar: React.FC<GlassSearchBarProps> = ({
  value,
  onChange,
  placeholder,
  className,
}) => {
  const [focus, setFocus] = React.useState(false);
  return (
    <div className={clsx(
      "flex items-center rounded-xl bg-white/20 backdrop-blur-lg border border-white/30 shadow px-4 py-2 transition-all",
      focus && "ring-2 ring-blue-400 bg-white/40",
      className
    )}>
      <svg className="w-5 h-5 text-gray-700 mr-2" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <circle cx={11} cy={11} r={8} />
        <line x1={21} y1={21} x2={16.65} y2={16.65} />
      </svg>
      <input
        className="bg-transparent outline-none w-full text-black"
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder={placeholder}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
      />
    </div>
  );
};