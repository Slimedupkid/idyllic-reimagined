import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { useMemo, useState } from "react";

import { SmoothScroll } from "@/components/SmoothScroll";
import { Reveal, RevealText } from "@/components/Reveal";
import { Parallax } from "@/components/Parallax";
import { allProjects } from "@/data/projects";

export const Route = createFileRoute("/projects")({
  component: ProjectsPage,
  head: () => ({
    meta: [
      { title: "All Projects — Lynque" },
      {
        name: "description",
        content:
          "The full Lynque archive — branding, web, editorial and automation work for studios, founders and disrupters.",
      },
      { property: "og:title", content: "All Projects — Lynque" },
      {
        property: "og:description",
        content:
          "Selected and unselected work from the Lynque studio. Branding, web, editorial, automation.",
      },
    ],
  }),
});

const filters = ["All", "Branding", "Web", "Editorial", "Campaign", "Automation"] as const;
type Filter = (typeof filters)[number];

function ProjectsPage() {
  const [active, setActive] = useState<Filter>("All");

  const filtered = useMemo(
    () => (active === "All" ? allProjects : allProjects.filter((p) => p.category === active)),
    [active],
  );

  return (
    <>
      <SmoothScroll />
      <main className="relative bg-paper text-ink min-h-screen">
        {/* Top nav */}
        <header className="fixed top-0 left-0 right-0 z-50 mix-blend-difference">
          <div className="flex items-center justify-between px-6 md:px-10 py-6 text-paper">
            <Link to="/" className="font-display text-2xl tracking-tight">
              Lynque<span className="text-coral">.</span>
            </Link>
            <nav className="hidden md:flex items-center gap-10 label">
              <Link to="/" className="underline-anim">Home</Link>
              <Link to="/projects" className="underline-anim">Projects</Link>
              <Link to="/" hash="contact" className="underline-anim">Contact</Link>
            </nav>
            <Link
              to="/"
              hash="contact"
              className="hidden md:inline-flex label items-center gap-2 border border-paper/40 rounded-full px-4 py-2 hover:bg-paper hover:text-ink transition-colors duration-500 ease-cinema"
            >
              Start a project <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </header>

        {/* Hero */}
        <section className="bg-ink text-paper grain pt-40 md:pt-56 pb-24 md:pb-32 px-6 md:px-10">
          <div className="max-w-[1500px] mx-auto">
            <Reveal>
              <p className="label text-paper/50 mb-8">
                (Archive · {String(allProjects.length).padStart(2, "0")} projects)
              </p>
            </Reveal>
            <h1 className="font-display tracking-tight text-paper text-[16vw] md:text-[12vw] leading-[0.88]">
              <RevealText text="Every" />{" "}
              <span className="italic text-coral">
                <RevealText text="project," delay={0.1} />
              </span>
              <br />
              <RevealText text="loud and quiet." delay={0.2} />
            </h1>
            <div className="mt-12 md:mt-16 max-w-2xl">
              <Reveal delay={0.2}>
                <p className="text-lg md:text-xl text-paper/70 leading-relaxed">
                  Twelve years of work for the curious, the disruptive, and the
                  occasionally unreasonable. Filter by craft, or scroll the lot.
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Filter bar */}
        <section className="sticky top-0 z-30 bg-paper/90 backdrop-blur border-y border-ink/10">
          <div className="max-w-[1500px] mx-auto px-6 md:px-10 py-5 flex items-center gap-3 overflow-x-auto">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`label whitespace-nowrap rounded-full px-4 py-2 border transition-colors duration-500 ease-cinema ${
                  active === f
                    ? "bg-ink text-paper border-ink"
                    : "border-ink/20 text-ink/70 hover:bg-ink hover:text-paper hover:border-ink"
                }`}
              >
                {f}
              </button>
            ))}
            <span className="ml-auto label text-ash hidden md:inline">
              {filtered.length} shown
            </span>
          </div>
        </section>

        {/* Grid */}
        <section className="px-6 md:px-10 py-20 md:py-32">
          <div className="max-w-[1500px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10">
              {filtered.map((p, i) => {
                const span =
                  i % 5 === 0
                    ? "md:col-span-7"
                    : i % 5 === 1
                      ? "md:col-span-5"
                      : i % 5 === 2
                        ? "md:col-span-5"
                        : i % 5 === 3
                          ? "md:col-span-7"
                          : "md:col-span-12";
                const ratio =
                  span === "md:col-span-12" ? "aspect-[16/9]" : "aspect-[4/5]";
                return (
                  <Reveal key={p.slug} delay={(i % 4) * 0.06} className={span}>
                    {(() => {
                      const Inner = (
                        <article className="group">
                          <div className={`relative overflow-hidden bg-muted ${ratio}`}>
                            <Parallax offset={40} className="absolute inset-0">
                              <img
                                src={p.img}
                                alt={p.title}
                                loading="lazy"
                                className="w-full h-[120%] object-cover transition-transform duration-[1400ms] ease-cinema group-hover:scale-105"
                              />
                            </Parallax>
                            <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/25 transition-colors duration-700 ease-cinema" />
                            <div className="absolute top-4 left-4 label text-paper drop-shadow">
                              {p.n}
                            </div>
                            <div className="absolute top-4 right-4 label text-paper/90 drop-shadow inline-flex items-center gap-2">
                              {p.category}
                              {(p.href || p.externalHref) && <span>· Live ↗</span>}
                            </div>
                          </div>
                          <div className="mt-6 flex items-end justify-between gap-6">
                            <div>
                              <h2 className="font-display text-3xl md:text-5xl tracking-tight leading-[0.95]">
                                {p.title}
                                <span className="italic text-coral">.</span>
                              </h2>
                              <p className="label text-ash mt-2">
                                {p.client} · {p.tag}
                              </p>
                            </div>
                            <span className="label text-ash shrink-0">{p.year}</span>
                          </div>
                          <p className="mt-4 text-base md:text-lg text-ink/70 leading-relaxed max-w-2xl">
                            {p.description}
                          </p>
                        </article>
                      );
                      return p.href ? (
                        <Link to={p.href} className="block">{Inner}</Link>
                      ) : (
                        Inner
                      );
                    })()}
                  </Reveal>
                );
              })}
            </div>

            {filtered.length === 0 && (
              <p className="text-center font-display italic text-3xl text-ash py-32">
                Nothing here yet — try another lens.
              </p>
            )}
          </div>
        </section>

        {/* CTA strip */}
        <section className="bg-coral text-ink py-24 md:py-32 px-6 md:px-10 grain">
          <div className="max-w-[1500px] mx-auto flex flex-col md:flex-row md:items-end md:justify-between gap-10">
            <h2 className="font-display text-[12vw] md:text-[7vw] leading-[0.92] tracking-tight">
              Yours could be<br />
              <span className="italic">number {String(allProjects.length + 1).padStart(2, "0")}.</span>
            </h2>
            <Link
              to="/"
              hash="contact"
              className="inline-flex items-center gap-3 bg-ink text-paper rounded-full pl-8 pr-3 py-3 font-display text-2xl tracking-tight hover:bg-paper hover:text-ink transition-colors duration-700 ease-cinema self-start md:self-end"
            >
              Start a project
              <span className="bg-coral text-ink rounded-full w-12 h-12 flex items-center justify-center">
                <ArrowUpRight className="w-5 h-5" />
              </span>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
