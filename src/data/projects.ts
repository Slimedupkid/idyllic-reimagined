import work1 from "@/assets/work-1.jpg";
import work2 from "@/assets/work-2.jpg";
import work3 from "@/assets/work-3.jpg";
import work4 from "@/assets/work-4.jpg";
import hero1 from "@/assets/hero-1.jpg";

export type Project = {
  slug: string;
  n: string;
  title: string;
  client: string;
  tag: string;
  category: "Branding" | "Web" | "Editorial" | "Automation" | "Campaign";
  year: string;
  img: string;
  description: string;
};

export const allProjects: Project[] = [
  {
    slug: "helios-solar",
    n: "01",
    title: "Helios",
    client: "Helios Industrial Solar",
    tag: "Identity · Web · Motion",
    category: "Branding",
    year: "2026",
    img: work1,
    description:
      "A cinematic identity for an industrial solar firm — heavy typography, a sun-bleached palette, and a site that scrolls like a documentary.",
  },
  {
    slug: "kweli-fintech",
    n: "02",
    title: "Kweli",
    client: "Kweli Capital",
    tag: "Brand · Product UI",
    category: "Web",
    year: "2026",
    img: work2,
    description:
      "Rebranded a Pan-African fintech from corporate-blue boredom into a confident editorial system rooted in trust and motion.",
  },
  {
    slug: "atelier-nox",
    n: "03",
    title: "Atelier Nox",
    client: "Nox Luxury Merchandise",
    tag: "Packaging · Art Direction",
    category: "Branding",
    year: "2025",
    img: work3,
    description:
      "Packaging and art direction for a luxury merch label — black foil, soft cream, and a campaign shot like a perfume ad.",
  },
  {
    slug: "rumour-magazine",
    n: "04",
    title: "Rumour",
    client: "Rumour Quarterly",
    tag: "Editorial · Print",
    category: "Editorial",
    year: "2025",
    img: work4,
    description:
      "An independent culture quarterly redesigned end-to-end. Custom serif, asymmetric grids, paper that smells expensive.",
  },
  {
    slug: "marula-grove",
    n: "05",
    title: "Marula Grove",
    client: "Marula Grove Hospitality",
    tag: "Identity · Web",
    category: "Web",
    year: "2025",
    img: hero1,
    description:
      "A Joburg restaurant group with three locations and one mood. We built the brand world and the booking engine that runs it.",
  },
  {
    slug: "ferro-architects",
    n: "06",
    title: "Ferro",
    client: "Ferro Architects",
    tag: "Identity · Editorial",
    category: "Branding",
    year: "2025",
    img: work2,
    description:
      "A monograph-style identity for an architecture practice obsessed with concrete, light, and the spaces in between.",
  },
  {
    slug: "north-vine",
    n: "07",
    title: "North & Vine",
    client: "North & Vine Wines",
    tag: "Packaging · Campaign",
    category: "Campaign",
    year: "2024",
    img: work1,
    description:
      "Six labels, one universe. A packaging system inspired by Karoo dust, midcentury posters, and slow Sunday lunches.",
  },
  {
    slug: "loop-automation",
    n: "08",
    title: "Loop",
    client: "Loop Lead Engine",
    tag: "Automation · Web",
    category: "Automation",
    year: "2024",
    img: work3,
    description:
      "A custom lead-gen system stitched into a marketing site. Forms, CRM, follow-ups — automated end-to-end.",
  },
  {
    slug: "sable-studio",
    n: "09",
    title: "Sable",
    client: "Sable Photography",
    tag: "Portfolio · Web",
    category: "Web",
    year: "2024",
    img: work4,
    description:
      "A pinned, scroll-driven portfolio for a fashion photographer. Quiet UI, loud images.",
  },
  {
    slug: "mont-blanc-review",
    n: "10",
    title: "Mont Blanc Review",
    client: "Mont Blanc Review",
    tag: "Editorial · Web",
    category: "Editorial",
    year: "2024",
    img: hero1,
    description:
      "A long-form review platform built around typography, sequencing, and the quiet pleasure of a well-set paragraph.",
  },
  {
    slug: "harbour-collective",
    n: "11",
    title: "Harbour",
    client: "Harbour Creative Collective",
    tag: "Identity",
    category: "Branding",
    year: "2023",
    img: work2,
    description:
      "An umbrella identity for a collective of seven independent makers — flexible enough to bend, structured enough to hold.",
  },
  {
    slug: "ember-rituals",
    n: "12",
    title: "Ember Rituals",
    client: "Ember Rituals",
    tag: "Brand · Packaging · Web",
    category: "Branding",
    year: "2023",
    img: work3,
    description:
      "A slow-burn DTC brand selling candles, oils and rituals. Built the world, the labels, and the storefront.",
  },
];
