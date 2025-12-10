import React from "react";
import SecondaryButton from "../SecondaryButton";
import AccentButton from "../AccentButton";

export default function GetStarted() {
  return (
    <>
      <div className="flex items-center justify-between gap-5 sm:p-5 my-20 mx-auto w-fit max-w-7xl">
        <div className="w-full relative z-10 mx-auto rounded-3xl">
          <p className="lg:text-3xl text-2xl font-bold relative z-10 max-w-xl text-center">
            Reimagine how you save links
          </p>
          <p className="text-center mt-2">14-day free trial, cancel anytime</p>
          <div className="flex justify-center flex-col sm:flex-row px-5 gap-4 mt-5">
            <AccentButton
              label="Start Free Trial"
              href="https://cloud.linkwarden.app/register"
              className="text-sm sm:text-base sm:w-48 w-full"
            />
            <SecondaryButton
              path="https://demo.linkwarden.app/login"
              className="text-sm sm:text-base sm:w-48 w-full text-center justify-center"
              openInNewTab
            >
              <p className="text-center w-full">Launch Demo</p>
            </SecondaryButton>
          </div>
        </div>
      </div>

      <div className="bg-gradient-radial from-[#7030d81e] to-70% to-transparent mx-auto w-full max-w-7xl h-96 -mt-[21.5rem]"></div>
    </>
  );
}
