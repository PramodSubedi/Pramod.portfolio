import Image from "next/image";
import {
  Mountain,
  Waves,
  Satellite,
  Trees,
  MapPinned,
  Sparkles,
} from "lucide-react";

import Section from "../ui/Section";
import Card from "../ui/Card";
import SectionHeading from "../ui/SectionHeading";
import Tag from "../ui/Tag";
import FadeUp from "../ui/animations/FadeUp";

const researchAreas = [
  "GIS",
  "Remote Sensing",
  "Python",
  "Google Earth Engine",
  "Hazard Mapping",
  "Spatial Modelling",
  "Forestry",
];

const researchFocus = [
  {
    title: "Landslide Susceptibility",
    icon: Mountain,
  },
  {
    title: "Flood Hazard Assessment",
    icon: Waves,
  },
  {
    title: "Remote Sensing Applications",
    icon: Satellite,
  },
  {
    title: "Forest & Landscape Monitoring",
    icon: Trees,
  },
  {
    title: "Hindu Kush Himalaya Research",
    icon: MapPinned,
  },
];

export default function About() {
  return (
    <Section id="about">

      {/* Heading */}
      <FadeUp>
        <SectionHeading
          eyebrow="Research Profile"
          title="Geospatial Researcher Specializing in Natural Hazards"
        />
      </FadeUp>

      <div className="mt-14 grid gap-14 lg:grid-cols-12">

        {/* Left Column - About & Skills */}
        <div className="lg:col-span-7 space-y-6">

          {/* About Card */}
          <FadeUp delay={0.2}>
            <Card className="p-8">
              <div className="space-y-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.25em] text-emerald-400 mb-4">
                    About Me
                  </p>
                  <p className="text-lg leading-8 text-gray-300">
                    I am a geospatial researcher from Nepal working at the
                    intersection of GIS, Remote Sensing, and Forestry.
                    My research integrates satellite data,
                    spatial modelling, and field observations to
                    understand landscape dynamics and natural
                    hazard vulnerability.
                  </p>
                </div>

                <div>
                  <p className="text-lg leading-8 text-gray-300">
                    My work focuses on landslide susceptibility
                    mapping, hazard assessment, and geospatial
                    approaches that support disaster risk reduction
                    and evidence-based environmental decision making
                    across Nepal and the Hindu Kush Himalaya.
                  </p>
                </div>
              </div>
            </Card>
          </FadeUp>

          {/* Technical Skills Card */}
          <FadeUp delay={0.3}>
            <Card className="p-8">
              <div className="space-y-6">
                <div>
                  <p className="text-sm uppercase tracking-[0.25em] text-emerald-400 mb-2">
                    <div className="flex items-center gap-2">
                      <Sparkles className="h-4 w-4" />
                      Technical Skills & Tools
                    </div>
                  </p>
                </div>
                <div className="flex flex-wrap gap-3">
                  {researchAreas.map((area) => (
                    <Tag key={area}>
                      {area}
                    </Tag>
                  ))}
                </div>
              </div>
            </Card>
          </FadeUp>

        </div>

        {/* Right Column - Profile & Insights */}
        <div className="lg:col-span-5 space-y-6">

          {/* Profile Image */}
          <FadeUp delay={0.35}>
            <Card className="overflow-hidden p-0 border-white/10">
              <Image
                src="/images/profile/profile.webp"
                alt="Pramod Subedi"
                width={700}
                height={900}
                className="
                  h-[320px]
                  w-full
                  object-cover
                "
                priority
              />
            </Card>
          </FadeUp>

          {/* Quick Overview & Research Focus Grid */}
          <div className="grid gap-6 lg:grid-cols-2">

            {/* Quick Overview */}
            <FadeUp delay={0.4}>
              <Card className="p-6 h-fit">
                <p className="text-sm uppercase tracking-[0.25em] text-emerald-400 mb-5">
                  Quick Overview
                </p>

                <div className="space-y-4 text-gray-300">
                  <div>
                    <p className="text-xs text-gray-500 mb-1">
                      Education
                    </p>
                    <p className="text-sm font-medium">
                      B.Sc. Forestry
                    </p>
                  </div>

                  <div>
                    <p className="text-xs text-gray-500 mb-1">
                      Institution
                    </p>
                    <p className="text-sm font-medium">
                      Agriculture and<br/>Forestry University
                    </p>
                  </div>

                  <div>
                    <p className="text-xs text-gray-500 mb-1">
                      Domain
                    </p>
                    <p className="text-sm font-medium">
                      GIS • Remote Sensing<br/>• Natural Hazards
                    </p>
                  </div>
                </div>
              </Card>
            </FadeUp>

            {/* Research Focus - Compact */}
            <FadeUp delay={0.45}>
              <Card className="p-6 h-fit">
                <p className="text-sm uppercase tracking-[0.25em] text-emerald-400 mb-5">
                  Research Focus
                </p>

                <ul className="space-y-3">
                  {researchFocus.map((item) => {
                    const Icon = item.icon;
                    return (
                      <li
                        key={item.title}
                        className="flex items-start gap-2 text-xs text-gray-300"
                      >
                        <div className="flex h-6 w-6 items-center justify-center rounded-md border border-emerald-500/30 bg-emerald-500/10 flex-shrink-0 mt-0.5">
                          <Icon className="h-3 w-3 text-emerald-400" />
                        </div>
                        <span className="line-clamp-2">{item.title}</span>
                      </li>
                    );
                  })}
                </ul>
              </Card>
            </FadeUp>

          </div>

        </div>

      </div>
    </Section>
  );
} 