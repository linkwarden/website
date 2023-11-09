import Image from "next/image";
import React from "react";
import PrimaryButton from "../PrimaryButton";
import GitHubButton from "../GitHubButton";
import Link from "next/link";

export default function Showcase() {
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
          <div className="pl-2 pr-2 pb-2 relative mx-auto">
            <Image
              src="./app/links.png"
              width={1920}
              height={922}
              alt=""
              className="relative z-10 rounded-xl shadow-lg slide-up"
            />
          </div>
        </div>
      </div>
    </>
  );
}
