import { useState } from "react";
import AccentButton from "../AccentButton";
import SecondaryButton from "../SecondaryButton";
import Seperator from "../Seperator";
import { Check, Heart } from "@phosphor-icons/react";

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
        <p className="lg:text-4xl text-3xl font-bold text-center">
          Pick the Right Plan for You
        </p>

        <div className="flex gap-3 border border-solid border-outline w-72 mx-auto p-1 rounded-full relative mt-10 mb-5">
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

        <div className="flex lg:flex-row flex-col items-center gap-5 justify-between">
          <div className="w-full text-center max-w-sm lg:max-w-full mx-auto flex flex-col gap-5 h-[34rem] lg:w-5/6 justify-between p-5 rounded-2xl border border-outline">
            <div className="flex flex-col gap-5">
              <div>
                <p className="text-secondary">Self-Hosted</p>
                <p className="text-3xl">Free</p>
              </div>

              <Seperator />

              <ul className="flex flex-col gap-1">
                <li className="flex items-start gap-2 text-left">
                  <Check className="text-2xl text-secondary" />
                  <p>Hosted by yourself.</p>
                </li>
                <li className="flex items-start gap-2 text-left">
                  <Check className="text-2xl text-secondary" />
                  <p>Unlimited Links.</p>
                </li>
                <li className="flex items-start gap-2 text-left">
                  <Check className="text-2xl text-secondary" />
                  <p>Unlimited Collections.</p>
                </li>
                <li className="flex items-start gap-2 text-left">
                  <Check className="text-2xl text-secondary" />
                  <p>Unlimited Tags.</p>
                </li>
                <li className="flex items-start gap-2 text-left">
                  <Check className="text-2xl text-secondary" />
                  <p>All the premium features.</p>
                </li>
              </ul>
            </div>

            <SecondaryButton
              className="mx-auto"
              path="https://github.com/linkwarden/linkwarden"
            >
              Get Started
            </SecondaryButton>
          </div>

          <div
            className="w-full text-center max-w-sm order-first lg:order-none lg:max-w-full mx-auto flex flex-col gap-10 justify-between p-5 bg-gradient-to-br from-[#52468544] via-transparent to-[#39316022] rounded-2xl border border-[#6e4da6]"
            style={{
              boxShadow: "#ffffff20 0px 5px 20px 0px",
            }}
          >
            <div className="flex flex-col gap-5">
              <div>
                <p className="text-secondary">Cloud</p>
                <p className="text-3xl">
                  ${plan === Plan.monthly ? "4" : "3"}{" "}
                  <span className="text-sm text-gray-400">/mo</span>
                </p>
                <p className="text-sm text-gray-400">Per User</p>
              </div>

              <Seperator />

              <ul className="mb-10 flex flex-col gap-1">
                <li className="flex items-start gap-2 text-left">
                  <Check className="text-2xl text-secondary" />
                  <p>Hosted by us.</p>
                </li>
                <li className="flex items-start gap-2 text-left">
                  <Check className="text-2xl text-secondary" />
                  <p>Up to 30,000 Links.</p>
                </li>
                <li className="flex items-start gap-2 text-left">
                  <Check className="text-2xl text-secondary" />
                  <p>Unlimited Collections.</p>
                </li>
                <li className="flex items-start gap-2 text-left">
                  <Check className="text-2xl text-secondary" />
                  <p>Unlimited Tags.</p>
                </li>
                <li className="flex items-start gap-2 text-left">
                  <Check className="text-2xl text-secondary" />
                  <p>All the premium features.</p>
                </li>
                <li className="flex items-start gap-2 text-left">
                  <Check className="text-2xl text-secondary" />
                  <p>Priority support.</p>
                </li>
                <li className="flex items-start gap-2 text-left">
                  <Check className="text-2xl text-secondary" />
                  <p>Automatic updates.</p>
                </li>
                <li className="flex items-center gap-2 text-left">
                  <Heart weight="fill" className="text-2xl text-pink-500" />
                  <p>Support open source!</p>
                </li>
              </ul>
            </div>

            <div>
              <p className="text-text text-sm text-center mt-5 mb-2">
                14-day free trial, cancel anytime.
              </p>
              <AccentButton
                label="Start Free Trial"
                className="mx-auto"
                href="https://cloud.linkwarden.app/register"
              />
            </div>
          </div>

          <div className="w-full text-center max-w-sm lg:max-w-full mx-auto flex flex-col gap-5 h-[34rem] lg:w-5/6 justify-between p-5 rounded-2xl border border-outline">
            <div className="flex flex-col gap-5">
              <div>
                <p className="text-secondary">Custom</p>
                <p className="text-3xl">Contact Us</p>
              </div>

              <Seperator />

              <ul className="flex flex-col gap-1">
                <li className="flex items-start gap-2 text-left">
                  <Check className="text-2xl text-secondary" />
                  <p>Hosted by us/yourself.</p>
                </li>
                <li className="flex items-start gap-2 text-left">
                  <Check className="text-2xl text-secondary" />
                  <p>Unlimited Links.</p>
                </li>
                <li className="flex items-start gap-2 text-left">
                  <Check className="text-2xl text-secondary" />
                  <p>Unlimited Collections.</p>
                </li>
                <li className="flex items-start gap-2 text-left">
                  <Check className="text-2xl text-secondary" />
                  <p>Unlimited Tags.</p>
                </li>
                <li className="flex items-start gap-2 text-left">
                  <Check className="text-2xl text-secondary" />
                  <p>All the premium features.</p>
                </li>
                <li className="flex items-start gap-2 text-left">
                  <Check className="text-2xl text-secondary" />
                  <p>Priority support.</p>
                </li>
                <li className="flex items-start gap-2 text-left">
                  <Check className="text-2xl text-secondary" />
                  <p>Automatic updates.</p>
                </li>
                <li className="flex items-start gap-2 text-left">
                  <Check className="text-2xl text-secondary" />
                  <p>Fully customizable instance.</p>
                </li>
                <li className="flex items-start gap-2 text-left">
                  <Check className="text-2xl text-secondary" />
                  <p>Single Sign-On (SSO).</p>
                </li>
                <li className="flex items-center gap-2 text-left">
                  <Heart weight="fill" className="text-2xl text-pink-500" />
                  <p>Support open source!</p>
                </li>
              </ul>
            </div>

            <SecondaryButton
              className="mx-auto"
              path="mailto:support@linkwarden.app"
              openInNewTab={false}
            >
              Contact Us
            </SecondaryButton>
          </div>
        </div>
      </div>
    </>
  );
}

export default Pricing;
