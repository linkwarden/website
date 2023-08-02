import React from "react";
import PrimaryButton from "../PrimaryButton";
import Link from "next/link";

export default function GetStarted() {
  return (
    <div className="mx-5">
      <div className="relative z-10 p-5 max-w-7xl mx-auto rounded-3xl bg-gradient-to-tr from-cyan-400 to-sky-700 text-white">
        <p className="text-3xl text-center font-bold relative z-10">
          Sign up Now to Experience Linkwarden!
        </p>
        <p className="text-center font-semibold">
          14-day free trial, cancel anytime.
        </p>
        <div className="flex sm:flex-row flex-col items-center justify-center gap-5 mt-5">
          <PrimaryButton
            text="Start Free Trial"
            path="https://cloud.linkwarden.app/register"
          />
          <Link
            href="https://github.com/linkwarden/linkwarden"
            target="_blank"
            className="p-2 w-fit hover:bg-white hover:text-black flex items-center gap-2 rounded-md select-none hover:shadow-none duration-100"
          >
            <span className="material-symbols-rounded text-yellow-500">
              star
            </span>
            Star us on GitHub
          </Link>
        </div>
      </div>
    </div>
  );
}
