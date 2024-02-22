import Link from "next/link";

type Props = {
  href: string;
  label: string;
  className?: string;
};

export default function AccentButton({ href, label, className }: Props) {
  return (
    <Link
      className={`bg-gradient-to-tr from-[#673AB7] to-[#4B03CD] border border-[#926cd3] hover:border-[#cfbeed] shadow-lg hover:shadow-none select-none duration-200 rounded-full text-center px-6 py-2 text-white tracking-wider w-fit flex justify-center items-center gap-2 ${
        className || ""
      }`}
      href={href}
    >
      <p className="font-semibold">{label}</p>
    </Link>
  );
}
