import { createFileRoute } from "@tanstack/react-router";
import { DemoSite, type DemoConfig } from "@/components/DemoSite";
import hero from "@/assets/demo-vine.jpg";

const config: DemoConfig = {
  brand: "North & Vine",
  tagline: { line1: "Karoo dust,", italic: "decanted", line2: "with care." },
  category: "Boutique Winery",
  location: "Karoo, ZA",
  established: "MMXIV",
  intro: "Six labels. One vineyard. A weekend that lasts the bottle.",
  hero,
  bg: "bg-[#1f1410]",
  text: "text-[#f3e2d2]",
  accent: "#b6442f",
  accentClass: "text-[#b6442f]",
  accentBg: "bg-[#b6442f]",
  story: {
    eyebrow: "The vineyard",
    heading: "Slow soil. |Patient bottles.|",
    body: [
      "North & Vine farms 14 hectares on the edge of the Klein Karoo. Old vines, dry seasons, and hands that know each row by name.",
      "We make six wines a year — three reds, two whites, one experiment. Small allocation, big personality, no marketing department.",
    ],
  },
  offers: [
    { n: "01", title: "The Reds", body: "A Cinsault, a Syrah, and a blend that argues with itself in the glass." },
    { n: "02", title: "The Whites", body: "An aged Chenin and a skin-contact white that ferments friendships." },
    { n: "03", title: "The Experiment", body: "One wine a year that breaks our own rules. Released without warning." },
    { n: "04", title: "Cellar Door", body: "Open Friday to Sunday. Tastings by appointment. Lunch if you're charming." },
  ],
  stats: [
    { value: "14ha", label: "Old-vine vineyard" },
    { value: "VI", label: "Wines per year" },
    { value: "1972", label: "Vines first planted" },
    { value: "0L", label: "Pesticides applied" },
  ],
  testimonial: {
    quote: "An honest wine from an honest farm. I keep a case for the people I want to impress without saying so.",
    name: "Pieter Marais",
    role: "Sommelier, La Colombe",
  },
  cta: { line1: "Visit the cellar.", italic: "Stay for lunch.", href: "mailto:cellar@northandvine.example", label: "Book a tasting" },
};

export const Route = createFileRoute("/demo/north-vine")({
  head: () => ({ meta: [
    { title: "North & Vine — Karoo Winery" },
    { name: "description", content: "Six wines a year from a 14ha vineyard on the edge of the Karoo." },
  ] }),
  component: () => <DemoSite config={config} />,
});
