const stats = [
  {
    number: "2",
    label: "Publications",
    description: "Peer-reviewed research outputs",
  },
  {
    number: "5+",
    label: "Research Projects",
    description: "Spatial analysis & field studies",
  },
  {
    number: "211",
    label: "Landslides",
    description: "Mapped and validated inventory",
  },
  {
    number: "15+",
    label: "Tools & Methods",
    description: "GIS • Remote Sensing • Python",
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

          <p className="mx-auto mt-4 max-w-2xl text-gray-400">
            Quantifying landscapes through geospatial analysis,
            field observations, and environmental modelling.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-4">

          {stats.map((item) => (
            <div
              key={item.label}
              className="
              rounded-2xl 
              border border-white/10 
              bg-white/5 
              p-8 
              transition 
              hover:-translate-y-1 
              hover:border-emerald-500
              "
            >
              <h2 className="text-5xl font-bold">
                {item.number}
              </h2>

              <p className="mt-4 text-sm uppercase tracking-[0.2em] text-emerald-400">
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