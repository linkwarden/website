type Props = { icon: string; text: string };

export default function SingleItem({ icon, text }: Props) {
  return (
    <div className="flex items-center gap-3">
      <div className="rounded-full flex items-center justify-center aspect-square select-none bg-gradient-to-br from-[#DEDEDE20] via-transparent border border-outline to-[#ffffff20]  bg-opacity-30 h-10">
        <span className="material-symbols-rounded text-2xl">{icon}</span>
      </div>
      <p className="text-left">{text}</p>
    </div>
  );
}
