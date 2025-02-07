import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";
import Link from "next/link";

export default function LinkwardenVsBookmarks() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 pt-32">
      <Navbar />
      <h1 className="text-4xl font-light mb-20 text-center">
        Linkwarden vs. Traditional Browser Bookmarks
      </h1>
      <p className="text-lg mb-5">
        <Link
          href="/"
          className="text-violet-300 underline decoration-dotted underline-offset-4"
        >
          Linkwarden
        </Link>{" "}
        is your all-in-one collaborative tool for collecting and preserving
        useful webpages and documents.
      </p>
      <p className="text-lg mb-10">
        Browser bookmarks have been a staple of web browsing since the early
        days of the internet. They provide an easy way to save and organize the
        address to a webpage for later reference.
      </p>
      <h2 className="text-3xl font-light mb-5">Comparison</h2>
      <div className="border rounded-lg border-sky-900 mb-10 overflow-x-auto">
        <table className="min-w-full table-auto border-collapse whitespace-nowrap">
          <thead>
            <tr className="bg-sky-900">
              <th className="border-b border-r border-sky-900"></th>
              <th className="px-4 py-2 text-left font-semibold border-b border-r border-sky-900">
                Linkwarden
              </th>
              <th className="px-4 py-2 text-left font-semibold border-b border-r border-sky-900">
                Traditional Browser Bookmarks
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-sky-900 even:bg-sky-950">
              <td className="px-4 py-2 border-r border-sky-900">
                Full Content Archival
              </td>
              <td className="px-4 py-2 border-r border-sky-900">
                Preserves full page content as a snapshot
              </td>
              <td className="px-4 py-2">N/A</td>
            </tr>
            <tr className="border-b border-sky-900 even:bg-sky-950">
              <td className="px-4 py-2 border-r border-sky-900">
                Cross-browser Sync
              </td>
              <td className="px-4 py-2 border-r border-sky-900">Supported</td>
              <td className="px-4 py-2">N/A</td>
            </tr>
            <tr className="border-b border-sky-900 even:bg-sky-950">
              <td className="px-4 py-2 border-r border-sky-900">
                AI-based Tagging
              </td>
              <td className="px-4 py-2 border-r border-sky-900">
                Supported (Optional)
              </td>
              <td className="px-4 py-2">N/A</td>
            </tr>
            <tr className="border-b border-sky-900 even:bg-sky-950">
              <td className="px-4 py-2 border-r border-sky-900">
                Organization
              </td>
              <td className="px-4 py-2 border-r border-sky-900">
                Collections, tags, descriptions, and more...
              </td>
              <td className="px-4 py-2">
                Folders, tags (on Firefox), and name
              </td>
            </tr>
            <tr className="border-b border-sky-900 even:bg-sky-950">
              <td className="px-4 py-2 border-r border-sky-900">
                Collaboration
              </td>
              <td className="px-4 py-2 border-r border-sky-900">
                Share links with other users
              </td>
              <td className="px-4 py-2">N/A</td>
            </tr>
            <tr className="border-b border-sky-900 even:bg-sky-950">
              <td className="px-4 py-2 border-r border-sky-900">
                Share Collections Publicly
              </td>
              <td className="px-4 py-2 border-r border-sky-900">Supported</td>
              <td className="px-4 py-2">N/A</td>
            </tr>
            <tr className="border-b border-sky-900 even:bg-sky-950">
              <td className="px-4 py-2 border-r border-sky-900">
                Customization
              </td>
              <td className="px-4 py-2 border-r border-sky-900">
                Custom icons for links and collections
              </td>
              <td className="px-4 py-2">N/A</td>
            </tr>
            <tr className="even:bg-sky-950">
              <td className="px-4 py-2 border-r border-sky-900">
                Privacy and Control
              </td>
              <td className="px-4 py-2 border-r border-sky-900">
                Stored securely in the cloud or self-hosted
              </td>
              <td className="px-4 py-2">Stored locally on the device</td>
            </tr>
          </tbody>
        </table>
      </div>
      <h2 className="text-3xl font-light mb-5">Conclusion</h2>
      <p className="text-lg mb-20">
        Linkwarden offers a robust and flexible alternative to traditional
        browser bookmarks. Its cloud-based nature, powerful search capabilities,
        and collaboration features make it especially suitable for those who
        need to organize, access, and share large numbers of links across
        multiple devices. While browser bookmarks can be sufficient for the
        short-term, Linkwarden provides a much more advanced and user-friendly
        system for those looking to streamline their workflow and ensure greater
        accessibility and security. Given its extra features like preservation,
        collaboration, and cloud synchronization, Linkwarden stands out as the
        more versatile solution for anyone serious about managing their web
        links.
      </p>
      <p>
        Ready to make the switch?{" "}
        <Link
          href="https://cloud.linkwarden.app/register"
          className="text-violet-300 underline decoration-dotted underline-offset-4"
        >
          Try Linkwarden now
        </Link>{" "}
        to experience the difference.
      </p>
      <Footer />
    </div>
  );
}
