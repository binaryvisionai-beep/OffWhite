import { Reveal } from "../Reveal";
import { Eyebrow } from "../Eyebrow";
import arch from "@/assets/story-arch.jpg";

export function Story() {
  return (
    <section id="story" className="relative bg-[var(--cream-warm)] py-24 lg:py-32 overflow-hidden">
      {/* Decorative botanical */}
      <svg className="absolute right-0 top-1/2 -translate-y-1/2 w-[380px] opacity-[0.08] hidden md:block" viewBox="0 0 200 400" fill="none">
        <path d="M100 380 C90 280 95 180 100 20" stroke="#2B2118" strokeWidth="1" />
        {Array.from({ length: 14 }).map((_, i) => (
          <g key={i}>
            <path d={`M100 ${340 - i * 22} C 80 ${330 - i * 22}, 50 ${325 - i * 22}, 30 ${320 - i * 22}`} stroke="#2B2118" strokeWidth="0.8" fill="none" />
            <path d={`M100 ${340 - i * 22} C 120 ${330 - i * 22}, 150 ${325 - i * 22}, 170 ${320 - i * 22}`} stroke="#2B2118" strokeWidth="0.8" fill="none" />
          </g>
        ))}
      </svg>

      <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-14 px-6 lg:grid-cols-2 lg:gap-20 lg:px-10 items-center">
        <Reveal>
          <div className="relative">
            <div className="overflow-hidden arch-top shadow-[0_30px_80px_-30px_rgba(43,33,24,0.35)]">
              <img src={arch} alt="Mediterranean archway" className="w-full h-[380px] sm:h-[460px] lg:h-[560px] object-cover transition-transform duration-[1.2s] hover:scale-[1.04]" width={1024} height={1280} loading="lazy" />
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <Eyebrow>Our Story</Eyebrow>
          <h2 className="mt-5 text-[clamp(2rem,3.6vw,3.2rem)] leading-[1.1] text-[var(--ink)]">
            Inspired by Mediterranean
            <br />Living &amp; Timeless Design
          </h2>
          <p className="mt-7 text-[var(--ink-muted)] leading-[1.85] max-w-lg">
            The Off White Bar &amp; Grill is more than a restaurant —
            it's a celebration of <span className="text-[var(--ink)] font-medium">flavour</span>, light, and space.
            From sunlit afternoons to intimate evenings,
            every detail is crafted to make your experience
            beautifully unforgettable.
          </p>
          <a href="#" className="btn-outline mt-9">Discover Our Story</a>
        </Reveal>
      </div>
    </section>
  );
}
