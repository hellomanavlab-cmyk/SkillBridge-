import { Mail, Phone, MapPin } from "lucide-react";
import SectionHeading from "../components/ui/SectionHeading";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import Logo from "../components/Logo";
import { CONTACT, GOOGLE_FORM_URL } from "../constants";

export default function Contact() {
  return (
    <section className="container-page py-14 sm:py-20">
      <SectionHeading
        eyebrow="CONTACT"
        title="Get in touch with SkillBridge."
        description="Have a question before joining? Reach out directly, or start the onboarding form."
      />

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        <Card>
          <Logo />
          <div className="mt-6 space-y-4">
            <a
              href={`mailto:${CONTACT.email}`}
              className="flex items-center gap-3 text-sm font-medium text-navy hover:text-teal"
            >
              <Mail size={17} aria-hidden="true" /> {CONTACT.email}
            </a>
            <a
              href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
              className="flex items-center gap-3 text-sm font-medium text-navy hover:text-teal"
            >
              <Phone size={17} aria-hidden="true" /> {CONTACT.phone}
            </a>
            <div className="flex items-center gap-3 text-sm font-medium text-navy">
              <MapPin size={17} aria-hidden="true" /> {CONTACT.location}
            </div>
          </div>
        </Card>

        <Card className="flex flex-col justify-center">
          <p className="text-[17px] font-semibold text-navy">Ready to start?</p>
          <p className="mt-2 text-sm leading-relaxed text-secondary">
            Share your skills, target market and requirements through our onboarding form and
            we'll take it from there.
          </p>
          <div className="mt-5">
            <Button href={GOOGLE_FORM_URL}>Join SkillBridge →</Button>
          </div>
        </Card>
      </div>
    </section>
  );
}
