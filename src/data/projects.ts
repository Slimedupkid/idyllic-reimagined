import work3 from "@/assets/work-3.jpg";
import work4 from "@/assets/work-4.jpg";
import hero1 from "@/assets/hero-1.jpg";
import demoHelios from "@/assets/demo-helios.jpg";
import demoMarula from "@/assets/demo-marula.jpg";
import demoNox from "@/assets/demo-nox.jpg";
import demoVine from "@/assets/demo-vine.jpg";
import demoEmber from "@/assets/demo-ember.jpg";
import demoFerro from "@/assets/demo-ferro.jpg";
import workSabolt from "@/assets/work-sabolt.png";
import workMulticlean from "@/assets/work-multiclean.png";
import workMagma from "@/assets/work-magma.png";
import workAmw from "@/assets/work-amw.png";
import workDasgrune from "@/assets/work-dasgrune.png";
import workRoddy from "@/assets/work-roddy.png";
import workZesty from "@/assets/work-zesty.png";
import workOpenday from "@/assets/work-openday.png";
import workVaayu from "@/assets/work-vaayu.png";

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
  /** Path to a live demo route inside the app, if any. */
  href?: string;
  /** External URL to a live, shipped client project. */
  externalHref?: string;
  /** True when `img` is a real website screenshot — used to switch image
   *  framing (crop from the top of the page instead of the middle). */
  isLiveSite?: boolean;
};

