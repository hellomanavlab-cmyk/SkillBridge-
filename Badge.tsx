import { ReactNode } from "react";

type Tone = "teal" | "navy" | "neutral";

const toneClasses: Record<Tone, string> = {
  teal: "bg-mint text-[#0d7568]",
  navy: "bg-navy/[0.06] text-navy",
  neutral: "bg-border/50 text-secondary",
};

export default function Badge({
  children,
  tone = "teal",
  dot = false,
}: {
  children: ReactNode;
  tone?: Tone;
  dot?: boolean;
}) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold ${toneClasses[tone]}`}
    >
      {dot && (
        <span
          className={`h-1.5 w-1.5 rounded-full ${
            tone === "teal" ? "bg-teal" : "bg-current"
          }`}
        />
      )}
      {children}
    </span>
  );
}
