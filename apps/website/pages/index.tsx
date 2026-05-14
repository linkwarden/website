import Features from "@/components/Homepage/Features";
import Showcase from "@/components/Homepage/Showcase";
import GetStarted from "@/components/Homepage/GetStarted";
import Testimonials from "@/components/Testimonials";
import SEO from "@/components/SEO";

export default function Home() {
  return (
    <div className="fade-in">
      <SEO
        title="Linkwarden — Bookmarks, Evolved"
        description="Collect, read, annotate, and fully preserve what matters. Open-source, self-hostable bookmark manager with full-page archival."
        path="/"
      />
      <Showcase />
      <Features />
      <Testimonials />
      <GetStarted />
    </div>
  );
}
