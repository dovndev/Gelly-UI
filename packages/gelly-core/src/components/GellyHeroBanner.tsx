import React from "react";
import clsx from "clsx";

export interface GellyHeroBannerProps {
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
  className?: string;
}

export const GellyHeroBanner: React.FC<GellyHeroBannerProps> = ({
  title,
  subtitle,
  children,
  className,
}) => (
  <section className={clsx(
    "w-full py-16 px-8 rounded-3xl bg-white/20 backdrop-blur-lg border border-white/30 shadow flex flex-col items-center text-center",
    className
  )}>
    <h1 className="text-4xl font-extrabold text-white mb-4">{title}</h1>
    {subtitle && <p className="text-xl text-white/80 mb-6">{subtitle}</p>}
    {children}
  </section>
);