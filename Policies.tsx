import SectionHeading from "../components/ui/SectionHeading";
import PolicyCard from "../components/PolicyCard";

const policies = [
  {
    id: "lead-policy",
    title: "Freelancer Lead Policy",
    description:
      "Defines what counts as a lead, a valid lead, an invalid lead, and clarifies that a lead is an opportunity, not a guaranteed client, meeting, project or sale.",
  },
  {
    id: "outreach-policy",
    title: "Freelancer Outreach Policy",
    description:
      "Outreach must be professional, respectful, relevant and personalized. Spam, mass unsolicited messaging and deceptive tactics are not permitted.",
  },
  {
    id: "international-lead-policy",
    title: "International Lead Policy",
    description:
      "International leads may include markets such as the USA, Canada, UK and Australia where legally and operationally appropriate. International conversion is not guaranteed.",
  },
  {
    id: "client-conversion-disclaimer",
    title: "Client Conversion Disclaimer",
    description:
      "No guarantee of client response, meeting, project, sale, specific revenue or conversion rate. No income representation is made.",
  },
  {
    id: "code-of-conduct",
    title: "Freelancer Code of Conduct",
    description:
      "Freelancers must represent their skills accurately, avoid spam, misrepresentation or impersonation, protect lead information, and must not resell or redistribute leads without permission.",
  },
];

export default function Policies() {
  return (
    <>
      <section className="container-page pt-14 pb-6 sm:pt-20">
        <SectionHeading
          eyebrow="POLICIES & STANDARDS"
          title="How SkillBridge operates, in writing."
          description="These policies govern how leads are defined, how outreach should be conducted, and what freelancers can expect from the platform."
        />
      </section>

      <section className="container-page py-10 sm:py-14">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {policies.map((policy) => (
            <PolicyCard key={policy.id} {...policy} />
          ))}
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="container-page">
          <SectionHeading title="Payment & Billing" />
          <p className="mt-4 max-w-2xl text-[14.5px] leading-relaxed text-secondary">
            Payment verification and billing are handled through SkillBridge/ManavLab's
            designated payment process. For any billing questions, reach out through the
            contact details on our Contact page.
          </p>
        </div>
      </section>
    </>
  );
}
