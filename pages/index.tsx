import Features from "@/components/Homepage/Features";
import Navbar from "@/components/Navbar";
import Showcase from "@/components/Homepage/Showcase";
import UseCases from "@/components/Homepage/useCases/UseCases";
import Pricing from "@/components/Homepage/Pricing";
import FAQs from "@/components/Homepage/FAQs";
import GetStarted from "@/components/Homepage/GetStarted";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";
import DiscordCommunityButton from "@/components/DiscordCommunityButton";

export default function Home() {
  return (
    <div className="fade-in">
      <DiscordCommunityButton />
      <Navbar />
      <Showcase />
      <Features />
      <UseCases />
      <Testimonials />
      <Pricing />
      <FAQs />
      <GetStarted />
      <Footer />
    </div>
  );
}
