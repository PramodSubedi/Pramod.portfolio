interface SecondaryButtonProps {
  href: string;
  children: React.ReactNode;
  target?: string;
}

export default function SecondaryButton({
  href,
  children,
  target,
}: SecondaryButtonProps) {
  return (
    <a
      href={href}
      target={target}
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
      className="
        rounded-xl
        border
        border-emerald-500
        px-6
        py-3
        font-semibold
        transition
        hover:bg-emerald-500/10
      "
    >
      {children}
    </a>
  );
}