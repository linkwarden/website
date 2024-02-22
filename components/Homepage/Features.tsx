import Link from "next/link";
import ShortenedFeatures from "../ShortenedFeatures";
import React, { useEffect, useRef, useState } from "react";
import {
  Laptop,
  Devices,
  ShieldCheck,
  PushPin,
  ListMagnifyingGlass,
  PuzzlePiece,
  CloudSun,
  ArrowsLeftRight,
  RocketLaunch,
  CheckSquare,
  Key,
  DownloadSimple,
  Check,
} from "@phosphor-icons/react";

const videos = [
  "./app/collect.mp4",
  "./app/preserve.mp4",
  "./app/collaborate.mp4",
];

const videoColors = [
  "radial-gradient(circle at top left, #6F30D8, #33001b 30%, transparent 60%)",
  "radial-gradient(circle at top, #ffffff30, #cccccc40 30%, transparent 60%)",
  "radial-gradient(circle at top right, #289DF2, #001b33 30%, transparent 60%)",
];

export default function Features() {
  const [isUnder1024px, setIsUnder1024px] = useState(false);

  useEffect(() => {
    const checkScreenWidth = () => {
      setIsUnder1024px(window.innerWidth < 1024);
    };

    checkScreenWidth();

    window.addEventListener("resize", checkScreenWidth);

    return () => window.removeEventListener("resize", checkScreenWidth);
  }, []);

  return (
    <div className="max-w-7xl lg:px-20 px-5 w-fit mx-auto" id="features">
      {isUnder1024px ? <MainFeaturesMobile /> : <MainFeaturesDesktop />}

      <div className="pb-10 mt-40 lg:mt-0">
        <p className="lg:text-4xl text-3xl mb-10 font-bold text-center">
          Hold on, there&apos;s more!
        </p>
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 w-fit mx-auto gap-5 my-5">
          <ShortenedFeatures
            icon={<Laptop weight="fill" />}
            title="Open Source, Self-Hostable"
          >
            <p>
              We published our entire source code to{" "}
              <a
                className="underline"
                target="_blank"
                href="https://github.com/linkwarden/linkwarden"
              >
                GitHub
              </a>{" "}
              for transparency and trust.
            </p>
          </ShortenedFeatures>

          <ShortenedFeatures
            icon={<Devices weight="fill" />}
            title="Responsive Design"
          >
            <p>
              Designed for every screen size, from widescreen monitors down to
              smartphones.
            </p>
          </ShortenedFeatures>

          <ShortenedFeatures
            icon={<PushPin weight="fill" />}
            title="Pin your Favorite links"
          >
            <p>
              Pin your favorite webpages to the dashboard for easy access
              anytime.
            </p>
          </ShortenedFeatures>

          <ShortenedFeatures
            icon={<ShieldCheck weight="fill" />}
            title="Privacy Friendly"
          >
            <p>
              Privacy is a fundamental human right. We won&apos;t sell your data
              to third parties.
            </p>
          </ShortenedFeatures>

          <ShortenedFeatures
            icon={<ListMagnifyingGlass weight="fill" />}
            title="Powerful Search"
          >
            <p>
              You can search and filter all your curated contents across all
              your collections effortlessly.
            </p>
          </ShortenedFeatures>

          <ShortenedFeatures
            icon={<PuzzlePiece weight="fill" />}
            title="Browser Extension"
          >
            <p>
              Collect webpages directly from your browser with our open-source
              extension.
            </p>
          </ShortenedFeatures>

          <ShortenedFeatures
            icon={<CloudSun weight="fill" />}
            title="Dark & Light Mode"
          >
            <p>
              Easily toggle between dark and light mode, whichever you prefer.
            </p>
          </ShortenedFeatures>

          <ShortenedFeatures
            icon={<CheckSquare weight="fill" />}
            title="Bulk Actions"
          >
            <p>Edit or delete multiple items at once easily.</p>
          </ShortenedFeatures>

          <ShortenedFeatures
            icon={<ArrowsLeftRight weight="fill" />}
            title="Import & Export"
          >
            <p>
              You can import and export your bookmarks easily from the settings.
            </p>
          </ShortenedFeatures>

          <ShortenedFeatures
            icon={<DownloadSimple weight="fill" />}
            title="Installable PWA for Mobile"
          >
            <p>
              App-like experience across devices with PWA support, ensuring
              optimal performance and accessibility for all users.
            </p>
          </ShortenedFeatures>

          <ShortenedFeatures
            icon={<Key weight="fill" />}
            title="Secure API Integration"
          >
            <p>
              Connect and secure your integrations using access tokens to create
              custom solutions and automate with ease.
            </p>
          </ShortenedFeatures>

          <ShortenedFeatures
            icon={<RocketLaunch weight="fill" />}
            title="And Many More Features..."
          >
            <p>
              We&apos;re constantly improving and got tons of updates planned,
              some are outlined in our{" "}
              <a
                className="underline"
                target="_blank"
                href="https://github.com/orgs/linkwarden/projects/1"
              >
                public roadmap
              </a>
              .
            </p>
          </ShortenedFeatures>
        </div>
      </div>
    </div>
  );
}

