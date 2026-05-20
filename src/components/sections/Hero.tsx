import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import heroImg from "@/assets/hero.jpg";

export function Hero() {
  return (
    <section className="relative h-[100svh] min-h-[560px] sm:min-h-[640px] lg:min-h-[720px] w-full overflow-hidden">
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0"
      >
        <img src={heroImg} alt="The Off White restaurant interior" className="h-full w-full object-cover" width={1920} height={1280} />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/25 to-black/55" />
      </motion.div>

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center text-white">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-[11px] uppercase tracking-[0.32em] font-medium text-white/90"
        >
          Fine Dining · Crafted Cocktails · Mediterranean Soul
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="mt-6 font-serif text-[clamp(2.8rem,7vw,6rem)] leading-[1.05] font-normal max-w-5xl"
        >
          Where Architecture
          <br />Meets Cuisine
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a href="#reserve" className="inline-flex items-center px-7 py-3.5 bg-[var(--cream)] text-[var(--ink)] text-xs uppercase tracking-[0.22em] font-semibold transition-transform hover:scale-[1.02]">
            Reserve a Table
          </a>
          <a href="#menu" className="btn-ghost-light">View Menu</a>
        </motion.div>
      </div>

      <motion.a
        href="#story"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ delay: 1.6, duration: 2, repeat: Infinity, repeatType: "loop" }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-white/90 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll Down</span>
        <ChevronDown size={18} />
      </motion.a>
    </section>
  );
}
