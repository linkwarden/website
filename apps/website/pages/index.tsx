import Features from "@/components/Homepage/Features";
import Showcase from "@/components/Homepage/Showcase";
import GetStarted from "@/components/Homepage/GetStarted";
import Testimonials from "@/components/Testimonials";
import SEO from "@/components/SEO";
import GitHubStats from "@/components/GitHubStats";

export default function Home() {
  return (
    <div className="fade-in">
      <SEO
        title="Linkwarden — Bookmarks, Evolved"
        description="Collect, read, annotate, and fully preserve what matters. Open-source, self-hostable bookmark manager with full-page archival."
        path="/"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-0 left-0 right-0 h-[40rem] bg-gradient-to-b from-[#289DF220] to-transparent"
      />
      <Showcase />
      <Features />
      <GitHubStats />
      <Testimonials />
      <GetStarted />
    </div>
  );
}