function MainFeaturesDesktop() {
  const lockerRef = useRef(null);
  const [activeVideo, setActiveVideo] = useState<string>(videos[0]);
  const [activeGradient, setActiveGradient] = useState<string>(videoColors[0]);
  const [showOverlay, setShowOverlay] = useState<boolean>(false);

  useEffect(() => {
    const lockerElement = document.querySelector(".locker");

    if (lockerElement && "IntersectionObserver" in window) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          setShowOverlay(entry.isIntersecting);
        },
        {
          root: null,
          threshold: 0.25,
        }
      );

      observer.observe(lockerElement);

      // Cleanup
      return () => observer.disconnect();
    }
  }, []);

  useEffect(() => {
    const videoElement = document.querySelector(
      ".video.active"
    ) as HTMLVideoElement | null;
    if (videoElement) {
      videoElement.currentTime = 0;
      videoElement.play().catch((error) => {
        console.error("Error attempting to play video:", error);
      });
    }

    const videoIndex = videos.indexOf(activeVideo);
    if (videoIndex !== -1) {
      setActiveGradient(videoColors[videoIndex]);
    }
  }, [activeVideo]);

  useEffect(() => {
    if ("IntersectionObserver" in window) {
      const options: IntersectionObserverInit = {
        threshold: [0.5, 1],
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          // Ensure that the dataset index exists and is a string that can be converted to a number
          const index = (entry.target as HTMLElement).dataset.index;
          if (entry.isIntersecting && index !== undefined) {
            const videoIndex = parseInt(index, 10);
            if (
              !isNaN(videoIndex) &&
              videoIndex >= 0 &&
              videoIndex < videos.length
            ) {
              setActiveVideo(videos[videoIndex]);
            }
          }
        });
      }, options);

      // Query and observe all elements with class '.cb'
      document.querySelectorAll<HTMLElement>(".cb").forEach((item, index) => {
        item.dataset.index = index.toString(); // Assign index to each section as a string
        observer.observe(item);
      });

      // Cleanup function to disconnect the observer
      return () => observer.disconnect();
    }
  }, []);

  return (
    <div className="locker relative">
      <div className="locker__content z-10">
        <div className="w-full flex flex-col gap-5 relative locker__section cb">
          <p className="lg:text-4xl text-3xl font-bold z-10">
            Collect and Organize
          </p>
          <ul className="flex flex-col gap-1 z-10">
            <li className="flex items-center gap-1">
              <Check className="text-2xl text-secondary" />
              <p>Collect webpages and bookmarks from any browser.</p>
            </li>

            <li className="flex items-center gap-1">
              <Check className="text-2xl text-secondary" />
              <p>Organize Links with Collections, Sub-Collections, and Tags.</p>
            </li>

            <li className="flex items-center gap-1">
              <Check className="text-2xl text-secondary" />
              <p>Create new Collections to group related Links.</p>
            </li>
          </ul>
        </div>
        <div className="w-full flex flex-col gap-5 locker__section cb">
          <p className="lg:text-4xl text-3xl font-bold ">Preserve Webpages</p>
          <ul className="flex flex-col gap-1">
            <li className="flex items-center gap-1">
              <Check className="text-2xl text-secondary" />
              <p>Access webpages even if they are taken down.</p>
            </li>

            <li className="flex items-center gap-1">
              <Check className="text-2xl text-secondary" />
              <p>
                Safeguard your webpages against{" "}
                <Link
                  target="_blank"
                  className="underline"
                  href="https://www.howtogeek.com/786227/what-is-link-rot-and-how-does-it-threaten-the-web/"
                >
                  Link Rot
                </Link>
                .
              </p>
            </li>

            <li className="flex items-center gap-1">
              <Check className="text-2xl text-secondary" />
              <p>Download your archived webpages.</p>
            </li>
          </ul>
        </div>
        <div className="w-full flex flex-col gap-5 locker__section cb">
          <p className="lg:text-4xl text-3xl font-bold">
            Collaborate and Share
          </p>
          <ul className="flex flex-col gap-1">
            <li className="flex items-center gap-1">
              <Check className="text-2xl text-secondary" />
              <p>Collaborate on gathering resources under a Collection.</p>
            </li>

            <li className="flex items-center gap-1">
              <Check className="text-2xl text-secondary" />
              <p>Assign customizable permissions to each member.</p>
            </li>

            <li className="flex items-center gap-1">
              <Check className="text-2xl text-secondary" />
              <p>Easily share curated collections with the world.</p>
            </li>
          </ul>
        </div>
      </div>

      <div className="locker__video z-10">
        <div className="locker__container" ref={lockerRef}>
          {videos.map((src) => (
            <video
              key={src}
              className={`video ${
                activeVideo === src ? "active" : ""
              } rounded-3xl border border-outline`}
              autoPlay
              muted
              loop
              playsInline
            >
              <source src={src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ))}
        </div>
      </div>

      <div
        className={`fixed top-0 right-0 bottom-0 left-0 -m-5 transition-opacity duration-500 ${
          showOverlay ? "opacity-20 z-0" : "opacity-0 -z-10"
        }`}
        style={{
          background: activeGradient,
        }}
      ></div>
    </div>
  );
}

