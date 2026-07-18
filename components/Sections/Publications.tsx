import Image from "next/image";

const publications = [
  {
    status: "Published | First Author",
    icon: "🌋",
    image: "/images/publications/landslide-paper.webp",

    title:
      "Landslide Susceptibility Mapping Using GIS-Based Frequency Ratio Method in Eastern Nepal",

    role: "Subedi, P., Joshi, R., & Adhikari, M.",

    journal:
      "Applied and Environmental Soil Science",

    year: "2026",

    description:
      "Developed a GIS-based landslide susceptibility model by integrating landslide inventory data, environmental conditioning factors, and Frequency Ratio modelling to identify spatial patterns of landslide hazard susceptibility in eastern Nepal.",

    researchGate:
      "https://www.researchgate.net/publication/408300962_Landslide_Susceptibility_Mapping_Using_GIS-Based_Frequency_Ratio_Method_in_Eastern_Nepal",

    doi:
      "https://doi.org/10.1155/aess/6678592",

    metrics: [
      {
        value: "211",
        label: "Landslides Inventoried",
      },
      {
        value: "11",
        label: "Conditioning Factors",
      },
      {
        value: "0.767",
        label: "ROC-AUC Validation",
      },
    ],

    methods: [
      "GIS",
      "Remote Sensing",
      "Frequency Ratio",
      "DEM Analysis",
      "Spatial Modelling",
    ],
  },


  {
    status: "Published | Co-author",
    icon: "🌲",
    image: "/images/publications/timber-paper.webp",

    title:
      "Evaluating Timber Volume Discrepancies in Teak Plantations of the Sagarnath Forest Development Project, Nepal: A Comparative Study",

    role:
      "Baral, A., Joshi, R., Ghimire, S., Prabhakar, A., & Subedi, P.",

    journal:
      "International Journal of Forestry",

    year:
      "2026",

    description:
      "A forestry-based research study evaluating discrepancies in timber volume estimation of teak plantations using field measurements, volume calculation techniques, and comparative analysis.",

    researchGate:
      "https://www.researchgate.net/publication/405856172_Evaluating_Timber_Volume_Discrepancies_in_Teak_Plantations_of_the_Sagarnath_Forest_Development_Project_Nepal_A_Comparative_Study",

    doi:
      "https://www.ijf-isaforestry.ir/article_231425.html",

    metrics: [
      {
        value: "17",
        label: "Volume",
      },
      {
        value: "559-569",
        label: "Pages",
      },
      {
        value: "Teak",
        label: "Plantation Study",
      },
    ],

    methods: [
      "Forest Inventory",
      "Timber Measurement",
      "Volume Calculation",
      "Statistical Analysis",
    ],
  },


  {
    status: "Co-author | Ongoing Research",
    icon: "🌊",

    title:
      "Flood Susceptibility Assessment Using Geospatial Modelling",

    role:
      "Co-author / Research Collaborator",

    journal:
      "Hydrological Hazard Research",

    year:
      "Ongoing",

    description:
      "Collaborative research applying GIS-based multi-criteria analysis and environmental parameters to assess flood susceptibility and spatial vulnerability within a watershed system.",

    researchGate: "",

    doi: "",

    metrics: [
      {
        value: "GIS",
        label: "Framework",
      },
      {
        value: "AHP",
        label: "Modelling Approach",
      },
      {
        value: "Team",
        label: "Collaboration",
      },
    ],

    methods: [
      "GIS",
      "Remote Sensing",
      "AHP",
      "Hydrological Analysis",
      "Spatial Modelling",
    ],
  },
];


