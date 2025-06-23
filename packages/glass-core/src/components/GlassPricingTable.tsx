import React from "react";
import clsx from "clsx";
import { GlassButton } from "./GlassButton";

export interface GlassPricingTableProps {
  plans: { name: string; price: string; features: string[]; highlight?: boolean }[];
  className?: string;
}

export const GlassPricingTable: React.FC<GlassPricingTableProps> = ({
  plans,
  className,
}) => (
  <div className={clsx("flex gap-6 justify-center", className)}>
    {plans.map((plan, idx) => (
      <div
        key={plan.name}
        className={clsx(
          "flex-1 rounded-2xl bg-white/30 backdrop-blur-lg border border-white/30 shadow p-6 flex flex-col items-center",
          plan.highlight && "ring-2 ring-blue-400"
        )}
      >
        <div className="text-2xl font-bold mb-2">{plan.name}</div>
        <div className="text-3xl font-extrabold mb-4">{plan.price}</div>
        <ul className="mb-4 text-black/80">
          {plan.features.map(f => (
            <li key={f} className="mb-1">• {f}</li>
          ))}
        </ul>
        <GlassButton>Choose</GlassButton>
      </div>
    ))}
  </div>
);