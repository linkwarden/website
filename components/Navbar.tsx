import Image from "next/image";
import React, { useState } from "react";
import PrimaryButton from "./PrimaryButton";
import Link from "next/link";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div
        className={`w-full z-30 backdrop-blur bg-[#02121C] border-b border-[#07334F] ${
          isMenuOpen
            ? "bg-opacity-100 min-[750px]:bg-opacity-50"
            : "bg-opacity-50"
        } fixed top-0 left-0 flex items-center justify-between p-2`}
      >
        <Link href="/">
          <Image
            src="/linkwarden.png"
            className=" w-52"
            width={453}
            height={96}
            alt=""
          />
        </Link>

        <div className="items-center justify-between gap-5 hidden min-[750px]:flex border border-[#07334F] bg-[#002f4c] bg-opacity-20 rounded-2xl px-4 py-1">
          <Link href="/#features">Features</Link>
          <Link href="/#pricing">Pricing</Link>
          <Link href="/#faqs">FAQs</Link>
          <Link href="https://docs.linkwarden.app" target="_blank">
            Docs
          </Link>
          <Link href="https://blog.linkwarden.app" target="_blank">
            Blog
          </Link>
        </div>

        <PrimaryButton
          text="Start Free Trial"
          path="https://cloud.linkwarden.app/register"
          className="hidden min-[750px]:block"
        />

        <div className="block min-[750px]:hidden">
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
        <div className="fixed top-14 left-0 right-0 bottom-0 bg-black bg-opacity-20 z-50">
          <div className="slide-down block min-[750px]:hidden p-5 z-20 bg-[#02121c] border-b border-[#07334F]">
            <div className="items-center justify-between flex flex-col gap-5">
              <Link href="/#features" onClick={toggleMenu}>
                Features
              </Link>
              <Link href="/#pricing" onClick={toggleMenu}>
                Pricing
              </Link>
              <Link href="/#faqs" onClick={toggleMenu}>
                FAQs
              </Link>
              <Link
                href="https://docs.linkwarden.app"
                onClick={toggleMenu}
                target="_blank"
              >
                Docs
              </Link>
              <Link
                href="https://blog.linkwarden.app"
                onClick={toggleMenu}
                target="_blank"
              >
                Blog
              </Link>
            </div>

            <PrimaryButton
              text="Start Free Trial"
              path="https://cloud.linkwarden.app/register"
              className="mt-10 mx-auto block w-fit"
            />
          </div>
        </div>
      ) : null}
    </>
  );
}
