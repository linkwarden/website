import React, { ReactNode } from "react";

type Props = {
  title: string;
  icon: string;
  children: ReactNode;
  className?: string;
};

export default function PrimaryButton({
  title,
  icon,
  children,
  className,
}: Props) {
  return (
    <div
      className={`p-4 text-sm border border-[#07334F] rounded-xl ${className}`}
    >
      <span className="material-symbols-rounded text-5xl select-none">
        {icon}
      </span>
      <p className="font-bold mb-2">{title}</p>
      {children}
    </div>
  );
}
