import Image from "next/image";
import React, { useState } from "react";
import GitHubButton from "../GitHubButton";
import Link from "next/link";
import AccentSubmitButton from "../AccentSubmitButton";

export default function Showcase() {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="relative bg-gradient-to-b from-black via-60% via-violet-800 pb-20">
      <div className="z-10 max-w-5xl px-5 w-fit mx-auto xl:pt-52 lg:pt-40 md:pt-32 pt-24">
        <div className="w-fit mx-auto mb-3">
          <Link
            href="https://blog.linkwarden.app/releases/v2.4"
            target="_blank"
            className="rounded-full"
          >
            <div className="border bg-opacity-70 border-[#07334F] hover:border-sky-500 duration-200 w-fit py-2 px-3 text-xs rounded-full">
              🎉️ Announcing <span className="font-bold">Linkwarden v2.4</span>!
              🚀
            </div>
          </Link>
        </div>
        <div className="py-2">
          <p className="lg:text-5xl sm:text-4xl text-3xl text-center font-bold relative z-10">
            Effortless Webpage Management for Individuals and Teams
          </p>
        </div>
      </div>
      <p className="relative z-10 max-w-2xl p-5 mx-auto text-center text-neutral-300 font-semibold text-xl">
        Linkwarden is an open-source collaborative bookmark manager to collect,
        organize and preserve webpages.
      </p>
      <div className="relative z-10 flex justify-center gap-5">
        <AccentSubmitButton
          label="Start Free Trial"
          href="https://cloud.linkwarden.app/register"
        />
        <GitHubButton />
      </div>

      <div className="pt-10 pl-2 pr-2 pb-2 max-w-7xl w-2/3 mx-auto min-w-[350px] mt-10 mb-20">
        <div className="slide-up relative">
          <Image
            src="./app/dashboard.jpeg"
            width={1270}
            height={770}
            alt=""
            className="relative z-10 rounded-lg mx-auto"
            onLoad={() => setImageLoaded(true)}
          />
          <div className="absolute z-10 top-0 left-0 bottom-0 right-0 select-none pointer-events-none rounded-lg glow-gradient"></div>
          <div className="absolute z-10 top-0 left-0 bottom-0 right-0 select-none pointer-events-none border-sky-500 border rounded-lg"></div>
        </div>
      </div>

      <div className="p-5">
        <p className="text-center text-2xl">
          Loved by thousands at the world's most innovative companies, including
        </p>

        <div className="flex w-full flex-wrap items-center justify-center gap-10 mt-10 max-w-5xl mx-auto">
          <Image
            src="./company-logos/microsoft.png"
            width={638}
            height={136}
            alt=""
            draggable={false}
            className="invert sm:w-1/6 w-2/6 opacity-50"
            onLoad={() => setImageLoaded(true)}
            style={{ objectFit: "contain" }}
          />
          <Image
            src="./company-logos/google.png"
            width={471}
            height={156}
            alt=""
            draggable={false}
            className="invert sm:w-[13%] w-[26%] opacity-50"
            onLoad={() => setImageLoaded(true)}
            style={{ objectFit: "contain" }}
          />
          <Image
            src="./company-logos/amazon.png"
            width={471}
            height={143}
            alt=""
            draggable={false}
            className="invert sm:w-[13%] w-[26%] opacity-50 mt-3"
            onLoad={() => setImageLoaded(true)}
            style={{ objectFit: "contain" }}
          />
          <Image
            src="./company-logos/bytedance.png"
            width={681}
            height={119}
            alt=""
            draggable={false}
            className="invert sm:w-1/6 w-2/6 opacity-50"
            onLoad={() => setImageLoaded(true)}
            style={{ objectFit: "contain" }}
          />
          <Image
            src="./company-logos/salesforce.png"
            width={582}
            height={134}
            alt=""
            draggable={false}
            className="invert sm:w-1/6 w-2/6 opacity-50"
            onLoad={() => setImageLoaded(true)}
            style={{ objectFit: "contain" }}
          />
        </div>
      </div>
    </div>
  );
}
