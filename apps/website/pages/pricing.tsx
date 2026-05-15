import FAQs from "@/components/Homepage/FAQs";
import GetStarted from "@/components/Homepage/GetStarted";
import Pricing from "@/components/Homepage/Pricing";
import SEO from "@/components/SEO";
import Testimonials from "@/components/Testimonials";

export default function PricingPage() {
  return (
    <div className="fade-in pt-20 relative">
      <SEO
        title="Pricing — Linkwarden"
        description="Simple, transparent pricing for Linkwarden Cloud. Pick the plan that fits your needs."
        path="/pricing"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-0 left-0 right-0 h-[40rem] bg-gradient-to-b from-[#289DF220] to-transparent"
      />
      <div className="relative pb-20">
        <Pricing />
        <Testimonials />
        <FAQs />
      </div>
    </div>
  );
}
