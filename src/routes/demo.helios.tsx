import { createFileRoute } from "@tanstack/react-router";
import { DemoSite, type DemoConfig } from "@/components/DemoSite";
import hero from "@/assets/demo-helios.jpg";

const config: DemoConfig = {
  brand: "Helios",
  tagline: { line1: "Power that", italic: "doesn't ask", line2: "for credit." },
  category: "Industrial Solar",
  location: "Cape Town, ZA",
  established: "MMXIX",
  intro: "Solar systems engineered for the people who run the country at 3am.",
  hero,
  bg: "bg-[#1a1410]",
  text: "text-[#f5ead3]",
  accent: "#ff7a3d",
  accentClass: "text-[#ff7a3d]",
  accentBg: "bg-[#ff7a3d]",
  story: {
    eyebrow: "Why Helios",
    heading: "Built for the |grid that quit| on you.",
    body: [
      "Helios designs and installs commercial-scale solar for warehouses, farms, and factories across Southern Africa. We think in megawatts, not panels.",
      "Every project is engineered around your load profile, your roof, and your worst-case scenario. The shiny stuff is the easy part — keeping you running through stage 8 is the work.",
    ],
  },
  offers: [
    { n: "01", title: "Site Audit", body: "Drone survey, load profiling, ROI modelling. We tell you the truth — even when it isn't a sale." },
    { n: "02", title: "Engineering", body: "PV array design, inverter sizing, grid integration. Drawings your structural engineer will actually like." },
    { n: "03", title: "Install", body: "Turnkey installation by our own crews. No subcontracting the bit that matters." },
    { n: "04", title: "Monitor", body: "24/7 performance monitoring, fault alerts, quarterly reports. Sunshine, audited." },
  ],
  stats: [
    { value: "47MW", label: "Installed across SADC" },
    { value: "120+", label: "Industrial sites live" },
    { value: "R 2.1B", label: "Lifetime client savings" },
    { value: "0", label: "Diesel days since 2023" },
  ],
  testimonial: {
    quote: "They ran the numbers honestly, undersold the timeline, and overshot the output. We've added two more sites since.",
    name: "Kagiso van der Westhuizen",
    role: "Operations Director, Karoo Cold Storage",
  },
  cta: { line1: "Cut your bill.", italic: "Quietly.", href: "mailto:hello@helios.example", label: "Request a site audit" },
};

export const Route = createFileRoute("/demo/helios")({
  head: () => ({ meta: [
    { title: "Helios — Industrial Solar" },
    { name: "description", content: "Engineered solar for warehouses, farms and factories across Southern Africa." },
    { property: "og:title", content: "Helios — Industrial Solar" },
  ] }),
  component: () => <DemoSite config={config} />,
});
