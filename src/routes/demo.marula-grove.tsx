import { createFileRoute } from "@tanstack/react-router";
import { DemoSite, type DemoConfig } from "@/components/DemoSite";
import hero from "@/assets/demo-marula.jpg";

const config: DemoConfig = {
  brand: "Marula Grove",
  tagline: { line1: "Slow food,", italic: "loud", line2: "memories." },
  category: "Restaurant Group",
  location: "Johannesburg, ZA",
  established: "MMXVIII",
  intro: "Three restaurants. One long table. A city that finally sat down.",
  hero,
  bg: "bg-[#1a1208]",
  text: "text-[#f0e6cf]",
  accent: "#d4a93a",
  accentClass: "text-[#d4a93a]",
  accentBg: "bg-[#d4a93a]",
  story: {
    eyebrow: "About",
    heading: "Three rooms. |One pulse.|",
    body: [
      "Marula Grove is a small group of restaurants in Parkhurst, Maboneng and Linden. Different rooms, different menus, one obsession with the way a Tuesday night should feel.",
      "We cook with what's growing within 200km, pour wines we'd serve our mothers, and turn the music down at 9 so people actually talk to each other.",
    ],
  },
  offers: [
    { n: "01", title: "The Grove · Parkhurst", body: "Our first room. Wood-fired everything, 28 seats, no menu before Tuesday." },
    { n: "02", title: "Marula East · Maboneng", body: "Loud, late, sharing plates and natural wine. Open until the last conversation." },
    { n: "03", title: "Linden Larder", body: "Daytime sister. Coffee, slow lunches, things to take home for dinner." },
    { n: "04", title: "Private dining", body: "Long tables for 8 to 40. We cook, you talk, nobody touches a phone." },
  ],
  stats: [
    { value: "3", label: "Rooms across the city" },
    { value: "200km", label: "Furthest ingredient" },
    { value: "82", label: "Wines on the list" },
    { value: "★★★★", label: "Eat Out, every year" },
  ],
  testimonial: {
    quote: "It's the only restaurant in Joburg where I forget I'm in Joburg. The food is the half of it.",
    name: "Lerato Khumalo",
    role: "Eat Out Magazine",
  },
  cta: { line1: "Find a table.", italic: "We saved one.", href: "mailto:reservations@marulagrove.example", label: "Book a seat" },
};

export const Route = createFileRoute("/demo/marula-grove")({
  head: () => ({ meta: [
    { title: "Marula Grove — Johannesburg" },
    { name: "description", content: "Three restaurants. One long table. A city that finally sat down." },
  ] }),
  component: () => <DemoSite config={config} />,
});
