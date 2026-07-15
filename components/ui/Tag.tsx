interface TagProps {
  children: React.ReactNode;
}

export default function Tag({ children }: TagProps) {
  return (
    <span
      className="
        rounded-full
        border
        border-emerald-500/50
        px-4
        py-2
        text-sm
        text-emerald-300
        transition
        hover:bg-emerald-500/10
      "
    >
      {children}
    </span>
  );
}