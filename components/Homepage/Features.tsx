import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import ShortenedFeatures from "../ShortenedFeatures";
import {
  Laptop,
  ShieldCheck,
  PushPin,
  ListMagnifyingGlass,
  PuzzlePiece,
  ArrowsLeftRight,
  RocketLaunch,
  CheckSquare,
  Key,
  DownloadSimple,
  Rss,
  ArrowsClockwise,
} from "@phosphor-icons/react";

type AccordionItem = { title: string; content: React.ReactNode };

const items: AccordionItem[] = [
  {
    title: "Full-page preservation",
    content: (
      <>
        Unlike traditional bookmarks that often break or vanish, Linkwarden
        backs up every page in multiple formats, including full HTML content,
        ensuring you always have access to the original content.
      </>
    ),
  },
  {
    title: "Read and Annotate",
    content: (
      <>
        View your saved articles and bookmarks in our dedicated reader view
        where you can make adjustments to the font style, highlight text, and
        add annotations effortlessly.
      </>
    ),
  },
  {
    title: "Automatic Organization",
    content: (
      <>
        With AI-powered tagging and search filters, Linkwarden automatically
        categorizes your bookmarks so you can find exactly what you need in
        seconds.
      </>
    ),
  },
  {
    title: "Sharing and Collaboration",
    content: (
      <>
        Invite friends or teammates to contribute to your collections, ideal for
        research, content planning, or shared interests, and easily share them
        with the public.
      </>
    ),
  },
];

const INTERVAL = 7000;

