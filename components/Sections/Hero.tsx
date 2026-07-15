import PrimaryButton from "../ui/PrimaryButton";
import SecondaryButton from "../ui/SecondaryButton";
import FadeUp from "../ui/animations/FadeUp";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center"
    >
      <div className="mx-auto max-w-5xl px-6 text-center">

        {/* Research Identity */}
        <FadeUp>
        <p className="mb-5 text-sm uppercase tracking-[0.35em] text-emerald-400">
          Pramod Subedi · GIS • Remote Sensing • Natural Hazards
        </p>
        </FadeUp>

        {/* Main Heading */}
        <FadeUp delay={0.1}>  
        <h1 className="mx-auto max-w-4xl font-serif text-6xl font-bold leading-tight md:text-7xl">
          Mapping Hazards
          <br />
          Across the Himalaya
        </h1>
        </FadeUp>

        {/* Description */}
        <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-300">
          Exploring the Hindu Kush Himalaya through GIS, Remote Sensing,
          and field-based research to advance landslide susceptibility
          mapping, environmental monitoring, and disaster risk reduction.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <PrimaryButton href="#projects">
            View Research
          </PrimaryButton>

          <SecondaryButton
            href="/Pramod_Subedi_CV.pdf"
            target="_blank"
          >
            View CV
          </SecondaryButton>
        </div>

      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">

        <a
          href="#about"
          aria-label="Scroll to About section"
          className="flex flex-col items-center text-gray-400 transition hover:text-emerald-400"
        >
          <span className="mb-2 text-xs uppercase tracking-[0.25em]">
            Scroll
          </span>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>

        </a>

      </div>

    </section>
  );
}