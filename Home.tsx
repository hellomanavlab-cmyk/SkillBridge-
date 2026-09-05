import {
  Search,
  Target,
  Send,
  ArrowRight,
  Code2,
  Palette,
  Megaphone,
  Bot,
  Smartphone,
  BarChart3,
  PenTool,
  UserCircle2,
  ClipboardList,
  Microscope,
  ClipboardCheck,
  Rocket,
  Compass,
  FlaskConical,
  Filter,
  FolderKanban,
  ShieldCheck,
  MapPin,
} from "lucide-react";
import Button from "../components/ui/Button";
import SectionHeading from "../components/ui/SectionHeading";
import IconBox from "../components/ui/IconBox";
import Card from "../components/ui/Card";
import DashboardMock from "../components/DashboardMock";
import LeadCard from "../components/LeadCard";
import WorldMap from "../components/WorldMap";
import PolicyCard from "../components/PolicyCard";
import { GOOGLE_FORM_URL, MANAVLAB_URL, FOUNDER_PORTFOLIO_URL } from "../constants";

const categories = [
  { icon: Code2, label: "Web Development" },
  { icon: Palette, label: "Design" },
  { icon: Megaphone, label: "Marketing" },
  { icon: Bot, label: "AI Automation" },
  { icon: Smartphone, label: "App Development" },
  { icon: BarChart3, label: "SEO" },
  { icon: PenTool, label: "Content" },
];

const problems = [
  {
    number: "01",
    icon: Search,
    title: "Finding",
    body: "Potential clients can take hours to discover manually.",
  },
  {
    number: "02",
    icon: Target,
    title: "Relevance",
    body: "Not every business is a suitable match for a freelancer's service.",
  },
  {
    number: "03",
    icon: Send,
    title: "Outreach",
    body: "Even after finding a prospect, starting the right conversation can be difficult.",
  },
];

const workflowSteps = [
  "Freelancer Profile",
  "Requirements",
  "Business Research",
  "Lead Review",
  "Lead Delivery",
  "Freelancer Outreach",
];

const howItWorks = [
  {
    number: "01",
    icon: UserCircle2,
    title: "Tell us what you offer",
    body: "Freelancers submit skills, services, portfolio and experience.",
  },
  {
    number: "02",
    icon: ClipboardList,
    title: "Define your ideal client",
    body: "Choose industries, countries, client types and preferred project requirements.",
  },
  {
    number: "03",
    icon: Microscope,
    title: "Business research",
    body: "SkillBridge researches businesses that may match the stated requirements.",
  },
  {
    number: "04",
    icon: ClipboardCheck,
    title: "Receive your leads",
    body: "Potential opportunities are organized into useful lead information.",
  },
  {
    number: "05",
    icon: Rocket,
    title: "Start your outreach",
    body: "The freelancer approaches the prospect professionally and independently.",
  },
];

const qualityStages = [
  { icon: Compass, title: "Discover", body: "We identify businesses based on your criteria." },
  { icon: FlaskConical, title: "Research", body: "We gather relevant information about the business." },
  { icon: Filter, title: "Filter", body: "We assess leads for relevance and potential need." },
  { icon: FolderKanban, title: "Organize", body: "We structure the findings into a usable lead." },
];

const freelancerCategories = [
  "Web Developers",
  "App Developers",
  "UI/UX Designers",
  "Graphic Designers",
  "Video Editors",
  "Digital Marketers",
  "SEO Specialists",
  "Copywriters",
  "AI & Automation Specialists",
  "Social Media Managers",
  "Content Creators",
  "Other Freelancers",
];

const exampleLead = {
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
};

