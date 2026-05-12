import React, { useEffect, useRef } from "react";
import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useTransform,
} from "framer-motion";

type CountUpProps = {
  end: number;
  suffix?: string;
  duration?: number;
};

export default function CountUp({
  end,
  suffix = "",
  duration = 2,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const count = useMotionValue(0);
  const display = useTransform(
    count,
    (v) => Math.floor(v).toLocaleString() + suffix,
  );

  useEffect(() => {
    if (!inView) return;
    const controls = animate(count, end, { duration, ease: "easeOut" });
    return () => controls.stop();
  }, [inView, end, duration, count]);

  return <motion.span ref={ref}>{display}</motion.span>;
}
