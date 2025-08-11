import React from "react";
import clsx from "clsx";

export interface GellyAvatarProps {
  src: string;
  alt?: string;
  size?: number;
  status?: "online" | "offline" | "busy";
  className?: string;
}

const statusColors = {
  online: "bg-green-400",
  offline: "bg-gray-400",
  busy: "bg-red-400",
};

export const GellyAvatar: React.FC<GellyAvatarProps> = ({
  src,
  alt = "",
  size = 56,
  status,
  className,
}) => (
  <div
    className={clsx(
      "relative rounded-full bg-white/20 backdrop-blur-lg border border-white/30 shadow-lg overflow-hidden",
      className
    )}
    style={{ width: size, height: size }}
  >
    <img
      src={src}
      alt={alt}
      className="w-full h-full object-cover"
      draggable={false}
    />
    {status && (
      <span
        className={clsx(
          "absolute bottom-1 right-1 w-4 h-4 rounded-full border-2 border-white animate-pulse",
          statusColors[status]
        )}
      />
    )}
  </div>
);