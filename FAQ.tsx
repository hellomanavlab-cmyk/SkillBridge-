import SectionHeading from "../components/ui/SectionHeading";
import Accordion from "../components/ui/Accordion";

const faqs = [
  {
    question: "Are SkillBridge leads guaranteed clients?",
    answer:
      "No. A SkillBridge lead is a researched potential opportunity — it is not a guaranteed client, meeting, project or sale. Whether a lead converts depends on many factors outside SkillBridge's control.",
  },
  {
    question: "Can I request international leads?",
    answer:
      "International leads may be available depending on your requirements, profile, availability and applicable policies. Markets may include the USA, Canada, UK, Australia and others. International conversion is not guaranteed.",
  },
  {
    question: "What information do I submit?",
    answer:
      "You share your skills, services, portfolio, experience, target industries, target countries, preferred project budget, client type and any other relevant requirements through the onboarding form.",
  },
  {
    question: "How are leads matched to my requirements?",
    answer:
      "SkillBridge uses structured research and AI-assisted processes to identify businesses that reasonably align with the criteria you provide.",
  },
  {
    question: "What happens if a prospect doesn't respond?",
    answer:
      "A non-responsive lead is not automatically an invalid lead. Outreach outcomes vary, and follow-up is part of a normal, professional outreach process.",
  },
  {
    question: "How many leads can I receive?",
    answer:
      "Lead volume depends on the package you choose — Starter, Growth or Pro — along with your requirements, availability and applicable qualification criteria.",
  },
  {
    question: "Can I choose a target country?",
    answer:
      "Yes, you can indicate preferred target countries as part of your requirements. Availability of leads in a given market depends on operational and policy considerations.",
  },
  {
    question: "What happens after I submit the form?",
    answer:
      "SkillBridge reviews your submitted profile and requirements, then begins the research process used to identify and organize potential leads for you.",
  },
  {
    question: "Does SkillBridge guarantee income?",
    answer:
      "No. SkillBridge does not guarantee income, revenue, sales or any specific conversion rate. It provides researched potential opportunities for you to pursue.",
  },
  {
    question: "How should I contact a lead?",
    answer:
      "Reach out with a personalized, honest and professional message. Avoid spam or mass unsolicited messaging, and follow applicable laws and platform rules — see the Outreach Policy for full detail.",
  },
];

export default function FAQ() {
  return (
    <section className="container-page py-14 sm:py-20">
      <SectionHeading
        eyebrow="FAQ"
        title="Frequently asked questions"
        description="Answers here are consistent with SkillBridge's published policies. For full detail, see Policies & Standards."
      />
      <div className="mt-10 max-w-3xl">
        <Accordion items={faqs} />
      </div>
    </section>
  );
}
