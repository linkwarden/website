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
    <div className="w-full z-20 backdrop-blur bg-white border-b border-slate-200 bg-opacity-50 fixed top-0 left-0 flex items-center justify-between p-5">
      <Link href="/">
        <Image
          src="/linkwarden.png"
          className="w-40"
          width={518}
          height={145}
          alt=""
        />
      </Link>

      <div className="items-center justify-between md:gap-10 lg:gap-20 gap-5 hidden sm:flex">
        <Link href="/" className="text-slate-600">
          Overview
        </Link>
        <Link
          href="https://docs.linkwarden.app"
          target="_blank"
          className="text-slate-600"
        >
          Docs
        </Link>
        <Link href="/pricing" className="text-slate-600">
          Pricing
        </Link>
      </div>

      <PrimaryButton
        text="Start Free Trial"
        path="https://cloud.linkwarden.app/register"
        className="hidden sm:block"
      />

      <div className="block sm:hidden">
        <div
          className="material-symbols-rounded text-3xl cursor-pointer select-none"
          onClick={toggleMenu}
        >
          {isMenuOpen ? "close" : "menu"}
        </div>
      </div>

      {isMenuOpen ? (
        <div className="block sm:hidden fixed top-20 left-0 right-0 p-5 z-20 bg-white border-t border-b border-slate-200">
          <div className="items-center justify-between flex flex-col gap-5">
            <Link href="/" className="text-slate-600">
              Overview
            </Link>
            <Link
              href="https://docs.linkwarden.app"
              target="_blank"
              className="text-slate-600"
            >
              Docs
            </Link>
            <Link href="/pricing" className="text-slate-600">
              Pricing
            </Link>
          </div>

          <PrimaryButton
            text="Start Free Trial"
            path="https://cloud.linkwarden.app/register"
            className="mt-5 mx-auto"
          />
        </div>
      ) : null}
    </div>
  );
}
