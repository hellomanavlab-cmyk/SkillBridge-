import LegalLayout, { LegalSection } from "../components/LegalLayout";
import { CONTACT } from "../constants";

export default function Refund() {
  return (
    <LegalLayout
      title="Refund & Cancellation Policy"
      intro="This policy explains how refunds and cancellations are handled for SkillBridge packages."
    >
      <LegalSection title="Package Purchases">
        <p>
          SkillBridge packages (Starter, Growth, Pro) provide a defined quantity of researched
          leads. Purchasing a package does not guarantee clients, projects or revenue — see the
          Client Conversion Disclaimer.
        </p>
      </LegalSection>

      <LegalSection title="Eligibility for Refunds">
        <p>
          Refund eligibility depends on factors such as whether lead research has already
          commenced or been delivered, and whether the request relates to a genuine service
          issue rather than lead non-response. Non-responsive leads are not, by themselves,
          grounds for a refund, since a lead is a researched opportunity rather than a
          guaranteed outcome.
        </p>
      </LegalSection>

      <LegalSection title="How to Request">
        <p>
          To request a refund or cancellation, contact us with your order details at{" "}
          <a href={`mailto:${CONTACT.email}`} className="text-teal hover:underline">
            {CONTACT.email}
          </a>
          . Requests are reviewed on a case-by-case basis against this policy and applicable
          qualification criteria.
        </p>
      </LegalSection>

      <LegalSection title="Processing Time">
        <p>
          Approved refunds are processed through the same designated payment process used for
          the original purchase.
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
