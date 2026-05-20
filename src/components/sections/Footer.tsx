import { Logo } from "../Logo";
import { Instagram, Facebook, Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#EFE3D1] pt-16 pb-6 safe-pb safe-pl safe-pr">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
        <div className="col-span-2 md:col-span-3 lg:col-span-1">
          <Logo />
          <p className="mt-5 text-sm text-[var(--ink-muted)] leading-relaxed">
            Fine Dining · Crafted Cocktails<br />Mediterranean Soul
          </p>
          <div className="mt-5 flex items-center gap-3 text-[var(--ink)]">
            <a aria-label="Instagram" href="#" className="hover:text-[var(--cocoa)]"><Instagram size={18} /></a>
            <a aria-label="Facebook" href="#" className="hover:text-[var(--cocoa)]"><Facebook size={18} /></a>
            <a aria-label="TripAdvisor" href="#" className="hover:text-[var(--cocoa)] text-[11px] tracking-widest font-bold">TA</a>
          </div>
        </div>

        <div>
          <h4 className="text-[11px] uppercase tracking-[0.24em] font-semibold text-[var(--ink)]">Quick Links</h4>
          <ul className="mt-5 space-y-3 text-sm text-[var(--ink-muted)]">
            {["About Us","Menu","The Space","Gallery","Events","Contact"].map((l) => (
              <li key={l}><a href="#" className="hover:text-[var(--cocoa)]">{l}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-[11px] uppercase tracking-[0.24em] font-semibold text-[var(--ink)]">Opening Hours</h4>
          <div className="mt-5 space-y-4 text-sm text-[var(--ink-muted)]">
            <div>Monday – Thursday<br /><span className="text-[var(--ink)]">12:00 PM – 11:00 PM</span></div>
            <div>Friday – Sunday<br /><span className="text-[var(--ink)]">12:00 PM – 12:00 AM</span></div>
            <p className="text-xs">Kitchen closes 30 mins before closing time.</p>
          </div>
        </div>

        <div>
          <h4 className="text-[11px] uppercase tracking-[0.24em] font-semibold text-[var(--ink)]">Contact</h4>
          <ul className="mt-5 space-y-3 text-sm text-[var(--ink-muted)]">
            <li className="flex items-start gap-2"><Phone size={14} className="mt-1" /> +91 12345 67890</li>
            <li className="flex items-start gap-2"><Mail size={14} className="mt-1" /> hello@theoffwhite.com</li>
            <li className="flex items-start gap-2"><MapPin size={14} className="mt-1" /> The Off White Bar &amp; Grill,<br />2nd Floor, La Atrium,<br />Candolim, Goa – 403515</li>
          </ul>
        </div>

        <div className="col-span-2 md:col-span-3 lg:col-span-1">
          <div className="aspect-[4/3] w-full overflow-hidden rounded-md border border-[var(--border)]">
            <iframe
              title="Map"
              src="https://www.openstreetmap.org/export/embed.html?bbox=73.7551%2C15.5111%2C73.7751%2C15.5311&layer=mapnik&marker=15.5211%2C73.7651"
              className="h-full w-full"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 mt-12 pt-6 border-t border-[var(--border)] flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-[var(--ink-muted)]">
        <p>© 2026 The Off White Bar &amp; Grill. All rights reserved.</p>
        <div className="flex gap-5">
          <a href="#" className="hover:text-[var(--cocoa)]">Privacy Policy</a>
          <a href="#" className="hover:text-[var(--cocoa)]">Terms &amp; Conditions</a>
        </div>
      </div>
    </footer>
  );
}
