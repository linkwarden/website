type Props = { icon: string; text: string };

export default function SingleItem({ icon, text }: Props) {
  return (
    <div className="flex items-center gap-3">
      <div className="rounded-full flex items-center justify-center w-10 h-10 select-none bg-sky-500 bg-opacity-30">
        <span className="material-symbols-rounded text-2xl ">{icon}</span>
      </div>
      <p className="text-left">{text}</p>
    </div>
  );
}
