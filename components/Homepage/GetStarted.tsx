import React from "react";
import GitHubButton from "../GitHubButton";
import Link from "next/link";
import Image from "next/image";
import AccentSubmitButton from "../AccentSubmitButton";

export default function GetStarted() {
  return (
    <div className="relative">
      <div className="flex items-center justify-between gap-5 sm:p-10 p-5 my-20 mx-auto w-fit max-w-7xl">
        <div className="w-full relative z-10 sm:p-5 max-w-7xl mx-auto rounded-3xl">
          <p className="lg:text-3xl text-2xl font-bold relative z-10 max-w-xl text-center">
            Your Bookmarking Journey Starts Here
          </p>
          <p className="font-semibold text-center mt-2">
            14-day free trial, cancel anytime.
          </p>
          <div className="flex items-center justify-center gap-5 mt-5">
            <AccentSubmitButton
              label="Start Free Trial"
              href="https://cloud.linkwarden.app/register"
            />
            <GitHubButton />
          </div>
        </div>
      </div>

      <div
        style={{
          background:
            "radial-gradient(rgb(46 16 101) 0%, rgba(12, 74, 110, 0.00) 80%)",
        }}
        className="top-0 bottom-0 right-0 left-0 absolute"
      ></div>
    </div>
  );
}
