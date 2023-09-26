import Link from "next/link";
import React from "react";

type Props = {
  text: string;
  path: string;
  target?: string;
  className?: string;
};

export default function PrimaryButton({
  text,
  path,
  className,
  target,
}: Props) {
  return (
    <Link
      href={path}
      target={target}
      className={`border select-none duration-100 border-[#0071B7] hover:border-[#059bf8] bg-gradient-to-t from-[#0071B7] via-black via-70% hover:via-90% to-black rounded-lg text-center px-4 py-2 text-slate-200 hover:text-white ${className}`}
    >
      {text}
    </Link>
  );
}
