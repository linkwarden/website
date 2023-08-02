import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Features() {
  return (
    <>
      <div className="max-w-7xl mt-20 px-5 w-fit mx-auto">
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
                <span className="material-symbols-rounded text-3xl select-none text-green-500">
                  check
                </span>
                <p>
                  Collect Links from any browser with just a few click, so you
                  can easily access all your saved webpages in one place.
                </p>
              </li>

              <li className="flex items-start gap-2">
                <span className="material-symbols-rounded text-3xl select-none text-green-500">
                  check
                </span>
                <p>
                  Effortlessly organize your links with custom tags and folders,
                  so you can easily find what you need when you need it.
                </p>
              </li>

              <li className="flex items-start gap-2">
                <span className="material-symbols-rounded text-3xl select-none text-green-500">
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
            className="md:w-full max-w-sm lg:max-w-full w-full rounded-2xl relative z-10"
          />
        </div>

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
                <span className="material-symbols-rounded text-3xl select-none text-green-500">
                  check
                </span>
                <p>
                  Auto-capture a copy of each webpage as a Screenshot (.png) and
                  a PDF, two of the most used formats out there.
                </p>
              </li>

              <li className="flex items-start gap-2">
                <span className="material-symbols-rounded text-3xl select-none text-green-500">
                  check
                </span>
                <p>
                  Download your archived webpages, ensuring you have access to
                  crucial information even without an internet connection.
                </p>
              </li>

              <li className="flex items-start gap-2">
                <span className="material-symbols-rounded text-3xl select-none text-green-500">
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
            className="md:w-full max-w-sm lg:max-w-full w-full rounded-2xl relative z-10"
          />
        </div>

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
                <span className="material-symbols-rounded text-3xl select-none text-green-500">
                  check
                </span>
                <p>
                  Invite team members to collaborate on shared collections,
                  streamlining research and knowledge sharing.
                </p>
              </li>

              <li className="flex items-start gap-2">
                <span className="material-symbols-rounded text-3xl select-none text-green-500">
                  check
                </span>
                <p>
                  Assign customizable permissions to each member, giving you
                  full control over who can create, edit, or delete links within
                  your shared collections.
                </p>
              </li>

              <li className="flex items-start gap-2">
                <span className="material-symbols-rounded text-3xl select-none text-green-500">
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
            className="md:w-full max-w-sm lg:max-w-full w-full rounded-2xl relative z-10"
          />
        </div>

        <div className="p-10">
          <p className="lg:text-4xl text-3xl mb-10 font-bold text-center">
            Hold on, there&apos;s more!
          </p>
          <div className="grid lg:grid-cols-3 sm:grid-cols-2 w-fit mx-auto gap-5 my-5">
            <div className="flex items-start gap-2">
              <span className="material-symbols-rounded text-sky-500 select-none">
                check_box
              </span>
              <p>Open source and fully Self-hostable.</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="material-symbols-rounded text-sky-500 select-none">
                check_box
              </span>
              <p>Designed for every screen size.</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="material-symbols-rounded text-sky-500 select-none">
                check_box
              </span>
              <p>Powerful Search.</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="material-symbols-rounded text-sky-500 select-none">
                check_box
              </span>
              <p>Intuitive design.</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="material-symbols-rounded text-sky-500 select-none">
                check_box
              </span>
              <p>Pin your favorite Links to dashboard.</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="material-symbols-rounded text-sky-500 select-none">
                check_box
              </span>
              <p>Import/Export your data. (Soon)</p>
            </div>
          </div>
          <p className="text-center font-semibold">+ Many More Features</p>
        </div>
      </div>
    </>
  );
}
