import { createFileRoute } from "@tanstack/react-router";
import { DemoSite, type DemoConfig } from "@/components/DemoSite";
import hero from "@/assets/demo-ember.jpg";

const config: DemoConfig = {
  brand: "Ember Rituals",
  tagline: { line1: "Burn slow.", italic: "On purpose.", line2: "" },
  category: "Slow-Burn DTC",
  location: "Online · Joburg HQ",
  established: "MMXXI",
  intro: "Candles, oils, and rituals for the part of the day nobody schedules.",
  hero,
  bg: "bg-[#1c120a]",
  text: "text-[#f1ddc1]",
  accent: "#e3922d",
  accentClass: "text-[#e3922d]",
  accentBg: "bg-[#e3922d]",
  story: {
    eyebrow: "The brand",
    heading: "Small pours. |Long evenings.|",
    body: [
      "Ember is a tiny direct-to-door brand making candles and ritual oils in batches of forty. Coconut wax, cotton wicks, scents that lean smoky.",
      "Every order ships with a handwritten card and a one-page ritual — a small instruction for how to use the thing. Because the moment matters more than the object.",
    ],
  },
  offers: [
    { n: "01", title: "Candles", body: "12oz amber glass, 60-hour burn. Four scent stories, rotated each season." },
    { n: "02", title: "Ritual Oils", body: "Cold-pressed botanicals in 30ml bottles. For bath, hands, or open palm." },
    { n: "03", title: "The Card", body: "Every order ships with a one-page ritual. Read it, do it, recycle it, repeat." },
    { n: "04", title: "Refills", body: "Send back the glass, get the next one half-price. Less landfill, longer relationship." },
  ],
  stats: [
    { value: "40", label: "Per batch, by hand" },
    { value: "60h", label: "Burn time per candle" },
    { value: "4.9★", label: "From 1,200+ reviews" },
    { value: "0", label: "Synthetic fragrance ever" },
  ],
  testimonial: {
    quote: "The card is the product. I never realised I needed permission to slow down. Ember gave it to me anyway.",
    name: "Naledi Mbeki",
    role: "Customer · Cape Town",
  },
  cta: { line1: "Light something.", italic: "Tonight.", href: "mailto:hi@emberrituals.example", label: "Shop the drop" },
};

export const Route = createFileRoute("/demo/ember-rituals")({
  head: () => ({ meta: [
    { title: "Ember Rituals — Slow-Burn Candles & Oils" },
    { name: "description", content: "Candles, oils, and rituals for the part of the day nobody schedules." },
  ] }),
  component: () => <DemoSite config={config} />,
});
