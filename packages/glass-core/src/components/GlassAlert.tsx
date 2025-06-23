import React from "react";
import clsx from "clsx";

export interface GlassAlertProps {
  children: React.ReactNode;
  type?: "info" | "success" | "warning" | "error";
  className?: string;
}

const typeMap = {
  info: "bg-blue-400/20 text-blue-900 border-blue-300",
  success: "bg-green-400/20 text-green-900 border-green-300",
  warning: "bg-yellow-300/20 text-yellow-900 border-yellow-200",
  error: "bg-red-400/20 text-red-900 border-red-300",
};

export const GlassAlert: React.FC<GlassAlertProps> = ({
  children,
  type = "info",
  className,
}) => (
  <div
    className={clsx(
      "w-full px-4 py-3 rounded-xl backdrop-blur-lg border shadow font-medium",
      typeMap[type],
      className
    )}
    role="alert"
  >
    {children}
  </div>
);