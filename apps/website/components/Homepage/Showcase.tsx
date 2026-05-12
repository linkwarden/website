import Image from "next/image";
import React, { useEffect, useState } from "react";
import SecondaryButton from "../SecondaryButton";
import Link from "next/link";
import AccentButton from "../AccentButton";
import SVGShowcase from "../svg/SVGShowcase";
import { Tab } from "@headlessui/react";
import {
  ArchiveIcon,
  BookOpenTextIcon,
  HouseIcon,
  InfoIcon,
  PackageIcon,
  StarIcon,
  UsersThreeIcon,
} from "@phosphor-icons/react";
import CountUp from "../CountUp";
// import ghStars from "../../public/github-stars.json";

const tabImages = [
  {
    src: "./app/home.jpeg",
    id: "Home",
    icon: <HouseIcon className="sm:text-gray-400" size={16} />,
  },
  {
    src: "./app/reader.jpeg",
    id: "Reader View",
    icon: <BookOpenTextIcon className="sm:text-gray-400" size={16} />,
  },
  {
    src: "./app/info.jpeg",
    id: "Link Info",
    icon: <InfoIcon className="sm:text-gray-400" size={16} />,
  },
  {
    src: "./app/preserve.jpeg",
    id: "Preservation",
    icon: <ArchiveIcon className="sm:text-gray-400" size={16} />,
  },
  {
    src: "./app/collaborate.jpeg",
    id: "Team",
    icon: <UsersThreeIcon className="sm:text-gray-400" size={16} />,
  },
];

export default function Showcase() {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    tabImages.forEach(({ src }) => {
      const img = new window.Image();
      img.src = src;
    });
  }, []);

  return (
    <div className="relative mx-auto">
      <div className="relative mx-auto max-w-fit">
        <div className="z-10 max-w-5xl px-5 w-fit mx-auto xl:pt-52 lg:pt-40 md:pt-32 pt-24">
          <div className="w-fit mx-auto mb-5">
            <Link
              href="https://linkwarden.app/blog/releases/mobile-app"
              target="_blank"
              className="rounded-full"
            >
              <div className="border bg-opacity-80 border-[#07334F] hover:border-[#20618a] bg-background duration-200 w-fit py-2 px-3 text-xs rounded-full relative z-10">
                🎉️ Announcing Linkwarden for iOS & Android! 🚀
              </div>
            </Link>
          </div>
          <div className="py-2 text-white">
            <p className="sm:text-5xl text-4xl text-center max-w-4xl font-bold relative z-10">
              Bookmarks, <span className="text-sky-200">Evolved</span>
            </p>
          </div>
        </div>
        <p className="relative z-10 max-w-xl px-5 mx-auto text-center text-gray-200 sm:text-xl mt-3 mb-10">
          Linkwarden helps you collect, read, annotate, and fully preserve what
          matters, all in one place.
        </p>

        <div className="relative z-10 flex flex-wrap justify-center px-5 gap-4 mt-5">
          <AccentButton
            label="Start Free Trial"
            href="https://cloud.linkwarden.app/register"
            className="text-sm sm:text-base w-48"
          />
          <SecondaryButton
            path="https://demo.linkwarden.app/login"
            className="text-sm sm:text-base w-48 text-center justify-center"
            openInNewTab
          >
            <p className="text-center w-full">Launch Demo</p>
          </SecondaryButton>
        </div>

        <SVGShowcase
          className={`absolute -mt-[7rem] sm:-mt-[12rem] md:-mt-[15rem] lg:-mt-[18rem] min-[1200px]:-mt-[22rem] opacity-60 bg-gradient-radial from-[#289DF230] from-20% via-[#6F30D830] to-70% to-transparent`}
        />

        <div className="pt-5 px-5 w-full max-w-5xl mx-auto mt-5 relative slide-up">
          <Tab.Group>
            <Tab.List className="flex space-x-4 justify-center mb-4">
              {tabImages.map((img) => (
                <Tab
                  key={img.id}
                  className={({ selected }) =>
                    `px-3 py-1 rounded-md backdrop-blur-md transition-colors bg-opacity-50 text-sm font-medium focus:outline-none ${
                      selected
                        ? "bg-sky-600 text-white"
                        : "bg-gray-700 text-gray-300"
                    }`
                  }
                >
                  {({ selected }) => (
                    <div className="flex items-center gap-1 duration-150">
                      {img.icon}
                      <p
                        className={
                          "sm:block sm:text-sm text-xs" +
                          (selected ? "" : " hidden")
                        }
                      >
                        {img.id}
                      </p>
                    </div>
                  )}
                </Tab>
              ))}
            </Tab.List>
            <Tab.Panels>
              {tabImages.map((img) => (
                <Tab.Panel key={img.id} className="focus:outline-none">
                  <div
                    className={
                      imageLoaded ? "opacity-100 transition" : "opacity-0"
                    }
                  >
                    <div className="fade-in">
                      <Image
                        priority
                        src={img.src}
                        width={2940}
                        height={1676}
                        alt={img.id}
                        className="relative z-10 rounded-lg mx-auto border border-outline"
                        onLoad={() => setImageLoaded(true)}
                      />
                    </div>
                  </div>
                </Tab.Panel>
              ))}
            </Tab.Panels>
          </Tab.Group>
        </div>
      </div>

      <div className="p-5 py-40">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-white text-4xl font-bold mt-6">
            Open Source Means Transparency
          </h2>

          <p className="text-gray-200 sm:text-xl mt-5 max-w-xl mx-auto">
            Linkwarden's source code is fully public, giving you visibility into
            how it works and confidence in how your data is handled.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <SecondaryButton
              path="https://github.com/linkwarden/linkwarden"
              className="text-sm sm:text-base text-center justify-center font-mono"
              openInNewTab
            >
              <p className="text-center w-full">&gt; view source code</p>
            </SecondaryButton>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-10 sm:gap-16 mt-14 text-white">
            <div className="flex flex-col items-center">
              <StarIcon size={32} className="text-gray-400 mb-2" />
              <p className="text-4xl sm:text-5xl font-bold tabular-nums">
                <CountUp end={18} suffix="k+" />
              </p>
              <p className="text-gray-400 mt-2 text-sm sm:text-base">
                GitHub Stars
              </p>
            </div>
            <div
              className="hidden sm:block h-14 w-px bg-outline"
              aria-hidden="true"
            />
            <div className="flex flex-col items-center">
              <UsersThreeIcon size={32} className="text-gray-400 mb-2" />
              <p className="text-4xl sm:text-5xl font-bold tabular-nums">
                <CountUp end={50} suffix="+" />
              </p>
              <p className="text-gray-400 mt-2 text-sm sm:text-base">
                Contributors
              </p>
            </div>
            <div
              className="hidden sm:block h-14 w-px bg-outline"
              aria-hidden="true"
            />
            <div className="flex flex-col items-center">
              <PackageIcon size={32} className="text-gray-400 mb-2" />
              <p className="text-4xl sm:text-5xl font-bold tabular-nums">
                <CountUp end={17} suffix="M+" />
              </p>
              <p className="text-gray-400 mt-2 text-sm sm:text-base">
                Docker Downloads
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
