// packages/glass-core/src/components/GlassCard.tsx
import clsx from "clsx";

export const GlassCard: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className }) => {
  return (
    <div
      className={clsx(
        "rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-xl",
        "transition-all duration-300",
        className
      )}
    >
      {children}
    </div>
  );
};
