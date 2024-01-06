import Link from "next/link";
import React from "react";

type Props = {
  className?: string;
};

export default function GitHubButton({ className }: Props) {
  return (
    <Link
      href="https://github.com/linkwarden/linkwarden"
      target="_blank"
      className={`p-2 group w-fit hover:bg-white/20 hover:text-white text-neutral-200 flex items-center gap-2 rounded-lg select-none hover:shadow-none duration-100 ${className}`}
    >
      <span className="material-symbols-rounded text-slate-300 duration-100 group-hover:text-yellow-500">
        star
      </span>
      Star on GitHub!
    </Link>
  );
}
