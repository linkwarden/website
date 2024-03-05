import Link from "next/link";
import React from "react";

type Props = {
  className?: string;
  children?: React.ReactNode;
  path: string;
  openInNewTab?: boolean;
};

export default function SecondaryButton({
  className,
  children,
  path,
  openInNewTab = true,
}: Props) {
  return (
    <Link
      href={path}
      target={openInNewTab ? "_blank" : "_self"}
      className={`p-2 group w-fit border border-outline px-4 backdrop-blur-sm shadow-lg hover:shadow-none hover:border-[#6f6f6f] text-neutral-200 flex items-center gap-2 rounded-full select-none duration-100 ${className}`}
    >
      {children}
    </Link>
  );
}
