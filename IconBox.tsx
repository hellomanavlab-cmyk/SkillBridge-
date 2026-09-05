import { LucideIcon } from "lucide-react";

export default function IconBox({
  icon: Icon,
  label,
  sublabel,
}: {
  icon: LucideIcon;
  label: string;
  sublabel?: string;
}) {
  return (
    <div className="flex flex-col items-center gap-3 rounded-xl border border-border bg-white px-4 py-6 text-center transition-colors duration-150 hover:border-teal/40">
      <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-mint text-[#0d7568]">
        <Icon size={20} strokeWidth={1.75} aria-hidden="true" />
      </div>
      <div>
        <p className="text-sm font-semibold text-navy">{label}</p>
        {sublabel && <p className="mt-0.5 text-xs text-secondary">{sublabel}</p>}
      </div>
    </div>
  );
}
