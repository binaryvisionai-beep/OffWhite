import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";

const NAV = ["Home", "About", "Menu", "The Space", "Gallery", "Events", "Contact"];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-[var(--cream)]/85 backdrop-blur-md shadow-[0_1px_0_rgba(0,0,0,0.04)]" : "bg-transparent"
      }`}
    >
      <div className="safe-pt safe-pl safe-pr mx-auto flex max-w-[1400px] items-center justify-between px-5 sm:px-6 lg:px-10 py-4 sm:py-5">
        <Logo light={!scrolled} />

        <nav className="hidden lg:flex items-center gap-9">
          {NAV.map((item) => (
            <a
              key={item}
              href="#"
              className={`group relative text-[13px] font-medium tracking-wide transition-colors ${
                scrolled ? "text-[var(--ink)] hover:text-[var(--cocoa)]" : "text-white/90 hover:text-white"
              }`}
            >
              {item}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-current transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <a
          href="#reserve"
          className={`hidden lg:inline-flex items-center px-5 py-3 border text-[11px] uppercase tracking-[0.24em] font-semibold transition-colors ${
            scrolled
              ? "border-[var(--cocoa)] text-[var(--cocoa)] hover:bg-[var(--cocoa)] hover:text-white"
              : "border-white/80 text-white hover:bg-white hover:text-[var(--ink)]"
          }`}
        >
          Reserve a Table
        </a>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className={`lg:hidden p-2 ${scrolled ? "text-[var(--ink)]" : "text-white"}`}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-[var(--cream)] border-t border-[var(--border)] px-6 py-6 flex flex-col gap-4">
          {NAV.map((item) => (
            <a key={item} href="#" className="text-[var(--ink)] text-sm font-medium" onClick={() => setOpen(false)}>
              {item}
            </a>
          ))}
          <a href="#reserve" className="btn-primary mt-2" onClick={() => setOpen(false)}>Reserve a Table</a>
        </div>
      )}
    </motion.header>
  );
}
