import { Globe } from "lucide-react";
import Badge from "./ui/Badge";

export interface LeadData {
  id: string;
  business: string;
  industry: string;
  location: string;
  flag: string;
  need: string;
  website: string;
  budget: string;
  status: string;
  reason: string;
  image?: string;
}

export default function LeadCard({ lead }: { lead: LeadData }) {
  return (
    <div className="overflow-hidden rounded-xl border border-border bg-white shadow-card">
      {lead.image && (
        <div className="relative h-44 w-full overflow-hidden bg-mint sm:h-56">
          <img
            src={lead.image}
            alt={`${lead.business} business premises, illustrative example`}
            loading="lazy"
            className="h-full w-full object-cover"
          />
          <span className="absolute right-3 top-3 rounded-full bg-navy/85 px-2.5 py-1 text-[10px] font-semibold tracking-wide text-white">
            SkillBridge Lead #{lead.id}
          </span>
        </div>
      )}

      <div className="grid grid-cols-2 gap-x-6 gap-y-4 p-5 sm:p-6">
        <div>
          <p className="text-xs text-secondary">Business</p>
          <p className="text-[14.5px] font-semibold text-navy">{lead.business}</p>
        </div>
        <div>
          <p className="text-xs text-secondary">Potential Need</p>
          <p className="text-[14.5px] font-semibold text-navy">{lead.need}</p>
        </div>
        <div>
          <p className="text-xs text-secondary">Industry</p>
          <p className="text-[14.5px] font-medium text-navy">{lead.industry}</p>
        </div>
        <div>
          <p className="text-xs text-secondary">Project Range</p>
          <p className="text-[14.5px] font-medium text-navy">{lead.budget}</p>
        </div>
        <div>
          <p className="text-xs text-secondary">Location</p>
          <p className="text-[14.5px] font-medium text-navy">
            {lead.location} {lead.flag}
          </p>
        </div>
        <div>
          <p className="text-xs text-secondary">Research Status</p>
          <Badge tone="teal" dot>
            {lead.status}
          </Badge>
        </div>

        <div className="col-span-2 flex items-center gap-2 border-t border-border pt-4 text-sm text-secondary">
          <Globe size={14} aria-hidden="true" />
          <a
            href={`https://${lead.website}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-teal"
          >
            {lead.website}
          </a>
        </div>

        <div className="col-span-2 rounded-lg bg-background p-4">
          <p className="text-xs font-semibold text-secondary">Why this lead may be relevant</p>
          <p className="mt-1 text-sm leading-relaxed text-navy/80">{lead.reason}</p>
        </div>
      </div>

      <div className="border-t border-border bg-background px-5 py-3 text-center text-xs font-medium text-secondary sm:px-6">
        Potential opportunity, not a guaranteed client.
      </div>
    </div>
  );
}
