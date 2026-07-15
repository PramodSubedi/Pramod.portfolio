import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

import {
  SiOrcid,
  SiResearchgate,
} from "react-icons/si";


const links = [
  {
    name: "ResearchGate",
    url: "https://www.researchgate.net/profile/Pramod-Subedi-6",
    icon: SiResearchgate,
  },

  {
    name: "ORCID",
    url: "https://orcid.org/0009-0004-0608-8346",
    icon: SiOrcid,
  },

  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/pramod--subedi",
    icon: FaLinkedin,
  },

  {
    name: "GitHub",
    url: "https://github.com/PramodSubedi/Pramod.GIS",
    icon: FaGithub,
  },
];


export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-12">

      <div className="mx-auto max-w-7xl px-6">


        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">


          {/* Identity */}
          <div className="text-center md:text-left">

            <h2 className="text-2xl font-semibold">
              Pramod Subedi
            </h2>


            <p className="mt-2 text-gray-400">
              GIS • Remote Sensing • Forestry • Natural Hazards
            </p>


            <p className="mt-2 text-sm text-gray-500">
              Exploring landscapes of the Hindu Kush Himalaya
            </p>

          </div>




          {/* Social Links */}
          <div className="flex gap-4">


            {links.map((item) => {

              const Icon = item.icon;


              return (

                <a
                  key={item.name}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.name}
                  className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-white/10
                  bg-white/5
                  transition
                  hover:border-emerald-500
                  hover:text-emerald-400
                  "
                >

                  <Icon
                    className="
                    h-5
                    w-5
                    "
                  />

                </a>

              );

            })}


          </div>


        </div>




        {/* Bottom */}
        <div
          className="
          mt-10
          border-t
          border-white/10
          pt-6
          text-center
          text-sm
          text-gray-500
          "
        >

          © {new Date().getFullYear()} Pramod Subedi.
          All rights reserved.

        </div>


      </div>

    </footer>
  );
}