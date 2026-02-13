import TopBar from "@/components/landing/top-bar";
import HeroSection from "@/components/landing/hero";
import SolutionSection from "@/components/landing/solution";
import AgitationSection from "@/components/landing/agitation";
import BonusSection from "@/components/landing/bonus-section";
import PricingSection from "@/components/landing/pricing";
import SocialProofPopUp from "@/components/landing/social-proof";
import TestimonialsSection from "@/components/landing/testimonials";
import WhoCreatedSection from "@/components/landing/who-created";
import FAQSection from "@/components/landing/faq";
import GuaranteeSection from "@/components/landing/guarantee";
import Footer from "@/components/landing/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background relative">
      <TopBar />
      <HeroSection />
      <SolutionSection />
      <AgitationSection />
      <BonusSection />
      <PricingSection />
      <TestimonialsSection />
      <WhoCreatedSection />
      <FAQSection />
      <GuaranteeSection />
      <Footer />
      <SocialProofPopUp />
    </main>
  );
}
