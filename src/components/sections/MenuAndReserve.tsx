import { useState } from "react";
import { Reveal } from "../Reveal";
import { Eyebrow } from "../Eyebrow";
import { Calendar, Clock, Users, ChevronDown, Loader2, Check } from "lucide-react";

const menuCols = [
  { title: "Starters", items: ["Burrata & Heirloom Tomatoes", "Tuna Tartare", "Truffle Arancini"] },
  { title: "Mains", items: ["Lemon Herb Chicken", "Seafood Linguine", "Grilled Lamb Cutlets"] },
  { title: "Desserts", items: ["Tiramisu", "Chocolate Delice", "Pistachio Semifreddo"] },
];

function Vase({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 200 320" fill="none">
      <g stroke="#8B5B2A" strokeWidth="0.8" opacity="0.55">
        <path d="M100 30 C 95 80 90 130 95 200" />
        <path d="M100 30 C 80 60 60 100 50 140" />
        <path d="M100 30 C 120 70 135 120 145 160" />
        <path d="M70 90 C 65 95 60 100 55 110 M 130 90 C 135 95 140 100 145 110" />
        <ellipse cx="60" cy="80" rx="8" ry="3" transform="rotate(-30 60 80)" />
        <ellipse cx="140" cy="80" rx="8" ry="3" transform="rotate(30 140 80)" />
        <ellipse cx="80" cy="50" rx="7" ry="3" transform="rotate(-20 80 50)" />
        <ellipse cx="120" cy="50" rx="7" ry="3" transform="rotate(20 120 50)" />
      </g>
      <path d="M70 200 Q 100 195 130 200 L 140 290 Q 100 305 60 290 Z" fill="#E8DCC9" stroke="#B88A52" strokeWidth="0.8" />
      <ellipse cx="100" cy="200" rx="30" ry="5" fill="#D9CCBC" />
    </svg>
  );
}

export function MenuAndReserve() {
  return (
    <section id="reserve" className="relative bg-[var(--cream)] pb-0">
      {/* Wrapper background image area */}
      <div className="bg-[var(--cream-warm)]">
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 px-6 lg:px-10 py-20 lg:py-28 relative">
          <Vase className="absolute left-0 bottom-4 w-28 lg:w-40 hidden md:block" />
          <Vase className="absolute right-2 bottom-4 w-24 lg:w-32 hidden md:block" />

          {/* Menu preview */}
          <Reveal className="relative z-10 lg:pl-32">
            <Eyebrow>Menu Preview</Eyebrow>
            <h2 className="mt-4 text-[clamp(1.8rem,3vw,2.8rem)] text-[var(--ink)]">A Taste of What Awaits</h2>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm">
              {menuCols.map((c) => (
                <div key={c.title}>
                  <h4 className="text-[11px] uppercase tracking-[0.22em] font-semibold text-[var(--ink)]">{c.title}</h4>
                  <ul className="mt-4 space-y-3 text-[var(--ink-muted)]">
                    {c.items.map((i) => <li key={i}>{i}</li>)}
                  </ul>
                </div>
              ))}
            </div>

            <a href="#" className="btn-outline mt-10">Explore Full Menu</a>
          </Reveal>

          {/* Reservation card */}
          <Reveal delay={0.15} className="relative z-10 lg:pr-24">
            <div className="bg-[#EFE3D1] arch-top px-7 lg:px-10 py-10 lg:py-12 shadow-[0_30px_80px_-40px_rgba(43,33,24,0.45)]">
              <div className="text-center">
                <Eyebrow>Reservation</Eyebrow>
                <h2 className="mt-3 text-[clamp(1.8rem,3vw,2.6rem)] text-[var(--ink)]">Book Your Table</h2>
              </div>
              <ReservationForm />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function ReservationForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [data, setData] = useState({ name: "", phone: "", date: "", time: "", guests: "", pref: "" });

  const set = (k: keyof typeof data) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setData((d) => ({ ...d, [k]: e.target.value }));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!data.name || !data.phone || !data.date || !data.time || !data.guests) {
      setStatus("error");
      return;
    }
    setStatus("loading");
    setTimeout(() => setStatus("success"), 1400);
  };

  const inputCls = "w-full bg-white/70 border border-[var(--border)] px-4 py-3.5 text-sm text-[var(--ink)] placeholder:text-[var(--ink-muted)]/80 outline-none focus:border-[var(--cocoa)] transition-colors";

  if (status === "success") {
    return (
      <div className="mt-10 flex flex-col items-center text-center py-10">
        <div className="w-14 h-14 rounded-full bg-[var(--cocoa)] flex items-center justify-center text-white"><Check /></div>
        <h3 className="mt-5 text-2xl text-[var(--ink)]">Reservation Received</h3>
        <p className="mt-2 text-sm text-[var(--ink-muted)] max-w-sm">Thank you, {data.name || "Guest"}. We'll confirm your table shortly via {data.phone}.</p>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="mt-8 space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input className={inputCls} placeholder="Your Name" value={data.name} onChange={set("name")} />
        <input className={inputCls} placeholder="Phone Number" value={data.phone} onChange={set("phone")} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="relative">
          <input type="date" className={inputCls + " pr-10"} value={data.date} onChange={set("date")} />
          <Calendar size={16} className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[var(--ink-muted)]" />
        </div>
        <div className="relative">
          <select className={inputCls + " appearance-none pr-10"} value={data.time} onChange={set("time")}>
            <option value="">Time</option>
            {["12:30","13:00","18:00","19:00","19:30","20:00","20:30","21:00"].map(t => <option key={t}>{t}</option>)}
          </select>
          <Clock size={16} className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[var(--ink-muted)]" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="relative">
          <select className={inputCls + " appearance-none pr-10"} value={data.guests} onChange={set("guests")}>
            <option value="">Guests</option>
            {[1,2,3,4,5,6,7,8].map(n => <option key={n} value={n}>{n} {n === 1 ? "Guest" : "Guests"}</option>)}
          </select>
          <Users size={16} className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[var(--ink-muted)]" />
        </div>
        <div className="relative">
          <select className={inputCls + " appearance-none pr-10"} value={data.pref} onChange={set("pref")}>
            <option value="">Your Preference (Optional)</option>
            <option>Window seating</option>
            <option>Quiet corner</option>
            <option>Outdoor archway</option>
            <option>Bar seating</option>
          </select>
          <ChevronDown size={16} className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[var(--ink-muted)]" />
        </div>
      </div>

      {status === "error" && (
        <p className="text-sm text-[var(--cocoa-dark)]">Please complete all required fields.</p>
      )}

      <button disabled={status === "loading"} className="w-full mt-2 inline-flex items-center justify-center gap-2 bg-[var(--cocoa)] hover:bg-[var(--cocoa-dark)] text-white py-4 text-xs uppercase tracking-[0.28em] font-semibold transition-colors disabled:opacity-70">
        {status === "loading" ? <><Loader2 size={16} className="animate-spin" /> Reserving…</> : "Reserve Your Table"}
      </button>
    </form>
  );
}
