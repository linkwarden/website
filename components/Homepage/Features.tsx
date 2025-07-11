import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

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
      className="min-h-screen flex flex-col items-center justify-center"
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
    </div>
  );
};

export default Accordion;
