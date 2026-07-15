interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  center?: boolean;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  center = false,
}: SectionHeadingProps) {
  return (
    <div className={center ? "text-center" : ""}>
      <p className="text-sm uppercase tracking-[0.35em] text-emerald-400">
        {eyebrow}
      </p>

      <h2 className="mt-4 font-serif text-4xl font-bold leading-tight md:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-300">
          {description}
        </p>
      )}
    </div>
  );
}