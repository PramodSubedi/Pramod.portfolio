"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  Mountain,
  Waves,
  Trees,
  CheckCircle2,
} from "lucide-react";

import Card from "../ui/Card";
import SectionHeading from "../ui/SectionHeading";
import Tag from "../ui/Tag";

const projects = [
  {
    category: "Published Research",
    icon: Mountain,
    title: "Landslide Susceptibility Mapping of Udayapur District, Nepal",
    role: "First Author / Lead Researcher",
    status: "Published Research",

    image: "/images/projects/landslide-map.webp",
    

    description:
      "Developed a GIS-based landslide susceptibility assessment framework by integrating landslide inventory data, environmental conditioning factors, and spatial modelling techniques to identify hazard-prone areas in Udayapur District, Nepal.",

    highlights: [
      "211 landslides inventoried and validated",
      "11 landslide conditioning factors analysed",
      "Frequency Ratio (FR) modelling approach",
      "ROC-AUC validation: 0.767",
    ],

    tools: [
      "ArcGIS",
      "QGIS",
      "SRTM DEM",
      "Google Earth Pro",
      "Remote Sensing",
    ],
  },

  {
    category: "Collaborative Research",
    icon: Waves,
    title: "Flood Susceptibility Assessment Using Geospatial Modelling",
    role: "Co-author / Research Collaborator",
    status: "Ongoing Research",

    description:
      "Contributing to a collaborative research study focused on flood susceptibility assessment using GIS-based multi-criteria analysis and environmental parameters to identify vulnerable areas.",

    highlights: [
      "Hydrological and terrain analysis",
      "Multi-criteria decision approach",
      "Spatial vulnerability modelling",
      "Watershed-based assessment",
    ],

    tools: [
      "GIS",
      "Remote Sensing",
      "AHP",
      "Spatial Analysis",
      "Environmental Modelling",
    ],
  },

  {
    category: "Field Experience",
    icon: Trees,
    title: "Forest Resource Inventory & Landscape Assessment",
    role: "Field Researcher",
    status: "Applied Field Studies",

    description:
      "Conducted field-based forest assessments and natural resource surveys integrating GPS data collection, inventory methods, participatory mapping, and geospatial analysis.",

    highlights: [
      "Forest inventory and measurement",
      "GPS-based field data collection",
      "Community forest resource mapping",
      "Landscape and resource assessment",
    ],

    tools: [
      "GPS",
      "Garmin Field Devices",
      "ArcGIS",
      "Field Survey Methods",
    ],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-32">
      <div className="mx-auto max-w-7xl px-6">

        <SectionHeading
          eyebrow="Selected Research & Field Experience"
          title="Research, Collaboration & Applied Work"
          description="Selected works demonstrating independent research, scientific collaboration, and field-based experience in forestry and geospatial science."
          center
        />

        <div className="mt-16 space-y-10">

          {projects.map((project, index) => {

            const Icon = project.icon;

            return (

              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.12,
                  ease: "easeOut",
                }}
              >

                <Card className="p-8 md:p-10">
                    

                  <div className="grid gap-10 md:grid-cols-3">

                    {/* Left */}
                    <div className="md:col-span-2">

                      <div className="flex items-center gap-4">

                        <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-3">
                          <Icon className="h-6 w-6 text-emerald-400" />
                        </div>

                        <p className="text-sm uppercase tracking-[0.3em] text-emerald-400">
                          {project.category}
                        </p>

                      </div>

                      <h3 className="mt-6 text-3xl font-semibold">
                        {project.title}
                      </h3>

                      <p className="mt-2 text-gray-400">
                        {project.role}
                      </p>

                      <p className="mt-6 leading-8 text-gray-300">
                        {project.description}
                      </p>

                      <div className="mt-8">

                        <h4 className="text-sm uppercase tracking-[0.25em] text-gray-400">
                          Research Highlights
                        </h4>

                        <ul className="mt-4 space-y-3">

                          {project.highlights.map((item) => (

                            <li
                              key={item}
                              className="flex items-start gap-3 text-gray-300"
                            >
                              <CheckCircle2 className="mt-1 h-5 w-5 text-emerald-400" />
                              <span>{item}</span>
                            </li>

                          ))}

                        </ul>

                      </div>

                    </div>

                    {/* Right */}
                    <Card className="p-6">

                      <p className="text-sm uppercase tracking-[0.25em] text-emerald-400">
                        Tools & Methods
                      </p>

                      <div className="mt-5 flex flex-wrap gap-3">

                        {project.tools.map((tool) => (
                          <Tag key={tool}>
                            {tool}
                          </Tag>
                        ))}

                      </div>

                      <div className="mt-8">

                        <span className="inline-flex rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-sm text-emerald-300">
                          {project.status}
                        </span>

                      </div>

                    </Card>

                  </div>

                </Card>

              </motion.div>

            );

          })}

        </div>

      </div>
    </section>
  );
}