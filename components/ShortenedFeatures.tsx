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
      className={`p-5 text-sm border z-10 border-[#333333] bg-gradient-to-tr from-[#282828] to-[#151515] h-full rounded-xl text-center ${className}`}
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
