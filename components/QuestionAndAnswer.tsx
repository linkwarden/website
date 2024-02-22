import { Plus } from "@phosphor-icons/react";
import React, { ReactNode, useState } from "react";

type Props = {
  title: string;
  children: ReactNode;
  className?: string;
};

export default function QuestionAndAnswer({
  title,
  children,
  className,
}: Props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`faq ${className}`}>
      <div
        className="p-5 cursor-pointer font-semibold select-none text-xl text-text flex items-center gap-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Plus
          size={25}
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
