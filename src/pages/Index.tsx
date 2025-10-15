import { UrgencyBanner } from "@/components/UrgencyBanner";
import { Hero } from "@/components/Hero";
import { Problems } from "@/components/Problems";
import { BeforeAfter } from "@/components/BeforeAfter";
import { Story } from "@/components/Story";
import { Features } from "@/components/Features";
import { Process } from "@/components/Process";
import { PricingComparison } from "@/components/PricingComparison";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <UrgencyBanner />
      <Hero />
      <Problems />
      <BeforeAfter />
      <Story />
      <Features />
      <Process />
      <PricingComparison />
      <Testimonials />
      <CTA />
      <FAQ />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
