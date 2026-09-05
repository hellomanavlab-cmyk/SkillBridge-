import { ShieldCheck, ArrowRight } from "lucide-react";
import SectionHeading from "../components/ui/SectionHeading";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import { GOOGLE_FORM_URL } from "../constants";

const categories = [
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

const outreachSteps = ["Lead", "Personalized Message", "Follow-up", "Conversation", "Potential Project"];

const standards = [
  "Personalize your outreach.",
  "Represent your skills honestly.",
  "Avoid spam and mass unsolicited messaging.",
  "Follow applicable laws and platform rules.",
  "Use reasonable professional follow-up.",
];

export default function ForFreelancers() {
  return (
    <>
      <section className="container-page pt-14 pb-6 sm:pt-20">
        <SectionHeading
          eyebrow="FOR FREELANCERS"
          title="Built for Freelancers Across Digital Skills."
          description="SkillBridge is designed for independent professionals across a wide range of digital services — wherever your skills fit, there's a place for you here."
        />
      </section>

      <section className="container-page py-10 sm:py-14">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {categories.map((cat) => (
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

      <section className="bg-white py-16 sm:py-20">
        <div className="container-page">
          <div className="grid items-start gap-10 lg:grid-cols-2">
            <div>
              <SectionHeading
                title="Getting the Lead Is Step One."
                description="Once a lead is delivered, the freelancer is responsible for reaching out professionally, following up appropriately and managing the conversation."
              />
              <div className="mt-6 flex flex-wrap items-center gap-2 text-sm font-medium text-navy">
                {outreachSteps.map((step, i, arr) => (
                  <span key={step} className="flex items-center gap-2">
                    <span className="rounded-lg border border-border bg-background px-3 py-2 text-xs sm:text-sm">
                      {step}
                    </span>
                    {i < arr.length - 1 && (
                      <ArrowRight size={14} className="text-border" aria-hidden="true" />
                    )}
                  </span>
                ))}
              </div>
            </div>

            <Card>
              <div className="flex items-center gap-2">
                <ShieldCheck size={18} className="text-teal" aria-hidden="true" />
                <p className="text-sm font-semibold text-navy">Professional Outreach Standards</p>
              </div>
              <ul className="mt-4 space-y-2.5 text-sm text-navy/80">
                {standards.map((s) => (
                  <li key={s}>• {s}</li>
                ))}
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
    </>
  );
}