export default function Publications() {
  return (
    <section id="publications" className="px-4 py-20 sm:px-6 lg:px-8 lg:py-32">

      <div className="mx-auto max-w-7xl">


        {/* Header */}
        <div className="text-center">

          <p className="text-xs uppercase tracking-[0.35em] text-emerald-400 sm:text-sm">
            Publications & Research Outputs
          </p>


          <h2 className="mt-4 font-serif text-3xl font-bold sm:text-4xl lg:text-5xl">
            Scientific Contributions
          </h2>


          <p className="mx-auto mt-6 max-w-3xl text-base text-gray-400 sm:text-lg">
            Research contributions spanning natural hazards,
            geospatial modelling, forestry measurements,
            and environmental assessment.
          </p>

        </div>



        {/* Cards */}
        <div className="mt-16 space-y-10">


          {publications.map((paper) => (

            <article
              key={paper.title}
              className="
              rounded-3xl
              border
              border-white/10
              bg-white/5
              p-5
              transition
              hover:border-emerald-500/50
              sm:p-8
              md:p-10
              "
            >

              <div className="flex items-center gap-4">

                <span className="text-4xl">
                  {paper.icon}
                </span>


                <p className="text-xs uppercase tracking-[0.28em] text-emerald-400 sm:text-sm">
                  {paper.status}
                </p>

              </div>



              <h3 className="mt-5 text-2xl font-semibold leading-tight sm:text-3xl">
                {paper.title}
              </h3>



              <p className="mt-3 text-sm text-gray-300 sm:text-base">
                {paper.role}
              </p>



              <p className="mt-2 text-sm text-gray-400 sm:text-base">
                {paper.journal} • {paper.year}
              </p>



              <p className="mt-6 max-w-5xl text-base leading-7 text-gray-300 sm:text-lg sm:leading-8">
                {paper.description}
              </p>



              <div className={`mt-10 grid gap-8 ${paper.image ? "md:grid-cols-3" : ""}`}>

                <div className={paper.image ? "md:col-span-2" : ""}>

                  {/* Metrics */}
                  <div className="grid gap-3 sm:grid-cols-3 sm:gap-5">

                    {paper.metrics.map((metric) => (

                      <div
                        key={metric.label}
                        className="
                        rounded-2xl
                        border
                        border-white/10
                        bg-black/20
                        p-4
                        text-center
                        sm:p-5
                        "
                      >

                        <p className="text-2xl font-bold text-emerald-400 sm:text-3xl">
                          {metric.value}
                        </p>

                        <p className="mt-2 text-xs text-gray-400 sm:text-sm">
                          {metric.label}
                        </p>

                      </div>

                    ))}

                  </div>



                  {/* Methods */}
                  <div className="mt-8 flex flex-wrap gap-3">

                    {paper.methods.map((method) => (

                      <span
                        key={method}
                        className="
                        rounded-full
                        border
                        border-emerald-500/40
                        px-3
                        py-2
                        text-xs
                        text-emerald-300
                        sm:text-sm
                        "
                      >
                        {method}
                      </span>

                    ))}

                  </div>



                  {/* Links */}
                  <div className="mt-8 flex flex-wrap gap-4">


                    {paper.researchGate && (
                      <a
                        href={paper.researchGate}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                        rounded-xl
                        bg-emerald-500
                        px-5
                        py-3
                        text-sm
                        font-semibold
                        text-black
                        transition
                        hover:bg-emerald-400
                        sm:px-6
                        "
                      >
                        ResearchGate →
                      </a>
                    )}



                    {paper.doi && (
                      <a
                        href={paper.doi}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                        rounded-xl
                        border
                        border-emerald-500
                        px-5
                        py-3
                        text-sm
                        text-emerald-300
                        transition
                        hover:bg-emerald-500/10
                        sm:px-6
                        "
                      >
                        DOI →
                      </a>
                    )}


                  </div>

                </div>

                {paper.image && (
                  <div className="relative h-48 w-full overflow-hidden rounded-2xl border border-white/10 md:h-full">
                    <Image
                      src={paper.image}
                      alt={paper.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}

              </div>


            </article>

          ))}


        </div>


      </div>

    </section>
  );
}