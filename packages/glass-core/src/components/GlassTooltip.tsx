import React from "react";
import clsx from "clsx";

export interface GlassTooltipProps {
  content: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  placement?: "top" | "bottom" | "left" | "right";
}

export const GlassTooltip: React.FC<GlassTooltipProps> = ({
  content,
  children,
  className,
  placement = "top",
}) => {
  const [open, setOpen] = React.useState(false);

  return (
    <span
      className="relative inline-block"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onFocus={() => setOpen(true)}
      onBlur={() => setOpen(false)}
      tabIndex={0}
    >
      {children}
      {open && (
        <div
          className={clsx(
            "absolute z-50 px-3 py-2 rounded-xl bg-white/20 backdrop-blur-lg border border-white/30 shadow-lg text-black text-sm font-medium whitespace-nowrap",
            {
              "bottom-full left-1/2 -translate-x-1/2 mb-2": placement === "top",
              "top-full left-1/2 -translate-x-1/2 mt-2": placement === "bottom",
              "right-full top-1/2 -translate-y-1/2 mr-2": placement === "left",
              "left-full top-1/2 -translate-y-1/2 ml-2": placement === "right",
            },
            className
          )}
        >
          {content}
          {/* Arrow */}
          <span
            className={clsx(
              "absolute w-3 h-3 bg-white/20 border border-white/30 rotate-45",
              {
                "left-1/2 -translate-x-1/2 bottom-[-0.4rem]": placement === "top",
                "left-1/2 -translate-x-1/2 top-[-0.4rem]": placement === "bottom",
                "top-1/2 -translate-y-1/2 right-[-0.4rem]": placement === "left",
                "top-1/2 -translate-y-1/2 left-[-0.4rem]": placement === "right",
              }
            )}
            style={{ zIndex: -1 }}
          />
        </div>
      )}
    </span>
  );
};