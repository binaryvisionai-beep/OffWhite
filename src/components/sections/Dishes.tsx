import { Reveal } from "../Reveal";
import { Eyebrow } from "../Eyebrow";
import seabass from "@/assets/dish-seabass.jpg";
import octopus from "@/assets/dish-octopus.jpg";
import ravioli from "@/assets/dish-ravioli.jpg";
import spritz from "@/assets/dish-spritz.jpg";

const items = [
  { img: seabass, name: "Herb Crusted Sea Bass", notes: "Olive · Fennel · Citrus" },
  { img: octopus, name: "Grilled Octopus", notes: "Smoked Paprika · Lemon · Chickpea" },
  { img: ravioli, name: "Truffle Ravioli", notes: "Wild Mushrooms · Parmesan · Truffle Oil" },
  { img: spritz, name: "Signature Off White Spritz", notes: "Elderflower · Citrus · Prosecco" },
];

export function Dishes() {
  return (
    <section id="menu" className="bg-[var(--cream)] py-24 lg:py-32">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
        <Reveal className="text-center">
          <Eyebrow>Signature Dishes</Eyebrow>
          <h2 className="mt-4 text-[clamp(2rem,3.6vw,3.2rem)] text-[var(--ink)]">Art on a Plate</h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-2 gap-6 md:gap-8 lg:grid-cols-4">
          {items.map((d, i) => (
            <Reveal key={d.name} delay={i * 0.08}>
              <div className="group text-center">
                <div className="overflow-hidden arch-top bg-[var(--cream-warm)] transition-shadow duration-500 group-hover:shadow-[0_25px_60px_-25px_rgba(43,33,24,0.4)]">
                  <img src={d.img} alt={d.name} width={768} height={896} loading="lazy"
                    className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-[1.06]" />
                </div>
                <h3 className="mt-6 text-xl text-[var(--ink)]">{d.name}</h3>
                <div className="mx-auto mt-2 h-px w-8 bg-[var(--gold)]/60" />
                <p className="mt-3 text-[12px] tracking-[0.12em] text-[var(--ink-muted)]">{d.notes}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-14 text-center">
          <a href="#" className="btn-outline">Explore Full Menu</a>
        </Reveal>
      </div>
    </section>
  );
}
