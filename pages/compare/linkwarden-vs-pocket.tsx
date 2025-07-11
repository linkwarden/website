import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";
import Link from "next/link";
import { CheckCircle, XCircle } from "@phosphor-icons/react";

export default function LinkwardenVsPocket() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 pt-32">
      <Navbar />
      <h1 className="text-4xl font-light mb-20 text-center">
        Linkwarden vs. Pocket
      </h1>

      <p className="text-lg mb-5">
        <Link
          href="/"
          className="text-violet-300 underline decoration-dotted underline-offset-4"
        >
          Linkwarden
        </Link>{" "}
        is a tool for saving, organizing, and preserving webpages, while Pocket
        is primarily a read-it-later service. Below, we&apos;ll explore what
        they share in common and how they differ.
      </p>

      <h2 className="text-3xl font-light mb-5">How are they similar?</h2>
      <p className="text-lg mb-10">
        Both Linkwarden and Pocket let you store links for later reference and
        give you quick access across multiple devices. Each provides ways to
        categorize and tag your content, ensuring you can retrieve saved pages
        whenever you need them.
      </p>

      <h2 className="text-3xl font-light mb-5">How are they different?</h2>
      <div className="text-lg mb-10 space-y-8">
        <div>
          <h3 className="text-2xl font-light mb-2">
            Archiving vs. Read-Friendly View
          </h3>
          <p>
            Pocket streamlines content for reading and offers a clean,
            distraction-free view. Linkwarden, on the other hand, goes further
            by archiving entire webpages. This means you can revisit the
            original content anytime—preserving it even if the source changes or
            disappears.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-light mb-2">Enhanced Organization</h3>
          <p>
            While Pocket is great for quickly saving articles to read later,{" "}
            Linkwarden provides a more comprehensive approach to organization:
            it enables collections, advanced tagging (including AI-based
            tagging), and even shared content libraries for collaborative work.
            This deeper level of organization suits users who need structured,
            long-term management of saved content.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-light mb-2">
            Collaboration & Shared Collections
          </h3>
          <p>
            If you want a platform where multiple team members (or friends) can
            contribute, Linkwarden offers shared collections. In contrast,
            Pocket&apos;s collaboration features are more limited, making it
            primarily a personal read-it-later service.
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
                Pocket
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
              <td className="px-4 py-2 border-slate-800">
                Read-it-later Experience
              </td>
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
              <td className="px-4 py-2">Limited</td>
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
              <td className="px-4 py-2">Limited</td>
            </tr>
            <tr className="border-b border-slate-800">
              <td className="px-4 py-2 border-slate-800">Open-source</td>
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
        If your main interest is keeping articles handy to read later, Pocket
        fits that purpose. But if you need a tool that not only saves links but
        also archives pages, offers detailed organization, and supports shared
        collections, Linkwarden may be the more versatile choice.
      </p>

      <p className="mb-20">
        Curious to see how Linkwarden can help you manage your web content?{" "}
        <Link
          href="https://cloud.linkwarden.app/register"
          className="text-violet-300 underline decoration-dotted underline-offset-4"
        >
          Try Linkwarden now
        </Link>{" "}
        and experience a more powerful approach to saving and organizing links.
      </p>
      <Footer />
    </div>
  );
}
