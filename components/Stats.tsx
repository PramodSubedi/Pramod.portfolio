const stats = [
  {
    number: "2",
    label: "Publications",
    description: "Peer-reviewed research",
  },
  {
    number: "5+",
    label: "Projects",
    description: "Research & field work",
  },
  {
    number: "211",
    label: "Landslides",
    description: "Mapped & validated",
  },
  {
    number: "15+",
    label: "Techniques",
    description: "GIS • RS • Python",
  },
];

export default function Stats() {
  return (
    <section className="border-t border-white/10 py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-14 text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-emerald-400">
            Research at a Glance
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-4">

          {stats.map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-white/10 bg-white/5 p-8 transition hover:border-emerald-500 hover:-translate-y-1"
            >
              <h2 className="text-5xl font-bold">
                {item.number}
              </h2>

              <p className="mt-4 uppercase tracking-[0.2em] text-sm text-emerald-400">
                {item.label}
              </p>

              <p className="mt-3 text-gray-400">
                {item.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}