import React from "react";
import clsx from "clsx";

export interface GellyDropdownProps {
  label: React.ReactNode;
  items: { label: React.ReactNode; onClick: () => void }[];
  className?: string;
}

export const GellyDropdown: React.FC<GellyDropdownProps> = ({
  label,
  items,
  className,
}) => {
  const [open, setOpen] = React.useState(false);
  const buttonRef = React.useRef<HTMLButtonElement>(null);

  React.useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent) => {
      if (
        buttonRef.current &&
        !buttonRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open]);

  return (
    <div className={clsx("relative inline-block", className)}>
      <button
        ref={buttonRef}
        className="px-4 py-2 rounded-xl bg-white/20 backdrop-blur-lg border border-white/30 shadow-md text-black font-semibold flex items-center gap-2 transition hover:bg-white/30"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="true"
        aria-expanded={open}
      >
        {label}
        <span className={clsx("transition-transform", open && "rotate-180")}>▼</span>
      </button>
      {open && (
        <ul className="absolute left-0 mt-2 min-w-full rounded-xl bg-white/30 backdrop-blur-lg border border-white/30 shadow-lg py-2 z-50">
          {items.map((item, idx) => (
            <li key={idx}>
              <button
                className="w-full text-left px-4 py-2 bg-transparent hover:bg-white/40 rounded-lg text-black transition"
                onClick={() => {
                  setOpen(false);
                  item.onClick();
                }}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};