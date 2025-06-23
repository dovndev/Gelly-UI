import React from "react";
import clsx from "clsx";

export interface GlassPopoverProps {
  content: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

export const GlassPopover: React.FC<GlassPopoverProps> = ({
  content,
  children,
  className,
}) => {
  const [open, setOpen] = React.useState(false);
  return (
    <span className={clsx("relative inline-block", className)}>
      <span
        tabIndex={0}
        onClick={() => setOpen((v) => !v)}
        onBlur={() => setOpen(false)}
        className="cursor-pointer"
      >
        {children}
      </span>
      {open && (
        <span className="absolute left-1/2 -translate-x-1/2 top-full mt-2 px-4 py-3 rounded-xl bg-white/90 text-black shadow-lg border border-white/40 z-50 min-w-[180px]">
          {content}
        </span>
      )}
    </span>
  );
};