const workProjects = [
  { name: "Lead Capture System", desc: "A structured intake and qualification system for inbound opportunities." },
  { name: "PrintForge 3D", desc: "A product and ordering experience for on-demand 3D printing." },
  { name: "Growth Tracker", desc: "An internal tool for tracking milestones across early-stage projects." },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="container-page pt-14 pb-16 sm:pt-20 sm:pb-20">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-10">
          <div>
            <p className="mb-4 text-sm font-semibold tracking-wide text-teal">
              CONNECTING FREELANCERS TO REAL OPPORTUNITIES
            </p>
            <h1 className="text-[36px] font-extrabold leading-[1.1] text-navy sm:text-[46px] lg:text-[50px]">
              Find Potential Clients.
              <br />
              Build Your Next Opportunity.
            </h1>
            <p className="mt-5 max-w-md text-[15.5px] leading-relaxed text-secondary sm:text-base">
              SkillBridge helps freelancers discover relevant business leads based on their
              skills, services, target market and project requirements.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href={GOOGLE_FORM_URL}>Get Started →</Button>
              <Button to="/how-it-works" variant="secondary">
                See How It Works
              </Button>
            </div>
          </div>

          <div>
            <DashboardMock />
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="border-y border-border bg-white py-14">
        <div className="container-page">
          <p className="mb-8 text-center text-[15px] font-semibold text-navy">
            Built for independent professionals.
          </p>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-7">
            {categories.map((c) => (
              <IconBox key={c.label} icon={c.icon} label={c.label} />
            ))}
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="container-page py-16 sm:py-20">
        <SectionHeading
          align="center"
          title="Finding clients shouldn't be your full-time job."
        />
        <div className="mx-auto mt-10 grid max-w-4xl gap-5 sm:grid-cols-3">
          {problems.map((p) => (
            <Card key={p.title} hover>
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-secondary">{p.number}</span>
                <p.icon size={18} className="text-teal" aria-hidden="true" />
              </div>
              <p className="mt-4 text-[15px] font-semibold text-navy">{p.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-secondary">{p.body}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Solution workflow */}
      <section className="bg-white py-16 sm:py-20">
        <div className="container-page">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <SectionHeading title="A clearer path from skills to opportunities." />
              <p className="mt-4 text-[15px] leading-relaxed text-secondary">
                SkillBridge makes client discovery simpler. We research, filter and organize
                potential business leads so you can focus on what you do best — building and
                delivering great work.
              </p>
              <div className="mt-6">
                <Button to="/how-it-works" variant="secondary">
                  Learn More
                </Button>
              </div>
            </div>

            <div className="flex flex-col items-stretch gap-2">
              {workflowSteps.map((step, index) => (
                <div key={step} className="flex items-center gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-mint text-xs font-bold text-[#0d7568]">
                    {index + 1}
                  </div>
                  <div className="flex-1 rounded-lg border border-border bg-background px-4 py-2.5 text-sm font-medium text-navy">
                    {step}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="container-page py-16 sm:py-20">
        <SectionHeading align="center" title="How SkillBridge Works" />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {howItWorks.map((step) => (
            <div key={step.title} className="rounded-xl border border-border bg-white p-5">
              <div className="flex items-center gap-2">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-navy text-[11px] font-bold text-white">
                  {step.number.replace("0", "")}
                </span>
              </div>
              <step.icon size={20} className="mt-4 text-teal" aria-hidden="true" />
              <p className="mt-3 text-[14.5px] font-semibold text-navy">{step.title}</p>
              <p className="mt-1.5 text-[13.5px] leading-relaxed text-secondary">{step.body}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <Button href={GOOGLE_FORM_URL}>Tell Us What You Need →</Button>
        </div>
      </section>

      {/* Lead preview */}
      <section className="bg-white py-16 sm:py-20">
        <div className="container-page">
          <SectionHeading align="center" title="See What a SkillBridge Lead Looks Like" />
          <div className="mx-auto mt-10 max-w-md">
            <div className="mb-3 flex justify-center">
              <span className="rounded-full bg-navy/[0.06] px-3 py-1 text-[11px] font-semibold tracking-wide text-navy">
                ILLUSTRATIVE EXAMPLE
              </span>
            </div>
            <LeadCard
              lead={{
                ...exampleLead,
                image:
                  "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1200&auto=format&fit=crop",
              }}
            />
          </div>
        </div>
      </section>

      {/* Lead quality */}
      <section className="container-page py-16 sm:py-20">
        <SectionHeading align="center" title="Research Before Delivery." />
        <div className="mx-auto mt-10 grid max-w-4xl gap-5 sm:grid-cols-4">
          {qualityStages.map((stage, i) => (
            <div key={stage.title} className="relative rounded-xl border border-border bg-white p-5 text-center">
              <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-lg bg-mint text-[#0d7568]">
                <stage.icon size={18} aria-hidden="true" />
              </div>
              <p className="mt-3 text-sm font-semibold text-navy">{stage.title}</p>
              <p className="mt-1.5 text-xs leading-relaxed text-secondary">{stage.body}</p>
              {i < qualityStages.length - 1 && (
                <ArrowRight
                  size={16}
                  className="absolute -right-3 top-1/2 hidden -translate-y-1/2 text-border sm:block"
                  aria-hidden="true"
                />
              )}
            </div>
          ))}
        </div>
        <p className="mx-auto mt-8 max-w-2xl text-center text-[14.5px] leading-relaxed text-secondary">
          SkillBridge researches and organizes potential leads according to the freelancer's
          stated criteria.
        </p>
        <div className="mt-6 flex justify-center">
          <Button to="/policies#lead-policy" variant="ghost">
            Read Lead Policy →
          </Button>
        </div>
      </section>

      {/* International opportunities */}
      <section className="bg-white py-16 sm:py-20">
        <div className="container-page">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <SectionHeading
                title="Think Beyond Your Local Market."
                description="International opportunities may be available depending on freelancer requirements, profile, availability and applicable policies."
              />
              <div className="mt-5 flex flex-wrap gap-2">
                {["USA", "Canada", "United Kingdom", "Australia", "UAE", "India", "Other markets"].map(
                  (country) => (
                    <span
                      key={country}
                      className="rounded-full border border-border bg-background px-3 py-1.5 text-xs font-medium text-navy"
                    >
                      {country}
                    </span>
                  )
                )}
              </div>
              <p className="mt-5 flex items-center gap-1.5 text-xs text-secondary">
                <MapPin size={13} aria-hidden="true" />
                International conversion is not guaranteed.
              </p>
            </div>
            <WorldMap />
          </div>
        </div>
      </section>

      {/* For freelancers */}
      <section className="container-page py-16 sm:py-20">
        <SectionHeading align="center" title="Built for Freelancers Across Digital Skills." />
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {freelancerCategories.map((cat) => (
            <div
              key={cat}
              className="rounded-lg border border-border bg-white px-4 py-4 text-center text-sm font-medium text-navy"
            >
              {cat}
            </div>
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <Button href={GOOGLE_FORM_URL}>Join SkillBridge →</Button>
        </div>
      </section>

      {/* Outreach */}
      <section className="bg-white py-16 sm:py-20">
        <div className="container-page">
          <div className="grid items-start gap-10 lg:grid-cols-2">
            <div>
              <SectionHeading
                title="Getting the Lead Is Step One."
                description="The freelancer is responsible for reaching out professionally. SkillBridge provides the research — how you approach the opportunity is up to you."
              />
              <div className="mt-6 flex flex-wrap items-center gap-2 text-sm font-medium text-navy">
                {["Lead", "Personalized Message", "Follow-up", "Conversation", "Potential Project"].map(
                  (step, i, arr) => (
                    <span key={step} className="flex items-center gap-2">
                      <span className="rounded-lg border border-border bg-background px-3 py-2 text-xs sm:text-sm">
                        {step}
                      </span>
                      {i < arr.length - 1 && <ArrowRight size={14} className="text-border" aria-hidden="true" />}
                    </span>
                  )
                )}
              </div>
            </div>

            <Card>
              <div className="flex items-center gap-2">
                <ShieldCheck size={18} className="text-teal" aria-hidden="true" />
                <p className="text-sm font-semibold text-navy">Professional Outreach Standards</p>
              </div>
              <ul className="mt-4 space-y-2.5 text-sm text-navy/80">
                <li>• Personalize your outreach.</li>
                <li>• Represent your skills honestly.</li>
                <li>• Avoid spam and mass unsolicited messaging.</li>
                <li>• Follow applicable laws and platform rules.</li>
                <li>• Use reasonable professional follow-up.</li>
              </ul>
              <div className="mt-5">
                <Button to="/policies#outreach-policy" variant="ghost">
                  View Outreach Policy →
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing teaser */}
      <section className="container-page py-16 sm:py-20">
        <SectionHeading
          align="center"
          title="Simple Plans. More Opportunities."
          description="Lead availability and quantity depend on the applicable package, requirements, availability, qualification criteria and SkillBridge policies."
        />
        <div className="mt-10 flex justify-center">
          <Button to="/pricing" variant="secondary">
            View Pricing
          </Button>
        </div>
      </section>

      {/* Transparency */}
      <section className="bg-navy py-16 sm:py-20">
        <div className="container-page">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-[26px] font-bold leading-tight text-white sm:text-[32px]">
                A lead is an opportunity, not a guarantee.
              </h2>
              <p className="mt-4 max-w-md text-[14.5px] leading-relaxed text-white/70">
                Conversion depends on factors including outreach quality, portfolio, pricing,
                communication, follow-up, market conditions and the prospect's own needs and
                decision-making.
              </p>
              <div className="mt-6">
                <Button to="/disclaimer">Read Full Disclaimer →</Button>
              </div>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-6">
              <p className="text-sm font-semibold text-white/80">SkillBridge does NOT guarantee:</p>
              <ul className="mt-4 grid grid-cols-2 gap-3 text-[13.5px] text-white/70">
                {["Client response", "Meeting", "Project", "Sale", "Revenue", "Income", "Conversion rate"].map(
                  (item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-teal" />
                      {item}
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* About + Founder */}
      <section className="container-page py-16 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading title="Built to make client discovery simpler." />
            <p className="mt-4 text-[15px] leading-relaxed text-secondary">
              SkillBridge is a freelancer lead-generation and client-matching platform powered
              by ManavLab. It helps freelancers discover potential business opportunities
              through structured lead research and AI-assisted processes.
            </p>
            <div className="mt-6">
              <Button to="/about" variant="secondary">
                About SkillBridge
              </Button>
            </div>
          </div>

          <Card>
            <p className="text-xs font-semibold uppercase tracking-wide text-secondary">
              The person behind the platform
            </p>
            <p className="mt-3 text-[17px] font-bold text-navy">Manav Rupesh Tambatkar</p>
            <p className="text-sm text-secondary">Founder &amp; CEO, ManavLab</p>
            <p className="mt-3 text-sm leading-relaxed text-navy/80">
              Founder of ManavLab and builder of digital products, systems and technology
              projects.
            </p>
            <div className="mt-5">
              <Button href={FOUNDER_PORTFOLIO_URL} variant="ghost">
                View Founder Portfolio →
              </Button>
            </div>
          </Card>
        </div>
      </section>

      {/* Selected work */}
      <section className="bg-white py-16 sm:py-20">
        <div className="container-page">
          <SectionHeading
            title="Selected work / ecosystem"
            description="A few things built by ManavLab, the team behind SkillBridge."
          />
          <div className="mt-8 grid gap-5 sm:grid-cols-3">
            {workProjects.map((project) => (
              <Card key={project.name} hover>
                <p className="text-[15px] font-semibold text-navy">{project.name}</p>
                <p className="mt-2 text-sm leading-relaxed text-secondary">{project.desc}</p>
              </Card>
            ))}
          </div>
          <div className="mt-6">
            <Button href={MANAVLAB_URL} variant="ghost">
              Visit ManavLab →
            </Button>
          </div>
        </div>
      </section>

      {/* Policies preview */}
      <section className="container-page py-16 sm:py-20">
        <SectionHeading align="center" title="Policies & Standards" />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <PolicyCard
            id="lead-policy"
            title="Freelancer Lead Policy"
            description="A lead is an opportunity, not a guaranteed client, meeting, project or sale."
          />
          <PolicyCard
            id="outreach-policy"
            title="Freelancer Outreach Policy"
            description="Outreach must be professional, respectful, relevant and personalized."
          />
          <PolicyCard
            id="international-lead-policy"
            title="International Lead Policy"
            description="International leads may include markets such as USA, Canada, UK and Australia where legally and operationally appropriate."
          />
        </div>
        <div className="mt-8 flex justify-center">
          <Button to="/policies" variant="secondary">
            View All Policies
          </Button>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-navy py-16 sm:py-20">
        <div className="container-page text-center">
          <h2 className="text-[26px] font-bold text-white sm:text-[32px]">
            Tell us who you want to work with.
          </h2>
          <p className="mx-auto mt-3 max-w-md text-[14.5px] text-white/70">
            Share your skills, target market and requirements. We'll use that information to
            find relevant opportunities for you.
          </p>
          <div className="mt-7">
            <Button href={GOOGLE_FORM_URL}>Join SkillBridge →</Button>
          </div>
        </div>
      </section>
    </>
  );
}
