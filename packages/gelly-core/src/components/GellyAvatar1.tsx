import React from "react";
import clsx from "clsx";

export interface GellyAvatar1Props {
  src?: string;
  alt?: string;
  size?: number;
  className?: string;
  children?: React.ReactNode;
}

export const GellyAvatar1: React.FC<GellyAvatar1Props> = ({
  src,
  alt,
  size = 48,
  className,
  children,
}) => (
  <span
    className={clsx(
      "inline-flex items-center justify-center rounded-full bg-white/30 backdrop-blur-lg border border-white/30 shadow",
      className
    )}
    style={{ width: size, height: size, fontSize: size / 2 }}
  >
    {src ? (
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover rounded-full"
        style={{ width: size, height: size }}
      />
    ) : (
      children || <span className="text-black font-bold">{alt?.[0] || "?"}</span>
    )}
  </span>
);