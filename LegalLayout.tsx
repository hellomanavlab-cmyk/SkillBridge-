import { ReactNode } from "react";
import { POLICY_EFFECTIVE_DATE, POLICY_VERSION } from "../constants";

export default function LegalLayout({
  title,
  intro,
  children,
}: {
  title: string;
  intro?: string;
  children: ReactNode;
}) {
  return (
    <section className="container-page py-14 sm:py-20">
      <div className="max-w-2xl">
        <h1 className="text-[28px] font-bold text-navy sm:text-[34px]">{title}</h1>
        <div className="mt-3 flex items-center gap-3 text-xs text-secondary">
          <span>Effective Date: {POLICY_EFFECTIVE_DATE}</span>
          <span aria-hidden="true">•</span>
          <span>Version: {POLICY_VERSION}</span>
        </div>
        {intro && <p className="mt-5 text-[15px] leading-relaxed text-secondary">{intro}</p>}
      </div>

      <div className="prose-legal mt-10 max-w-2xl space-y-8">{children}</div>
    </section>
  );
}

export function LegalSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div>
      <h2 className="text-[17px] font-semibold text-navy">{title}</h2>
      <div className="mt-2 space-y-2 text-[14.5px] leading-relaxed text-secondary">
        {children}
      </div>
    </div>
  );
}