export const allProjects: Project[] = [
  {
    slug: "sa-bolt-tools",
    n: "00",
    title: "SA Bolt & Tools",
    client: "SA Bolt & Tools",
    tag: "Identity · Web · Live",
    category: "Web",
    year: "2025",
    img: workSabolt,
    description:
      "A clean, trade-ready marketing site for a South African industrial fasteners and tools supplier — built to convert site managers and procurement teams without the corporate stiffness.",
    externalHref: "https://saboltandtools.netlify.app/",
    isLiveSite: true,
  },
  {
    slug: "multi-clean-services",
    n: "00",
    title: "Multi-Clean Services",
    client: "Multi-Clean Services",
    tag: "Brand · Web · Live",
    category: "Web",
    year: "2025",
    img: workMulticlean,
    description:
      "A warm, modern residential and commercial cleaning site — friendly green palette, soft cards, and a quote-driven layout that turns curious visitors into booked jobs.",
    externalHref: "https://quiet-basbousa-c4770a.netlify.app/",
    isLiveSite: true,
  },
  {
    slug: "magma",
    n: "00",
    title: "Magma",
    client: "Magma · Real Estate Web3",
    tag: "Web · Product · Live",
    category: "Web",
    year: "2025",
    img: workMagma,
    description:
      "An electric-blue marketing site for a Web3 real-estate platform — bold display type, a cinematic 3D hero, and a layout that turns a niche technical product into a story you actually want to read.",
    externalHref: "https://friendly-mochi-7f467e.netlify.app/",
    isLiveSite: true,
  },
  {
    slug: "amw-soon",
    n: "00",
    title: "AMW — Soon",
    client: "AMW Editorial",
    tag: "Editorial · Web · Live",
    category: "Editorial",
    year: "2025",
    img: workAmw,
    description:
      "A split-screen editorial site for a photography collective. Hand-set headlines, a calm warm palette, and an unmistakably print-inspired rhythm.",
    externalHref: "https://eloquent-daifuku-2137df.netlify.app/",
    isLiveSite: true,
  },
  {
    slug: "das-grune",
    n: "00",
    title: "Das Grüne",
    client: "Das Grüne Agency",
    tag: "Brand · Web · Live",
    category: "Web",
    year: "2025",
    img: workDasgrune,
    description:
      "An unapologetically loud agency site — neon green, brutalist type, scrolling marquee, and an embedded showreel. Built to feel less like a website and more like a statement.",
    externalHref: "https://effortless-wisp-e86ba5.netlify.app/",
    isLiveSite: true,
  },
  {
    slug: "london-alley",
    n: "00",
    title: "London Alley",
    client: "London Alley Productions",
    tag: "Web · Carousel · Live",
    category: "Web",
    year: "2025",
    img: workRoddy,
    description:
      "A full-screen, edge-to-edge carousel site for a music video production house — every project gets one immersive frame, no compromises on imagery.",
    externalHref: "https://shimmering-otter-d9bf78.netlify.app/",
    isLiveSite: true,
  },
  {
    slug: "moodboard-studio",
    n: "00",
    title: "Moodboard",
    client: "Moodboard Studio",
    tag: "Art Direction · Web · Live",
    category: "Editorial",
    year: "2024",
    img: workZesty,
    description:
      "A free-floating, collage-style landing page — scattered objects, soft photography, and a feed that behaves more like a Pinterest board than a website.",
    externalHref: "https://zesty-torrone-20fa55.netlify.app/",
    isLiveSite: true,
  },
  {
    slug: "open-day",
    n: "00",
    title: "Open Day",
    client: "Open Day · Berika Spacejam 92",
    tag: "Event · Web · Live",
    category: "Editorial",
    year: "2024",
    img: workOpenday,
    description:
      "An editorial event poster, on the web. Heavy serif, a Renaissance portrait, kinetic marquee — built for a one-off open studio day with collector-edition energy.",
    externalHref: "https://dazzling-cuchufli-0dd4f6.netlify.app/",
    isLiveSite: true,
  },
  {
    slug: "vaayu",
    n: "00",
    title: "Vaayu",
    client: "Vaayu",
    tag: "Brand · Web · Live",
    category: "Branding",
    year: "2024",
    img: workVaayu,
    description:
      "A quiet, olive-green storefront for a slow-living wellness brand — minimal navigation, soft circular product cards, and copy that breathes.",
    externalHref: "https://lively-begonia-77a026.netlify.app/",
    isLiveSite: true,
  },
  {
    slug: "helios-solar",
    n: "01",
    title: "Helios",
    client: "Helios Industrial Solar",
    tag: "Identity · Web · Motion",
    category: "Branding",
    year: "2026",
    img: demoHelios,
    description:
      "A cinematic identity for an industrial solar firm — heavy typography, a sun-bleached palette, and a site that scrolls like a documentary.",
    href: "/demo/helios",
  },
  {
    slug: "atelier-nox",
    n: "02",
    title: "Atelier Nox",
    client: "Nox Luxury Merchandise",
    tag: "Packaging · Art Direction · Web",
    category: "Branding",
    year: "2025",
    img: demoNox,
    description:
      "Packaging and art direction for a luxury merch label — black foil, soft cream, and a campaign shot like a perfume ad.",
    href: "/demo/atelier-nox",
  },
  {
    slug: "marula-grove",
    n: "03",
    title: "Marula Grove",
    client: "Marula Grove Hospitality",
    tag: "Identity · Web",
    category: "Web",
    year: "2025",
    img: demoMarula,
    description:
      "A Joburg restaurant group with three locations and one mood. We built the brand world and the booking engine that runs it.",
    href: "/demo/marula-grove",
  },
  {
    slug: "ferro-architects",
    n: "04",
    title: "Ferro",
    client: "Ferro Architects",
    tag: "Identity · Editorial · Web",
    category: "Branding",
    year: "2025",
    img: demoFerro,
    description:
      "A monograph-style identity for an architecture practice obsessed with concrete, light, and the spaces in between.",
    href: "/demo/ferro",
  },
  {
    slug: "north-vine",
    n: "05",
    title: "North & Vine",
    client: "North & Vine Wines",
    tag: "Packaging · Campaign · Web",
    category: "Campaign",
    year: "2024",
    img: demoVine,
    description:
      "Six labels, one universe. A packaging system inspired by Karoo dust, midcentury posters, and slow Sunday lunches.",
    href: "/demo/north-vine",
  },
  {
    slug: "ember-rituals",
    n: "06",
    title: "Ember Rituals",
    client: "Ember Rituals",
    tag: "Brand · Packaging · Web",
    category: "Branding",
    year: "2024",
    img: demoEmber,
    description:
      "A slow-burn DTC brand selling candles, oils and rituals. Built the world, the labels, and the storefront.",
    href: "/demo/ember-rituals",
  },
  {
    slug: "rumour-magazine",
    n: "08",
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
    slug: "loop-automation",
    n: "09",
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
    slug: "mont-blanc-review",
    n: "11",
    title: "Mont Blanc Review",
    client: "Mont Blanc Review",
    tag: "Editorial · Web",
    category: "Editorial",
    year: "2024",
    img: hero1,
    description:
      "A long-form review platform built around typography, sequencing, and the quiet pleasure of a well-set paragraph.",
  },
];

// Re-number the `n` field sequentially so the archive reads cleanly.
allProjects.forEach((p, i) => {
  p.n = String(i + 1).padStart(2, "0");
});
