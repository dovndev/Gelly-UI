import React from "react";
import clsx from "clsx";

export interface GellyStepperProps {
  steps: string[];
  activeStep: number;
  className?: string;
}

export const GellyStepper: React.FC<GellyStepperProps> = ({
  steps,
  activeStep,
  className,
}) => (
  <div
    className={clsx(
      "flex items-center gap-4 px-4 py-4 rounded-xl bg-white/20 backdrop-blur-lg border border-white/30 shadow",
      className
    )}
  >
    {steps.map((step, idx) => (
      <React.Fragment key={step}>
        <div className="flex flex-col items-center">
          <div
            className={clsx(
              "w-8 h-8 rounded-full flex items-center justify-center font-bold text-white transition",
              idx < activeStep
                ? "bg-blue-400/80 border-2 border-blue-500"
                : idx === activeStep
                ? "bg-blue-600/90 border-2 border-blue-700 scale-110"
                : "bg-white/30 border-2 border-white/40"
            )}
          >
            {idx + 1}
          </div>
          <span
            className={clsx(
              "mt-2 text-xs font-medium",
              idx === activeStep ? "text-blue-900" : "text-gray-700"
            )}
          >
            {step}
          </span>
        </div>
        {idx < steps.length - 1 && (
          <div className="flex-1 h-1 bg-white/40 rounded" />
        )}
      </React.Fragment>
    ))}
  </div>
);