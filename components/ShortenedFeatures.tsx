import React, { ReactNode } from "react";

type Props = {
  title: string;
  icon: ReactNode;
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
      className={`p-5 text-sm border z-10 border-[#333333] bg-gradient-to-tr from-[#202020] to-[#101010] h-full rounded-md text-center ${className}`}
    >
      <div
        className="select-none bg-gradient-to-br from-[#673AB7] to-[#3A00A1] w-fit aspect-square p-2 rounded-2xl mx-auto mb-5"
        style={{ fontSize: "3rem" }}
      >
        {icon}
      </div>
      <p className="font-bold mb-2 text-center text-lg">{title}</p>
      {children}
    </div>
  );
}
