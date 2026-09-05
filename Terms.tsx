import LegalLayout, { LegalSection } from "../components/LegalLayout";
import { CONTACT } from "../constants";

export default function Terms() {
  return (
    <LegalLayout
      title="Terms & Conditions"
      intro="These Terms & Conditions govern your use of SkillBridge, a platform powered by ManavLab."
    >
      <LegalSection title="The Service">
        <p>
          SkillBridge helps freelancers discover relevant potential business leads based on
          their skills, services, portfolio, target industries, target countries, preferred
          project budget, client type and other stated requirements, using structured research
          and AI-assisted processes.
        </p>
      </LegalSection>

      <LegalSection title="No Guarantee of Outcomes">
        <p>
          SkillBridge does not guarantee clients, projects, sales, meetings, revenue or any
          specific conversion rate. A lead is a researched, potential opportunity — see the
          Client Conversion Disclaimer for full detail.
        </p>
      </LegalSection>

      <LegalSection title="Freelancer Responsibilities">
        <p>
          Freelancers are responsible for accurately representing their skills, conducting
          professional outreach in line with the Outreach Policy, and complying with applicable
          laws when contacting prospects.
        </p>
      </LegalSection>

      <LegalSection title="Payments">
        <p>
          Package pricing and lead quantities are as published on the Pricing page at the time
          of purchase. Payment verification is handled through SkillBridge/ManavLab's
          designated payment process.
        </p>
      </LegalSection>

      <LegalSection title="Changes to These Terms">
        <p>
          We may update these Terms from time to time. Continued use of SkillBridge after
          changes are published constitutes acceptance of the updated Terms.
        </p>
      </LegalSection>

      <LegalSection title="Contact">
        <p>
          Questions about these Terms can be sent to{" "}
          <a href={`mailto:${CONTACT.email}`} className="text-teal hover:underline">
            {CONTACT.email}
          </a>
          .
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
