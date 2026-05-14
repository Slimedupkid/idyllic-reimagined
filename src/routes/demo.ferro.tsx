import { createFileRoute } from "@tanstack/react-router";
import { DemoSite, type DemoConfig } from "@/components/DemoSite";
import hero from "@/assets/demo-ferro.jpg";

const config: DemoConfig = {
  brand: "Ferro",
  tagline: { line1: "Concrete,", italic: "considered.", line2: "" },
  category: "Architecture Practice",
  location: "Johannesburg, ZA",
  established: "MMVIII",
  intro: "An architecture practice obsessed with concrete, light, and the spaces in between.",
  hero,
  bg: "bg-[#ededea]",
  text: "text-[#1a1a1a]",
  accent: "#3a3a3a",
  accentClass: "text-[#3a3a3a]",
  accentBg: "bg-[#1a1a1a]",
  story: {
    eyebrow: "Practice",
    heading: "We design |the silence| between rooms.",
    body: [
      "Ferro is a 12-person architecture studio working on residential, cultural, and small-civic projects across South Africa.",
      "We start with the site, the light, and the way you actually move through a day. Form follows that. Materials are honest, details are slow, and nothing is decorative for its own sake.",
    ],
  },
  offers: [
    { n: "01", title: "Residential", body: "Single houses, additions, careful renovations. Long briefs, longer relationships." },
    { n: "02", title: "Cultural", body: "Galleries, libraries, small museums. Buildings designed to host what they don't contain." },
    { n: "03", title: "Civic", body: "Schools, clinics, community spaces. Modest budgets, immodest ambition." },
    { n: "04", title: "Furniture", body: "Made-to-order tables, benches, and stools. Concrete, oak, and patience." },
  ],
  stats: [
    { value: "47", label: "Built projects" },
    { value: "12", label: "People at the studio" },
    { value: "9", label: "Awards, mostly ignored" },
    { value: "2008", label: "Practice founded" },
  ],
  testimonial: {
    quote: "They asked questions for six months before they drew a line. I have never lived in a more honest house.",
    name: "Dr. Anika Steyn",
    role: "Client, Linksfield House",
  },
  cta: { line1: "Send a brief.", italic: "Or a question.", href: "mailto:studio@ferro.example", label: "Start a project" },
};

export const Route = createFileRoute("/demo/ferro")({
  head: () => ({ meta: [
    { title: "Ferro — Architecture Practice" },
    { name: "description", content: "An architecture practice obsessed with concrete, light, and the spaces in between." },
  ] }),
  component: () => <DemoSite config={config} />,
});
