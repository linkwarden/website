import Image from "next/image";
import React, { useState } from "react";
import PrimaryButton from "../PrimaryButton";
import GitHubButton from "../GitHubButton";
import Link from "next/link";

export default function Showcase() {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <>
      <div
        className="relative"
        style={{
          background:
            "radial-gradient(circle at center, #0C4A6E 0%, rgba(12, 74, 110, 0.00) 50%)",
        }}
      >
        <div className="z-10 max-w-5xl px-5 w-fit mx-auto xl:pt-52 lg:pt-40 md:pt-32 pt-24">
          <div className="w-fit mx-auto mb-3">
            <Link
              href="https://blog.linkwarden.app/releases/v2.0"
              target="_blank"
              className="rounded-full"
            >
              <div className="border bg-sky-950 bg-opacity-10 border-[#07334F] hover:border-sky-500 duration-100 w-fit py-2 px-3 text-xs rounded-full">
                🎉️ Announcing{" "}
                <span className="font-bold">Linkwarden v2.0</span>! 🚀
              </div>
            </Link>
          </div>
          <div className="py-2">
            <p className="lg:text-5xl sm:text-4xl text-3xl text-center font-bold relative z-10">
              Collect, Organize, and Preserve Webpages Featuring Seamless
              Collaboration
            </p>
          </div>
        </div>
        <p className="relative z-10 max-w-6xl p-5 mx-auto text-center text-slate-300 font-semibold">
          Linkwarden is a fully self-hostable, open-source collaborative
          bookmark manager to collect, organize and archive webpages.
        </p>
        <div className="relative z-10 flex justify-center gap-5">
          <PrimaryButton
            text="Start Free Trial"
            path="https://cloud.linkwarden.app/register"
          />
          <GitHubButton />
        </div>

        <div className="pt-10 pl-2 pr-2 pb-2 max-w-7xl mx-auto">
          <div
            className={
              imageLoaded
                ? "slide-up relative opacity-90 bg-sky-500 sm:p-3 p-2 sm:rounded-[1.25rem] rounded-[1rem] bg-opacity-20 mx-3"
                : "opacity-0"
            }
          >
            <Image
              src="./app/dashboard.jpg"
              width={1542}
              height={1124}
              alt=""
              className="relative z-10 shadow-lg rounded-lg mx-auto"
              draggable="false"
              onLoad={() => setImageLoaded(true)}
            />
            <div className="absolute z-10 sm:top-3 top-2 sm:bottom-3 bottom-2 sm:left-3 left-2 sm:right-3 right-2 select-none pointer-events-none border-sky-500 border rounded-lg"></div>
            <div className="absolute z-10 top-0 bottom-0 left-0 right-0 select-none pointer-events-none border-sky-500 border sm:rounded-[1.25rem] rounded-[1rem]"></div>
            <div className="absolute bg-gradient-to-t from-[#02121c] to-transparent z-10 top-0 bottom-0 left-0 right-0 select-none pointer-events-none"></div>
          </div>
        </div>
      </div>
    </>
  );
}
