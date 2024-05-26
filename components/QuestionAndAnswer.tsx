import { Plus } from "@phosphor-icons/react";
import React from "react";

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
  className,
}: Props) {
  return (
    <div className={`faq ${className}`}>
      <div
        className="p-5 cursor-pointer font-semibold select-none sm:text-xl text-text flex items-center gap-2"
        onClick={onToggle}
      >
        <Plus
          size={20}
          className={`${isOpen ? "rotate-45" : ""} duration-150`}
        />
        <p className="w-full">{title}</p>
      </div>
      {isOpen && (
        <div className="pl-7 text-sm pb-5 pr-3 -mt-3 leading-6 fade-up">
          {children}
        </div>
      )}
    </div>
  );
}
