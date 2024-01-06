import React, { ReactNode } from "react";

type Props = {
  title: string;
  icon: string;
  children: ReactNode;
  className?: string;
};

export default function ShortenedFeatures({
  title,
  icon,
  children,
  className,
}: Props) {
  return (
    <div
      className={`p-4 text-sm border z-10 border-[#07334F] bg-[#0e212e] h-full rounded-xl ${className}`}
    >
      <span
        className="material-symbols-rounded select-none"
        style={{ fontSize: "3rem" }}
      >
        {icon}
      </span>
      <p className="font-bold mb-2">{title}</p>
      {children}
    </div>
  );
}
