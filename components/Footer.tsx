import Link from "next/link";
import React from "react";
import { ArrowSquareOut } from "@phosphor-icons/react";

export default function Footer() {
  return (
    <div className="mt-10 w-full">
      <div className="px-5 pb-5 max-w-7xl mx-auto flex flex-col justify-center items-center text-text">
        <div className="w-full">
          <div className="flex flex-wrap sm:gap-10 md:flex-row md:gap-20 gap-6 justify-center">
            <div className="flex flex-col gap-2">
              <h3 className="text-lg font-semibold">Product</h3>
              <Link href="/#features" className="duration-100 hover:opacity-80">
                Features
              </Link>
              <Link href="/#pricing" className="duration-100 hover:opacity-80">
                Pricing
              </Link>
              <Link href="/#faqs" className="duration-100 hover:opacity-80">
                FAQs
              </Link>
            </div>

            <div className="flex flex-col gap-2">
              <h3 className="text-lg font-semibold">Social</h3>
              <Link
                href="https://discord.gg/CtuYV47nuJ"
                target="_blank"
                className="duration-100 hover:opacity-80"
              >
                Discord
              </Link>
              <Link
                href="https://fosstodon.org/@linkwarden"
                target="_blank"
                rel="me"
                className="duration-100 hover:opacity-80"
              >
                Mastodon
              </Link>
              <Link
                href="https://twitter.com/LinkwardenHQ"
                target="_blank"
                className="duration-100 hover:opacity-80"
              >
                Twitter
              </Link>
              <Link
                href="https://github.com/linkwarden/linkwarden"
                target="_blank"
                className="duration-100 hover:opacity-80"
              >
                GitHub
              </Link>
            </div>

            <div className="flex flex-col gap-2">
              <h3 className="text-lg font-semibold">External Links</h3>
              <Link
                href="https://docs.linkwarden.app"
                target="_blank"
                className="hover:opacity-80 duration-100 text-text flex items-center gap-1"
              >
                Docs
                <ArrowSquareOut size={16} />
              </Link>
              <Link
                href="https://blog.linkwarden.app"
                target="_blank"
                className="hover:opacity-80 duration-100 text-text flex items-center gap-1"
              >
                Blog
                <ArrowSquareOut size={16} />
              </Link>
              <Link
                href="https://github.com/orgs/linkwarden/projects/1"
                className="hover:opacity-80 duration-100 text-text flex items-center gap-1"
              >
                Roadmap
                <ArrowSquareOut size={16} />
              </Link>
            </div>

            <div className="flex flex-col gap-2">
              <h3 className="text-lg font-semibold">Comparison</h3>
              <Link
                href="/compare/linkwarden-vs-bookmarks"
                className="duration-100 hover:opacity-80"
              >
                Bookmarks vs Linkwarden
              </Link>
              <Link
                href="/compare/linkwarden-vs-pocket"
                className="duration-100 hover:opacity-80"
              >
                Pocket vs Linkwarden
              </Link>
              <Link
                href="/compare/linkwarden-vs-raindrop"
                className="duration-100 hover:opacity-80"
              >
                Raindrop vs Linkwarden
              </Link>
              <Link
                href="/compare/linkwarden-vs-pinboard"
                className="duration-100 hover:opacity-80"
              >
                Pinboard vs Linkwarden
              </Link>
            </div>
          </div>
        </div>

        <div className="w-full mt-6">
          <div className="flex justify-center gap-4">
            <Link
              href="https://discord.gg/CtuYV47nuJ"
              target="_blank"
              className="text-lg h-8 w-8 duration-100 hover:opacity-80 flex items-center justify-center"
            >
              <i className="fa-brands fa-discord"></i>
            </Link>

            <Link
              href="https://fosstodon.org/@linkwarden"
              target="_blank"
              rel="me"
              className="text-lg h-8 w-8 duration-100 hover:opacity-80 flex items-center justify-center"
            >
              <i className="fa-brands fa-mastodon"></i>
            </Link>

            <Link
              href="https://twitter.com/LinkwardenHQ"
              target="_blank"
              className="text-lg h-8 w-8 duration-100 hover:opacity-80 flex items-center justify-center"
            >
              <i className="fa-brands fa-x-twitter"></i>
            </Link>

            <Link
              href="https://github.com/linkwarden/linkwarden"
              target="_blank"
              className="text-lg h-8 w-8 duration-100 hover:opacity-80 flex items-center justify-center"
            >
              <i className="fa-brands fa-github"></i>
            </Link>
          </div>
        </div>

        <div className="flex gap-4 justify-between items-end w-full text-sm px-5 pb-5 mt-6">
          <p className="">
            © {new Date().getFullYear()} Linkwarden. All rights reserved.
          </p>

          <div className="flex justify-center gap-4">
            <Link href="/tos" className="duration-100 hover:opacity-80">
              Terms
            </Link>
            <Link
              href="/privacy-policy"
              className="duration-100 hover:opacity-80"
            >
              Privacy
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
