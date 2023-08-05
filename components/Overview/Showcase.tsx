import Image from "next/image";
import Link from "next/link";
import React from "react";
import PrimaryButton from "../PrimaryButton";

export default function Showcase() {
  return (
    <>
      <div className="max-w-5xl px-5 w-fit mx-auto xl:mt-52 lg:mt-40 md:mt-32 mt-24">
        <div className="py-2">
          <p className="lg:text-5xl sm:text-4xl text-3xl text-center font-bold text-black relative z-10">
            Collect, Organize, and Preserve Webpages Featuring Seamless
            Collaboration
          </p>
        </div>
      </div>
      <p className="sm:text-lg max-w-6xl p-5 mx-auto text-center text-slate-500 font-semibold">
        Linkwarden is a fully self-hostable, open-source collaborative bookmark
        manager to collect, organize and archive webpages.
      </p>
      <div className="flex justify-center gap-5">
        <PrimaryButton
          text="Start Free Trial"
          path="https://cloud.linkwarden.app/register"
        />
        <Link
          href="https://github.com/linkwarden/linkwarden"
          target="_blank"
          className="p-2 w-fit hover:bg-slate-200 flex items-center gap-2 rounded-md border border-slate-200 select-none hover:shadow-none duration-100"
        >
          <span className="material-symbols-rounded text-yellow-500">star</span>
          Star us on GitHub
        </Link>
      </div>
      <div className="p-2 mt-10 max-w-7xl mx-auto">
        <div className="p-2 relative mx-auto">
          <Image
            src="./app/links.png"
            width={1920}
            height={922}
            alt=""
            className="relative z-10 rounded-xl shadow-lg"
          />
          <div
            className="absolute z-0 duration-1000 -inset-2 opacity-20 blur-lg"
            style={{
              background:
                "linear-gradient(45deg,#44ff9a -.55%,#44b0ff 22.87%,#8b44ff 48.35%,#f64 73.34%,#ebff70 99.36%)",
            }}
          ></div>
        </div>
      </div>
    </>
  );
}
