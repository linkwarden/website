import Image from "next/image";
import React, { useState } from "react";
import SecondaryButton from "../SecondaryButton";
import Link from "next/link";
import AccentButton from "../AccentButton";
import SVGShowcase from "../SVGShowcase";
import { Star } from "@phosphor-icons/react";

export default function Showcase() {
  const [imageLoaded, setImageLoaded] = useState(false);

  const isSafari =
    typeof window !== "undefined" && (window as any)?.safari !== undefined;

  return (
    <div className="relative pb-40 lg:pb-0 max-w-fit mx-auto">
      <div className="z-10 max-w-5xl px-5 w-fit mx-auto xl:pt-52 lg:pt-40 md:pt-32 pt-24">
        <div className="w-fit mx-auto mb-3">
          <Link
            href="https://blog.linkwarden.app/releases/v2.5"
            target="_blank"
            className="rounded-full"
          >
            <div className="border bg-opacity-80 border-[#07334F] hover:border-sky-500 bg-background duration-200 w-fit py-2 px-3 text-xs rounded-full relative z-10">
              🎉️ Announcing <span className="font-bold">Linkwarden v2.5</span>!
              🚀
            </div>
          </Link>
        </div>
        <div className="py-2">
          <p className="lg:text-5xl sm:text-5xl text-2xl text-center font-bold relative z-10 mb-3">
            Webpage Management for
          </p>
          <p className="lg:text-5xl sm:text-5xl text-2xl text-center font-bold relative z-10">
            Individuals and Teams
          </p>
        </div>
      </div>
      <p className="relative z-10 max-w-2xl p-5 mx-auto text-center text-text sm:text-xl">
        Linkwarden is an open-source collaborative bookmark manager to collect,
        organize and preserve webpages.
      </p>

      <div className="relative z-10 flex justify-center gap-2 sm:gap-5">
        <AccentButton
          label="Start Free Trial"
          href="https://cloud.linkwarden.app/register"
        />
        <SecondaryButton path="https://github.com/linkwarden/linkwarden">
          <Star
            weight="fill"
            className="text-2xl text-slate-300 duration-100 group-hover:text-yellow-500"
          />
          Star on GitHub!
        </SecondaryButton>
      </div>

      <SVGShowcase
        className={`absolute -mt-[7rem] sm:-mt-[12rem] md:-mt-[15rem] lg:-mt-[18rem] min-[1200px]:-mt-[22rem] svg-hero-gradient ${
          isSafari ? "opacity-60" : ""
        }`}
      />

      <div
        className={
          imageLoaded
            ? "pt-10 pl-2 pr-2 pb-2 max-w-7xl w-2/3 mx-auto min-w-[350px] mt-5 mb-20"
            : " opacity-0"
        }
      >
        <div className="slide-up relative">
          <Image
            priority
            src="./app/dashboard.jpeg"
            width={1270}
            height={770}
            alt=""
            className="relative z-10 rounded-lg mx-auto border border-outline"
            onLoad={() => setImageLoaded(true)}
          />
        </div>
      </div>

      <div className="p-5">
        <p className="text-center text-2xl max-w-md mx-auto">
          Loved by thousands at the world&apos;s most innovative companies,
          including
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
