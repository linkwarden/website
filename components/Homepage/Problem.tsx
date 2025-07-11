import { useEffect, useRef, useState, ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const components: ReactNode[] = [
  <div className="text-center space-y-4">
    <p className="text-3xl font-bold">
      Have you ever landed on a{" "}
      <span className="text-5xl text-red-300">404</span> page?
    </p>
  </div>,

  <div className="text-center space-y-4">
    <p className="text-3xl font-semibold">
      That's the problem with traditional bookmarks.
    </p>
  </div>,

  <div className="text-center space-y-4">
    <p className="text-3xl font-semibold">
      They're prone to breaking, disappearing, or becoming outdated. A common
      phenomenon known as <span className="text-red-300">Link Rot</span>.
    </p>
  </div>,

  <div className="text-center space-y-4">
    <p className="text-3xl font-semibold">
      In fact, a{" "}
      <Link
        href="https://www.pewresearch.org/data-labs/2024/05/17/when-online-content-disappears/"
        target="_blank"
        className="underline underline-offset-4 decoration-dotted text-gray-300"
      >
        2024 study
      </Link>{" "}
      found that almost <span className="text-5xl text-red-300">40%</span> of
      all webpages that existed in 2013 are gone.
    </p>
  </div>,

  <div className="text-center space-y-4">
    <p className="text-3xl font-semibold">
      This means your favorite articles, research, and valuable resources can{" "}
      <span className="text-red-300">vanish</span> without any notice.
    </p>
  </div>,

  <div className="text-center space-y-4">
    <p className="text-3xl font-semibold">
      This is because the websites you bookmark can be taken down, modified, or
      simply deleted by their owners.
    </p>
  </div>,

  <div className="text-center space-y-4">
    <p className="text-3xl font-semibold">
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
      <div className="h-screen" />

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
