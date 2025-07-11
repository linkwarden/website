import { Plus } from "@phosphor-icons/react";
import React, { useRef, useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

type Props = {
  title: string;
  isOpen: boolean;
  onToggle: () => void;
  children: React.ReactNode;
  className?: string;
};

export default function QuestionAndAnswer({
  title,
  isOpen,
  onToggle,
  children,
  className = "",
}: Props) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight);
    }
  }, [children]);

  return (
    <div className={`faq ${className}`}>
      <div
        className="p-5 cursor-pointer text-lg font-semibold select-none text-text flex items-center gap-2"
        onClick={onToggle}
      >
        <Plus
          size={20}
          weight="bold"
          className={`transform transition-transform duration-150 ${
            isOpen ? "rotate-45" : ""
          }`}
        />
        <p className="w-full text-left">{title}</p>
      </div>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: contentHeight, opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            style={{ overflow: "hidden" }}
            className="text-sm leading-6"
          >
            <div ref={contentRef} className="pb-5 px-7">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
