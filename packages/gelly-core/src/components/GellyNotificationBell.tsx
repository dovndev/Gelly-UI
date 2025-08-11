import React from "react";
import clsx from "clsx";

export interface GellyNotificationBellProps {
  count?: number;
  className?: string;
}

export const GellyNotificationBell: React.FC<GellyNotificationBellProps> = ({
  count,
  className,
}) => (
  <span className={clsx("relative inline-block", className)}>
    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 backdrop-blur-lg border border-white/30 shadow">
      <svg width={24} height={24} fill="none" stroke="currentColor" strokeWidth={2} className="text-blue-700">
        <path d="M12 22c1.1 0 2-.9 2-2H10a2 2 0 002 2zm6-6V11c0-3.07-1.63-5.64-5-6.32V4a1 1 0 10-2 0v.68C7.63 5.36 6 7.92 6 11v5l-1 1v1h16v-1l-1-1z" />
      </svg>
    </span>
    {count && count > 0 && (
      <span className="absolute top-0 right-0 -mt-1 -mr-1 bg-red-500 text-white text-xs rounded-full px-2 py-0.5 shadow">
        {count}
      </span>
    )}
  </span>
);