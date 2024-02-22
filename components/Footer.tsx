import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <div className="mt-10">
      <div className="px-5 pb-5 max-w-7xl mx-auto flex flex-col justify-between items-center text-text">
        <div>
          <div className="flex gap-20 md:gap-6">
            <div className="flex md:flex-row flex-col gap-6">
              <Link href="/#features" className="duration-100 hover:opacity-50">
                Features
              </Link>
              <Link href="/#pricing" className="duration-100 hover:opacity-50">
                Pricing
              </Link>
              <Link href="/#faqs" className="duration-100 hover:opacity-50">
                FAQs
              </Link>
              <Link
                href="https://github.com/orgs/linkwarden/projects/1"
                className="duration-100 hover:opacity-50"
              >
                Roadmap
              </Link>
            </div>
            <div className="flex md:flex-row flex-col gap-6">
              <Link
                href="https://docs.linkwarden.app"
                className="duration-100 hover:opacity-50"
              >
                Docs
              </Link>{" "}
              <Link
                href="https://blog.linkwarden.app"
                className="duration-100 hover:opacity-50"
              >
                Blog
              </Link>
              <Link href="/tos" className="duration-100 hover:opacity-50">
                Terms Of Service
              </Link>
              <Link
                href="/privacy-policy"
                className="duration-100 hover:opacity-50"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>

        <div className="w-fit mt-6">
          <div className="flex justify-center my-2 gap-2 sm:w-fit">
            <Link
              href="https://discord.gg/CtuYV47nuJ"
              target="_blank"
              className="text-lg h-8 w-8 duration-100 hover:opacity-50 flex items-center justify-center"
            >
              <i className="fa-brands fa-discord"></i>
            </Link>

            <Link
              href="https://fosstodon.org/@linkwarden"
              target="_blank"
              className="text-lg h-8 w-8 duration-100 hover:opacity-50 flex items-center justify-center"
            >
              <i className="fa-brands fa-mastodon"></i>
            </Link>

            <Link
              href="https://twitter.com/LinkwardenHQ"
              target="_blank"
              className="text-lg h-8 w-8 duration-100 hover:opacity-50 flex items-center justify-center"
            >
              <i className="fa-brands fa-x-twitter"></i>
            </Link>

            <Link
              href="https://github.com/linkwarden"
              target="_blank"
              className="text-lg h-8 w-8 duration-100 hover:opacity-50 flex items-center justify-center"
            >
              <i className="fa-brands fa-github"></i>
            </Link>
          </div>
        </div>
      </div>
      <p className="text-sm px-5 pb-5 max-w-7xl mx-auto text-center">
        © {new Date().getFullYear()} Linkwarden. All rights reserved.
      </p>
    </div>
  );
}
