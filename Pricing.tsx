import SectionHeading from "../components/ui/SectionHeading";
import PricingCard from "../components/PricingCard";

const plans = [
  {
    name: "Starter",
    leadCount: "15 Leads",
    price: "₹299",
    features: [
      "15 researched leads",
      "Business profile & research notes",
      "Standard turnaround",
    ],
  },
  {
    name: "Growth",
    leadCount: "50 Leads",
    price: "₹499",
    popular: true,
    features: [
      "50 researched leads",
      "Business profile & research notes",
      "Priority queue placement",
      "Access to broader industry range",
    ],
  },
  {
    name: "Pro",
    leadCount: "100 Leads",
    price: "₹799",
    features: [
      "100 researched leads",
      "Business profile & research notes",
      "Priority queue placement",
      "Access to international markets, where applicable",
    ],
  },
];

export default function Pricing() {
  return (
    <>
      <section className="container-page pt-14 pb-6 text-center sm:pt-20">
        <SectionHeading align="center" title="Simple Plans. More Opportunities." />
      </section>

      <section className="container-page py-10 sm:py-14">
        <div className="grid gap-6 sm:grid-cols-3">
          {plans.map((plan) => (
            <PricingCard key={plan.name} plan={plan} />
          ))}
        </div>

        <p className="mx-auto mt-10 max-w-2xl text-center text-[13.5px] leading-relaxed text-secondary">
          Lead availability and quantity depend on the applicable package, requirements,
          availability, qualification criteria and SkillBridge policies. Purchasing a package
          does not guarantee clients, meetings, projects or revenue.
        </p>
      </section>
    </>
  );
}
