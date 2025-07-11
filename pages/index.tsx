import Features from "@/components/Homepage/Features";
import Navbar from "@/components/Navbar";
import Showcase from "@/components/Homepage/Showcase";
import Pricing from "@/components/Homepage/Pricing";
import FAQs from "@/components/Homepage/FAQs";
import GetStarted from "@/components/Homepage/GetStarted";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";
import Problem from "@/components/Homepage/Problem";

export default function Home() {
  return (
    <div className="fade-in">
      <Navbar />
      <Showcase />
      <Problem />
      <Features />
      <Testimonials />
      <Pricing />
      <FAQs />
      <GetStarted />
      <Footer />
    </div>
  );
}
