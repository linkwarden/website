import Image from "next/image";
import Link from "next/link";
import React from "react";
import Title from "../Title";
import ShortendFeatures from "../ShortendFeatures";

export default function Features() {
  return (
    <>
      <div className="max-w-7xl pt-20 px-5 w-fit mx-auto" id="features">
        <Title text="Collect and Organize" className="mb-10" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="w-full flex flex-col gap-5">
            <p className="lg:text-4xl text-3xl font-bold">
              Collect and Organize Webpages Effortlessly
            </p>
            <p>
              Whether you stumble upon an interesting article, a valuable
              resource, or a design inspiration relating to your project,
              Linkwarden makes it a breeze to save, store, and categorize them
              all in one central hub.
            </p>
            <ul>
              <li className="flex items-start gap-2">
                <span className="material-symbols-rounded text-3xl select-none text-sky-500">
                  check
                </span>
                <p>
                  Collect Links from any browser with just a few click, so you
                  can easily access all your saved webpages in one place.
                </p>
              </li>

              <li className="flex items-start gap-2">
                <span className="material-symbols-rounded text-3xl select-none text-sky-500">
                  check
                </span>
                <p>
                  Effortlessly organize your links with custom tags and folders,
                  so you can easily find what you need when you need it.
                </p>
              </li>

              <li className="flex items-start gap-2">
                <span className="material-symbols-rounded text-3xl select-none text-sky-500">
                  check
                </span>
                <p>
                  Instantly create collections to group related links, ensuring
                  a clutter-free and intuitive link management system.
                </p>
              </li>
            </ul>
          </div>
          <Image
            src="./app/collect.png"
            width={900}
            height={900}
            alt=""
            className="md:w-full max-w-sm lg:max-w-lg w-full rounded-2xl relative z-10"
          />
        </div>

        <Title text="Preserve Webpages" className="my-10" />

        <div className="flex flex-col md:flex-row-reverse justify-between items-center gap-10 my-10">
          <div className="w-full flex flex-col gap-5">
            <p className="lg:text-4xl text-3xl font-bold">
              Preserve Your Webpages for Eternity
            </p>
            <p>
              Preserve the webpages you love and never worry about broken links
              again. Linkwarden allows you to revisit your favorite web content,
              even if the original page is no longer available.
            </p>
            <ul>
              <li className="flex items-start gap-2">
                <span className="material-symbols-rounded text-3xl select-none text-sky-500">
                  check
                </span>
                <p>
                  Auto-capture a copy of each webpage as a Screenshot (.png) and
                  a PDF, two of the most used formats out there.
                </p>
              </li>

              <li className="flex items-start gap-2">
                <span className="material-symbols-rounded text-3xl select-none text-sky-500">
                  check
                </span>
                <p>
                  Download your archived webpages, ensuring you have access to
                  crucial information even without an internet connection.
                </p>
              </li>

              <li className="flex items-start gap-2">
                <span className="material-symbols-rounded text-3xl select-none text-sky-500">
                  check
                </span>
                <p>
                  Safeguard your webpages against{" "}
                  <Link
                    target="_blank"
                    className="underline"
                    href="https://www.howtogeek.com/786227/what-is-link-rot-and-how-does-it-threaten-the-web/"
                  >
                    Link Rot
                  </Link>
                  , preventing them from becoming dead or broken over time.
                </p>
              </li>
            </ul>
          </div>

          <Image
            src="./app/preserve.png"
            width={900}
            height={900}
            alt=""
            className="md:w-full max-w-sm lg:max-w-lg w-full rounded-2xl relative z-10"
          />
        </div>

        <Title text="Collaborate Seamlessly" className="my-10" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="w-full flex flex-col gap-5">
            <p className="lg:text-4xl text-3xl font-bold">
              Collaborate and Share with Ease
            </p>
            <p>
              Linkwarden isn&apos;t just for personal use. It&apos;s the perfect
              tool to supercharge your collaboration efforts, making teamwork
              smoother and more efficient.
            </p>
            <ul>
              <li className="flex items-start gap-2">
                <span className="material-symbols-rounded text-3xl select-none text-sky-500">
                  check
                </span>
                <p>
                  Invite team members to collaborate on shared collections,
                  streamlining research and knowledge sharing.
                </p>
              </li>

              <li className="flex items-start gap-2">
                <span className="material-symbols-rounded text-3xl select-none text-sky-500">
                  check
                </span>
                <p>
                  Assign customizable permissions to each member, giving you
                  full control over who can create, edit, or delete links within
                  your shared collections.
                </p>
              </li>

              <li className="flex items-start gap-2">
                <span className="material-symbols-rounded text-3xl select-none text-sky-500">
                  check
                </span>
                <p>
                  Easily share curated collections with the public, so they can
                  benefit from your expertise and curated content.
                </p>
              </li>
            </ul>
          </div>
          <Image
            src="./app/collaborate.png"
            width={900}
            height={900}
            alt=""
            className="md:w-full max-w-sm lg:max-w-lg w-full rounded-2xl relative z-10"
          />
        </div>

        <div className="p-10">
          <p className="lg:text-4xl text-3xl mb-10 font-bold text-center">
            Hold on, there&apos;s more!
          </p>
          <div className="grid lg:grid-cols-3 sm:grid-cols-2 w-fit mx-auto gap-5 my-5">
            <ShortendFeatures
              icon="code"
              title="Open Source and Fully Self-Hostable"
            >
              <p>
                We published our entire source code to GitHub so you can easily
                deploy it onto your own machine at any time.
              </p>
            </ShortendFeatures>
            <ShortendFeatures icon="shield_lock" title="Privacy Friendly">
              <p>
                Privacy is one of the core fundamentals of human rights, which
                is why we won’t sell your data to third party.
              </p>
            </ShortendFeatures>
            <ShortendFeatures icon="devices" title="Responsive Design">
              <p>
                Designed for every screen size, from widescreen monitors down to
                smartphones.
              </p>
            </ShortendFeatures>
            <ShortendFeatures
              icon="push_pin"
              title="Pin your Favorite Webpages"
            >
              <p>
                You can pin your favorite webpages to dashboard so you can
                easily access them anytime.
              </p>
            </ShortendFeatures>
            <ShortendFeatures icon="search" title="Powerful Search">
              <p>
                You can search and filter all your curated contents across all
                your collections effortlessly.
              </p>
            </ShortendFeatures>
            <ShortendFeatures icon="extension" title="Browser Extention">
              <p>
                Collect webpages directly from your browser with our open-source
                extension.
              </p>
            </ShortendFeatures>
          </div>
          <Title className="rounded-lg" text="And many more features..." />
        </div>
      </div>
    </>
  );
}
