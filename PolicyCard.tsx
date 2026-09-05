import { ArrowRight, FileText } from "lucide-react";
import { POLICY_EFFECTIVE_DATE, POLICY_VERSION } from "../constants";

export default function PolicyCard({
  id,
  title,
  description,
}: {
  id: string;
  title: string;
  description: string;
}) {
  return (
    <div id={id} className="scroll-mt-24 rounded-xl border border-border bg-white p-6">
      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-mint text-[#0d7568]">
        <FileText size={18} aria-hidden="true" />
      </div>
      <h3 className="mt-4 text-[16px] font-semibold text-navy">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-secondary">{description}</p>
      <div className="mt-4 flex items-center gap-3 text-xs text-secondary">
        <span>Effective Date: {POLICY_EFFECTIVE_DATE}</span>
        <span aria-hidden="true">•</span>
        <span>Version: {POLICY_VERSION}</span>
      </div>
      <a
        href="#"
        className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-teal hover:underline"
      >
        Read Policy <ArrowRight size={14} aria-hidden="true" />
      </a>
    </div>
  );
}
