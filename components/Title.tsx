import React from "react";

type Props = {
  text: string;
  className?: string;
};

export default function PrimaryButton({ text, className }: Props) {
  return (
    <p
      className={`mx-auto w-fit px-3 py-1 text-sm border border-[#07334F] rounded-2xl ${className}`}
    >
      {text}
    </p>
  );
}
