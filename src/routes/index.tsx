import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowUpRight, Plus, Check } from "lucide-react";
import { useRef, useState } from "react";
import { z } from "zod";

import { SmoothScroll } from "@/components/SmoothScroll";
import { Reveal, RevealText } from "@/components/Reveal";
import { Magnetic } from "@/components/Magnetic";
import { Parallax } from "@/components/Parallax";
import { allProjects } from "@/data/projects";

import hero1 from "@/assets/hero-1.jpg";
import work1 from "@/assets/work-1.jpg";
import work2 from "@/assets/work-2.jpg";
import work3 from "@/assets/work-3.jpg";
import work4 from "@/assets/work-4.jpg";
import ownerJosh from "@/assets/owner-josh.jpg";

export const Route = createFileRoute("/")({
  component: Page,
});

function Page() {
  return (
    <>
      <SmoothScroll />
      <main className="relative bg-paper text-ink">
        <Nav />
        <Hero />
        <Marquee />
        <Manifesto />
        <About />
        <Owner />
        <Work />
        <Process />
        <HorizontalShowcase />
        <Services />
        <Testimonials />
        <CTA />
        <Footer />
      </main>
    </>
  );
}

/* ───────────────────────────── NAV ───────────────────────────── */

function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 mix-blend-difference">
      <div className="flex items-center justify-between px-6 md:px-10 py-6 text-paper">
        <Link to="/" className="font-display text-2xl tracking-tight">
          Lynque<span className="text-coral">.</span>
        </Link>
        <nav className="hidden md:flex items-center gap-10 label">
          <a href="#work" className="underline-anim">Work</a>
          <a href="#about" className="underline-anim">About</a>
          <a href="#process" className="underline-anim">Process</a>
          <a href="#services" className="underline-anim">Services</a>
          <Link to="/projects" className="underline-anim">Projects</Link>
          <a href="#contact" className="underline-anim">Contact</a>
        </nav>
        <Magnetic className="hidden md:block">
          <a
            href="#contact"
            className="label inline-flex items-center gap-2 border border-paper/40 rounded-full px-4 py-2 hover:bg-paper hover:text-ink transition-colors duration-500 ease-cinema"
          >
            Start a project <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </Magnetic>
      </div>
    </header>
  );
}

/* ───────────────────────────── HERO ───────────────────────────── */

function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative h-[110svh] bg-ink text-paper overflow-hidden grain"
    >
      {/* Top label row */}
      <motion.div
        className="absolute top-28 left-6 right-6 md:left-10 md:right-10 flex items-start justify-between label text-paper/60 z-10"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
      >
        <span>Est. MMXVI · Johannesburg</span>
        <span className="hidden md:inline">Multi-disciplinary studio</span>
        <span className="text-right">N° 04 / Lynque</span>
      </motion.div>

      {/* Headline */}
      <motion.div
        style={{ y, opacity }}
        className="relative z-[2] h-full flex flex-col justify-end px-6 md:px-10 pb-24 md:pb-32"
      >
        <h1 className="font-display tracking-tight text-paper">
          <span className="block text-[18vw] md:text-[15vw] leading-[0.85]">
            <RevealText text="A studio" />
          </span>
          <span className="block text-[18vw] md:text-[15vw] leading-[0.85] italic text-coral">
            <RevealText text="that links" delay={0.2} />
          </span>
          <span className="block text-[18vw] md:text-[15vw] leading-[0.85]">
            <RevealText text="story & system." delay={0.4} />
          </span>
        </h1>
      </motion.div>

      {/* Floating image */}
      <motion.div
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="absolute right-6 md:right-16 top-[18%] w-[40vw] max-w-[360px] aspect-[4/5] overflow-hidden hidden sm:block"
      >
        <motion.img
          style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "20%"]) }}
          src={hero1}
          alt="Editorial portrait"
          width={1280}
          height={1600}
          className="w-full h-full object-cover scale-110"
        />
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 label text-paper/60 flex flex-col items-center gap-3 z-10"
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
      >
        <span>Scroll</span>
        <span className="block w-px h-10 bg-paper/40" />
      </motion.div>
    </section>
  );
}

/* ─────────────────────────── MARQUEE ─────────────────────────── */

