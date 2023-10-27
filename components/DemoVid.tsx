import React, { useRef } from "react";

type Props = {
  src: string;
};

export default function DemoVid({ src }: Props) {
  return (
    <div
      style={{
        boxShadow:
          "0px 0px 200px #0C4A6E, 0px 0px 50px #0C4A6E, 0px 0px 25px #0C4A6E",
      }}
      className="md:w-3/4 max-w-sm lg:max-w-lg w-3/4 relative z-0 lg:rounded-[100px] rounded-[50px] outline outline-white box-border mx-auto"
    >
      <video
        width={720}
        height={720}
        autoPlay
        className="lg:rounded-[100px] rounded-[50px]"
        playsInline
        loop
      >
        <source src={src} type="video/mp4" />
      </video>
    </div>
  );
}
