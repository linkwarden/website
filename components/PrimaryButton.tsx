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
      className={`border primary-btn-gradient select-none duration-100 bg-black border-[#0071B7] hover:border-[#059bf8] rounded-lg text-center px-4 py-2 text-slate-200 hover:text-white ${className}`}
    >
      {text}
    </Link>
  );
}
