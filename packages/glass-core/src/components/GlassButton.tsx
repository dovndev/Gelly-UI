import React from "react";
import clsx from "clsx";

export interface GlassButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

export const GlassButton: React.FC<GlassButtonProps> = ({
  children,
  className,
  ...props
}) => {
  const [ripple, setRipple] = React.useState<{ x: number; y: number } | null>(null);

  return (
    <button
      {...props}
      className={clsx(
        "relative overflow-hidden rounded-xl px-6 py-2 bg-white/20 backdrop-blur-lg border border-white/30 shadow-lg text-black font-semibold transition-all duration-200 hover:bg-white/30 active:scale-95 focus:outline-none",
        className
      )}
      onClick={e => {
        const rect = e.currentTarget.getBoundingClientRect();
        setRipple({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
        if (props.onClick) props.onClick(e);
      }}
      onAnimationEnd={() => setRipple(null)}
    >
      {ripple && (
        <span
          className="absolute pointer-events-none rounded-full bg-white/40 animate-ripple"
          style={{
            left: ripple.x - 50,
            top: ripple.y - 50,
            width: 100,
            height: 100,
            opacity: 0.7,
          }}
        />
      )}
      {children}
      <style>{`
        .animate-ripple {
          animation: ripple 0.5s linear;
        }
        @keyframes ripple {
          from {
            transform: scale(0);
            opacity: 0.7;
          }
          to {
            transform: scale(2);
            opacity: 0;
          }
        }
      `}</style>
    </button>
  );
};