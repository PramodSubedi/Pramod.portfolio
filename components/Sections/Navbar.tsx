"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  /*{ id: "research", label: "Research" },*/
  { id: "projects", label: "Projects" },
  { id: "publications", label: "Publications" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {

  const timer = setTimeout(() => {

    const sections = navLinks
      .map((link) => document.getElementById(link.id))
      .filter(Boolean);


    if (!sections.length) return;


    const observer = new IntersectionObserver(

      (entries) => {

        const visibleSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a,b) =>
              b.intersectionRatio -
              a.intersectionRatio
          )[0];


        if (visibleSection) {

          setActiveSection(
            visibleSection.target.id
          );

        }

      },

      {
        threshold: [0.15,0.35,0.5],
        rootMargin:"-100px 0px -50% 0px",
      }

    );


    sections.forEach((section)=>{

      observer.observe(section!);

    });


    return () => observer.disconnect();


  },500);


  return () => clearTimeout(timer);


},[]);
  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-[#08120F]/70 backdrop-blur-lg">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        {/* Logo */}
        <a
          href="#home"
          className="text-xl font-semibold tracking-wide text-white"
        >
          Pramod Subedi
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`relative pb-1 text-sm font-medium transition-all duration-300 ${
                activeSection === link.id
                  ? "text-emerald-400"
                  : "text-gray-300 hover:text-emerald-400"
              }`}
            >
              {link.label}

              {activeSection === link.id && (
                <span className="absolute -bottom-1 left-0 h-0.5 w-full rounded-full bg-emerald-400" />
              )}
            </a>
          ))}

          <a
            href="/Pramod_Subedi_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl bg-emerald-500 px-5 py-2 text-sm font-semibold text-black transition hover:bg-emerald-400"
          >
            View CV
          </a>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-white md:hidden"
        >
          {menuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="border-t border-white/10 bg-[#08120F]/95 md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col px-6 py-6">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => setMenuOpen(false)}
                className={`rounded-lg px-2 py-3 transition ${
                  activeSection === link.id
                    ? "bg-emerald-500/10 text-emerald-400"
                    : "text-gray-300 hover:text-emerald-400"
                }`}
              >
                {link.label}
              </a>
            ))}

            <a
              href="/Pramod_Subedi_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 rounded-xl bg-emerald-500 px-5 py-3 text-center font-semibold text-black"
            >
              View CV
            </a>
          </div>
        </div>
      )}
    </header>
  );
}