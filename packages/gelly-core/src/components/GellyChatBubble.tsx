import React from "react";
import clsx from "clsx";

export interface GellyChatBubbleProps {
  message: string;
  fromMe?: boolean;
  className?: string;
}

export const GellyChatBubble: React.FC<GellyChatBubbleProps> = ({
  message,
  fromMe,
  className,
}) => (
  <div className={clsx(
    "max-w-xs px-4 py-2 rounded-2xl shadow border border-white/30 backdrop-blur-lg",
    fromMe
      ? "bg-blue-400/30 text-blue-900 ml-auto"
      : "bg-white/30 text-black mr-auto",
    className
  )}>
    {message}
  </div>
);