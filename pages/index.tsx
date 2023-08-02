import Features from "@/components/Overview/Features";
import Navbar from "@/components/Navbar";
import Showcase from "@/components/Overview/Showcase";
import UseCases from "@/components/Overview/UseCases";
import GetStarted from "@/components/Overview/GetStarted";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Showcase />
      <Features />
      <UseCases />
      <GetStarted />
      <Footer />
    </div>
  );
}
