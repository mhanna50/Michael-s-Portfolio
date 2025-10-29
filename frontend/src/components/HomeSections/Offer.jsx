import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, LineChart, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";

const planVariants = {
  initial: { opacity: 0, y: 30 },
  animate: (index) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", delay: index * 0.08 },
  }),
};

const marqueeVariants = {
  animate: {
    x: ["0%", "-50%"],
    transition: {
      duration: 18,
      ease: "linear",
      repeat: Infinity,
    },
  },
};

const plans = [
  {
    title: "Launchpad Website",
    price: "$2.8k+",
    icon: Sparkles,
    duration: "4 – 6 weeks",
    scope: "Perfect for founders or teams who need a handcrafted, performant marketing site that still feels bespoke.",
    highlights: [
      "Brand-aligned design system + copy guidance",
      "Responsive build in React / Vite with accessibility baked in",
      "Content modeling + markdown-driven blog or portfolio",
      "Basic SEO + analytics instrumentation",
    ],
  },
  {
    title: "Growth Retainer",
    price: "$1.2k / month",
    icon: Layers,
    duration: "Monthly partnership",
    scope: "Ongoing improvements for product teams that want design/dev momentum without hiring a full-time squad.",
    highlights: [
      "Two feature sprints per month (landing pages, UI polish, experiments)",
      "Component refactors + performance tuning",
      "Priority bug fixes and QA sweeps",
      "Content updates, release notes, and hand-off docs",
    ],
  },
  {
    title: "SEO Deep Dive",
    price: "$950",
    icon: LineChart,
    duration: "10-day turnaround",
    scope: "A tactical audit with implementation-ready steps to help your site get discovered and stay speedy.",
    highlights: [
      "Technical audit (Core Web Vitals, crawlability, accessibility)",
      "Content strategy with prioritized keyword targets",
      "Schema, social preview, and metadata recommendations",
      "Implementation roadmap + optional pairing sessions",
    ],
  },
];

