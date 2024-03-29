import React from "react";
import SecondaryButton from "../SecondaryButton";
import Link from "next/link";
import Image from "next/image";
import AccentButton from "../AccentButton";
import { Star } from "@phosphor-icons/react";

export default function GetStarted() {
  return (
    <>
      <div className="flex items-center justify-between gap-5 sm:p-5 my-20 mx-auto w-fit max-w-7xl">
        <div className="w-full relative z-10 mx-auto rounded-3xl">
          <p className="lg:text-3xl text-2xl font-bold relative z-10 max-w-xl text-center">
            Start your bookmarking journey
          </p>
          <p className="font-semibold text-center mt-2">
            14-day free trial, cancel anytime.
          </p>
          <div className="flex justify-center sm:gap-5 gap-2 mt-8">
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
        </div>
      </div>

      <div className="bg-gradient-radial from-[#7030d81e] to-70% to-transparent mx-auto w-full max-w-7xl h-96 -mt-[21.5rem]"></div>
    </>
  );
}
