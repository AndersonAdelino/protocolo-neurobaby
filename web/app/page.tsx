import TopBar from "@/components/landing/top-bar";
import HeroSection from "@/components/landing/hero";
import ProblemSection from "@/components/landing/problem";
import AgitationSection from "@/components/landing/agitation";
import SolutionSection from "@/components/landing/solution";
import PricingSection from "@/components/landing/pricing";
import TestimonialsSection from "@/components/landing/testimonials";
import FAQSection from "@/components/landing/faq";
import GuaranteeSection from "@/components/landing/guarantee";
import Footer from "@/components/landing/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 relative">
      <TopBar />
      <HeroSection />
      <ProblemSection />
      <AgitationSection />
      <SolutionSection />
      <PricingSection />
      <TestimonialsSection />
      <FAQSection />
      <GuaranteeSection />
      <Footer />
    </main>
  );
}
