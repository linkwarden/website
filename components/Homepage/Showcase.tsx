import Image from "next/image";
import React, { useState } from "react";
import SecondaryButton from "../SecondaryButton";
import Link from "next/link";
import AccentButton from "../AccentButton";
import SVGShowcase from "../svg/SVGShowcase";

export default function Showcase() {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="relative pb-20 lg:pb-0 max-w-fit mx-auto">
      <div className="z-10 max-w-5xl px-5 w-fit mx-auto xl:pt-52 lg:pt-40 md:pt-32 pt-24">
        <div className="w-fit mx-auto mb-5">
          <Link
            href="https://blog.linkwarden.app/releases/2.11"
            target="_blank"
            className="rounded-full"
          >
            <div className="border bg-opacity-80 border-[#07334F] hover:border-[#20618a] bg-background duration-200 w-fit py-2 px-3 text-xs rounded-full relative z-10">
              🎉️ Announcing <span className="font-bold">Linkwarden 2.11</span>!
              🚀
            </div>
          </Link>
        </div>
        <div className="py-2 text-white">
          <p className="sm:text-5xl text-4xl text-center max-w-4xl font-bold relative z-10">
            Bookmarks, <span className="text-sky-200">Evolved</span>
          </p>
        </div>
      </div>
      <p className="relative z-10 max-w-xl px-5 mx-auto text-center text-gray-200 sm:text-xl mt-3 mb-10">
        Linkwarden helps you collect, read, annotate, and fully preserve what
        matters, all in one place.
      </p>

      <div className="relative z-10 flex flex-wrap justify-center px-5 gap-4 mt-5">
        <AccentButton
          label="Start Free Trial"
          href="https://cloud.linkwarden.app/register"
          className="text-sm sm:text-base w-44"
        />
        <SecondaryButton
          path="https://demo.linkwarden.app/login"
          className="text-sm sm:text-base w-44 text-center justify-center"
          openInNewTab
        >
          <p className="w-fit">Launch Demo</p>
        </SecondaryButton>
      </div>

      <SVGShowcase
        className={`absolute -mt-[7rem] sm:-mt-[12rem] md:-mt-[15rem] lg:-mt-[18rem] min-[1200px]:-mt-[22rem] opacity-60 bg-gradient-radial from-[#289DF230] from-20% via-[#6F30D830] to-70% to-transparent`}
      />

      <div
        className={
          imageLoaded
            ? "pt-5 px-5 w-full max-w-5xl mx-auto mt-5 mb-20"
            : " opacity-0"
        }
      >
        <div className="slide-up relative">
          <Image
            priority
            src="./app/dashboard.jpeg"
            width={2940}
            height={1678}
            alt=""
            className="relative z-10 rounded-lg mx-auto border border-outline"
            onLoad={() => setImageLoaded(true)}
          />
        </div>
      </div>

      <div className="p-5">
        <p className="text-center text-xl mx-auto">
          Loved by thousands at the world&apos;s most innovative companies
        </p>

        <div className="grid md:grid-cols-5 grid-cols-3 items-center mt-10 max-w-5xl mx-auto md:w-3/4 w-5/6 gap-10">
          <Image
            src="./company-logos/microsoft.png"
            width={638}
            height={136}
            alt=""
            draggable={false}
            className="invert opacity-50"
            onLoad={() => setImageLoaded(true)}
            style={{ objectFit: "contain" }}
          />
          <Image
            src="./company-logos/google.png"
            width={471}
            height={156}
            alt=""
            draggable={false}
            className="invert opacity-50 w-3/4 justify-self-center"
            onLoad={() => setImageLoaded(true)}
            style={{ objectFit: "contain" }}
          />
          <Image
            src="./company-logos/amazon.png"
            width={471}
            height={143}
            alt=""
            draggable={false}
            className="invert opacity-50 mt-3 w-3/4 justify-self-center"
            onLoad={() => setImageLoaded(true)}
            style={{ objectFit: "contain" }}
          />
          <Image
            src="./company-logos/bytedance.png"
            width={681}
            height={119}
            alt=""
            draggable={false}
            className="invert opacity-50 hidden md:block"
            onLoad={() => setImageLoaded(true)}
            style={{ objectFit: "contain" }}
          />
          <Image
            src="./company-logos/salesforce.png"
            width={582}
            height={134}
            alt=""
            draggable={false}
            className="invert opacity-50 hidden md:block"
            onLoad={() => setImageLoaded(true)}
            style={{ objectFit: "contain" }}
          />
        </div>
      </div>
    </div>
  );
}
