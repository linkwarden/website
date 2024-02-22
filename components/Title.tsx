import React from "react";

type Props = {
  text: string;
  className?: string;
};

export default function Title({ text, className }: Props) {
  return (
    <p
      className={`mx-auto w-fit px-3 py-1 text-sm border border-outline glass-gradient rounded-2xl ${className}`}
    >
      {text}
    </p>
  );
}
