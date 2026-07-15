import { ExternalLink } from "lucide-react";

import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

import {
  SiOrcid,
  SiResearchgate,
} from "react-icons/si";


const profiles = [
  {
    name: "ResearchGate",
    description: "Research publications and academic updates",
    link: "https://www.researchgate.net/profile/Pramod-Subedi-6",
    icon: SiResearchgate,
  },

  {
    name: "ORCID",
    description: "Researcher identification profile",
    link: "https://orcid.org/0009-0004-0608-8346",
    icon: SiOrcid,
  },

  {
    name: "LinkedIn",
    description: "Professional networking and collaborations",
    link: "https://www.linkedin.com/in/pramod--subedi",
    icon: FaLinkedin,
  },

  {
    name: "GitHub",
    description: "GIS projects, scripts and technical work",
    link: "https://github.com/PramodSubedi/Pramod.GIS",
    icon: FaGithub,
  },
];


export default function Contact() {
  return (
    <section id="contact" className="py-32">

      <div className="mx-auto max-w-6xl px-6">


        {/* Section Header */}
        <div className="text-center">

          <p className="text-sm uppercase tracking-[0.4em] text-emerald-400">
            Connect
          </p>


          <h2 className="mt-4 font-serif text-5xl font-bold">
            Academic Profile & Collaboration
          </h2>


          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-400">
            Interested in GIS, Remote Sensing, natural hazards,
            forestry applications, and Himalayan environmental research?
            Let's connect and collaborate.
          </p>

        </div>



        {/* Personal Information */}
        <div
          className="
          mt-14
          rounded-3xl
          border
          border-white/10
          bg-white/5
          p-8
          md:p-10
          "
        >

          <h3 className="text-3xl font-semibold">
            Pramod Subedi
          </h3>


          <p className="mt-3 text-lg text-gray-300">
            B.Sc. Forestry | College of Natural Resource Management, Katari
          </p>


          <p className="mt-2 text-gray-400">
            Agriculture and Forestry University, Nepal
          </p>

        </div>



        {/* Academic Profiles */}
        <div className="mt-10 grid gap-6 md:grid-cols-2">

          {profiles.map((profile) => {

            const Icon = profile.icon;

            return (

              <a
                key={profile.name}
                href={profile.link}
                target="_blank"
                rel="noopener noreferrer"
                className="
                group
                rounded-2xl
                border
                border-white/10
                bg-white/5
                p-6
                transition
                hover:-translate-y-1
                hover:border-emerald-500/50
                "
              >

                <div className="flex items-center gap-5">


                  {/* Platform Icon */}
                  <div
                    className="
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-xl
                    border
                    border-emerald-500/30
                    bg-emerald-500/10
                    "
                  >

                    <Icon
                      className="
                      h-6
                      w-6
                      text-emerald-400
                      "
                    />

                  </div>



                  {/* Text */}
                  <div className="flex-1">

                    <h3 className="text-xl font-semibold">
                      {profile.name}
                    </h3>


                    <p className="mt-1 text-gray-400">
                      {profile.description}
                    </p>

                  </div>



                  <ExternalLink
                    className="
                    h-5
                    w-5
                    text-gray-500
                    transition
                    group-hover:text-emerald-400
                    "
                  />


                </div>


              </a>

            );

          })}

        </div>




        {/* CV and Email */}
        <div
          className="
          mt-12
          flex
          flex-col
          items-center
          justify-center
          gap-5
          md:flex-row
          "
        >

          <a
            href="/Pramod_Subedi_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="
            rounded-xl
            bg-emerald-500
            px-8
            py-3
            font-semibold
            text-black
            transition
            hover:bg-emerald-400
            "
          >
            View CV
          </a>



          <a
           href="https://mail.google.com/mail/?view=cm&fs=1&to=pramod.subedi.np@google.com"
           className="
           rounded-xl
           border
           border-emerald-500
           px-8
           py-3
           text-emerald-300
           transition
           hover:bg-emerald-500/10
          "
>
           Email Me
         </a>


        </div>


      </div>

    </section>
  );
}