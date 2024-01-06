import Link from "next/link";
import React from "react";
import Title from "../Title";
import ShortenedFeatures from "../ShortenedFeatures";
import DemoVid from "../DemoVid";

export default function Features() {
  return (
    <div className="max-w-7xl pt-5 px-5 w-fit mx-auto" id="features">
      {/* <Title text="Collect and Organize" className="mb-10 mt-20" /> */}
      <div className="mb-10 mt-20" />

      <div className="flex flex-col md:flex-row justify-between items-center gap-10">
        <div className="w-full flex flex-col gap-5">
          <p className="lg:text-4xl text-3xl font-bold">
            Collect and Organize Webpages
          </p>
          <ul className="flex flex-col gap-1">
            <li className="flex items-center gap-1">
              <span className="material-symbols-rounded text-2xl select-none text-green-500">
                check
              </span>
              <p>Collect webpages and bookmarks from any browser</p>
            </li>

            <li className="flex items-center gap-1">
              <span className="material-symbols-rounded text-2xl select-none text-green-500">
                check
              </span>
              <p>Organize your Links with Collections and Tags</p>
            </li>

            <li className="flex items-center gap-1">
              <span className="material-symbols-rounded text-2xl select-none text-green-500">
                check
              </span>
              <p>Create new Collections to group related Links</p>
            </li>
          </ul>
        </div>
        <DemoVid src="./app/collect.mp4" className="md:ml-auto" />
      </div>

      {/* <Title text="Preserve Webpages" className="mb-10 mt-40" /> */}

      <div className="flex flex-col md:flex-row-reverse justify-between items-center gap-10 my-10">
        <div className="w-full flex flex-col gap-5">
          <p className="lg:text-4xl text-3xl font-bold">
            Preserve your Webpages
          </p>
          <ul className="flex flex-col gap-1">
            <li className="flex items-center gap-1">
              <span className="material-symbols-rounded text-2xl select-none text-green-500">
                check
              </span>
              <p>
                Preserve webpages so you can access them even if they are taken
                down
              </p>
            </li>

            <li className="flex items-center gap-1">
              <span className="material-symbols-rounded text-2xl select-none text-green-500">
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
              </p>
            </li>

            <li className="flex items-center gap-1">
              <span className="material-symbols-rounded text-2xl select-none text-green-500">
                check
              </span>
              <p>Download your archived webpages</p>
            </li>
          </ul>
        </div>

        <DemoVid src="./app/preserve.mp4" className="md:mr-auto" />
      </div>

      {/* <Title text="Collaborate Seamlessly" className="mb-10 mt-40" /> */}

      <div className="flex flex-col md:flex-row justify-between items-center gap-10">
        <div className="w-full flex flex-col gap-5">
          <p className="lg:text-4xl text-3xl font-bold">
            Collaborate and Share
          </p>
          <ul className="flex flex-col gap-1">
            <li className="flex items-center gap-1">
              <span className="material-symbols-rounded text-2xl select-none text-green-500">
                check
              </span>
              <p>Collaborate on gathering resources under a Collection</p>
            </li>

            <li className="flex items-center gap-1">
              <span className="material-symbols-rounded text-2xl select-none text-green-500">
                check
              </span>
              <p>Assign customizable permissions to each member</p>
            </li>

            <li className="flex items-center gap-1">
              <span className="material-symbols-rounded text-2xl select-none text-green-500">
                check
              </span>
              <p>Easily share curated collections with the world</p>
            </li>
          </ul>
        </div>

        <DemoVid src="./app/collaborate.mp4" className="md:ml-auto" />
      </div>

      <div className="pr-10 pl-10 pb-10 mt-40">
        <p className="lg:text-4xl text-3xl mb-10 font-bold text-center">
          Hold on, there&apos;s more!
        </p>
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 w-fit mx-auto gap-5 my-5">
          <ShortenedFeatures
            icon="code"
            title="Open Source and Fully Self-Hostable"
          >
            <p>
              We published our entire source code to{" "}
              <a
                className="underline"
                target="_blank"
                href="https://github.com/linkwarden/linkwarden"
              >
                GitHub
              </a>{" "}
              so you can easily deploy it onto your own machine at any time.
            </p>
          </ShortenedFeatures>

          <ShortenedFeatures icon="shield_lock" title="Privacy Friendly">
            <p>
              Privacy is one of the core fundamentals of human rights, which is
              why we won’t sell your data to third party.
            </p>
          </ShortenedFeatures>

          <ShortenedFeatures icon="devices" title="Responsive Design">
            <p>
              Designed for every screen size, from widescreen monitors down to
              smartphones.
            </p>
          </ShortenedFeatures>

          <ShortenedFeatures icon="push_pin" title="Pin your Favorite Webpages">
            <p>
              You can pin your favorite webpages to dashboard so you can easily
              access them anytime.
            </p>
          </ShortenedFeatures>

          <ShortenedFeatures icon="search" title="Powerful Search">
            <p>
              You can search and filter all your curated contents across all
              your collections effortlessly.
            </p>
          </ShortenedFeatures>

          <ShortenedFeatures icon="extension" title="Browser Extension">
            <p>
              Collect webpages directly from your browser with our open-source
              extension.
            </p>
          </ShortenedFeatures>

          <ShortenedFeatures
            icon="partly_cloudy_night"
            title="Dark & Light Mode Supported"
          >
            <p>
              Easily toggle between dark and light mode, whichever you prefer.
            </p>
          </ShortenedFeatures>

          <ShortenedFeatures
            icon="vertical_align_bottom"
            title="Import & Export Your Bookmarks"
          >
            <p>
              Easily import or export all your bookmark from/to other platforms.
            </p>
          </ShortenedFeatures>

          <ShortenedFeatures
            icon="rocket_launch"
            title="And Many More Features..."
          >
            <p>
              We&apos;re constantly improving and got tons of updates planned,
              some are outlined in our{" "}
              <a
                className="underline"
                target="_blank"
                href="https://github.com/orgs/linkwarden/projects/1"
              >
                public roadmap
              </a>
              .
            </p>
          </ShortenedFeatures>
        </div>
      </div>
    </div>
  );
}