function Marquee() {
  const items = [
    "Brand Strategy",
    "Visual Identity",
    "Immersive Web",
    "Editorial Design",
    "Growth Automation",
    "Art Direction",
  ];
  const row = [...items, ...items];
  return (
    <section className="bg-coral text-ink py-6 md:py-8 overflow-hidden border-y border-ink/10">
      <div className="marquee gap-12 whitespace-nowrap">
        {row.map((t, i) => (
          <span
            key={i}
            className="font-display italic text-4xl md:text-7xl tracking-tight"
          >
            {t} <span className="not-italic mx-6 opacity-50">✦</span>
          </span>
        ))}
      </div>
    </section>
  );
}

/* ───────────────────────── MANIFESTO ───────────────────────── */

function Manifesto() {
  return (
    <section className="bg-paper text-ink py-32 md:py-56 px-6 md:px-10">
      <div className="grid grid-cols-12 gap-6 md:gap-10 max-w-[1500px] mx-auto">
        <div className="col-span-12 md:col-span-3">
          <Reveal>
            <p className="label text-ash">(Manifesto · 01)</p>
          </Reveal>
        </div>
        <div className="col-span-12 md:col-span-9">
          <h2 className="font-display text-[10vw] md:text-[7vw] leading-[0.95] tracking-tight">
            <RevealText text="We don't make" />
            <br />
            <span className="italic text-coral">
              <RevealText text="logos. We make" delay={0.1} />
            </span>
            <br />
            <RevealText text="long love affairs." delay={0.2} />
          </h2>

          <div className="mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 max-w-4xl">
            <Reveal delay={0.1}>
              <p className="text-lg md:text-xl leading-relaxed text-ink/80">
                Strategy, identity, and editorial direction for businesses ready
                to stop hiding behind sameness. We build brands with bones —
                structure, voice, a pulse — designed to outlast a trend cycle.
              </p>
            </Reveal>
            <Reveal delay={0.25}>
              <p className="text-lg md:text-xl leading-relaxed text-ink/80">
                Every move is deliberate. Every layout earned. The bits that look
                effortless took the longest. That&apos;s the part nobody sees,
                and the part that does all the work.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────── ABOUT ──────────────────────────── */

function About() {
  return (
    <section id="about" className="bg-ink text-paper py-32 md:py-56 px-6 md:px-10 grain border-t border-paper/10">
      <div className="grid grid-cols-12 gap-6 md:gap-10 max-w-[1500px] mx-auto">
        <div className="col-span-12 md:col-span-3">
          <Reveal>
            <p className="label text-paper/50">(About Lynque · 02)</p>
          </Reveal>
        </div>
        <div className="col-span-12 md:col-span-9">
          <h2 className="font-display text-[10vw] md:text-[6.5vw] leading-[0.95] tracking-tight">
            <RevealText text="people remember" />
            <br />
            <span className="italic text-coral">
              <RevealText text="how something feels" delay={0.1} />
            </span>
            <br />
            <RevealText text="before what it says." delay={0.2} />
          </h2>

          <div className="mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 max-w-5xl">
            <Reveal delay={0.1}>
              <p className="text-lg md:text-xl leading-relaxed text-paper/80">
                Lynque is a web design and digital branding studio built around
                one idea: people remember how something feels before they
                remember what it says. We create websites and digital
                experiences for brands that want clarity, personality, and
                presence — not recycled templates, not corporate noise.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-lg md:text-xl leading-relaxed text-paper/80">
                Every project starts with the brand itself — the story, the
                tone, the reason it exists — then translates that into design
                that feels honest, modern and considered. Built lean, intent
                first, with restraint where it counts.
              </p>
            </Reveal>
          </div>

          <div className="mt-16 md:mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-paper/15 pt-12">
            {[
              { k: "Joburg", v: "Studio" },
              { k: "Web · Brand", v: "Practice" },
              { k: "Lean team", v: "Structure" },
              { k: "Story-first", v: "Method" },
            ].map((b) => (
              <Reveal key={b.k}>
                <div>
                  <p className="font-display text-2xl md:text-3xl tracking-tight">
                    {b.k}
                  </p>
                  <p className="label text-paper/50 mt-2">{b.v}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────── OWNER ──────────────────────── */

function Owner() {
  return (
    <section className="bg-paper text-ink py-32 md:py-48 px-6 md:px-10">
      <div className="grid grid-cols-12 gap-6 md:gap-10 max-w-[1500px] mx-auto items-center">
        <div className="col-span-12 md:col-span-5">
          <Reveal>
            <div className="relative aspect-[4/5] overflow-hidden bg-muted">
              <Parallax offset={50} className="absolute inset-0">
                <img
                  src={ownerJosh}
                  alt="Founder of Lynque"
                  className="w-full h-[120%] object-cover"
                  loading="lazy"
                />
              </Parallax>
              <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between text-paper label drop-shadow">
                <span>Founder</span>
                <span>Johannesburg</span>
              </div>
            </div>
          </Reveal>
        </div>
        <div className="col-span-12 md:col-span-7 md:pl-10">
          <Reveal>
            <p className="label text-ash mb-6">(Behind the studio · 03)</p>
          </Reveal>
          <h2 className="font-display text-[12vw] md:text-[6vw] leading-[0.95] tracking-tight">
            Built by someone who
            <br />
            <span className="italic text-coral">
              actually cares.
            </span>
          </h2>
          <div className="mt-12 space-y-6 max-w-2xl text-lg md:text-xl leading-relaxed text-ink/80">
            <Reveal delay={0.1}>
              <p>
                Lynque is led by a designer with a background spanning brand
                strategy, web design, and visual communication. Every project
                is treated like a story — with its own tone, emotion, and
                identity.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <p>
                That mindset shows up in the work: clean design, meaningful
                detail, and websites that feel personal instead of
                manufactured. No account managers, no template factories — just
                a small team obsessed with getting it right.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────── WORK ──────────────────────────── */

const featuredSpans = [
  "md:col-span-7 md:row-span-2",
  "md:col-span-5",
  "md:col-span-5",
  "md:col-span-12",
];
const featuredRatios = ["aspect-[4/5]", "aspect-[4/5]", "aspect-[4/5]", "aspect-[16/9]"];

function Work() {
  const featured = allProjects.slice(0, 4);
  return (
    <section id="work" className="bg-paper text-ink py-24 md:py-40 px-6 md:px-10">
      <div className="max-w-[1500px] mx-auto">
        <div className="flex items-end justify-between mb-16 md:mb-24">
          <div>
            <Reveal>
              <p className="label text-ash mb-6">(Selected · 02)</p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-display text-[14vw] md:text-[10vw] leading-[0.9] tracking-tight">
                Work, <span className="italic text-coral">lately.</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.2} className="hidden md:block">
            <Link to="/projects" className="label inline-flex items-center gap-2 underline-anim">
              All projects ({String(allProjects.length).padStart(2, "0")}) <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
          {featured.map((p, i) => (
            <Reveal
              key={p.slug}
              delay={i * 0.08}
              className={`group ${featuredSpans[i]}`}
            >
              <ProjectCard project={p} ratio={featuredRatios[i]} index={i + 1} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  ratio,
  index,
}: {
  project: (typeof allProjects)[number];
  ratio: string;
  index: number;
}) {
  const isLive = project.isLiveSite;
  const Inner = (
    <div className="block group">
      <div className={`relative overflow-hidden bg-muted ${ratio}`}>
        <Parallax offset={isLive ? 0 : 40} className="absolute inset-0">
          <img
            src={project.img}
            alt={project.title}
            loading="lazy"
            className={`w-full ${isLive ? "h-full object-cover object-top" : "h-[120%] object-cover"} transition-transform duration-[1400ms] ease-cinema group-hover:scale-105`}
          />
        </Parallax>
        <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/20 transition-colors duration-700 ease-cinema" />
        <div className="absolute top-4 left-4 label text-paper drop-shadow">
          {String(index).padStart(2, "0")}
        </div>
        {(project.href || project.externalHref) && (
          <div className="absolute top-4 right-4 label text-paper drop-shadow inline-flex items-center gap-1">
            Live <ArrowUpRight className="w-3 h-3" />
          </div>
        )}
      </div>
      <div className="mt-5 flex items-end justify-between gap-6">
        <div>
          <h3 className="font-display text-2xl md:text-4xl tracking-tight leading-tight">
            {project.title}
          </h3>
          <p className="label text-ash mt-2">{project.tag}</p>
        </div>
        <span className="label text-ash shrink-0">{project.year}</span>
      </div>
    </div>
  );
  if (project.externalHref) {
    return <a href={project.externalHref} target="_blank" rel="noopener noreferrer">{Inner}</a>;
  }
  return project.href ? <Link to={project.href}>{Inner}</Link> : <a href="#work">{Inner}</a>;
}

/* ─────────────────────────── PROCESS ─────────────────────────── */

const steps = [
  {
    n: "01",
    title: "Curious creatures.",
    body: "We start with questions. Lots of them. The story, the people, the quiet wins, the loud problems. Coffee in hand, defences down — the bit most studios skip is where we plant the flag.",
  },
  {
    n: "02",
    title: "Personality, then pretty.",
    body: "Card games, quizzes, late-night voice notes. We surface the version of your brand that already exists, then translate it into something a stranger can feel in three seconds.",
  },
  {
    n: "03",
    title: "Set the mood.",
    body: "A series of moodboards maps the visual direction — from slightly outside your comfort zone to full ¡Ay caramba! — so we land on a position with conviction, not a compromise.",
  },
  {
    n: "04",
    title: "One concept, all in.",
    body: "No three half-baked options dressed up as choice. We commit to a single direction and build it out — typography, voice, motion, the way it answers the phone.",
  },
  {
    n: "05",
    title: "Refine and package.",
    body: "Brand bible, asset library, the rules of engagement. So your team, your printer, or some future designer doesn't go rogue and butcher the soul.",
  },
];

function Process() {
  return (
    <section id="process" className="bg-ink text-paper py-32 md:py-56 px-6 md:px-10 grain">
      <div className="max-w-[1500px] mx-auto">
        <div className="grid grid-cols-12 gap-6 md:gap-10 mb-20 md:mb-32">
          <div className="col-span-12 md:col-span-3">
            <Reveal>
              <p className="label text-paper/50">(Process · 03)</p>
            </Reveal>
          </div>
          <div className="col-span-12 md:col-span-9">
            <Reveal delay={0.1}>
              <h2 className="font-display text-[12vw] md:text-[8vw] leading-[0.92] tracking-tight">
                Five scenes.
                <br />
                <span className="italic text-coral">No improv.</span>
              </h2>
            </Reveal>
          </div>
        </div>

        <ol className="divide-y divide-paper/15 border-y border-paper/15">
          {steps.map((s, i) => (
            <ProcessRow key={s.n} step={s} index={i} />
          ))}
        </ol>
      </div>
    </section>
  );
}

function ProcessRow({ step, index }: { step: (typeof steps)[number]; index: number }) {
  return (
    <Reveal delay={index * 0.05}>
      <li className="group grid grid-cols-12 gap-4 md:gap-10 py-10 md:py-16 cursor-default">
        <div className="col-span-2 md:col-span-1 label text-paper/50 pt-2">
          {step.n}
        </div>
        <div className="col-span-10 md:col-span-5">
          <h3 className="font-display text-4xl md:text-7xl tracking-tight leading-[0.95] transition-transform duration-700 ease-cinema group-hover:translate-x-2">
            {step.title}
          </h3>
        </div>
        <div className="col-span-12 md:col-span-5 md:col-start-8 text-base md:text-lg leading-relaxed text-paper/70 pt-2">
          {step.body}
        </div>
        <div className="hidden md:flex col-span-1 items-start justify-end pt-3 text-paper/50 group-hover:text-coral transition-colors duration-500">
          <Plus className="w-5 h-5 transition-transform duration-700 ease-cinema group-hover:rotate-90" />
        </div>
      </li>
    </Reveal>
  );
}

/* ──────────────── HORIZONTAL SCROLLING SHOWCASE ──────────────── */

function HorizontalShowcase() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-66%"]);

  const cards = [
    { label: "Maison Verre", meta: "Identity, 2025", img: work1 },
    { label: "Carrenle", meta: "Packaging, 2025", img: work2 },
    { label: "Blasr Mill", meta: "Stationery, 2024", img: work3 },
    { label: "Atelier Rouge", meta: "Campaign, 2024", img: work4 },
    { label: "North & Vine", meta: "Identity, 2024", img: work1 },
    { label: "Aperture", meta: "Editorial, 2023", img: work3 },
  ];

  return (
    <section ref={ref} className="bg-paper relative h-[300vh]">
      <div className="sticky top-0 h-screen flex flex-col overflow-hidden">
        <div className="px-6 md:px-10 pt-24 md:pt-32 pb-10 flex items-end justify-between">
          <div>
            <p className="label text-ash mb-4">(Showcase · 04)</p>
            <h2 className="font-display text-5xl md:text-8xl tracking-tight leading-[0.92]">
              Drag your eyes <span className="italic text-coral">→</span>
            </h2>
          </div>
          <span className="label text-ash hidden md:block">06 / works</span>
        </div>

        <motion.div style={{ x }} className="flex gap-6 md:gap-10 px-6 md:px-10 pb-20 will-change-transform">
          {cards.map((c, i) => (
            <article
              key={i}
              className="shrink-0 w-[80vw] md:w-[42vw] lg:w-[36vw] aspect-[4/5] relative overflow-hidden bg-muted"
            >
              <img
                src={c.img}
                alt={c.label}
                loading="lazy"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 p-6 md:p-8 bg-gradient-to-t from-ink/70 to-transparent text-paper">
                <div className="flex items-end justify-between">
                  <div>
                    <h3 className="font-display text-3xl md:text-4xl tracking-tight leading-none">
                      {c.label}
                    </h3>
                    <p className="label text-paper/70 mt-2">{c.meta}</p>
                  </div>
                  <span className="label">0{i + 1}</span>
                </div>
              </div>
            </article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ─────────────────────────── SERVICES ─────────────────────────── */

const services = [
  {
    n: "S/01",
    title: "Brand Strategy",
    body: "Positioning, messaging architecture, audience mapping. The structural work that decides whether design lands or dies on impact.",
  },
  {
    n: "S/02",
    title: "Visual Identity",
    body: "Logos are the tip. Type systems, colour, imagery, motion, packaging — the whole grammar that makes you recognisable in a glance.",
  },
  {
    n: "S/03",
    title: "Editorial & Print",
    body: "Books, lookbooks, reports treated like magazines. Pace, hierarchy, weight — content that earns its second read.",
  },
  {
    n: "S/04",
    title: "Brand Guidelines",
    body: "A no-nonsense system your team and collaborators can run with. Rules with room to play, not handcuffs.",
  },
];

function Services() {
  return (
    <section id="services" className="bg-cream text-ink py-32 md:py-48 px-6 md:px-10">
      <div className="max-w-[1500px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16 md:mb-24">
          <Reveal>
            <h2 className="font-display text-[14vw] md:text-[10vw] leading-[0.9] tracking-tight">
              Our<span className="italic text-coral">specialty.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.15} className="md:max-w-sm">
            <p className="text-base md:text-lg text-ink/70 leading-relaxed">
              Four disciplines, one studio. We move between them the way a
              cinematographer moves between lenses — choosing the right one for
              the scene.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-ink/15 border border-ink/15">
          {services.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.08}>
              <article className="bg-cream p-8 md:p-12 lg:p-16 h-full flex flex-col gap-6 group cursor-default">
                <div className="flex items-start justify-between">
                  <span className="label text-ink/50">{s.n}</span>
                  <Plus className="w-5 h-5 text-ink/40 transition-transform duration-700 ease-cinema group-hover:rotate-90 group-hover:text-coral" />
                </div>
                <h3 className="font-display text-4xl md:text-6xl tracking-tight leading-[0.95]">
                  {s.title}
                </h3>
                <p className="text-base md:text-lg text-ink/70 leading-relaxed max-w-md">
                  {s.body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── TESTIMONIALS ───────────────────────── */

const quotes = [
  {
    quote:
      "They translated a vision I could barely articulate into something tangible — name, story, identity, site. The team really know their stuff.",
    name: "Tracey Soffe",
    role: "Founder, Trace Consulting",
  },
  {
    quote:
      "Eighty percent of new referrals now come through Instagram — a channel I was reluctant to even start. Idyll understood the market better than I did.",
    name: "Olivia Brailsford",
    role: "Director, Olive Accounting",
  },
  {
    quote:
      "The quality of the work — and the way they go about it — speaks for itself. From brand to website, they let us bring our vision to fruition.",
    name: "Marama Nicholas",
    role: "TVK Water Sports",
  },
];

function Testimonials() {
  return (
    <section className="bg-paper text-ink py-32 md:py-48 px-6 md:px-10">
      <div className="max-w-[1500px] mx-auto">
        <Reveal>
          <p className="label text-ash mb-8">(Kind words · 05)</p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="font-display text-[14vw] md:text-[8vw] leading-[0.92] tracking-tight max-w-5xl">
            Now we&apos;re <span className="italic text-coral">blushing.</span>
          </h2>
        </Reveal>

        <div className="mt-20 md:mt-32 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">
          {quotes.map((q, i) => (
            <Reveal key={q.name} delay={i * 0.1}>
              <figure className="flex flex-col h-full">
                <span className="font-display text-6xl text-coral leading-none mb-4">“</span>
                <blockquote className="font-display text-xl md:text-2xl leading-snug tracking-tight text-ink/90">
                  {q.quote}
                </blockquote>
                <figcaption className="mt-auto pt-10">
                  <div className="h-px bg-ink/20 mb-4" />
                  <p className="font-display text-lg">{q.name}</p>
                  <p className="label text-ash mt-1">{q.role}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────── CTA ──────────────────────────── */

const contactSchema = z.object({
  name: z.string().trim().min(1, "Your name, please.").max(100),
  email: z.string().trim().email("That email looks off.").max(255),
  company: z.string().trim().max(120).optional().or(z.literal("")),
  budget: z.string().trim().max(60).optional().or(z.literal("")),
  message: z.string().trim().min(10, "A little more context?").max(2000),
});

function CTA() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrors({});
    const fd = new FormData(e.currentTarget);
    const data = {
      name: String(fd.get("name") ?? ""),
      email: String(fd.get("email") ?? ""),
      company: String(fd.get("company") ?? ""),
      budget: String(fd.get("budget") ?? ""),
      message: String(fd.get("message") ?? ""),
    };
    const parsed = contactSchema.safeParse(data);
    if (!parsed.success) {
      const errs: Record<string, string> = {};
      for (const issue of parsed.error.issues) {
        errs[issue.path.join(".")] = issue.message;
      }
      setErrors(errs);
      return;
    }
    setStatus("sending");
    // Simulated send — wire to a server fn / mailer when ready.
    setTimeout(() => setStatus("sent"), 800);
    (e.currentTarget as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="bg-coral text-ink py-32 md:py-56 px-6 md:px-10 grain overflow-hidden">
      <div className="max-w-[1500px] mx-auto relative">
        <Reveal>
          <p className="label mb-10">(Let&apos;s talk · 06)</p>
        </Reveal>
        <h2 className="font-display text-[16vw] md:text-[14vw] leading-[0.85] tracking-[-0.04em]">
          <RevealText text="Make" />
          <br />
          <span className="italic">
            <RevealText text="something" delay={0.1} />
          </span>
          <br />
          <RevealText text="quietly loud." delay={0.2} />
        </h2>

        <div className="mt-20 md:mt-28 grid grid-cols-12 gap-8 md:gap-16">
          <Reveal className="col-span-12 md:col-span-4">
            <p className="text-lg md:text-xl leading-relaxed">
              We take on a small handful of projects each quarter. Tell us
              what you&apos;re building — we&apos;ll write back within 24 hours
              with thoughts, questions, or a coffee invitation.
            </p>
            <div className="mt-10 space-y-2 label">
              <p className="text-ink/70">Direct</p>
              <a href="mailto:hello@lynque.studio" className="font-display italic text-2xl block">
                hello@lynque.studio
              </a>
              <p className="text-ink/70 mt-6">Studio</p>
              <p className="font-display text-xl">Johannesburg, ZA</p>
            </div>
          </Reveal>

          <Reveal delay={0.15} className="col-span-12 md:col-span-8">
            {status === "sent" ? (
              <div className="border border-ink/30 bg-paper/40 backdrop-blur-sm p-10 md:p-14 flex flex-col items-start gap-6">
                <span className="w-14 h-14 rounded-full bg-ink text-coral flex items-center justify-center">
                  <Check className="w-6 h-6" />
                </span>
                <h3 className="font-display text-4xl md:text-6xl tracking-tight leading-[0.95]">
                  Got it. <span className="italic">Talk soon.</span>
                </h3>
                <p className="text-lg text-ink/80 max-w-md">
                  Your note is in our inbox. Expect a reply within one
                  business day — sometimes faster, never automated.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="grid grid-cols-1 md:grid-cols-2 gap-px bg-ink/30 border border-ink/30">
                <Field
                  label="Name"
                  name="name"
                  placeholder="Tatenda Moyo"
                  error={errors.name}
                />
                <Field
                  label="Email"
                  name="email"
                  type="email"
                  placeholder="you@studio.co"
                  error={errors.email}
                />
                <Field
                  label="Company (optional)"
                  name="company"
                  placeholder="Helios Solar"
                  error={errors.company}
                />
                <Field
                  label="Budget (optional)"
                  name="budget"
                  placeholder="R 80k — R 250k"
                  error={errors.budget}
                />
                <div className="bg-coral md:col-span-2 p-5 md:p-7">
                  <label className="label text-ink/70 block mb-3">
                    The project
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    placeholder="Tell us what you're building, who it's for, and what would make it feel like a win."
                    className="w-full bg-transparent outline-none font-display text-2xl md:text-3xl tracking-tight leading-snug placeholder:text-ink/40 resize-none"
                  />
                  {errors.message && (
                    <p className="label text-ink mt-2">{errors.message}</p>
                  )}
                </div>
                <div className="bg-coral md:col-span-2 p-5 md:p-7 flex items-center justify-between gap-4">
                  <p className="label text-ink/70 max-w-xs">
                    By sending you agree we&apos;ll only use this to reply.
                  </p>
                  <Magnetic strength={0.3}>
                    <button
                      type="submit"
                      disabled={status === "sending"}
                      className="inline-flex items-center gap-3 bg-ink text-paper rounded-full pl-7 pr-3 py-3 font-display text-xl md:text-2xl tracking-tight hover:bg-paper hover:text-ink transition-colors duration-700 ease-cinema disabled:opacity-60"
                    >
                      {status === "sending" ? "Sending…" : "Send it"}
                      <span className="bg-coral text-ink rounded-full w-11 h-11 flex items-center justify-center">
                        <ArrowUpRight className="w-5 h-5" />
                      </span>
                    </button>
                  </Magnetic>
                </div>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  error,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  error?: string;
}) {
  return (
    <div className="bg-coral p-5 md:p-7">
      <label className="label text-ink/70 block mb-3">{label}</label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        className="w-full bg-transparent outline-none font-display text-2xl md:text-3xl tracking-tight placeholder:text-ink/40 border-b border-ink/30 focus:border-ink pb-2 transition-colors"
      />
      {error && <p className="label text-ink mt-2">{error}</p>}
    </div>
  );
}

/* ──────────────────────────── FOOTER ──────────────────────────── */

function Footer() {
  const items = ["Lynque Studio", "Johannesburg · ZA", "Est. MMXVI", "Available Q3 / 2026"];
  const row = [...items, ...items, ...items];
  return (
    <footer className="bg-ink text-paper">
      <div className="py-8 border-y border-paper/10 overflow-hidden">
        <div className="marquee marquee-slow gap-16 whitespace-nowrap">
          {row.map((t, i) => (
            <span key={i} className="font-display italic text-3xl md:text-5xl">
              {t} <span className="not-italic mx-6 text-coral">✦</span>
            </span>
          ))}
        </div>
      </div>

      <div className="px-6 md:px-10 py-20 md:py-24 max-w-[1500px] mx-auto">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-6">
            <h3 className="font-display text-5xl md:text-7xl tracking-tight leading-[0.95] max-w-xl">
              We answer<br />
              <span className="italic text-coral">in 24 hours.</span>
            </h3>
          </div>
          <div className="col-span-6 md:col-span-3">
            <p className="label text-paper/50 mb-6">Studio</p>
            <ul className="space-y-3 text-base">
              <li><a href="#work" className="underline-anim">Work</a></li>
              <li><a href="#process" className="underline-anim">Process</a></li>
              <li><a href="#services" className="underline-anim">Services</a></li>
              <li><Link to="/projects" className="underline-anim">All projects</Link></li>
              <li><a href="#contact" className="underline-anim">Contact</a></li>
            </ul>
          </div>
          <div className="col-span-6 md:col-span-3">
            <p className="label text-paper/50 mb-6">Elsewhere</p>
            <ul className="space-y-3 text-base">
              <li><a href="#" className="underline-anim">Instagram</a></li>
              <li><a href="#" className="underline-anim">Are.na</a></li>
              <li><a href="#" className="underline-anim">LinkedIn</a></li>
              <li><a href="#" className="underline-anim">Read.cv</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-paper/10 flex flex-col md:flex-row md:items-center md:justify-between gap-4 label text-paper/50">
          <span>© {new Date().getFullYear()} Lynque Studio · Where vision meets its most expressive digital form.</span>
          <span>Designed and built in-house</span>
        </div>
      </div>
    </footer>
  );
}
