import Features from "@/components/Homepage/Features";
import Navbar from "@/components/Navbar";
import Showcase from "@/components/Homepage/Showcase";
import UseCases from "@/components/Homepage/useCases/UseCases";
import Pricing from "@/components/Homepage/Pricing";
import FAQs from "@/components/Homepage/FAQs";
import GetStarted from "@/components/Homepage/GetStarted";
import Footer from "@/components/Footer";
import Testimonial from "@/components/Testimonial";

export default function Home() {
  return (
    <div className="fade-in">
      <Navbar />
      <Showcase />
      <Features />
      <UseCases />
      <Testimonial />
      <Pricing />
      <FAQs />
      <GetStarted />
      <Footer />
    </div>
  );
}
