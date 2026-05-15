import React from "react";
import SecondaryButton from "@/components/SecondaryButton";
import {
  DownloadSimpleIcon,
  StarIcon,
  UsersThreeIcon,
} from "@phosphor-icons/react";
import CountUp from "@/components/CountUp";

const GitHubStats = () => {
  return (
    <div className="p-5 py-40">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-white text-4xl font-bold mt-6">
          Open Source Means Transparency
        </h2>

        <p className="text-gray-200 sm:text-xl mt-5 max-w-xl mx-auto">
          Linkwarden&apos;s source code is fully public, giving you visibility
          into how it works and confidence in how your data is handled.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mt-10">
          <SecondaryButton
            path="https://github.com/linkwarden/linkwarden"
            className="text-sm sm:text-base text-center justify-center font-mono"
            openInNewTab
          >
            <p className="text-center w-full">&gt; view source code</p>
          </SecondaryButton>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-10 sm:gap-16 mt-14 text-white">
          <div className="flex flex-col items-center">
            <StarIcon size={32} className="text-gray-400 mb-2" />
            <p className="text-4xl sm:text-5xl font-bold tabular-nums">
              <CountUp end={18} suffix="k+" />
            </p>
            <p className="text-gray-400 mt-2 text-sm sm:text-base">
              GitHub Stars
            </p>
          </div>
          <div
            className="hidden sm:block h-14 w-px bg-outline"
            aria-hidden="true"
          />
          <div className="flex flex-col items-center">
            <UsersThreeIcon size={32} className="text-gray-400 mb-2" />
            <p className="text-4xl sm:text-5xl font-bold tabular-nums">
              <CountUp end={50} suffix="+" />
            </p>
            <p className="text-gray-400 mt-2 text-sm sm:text-base">
              Contributors
            </p>
          </div>
          <div
            className="hidden sm:block h-14 w-px bg-outline"
            aria-hidden="true"
          />
          <div className="flex flex-col items-center">
            <DownloadSimpleIcon size={32} className="text-gray-400 mb-2" />
            <p className="text-4xl sm:text-5xl font-bold tabular-nums">
              <CountUp end={17} suffix="M+" />
            </p>
            <p className="text-gray-400 mt-2 text-sm sm:text-base">
              Docker Downloads
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GitHubStats;
