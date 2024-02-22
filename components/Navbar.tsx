import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import AccentButton from "./AccentButton";
import SecondaryButton from "./SecondaryButton";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div
        className={`w-full z-30 backdrop-blur max-[770px]:fixed bg-[#111111] ${
          isMenuOpen
            ? "bg-opacity-100 min-[770px]:bg-opacity-50"
            : "bg-opacity-50"
        } flex items-center justify-between p-2 max-w-5xl mx-auto min-[770px]:mt-5`}
      >
        <Link href="/">
          <Image
            src="/linkwarden.png"
            className="w-40"
            width={453}
            height={96}
            alt=""
          />
        </Link>

        <div className="items-center justify-between gap-10 hidden min-[770px]:flex rounded-2xl px-4 py-1">
          <Link
            href="/#features"
            className="hover:opacity-50 duration-100 text-text"
          >
            Features
          </Link>
          <Link
            href="/#pricing"
            className="hover:opacity-50 duration-100 text-text"
          >
            Pricing
          </Link>
          <Link
            href="/#faqs"
            className="hover:opacity-50 duration-100 text-text"
          >
            FAQs
          </Link>
          <Link
            href="https://docs.linkwarden.app"
            target="_blank"
            className="hover:opacity-50 duration-100 text-text"
          >
            Docs
          </Link>
          <Link
            href="https://blog.linkwarden.app"
            target="_blank"
            className="hover:opacity-50 duration-100 text-text"
          >
            Blog
          </Link>
        </div>

        <div className="items-center gap-5 hidden min-[770px]:flex">
          <SecondaryButton
            path="https://cloud.linkwarden.app/login"
            className="py-1"
          >
            Login
          </SecondaryButton>
        </div>

        <div className="block min-[770px]:hidden">
          <div
            id="nav-menu"
            className={`cursor-pointer select-none ${isMenuOpen ? "open" : ""}`}
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
      {isMenuOpen ? (
        <div className="fixed top-12 left-0 right-0 bottom-0 bg-black backdrop-blur-sm bg-opacity-20 z-50">
          <div className="slide-down block min-[770px]:hidden p-5 z-20 bg-background border-b border-outline">
            <div className="items-center justify-between flex flex-col gap-5">
              <Link
                href="/#features"
                onClick={toggleMenu}
                className="hover:opacity-50 duration-100"
              >
                Features
              </Link>
              <Link
                href="/#pricing"
                onClick={toggleMenu}
                className="hover:opacity-50 duration-100"
              >
                Pricing
              </Link>
              <Link
                href="/#faqs"
                onClick={toggleMenu}
                className="hover:opacity-50 duration-100"
              >
                FAQs
              </Link>
              <Link
                href="https://docs.linkwarden.app"
                onClick={toggleMenu}
                target="_blank"
                className="hover:opacity-50 duration-100"
              >
                Docs
              </Link>
              <Link
                href="https://blog.linkwarden.app"
                onClick={toggleMenu}
                target="_blank"
                className="hover:opacity-50 duration-100"
              >
                Blog
              </Link>
            </div>

            <SecondaryButton
              path="https://cloud.linkwarden.app/login"
              className="mx-auto mt-5 py-1"
            >
              Login
            </SecondaryButton>

            <AccentButton
              label="Start Free Trial"
              href="https://cloud.linkwarden.app/register"
              className="mt-3 mx-auto block w-fit"
            />
          </div>
        </div>
      ) : null}
    </>
  );
}