function MainFeaturesMobile() {
  return (
    <div className="relative">
      <div className="z-10 flex flex-col gap-40">
        <div className="w-full flex flex-col gap-5">
          <p className="lg:text-4xl text-3xl font-bold max-w-xl mx-auto w-full">
            Collect and Organize
          </p>
          <ul className="flex flex-col gap-1 z-10 max-w-xl mx-auto w-full mb-10">
            <li className="flex items-center gap-1">
              <Check className="text-2xl text-secondary" />
              <p>Collect webpages and bookmarks from any browser.</p>
            </li>

            <li className="flex items-center gap-1">
              <Check className="text-2xl text-secondary" />
              <p>Organize Links with Collections, Sub-Collections, and Tags.</p>
            </li>

            <li className="flex items-center gap-1">
              <Check className="text-2xl text-secondary" />
              <p>Create new Collections to group related Links.</p>
            </li>
          </ul>

          <video
            className={`rounded-3xl border border-outline max-w-xl mx-auto w-full`}
            src="./app/collect.mp4"
            autoPlay
            muted
            loop
            playsInline
          ></video>
        </div>
        <div className="w-full flex flex-col gap-5">
          <p className="lg:text-4xl text-3xl font-bold max-w-xl mx-auto w-full">
            Preserve Webpages
          </p>
          <ul className="flex flex-col gap-1 max-w-xl mx-auto w-full">
            <li className="flex items-center gap-1">
              <Check className="text-2xl text-secondary" />
              <p>Access webpages even if they are taken down.</p>
            </li>

            <li className="flex items-center gap-1">
              <Check className="text-2xl text-secondary" />
              <p>
                Safeguard your webpages against{" "}
                <Link
                  target="_blank"
                  className="underline"
                  href="https://www.howtogeek.com/786227/what-is-link-rot-and-how-does-it-threaten-the-web/"
                >
                  Link Rot
                </Link>
                .
              </p>
            </li>

            <li className="flex items-center gap-1">
              <Check className="text-2xl text-secondary" />
              <p>Download your archived webpages.</p>
            </li>
          </ul>
          <video
            className={`rounded-3xl border border-outline max-w-xl mx-auto w-full`}
            src="./app/preserve.mp4"
            autoPlay
            muted
            loop
            playsInline
          ></video>
        </div>
        <div className="w-full flex flex-col gap-5">
          <p className="lg:text-4xl text-3xl font-bold max-w-xl mx-auto w-full">
            Collaborate and Share
          </p>
          <ul className="flex flex-col gap-1 max-w-xl mx-auto w-full">
            <li className="flex items-center gap-1">
              <Check className="text-2xl text-secondary" />
              <p>Collaborate on gathering resources under a Collection.</p>
            </li>

            <li className="flex items-center gap-1">
              <Check className="text-2xl text-secondary" />
              <p>Assign customizable permissions to each member.</p>
            </li>

            <li className="flex items-center gap-1">
              <Check className="text-2xl text-secondary" />
              <p>Easily share curated collections with the world.</p>
            </li>
          </ul>
          <video
            className={`rounded-3xl border border-outline max-w-xl mx-auto w-full`}
            src="./app/collaborate.mp4"
            autoPlay
            muted
            loop
            playsInline
          ></video>
        </div>
      </div>
    </div>
  );
}
