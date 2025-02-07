import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";
import Link from "next/link";
import { CheckCircle, XCircle } from "@phosphor-icons/react";

export default function BookmarksVsLinkwarden() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 pt-32">
      <Navbar />
      <h1 className="text-4xl font-light mb-20 text-center">
        Browser Bookmarks vs. Linkwarden
      </h1>

      <p className="text-lg mb-5">
        <Link
          href="/"
          className="text-violet-300 underline decoration-dotted underline-offset-4"
        >
          Linkwarden
        </Link>{" "}
        is a tool for saving, organizing, and preserving webpages. Traditional
        bookmarks—whether built into your browser or managed by simple tools—let
        you store links but often lack robust organization and archival
        features. Below, we&apos;ll explore what they share in common and how
        they differ.
      </p>

      <h2 className="text-3xl font-light mb-5">How are they similar?</h2>
      <p className="text-lg mb-10">
        Both Browser Bookmarks and Linkwarden let you save webpages for future
        access. This basic function helps you quickly revisit important sites.
        Each also allows you to categorize saved links, making them easier to
        find later—though Linkwarden offers much deeper organization options.
      </p>

      <h2 className="text-3xl font-light mb-5">How are they different?</h2>
      <div className="text-lg mb-10 space-y-8">
        <div>
          <h3 className="text-2xl font-light mb-2">
            Archival vs. Simple Storage
          </h3>
          <p>
            Traditional bookmarks only save the URL. If the webpage is taken
            down or significantly changed, you lose access to its original
            content. Linkwarden addresses this by archiving the entire page,
            ensuring you can always revisit the exact version you saved.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-light mb-2">
            Advanced Organization and Tagging
          </h3>
          <p>
            While browser-based bookmarks rely on basic folder structures,
            Linkwarden expands your options with collections, nested tags, and
            even AI-powered tagging. If you have large volumes of saved pages or
            need an efficient way to categorize them, Linkwarden's
            organizational tools offer a significant advantage.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-light mb-2">Collaboration & Sharing</h3>
          <p>
            Most default bookmark systems are personal only. In contrast,{" "}
            Linkwarden supports shared collections, allowing multiple users to
            add and manage bookmarks together. This is especially useful for
            team projects or sharing research with friends.
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
                Browser Bookmarks
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-slate-800">
              <td className="px-4 py-2 border-slate-800">
                Full Webpage Archival
              </td>
              <td className="px-4 py-2 border-slate-800">
                <CheckCircle className="text-green-500 inline-block mb-[0.1rem]" />{" "}
                Yes
              </td>
              <td className="px-4 py-2">
                <XCircle className="text-red-500 inline-block mb-[0.1rem]" /> No
              </td>
            </tr>
            <tr className="border-b border-slate-800">
              <td className="px-4 py-2 border-slate-800">AI-based Tagging</td>
              <td className="px-4 py-2 border-slate-800">
                <CheckCircle className="text-green-500 inline-block mb-[0.1rem]" />{" "}
                Yes
              </td>
              <td className="px-4 py-2">
                <XCircle className="text-red-500 inline-block mb-[0.1rem]" /> No
              </td>
            </tr>
            <tr className="border-b border-slate-800">
              <td className="px-4 py-2 border-slate-800">Collaboration</td>
              <td className="px-4 py-2 border-slate-800">
                <CheckCircle className="text-green-500 inline-block mb-[0.1rem]" />{" "}
                Yes
              </td>
              <td className="px-4 py-2">
                <XCircle className="text-red-500 inline-block mb-[0.1rem]" /> No
              </td>
            </tr>
            <tr className="border-b border-slate-800">
              <td className="px-4 py-2 border-slate-800">Public Collections</td>
              <td className="px-4 py-2 border-slate-800">
                <CheckCircle className="text-green-500 inline-block mb-[0.1rem]" />{" "}
                Yes
              </td>
              <td className="px-4 py-2">
                <XCircle className="text-red-500 inline-block mb-[0.1rem]" /> No
              </td>
            </tr>
            <tr className="border-b border-slate-800">
              <td className="px-4 py-2 border-slate-800">Cross-browser Sync</td>
              <td className="px-4 py-2 border-slate-800">
                <CheckCircle className="text-green-500 inline-block mb-[0.1rem]" />{" "}
                Yes
              </td>
              <td className="px-4 py-2">
                <XCircle className="text-red-500 inline-block mb-[0.1rem]" /> No
              </td>
            </tr>
            <tr className="border-b border-slate-800">
              <td className="px-4 py-2 border-slate-800">Customization</td>
              <td className="px-4 py-2 border-slate-800">
                <CheckCircle className="text-green-500 inline-block mb-[0.1rem]" />{" "}
                Yes
              </td>
              <td className="px-4 py-2">Limited</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-3xl font-light mb-5">Final Thoughts</h2>
      <p className="text-lg mb-10">
        If you just need a quick way to store links, traditional bookmarks might
        be enough. But if you&apos;re looking for in-depth organization,
        archival capabilities, and collaboration, Linkwarden is a more powerful
        solution for your saved web content.
      </p>

      <p className="mb-20">
        Curious to see how Linkwarden can help you manage your web content?{" "}
        <Link
          href="https://cloud.linkwarden.app/register"
          className="text-violet-300 underline decoration-dotted underline-offset-4"
        >
          Try Linkwarden now
        </Link>{" "}
        and experience a more robust approach to bookmarking.
      </p>
      <Footer />
    </div>
  );
}
