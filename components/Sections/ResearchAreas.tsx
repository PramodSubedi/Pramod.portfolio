const researchAreas = [
  {
    icon: "🌋",
    title: "Natural Hazard Assessment",
    description:
      "Understanding mountain hazards through geospatial modelling, spatial analysis, and evidence-based risk assessment.",
    topics: [
      "Landslide Susceptibility Mapping",
      "Flood Hazard Assessment",
      "Disaster Risk Reduction",
      "Vulnerability Analysis",
    ],
  },

  {
    icon: "🛰️",
    title: "Remote Sensing & Earth Observation",
    description:
      "Applying satellite data and earth observation techniques to monitor environmental changes and landscape dynamics.",
    topics: [
      "Satellite Image Analysis",
      "Land Cover Monitoring",
      "DEM & Terrain Analysis",
      "Environmental Change Detection",
    ],
  },

  {
    icon: "🌲",
    title: "Forest & Landscape Management",
    description:
      "Integrating forestry knowledge with geospatial technologies for sustainable natural resource management.",
    topics: [
      "Forest Inventory",
      "Community Forest Mapping",
      "Resource Assessment",
      "Ecosystem Monitoring",
    ],
  },

  {
    icon: "🏔️",
    title: "Hindu Kush Himalaya Research",
    description:
      "Exploring mountain environments, climate impacts, and hazard processes across the Hindu Kush Himalaya region.",
    topics: [
      "Mountain Hazard Analysis",
      "Climate Risk Assessment",
      "Spatial Decision Support",
      "Landscape Vulnerability",
    ],
  },
];


export default function ResearchAreas() {
  return (
    <section id="research-areas" className="py-32">

      <div className="mx-auto max-w-7xl px-6">


        {/* Header */}
        <div className="text-center">

          <p className="text-sm uppercase tracking-[0.4em] text-emerald-400">
            Research Areas
          </p>


          <h2 className="mt-4 font-serif text-5xl font-bold">
            Exploring Landscapes Through Geospatial Science
          </h2>


          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-400">
            My research combines forestry knowledge, geospatial technologies,
            and environmental modelling to understand landscape processes
            and natural hazards.
          </p>

        </div>



        {/* Cards */}
        <div className="mt-16 grid gap-8 md:grid-cols-2">


          {researchAreas.map((area) => (

            <div
              key={area.title}
              className="
              rounded-3xl
              border
              border-white/10
              bg-white/5
              p-8
              transition
              hover:-translate-y-1
              hover:border-emerald-500/50
              "
            >


              <div className="flex items-start gap-5">


                <div className="text-4xl">
                  {area.icon}
                </div>


                <div>

                  <h3 className="text-2xl font-semibold">
                    {area.title}
                  </h3>


                  <p className="mt-4 leading-7 text-gray-300">
                    {area.description}
                  </p>


                </div>


              </div>



              <div className="mt-8 flex flex-wrap gap-3">

                {area.topics.map((topic) => (

                  <span
                    key={topic}
                    className="
                    rounded-full
                    border
                    border-emerald-500/40
                    px-3
                    py-1
                    text-sm
                    text-emerald-300
                    "
                  >
                    {topic}
                  </span>

                ))}

              </div>


            </div>

          ))}


        </div>


      </div>

    </section>
  );
}