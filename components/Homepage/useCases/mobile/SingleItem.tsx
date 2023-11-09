type Props = { icon: string; text: string };

export default function SingleItem({ icon, text }: Props) {
  return (
    <div className="flex items-center gap-3">
      <span className="material-symbols-rounded text-2xl select-none bg-sky-500 bg-opacity-30 rounded-full flex items-center justify-center w-10 h-10">
        {icon}
      </span>
      <p className="text-left">{text}</p>
    </div>
  );
}
