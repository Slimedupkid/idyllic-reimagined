import { Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowUpRight, ArrowLeft } from "lucide-react";
import { useRef } from "react";

import { SmoothScroll } from "@/components/SmoothScroll";
import { Reveal, RevealText } from "@/components/Reveal";
import { Parallax } from "@/components/Parallax";

export type DemoConfig = {
  brand: string;
  punctuation?: string;
  tagline: { line1: string; italic: string; line2: string };
  category: string;
  location: string;
  established: string;
  intro: string;
  hero: string;
  // theme
  bg: string; // tailwind bg-* token
  text: string; // tailwind text-* token
  accent: string; // hex used for tints / inline styles
  accentClass: string; // tailwind text class for accent
  accentBg: string; // tailwind bg class for accent
  // sections
  story: { eyebrow: string; heading: string; body: string[] };
  offers: { n: string; title: string; body: string }[];
  stats: { value: string; label: string }[];
  testimonial: { quote: string; name: string; role: string };
  cta: { line1: string; italic: string; href?: string; label: string };
};

export function DemoSite({ config }: { config: DemoConfig }) {
  return (
    <>
      <SmoothScroll />
      <main className={`relative min-h-screen ${config.bg} ${config.text}`}>
        <DemoNav config={config} />
        <DemoHero config={config} />
        <DemoStory config={config} />
        <DemoOffers config={config} />
        <DemoStats config={config} />
        <DemoTestimonial config={config} />
        <DemoCta config={config} />
        <DemoFooter config={config} />
      </main>
    </>
  );
}

/* ─── Nav ─── */
function DemoNav({ config }: { config: DemoConfig }) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 mix-blend-difference">
      <div className="flex items-center justify-between px-6 md:px-10 py-6 text-paper">
        <Link
          to="/projects"
          className="label inline-flex items-center gap-2 underline-anim"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> All projects
        </Link>
        <span className="font-display text-2xl tracking-tight">
          {config.brand}
          <span style={{ color: config.accent }}>{config.punctuation ?? "."}</span>
        </span>
        <Link to="/" className="label underline-anim hidden md:inline">
          Built by Lynque ↗
        </Link>
      </div>
    </header>
  );
}

/* ─── Hero ─── */
function DemoHero({ config }: { config: DemoConfig }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section ref={ref} className="relative h-[110svh] overflow-hidden grain">
      <motion.div style={{ y: imgY }} className="absolute inset-0 will-change-transform">
        <img
          src={config.hero}
          alt={config.brand}
          width={1280}
          height={1600}
          className="w-full h-full object-cover scale-110"
        />
        <div className="absolute inset-0 bg-ink/40" />
      </motion.div>

      <motion.div
        className="absolute top-28 left-6 right-6 md:left-10 md:right-10 flex items-start justify-between label text-paper/70 z-10"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
      >
        <span>{config.category}</span>
        <span className="hidden md:inline">{config.location}</span>
        <span className="text-right">Est. {config.established}</span>
      </motion.div>

      <motion.div
        style={{ y }}
        className="relative z-[2] h-full flex flex-col justify-end px-6 md:px-10 pb-24 md:pb-32 text-paper"
      >
        <h1 className="font-display tracking-tight">
          <span className="block text-[16vw] md:text-[12vw] leading-[0.86]">
            <RevealText text={config.tagline.line1} />
          </span>
          <span
            className="block text-[16vw] md:text-[12vw] leading-[0.86] italic"
            style={{ color: config.accent }}
          >
            <RevealText text={config.tagline.italic} delay={0.15} />
          </span>
          <span className="block text-[16vw] md:text-[12vw] leading-[0.86]">
            <RevealText text={config.tagline.line2} delay={0.3} />
          </span>
        </h1>
      </motion.div>
    </section>
  );
}

