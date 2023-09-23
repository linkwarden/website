import React from "react";
import PrimaryButton from "../PrimaryButton";
import GitHubButton from "../GitHubButton";
import Link from "next/link";
import Image from "next/image";

export default function GetStarted() {
  return (
    <div className="relative flex items-center sm:p-10 p-5 my-20">
      <div className="w-full relative z-10 sm:p-5 max-w-7xl mx-auto rounded-3xl">
        <p className="lg:text-3xl text-2xl font-bold relative z-10">
          Start managing your useful contents across the web right away!
        </p>
        <p className="font-semibold">14-day free trial, cancel anytime.</p>
        <div className="flex items-center gap-5 mt-5">
          <PrimaryButton
            text="Start Free Trial"
            path="https://cloud.linkwarden.app/register"
          />
          <GitHubButton />
        </div>
      </div>

      <Image
        src="./icon.png"
        width={441}
        height={441}
        alt=""
        className="w-40 min-[700px]:w-60 hidden min-[650px]:block rounded-2xl relative z-10"
      />

      <div
        style={{
          background:
            "radial-gradient(#0C4A6E 0%, rgba(12, 74, 110, 0.00) 70%)",
        }}
        className="top-0 bottom-0 -right-72 left-0 -translate-x-96 absolute"
      ></div>
    </div>
  );
}
