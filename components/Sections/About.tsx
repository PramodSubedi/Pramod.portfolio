import Image from "next/image";
import {
  Mountain,
  Waves,
  Satellite,
  Trees,
  MapPinned,
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

      <div className="mt-14 grid items-start gap-14 lg:grid-cols-12">

        {/* Left Column */}
        <FadeUp
          delay={0.2}
          className="lg:col-span-7"
        >
          <Card className="p-8">

          <p className="text-lg leading-8 text-gray-300">
            I am a geospatial researcher from Nepal working at the
            intersection of GIS, Remote Sensing, and Forestry.
            My research integrates satellite data,
            spatial modelling, and field observations to
            understand landscape dynamics and natural
            hazard vulnerability.
          </p>

          <p className="mt-6 text-lg leading-8 text-gray-300">
            My work focuses on landslide susceptibility
            mapping, hazard assessment, and geospatial
            approaches that support disaster risk reduction
            and evidence-based environmental decision making
            across Nepal and the Hindu Kush Himalaya.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            {researchAreas.map((area) => (
              <Tag key={area}>
                {area}
              </Tag>
            ))}
          </div>
          </Card>
        </FadeUp>

        {/* Right Column */}
        <FadeUp delay={0.35}
          className="lg:col-span-5">

  <div className="space-y-6">


    {/* Profile Image */}

    <Card className="overflow-hidden p-0 border-white/10">

      <Image
        src="/images/profile/profile.webp"
        alt="Pramod Subedi"
        width={700}
        height={900}
        className="
          h-[350px]
          w-full
          object-cover
        "
        priority
      />

    </Card>



    {/* Quick Overview */}

    <Card className="p-6">

      <p className="text-sm uppercase tracking-[0.25em] text-emerald-400">
        Quick Overview
      </p>


      <div className="mt-5 space-y-4 text-gray-300">


        <div>
          <p className="text-sm text-gray-500">
            Education
          </p>

          <p>
            B.Sc. Forestry
          </p>
        </div>


        <div>
          <p className="text-sm text-gray-500">
            Institution
          </p>

          <p>
            Agriculture and Forestry University
          </p>
        </div>


        <div>
          <p className="text-sm text-gray-500">
            Research Domain
          </p>

          <p>
            GIS • Remote Sensing • Natural Hazards
          </p>
        </div>


      </div>

    </Card>


    {/* Research Focus */}

    <Card className="p-8">

      <p className="text-sm uppercase tracking-[0.25em] text-emerald-400">
        Research Focus
      </p>


      <ul className="mt-6 space-y-5">

        {researchFocus.map((item) => {

          const Icon = item.icon;

          return (
            <li
              key={item.title}
              className="flex items-center gap-4 text-gray-300"
            >

              <div
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-emerald-500/30
                  bg-emerald-500/10
                "
              >

                <Icon className="h-5 w-5 text-emerald-400" />

              </div>


              <span>
                {item.title}
              </span>


            </li>
          );

        })}

      </ul>

    </Card>


  </div>

</FadeUp>
      </div>
    </Section>
  );
} 