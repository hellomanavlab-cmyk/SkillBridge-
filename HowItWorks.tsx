import {
  UserCircle2,
  ClipboardList,
  Microscope,
  ClipboardCheck,
  Rocket,
} from "lucide-react";
import Button from "../components/ui/Button";
import SectionHeading from "../components/ui/SectionHeading";
import { GOOGLE_FORM_URL } from "../constants";

const steps = [
  {
    number: "01",
    icon: UserCircle2,
    title: "Tell us what you offer",
    body: "Freelancers submit skills, services, portfolio and experience through a short onboarding form.",
  },
  {
    number: "02",
    icon: ClipboardList,
    title: "Define your ideal client",
    body: "Choose industries, target countries, client types and preferred project budget so research stays relevant to you.",
  },
  {
    number: "03",
    icon: Microscope,
    title: "Business research",
    body: "SkillBridge uses structured research and AI-assisted processes to identify businesses that may match your stated requirements.",
  },
  {
    number: "04",
    icon: ClipboardCheck,
    title: "Receive your leads",
    body: "Potential opportunities are organized into useful lead information — business profile, industry, location, potential need and research notes.",
  },
  {
    number: "05",
    icon: Rocket,
    title: "Start your outreach",
    body: "The freelancer approaches the prospect professionally and independently, using the outreach standards as a guide.",
  },
];

export default function HowItWorks() {
  return (
    <>
      <section className="container-page pt-14 pb-6 sm:pt-20">
        <SectionHeading
          eyebrow="HOW IT WORKS"
          title="From your skills to a researched opportunity."
          description="SkillBridge follows a structured, five-step process to turn your profile and requirements into potential leads worth pursuing."
        />
      </section>

      <section className="container-page py-10 sm:py-14">
        <div className="space-y-5">
          {steps.map((step) => (
            <div
              key={step.title}
              className="grid gap-4 rounded-xl border border-border bg-white p-6 sm:grid-cols-[auto_1fr] sm:items-center sm:gap-8"
            >
              <div className="flex items-center gap-4 sm:flex-col sm:items-start sm:gap-3">
                <span className="text-2xl font-extrabold text-border">{step.number}</span>
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-mint text-[#0d7568]">
                  <step.icon size={20} aria-hidden="true" />
                </div>
              </div>
              <div>
                <p className="text-[17px] font-semibold text-navy">{step.title}</p>
                <p className="mt-1.5 max-w-xl text-[14.5px] leading-relaxed text-secondary">
                  {step.body}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Button href={GOOGLE_FORM_URL}>Tell Us What You Need →</Button>
        </div>
      </section>
    </>
  );
}
