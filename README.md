# SkillBridge

Connecting Freelancers to Real Opportunities. Powered by ManavLab.

## Tech Stack

- React 18 + TypeScript
- Vite
- Tailwind CSS
- React Router
- lucide-react icons

## Getting Started

```bash
npm install
npm run dev
```

Then open the printed local URL in your browser.

## Build

```bash
npm run build
npm run preview
```

## Project Structure

```
src/
  components/       Navbar, Footer, Logo, DashboardMock, LeadCard,
                     PricingCard, PolicyCard, WorldMap, LegalLayout
  components/ui/     Button, Card, Badge, SectionHeading, Accordion, IconBox
  pages/            One file per route (Home, HowItWorks, Leads,
                     ForFreelancers, Pricing, About, FAQ, Contact,
                     Policies, Privacy, Terms, Refund, Disclaimer)
  constants.ts      Google Form URL, nav links, contact details
```

## Notes

- All primary "Get Started" / onboarding CTAs point to the SkillBridge
  freelancer onboarding Google Form (see `src/constants.ts`).
- The hero dashboard and lead cards are built as real UI components
  (not static images) so they stay on-brand and easy to edit.
- Two stock photos are used as illustrative example lead images; replace
  with your own real UI screenshots/photography before launch, and swap
  the `Logo.tsx` mark for the official SkillBridge logo file if you have
  a vector version to drop in.
- Colors, spacing and copy follow the approved brand brief. Update
  `tailwind.config.js` if brand tokens change.
