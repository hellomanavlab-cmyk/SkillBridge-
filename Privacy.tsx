import LegalLayout, { LegalSection } from "../components/LegalLayout";
import { CONTACT } from "../constants";

export default function Privacy() {
  return (
    <LegalLayout
      title="Privacy Policy"
      intro="This Privacy Policy explains how SkillBridge, powered by ManavLab, handles information submitted by freelancers using the platform."
    >
      <LegalSection title="Information We Collect">
        <p>
          When you use SkillBridge, we collect the information you submit through the
          onboarding form — including your skills, services, portfolio, experience, target
          industries, target countries, preferred project budget, client type, and contact
          details.
        </p>
      </LegalSection>

      <LegalSection title="How We Use Information">
        <p>
          Submitted information is used to conduct business research and identify potential
          leads that reasonably match your stated requirements, and to communicate with you
          about your account and orders.
        </p>
      </LegalSection>

      <LegalSection title="Information Sharing">
        <p>
          We do not sell your personal information. Information may be shared with service
          providers strictly to the extent necessary to operate the platform (for example,
          payment verification).
        </p>
      </LegalSection>

      <LegalSection title="Data Retention">
        <p>
          We retain submitted information for as long as necessary to provide the service and
          to meet legitimate business or legal requirements.
        </p>
      </LegalSection>

      <LegalSection title="Contact">
        <p>
          For privacy-related questions, contact us at{" "}
          <a href={`mailto:${CONTACT.email}`} className="text-teal hover:underline">
            {CONTACT.email}
          </a>
          .
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
