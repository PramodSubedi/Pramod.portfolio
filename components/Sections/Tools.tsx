const toolCategories = [
  {
    title: "GIS & Spatial Analysis",
    icon: "🗺️",
    description:
      "Spatial data processing, terrain analysis, and geospatial modelling for environmental research.",
    tools: [
      "ArcGIS Pro",
      "ArcMap",
      "QGIS",
      "ArcSDM",
      "Spatial Analyst",
      "Raster Calculator",
    ],
  },

  {
    title: "Remote Sensing & Earth Observation",
    icon: "🛰️",
    description:
      "Satellite-based monitoring and earth observation techniques for landscape and hazard assessment.",
    tools: [
      "Google Earth Engine",
      "Sentinel-2",
      "Landsat",
      "MODIS",
      "SRTM DEM",
      "Copernicus DEM",
    ],
  },

  {
    title: "Programming & Data Science",
    icon: "💻",
    description:
      "Programming and statistical tools for data processing, analysis, and research workflows.",
    tools: [
      "Python",
      "R",
      "RStudio",
      "Jupyter Notebook",
      "Google Colab",
      "Data Analysis",
    ],
  },

  {
    title: "Field Data Collection",
    icon: "📍",
    description:
      "Field-based measurements and geographic data collection supporting environmental research.",
    tools: [
      "Garmin GPSmap 64s",
      "Garmin BaseCamp",
      "GPS Survey",
      "Forest Inventory",
      "Resource Mapping",
    ],
  },
];


export default function Tools() {
  return (
    <section className="py-32">

      <div className="mx-auto max-w-7xl px-6">


        {/* Header */}
        <div className="text-center">

          <p className="text-sm uppercase tracking-[0.4em] text-emerald-400">
            Technical Skills
          </p>


          <h2 className="mt-4 font-serif text-5xl font-bold">
            Tools & Research Workflow
          </h2>


          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-400">
            A geospatial workflow combining satellite observation,
            spatial modelling, programming, and field-based measurements
            for environmental and hazard research.
          </p>

        </div>



        {/* Tool Categories */}
        <div className="mt-16 grid gap-8 md:grid-cols-2">


          {toolCategories.map((category) => (

            <div
              key={category.title}
              className="
              rounded-3xl
              border
              border-white/10
              bg-white/5
              p-8
              transition
              hover:border-emerald-500/50
              "
            >


              <div className="flex items-start gap-5">


                <div className="text-4xl">
                  {category.icon}
                </div>


                <div>

                  <h3 className="text-2xl font-semibold">
                    {category.title}
                  </h3>


                  <p className="mt-4 leading-7 text-gray-300">
                    {category.description}
                  </p>

                </div>


              </div>



              <div className="mt-8 flex flex-wrap gap-3">


                {category.tools.map((tool) => (

                  <span
                    key={tool}
                    className="
                    rounded-full
                    border
                    border-emerald-500/40
                    px-4
                    py-2
                    text-sm
                    text-emerald-300
                    "
                  >
                    {tool}
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