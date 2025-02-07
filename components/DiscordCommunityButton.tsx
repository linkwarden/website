import Link from "next/link";

export default function DiscordCommunityButton() {
  return (
    <Link
      href="https://discord.gg/CtuYV47nuJ"
      className="fixed bottom-3 right-3 rounded-full font-bold text-black bg-white hover:bg-[#5462ea] hover:text-white p-2 z-50 flex items-center gap-2 duration-100"
    >
      <i className="fa-brands fa-discord text-2xl"></i>
      Community
    </Link>
  );
}
