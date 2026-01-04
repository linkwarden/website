import Link from "next/link";
import React from "react";
import { ArrowSquareOutIcon } from "@phosphor-icons/react";
import Image from "next/image";

export default function Footer() {
  return (
    <div className="mt-10 w-full">
      <div className="px-5 pb-5 max-w-5xl mx-auto flex flex-col justify-center items-center text-text">
        <div className="w-full flex flex-col md:flex-row gap-6 justify-center items-center md:items-start md:justify-between">
          <div className="flex flex-col gap-3 w-96">
            <Image
              src="/linkwarden.png"
              className="w-56 h-fit mx-auto md:mx-0"
              width={640}
              height={136}
              alt=""
              priority
            />
            <p className="text-center md:text-left">
              Collect, read, annotate, and fully preserve what matters, all in
              one place.
            </p>

            <div className="w-full mt-6 md:block hidden">
              <div className="flex justify-center md:justify-start gap-4">
                <Link
                  href="https://discord.gg/CtuYV47nuJ"
                  target="_blank"
                  className="text-lg h-8 w-8 duration-100 hover:opacity-80 flex items-center justify-center"
                  title="Discord"
                >
                  <i className="fa-brands fa-discord"></i>
                </Link>

                <Link
                  href="https://fosstodon.org/@linkwarden"
                  target="_blank"
                  rel="me"
                  className="text-lg h-8 w-8 duration-100 hover:opacity-80 flex items-center justify-center"
                  title="Mastodon"
                >
                  <i className="fa-brands fa-mastodon"></i>
                </Link>

                <Link
                  href="https://twitter.com/LinkwardenHQ"
                  target="_blank"
                  className="text-lg h-8 w-8 duration-100 hover:opacity-80 flex items-center justify-center"
                  title="X (Twitter)"
                >
                  <i className="fa-brands fa-x-twitter"></i>
                </Link>

                <Link
                  href="https://www.linkedin.com/company/linkwarden"
                  target="_blank"
                  className="text-lg h-8 w-8 duration-100 hover:opacity-80 flex items-center justify-center"
                  title="LinkedIn"
                >
                  <i className="fa-brands fa-linkedin"></i>
                </Link>

                <Link
                  href="https://bsky.app/profile/linkwarden.bsky.social"
                  target="_blank"
                  className="text-lg h-8 w-8 duration-100 hover:opacity-80 flex items-center justify-center"
                  title="Bluesky"
                >
                  <i className="fa-brands fa-bluesky"></i>
                </Link>

                <Link
                  href="https://github.com/linkwarden/linkwarden"
                  target="_blank"
                  className="text-lg h-8 w-8 duration-100 hover:opacity-80 flex items-center justify-center"
                  title="GitHub"
                >
                  <i className="fa-brands fa-github"></i>
                </Link>
              </div>
            </div>
          </div>
          <div className="flex sm:gap-10 md:flex-row md:gap-20 gap-6">
            <div className="flex flex-col gap-2 text-center md:text-left">
              <h3 className="text-lg font-semibold">Product</h3>
              <Link
                href="https://linkwarden.app/#features"
                className="duration-100 hover:opacity-80"
              >
                Features
              </Link>
              <Link
                href="https://linkwarden.app/#pricing"
                className="duration-100 hover:opacity-80"
              >
                Pricing
              </Link>
              <Link
                href="https://linkwarden.app/#faqs"
                className="duration-100 hover:opacity-80"
              >
                FAQs
              </Link>
              <Link
                href="https://linkwarden.app/blog"
                className="duration-100 hover:opacity-80"
              >
                Blog
              </Link>
              <Link
                href="https://docs.linkwarden.app"
                target="_blank"
                className="hover:opacity-80 duration-100 flex items-center gap-1 mx-auto md:mx-0"
              >
                Docs
                <ArrowSquareOutIcon size={16} className="w-fit" />
              </Link>
            </div>

            <div className="flex flex-col gap-2 text-center md:text-left">
              <h3 className="text-lg font-semibold">Compare</h3>
              <Link
                href="https://linkwarden.app/compare/linkwarden-vs-bookmarks"
                className="duration-100 hover:opacity-80"
              >
                Bookmarks vs Linkwarden
              </Link>
              <Link
                href="https://linkwarden.app/compare/linkwarden-vs-pocket"
                className="duration-100 hover:opacity-80"
              >
                Pocket vs Linkwarden
              </Link>
              <Link
                href="https://linkwarden.app/compare/linkwarden-vs-raindrop"
                className="duration-100 hover:opacity-80"
              >
                Raindrop vs Linkwarden
              </Link>
              <Link
                href="https://linkwarden.app/compare/linkwarden-vs-pinboard"
                className="duration-100 hover:opacity-80"
              >
                Pinboard vs Linkwarden
              </Link>
            </div>
          </div>
        </div>

        <div className="w-full mt-6 md:hidden">
          <div className="flex justify-center gap-4">
            <Link
              href="https://discord.gg/CtuYV47nuJ"
              target="_blank"
              className="text-lg h-8 w-8 duration-100 hover:opacity-80 flex items-center justify-center"
              title="Discord"
            >
              <i className="fa-brands fa-discord"></i>
            </Link>

            <Link
              href="https://fosstodon.org/@linkwarden"
              target="_blank"
              rel="me"
              className="text-lg h-8 w-8 duration-100 hover:opacity-80 flex items-center justify-center"
              title="Mastodon"
            >
              <i className="fa-brands fa-mastodon"></i>
            </Link>

            <Link
              href="https://twitter.com/LinkwardenHQ"
              target="_blank"
              className="text-lg h-8 w-8 duration-100 hover:opacity-80 flex items-center justify-center"
              title="X (Twitter)"
            >
              <i className="fa-brands fa-x-twitter"></i>
            </Link>

            <Link
              href="https://www.linkedin.com/company/linkwarden"
              target="_blank"
              className="text-lg h-8 w-8 duration-100 hover:opacity-80 flex items-center justify-center"
              title="LinkedIn"
            >
              <i className="fa-brands fa-linkedin"></i>
            </Link>

            <Link
              href="https://bsky.app/profile/linkwarden.bsky.social"
              target="_blank"
              className="text-lg h-8 w-8 duration-100 hover:opacity-80 flex items-center justify-center"
              title="Bluesky"
            >
              <i className="fa-brands fa-bluesky"></i>
            </Link>

            <Link
              href="https://github.com/linkwarden/linkwarden"
              target="_blank"
              className="text-lg h-8 w-8 duration-100 hover:opacity-80 flex items-center justify-center"
              title="GitHub"
            >
              <i className="fa-brands fa-github"></i>
            </Link>
          </div>
        </div>

        <div className="flex gap-4 justify-between items-end w-full max-w-5xl text-sm pb-5 mt-6">
          <p className="">
            © {new Date().getFullYear()} Linkwarden. All rights reserved.
          </p>

          <div className="flex justify-center gap-4">
            <Link
              href="https://linkwarden.app/tos"
              className="duration-100 hover:opacity-80"
            >
              Terms
            </Link>
            <Link
              href="https://linkwarden.app/privacy-policy"
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
