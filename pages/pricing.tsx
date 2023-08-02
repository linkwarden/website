import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PrimaryButton from "@/components/PrimaryButton";
import Link from "next/link";
import React from "react";

function pricing() {
  return (
    <div>
      <Navbar />
      <div className="max-w-5xl px-5 mx-auto mt-20">
        <p className="text-3xl text-center pt-10 font-bold">Pricing</p>
        <p className="text-center font-semibold">
          Simple, straightforward pricing
        </p>
        <div className="flex md:flex-row flex-col gap-5 justify-between items-stretch py-10">
          <div className="w-full text-center max-w-sm md:max-w-full mx-auto flex flex-col justify-between p-2 bg-slate-100 shadow rounded-md">
            <div>
              <p className="font-bold text-2xl">Self-hosted</p>
              <p className="text-3xl">Free</p>
              <ul className="mt-2">
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
                  <p>All the premium features.</p>
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
              </ul>
            </div>

            <PrimaryButton
              text="Get Started"
              target="_blank"
              path="https://docs.linkwarden.app/getting-started/self-hosting"
              className="mt-5 mx-auto"
            />
          </div>
          <div
            className="w-full text-center max-w-sm md:max-w-full mx-auto flex flex-col justify-between p-2 bg-gradient-to-tr from-sky-100 to-slate-100 rounded-md"
            style={{ boxShadow: "rgb(38, 57, 77) 0px 20px 20px -10px" }}
          >
            <div>
              <p className="font-bold text-2xl">Cloud</p>
              <p className="text-3xl">
                $4 <span className="text-sm text-gray-500">user/month</span>
              </p>
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
                  <p>All the premium features.</p>
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
                  <p>Priority support.</p>
                </li>
              </ul>
            </div>

            <p className="text-gray-500 text-sm text-center mt-5 mb-2">
              14-day free trial, cancel anytime.
            </p>
            <PrimaryButton
              text="Start Free Trial"
              path="https://cloud.linkwarden.app/register"
              className="mx-auto"
            />
          </div>
          <div className="w-full text-center max-w-sm md:max-w-full mx-auto flex flex-col justify-between p-2 bg-slate-100 shadow rounded-md">
            <div>
              <p className="font-bold text-2xl">Enterprise</p>
              <p className="text-3xl">Custom</p>
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
                  <p>All the premium features.</p>
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
                  <p>Priority support.</p>
                </li>
                <li className="flex items-start gap-2 text-left">
                  <span className="material-symbols-rounded text-2xl select-none text-green-500">
                    check
                  </span>
                  <p>Fully customizable instance.</p>
                </li>
              </ul>
            </div>

            <PrimaryButton
              text="Contact Us"
              path="mailto:support@linkwarden.app"
              className="mt-5 mx-auto"
            />
          </div>
        </div>

        <p className="text-3xl text-center my-10 font-bold">
          Frequently Asked Questions
        </p>

        <div className="p-5 border mb-5 border-sky-200 rounded-lg">
          <details className="faq">
            <summary className="cursor-pointer font-semibold text-lg">
              How does the free trial work?
            </summary>
            <p className="my-2 p-5 bg-slate-50 rounded-lg">
              Linkwarden Cloud’s free trial will last for 14 days from the
              purchase date. The trial gives you full access to all features in
              that plan. At the end of the trial, you will be billed the regular
              amount. You can cancel your trial at any time within the trial
              period at no cost.
            </p>
          </details>

          <details className="faq">
            <summary className="cursor-pointer font-semibold text-lg">
              How will I be billed?
            </summary>
            <p className="my-2 p-5 bg-slate-50 rounded-lg">
              You will be billed every month. The payment is being handled by{" "}
              <Link
                href="https://stripe.com/"
                target="_blank"
                className="font-bold underline"
              >
                Stripe
              </Link>
              , the payment infrastructure that millions of businesses rely on.
            </p>
          </details>

          <details className="faq">
            <summary className="cursor-pointer font-semibold text-lg">
              Can I Import/Export my data?
            </summary>
            <p className="my-2 p-5 bg-slate-50 rounded-lg">
              We&apos;re actively working on this important feature to enhance
              your experience. While it&apos;s not available yet, it&apos;s
              definitly coming soon. Stay tuned for updates. Thank you for your
              understanding and patience as we improve your experience!
            </p>
          </details>

          <details className="faq">
            <summary className="cursor-pointer font-semibold text-lg">
              How can I cancel my plan?
            </summary>
            <p className="my-2 p-5 bg-slate-50 rounded-lg">
              You can cancel your plan either by contacting us at{" "}
              <Link
                className="font-bold underline"
                href="mailto:support@linkwarden.app"
              >
                support@linkwarden.app
              </Link>{" "}
              about the inquiry, or by logging into your account and clicking on
              your profile photo &gt; “Settings” &gt; “Billing Portal” &gt; “Go
              to Billing Portal”, the billing portal is being handled by Stripe,
              after logging in, from there you can see the “Cancel Plan” option.
              After that, your account will be disabled in less than a month.
            </p>
          </details>
        </div>

        <p className="text-center text-sm text-gray-500">
          For any other questions, feel free to reach out to us at{" "}
          <Link className="font-bold" href="mailto:support@linkwarden.app">
            support@linkwarden.app
          </Link>{" "}
          and we will get back to you as soon as possible.
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default pricing;
