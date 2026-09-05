import { Compass, FlaskConical, Filter, FolderKanban } from "lucide-react";
import SectionHeading from "../components/ui/SectionHeading";
import LeadCard from "../components/LeadCard";
import Button from "../components/ui/Button";

const stages = [
  { icon: Compass, title: "Discover", body: "We identify businesses based on your stated criteria." },
  { icon: FlaskConical, title: "Research", body: "We gather relevant, publicly available information about the business." },
  { icon: Filter, title: "Filter", body: "We assess each business for relevance and potential need." },
  { icon: FolderKanban, title: "Organize", body: "We structure the findings into a usable, readable lead." },
];

const exampleLeads = [
  {
    id: "10482",
    business: "Northstar Fitness",
    industry: "Fitness & Wellness",
    location: "Toronto, Canada",
    flag: "🇨🇦",
    need: "Website Redesign",
    website: "northstarfitness.ca",
    budget: "$1,000 – $2,500",
    status: "Research Completed",
    reason: "Existing website appears outdated and may benefit from a modern redesign.",
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "10511",
    business: "Cedar & Co. Interiors",
    industry: "Home & Interior Design",
    location: "Austin, USA",
    flag: "🇺🇸",
    need: "Brand Identity & Logo",
    website: "cedarandco.example",
    budget: "$500 – $1,200",
    status: "Research Completed",
    reason: "Business is expanding into a new city and currently has no consistent visual branding.",
    image:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function Leads() {
  return (
    <>
      <section className="container-page pt-14 pb-6 sm:pt-20">
        <SectionHeading
          eyebrow="LEAD EXAMPLES"
          title="See What a SkillBridge Lead Looks Like"
          description="Every lead is organized the same way — business profile, industry, location, potential need, research notes and status — so you can quickly judge whether it's worth pursuing."
        />
        <div className="mt-4">
          <span className="rounded-full bg-navy/[0.06] px-3 py-1 text-[11px] font-semibold tracking-wide text-navy">
            ILLUSTRATIVE EXAMPLES — NOT REAL CLIENTS
          </span>
        </div>
      </section>

      <section className="container-page py-10 sm:py-14">
        <div className="grid gap-8 sm:grid-cols-2">
          {exampleLeads.map((lead) => (
            <LeadCard key={lead.id} lead={lead} />
          ))}
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="container-page">
          <SectionHeading align="center" title="Research Before Delivery." />
          <div className="mx-auto mt-10 grid max-w-4xl gap-5 sm:grid-cols-4">
            {stages.map((stage) => (
              <div key={stage.title} className="rounded-xl border border-border bg-white p-5 text-center">
                <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-lg bg-mint text-[#0d7568]">
                  <stage.icon size={18} aria-hidden="true" />
                </div>
                <p className="mt-3 text-sm font-semibold text-navy">{stage.title}</p>
                <p className="mt-1.5 text-xs leading-relaxed text-secondary">{stage.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-16 sm:py-20">
        <div className="mx-auto max-w-2xl rounded-xl border border-border bg-white p-7">
          <p className="text-[15px] font-semibold text-navy">Lead Policy, in short</p>
          <ul className="mt-4 space-y-3 text-sm leading-relaxed text-secondary">
            <li>
              <span className="font-semibold text-navy">A Lead</span> is an opportunity to
              approach a potential client.
            </li>
            <li>
              <span className="font-semibold text-navy">A Valid Lead</span> reasonably matches
              the agreed targeting criteria and contains sufficiently useful contact or
              business information.
            </li>
            <li>
              <span className="font-semibold text-navy">An Invalid Lead</span> contains
              materially incorrect information, is clearly unrelated to the agreed target, or
              fails applicable qualification criteria.
            </li>
            <li>
              A <span className="font-semibold text-navy">Non-Responsive Lead</span> is not
              automatically an Invalid Lead.
            </li>
          </ul>
          <div className="mt-6">
            <Button to="/policies#lead-policy" variant="ghost">
              Read Full Lead Policy →
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
