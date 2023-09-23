import PrimaryButton from "@/components/PrimaryButton";
import Link from "next/link";
import { useState } from "react";

function Pricing() {
  enum Plan {
    monthly,
    yearly,
  }

  const [plan, setPlan] = useState<Plan>(0);

  return (
    <div className="max-w-5xl px-5 mx-auto pt-20" id="pricing">
      <p className="lg:text-4xl text-3xl font-bold text-center">
        Simple, Straightforward Plans & Pricing
      </p>

      <div className="flex text-white dark:text-black gap-3 border-2 border-solid border-[#d3d3d31d] w-72 mx-auto p-1 rounded-xl relative mt-10 mb-5">
        <button
          onClick={() => setPlan(Plan.monthly)}
          className={`w-full text-black dark:text-white duration-75 text-sm rounded-lg p-1 ${
            plan === Plan.monthly
              ? "text-white bg-sky-700 dark:bg-sky-700"
              : "hover:opacity-80"
          }`}
        >
          <p>Monthly</p>
        </button>

        <button
          onClick={() => setPlan(Plan.yearly)}
          className={`w-full text-black dark:text-white duration-75 text-sm rounded-lg p-1 ${
            plan === Plan.yearly
              ? "text-white bg-sky-700 dark:bg-sky-700"
              : "hover:opacity-80"
          }`}
        >
          <p>Yearly</p>
        </button>
        <div className="absolute -top-4 -right-4 px-1 bg-red-500 text-white rounded-md rotate-[22deg]">
          %25 Off
        </div>
      </div>

      <div className="flex md:flex-row flex-col gap-5 justify-between items-stretch">
        <div className="w-full text-center max-w-sm md:max-w-full mx-auto flex flex-col justify-between p-5 rounded-2xl border-2 border-[#d3d3d31d]">
          <div>
            <p className="text-sky-500">Self-Hosted</p>
            <p className="text-3xl mb-10">Free</p>

            <hr className="-mx-5 border border-[#d3d3d31d] my-5" />

            <ul className="mt-2 mb-5">
              <li className="flex items-start gap-2 text-left">
                <span className="material-symbols-rounded text-2xl select-none text-green-500">
                  check
                </span>
                <p>Hosted by yourself.</p>
              </li>
              <li className="flex items-start gap-2 text-left">
                <span className="material-symbols-rounded text-2xl select-none text-green-500">
                  check
                </span>
                <p>Unlimited Links.</p>
              </li>
              <li className="flex items-start gap-2 text-left">
                <span className="material-symbols-rounded text-2xl select-none text-green-500">
                  check
                </span>
                <p>Unlimited Collections.</p>
              </li>
              <li className="flex items-start gap-2 text-left">
                <span className="material-symbols-rounded text-2xl select-none text-green-500">
                  check
                </span>
                <p>Unlimited Tags.</p>
              </li>
              <li className="flex items-start gap-2 text-left">
                <span className="material-symbols-rounded text-2xl select-none text-green-500">
                  check
                </span>
                <p>All the premium features.</p>
              </li>
            </ul>
          </div>

          <PrimaryButton
            text="Get Started"
            path="https://github.com/linkwarden/linkwarden"
          />
        </div>

        <div
          className="w-full text-center max-w-sm md:max-w-full mx-auto flex flex-col justify-between p-5 bg-gradient-to-b from-[#15242d] to-transparent rounded-2xl border-2 border-sky-500"
          style={{ boxShadow: "rgb(38, 57, 77) 0px 20px 20px -10px" }}
        >
          <div>
            <p className="text-sky-500">Cloud</p>
            <p className="text-3xl">
              ${plan === Plan.monthly ? "4" : "3"}{" "}
              <span className="text-sm text-gray-400">/mo</span>
            </p>
            <p className="text-sm text-gray-400">Per User</p>

            <hr className="-mx-5 border border-[#d3d3d31d] my-5" />

            <ul className="mt-2">
              <li className="flex items-start gap-2 text-left">
                <span className="material-symbols-rounded text-2xl select-none text-green-500">
                  check
                </span>
                <p>Hosted by us.</p>
              </li>
              <li className="flex items-start gap-2 text-left">
                <span className="material-symbols-rounded text-2xl select-none text-green-500">
                  check
                </span>
                <p>Unlimited Links.</p>
              </li>
              <li className="flex items-start gap-2 text-left">
                <span className="material-symbols-rounded text-2xl select-none text-green-500">
                  check
                </span>
                <p>Unlimited Collections.</p>
              </li>
              <li className="flex items-start gap-2 text-left">
                <span className="material-symbols-rounded text-2xl select-none text-green-500">
                  check
                </span>
                <p>Unlimited Tags.</p>
              </li>
              <li className="flex items-start gap-2 text-left">
                <span className="material-symbols-rounded text-2xl select-none text-green-500">
                  check
                </span>
                <p>All the premium features.</p>
              </li>
              <li className="flex items-start gap-2 text-left">
                <span className="material-symbols-rounded text-2xl select-none text-green-500">
                  check
                </span>
                <p>Priority support.</p>
              </li>
            </ul>
          </div>

          <p className="text-gray-400 text-sm text-center mt-5 mb-2">
            14-day free trial, cancel anytime.
          </p>
          <PrimaryButton
            text="Start Free Trial"
            path="https://cloud.linkwarden.app/register"
          />
        </div>

        <div className="w-full text-center max-w-sm md:max-w-full mx-auto flex flex-col justify-between p-5 rounded-2xl border-2 border-[#d3d3d31d]">
          <div>
            <p className="text-sky-500">Custom</p>
            <p className="text-3xl mb-10">Contact Us</p>

            <hr className="-mx-5 border border-[#d3d3d31d] my-5" />

            <ul className="mt-2 mb-5">
              <li className="flex items-start gap-2 text-left">
                <span className="material-symbols-rounded text-2xl select-none text-green-500">
                  check
                </span>
                <p>Hosted by us/yourself.</p>
              </li>
              <li className="flex items-start gap-2 text-left">
                <span className="material-symbols-rounded text-2xl select-none text-green-500">
                  check
                </span>
                <p>Unlimited Links.</p>
              </li>
              <li className="flex items-start gap-2 text-left">
                <span className="material-symbols-rounded text-2xl select-none text-green-500">
                  check
                </span>
                <p>Unlimited Collections.</p>
              </li>
              <li className="flex items-start gap-2 text-left">
                <span className="material-symbols-rounded text-2xl select-none text-green-500">
                  check
                </span>
                <p>Unlimited Tags.</p>
              </li>
              <li className="flex items-start gap-2 text-left">
                <span className="material-symbols-rounded text-2xl select-none text-green-500">
                  check
                </span>
                <p>All the premium features.</p>
              </li>
              <li className="flex items-start gap-2 text-left">
                <span className="material-symbols-rounded text-2xl select-none text-green-500">
                  check
                </span>
                <p>Fully custom instance.</p>
              </li>
            </ul>
          </div>

          <PrimaryButton
            text="Contact Us"
            path="mailto:support@linkwarden.app"
          />
        </div>
      </div>
    </div>
  );
}

export default Pricing;
