import React from "react";
import clsx from "clsx";

export interface GlassNotificationCenterProps {
  notifications: { message: string; read?: boolean }[];
  className?: string;
}

export const GlassNotificationCenter: React.FC<GlassNotificationCenterProps> = ({
  notifications,
  className,
}) => (
  <div className={clsx(
    "w-80 rounded-2xl bg-white/30 backdrop-blur-lg border border-white/30 shadow p-4",
    className
  )}>
    <h3 className="text-lg font-bold mb-3 text-black">Notifications</h3>
    <ul className="space-y-2">
      {notifications.map((n, idx) => (
        <li
          key={idx}
          className={clsx(
            "px-3 py-2 rounded-lg",
            n.read ? "bg-white/40 text-gray-700" : "bg-blue-400/30 text-blue-900 font-semibold"
          )}
        >
          {n.message}
        </li>
      ))}
    </ul>
  </div>
);