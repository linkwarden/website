import { useEffect, useRef, useState, ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const components: ReactNode[] = [
  <div className="text-center space-y-4" key={0}>
    <p className="text-3xl font-semibold leading-relaxed">
      Have you ever landed on a{" "}
      <span className="text-5xl text-red-300">404</span> page?
    </p>
  </div>,

  <div className="text-center space-y-4" key={1}>
    <p className="text-3xl font-semibold leading-relaxed">
      That&apos;s the problem with traditional bookmarks.
    </p>
  </div>,

  <div className="text-center space-y-4" key={2}>
    <p className="text-3xl font-semibold leading-relaxed">
      They&apos;re prone to breaking, disappearing, or becoming outdated. A
      common phenomenon known as <span className="text-red-300">Link Rot</span>.
    </p>
  </div>,

  <div className="text-center space-y-4" key={3}>
    <p className="text-3xl font-semibold leading-relaxed">
      In fact, a{" "}
      <Link
        href="https://www.pewresearch.org/data-labs/2024/05/17/when-online-content-disappears/"
        target="_blank"
        className="underline underline-offset-[7px] hover:opacity-70 duration-200 decoration-dotted text-gray-300"
      >
        2024 study
      </Link>{" "}
      found that almost <span className="text-5xl text-red-300">40%</span> of
      all webpages that existed in 2013 are gone.
    </p>
  </div>,

  <div className="text-center space-y-4" key={4}>
    <p className="text-3xl font-semibold leading-relaxed">
      This means your favorite articles, research, and valuable resources can{" "}
      <span className="text-red-300">Vanish</span> without any notice.
    </p>
  </div>,

  <div className="text-center space-y-4" key={5}>
    <p className="text-3xl font-semibold leading-relaxed">
      This is because the websites you bookmark can be taken down, modified, or
      simply deleted by their owners.
    </p>
  </div>,

  <div className="text-center space-y-4" key={6}>
    <p className="text-3xl font-semibold leading-relaxed">
      We created <span className="text-sky-200">Linkwarden</span> to solve this
      problem.
    </p>
  </div>,
];

export default function Problem() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const debounceTimer = useRef<number | null>(null);
  const TRANSITION_DURATION = 0.15; // seconds

  useEffect(() => {
    const calculateIdx = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const middleY = window.innerHeight / 2;
      const rel = middleY - rect.top;
      let idx = Math.round(rel / window.innerHeight);
      idx = Math.max(0, Math.min(components.length - 1, idx));
      setCurrentIdx(idx);
    };

    const handleScroll = () => {
      if (debounceTimer.current) {
        window.clearTimeout(debounceTimer.current);
      }
      debounceTimer.current = window.setTimeout(() => {
        calculateIdx();
      }, TRANSITION_DURATION * 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (debounceTimer.current) window.clearTimeout(debounceTimer.current);
    };
  }, []);

  const wrapperStyle: React.CSSProperties = {
    height: `${components.length * 100}vh`,
    position: "relative",
  };

  return (
    <div>
      <div className="h-screen relative">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <p className="text-2xl tracking-wider font-thin">SCROLL DOWN</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="mx-auto"
            style={{ width: "3.5rem", height: "3.5em" }}
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67"
            />
          </svg>
        </div>
      </div>

      <section ref={sectionRef} style={wrapperStyle}>
        <div className="sticky top-1/2 transform -translate-y-1/2 flex items-center justify-center max-w-4xl mx-auto px-5">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIdx}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: TRANSITION_DURATION }}
            >
              {components[currentIdx]}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      <div style={{ height: "100vh" }} />
    </div>
  );
}
