import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut', delay },
  }),
};

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-gradient-to-br from-neutral-light via-secondary-light/40 to-primary-light/60 py-28 px-6"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.6),_transparent_60%)] pointer-events-none" />

      <div className="relative mx-auto max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-120px' }}
          variants={containerVariants}
          className="flex flex-col gap-16"
        >
          <div className="max-w-3xl space-y-4">
            <p className="font-accent uppercase tracking-[0.35em] text-lg text-primary-dark/70">
              Personal Story
            </p>
            <h2 className="font-serifalt text-5xl md:text-6xl tracking-tight text-black">
              The craft behind the portfolio.
            </h2>
            <div className="h-1 w-20 rounded-full bg-primary-dark/70" />
          </div>

          <div className="grid gap-12 lg:grid-cols-[1.7fr,1fr]">
            <motion.article
              variants={cardVariants}
              custom={0.1}
              className="rounded-3xl border border-primary-dark/20 bg-white/70 p-10 shadow-xl backdrop-blur-sm"
            >
              <div className="space-y-6 text-xl leading-relaxed text-neutral-dark font-serifalt">
                <p>
                  I’m a multidisciplinary designer-developer obsessed with translating brand stories into
                  tactile digital experiences. My work leans into the details—harmonizing typography, motion,
                  and micro-interactions to create moments that feel bespoke and intentional.
                </p>
                <p>
                  Over the past few years I’ve bridged UI/UX strategy, full-stack engineering, and hands-on QA,
                  which means every interface I ship is backed by a thoughtful information architecture and
                  production-ready code. I thrive in the collaborative middle ground where design systems meet
                  performance budgets.
                </p>
                <p>
                  When I’m not prototyping new flows or refining component libraries, you’ll find me exploring
                  the latest accessibility patterns, experimenting with creative coding, or writing about the
                  craft of building resilient products.
                </p>
              </div>
            </motion.article>

            <div className="flex flex-col gap-8 lg:gap-10">
              <motion.aside
                variants={cardVariants}
                custom={0.2}
                className="rounded-3xl border border-secondary-dark/30 bg-white/80 p-7 shadow-lg backdrop-blur-sm"
              >
                <h3 className="font-accent uppercase text-md tracking-[0.3em] text-secondary-dark mb-4">
                  Daily Quote
                </h3>
                <blockquote className="font-serif italic text-lg text-neutral-dark/80 leading-snug">
                  “A future API-powered insight will land here—perfect for an inspiring nudge before diving in.”
                </blockquote>
                <p className="mt-4 text-sm font-serifalt text-neutral-dark/60">
                  Hook this card up to your favorite quote service to keep the energy fresh.
                </p>
              </motion.aside>

              <motion.section
                variants={cardVariants}
                custom={0.3}
                className="rounded-3xl border border-primary-dark/25 bg-gradient-to-br from-white/90 via-white/70 to-secondary-light/60 p-8 shadow-lg backdrop-blur-sm"
              >
                <div className="mb-5 space-y-2">
                  <h3 className="font-accent uppercase text-md tracking-[0.3em] text-primary-dark">
                    From the blog
                  </h3>
                  <p className="font-serifalt text-2xl text-black leading-tight">
                    Crafting empathetic design systems for fast-moving teams.
                  </p>
                </div>
                <p className="font-serifalt text-base leading-relaxed text-neutral-dark/80">
                  Drop in a short excerpt from your latest article to guide visitors deeper into your process,
                  wins, and lessons learned.
                </p>
                <div className="mt-6">
                  <Button className="rounded-full bg-neutral px-7 py-2 text-sm font-accent uppercase tracking-[0.2em] text-white hover:bg-primary transition-colors">
                    Read the post
                  </Button>
                </div>
              </motion.section>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
