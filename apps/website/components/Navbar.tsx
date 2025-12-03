import Image from "next/image";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import AccentButton from "./AccentButton";
import { ArrowSquareOutIcon } from "@phosphor-icons/react";
import useWindowDimensions from "@/hooks/useWindowDimensions";
import Seperator from "./Separator";
import ghStars from "../public/github-stars.json";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);

    if (isMenuOpen) {
      document.body.style.overflow = "auto";
    } else {
      document.body.style.overflow = "hidden";
    }
  };

  const { width } = useWindowDimensions();

  useEffect(() => {
    setIsMenuOpen(false);
    document.body.style.overflow = "auto";
  }, [width]);

  return (
    <>
      <div
        className={`w-full z-30 backdrop-blur-xl fixed top-0 left-0 right-0 bg-[#111111] ${
          isMenuOpen
            ? "bg-opacity-100 min-[991px]:bg-opacity-50"
            : "bg-opacity-50"
        }`}
      >
        <div className="max-w-7xl mx-auto flex gap-7 items-center justify-between p-2">
          <div className="flex items-center justify-between gap-7">
            <Link href="/">
              <Image
                src="/linkwarden.png"
                className="w-40"
                width={453}
                height={96}
                alt=""
                onClick={() => {
                  if (isMenuOpen) toggleMenu();
                }}
                priority
              />
            </Link>

            <div className="items-center justify-between gap-10 hidden min-[991px]:flex rounded-2xl px-4 py-1">
              <Link
                href="/#features"
                className="hover:opacity-80 duration-100 font-medium text-text"
              >
                Features
              </Link>
              <Link
                href="/#pricing"
                className="hover:opacity-80 duration-100 font-medium text-text"
              >
                Pricing
              </Link>
              <Link
                href="/#faqs"
                className="hover:opacity-80 duration-100 font-medium text-text"
              >
                FAQs
              </Link>
              <Link
                href="https://docs.linkwarden.app"
                target="_blank"
                className="hover:opacity-80 duration-100 font-medium text-text flex items-center gap-1"
              >
                Docs
                <ArrowSquareOutIcon size={16} />
              </Link>
              <Link
                href="https://blog.linkwarden.app"
                target="_blank"
                className="hover:opacity-80 duration-100 font-medium text-text flex items-center gap-1"
              >
                Blog
                <ArrowSquareOutIcon size={16} />
              </Link>
            </div>
          </div>

          <div className="items-center gap-5 hidden min-[991px]:flex">
            <Link
              href="https://github.com/linkwarden/linkwarden"
              target="_blank"
              className="flex gap-1 items-center hover:opacity-80 duration-100 text-text cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
              </svg>
              <p className="font-semibold">Star</p>
              <p>
                {(ghStars &&
                  Math.round((ghStars.stars / 1000) * 10) / 10 + "k") ||
                  "....."}
              </p>
            </Link>
            <Link
              href="https://cloud.linkwarden.app/login"
              className="hover:opacity-80 duration-100 font-medium text-text"
            >
              Login
            </Link>
            <Link
              className={`bg-gradient-to-tr from-[#673AB7] to-[#4B03CD] border w-32 border-[#926cd3] hover:border-[#cfbeed] shadow-lg hover:shadow-none select-none duration-200 rounded-full text-center px-3 py-[0.20rem] text-white flex justify-center items-center gap-2`}
              href={"https://cloud.linkwarden.app/register"}
            >
              <p>Get Started</p>
            </Link>
          </div>

          <div className="block min-[991px]:hidden">
            <div
              id="nav-menu"
              className={`cursor-pointer select-none ${
                isMenuOpen ? "open" : ""
              }`}
              onClick={toggleMenu}
            >
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </div>
      {isMenuOpen ? (
        <div className="fixed top-12 left-0 right-0 bottom-0 bg-black backdrop-blur-sm bg-opacity-20 z-50">
          <div className="slide-down min-[991px]:hidden h-full p-5 z-20 bg-background border-b border-outline flex flex-col justify-between">
            <div className="justify-between flex flex-col gap-5">
              <hr className="-mx-5 border border-1 border-t-0 border-neutral-700 -my-4" />
              <Link
                href="/#features"
                onClick={toggleMenu}
                className="hover:opacity-80 duration-100 font-medium text-xl py-4"
              >
                Features
              </Link>
              <Seperator className="-mx-5 -my-4" />

              <Link
                href="/#pricing"
                onClick={toggleMenu}
                className="hover:opacity-80 duration-100 font-medium text-xl py-4"
              >
                Pricing
              </Link>
              <Seperator className="-mx-5 -my-4" />

              <Link
                href="/#faqs"
                onClick={toggleMenu}
                className="hover:opacity-80 duration-100 font-medium text-xl py-4"
              >
                FAQs
              </Link>
              <Seperator className="-mx-5 -my-4" />

              <Link
                href="https://docs.linkwarden.app"
                target="_blank"
                className="hover:opacity-80 duration-100 font-medium text-xl py-4 flex items-center gap-1"
              >
                Docs
                <ArrowSquareOutIcon size={18} />
              </Link>
              <Seperator className="-mx-5 -my-4" />
              <Link
                href="https://blog.linkwarden.app"
                target="_blank"
                className="hover:opacity-80 duration-100 font-medium text-xl py-4 flex items-center gap-1"
              >
                Blog
                <ArrowSquareOutIcon size={18} />
              </Link>
              <Seperator className="-mx-5 -my-4" />
              <Link
                href="https://github.com/linkwarden/linkwarden"
                target="_blank"
                className="hover:opacity-80 duration-100 font-medium text-xl py-4 flex items-center gap-1"
              >
                GitHub
                <ArrowSquareOutIcon size={18} />
              </Link>
              <Seperator className="-mx-5 -my-4" />
            </div>

            <div>
              <p className="text-center text-xl">
                Existing user?{" "}
                <a
                  href="https://cloud.linkwarden.app/login"
                  className="font-bold"
                >
                  Login
                </a>
              </p>

              <AccentButton
                label="Get Started"
                href="https://cloud.linkwarden.app/register"
                className="mt-3 mx-auto block w-full py-3 text-xl"
              />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
