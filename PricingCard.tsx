import { Check } from "lucide-react";
import Button from "./ui/Button";
import { GOOGLE_FORM_URL } from "../constants";

export interface PricingPlan {
  name: string;
  leadCount: string;
  price: string;
  features: string[];
  popular?: boolean;
}

export default function PricingCard({ plan }: { plan: PricingPlan }) {
  return (
    <div
      className={`relative flex flex-col rounded-2xl border bg-white p-7 ${
        plan.popular ? "border-teal shadow-raised" : "border-border shadow-card"
      }`}
    >
      {plan.popular && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-teal px-3 py-1 text-[11px] font-semibold text-white">
          Most Popular
        </span>
      )}

      <p className="text-sm font-semibold text-secondary">{plan.name}</p>
      <p className="mt-1 text-lg font-bold text-navy">{plan.leadCount}</p>

      <div className="mt-4 flex items-baseline gap-1">
        <span className="text-3xl font-extrabold text-navy">{plan.price}</span>
        <span className="text-sm text-secondary">one-time</span>
      </div>

      <ul className="mt-6 space-y-3">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2.5 text-sm text-navy/80">
            <Check size={16} className="mt-0.5 shrink-0 text-teal" aria-hidden="true" />
            {feature}
          </li>
        ))}
      </ul>

      <div className="mt-7">
        <Button href={GOOGLE_FORM_URL} variant={plan.popular ? "primary" : "secondary"} className="w-full">
          Get Started
        </Button>
      </div>
    </div>
  );
}
