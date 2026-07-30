import { useState } from "react";
import AccentButton from "../AccentButton";
import Seperator from "../Separator";
import {
  ArchiveIcon,
  ArrowsClockwiseIcon,
  CheckIcon,
  CloudIcon,
  HeartIcon,
  HighlighterIcon,
  LifebuoyIcon,
  LinkIcon,
  MagnifyingGlassIcon,
  RssIcon,
  SparkleIcon,
} from "@phosphor-icons/react";

function Pricing() {
  enum Plan {
    monthly,
    yearly,
  }

  const [plan, setPlan] = useState<Plan>(1);

  return (
    <>
      <div className="mb-10" id="pricing"></div>

      <div className="max-w-5xl px-5 mx-auto pt-16">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-x-16 lg:gap-y-0">
          <div className="text-center lg:text-left lg:col-start-1 lg:row-start-1 lg:self-end">
            <p className="lg:text-5xl text-3xl font-bold">Simple Pricing</p>

            <p className="text-gray-400 sm:text-lg mt-4 max-w-md mx-auto lg:mx-0">
              One plan with everything included
            </p>

            <div className="flex gap-3 border border-solid border-outline w-72 mx-auto lg:mx-0 p-1 rounded-full relative mt-8">
              <button
                onClick={() => setPlan(Plan.monthly)}
                className={`w-full duration-75 text-sm rounded-full p-1 ${
                  plan === Plan.monthly
                    ? "text-white bg-violet-800"
                    : "hover:opacity-80"
                }`}
              >
                <p>Monthly</p>
              </button>

              <button
                onClick={() => setPlan(Plan.yearly)}
                className={`w-full duration-75 text-sm rounded-full p-1 ${
                  plan === Plan.yearly
                    ? "text-white bg-violet-800"
                    : "hover:opacity-80"
                }`}
              >
                <p>Yearly</p>
              </button>
              <div className="absolute -top-3 -right-4 text-sm px-1 bg-red-600 text-white rounded-md rotate-[22deg]">
                25% Off
              </div>
            </div>
          </div>

          <div
            className="w-full max-w-sm text-center mx-auto lg:mx-0 lg:col-start-2 lg:row-start-1 lg:row-span-2 lg:self-center lg:justify-self-end flex flex-col gap-5 justify-between p-5 bg-gradient-to-br from-[#52468544] via-transparent to-[#39316022] rounded-md border border-[#6e4da6]"
            style={{
              boxShadow: "#ffffff20 0px 5px 20px 0px",
            }}
          >
            <div className="flex flex-col gap-5">
              <div>
                <p className="text-secondary">
                  Cloud {plan === Plan.monthly ? "Monthly" : "Yearly"}
                </p>
                <p className="text-3xl">
                  ${plan === Plan.monthly ? "4" : "3"}{" "}
                  <span className="text-sm text-gray-400">/mo</span>
                </p>
                <p className="text-sm text-gray-400">Per User</p>
              </div>

              <Seperator />

              <ul className="flex flex-col gap-2">
                <li className="flex items-center gap-2 text-left">
                  <CloudIcon className="text-xl text-gray-400 shrink-0" />
                  <p>Hosted by us</p>
                </li>
                <li className="flex items-center gap-2 text-left">
                  <ArchiveIcon className="text-xl text-gray-400 shrink-0" />
                  <p>Full-page preservation</p>
                </li>
                <li className="flex items-center gap-2 text-left">
                  <SparkleIcon className="text-xl text-gray-400 shrink-0" />
                  <p>Optional AI tagging</p>
                </li>
                <li className="flex items-center gap-2 text-left">
                  <MagnifyingGlassIcon className="text-xl text-gray-400 shrink-0" />
                  <p>Full-text search</p>
                </li>
                <li className="flex items-center gap-2 text-left">
                  <HighlighterIcon className="text-xl text-gray-400 shrink-0" />
                  <p>Highlights and annotations</p>
                </li>
                <li className="flex items-center gap-2 text-left">
                  <RssIcon className="text-xl text-gray-400 shrink-0" />
                  <p>RSS feeds</p>
                </li>
                <li className="flex items-center gap-2 text-left">
                  <LifebuoyIcon className="text-xl text-gray-400 shrink-0" />
                  <p>Priority support</p>
                </li>
                <li className="flex items-center gap-2 text-left">
                  <ArrowsClockwiseIcon className="text-xl text-gray-400 shrink-0" />
                  <p>Automatic updates</p>
                </li>
                <li className="flex items-center gap-2 text-left">
                  <LinkIcon className="text-xl text-gray-400 shrink-0" />
                  <p>30,000 Links per user</p>
                </li>
                <li className="flex items-center gap-2 text-left">
                  <HeartIcon
                    weight="fill"
                    className="text-xl text-pink-500/90 shrink-0"
                  />
                  <p>Support open source!</p>
                </li>
              </ul>
            </div>

            <div>
              <p className="text-text text-sm text-center mt-2 mb-2">
                14-day free trial, cancel anytime
              </p>
              <AccentButton
                label="Get Started"
                className="mx-auto"
                href="https://cloud.linkwarden.app/register"
              />
            </div>
          </div>

          <div className="lg:col-start-1 lg:row-start-2 lg:self-start lg:pt-8">
            <Seperator className="mb-8 hidden lg:block" />

            <ul className="flex flex-col gap-4 max-w-md mx-auto lg:mx-0">
              <li className="flex items-start gap-3 text-left">
                <CheckIcon className="text-2xl text-green-400 shrink-0" />
                <p className="text-sm text-gray-300">
                  Fully open source under AGPLv3, with 19k+ stars on GitHub
                </p>
              </li>
              <li className="flex items-start gap-3 text-left">
                <CheckIcon className="text-2xl text-green-400 shrink-0" />
                <p className="text-sm text-gray-300">
                  Export your links whenever you want
                </p>
              </li>
              <li className="flex items-start gap-3 text-left">
                <CheckIcon className="text-2xl text-green-400 shrink-0" />
                <p className="text-sm text-gray-300">
                  No lock-in — cancel anytime and take your data with you
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Pricing;
