import React from "react";
import clsx from "clsx";

export interface GlassToastProps {
  show: boolean;
  message: React.ReactNode;
  onClose: () => void;
  duration?: number; // ms
  className?: string;
}

export const GlassToast: React.FC<GlassToastProps> = ({
  show,
  message,
  onClose,
  duration = 3000,
  className,
}) => {
  React.useEffect(() => {
    if (show) {
      const timer = setTimeout(onClose, duration);
      return () => clearTimeout(timer);
    }
  }, [show, duration, onClose]);

  return (
    <>
      {show && (
        <div
          className={clsx(
            "fixed bottom-8 left-1/2 -translate-x-1/2 z-50 px-6 py-3 rounded-xl bg-white/30 backdrop-blur-lg border border-white/40 shadow-lg text-black font-medium flex items-center gap-2",
            "transition-all duration-300",
            className
          )}
        >
          {message}
          <button
            className="ml-4 text-black/60 hover:text-black text-lg"
            onClick={onClose}
            aria-label="Close"
          >
            &times;
          </button>
        </div>
      )}
    </>
  );
};