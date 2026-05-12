import { createFileRoute } from "@tanstack/react-router";
import { Menu } from "lucide-react";

export const Route = createFileRoute("/")({
  component: BrandingPage,
});

const marqueeText = [
  "BRAND STRATEGY",
  "BRAND MESSAGING",
  "VISUAL IDENTITY",
  "BRAND STRATEGY",
  "BRAND MESSAGING",
  "VISUAL IDENTITY",
];

const approachSteps = [
  {
    n: "1",
    title: "We're Curious Creatures",
    body: [
      "This is where it starts. We lure you in… coffee in hand, defences slightly lowered, expecting a “quick chat.”",
      "It’s not.",
      "We start with questions. Lots of them.",
      "We ask about the business story, who’s involved, where you want to grow, what’s working, and what’s quietly not. This isn’t just about design, it’s about understanding your whole business.",
      "This part matters more than most people realise, and at Idyllic, it’s non-negotiable.",
    ],
  },
  {
    n: "2",
    title: "Personality Before We Get Pretty",
    body: [
      "Time to pull out our unique card game to play, followed by a personality quiz we’ve built to uncover who your brand is.",
      "You’ll find yourself answering instinctively, saying things you didn’t plan to say, and realising things you hadn’t quite put your finger on before.",
      "We listen, all while our creative juices begin to bubble over…",
    ],
  },
  {
    n: "3",
    title: "Let's Set the Mood",
    body: [
      "We’re not talking dimming the lights (though we can if you really want, we’ve even got a great Barry White EP we can play), but this is where we create a series of mood boards to map out the visual direction, get completely aligned, and explore the opportunities your brand can step into, from slightly outside your comfort zone to full “I carumba!” territory.",
    ],
  },
  {
    n: "4",
    title: "Conceptual Design and Presentation",
    body: [
      "Because we’ve already set the direction, we’re not about to throw three half-baked options at you and secretly cross our fingers you pick our favourite.",
      "We give you one concept. And we go all in.",
      "We take the time to properly build it out, your personality, your presence, the way it all comes together, grounded in the strategy we’ve already locked in. Nothing random. Nothing accidental. (Even the bits that look effortless… aren’t.)",
      "Every choice is deliberate. Designed for your audience, for impact, for that “ohhh now I get it” moment.",
    ],
  },
  {
    n: "5",
    title: "Refine and Package",
    body: [
      "We fine-tune the final details with you (if there even are any), tighten the screws, and lock it in.",
      "This isn’t just a logo slapped in a folder and sent on its way. This is a brand with bones. Structure. A pulse. A bible.",
      "We package it all up into a clear, no-nonsense brand guideline, so your team, your printer, or some future designer doesn’t go rogue and butcher it.",
    ],
  },
];

const packages = [
  {
    title: "New Identity",
    body: [
      "Starting from scratch? Perfect. No baggage, no bad habits, just a wide open runway (and a lot riding on it to work).",
      "This is the stage that sets the direction of everything that comes next.",
      "We build it from the ground up — who you are, how you sound, how you show up, and how people remember you. Not just to look good, but to position you properly from day one.",
    ],
  },
  {
    title: "Rebrand",
    body: [
      "You’re not starting from scratch, and that’s exactly why calling in the experts matters more.",
      "A rebrand isn’t a quick glow-up. It’s a careful, strategic shift. Done right, you bring your existing audience with you, sharpen your perception, and open the door to the customers you actually want next.",
      "We take a thoughtful approach — understanding what to keep, what to evolve, and what needs to go.",
    ],
  },
  {
    title: "Brand Expansion",
    body: [
      "This is our most common package, because most businesses aren’t starting from scratch… they’re just having a bit of an identity crisis.",
      "We step in and clean it up — realigning your voice, your visuals, and your presence. We dial up the personality, cut the confusion, and make sure everything works together instead of fighting for attention.",
      "Same business. Just finally knowing exactly how to show up, and owning it.",
    ],
  },
];

const specialties = [
  {
    title: "Brand Strategy",
    body: "This is where all those high school years of being labelled “nerd” finally start to pay off. We’re not just about what makes your brand look good — it’s about who it speaks to, how it positions you, and how it lines up with the words, tone, and reputation your business has built.",
  },
  {
    title: "Brand Guidelines",
    body: "We love breaking rules… but we love creating them even more. Giving you rules gives you confidence and direction on how the brand can show up across the board. They create boundaries, so you know exactly where to play, where to stretch, and how to be creative on purpose.",
  },
  {
    title: "Visual Identity",
    body: "A logo is just the tip of it. Your visual identity is everything around it — the colours, type, imagery, patterns, layouts, and all the little details that make your brand feel like you. It’s what makes people recognise you instantly, even without seeing your business name.",
  },
];

