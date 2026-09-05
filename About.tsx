import SectionHeading from "../components/ui/SectionHeading";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
import { MANAVLAB_URL, FOUNDER_PORTFOLIO_URL } from "../constants";

const workProjects = [
  { name: "Lead Capture System", desc: "A structured intake and qualification system for inbound opportunities." },
  { name: "PrintForge 3D", desc: "A product and ordering experience for on-demand 3D printing." },
  { name: "Growth Tracker", desc: "An internal tool for tracking milestones across early-stage projects." },
];

export default function About() {
  return (
    <>
      <section className="container-page pt-14 pb-6 sm:pt-20">
        <SectionHeading
          eyebrow="ABOUT SKILLBRIDGE"
          title="Built to make client discovery simpler."
          description="SkillBridge is a freelancer lead-generation and client-matching platform powered by ManavLab. It helps freelancers discover potential business opportunities through structured lead research and AI-assisted processes."
        />
      </section>

      <section className="container-page py-10 sm:py-14">
        <div className="grid gap-6 lg:grid-cols-2">
          <Card>
            <p className="text-xs font-semibold uppercase tracking-wide text-secondary">Built by ManavLab</p>
            <p className="mt-3 text-[15px] leading-relaxed text-navy/80">
              SkillBridge is powered by ManavLab, a team focused on building practical digital
              products and systems.
            </p>
            <div className="mt-5">
              <Button href={MANAVLAB_URL} variant="secondary">
                Visit ManavLab →
              </Button>
            </div>
          </Card>

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
        </div>
      </section>
    </>
  );
}
