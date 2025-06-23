import React from "react";
import clsx from "clsx";

export interface GlassModalProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
  className?: string;
}

export const GlassModal: React.FC<GlassModalProps> = ({
  open,
  onClose,
  children,
  className,
}) => {
  if (!open) return null;
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className={clsx(
          "rounded-3xl bg-white/20 backdrop-blur-xl border border-white/30 shadow-2xl p-8 max-w-lg w-full relative transition-all duration-300",
          className
        )}
        onClick={e => e.stopPropagation()}
      >
        {children}
        <button
          className="absolute top-4 right-4 text-white text-xl"
          onClick={onClose}
          aria-label="Close"
        >
          ×
        </button>
      </div>
    </div>
  );
};