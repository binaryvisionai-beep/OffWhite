import { Reveal } from "../Reveal";
import { Eyebrow } from "../Eyebrow";
import bar from "@/assets/space-bar.jpg";
import archway from "@/assets/space-archway.jpg";
import mural from "@/assets/space-mural.jpg";
import dining from "@/assets/space-dining.jpg";

const items = [
  { img: bar, label: "The Bar" },
  { img: archway, label: "The Archway Corner" },
  { img: mural, label: "The Mural Seating" },
  { img: dining, label: "The Sunlit Dining" },
];

export function Space() {
  return (
    <section className="bg-[var(--cream-warm)] py-24 lg:py-32">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
        <Reveal className="text-center">
          <Eyebrow>The Space</Eyebrow>
          <h2 className="mt-4 text-[clamp(2rem,3.6vw,3.2rem)] text-[var(--ink)]">Every Corner Has a Story</h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-2 gap-5 md:gap-6 lg:grid-cols-4">
          {items.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08}>
              <div className="group relative overflow-hidden rounded-md aspect-[4/5] cursor-pointer">
                <img src={s.img} alt={s.label} width={1024} height={896} loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.2s] group-hover:scale-[1.08]" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent transition-opacity duration-500 group-hover:from-black/85" />
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <h3 className="text-xl lg:text-2xl">{s.label}</h3>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-14 text-center">
          <a href="#" className="btn-outline">View Gallery</a>
        </Reveal>
      </div>
    </section>
  );
}
