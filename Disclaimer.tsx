import LegalLayout, { LegalSection } from "../components/LegalLayout";

export default function Disclaimer() {
  return (
    <LegalLayout
      title="Client Conversion Disclaimer"
      intro="A lead is an opportunity, not a guarantee. This page explains exactly what SkillBridge does and does not promise."
    >
      <LegalSection title="No Guarantees">
        <p>SkillBridge does NOT guarantee:</p>
        <ul className="ml-4 list-disc space-y-1">
          <li>Client response</li>
          <li>Meeting</li>
          <li>Project</li>
          <li>Sale</li>
          <li>Revenue</li>
          <li>Income</li>
          <li>Conversion rate</li>
        </ul>
      </LegalSection>

      <LegalSection title="What Affects Conversion">
        <p>
          Whether a lead turns into a working relationship depends on factors including
          outreach quality, portfolio, pricing, communication, follow-up, market conditions and
          the prospect's own needs and decision-making — none of which SkillBridge controls.
        </p>
      </LegalSection>

      <LegalSection title="No Income Representation">
        <p>
          SkillBridge makes no representation regarding potential income or earnings. Any
          figures referenced elsewhere on the platform (such as project budget ranges within a
          lead) reflect research findings, not a promise of payment.
        </p>
      </LegalSection>

      <LegalSection title="Freelancer's Role">
        <p>
          Freelancers are solely responsible for their own outreach, negotiation, contracts and
          delivery of work to any prospect introduced through a SkillBridge lead.
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
