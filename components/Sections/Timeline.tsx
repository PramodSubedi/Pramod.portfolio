const timeline = [
  {
    year: "2002–2021",
    title: "Growing Connection with Natural Landscapes",
    location: "Nepal",
    icon: "🌱",
    description:
      "Developed an early interest in forests, landscapes, and environmental systems, building the foundation for future work in natural resource science and environmental research.",
  },
  {
    year: "2022",
    title: "Started B.Sc. Forestry",
    location: "Agriculture and Forestry University, Nepal",
    icon: "🌲",
    description:
      "Began academic training in forestry with a focus on forest ecology, natural resource management, conservation, and understanding interactions between people and landscapes.",
  },
  {
    year: "2023–2024",
    title: "Field Research & Forest Resource Assessment",
    location: "Community Forests, Nepal",
    icon: "📍",
    description:
      "Conducted field-based studies including GPS surveys, forest inventory, participatory resource mapping, boundary assessment, and natural resource data collection.",
  },
  {
    year: "2023–2024",
    title: "Transition into GIS & Remote Sensing",
    location: "Geospatial Environmental Research",
    icon: "🛰️",
    description:
      "Integrated GIS, satellite imagery, and spatial analysis techniques into forestry applications to analyze environmental patterns, land changes, and landscape characteristics.",
  },
  {
    year: "2025",
    title: "Landslide Susceptibility Modelling",
    location: "Udayapur District, Eastern Nepal",
    icon: "🌋",
    description:
      "Developed a GIS-based landslide susceptibility assessment using 211 inventoried landslides, multiple environmental conditioning factors, and the Frequency Ratio modelling approach.",
  },
  {
    year: "2025–2026",
    title: "Scientific Research & Publication",
    location: "Natural Hazard Research",
    icon: "📄",
    description:
      "Transforming geospatial analyses into scientific outputs focused on landslide hazards, disaster risk reduction, and evidence-based environmental decision making.",
  },
  {
    year: "Future",
    title: "Advancing Hindu Kush Himalaya Research",
    location: "Mountain Hazard & Climate Research",
    icon: "🏔️",
    description:
      "Continuing research on mountain hazards, climate impacts, remote sensing applications, and geospatial approaches for sustainable landscape management across the Hindu Kush Himalaya.",
  },
];


export default function Timeline() {
  return (
    <section id="journey" className="relative py-32">

      <div className="mx-auto max-w-6xl px-6">

        {/* Heading */}
        <div className="text-center">

          <p className="text-sm uppercase tracking-[0.4em] text-emerald-400">
            Research Journey
          </p>

          <h2 className="mt-4 font-serif text-5xl font-bold">
            From Forests to Geospatial Science
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-400">
            A journey shaped by field experience, geospatial technologies,
            and research-driven exploration of landscapes and natural hazards.
          </p>

        </div>


        {/* Timeline */}
        <div className="relative mt-24">


          {/* Line */}
          <div className="absolute left-8 top-0 h-full w-[2px] bg-emerald-500/30">
          </div>


          <div className="space-y-16">


            {timeline.map((item) => (

              <div
                key={item.title}
                className="relative flex gap-8"
              >

                {/* Icon */}
                <div
                  className="
                  relative z-10
                  flex h-16 w-16
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-emerald-500/40
                  bg-[#0b1612]
                  text-2xl
                  "
                >
                  {item.icon}
                </div>


                {/* Card */}
                <div
                  className="
                  flex-1
                  rounded-3xl
                  border
                  border-white/10
                  bg-white/5
                  p-8
                  transition
                  hover:border-emerald-500/50
                  "
                >

                  <p className="text-sm uppercase tracking-[0.3em] text-emerald-400">
                    {item.year}
                  </p>


                  <h3 className="mt-3 text-3xl font-semibold">
                    {item.title}
                  </h3>


                  <p className="mt-2 text-gray-400">
                    {item.location}
                  </p>


                  <p className="mt-6 leading-8 text-gray-300">
                    {item.description}
                  </p>


                </div>


              </div>

            ))}


          </div>


        </div>

      </div>

    </section>
  );
}