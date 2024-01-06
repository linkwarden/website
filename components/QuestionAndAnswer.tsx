import React, { ReactNode } from "react";

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
  return (
    <details className={`faq ${className}`}>
      <summary className="p-5 cursor-pointer font-semibold select-none text-lg text-slate-300">
        {title}
      </summary>
      <div className="pl-8 text-sm pb-5 pr-3">{children}</div>
    </details>
  );
}
