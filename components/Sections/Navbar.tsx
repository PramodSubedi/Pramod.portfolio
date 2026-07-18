"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Download, Menu, Satellite, X } from "lucide-react";

const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "journey", label: "Journey" },
  { id: "projects", label: "Projects" },
  /* { id: "research-footprint", label: "Map" }, */
  { id: "skills", label: "Skills" },
  { id: "publications", label: "Publications" },
  { id: "contact", label: "Contact" },
];

function BrandMark() {
  const [scanActive, setScanActive] = useState(false);
  const [scanVisible, setScanVisible] = useState(false);

  useEffect(() => {
    const showTimer = window.setTimeout(() => setScanVisible(true), 70);
    const brightenTimer = window.setTimeout(() => setScanActive(true), 220);
    const resetTimer = window.setTimeout(() => setScanActive(false), 950);

    return () => {
      window.clearTimeout(showTimer);
      window.clearTimeout(brightenTimer);
      window.clearTimeout(resetTimer);
    };
  }, []);

  return (
    <motion.a
      href="#home"
      className="flex items-center gap-3 pr-2"
      aria-label="Go to home section"
      whileHover={{ rotate: 5, filter: "brightness(1.05)" }}
      transition={{ duration: 0.25, ease: "easeOut" }}
    >
      <motion.span
        initial={{ opacity: 0, rotate: -12, scale: 0.92 }}
        animate={{
          opacity: 1,
          rotate: 0,
          scale: 1,
          filter: scanActive ? "brightness(1.08)" : "brightness(1)",
        }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative flex h-10 w-10 items-center justify-center rounded-full border border-emerald-400/20 bg-emerald-400/10 text-emerald-400/95 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] sm:h-11 sm:w-11"
      >
        <Satellite className="h-5 w-5 sm:h-6 sm:w-6" />
        {scanVisible && (
          <motion.span
            aria-hidden
            initial={{ left: "-40%", opacity: 0 }}
            animate={{ left: "115%", opacity: [0, 0.7, 0] }}
            transition={{ duration: 0.95, ease: "easeOut" }}
            className="pointer-events-none absolute inset-y-0 w-[42%] rounded-full blur-[8px]"
            style={{
              background:
                "linear-gradient(90deg, rgba(47,191,113,0) 0%, rgba(47,191,113,0.26) 45%, rgba(47,191,113,0.08) 80%, rgba(47,191,113,0) 100%)",
            }}
          />
        )}
      </motion.span>

      <div className="leading-tight">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, color: scanActive ? "rgba(255,255,255,0.98)" : "rgba(255,255,255,0.9)" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="block text-[0.76rem] font-semibold uppercase tracking-[0.2em] text-white/90 sm:text-[0.84rem]"
        >
          PRAMOD SUBEDI
        </motion.span>

        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.08 }}
          className="mt-1 block text-[0.55rem] uppercase tracking-[0.24em] text-gray-400 sm:text-[0.6rem]"
        >
          GIS • REMOTE SENSING • FORESTRY
        </motion.span>
      </div>
    </motion.a>
  );
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const updateActiveSection = () => {
      const offset = window.innerHeight * 0.22 + 90;
      const scrollPosition = window.scrollY + offset;
      const sections = navLinks
        .map((link) => document.getElementById(link.id))
        .filter(Boolean) as HTMLElement[];

      if (!sections.length) return;

      let currentSection = "home";

      sections.forEach((section) => {
        const top = section.offsetTop;
        const bottom = top + section.offsetHeight;

        if (scrollPosition >= top && scrollPosition < bottom) {
          currentSection = section.id;
        }
      });

      setActiveSection(currentSection);
    };

    updateActiveSection();

    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  return (
    <motion.header
      className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-[rgba(8,18,15,0.72)] backdrop-blur-xl"
      initial={false}
      animate={{
        boxShadow: isScrolled ? "0 10px 30px rgba(0,0,0,0.16)" : "0 0 0 rgba(0,0,0,0)",
      }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <motion.nav
        className="mx-auto flex h-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
        initial={false}
        animate={{ height: isScrolled ? 68 : 84 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <BrandMark />

        <div className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;

            return (
              <motion.a
                key={link.id}
                href={`#${link.id}`}
                whileHover={{ y: -1, color: "#F9FAFB" }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                animate={{ color: isActive ? "#A7F3D0" : "#D1D5DB" }}
                className="relative pb-1 text-[0.8rem] font-medium uppercase tracking-[0.18em]"
              >
                {link.label}
                {isActive && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute -bottom-1 left-0 h-[2px] w-full rounded-full bg-emerald-400"
                    transition={{ type: "spring", stiffness: 360, damping: 32 }}
                  />
                )}
              </motion.a>
            );
          })}

          <motion.a
            href="/Pramod_Subedi_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ backgroundColor: "rgba(47,191,113,0.12)", borderColor: "rgba(110,231,183,0.8)" }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="inline-flex items-center gap-2 rounded-full border border-emerald-400/50 px-5 py-2.5 text-[0.8rem] font-semibold uppercase tracking-[0.2em] text-emerald-300/90"
          >
            <motion.span whileHover={{ x: 2 }} transition={{ duration: 0.2, ease: "easeOut" }} className="flex items-center">
              <Download className="h-4 w-4" />
            </motion.span>
            <span>View CV</span>
          </motion.a>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen((value) => !value)}
          className="rounded-full p-2 text-white/90 transition-colors duration-200 hover:text-emerald-300 md:hidden"
          aria-expanded={menuOpen}
          aria-label="Toggle navigation menu"
        >
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="border-t border-white/10 bg-[rgba(8,18,15,0.95)] md:hidden"
          >
            <div className="mx-auto flex max-w-7xl flex-col px-4 py-6 sm:px-6">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;

                return (
                  <a
                    key={link.id}
                    href={`#${link.id}`}
                    onClick={(event) => {
                      event.preventDefault();
                      setMenuOpen(false);
                      setTimeout(() => {
                        const el = document.getElementById(link.id);
                        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
                      }, 120);
                    }}
                    className={`rounded-xl px-3 py-3 text-sm font-medium uppercase tracking-[0.16em] transition-colors duration-200 ${
                      isActive ? "bg-emerald-500/10 text-emerald-300" : "text-gray-300 hover:text-emerald-300"
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}

              <a
                href="/Pramod_Subedi_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center justify-center rounded-full border border-emerald-400/50 px-5 py-3 text-center text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300"
              >
                View CV
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}