const Accordion: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number>(0);
  const [inView, setInView] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 639px)");
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    setIsMobile(mq.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.intersectionRatio > 0.5),
      { threshold: [0.5] }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!inView || isMobile) return;
    const timer = setTimeout(
      () => setOpenIndex((prev) => (prev + 1) % items.length),
      INTERVAL
    );
    return () => clearTimeout(timer);
  }, [openIndex, inView, isMobile]);

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center pt-20 mt-20 bg-gradient-to-b from-slate-800/30 to-transparent"
      id="features"
    >
      <p className="lg:text-4xl text-3xl font-bold text-center mb-10 px-5">
        Everything you need for your bookmarks
      </p>
      <div
        ref={containerRef}
        className="space-y-5 mx-auto max-w-5xl px-5 relative"
      >
        {items.map((item, idx) => {
          const isOpen = isMobile || idx === openIndex;
          return (
            <motion.div
              key={idx}
              layout
              onClick={() => !isMobile && setOpenIndex(idx)}
              className={`relative overflow-hidden sm:cursor-pointer rounded-md ${
                isOpen ? "bg-indigo-500/10" : ""
              }`}
            >
              <div
                className="absolute left-0 top-0 bg-indigo-500/40"
                style={{ width: 1, height: "100%" }}
              ></div>

              {!isMobile && isOpen && (
                <motion.div
                  key={`progress-${openIndex}-${inView}`}
                  className="absolute left-0 top-0 bg-indigo-500"
                  style={{ width: 1, height: "100%" }}
                  initial={{ height: 0 }}
                  animate={{ height: "100%" }}
                  transition={{ duration: INTERVAL / 1000, ease: "linear" }}
                />
              )}

              <motion.div layout className="text-left text-2xl font-bold p-4">
                {item.title}
              </motion.div>

              <motion.div
                layout
                initial={false}
                animate={{
                  height: isOpen ? "auto" : 0,
                  opacity: isOpen ? 1 : 0,
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="overflow-hidden text-gray-300"
              >
                <div className="pb-4 px-4 sm:w-1/2">{item.content}</div>

                {isMobile && (
                  <div className="w-full mt-6 flex justify-center">
                    <Image
                      src={
                        idx === 0
                          ? "/features/preservation.png"
                          : idx === 1
                          ? "/features/reading.png"
                          : idx === 2
                          ? "/features/organization.png"
                          : "/features/collaboration.png"
                      }
                      alt="Feature Illustration"
                      className="w-full max-w-xs"
                      draggable={false}
                      width={300}
                      height={300}
                    />
                  </div>
                )}
              </motion.div>
            </motion.div>
          );
        })}

        <AnimatePresence mode="wait">
          <motion.div
            key={openIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <Image
              src={
                openIndex === 0
                  ? "/features/preservation.png"
                  : openIndex === 1
                  ? "/features/reading.png"
                  : openIndex === 2
                  ? "/features/organization.png"
                  : "/features/collaboration.png"
              }
              alt="Feature Illustration"
              className="w-[40%] absolute top-0 right-5 hidden sm:block"
              draggable={false}
              width={600}
              height={600}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="mx-auto max-w-5xl px-5 mt-20">
        <p className="text-2xl text-center font-bold mb-10">
          View and{" "}
          <span className="bg-indigo-500/80 px-1 rounded-sm italic relative">
            Highlight
          </span>{" "}
          your saved articles in a distraction-free environment
        </p>
        <video
          className={`rounded-md border border-outline mx-auto w-full z-10 relative`}
          src="./app/reader.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        ></video>
      </div>

      <div className="mx-auto max-w-5xl px-5 mt-20">
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 w-fit mx-auto gap-5 my-5">
          <ShortenedFeatures
            icon={<Laptop weight="fill" />}
            title="Open Source, Self-Hostable"
          >
            <p>
              We published our entire source code to{" "}
              <a
                className="underline decoration-dotted underline-offset-2 text-gray-300 hover:opacity-70 duration-200"
                target="_blank"
                href="https://github.com/linkwarden/linkwarden"
              >
                GitHub
              </a>{" "}
              for transparency and trust.
            </p>
          </ShortenedFeatures>

          <ShortenedFeatures
            icon={<Rss weight="fill" />}
            title="Follow RSS Feeds"
          >
            <p>
              Follow RSS feeds directly within your collections. New articles
              and updates appear just like regular saved webpages.
            </p>
          </ShortenedFeatures>

          <ShortenedFeatures
            icon={<PushPin weight="fill" />}
            title="Pin Links and Collections"
          >
            <p>
              Customize your dashboard by pinning your important links and
              collections for quick access.
            </p>
          </ShortenedFeatures>

          <ShortenedFeatures
            icon={<ShieldCheck weight="fill" />}
            title="Privacy Friendly"
          >
            <p>
              Privacy is a fundamental human right. We won&apos;t sell your data
              to third parties.
            </p>
          </ShortenedFeatures>

          <ShortenedFeatures
            icon={<ListMagnifyingGlass weight="fill" />}
            title="Powerful Search"
          >
            <p>
              You can search and filter all your curated contents across all
              your collections using our advanced{" "}
              <Link
                className="underline decoration-dotted underline-offset-2 text-gray-300 hover:opacity-70 duration-200"
                href="https://docs.linkwarden.app/Usage/advanced-search"
                target="_blank"
              >
                search operators
              </Link>
              .
            </p>
          </ShortenedFeatures>

          <ShortenedFeatures
            icon={<PuzzlePiece weight="fill" />}
            title="Browser Extension"
          >
            <p>
              Collect webpages directly from your browser with our open-source
              extension.
            </p>
          </ShortenedFeatures>

          <ShortenedFeatures
            icon={<ArrowsClockwise weight="fill" />}
            title="Browser Sync"
          >
            <p>
              Sync your browser bookmarks to Linkwarden using{" "}
              <Link
                className="underline decoration-dotted underline-offset-2 text-gray-300 hover:opacity-70 duration-200"
                target="_blank"
                href="https://floccus.org"
              >
                Floccus
              </Link>
              .
            </p>
          </ShortenedFeatures>

          <ShortenedFeatures
            icon={<CheckSquare weight="fill" />}
            title="Bulk Actions"
          >
            <p>Edit or delete multiple items at once easily.</p>
          </ShortenedFeatures>

          <ShortenedFeatures
            icon={<ArrowsLeftRight weight="fill" />}
            title="Import & Export"
          >
            <p>
              You can import and export your bookmarks easily from the settings.
            </p>
          </ShortenedFeatures>

          <ShortenedFeatures
            icon={<DownloadSimple weight="fill" />}
            title="Installable PWA for Mobile"
          >
            <p>
              App-like experience across devices with PWA support, ensuring
              optimal performance and accessibility for all users.
            </p>
          </ShortenedFeatures>

          <ShortenedFeatures
            icon={<Key weight="fill" />}
            title="Secure API Integration"
          >
            <p>
              Connect and secure your integrations using access tokens to create
              custom solutions and automate with ease.
            </p>
          </ShortenedFeatures>

          <ShortenedFeatures
            icon={<RocketLaunch weight="fill" />}
            title="And Many More Features..."
          >
            <p>
              For more information, check out our{" "}
              <Link
                className="underline decoration-dotted underline-offset-2 text-gray-300 hover:opacity-70 duration-200"
                href="https://blog.linkwarden.app/tags/release"
              >
                release notes
              </Link>{" "}
              in our blog . We are constantly adding new features and
              improvements!
            </p>
          </ShortenedFeatures>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
