import {
  LayoutGrid,
  ListChecks,
  ClipboardList,
  User,
  Activity,
  Settings,
  Search,
  Bell,
} from "lucide-react";

const sidebarItems = [
  { icon: LayoutGrid, label: "Dashboard", active: true },
  { icon: ListChecks, label: "Leads" },
  { icon: ClipboardList, label: "My Requirements" },
  { icon: User, label: "Profile" },
  { icon: Activity, label: "Activity" },
  { icon: Settings, label: "Settings" },
];

export default function DashboardMock() {
  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-white shadow-raised">
      <div className="flex">
        {/* Sidebar */}
        <div className="hidden w-[168px] shrink-0 border-r border-border bg-navy p-4 sm:block">
          <div className="mb-6 flex items-center gap-2 px-1">
            <span className="flex h-6 w-6 items-center justify-center rounded-md bg-teal text-[11px] font-bold text-white">
              S
            </span>
            <span className="text-[13px] font-semibold text-white">SkillBridge</span>
          </div>
          <nav className="space-y-1">
            {sidebarItems.map((item) => (
              <div
                key={item.label}
                className={`flex items-center gap-2.5 rounded-lg px-2.5 py-2 text-[12.5px] font-medium ${
                  item.active
                    ? "bg-white/10 text-white"
                    : "text-white/50"
                }`}
              >
                <item.icon size={14} strokeWidth={2} />
                {item.label}
              </div>
            ))}
          </nav>
        </div>

        {/* Main panel */}
        <div className="flex-1 p-4 sm:p-5">
          <div className="mb-4 flex items-center justify-between">
            <p className="text-[15px] font-bold text-navy">Dashboard</p>
            <div className="flex items-center gap-3">
              <div className="hidden items-center gap-1.5 rounded-lg border border-border px-2.5 py-1.5 text-xs text-secondary sm:flex">
                <Search size={12} />
                Search leads...
              </div>
              <Bell size={15} className="text-secondary" />
              <div className="h-6 w-6 rounded-full bg-mint" />
            </div>
          </div>

          <div className="rounded-xl border border-border p-4">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs font-medium text-secondary">Lead #SB-10482</p>
                <p className="mt-2 text-xs text-secondary">Business</p>
                <p className="text-[13.5px] font-semibold text-navy">Northstar Fitness</p>
              </div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-mint px-2.5 py-1 text-[11px] font-semibold text-[#0d7568]">
                <span className="h-1.5 w-1.5 rounded-full bg-teal" />
                Research Completed
              </span>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-4">
              <div>
                <p className="text-xs text-secondary">Industry</p>
                <p className="text-[13px] font-medium text-navy">Fitness &amp; Wellness</p>
              </div>
              <div>
                <p className="text-xs text-secondary">Website</p>
                <p className="text-[13px] font-medium text-navy">northstarfitness.ca</p>
              </div>
              <div>
                <p className="text-xs text-secondary">Location</p>
                <p className="text-[13px] font-medium text-navy">Toronto, Canada 🇨🇦</p>
              </div>
              <div>
                <p className="text-xs text-secondary">Lead Score</p>
                <div className="mt-1 flex items-center gap-2">
                  <div className="relative flex h-9 w-9 items-center justify-center rounded-full border-[3px] border-teal/30">
                    <span className="text-[11px] font-bold text-navy">78</span>
                  </div>
                  <span className="text-[11px] text-secondary">High Potential</span>
                </div>
              </div>
            </div>

            <div className="mt-4 border-t border-border pt-3">
              <p className="text-xs text-secondary">Potential Need</p>
              <p className="text-[13px] font-medium text-navy">Website Redesign</p>
              <p className="mt-2 text-xs text-secondary">Project Range</p>
              <p className="text-[13px] font-medium text-navy">$1,000 – $2,500</p>
            </div>

            <div className="mt-4 rounded-lg bg-background p-3">
              <p className="text-[11px] font-semibold text-secondary">Research Notes</p>
              <p className="mt-1 text-xs leading-relaxed text-navy/80">
                Existing website appears outdated and may benefit from a modern redesign.
              </p>
            </div>

            <div className="mt-4 flex justify-end">
              <button className="rounded-lg bg-teal px-3.5 py-1.5 text-xs font-semibold text-white">
                View Full Lead
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
