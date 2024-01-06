import Link from "next/link";

type Props = {
  onClick?: Function;
  href?: string;
  label: string;
  loading?: boolean;
  className?: string;
  type?: "button" | "submit" | "reset" | undefined;
};

export default function AccentSubmitButton({
  onClick,
  href,
  label,
  loading,
  className,
  type,
}: Props) {
  return href ? (
    <Link
      className={`border primary-btn-gradient select-none duration-200 bg-black border-sky-500 hover:border-[#0070b5] rounded-lg text-center px-4 py-2 text-white active:scale-90 tracking-wider w-fit flex justify-center items-center gap-2 ${
        className || ""
      }`}
      href={href}
    >
      <p className="font-bold">{label}</p>
    </Link>
  ) : (
    <button
      type={type ? type : undefined}
      className={`border primary-btn-gradient select-none duration-200 bg-black border-sky-500 hover:border-[#0070b5] rounded-lg text-center px-4 py-2 text-white active:scale-90 tracking-wider w-fit flex justify-center items-center gap-2 ${
        className || ""
      }`}
      onClick={() => {
        if (loading !== undefined && !loading && onClick) onClick();
      }}
    >
      <p className="font-bold">{label}</p>
    </button>
  );
}
