import FAQs from "@/components/Homepage/FAQs";
import GetStarted from "@/components/Homepage/GetStarted";
import Pricing from "@/components/Homepage/Pricing";
import SEO from "@/components/SEO";

export default function PricingPage() {
  return (
    <div className="fade-in pt-20">
      <SEO
        title="Pricing — Linkwarden"
        description="Simple, transparent pricing for Linkwarden Cloud. Pick the plan that fits your needs."
        path="/pricing"
      />
      <Pricing />
      <FAQs />
      <GetStarted />
    </div>
  );
}
