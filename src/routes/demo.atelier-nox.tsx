import { createFileRoute } from "@tanstack/react-router";
import { DemoSite, type DemoConfig } from "@/components/DemoSite";
import hero from "@/assets/demo-nox.jpg";

const config: DemoConfig = {
  brand: "Atelier Nox",
  tagline: { line1: "Worn", italic: "after dark.", line2: "Always." },
  category: "Luxury Merchandise",
  location: "Paris · Joburg",
  established: "MMXXII",
  intro: "Luxury merch for people who already have everything.",
  hero,
  bg: "bg-[#0a0a0a]",
  text: "text-[#ede4d3]",
  accent: "#c9a14a",
  accentClass: "text-[#c9a14a]",
  accentBg: "bg-[#c9a14a]",
  story: {
    eyebrow: "The label",
    heading: "Heavy fabric. |Light hand.|",
    body: [
      "Atelier Nox makes a small drop of black-on-black wardrobe staples each season — tailored to be passed down, not refreshed.",
      "Every piece is cut and finished in our Paris atelier, then signed by the maker. No logos. No noise. Just weight you can feel through the hanger.",
    ],
  },
  offers: [
    { n: "01", title: "Outerwear", body: "Two coats per season. Wool, cashmere, or canvas. Bought once, worn for ten years." },
    { n: "02", title: "Tailoring", body: "Made-to-measure suits and jackets. Three fittings, one perfect line." },
    { n: "03", title: "Knitwear", body: "Scottish cashmere, Italian merino. Heavy gauge, soft heart." },
    { n: "04", title: "Objects", body: "Leather goods, candles, the occasional book. Slowly." },
  ],
  stats: [
    { value: "II", label: "Drops per year" },
    { value: "48", label: "Pieces per drop" },
    { value: "1976", label: "Atelier founded" },
    { value: "∞", label: "Lifetime repair" },
  ],
  testimonial: {
    quote: "I bought a coat in 2022. It still feels new. I will buy nothing else for a long time.",
    name: "Mathilde Aron",
    role: "Vogue Paris contributor",
  },
  cta: { line1: "Join the list.", italic: "Quietly.", href: "mailto:atelier@nox.example", label: "Request access" },
};

export const Route = createFileRoute("/demo/atelier-nox")({
  head: () => ({ meta: [
    { title: "Atelier Nox — Luxury Merchandise" },
    { name: "description", content: "A small drop of black-on-black staples, cut and finished in Paris." },
  ] }),
  component: () => <DemoSite config={config} />,
});