const testimonials = [
  {
    quote:
      "Idyllic helped me to bring my business dream to life. Their ability to translate my vision into something tangible was incredible. From helping us to create our company name, articulate our story, create our brand and design our website, the team really know their stuff!",
    name: "Tracey Soffe",
    company: "Trace Consulting",
  },
  {
    quote:
      "My website was created by the dream team at Idyllic and I’ve had nothing but positive reviews! Shay also INSISTED I get on Instagram which I wasn’t keen on… Now 80% of my new referrals come from Instagram! These guys understand the market and what works!",
    name: "Olivia Brailsford",
    company: "Olive Accounting",
  },
  {
    quote:
      "We have thoroughly enjoyed working and collaborating with Idyllic. The entire team is amazing and the quality of their work and the way that they go about their work speaks for itself. From the brand design to website build, Idyllic have allowed us to bring our vision to fruition.",
    name: "Marama Nicholas",
    company: "TVK Water Sports",
  },
];

function BrandingPage() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Nav */}
      <header className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-6 md:px-10 py-6">
        <a href="/" className="font-serif text-2xl md:text-3xl text-cream tracking-tight">
          idyllic<span className="text-cream">.</span>
        </a>
        <button aria-label="Menu" className="text-cream hover:opacity-80 transition">
          <Menu className="w-8 h-8" strokeWidth={1.5} />
        </button>
      </header>

      {/* Hero */}
      <section className="relative pt-40 pb-32 md:pt-48 md:pb-40">
        {/* Marquee strip */}
        <div className="absolute top-28 md:top-36 left-0 right-0 bg-[color:var(--peach)] py-5 md:py-6 overflow-hidden border-y border-[color:var(--cream)]/20">
          <div className="marquee gap-12 whitespace-nowrap">
            {[...marqueeText, ...marqueeText].map((t, i) => (
              <span
                key={i}
                className="font-serif text-3xl md:text-5xl tracking-tight text-[color:var(--coral)]"
              >
                {t} <span className="opacity-60 mx-6">—</span>
              </span>
            ))}
          </div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center mt-32 md:mt-40">
          <h1 className="font-serif text-7xl md:text-[10rem] leading-none text-cream italic">
            Branding
          </h1>

          <div className="mt-12 md:mt-16 space-y-7 text-base md:text-lg leading-relaxed text-cream/90 max-w-2xl mx-auto">
            <p>Imagine having a brand that makes you pull out your business card with a cheeky little wink…</p>
            <p>We’re talking about giving you full James Bond energy — cool, confident, and just a little bit dangerous.</p>
            <p>
              With our branding, you won’t just look good. You’ll sound right, feel consistent, and create an
              experience people can’t help but be drawn into, leaving them asking where they can get one of your
              branded cocktail shakers on their way out.
            </p>
            <p className="italic font-serif text-xl">Shaken, not stirred.</p>
            <p>
              But let’s get serious for a second — a well-defined brand has a direct impact on your revenue. A
              strong brand builds loyalty, attracts <strong className="font-semibold">the right</strong> customers,
              and gives you the confidence (and positioning) to charge what you’re actually worth.
            </p>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="bg-[color:var(--peach)] text-[color:var(--card-foreground)] py-24 md:py-32">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="font-serif italic text-5xl md:text-7xl text-[color:var(--coral)] text-center mb-20 md:mb-28">
            Our Approach
          </h2>

          <div className="space-y-24 md:space-y-32">
            {approachSteps.map((step) => (
              <div key={step.n} className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8 md:gap-16 items-start">
                <div className="font-serif italic text-[8rem] md:text-[12rem] leading-none text-[color:var(--coral)]/40 select-none">
                  {step.n}
                </div>
                <div>
                  <h3 className="font-serif text-3xl md:text-5xl mb-6 text-[color:var(--coral)]">
                    {step.title}
                  </h3>
                  <div className="space-y-4 text-base md:text-lg leading-relaxed">
                    {step.body.map((p, i) => (
                      <p key={i}>{p}</p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Work */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-serif italic text-5xl md:text-7xl text-cream text-center mb-16">Work</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              { hue: "var(--peach)", label: "Unlimit" },
              { hue: "var(--soft-peach)", label: "Verge" },
              { hue: "var(--cream)", label: "Foil & Co" },
              { hue: "var(--coral)", label: "Lumen" },
            ].map((item) => (
              <div
                key={item.label}
                className="aspect-square rounded-md flex items-end p-6 transition-transform hover:-translate-y-1"
                style={{ backgroundColor: `color-mix(in oklab, ${item.hue} 100%, transparent)` }}
              >
                <span className="font-serif italic text-2xl md:text-3xl text-[color:var(--coral)]">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Packages */}
      <section className="bg-[color:var(--soft-peach)] text-[color:var(--card-foreground)] py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-serif text-5xl md:text-7xl text-[color:var(--coral)] mb-16 md:mb-24 tracking-tight">
            BRAND<span className="italic">packages</span>
          </h2>

          <div className="space-y-20 md:space-y-28">
            {packages.map((p) => (
              <div key={p.title} className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8 md:gap-16 items-start border-t border-[color:var(--coral)]/30 pt-12">
                <h3 className="font-serif italic text-4xl md:text-6xl text-[color:var(--coral)]">
                  {p.title}
                </h3>
                <div>
                  <div className="space-y-4 text-base md:text-lg leading-relaxed mb-8">
                    {p.body.map((para, i) => (
                      <p key={i}>{para}</p>
                    ))}
                  </div>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 font-serif italic text-xl md:text-2xl text-[color:var(--coral)] underline underline-offset-8 decoration-1 hover:opacity-70 transition"
                  >
                    Let’s Talk →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Specialty */}
      <section className="py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-serif text-5xl md:text-7xl text-cream mb-16 md:mb-24 tracking-tight">
            OUR<span className="italic">specialty</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {specialties.map((s) => (
              <div
                key={s.title}
                className="bg-[color:var(--peach)] text-[color:var(--card-foreground)] rounded-2xl p-8 md:p-10 transition-transform hover:-translate-y-1"
              >
                <h3 className="font-serif italic text-3xl md:text-4xl text-[color:var(--coral)] mb-5">
                  {s.title}
                </h3>
                <p className="text-base leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-[color:var(--cream)] text-[color:var(--card-foreground)] py-24 md:py-32">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="font-serif text-5xl md:text-7xl text-[color:var(--coral)] text-center mb-20">
            Now we’re <em className="italic">blushing!</em>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <figure key={t.name} className="flex flex-col">
                <blockquote className="text-base md:text-[17px] leading-relaxed mb-6">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-auto pt-4 border-t border-[color:var(--coral)]/30">
                  <div className="font-serif italic text-xl text-[color:var(--coral)]">{t.name}</div>
                  <div className="text-sm opacity-70">{t.company}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Guide */}
      <section id="contact" className="py-24 md:py-32 bg-[color:var(--peach)] text-[color:var(--card-foreground)]">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="font-serif text-5xl md:text-7xl text-[color:var(--coral)] mb-8 tracking-tight">
            PRICING <span className="italic">guide</span>
          </h2>
          <p className="text-base md:text-lg mb-12">
            We’d much rather make you a coffee and chit chat, but if you’d like an indication on pricing, download our guide below.
          </p>

          <form
            className="space-y-4 text-left"
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <div>
              <label className="block text-sm mb-2">Full Name *</label>
              <input
                required
                className="w-full bg-transparent border border-[color:var(--coral)]/40 rounded-md px-4 py-3 outline-none focus:border-[color:var(--coral)] transition"
              />
            </div>
            <div>
              <label className="block text-sm mb-2">Email *</label>
              <input
                required
                type="email"
                className="w-full bg-transparent border border-[color:var(--coral)]/40 rounded-md px-4 py-3 outline-none focus:border-[color:var(--coral)] transition"
              />
            </div>
            <div>
              <label className="block text-sm mb-2">Business</label>
              <input className="w-full bg-transparent border border-[color:var(--coral)]/40 rounded-md px-4 py-3 outline-none focus:border-[color:var(--coral)] transition" />
            </div>
            <button
              type="submit"
              className="w-full mt-6 bg-[color:var(--coral)] text-[color:var(--cream)] font-serif italic text-xl py-4 rounded-md hover:opacity-90 transition"
            >
              Download
            </button>
          </form>
        </div>
      </section>

      {/* Footer marquee */}
      <footer className="bg-[color:var(--coral)] py-10 overflow-hidden border-t border-[color:var(--cream)]/20">
        <div className="marquee gap-16 whitespace-nowrap">
          {Array.from({ length: 12 }).map((_, i) => (
            <span
              key={i}
              className="font-serif italic text-4xl md:text-6xl text-[color:var(--cream)]"
            >
              idyllic<span className="not-italic">.</span> <span className="opacity-50 mx-4">★</span>
            </span>
          ))}
        </div>
        <div className="text-center text-cream/80 text-sm mt-8">
          Wham bam, we won’t send you spam. © {new Date().getFullYear()} idyllic.
        </div>
      </footer>
    </div>
  );
}
