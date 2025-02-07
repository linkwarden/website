import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";
import Link from "next/link";
import { CheckCircle, XCircle } from "@phosphor-icons/react";

export default function RaindropVsLinkwarden() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 pt-32">
      <Navbar />
      <h1 className="text-4xl font-light mb-20 text-center">
        Linkwarden vs. Raindrop
      </h1>

      <p className="text-lg mb-5">
        <Link
          href="/"
          className="text-violet-300 underline decoration-dotted underline-offset-4"
        >
          Linkwarden
        </Link>{" "}
        is a platform for saving, organizing, and archiving webpages, while
        Raindrop is a popular tool for bookmarking and managing collections of
        online content. Below, we’ll look at what they have in common and where
        they differ.
      </p>

      <h2 className="text-3xl font-light mb-5">How are they similar?</h2>
      <p className="text-lg mb-10">
        Both Linkwarden and Raindrop let you save webpages, categorize them, and
        access them across different devices. They focus on visual organization,
        tagging, and ensuring you can quickly find what you need.
      </p>

      <h2 className="text-3xl font-light mb-5">How are they different?</h2>
      <div className="text-lg mb-10 space-y-8">
        <div>
          <h3 className="text-2xl font-light mb-2">
            Archiving vs. Bookmarking
          </h3>
          <p>
            Raindrop primarily saves bookmarks with the option to capture page
            text content on its premium tier. Linkwarden goes a step further by
            offering full webpage archiving so you always have a copy of the
            original content—even if the source changes or disappears.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-light mb-2">
            Collaboration & Public Collections
          </h3>
          <p>
            Raindrop allows users to share collections publicly or privately.
            Linkwarden supports this as well, but it also offers deeper control
            over shared libraries and advanced tagging capabilities, including
            AI-based tagging to automate content organization.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-light mb-2">
            Open-source & Self-hosting
          </h3>
          <p>
            Raindrop is a commercial, hosted service only. Meanwhile, Linkwarden
            is open-source, meaning you can inspect the code, customize it, and
            even self-host if you want full control over your data.
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
                Raindrop
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
              <td className="px-4 py-2">Limited</td>
            </tr>
            <tr className="border-b border-slate-800">
              <td className="px-4 py-2 border-slate-800">
                Read-it-later Experience
              </td>
              <td className="px-4 py-2 border-slate-800">Limited</td>
              <td className="px-4 py-2">
                <CheckCircle className="text-green-500 inline-block mb-[0.1rem]" />{" "}
                Yes
              </td>
            </tr>
            <tr className="border-b border-slate-800">
              <td className="px-4 py-2 border-slate-800">AI-based Tagging</td>
              <td className="px-4 py-2 border-slate-800">
                <CheckCircle className="text-green-500 inline-block mb-[0.1rem]" />{" "}
                Yes
              </td>
              <td className="px-4 py-2">Limited</td>
            </tr>
            <tr className="border-b border-slate-800">
              <td className="px-4 py-2 border-slate-800">Collaboration</td>
              <td className="px-4 py-2 border-slate-800">
                <CheckCircle className="text-green-500 inline-block mb-[0.1rem]" />{" "}
                Yes
              </td>
              <td className="px-4 py-2">
                <CheckCircle className="text-green-500 inline-block mb-[0.1rem]" />{" "}
                Yes
              </td>
            </tr>
            <tr className="border-b border-slate-800">
              <td className="px-4 py-2 border-slate-800">Public Collections</td>
              <td className="px-4 py-2 border-slate-800">
                <CheckCircle className="text-green-500 inline-block mb-[0.1rem]" />{" "}
                Yes
              </td>
              <td className="px-4 py-2">
                <CheckCircle className="text-green-500 inline-block mb-[0.1rem]" />{" "}
                Yes
              </td>
            </tr>
            <tr className="border-b border-slate-800">
              <td className="px-4 py-2 border-slate-800">Client App</td>
              <td className="px-4 py-2 border-slate-800">Limited</td>
              <td className="px-4 py-2">
                <CheckCircle className="text-green-500 inline-block mb-[0.1rem]" />{" "}
                Yes
              </td>
            </tr>
            <tr className="border-b border-slate-800">
              <td className="px-4 py-2 border-slate-800">
                Self-hosting Option
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
              <td className="px-4 py-2 border-slate-800">Customization</td>
              <td className="px-4 py-2 border-slate-800">
                <CheckCircle className="text-green-500 inline-block mb-[0.1rem]" />{" "}
                Yes
              </td>
              <td className="px-4 py-2">
                <CheckCircle className="text-green-500 inline-block mb-[0.1rem]" />{" "}
                Yes
              </td>
            </tr>
            <tr className="border-b border-slate-800">
              <td className="px-4 py-2 border-slate-800">Open-source</td>
              <td className="px-4 py-2 border-slate-800">
                <CheckCircle className="text-green-500 inline-block mb-[0.1rem]" />{" "}
                Yes
              </td>
              <td className="px-4 py-2">
                <XCircle className="text-red-500 inline-block mb-[0.1rem]" /> No
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-3xl font-light mb-5">Final Thoughts</h2>
      <p className="text-lg mb-10">
        Raindrop is a polished solution for bookmarking and organizing content,
        especially if you want a clean interface for personal use. However, if
        you prefer full-page archiving, open-source flexibility, and more
        advanced tagging options, Linkwarden stands out as a powerful
        alternative for long-term, collaborative content management.
      </p>

      <p className="mb-20">
        Curious to see how Linkwarden can help you manage your web content?{" "}
        <Link
          href="https://cloud.linkwarden.app/register"
          className="text-violet-300 underline decoration-dotted underline-offset-4"
        >
          Try Linkwarden now
        </Link>{" "}
        and discover a more versatile approach to saving and organizing links.
      </p>
      <Footer />
    </div>
  );
}