export default function OffersSection({ theme }) {
  const sectionTheme = theme?.sections?.contact;
  const accent = theme?.accent || "#436850";
  const palette = sectionTheme?.palette || {};

  const sectionStyle = sectionTheme
    ? { background: sectionTheme.bg, color: sectionTheme.text }
    : {
        background:
          "linear-gradient(140deg, rgba(8,18,14,0.95) 0%, rgba(31,56,41,0.92) 50%, rgba(10,16,13,0.95) 100%)",
        color: "#F4F9F6",
      };

  const headerAccent = palette.heading || sectionTheme?.text || "#F9FBF9";
  const muted = palette.body || palette.muted || "rgba(244, 249, 246, 0.75)";
  const railBg = palette.railBg || palette.buttonBg || `${accent}33`;

  const baseCardPalette = sectionTheme
    ? {
        bg: "rgba(255, 255, 255, 0.9)",
        border: "rgba(15, 23, 42, 0.1)",
        text: sectionTheme.text || "#1F2933",
        subtext: muted,
        bullet: palette.divider || "rgba(148,163,184,0.45)",
        icon: palette.buttonBg || accent,
        shadow: "0 18px 60px rgba(15, 23, 20, 0.18)",
      }
    : {
        bg: "rgba(255, 255, 255, 0.9)",
        border: "rgba(15, 23, 42, 0.1)",
        text: "#1F2933",
        subtext: "rgba(71, 85, 105, 0.85)",
        bullet: "rgba(148,163,184,0.45)",
        icon: accent,
        shadow: "0 18px 60px rgba(15, 23, 20, 0.18)",
      };

  const cardPalette = { ...baseCardPalette, ...(palette.card || {}) };

  const baseButtonPalette = sectionTheme
    ? {
        bg: palette.buttonBg || accent,
        text: palette.buttonText || sectionTheme.buttonContrast || sectionTheme.text || "#0f172a",
        hover: palette.buttonHover || palette.buttonBg || accent,
        border: palette.buttonBorder || "transparent",
      }
    : {
        bg: "#ffffff",
        text: "#1f2937",
        hover: "#f9fafb",
        border: "transparent",
      };

  const buttonPalette = baseButtonPalette;
  const buttonStyle = {
    backgroundColor: buttonPalette.bg,
    color: buttonPalette.text,
    borderColor: buttonPalette.border,
  };

  return (
    <section id="services" className="relative py-32 px-6 overflow-hidden" style={sectionStyle}>
      <div className="absolute inset-0 opacity-[0.08] [mask-image:radial-gradient(circle_at_top,#000,transparent_70%)] pointer-events-none">
        <motion.div
          className="absolute -left-40 top-24 h-96 w-96 rounded-full"
          style={{ background: accent }}
          animate={{ opacity: [0.15, 0.25, 0.15] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute right-[-20%] bottom-12 h-80 w-80 rounded-full"
          style={{ background: `${accent}80` }}
          animate={{ opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        />
      </div>

      <div className="relative mx-auto max-w-6xl">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="font-accent uppercase tracking-[0.35em] text-sm mb-4" style={{ color: muted }}>
              Services
            </p>
            <h2
              className="font-serifalt text-5xl md:text-6xl tracking-tight leading-tight"
              style={{ color: headerAccent }}
            >
              Tailored builds that keep shipping momentum.
            </h2>
            <p className="mt-6 text-lg leading-relaxed" style={{ color: muted }}>
              Each engagement blends product intuition, intentional UX, and production-ready code. Whether you need a
              flagship launch, steady iteration, or a visibility boost, we’ll scope exactly what moves the needle.
            </p>
          </div>

          <div className="flex flex-col items-start gap-4 lg:text-right">
            <span className="font-accent text-xs uppercase tracking-[0.28em]" style={{ color: muted }}>
              Ready when you are
            </span>
            <a href="mailto:michaelhanna50@gmail.com">
              <Button
                className="rounded-full px-8 py-5 text-sm font-accent uppercase tracking-[0.25em] border transition-transform hover:-translate-y-0.5 hover:opacity-90 focus-visible:ring-2 focus-visible:ring-offset-2"
                style={buttonStyle}
              >
                Start a project
                <ArrowRight className="ml-3 h-4 w-4" />
              </Button>
            </a>
          </div>
        </div>

        <div className="relative mt-16">
          <div
            className="absolute inset-y-0 left-0 right-0 rounded-3xl pointer-events-none"
            style={{
              background: `linear-gradient(90deg, rgba(0,0,0,0) 0%, ${railBg} 20%, ${railBg} 80%, rgba(0,0,0,0) 100%)`,
            }}
          />

          <motion.div
            className="relative flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-hide"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-120px" }}
          >
            {plans.map((plan, index) => {
              const Icon = plan.icon;
              return (
                <motion.article
                  key={plan.title}
                  className="relative min-w-[19rem] max-w-[22rem] snap-center rounded-3xl border p-7 backdrop-blur-sm transition-transform hover:-translate-y-2"
                  custom={index}
                  variants={planVariants}
                  style={{
                    background: cardPalette.bg,
                    color: cardPalette.text,
                    borderColor: cardPalette.border,
                    boxShadow: cardPalette.shadow,
                  }}
                >
                  <div className="flex items-center gap-3">
                    <Icon className="h-5 w-5" style={{ color: cardPalette.icon }} />
                    <h3 className="font-serifalt text-2xl">{plan.title}</h3>
                  </div>
                  <div className="mt-4 flex items-baseline gap-3">
                    <span className="text-3xl font-semibold">{plan.price}</span>
                    <span
                      className="text-sm uppercase tracking-[0.25em]"
                      style={{ color: cardPalette.subtext }}
                    >
                      {plan.duration}
                    </span>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed" style={{ color: cardPalette.subtext }}>
                    {plan.scope}
                  </p>
                  <ul className="mt-5 space-y-3 text-sm" style={{ color: cardPalette.subtext }}>
                    {plan.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-start gap-2">
                        <span
                          className="mt-1 h-1.5 w-1.5 rounded-full"
                          style={{ backgroundColor: cardPalette.bullet }}
                        />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </motion.article>
              );
            })}
          </motion.div>
        </div>

        <div className="relative mt-14 overflow-hidden rounded-3xl border border-white/10 bg-white/6">
          <motion.div
            className="flex gap-12 whitespace-nowrap py-6 text-sm uppercase tracking-[0.35em]"
            variants={marqueeVariants}
            animate="animate"
            style={{ color: muted }}
          >
            {["UX Strategy", "Design Systems", "Content Modeling", "Performance Tuning", "Analytics & Reporting"].map(
              (tag) => (
                <span key={tag} className="flex items-center gap-3">
                  {tag}
                  <span className="h-1 w-1 rounded-full bg-current opacity-50" />
                </span>
              )
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
