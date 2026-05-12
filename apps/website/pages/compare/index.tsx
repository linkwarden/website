import React from "react";
import Link from "next/link";
import SEO from "@/components/SEO";

export default function BookmarksVsLinkwarden() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 pt-32 flex flex-col justify-between min-h-">
      <SEO
        title="Compare Linkwarden vs. other bookmark managers"
        description="See how Linkwarden compares to browser bookmarks, Pocket, Raindrop, and Pinboard across archiving, organization, and collaboration."
        path="/compare"
      />
      <h1 className="text-4xl font-light mb-20 text-center">Compare</h1>

      <div>
        <p className="text-lg mb-5">
          Compare Linkwarden with other popular tools by exploring key features,
          functionalities, and differences:
        </p>

        <div className="flex flex-col gap-4 mb-20">
          {[
            {
              href: "/compare/linkwarden-vs-bookmarks",
              label: "Browser bookmarks vs Linkwarden",
            },
            {
              href: "/compare/linkwarden-vs-pocket",
              label: "Pocket vs Linkwarden",
            },
            {
              href: "/compare/linkwarden-vs-raindrop",
              label: "Raindrop vs Linkwarden",
            },
            {
              href: "/compare/linkwarden-vs-pinboard",
              label: "Pinboard vs Linkwarden",
            },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block w-full text-center bg-neutral-800 hover:bg-neutral-700 transition-colors rounded px-6 py-3 text-lg font-medium shadow-sm hover:shadow-md"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