/* ─── Story ─── */
function DemoStory({ config }: { config: DemoConfig }) {
  return (
    <section className="py-32 md:py-48 px-6 md:px-10">
      <div className="grid grid-cols-12 gap-6 md:gap-10 max-w-[1500px] mx-auto">
        <div className="col-span-12 md:col-span-3">
          <Reveal>
            <p className="label opacity-50">({config.story.eyebrow} · 01)</p>
          </Reveal>
        </div>
        <div className="col-span-12 md:col-span-9">
          <Reveal>
            <h2 className="font-display text-[10vw] md:text-[6vw] leading-[0.95] tracking-tight">
              {config.story.heading.split("|").map((part, i) => (
                <span key={i}>
                  {i % 2 === 1 ? (
                    <span className="italic" style={{ color: config.accent }}>
                      {part}
                    </span>
                  ) : (
                    part
                  )}
                </span>
              ))}
            </h2>
          </Reveal>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 max-w-4xl">
            {config.story.body.map((p, i) => (
              <Reveal key={i} delay={0.1 + i * 0.1}>
                <p className="text-lg md:text-xl leading-relaxed opacity-80">{p}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Offers ─── */
function DemoOffers({ config }: { config: DemoConfig }) {
  return (
    <section className="px-6 md:px-10 py-24 md:py-40 border-y border-current/10">
      <div className="max-w-[1500px] mx-auto">
        <Reveal>
          <p className="label opacity-50 mb-6">(What we offer · 02)</p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="font-display text-[14vw] md:text-[8vw] leading-[0.92] tracking-tight mb-16 md:mb-24">
            On the menu<span className="italic" style={{ color: config.accent }}>.</span>
          </h2>
        </Reveal>
        <ol className="divide-y divide-current/15 border-y border-current/15">
          {config.offers.map((o, i) => (
            <Reveal key={o.n} delay={i * 0.06}>
              <li className="group grid grid-cols-12 gap-4 md:gap-10 py-10 md:py-14 cursor-default">
                <div className="col-span-2 md:col-span-1 label opacity-50 pt-2">{o.n}</div>
                <div className="col-span-10 md:col-span-5">
                  <h3 className="font-display text-3xl md:text-6xl tracking-tight leading-[0.95] transition-transform duration-700 ease-cinema group-hover:translate-x-2">
                    {o.title}
                  </h3>
                </div>
                <div className="col-span-12 md:col-span-6 text-base md:text-lg leading-relaxed opacity-70 pt-2">
                  {o.body}
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ─── Stats ─── */
function DemoStats({ config }: { config: DemoConfig }) {
  return (
    <section className="px-6 md:px-10 py-24 md:py-32">
      <div className="max-w-[1500px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-6">
        {config.stats.map((s, i) => (
          <Reveal key={i} delay={i * 0.08}>
            <div>
              <p
                className="font-display text-6xl md:text-8xl tracking-tight leading-none"
                style={{ color: config.accent }}
              >
                {s.value}
              </p>
              <p className="label opacity-60 mt-4 max-w-[12ch]">{s.label}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ─── Testimonial ─── */
function DemoTestimonial({ config }: { config: DemoConfig }) {
  return (
    <section className="px-6 md:px-10 py-32 md:py-48 border-t border-current/10">
      <div className="max-w-5xl mx-auto text-center">
        <Reveal>
          <span
            className="font-display text-7xl md:text-9xl leading-none block"
            style={{ color: config.accent }}
          >
            &ldquo;
          </span>
        </Reveal>
        <Reveal delay={0.15}>
          <blockquote className="font-display text-3xl md:text-5xl lg:text-6xl tracking-tight leading-[1.1] mt-6">
            {config.testimonial.quote}
          </blockquote>
        </Reveal>
        <Reveal delay={0.3}>
          <figcaption className="mt-12">
            <div className="h-px w-16 bg-current/30 mx-auto mb-6" />
            <p className="font-display text-xl">{config.testimonial.name}</p>
            <p className="label opacity-60 mt-2">{config.testimonial.role}</p>
          </figcaption>
        </Reveal>
      </div>
    </section>
  );
}

/* ─── CTA ─── */
function DemoCta({ config }: { config: DemoConfig }) {
  return (
    <section
      className={`${config.accentBg} text-ink py-32 md:py-56 px-6 md:px-10 grain`}
    >
      <div className="max-w-[1500px] mx-auto flex flex-col md:flex-row md:items-end md:justify-between gap-10">
        <h2 className="font-display text-[14vw] md:text-[8vw] leading-[0.92] tracking-tight">
          {config.cta.line1}
          <br />
          <span className="italic">{config.cta.italic}</span>
        </h2>
        <a
          href={config.cta.href ?? "#"}
          className="inline-flex items-center gap-3 bg-ink text-paper rounded-full pl-8 pr-3 py-3 font-display text-xl md:text-2xl tracking-tight hover:bg-paper hover:text-ink transition-colors duration-700 ease-cinema self-start md:self-end"
        >
          {config.cta.label}
          <span
            className="rounded-full w-12 h-12 flex items-center justify-center text-ink"
            style={{ background: config.accent }}
          >
            <ArrowUpRight className="w-5 h-5" />
          </span>
        </a>
      </div>
    </section>
  );
}

/* ─── Footer ─── */
function DemoFooter({ config }: { config: DemoConfig }) {
  return (
    <footer className="px-6 md:px-10 py-16 border-t border-current/10">
      <div className="max-w-[1500px] mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6 label opacity-60">
        <span>
          © {new Date().getFullYear()} {config.brand} · {config.location}
        </span>
        <Link to="/" className="underline-anim inline-flex items-center gap-2">
          A Lynque-built site <ArrowUpRight className="w-3 h-3" />
        </Link>
      </div>
    </footer>
  );
}
