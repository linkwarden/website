import { Star } from "@phosphor-icons/react";
import React, { useMemo } from "react";
import TwitterX from "./svg/TwitterX";
import Mastodon from "./svg/Mastodon";
import Link from "next/link";
import Masonry from "react-masonry-css";
import Image from "next/image";

type Props = {
  className?: string;
};

export default function Testimonial({ className }: Props) {
  const testimonials = [
    {
      name: "propapanda",
      photo: "./testimonial-profiles/propapanda.jpeg",
      text: "Linkwarden looks like all I ever wanted from a bookmarks app.",
      platform: "mastodon",
      url: "https://pandas.social/@panda",
    },
    {
      name: "Mark C",
      photo: "./testimonial-profiles/mark_c.jpeg",
      text: "Gotta say Linkwarden is pretty slick.  Got it up and going today, and it's great.  I don't have to keep shuffling my huge browser bookmarks file between browsers when I switch every other week.",
      platform: "mastodon",
      url: "https://fosstodon.org/@mcrocker@dmv.community",
    },
    {
      name: "luciano",
      photo: "./testimonial-profiles/luciano.jpeg",
      text: "Linkwarden is the most genius program of all time!",
      platform: "mastodon",
      url: "https://mastodon.social/@luciano@parens.social",
    },

    {
      name: "loop0",
      photo: "./testimonial-profiles/loop0.jpeg",
      text: "I got linkwarden installed in my nas, seems pretty nice, already started to save some links",
      platform: "mastodon",
      url: "https://mastodon.social/@loop0@freeradical.zone",
    },
    {
      name: "BLACKVOID ⚫️",
      photo: "./testimonial-profiles/blackvoid.jpeg",
      text: "Just gave linkwarden a spin in #Docker on #Synology. A fast, and nice looking platform!",
      platform: "mastodon",
      url: "https://mastodon.social/@blackvoid",
    },
  ];

  const breakpointColumnsObj = useMemo(() => {
    return {
      default: 3,
      1023: 2,
      639: 1,
    };
  }, []);

  return (
    <div className="max-w-5xl px-5 mx-auto py-20">
      <div className="text-center">
        <p className="lg:text-4xl text-3xl font-bold text-center">
          What Our Users Say
        </p>
      </div>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="grid grid-cols-1 gap-5 mt-10 sm:grid-cols-2 lg:grid-cols-3"
        columnClassName="flex flex-col gap-5 !w-full"
      >
        {testimonials.map((testimonial, index) => (
          <Testimony
            key={index}
            name={testimonial.name}
            photo={testimonial.photo}
            text={testimonial.text}
            platform={testimonial.platform}
            url={testimonial.url}
          />
        ))}
      </Masonry>
    </div>
  );
}

type TestimonyProps = {
  name: string;
  photo: string;
  text: string;
  platform: string;
  url: string;
  className?: string;
};

const Testimony = ({
  name,
  photo,
  text,
  platform,
  url,
  className,
}: TestimonyProps) => {
  return (
    <Link
      href={url}
      className={`p-5 text-sm border z-10 border-[#333333] flex flex-col gap-5 h-fit hover:border-outline duration-200 bg-gradient-to-tr from-[#202020] to-[#101010] rounded-xl ${
        className || ""
      }`}
    >
      <p className="text-text">&quot;{text}&quot;</p>
      <div className="flex justify-between items-end">
        <div>
          <div className="flex items-center gap-3">
            <Image
              src={photo}
              alt={name}
              width={40}
              height={40}
              className="w-10 h-10 rounded-full object-cover"
            />
            <div>
              <p className="text-text">{name}</p>
            </div>
          </div>
          <div className="flex gap-1 mt-2">
            <Star className="w-4 h-4 text-[#FFD700]" weight="fill" />
            <Star className="w-4 h-4 text-[#FFD700]" weight="fill" />
            <Star className="w-4 h-4 text-[#FFD700]" weight="fill" />
            <Star className="w-4 h-4 text-[#FFD700]" weight="fill" />
            <Star className="w-4 h-4 text-[#FFD700]" weight="fill" />
          </div>
        </div>
        {platform === "twitter" ? (
          <TwitterX className="w-5 h-5 text-white" />
        ) : platform === "mastodon" ? (
          <Mastodon className="w-5 h-5 text-white" />
        ) : null}
      </div>
    </Link>
  );
};
