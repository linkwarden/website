import React, { useRef } from "react";

type Props = {
  src: string;
  className?: string;
};

export default function DemoVid({ src, className }: Props) {
  return (
    <div
      style={{
        boxShadow:
          "0px 0px 200px #0C4A6E, 0px 0px 50px #0C4A6E, 0px 0px 25px #0C4A6E",
      }}
      className={`md:w-3/4 lg:max-w-xl w-3/4 relative z-0 rounded-[20px] border border-sky-500 box-border ${
        className || ""
      }`}
    >
      <video
        width={880}
        height={720}
        autoPlay
        className="rounded-[20px]"
        playsInline
        muted
        loop
      >
        <source src={src} type="video/mp4" />
      </video>
    </div>
  );
}
