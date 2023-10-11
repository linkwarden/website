import React, { useRef, useState } from "react";

type Props = {
  src: string;
};

export default function myComponent({ src }: Props) {
  const vidRef = useRef<any>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const handlePlayVideo = () => {
    vidRef.current.pause();
    vidRef.current.currentTime = "0";
    vidRef.current.play();
  };

  const handleVideoEnd = () => {
    setIsPlaying(false);
  };

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
        ref={vidRef}
        className="lg:rounded-[100px] rounded-[50px]"
        onPlay={() => setIsPlaying(true)}
        onEnded={handleVideoEnd}
      >
        <source src={src} type="video/mp4" />
      </video>
      {!isPlaying ? (
        <div className="text-center mt-3 mx-auto fade-in text-sky-200 left-0 right-0 absolute">
          <p
            onClick={handlePlayVideo}
            className="w-fit mx-auto select-none cursor-pointer"
          >
            Replay?
          </p>
        </div>
      ) : undefined}
    </div>
  );
}
