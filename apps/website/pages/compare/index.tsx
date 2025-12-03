import React from "react";
import Link from "next/link";

export default function BookmarksVsLinkwarden() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 pt-32 flex flex-col justify-between min-h-screen">
      <h1 className="text-4xl font-light mb-20 text-center">Comparison</h1>

      <div>
        <p className="text-lg mb-5">
          Compare Linkwarden with other popular tools by exploring key features,
          functionalities, and differences:
        </p>

        <div className="flex flex-col gap-4 mb-20">
          {[
            {
              href: "/compare/linkwarden-vs-bookmarks",
              label: "Browser Bookmarks vs Linkwarden",
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
              className="block w-full text-center bg-slate-800 hover:bg-slate-700 transition-colors rounded px-6 py-3 text-lg font-medium shadow-sm hover:shadow-md"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
