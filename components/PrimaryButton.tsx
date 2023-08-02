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
      className={`group relative w-36 h-10 block cursor-pointer ${className}`}
    >
      <div className="w-36 p-2 top-0 left-0 text-center absolute text-white font-semibold rounded-md cursor-pointer select-none group-hover:-top-1 group-hover:shadow-lg group-active:shadow-none group-active:top-0 group-hover:bg-sky-600 group-active:bg-sky-700 duration-100 bg-sky-700">
        {text}
      </div>
    </Link>
  );
}
