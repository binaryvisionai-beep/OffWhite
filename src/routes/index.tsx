import { createFileRoute } from "@tanstack/react-router";
import { SmoothScroll } from "@/components/SmoothScroll";
import { Header } from "@/components/Header";
import { Hero } from "@/components/sections/Hero";
import { Story } from "@/components/sections/Story";
import { Dishes } from "@/components/sections/Dishes";
import { Space } from "@/components/sections/Space";
import { MenuAndReserve } from "@/components/sections/MenuAndReserve";
import { Testimonials } from "@/components/sections/Testimonials";
import { Footer } from "@/components/sections/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "The Off White — Fine Dining, Crafted Cocktails, Mediterranean Soul" },
      { name: "description", content: "Where architecture meets cuisine. Luxury Mediterranean restaurant in Candolim, Goa. Reserve your table for an unforgettable experience." },
      { property: "og:title", content: "The Off White — Mediterranean Fine Dining" },
      { property: "og:description", content: "Crafted cocktails, signature dishes, and timeless design — book your table at The Off White." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <main className="min-h-screen bg-[var(--cream)]">
      <SmoothScroll />
      <Header />
      <Hero />
      <Story />
      <Dishes />
      <Space />
      <MenuAndReserve />
      <Testimonials />
      <Footer />
    </main>
  );
}
