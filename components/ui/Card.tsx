interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export default function Card({
  children,
  className = "",
}: CardProps) {
  return (
    <div
      className={`
        rounded-3xl
        border
        border-white/10
        bg-white/5
        backdrop-blur-sm
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-emerald-500/40
        hover:shadow-[0_0_30px_rgba(16,185,129,0.10)]
        ${className}
      `}
    >
      {children}
    </div>
  );
}