export default function Hero() {
  return (
    <section className="flex min-h-screen items-center justify-center">
      <div className="max-w-4xl px-6 text-center">

        <p className="mb-4 text-sm uppercase tracking-[0.35em] text-emerald-400">
          GIS • Remote Sensing • Forestry
        </p>

        <h1 className="text-6xl font-bold leading-tight">
          Mapping Hazards
          <br />
          Across the Himalaya
        </h1>

        <p className="mx-auto mt-8 max-w-2xl text-lg text-gray-300">
          GIS and Remote Sensing researcher from Nepal specializing in
          landslide susceptibility mapping, disaster risk reduction,
          and environmental monitoring.
        </p>

        <div className="mt-10 flex justify-center gap-4">

          <button className="rounded-xl bg-emerald-500 px-6 py-3 font-semibold text-black hover:bg-emerald-400 transition">
            Explore Research
          </button>

          <button className="rounded-xl border border-emerald-500 px-6 py-3 hover:bg-emerald-500/10 transition">
            Download CV
          </button>

        </div>

      </div>
    </section>
  );
}