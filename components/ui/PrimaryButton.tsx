interface PrimaryButtonProps {
  href: string;
  children: React.ReactNode;
  target?: string;
}

export default function PrimaryButton({
  href,
  children,
  target,
}: PrimaryButtonProps) {
  return (
    <a
      href={href}
      target={target}
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
      className="
        rounded-xl
        bg-emerald-500
        px-6
        py-3
        font-semibold
        text-black
        transition
        hover:bg-emerald-400
      "
    >
      {children}
    </a>
  );
}