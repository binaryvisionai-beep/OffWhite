import { Reveal } from "../Reveal";
import { Eyebrow } from "../Eyebrow";
import { Star, Quote } from "lucide-react";
import niche from "@/assets/niche.jpg";

const reviews = [
  { quote: "A hidden gem! The ambiance, the food, everything was absolutely perfect. Will come back again and again.", name: "Priya M." },
  { quote: "The attention to detail is unmatched. The space, the service, the flavours — simply outstanding.", name: "Arjun R." },
  { quote: "Felt like a vacation in the Mediterranean. The mural seating is our new favourite spot in the city!", name: "Neha D." },
];

export function Testimonials() {
  return (
    <section className="bg-[var(--cream)] py-24 lg:py-28">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <Reveal className="text-center">
          <Eyebrow>What Our Guests Say</Eyebrow>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-[1fr_1fr_1fr_auto] lg:items-stretch">
          {reviews.map((r, i) => (
            <Reveal key={r.name} delay={i * 0.1}>
              <div className="h-full bg-[var(--cream-warm)] p-8 lg:p-9 rounded-sm text-center transition-transform hover:-translate-y-1 duration-500">
                <Quote className="mx-auto text-[var(--gold)]" size={24} />
                <p className="mt-5 italic text-[var(--ink-muted)] leading-[1.85] text-[15px]">{r.quote}</p>
                <p className="mt-6 text-sm text-[var(--ink)]">— {r.name}</p>
                <div className="mt-3 flex items-center justify-center gap-1 text-[var(--gold)]">
                  {Array.from({ length: 5 }).map((_, k) => <Star key={k} size={14} fill="currentColor" strokeWidth={0} />)}
                </div>
              </div>
            </Reveal>
          ))}
          <Reveal delay={0.3} className="hidden lg:block">
            <div className="h-full w-44 overflow-hidden arch-top">
              <img src={niche} alt="Decorative niche" className="h-full w-full object-cover" width={768} height={1024} loading="lazy" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
