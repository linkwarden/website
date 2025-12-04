import React from "react";
import Link from "next/link";
import { CheckCircleIcon, XCircleIcon } from "@phosphor-icons/react";

export default function PinboardVsLinkwarden() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 pt-32">
      <h1 className="text-4xl font-light mb-20 text-center">
        Linkwarden vs. Pinboard
      </h1>

      <p className="text-lg mb-5">
        <Link
          href="/"
          className="text-violet-300 underline decoration-dotted underline-offset-4"
        >
          Linkwarden
        </Link>{" "}
        is designed for robust saving, organizing, and preserving of webpages,
        while Pinboard is a minimalist bookmarking service focused on speed and
        simplicity. Below, we&apos;ll discuss the ways they overlap and how they
        diverge.
      </p>

      <h2 className="text-3xl font-light mb-5">How are they similar?</h2>
      <p className="text-lg mb-10">
        Both Pinboard and Linkwarden let you save links and add tags for quick
        retrieval. They aim to keep your bookmarks organized and accessible from
        any device, ensuring that the content you save is never more than a few
        clicks away.
      </p>

      <h2 className="text-3xl font-light mb-5">How are they different?</h2>
      <div className="text-lg mb-10 space-y-8">
        <div>
          <h3 className="text-2xl font-light mb-2">Look and Feel</h3>
          <p>
            Pinboard&apos;s interface is simple and text-focused, with a focus
            on speed and efficiency. Linkwarden offers a more modern, visual,
            and customizable approach to bookmarking, with options for custom
            themes and a more interactive user experience.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-light mb-2">
            Comprehensive Archiving vs. Simple Bookmarks
          </h3>
          <p>
            Pinboard offers a basic bookmarking service, with archival options
            on its premium tier. Linkwarden, however, provides detailed
            archiving by default—ensuring you always have a copy of the original
            webpage.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-light mb-2">
            Collaboration & Public Collections
          </h3>
          <p>
            Pinboard lets you keep bookmarks private or public, but it&apos;s
            largely geared toward individual use. Linkwarden supports shared
            collections, allowing teams or groups to collaboratively build
            libraries of links. You can also publish publicly accessible
            collections if you want to share your research or curated links with
            others.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-light mb-2">Open-source vs. Hosted</h3>
          <p>
            Pinboard is a paid, hosted-only service, meaning the owner manages
            everything on their servers. Linkwarden is open-source, so you can
            self-host it for complete control over your data and customize the
            software to fit your needs.
          </p>
        </div>
      </div>

      <h2 className="text-3xl font-light mb-5">Features Comparison</h2>
      <div className="mb-10 overflow-x-auto">
        <table className="min-w-full table-auto border-collapse whitespace-nowrap">
          <thead>
            <tr>
              <th className="border-b border-slate-800 px-4 py-2 text-left font-bold">
                Feature
              </th>
              <th className="px-4 py-2 text-left font-bold border-b border-slate-800">
                Linkwarden
              </th>
              <th className="px-4 py-2 text-left font-bold border-b border-slate-800">
                Pinboard
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-slate-800">
              <td className="px-4 py-2 border-slate-800">
                Full Webpage Archival
              </td>
              <td className="px-4 py-2 border-slate-800">
                <CheckCircleIcon className="text-green-500 inline-block mb-[0.1rem]" />{" "}
                Yes
              </td>
              <td className="px-4 py-2">
                <CheckCircleIcon className="text-green-500 inline-block mb-[0.1rem]" />{" "}
                Yes
              </td>
            </tr>
            <tr className="border-b border-slate-800">
              <td className="px-4 py-2 border-slate-800">
                Read-it-later Experience
              </td>
              <td className="px-4 py-2 border-slate-800">Limited</td>
              <td className="px-4 py-2">
                <XCircleIcon className="text-red-500 inline-block mb-[0.1rem]" />{" "}
                No
              </td>
            </tr>
            <tr className="border-b border-slate-800">
              <td className="px-4 py-2 border-slate-800">
                Modern User Interface
              </td>
              <td className="px-4 py-2 border-slate-800">
                <CheckCircleIcon className="text-green-500 inline-block mb-[0.1rem]" />{" "}
                Yes
              </td>
              <td className="px-4 py-2">
                <XCircleIcon className="text-red-500 inline-block mb-[0.1rem]" />{" "}
                No
              </td>
            </tr>
            <tr className="border-b border-slate-800">
              <td className="px-4 py-2 border-slate-800">AI-based Tagging</td>
              <td className="px-4 py-2 border-slate-800">
                <CheckCircleIcon className="text-green-500 inline-block mb-[0.1rem]" />{" "}
                Yes
              </td>
              <td className="px-4 py-2">
                <XCircleIcon className="text-red-500 inline-block mb-[0.1rem]" />{" "}
                No
              </td>
            </tr>
            <tr className="border-b border-slate-800">
              <td className="px-4 py-2 border-slate-800">Collaboration</td>
              <td className="px-4 py-2 border-slate-800">
                <CheckCircleIcon className="text-green-500 inline-block mb-[0.1rem]" />{" "}
                Yes
              </td>
              <td className="px-4 py-2">
                <XCircleIcon className="text-red-500 inline-block mb-[0.1rem]" />{" "}
                No
              </td>
            </tr>
            <tr className="border-b border-slate-800">
              <td className="px-4 py-2 border-slate-800">Public Collections</td>
              <td className="px-4 py-2 border-slate-800">
                <CheckCircleIcon className="text-green-500 inline-block mb-[0.1rem]" />{" "}
                Yes
              </td>
              <td className="px-4 py-2">
                <XCircleIcon className="text-red-500 inline-block mb-[0.1rem]" />{" "}
                No
              </td>
            </tr>
            <tr className="border-b border-slate-800">
              <td className="px-4 py-2 border-slate-800">
                Self-hosting Option
              </td>
              <td className="px-4 py-2 border-slate-800">
                <CheckCircleIcon className="text-green-500 inline-block mb-[0.1rem]" />{" "}
                Yes
              </td>
              <td className="px-4 py-2">
                <XCircleIcon className="text-red-500 inline-block mb-[0.1rem]" />{" "}
                No
              </td>
            </tr>
            <tr className="border-b border-slate-800">
              <td className="px-4 py-2 border-slate-800">Customization</td>
              <td className="px-4 py-2 border-slate-800">
                <CheckCircleIcon className="text-green-500 inline-block mb-[0.1rem]" />{" "}
                Yes
              </td>
              <td className="px-4 py-2">Limited</td>
            </tr>
            <tr className="border-b border-slate-800">
              <td className="px-4 py-2 border-slate-800">Open-source</td>
              <td className="px-4 py-2 border-slate-800">
                <CheckCircleIcon className="text-green-500 inline-block mb-[0.1rem]" />{" "}
                Yes
              </td>
              <td className="px-4 py-2">
                <XCircleIcon className="text-red-500 inline-block mb-[0.1rem]" />{" "}
                No
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-3xl font-light mb-5">Final Thoughts</h2>
      <p className="text-lg mb-10">
        Pinboard&apos;s straightforward approach works well for users who want a
        lean, no-frills bookmark manager. But if you need robust archiving,
        deeper collaboration, and open-source flexibility, Linkwarden offers a
        feature-rich alternative suited for both personal and team-based
        bookmarking.
      </p>

      <p className="mb-20">
        Curious to see how Linkwarden can help you manage your web content?{" "}
        <Link
          href="https://cloud.linkwarden.app/register"
          className="text-violet-300 underline decoration-dotted underline-offset-4"
        >
          Try Linkwarden now
        </Link>{" "}
        and take control of your saved links with comprehensive archiving and
        advanced organization.
      </p>
    </div>
  );
}
