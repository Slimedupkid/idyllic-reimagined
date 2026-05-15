import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight, X, Check } from "lucide-react";
import { z } from "zod";

import { Magnetic } from "@/components/Magnetic";
import { Reveal, RevealText } from "@/components/Reveal";

const projectTypes = [
  { key: "brand", label: "Brand Identity", icon: "✦" },
  { key: "web", label: "Web Design", icon: "❖" },
  { key: "rebrand", label: "Rebrand", icon: "✺" },
  { key: "ecommerce", label: "E-commerce", icon: "◈" },
  { key: "editorial", label: "Editorial", icon: "❍" },
  { key: "campaign", label: "Campaign", icon: "✧" },
  { key: "strategy", label: "Brand Strategy", icon: "✱" },
  { key: "other", label: "Something Else", icon: "✣" },
];

const ContactSchema = z.object({
  name: z.string().trim().min(1, "What should we call you?").max(120),
  email: z.string().trim().email("That email looks off.").max(255),
  budget: z.string().trim().max(60).optional().or(z.literal("")),
  message: z.string().trim().min(10, "A little more context?").max(4000),
});

export function ContactOverlay() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<(typeof projectTypes)[number] | null>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [errorMsg, setErrorMsg] = useState<string>("");
  const formRef = useRef<HTMLFormElement>(null);

  // Lock body scroll when overlay is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleSelect = (p: (typeof projectTypes)[number]) => {
    setActive(p);
    setOpen(true);
    setStatus("idle");
    setErrors({});
    setErrorMsg("");
  };

  const handleClose = () => {
    setOpen(false);
    setTimeout(() => {
      formRef.current?.reset();
      setStatus("idle");
      setErrors({});
    }, 600);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrors({});
    setErrorMsg("");

    const fd = new FormData(e.currentTarget);
    const data = {
      name: String(fd.get("name") ?? ""),
      email: String(fd.get("email") ?? ""),
      budget: String(fd.get("budget") ?? ""),
      message: String(fd.get("message") ?? ""),
    };

    const parsed = ContactSchema.safeParse(data);
    if (!parsed.success) {
      const errs: Record<string, string> = {};
      for (const issue of parsed.error.issues) {
        errs[issue.path.join(".")] = issue.message;
      }
      setErrors(errs);
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch("https://formsubmit.co/ajax/info@lynque.co.za", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: parsed.data.name,
          email: parsed.data.email,
          budget: parsed.data.budget || "—",
          project_type: active?.label ?? "—",
          message: parsed.data.message,
          _subject: `New Lynque brief — ${active?.label ?? "Enquiry"} (${parsed.data.name})`,
          _template: "table",
          _captcha: "false",
        }),
      });
      if (!res.ok) {
        const j = await res.json().catch(() => ({}));
        throw new Error(j.message ?? "Send failed");
      }
      setStatus("sent");
    } catch (err) {
      console.error(err);
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="bg-paper text-ink py-24 md:py-40 px-6 md:px-10 grain"
    >
      <div className="max-w-[1500px] mx-auto">
        <div className="grid grid-cols-12 gap-8 md:gap-16 items-start">
          {/* Copy column */}
          <div className="col-span-12 md:col-span-5">
            <Reveal>
              <p className="label text-ash mb-8">(Let&apos;s talk · 07)</p>
            </Reveal>
            <h2 className="font-display text-[14vw] md:text-[6vw] leading-[0.92] tracking-tight">
              <RevealText text="Start a" />
              <br />
              <span className="italic text-coral">
                <RevealText text="conversation." delay={0.1} />
              </span>
            </h2>
            <Reveal delay={0.2}>
              <p className="mt-10 text-lg md:text-xl leading-relaxed text-ink/70 max-w-md">
                Pick a lane on the right. We&apos;ll open up a quick brief and
                send it straight to{" "}
                <span className="font-display italic text-ink">info@lynque.co.za</span>
                . Replies inside 24 hours, no auto-responder energy.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="mt-12 grid grid-cols-2 gap-6">
                <div>
                  <p className="label text-ink/50">Direct</p>
                  <a
                    href="mailto:info@lynque.co.za"
                    className="font-display text-xl md:text-2xl underline-anim block mt-2"
                  >
                    info@lynque.co.za
                  </a>
                </div>
                <div>
                  <p className="label text-ink/50">Studio</p>
                  <p className="font-display text-xl md:text-2xl mt-2">Johannesburg, ZA</p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Trigger buttons column */}
          <div className="col-span-12 md:col-span-7">
            <Reveal>
              <p className="label text-ash mb-6 md:text-right">(I&apos;m here for ↓)</p>
            </Reveal>
            <div className="grid grid-cols-2 gap-x-10 md:gap-x-16">
              {projectTypes.map((p, i) => (
                <Reveal key={p.key} delay={i * 0.04}>
                  <button
                    onClick={() => handleSelect(p)}
                    className="trigger-btn group relative block w-full text-left py-5 md:py-6 border-b border-ink/15 hover:border-ink/0"
                  >
                    <span className="font-display text-3xl md:text-5xl tracking-tight leading-none uppercase transition-transform duration-700 ease-cinema group-hover:translate-x-2 inline-block">
                      {p.label}
                    </span>
                    <span className="absolute right-0 top-1/2 -translate-y-1/2 text-coral opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-2xl">
                      {p.icon}
                    </span>
                    <span className="trigger-underline absolute left-0 bottom-0 h-[2px] bg-ink w-0 group-hover:w-full transition-all duration-700 ease-cinema" />
                  </button>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Overlay drawer */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              onClick={handleClose}
              className="fixed inset-0 z-[90] bg-ink/60 backdrop-blur-sm"
            />
            <motion.aside
              key="drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="fixed top-0 right-0 bottom-0 z-[100] w-full md:w-[58vw] lg:w-[50vw] bg-ink text-paper grain overflow-y-auto"
            >
              <button
                onClick={handleClose}
                aria-label="Close"
                className="absolute top-6 right-6 z-10 w-12 h-12 rounded-full border border-paper/30 flex items-center justify-center hover:bg-paper hover:text-ink transition-colors duration-500 ease-cinema"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="px-6 md:px-12 lg:px-16 pt-20 pb-16 min-h-full flex flex-col">
                <div className="flex items-baseline justify-between gap-4 border-b border-paper/15 pb-6 mb-10">
                  <span className="label text-paper/50">Briefing for</span>
                  <span className="font-display italic text-3xl md:text-5xl text-coral leading-none">
                    {active?.label}
                  </span>
                </div>

                {status === "sent" ? (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="flex-1 flex flex-col justify-center gap-8"
                  >
                    <span className="w-16 h-16 rounded-full bg-coral text-ink flex items-center justify-center">
                      <Check className="w-7 h-7" />
                    </span>
                    <h3 className="font-display text-5xl md:text-7xl leading-[0.95] tracking-tight">
                      Got it. <span className="italic text-coral">Talk soon.</span>
                    </h3>
                    <p className="text-lg text-paper/70 max-w-md">
                      Your brief just landed in{" "}
                      <span className="text-paper">info@lynque.co.za</span>.
                      Expect a personal reply inside 24 hours.
                    </p>
                    <button
                      onClick={handleClose}
                      className="self-start mt-4 label text-paper/70 underline-anim"
                    >
                      Close →
                    </button>
                  </motion.div>
                ) : (
                  <form
                    ref={formRef}
                    onSubmit={handleSubmit}
                    noValidate
                    className="flex-1 flex flex-col gap-8"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <OverlayField
                        label="Your name"
                        name="name"
                        placeholder="Tatenda Moyo"
                        error={errors.name}
                      />
                      <OverlayField
                        label="Your email"
                        name="email"
                        type="email"
                        placeholder="you@studio.co"
                        error={errors.email}
                      />
                    </div>
                    <OverlayField
                      label="Budget (optional)"
                      name="budget"
                      placeholder="R 80k — R 250k"
                      error={errors.budget}
                    />
                    <div>
                      <label className="label text-paper/50 block mb-3">
                        The project
                      </label>
                      <textarea
                        name="message"
                        rows={6}
                        placeholder={`Tell us a little about what you're building, who it's for, and how you want it to feel.`}
                        className="w-full bg-transparent outline-none font-display text-2xl md:text-3xl tracking-tight leading-snug placeholder:text-paper/30 resize-none border-b border-paper/30 focus:border-coral pb-3 transition-colors"
                      />
                      {errors.message && (
                        <p className="label text-coral mt-2">{errors.message}</p>
                      )}
                    </div>

                    {errorMsg && (
                      <p className="label text-coral">{errorMsg}</p>
                    )}

                    <div className="mt-auto pt-10 flex items-center justify-between gap-4 border-t border-paper/15">
                      <p className="label text-paper/50 max-w-xs">
                        We only use this to reply. Never shared.
                      </p>
                      <Magnetic strength={0.3}>
                        <button
                          type="submit"
                          disabled={status === "sending"}
                          className="inline-flex items-center gap-3 bg-coral text-ink rounded-full pl-7 pr-3 py-3 font-display text-xl md:text-2xl tracking-tight hover:bg-paper transition-colors duration-700 ease-cinema disabled:opacity-60"
                        >
                          {status === "sending" ? "Sending…" : "Send brief"}
                          <span className="bg-ink text-coral rounded-full w-11 h-11 flex items-center justify-center">
                            <ArrowUpRight className="w-5 h-5" />
                          </span>
                        </button>
                      </Magnetic>
                    </div>
                  </form>
                )}
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}

function OverlayField({
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
    <div>
      <label className="label text-paper/50 block mb-3">{label}</label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        className="w-full bg-transparent outline-none font-display text-2xl md:text-3xl tracking-tight placeholder:text-paper/30 border-b border-paper/30 focus:border-coral pb-2 transition-colors"
      />
      {error && <p className="label text-coral mt-2">{error}</p>}
    </div>
  );
}
