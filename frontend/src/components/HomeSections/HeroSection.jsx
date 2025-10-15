import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const detailVariants = {
  open: { height: 'auto', opacity: 1, transition: { duration: 0.35, ease: 'easeOut' } },
  collapsed: { height: 0, opacity: 0, transition: { duration: 0.25, ease: 'easeIn' } },
};

const StatCard = ({ heading, subtext, detailBody, delay, isOpen, onToggle }) => (
  <motion.div
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ type: 'spring', stiffness: 120, damping: 18, delay }}
    className="text-right space-y-2 max-w-xs"
  >
    <button
      type="button"
      onClick={onToggle}
      className="relative w-full text-right group pb-2"
    >
      <div className="flex items-end justify-end gap-3">
        <ChevronDown
          className={`w-4 h-4 text-primary-dark transition-transform duration-300 mb-1 -mr-2 ${isOpen ? 'rotate-180' : ''}`}
        />
        <div className="space-y-1">
          <p className="font-accent uppercase text-5xl text-black">{heading}</p>
          <p className="font-serifalt text-lg text-neutral-dark">{subtext}</p>
        </div>
      </div>
    </button>
    <AnimatePresence initial={false}>
      {isOpen && (
        <motion.div
          key="detail"
          variants={detailVariants}
          initial="collapsed"
          animate="open"
          exit="collapsed"
          className="mt-2 overflow-hidden rounded-lg border border-secondary-dark/40 px-3 text-left shadow max-w-[220px] ml-auto bg-transparent"
        >
          <motion.p
            initial={{ y: 8, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 8, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="py-3 text-base font-serifalt text-black"
          >
            {detailBody}
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  </motion.div>
);

const ResultCard = ({ heading, subtext, delay, showDivider = false }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: delay }}
    className={`flex h-full w-full flex-col items-start justify-end ${showDivider
        ? 'border-t border-primary-dark/40 pt-4 md:border-t-0 md:pt-0 md:border-l md:border-primary-dark/40 md:pl-5 max-w-[1200px]'
        : ''
      }`}
  >
    <div className="w-full leading-tight space-y-0.5 text-left">
      <p className="font-accent uppercase text-xl md:text-xl text-black scale-y-100">{heading}</p>
      <p className="font-serifalt text-md text-neutral line-clamp-2">{subtext}</p>
    </div>
  </motion.div>
);

export default function HeroSection() {
  const [openCard, setOpenCard] = useState(null);

  return (
    <section className="relative flex flex-col items-center justify-start bg-gradient-to-br from-neutral-light via-secondary-light to-primary-light min-h-[max(950px,100vh)] px-6 lg:px-12 pt-16 lg:pt-20 pb-10 overflow-visible">



      <nav className="absolute top-6 left-1/2 -translate-x-1/2 w-full max-w-[1200px] z-30 flex items-center justify-end">
        <a
          href="/blog"
          className="font-accent uppercase tracking-[0.35em] text-xs sm:text-4xl text-black/70 hover:text-black transition-colors duration-200"
        >
          Blog
        </a>
      </nav>
      {/* Centered, Overlapping Image */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="absolute top-0 -translate-x-1/2 hidden lg:block z-10"
      >
        <div className="w-[600px] h-[750px] rounded-b-[30rem] overflow-hidden shadow-2xl group">
          <img
            src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=800&q=80"
            alt="Michael"
            className="w-full h-full object-cover object-top scale-105 "
          />
        </div>
      </motion.div>

      {/* Mobile Image */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="absolute top-0 left-1/2 -translate-x-1/2 h-[40vh] w-[80vw] max-w-sm lg:hidden block"
      >
        <div className="h-full w-full rounded-b-full overflow-hidden shadow-2xl group">
          <img src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=800&q=80" alt="Michael" className="w-full h-full object-cover object-top" />
        </div>
      </motion.div>


      <div className="w-full max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 items-start gap-8 relative z-20 pt-[45vh] lg:pt-12 flex-1">

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="lg:text-left text-top"
        >
          <div className="flex flex-col max-w-[360px] w-full -mt-11">
            <h2 className="font-serifalt text-4xl font-bold text-black tracking-widest scale-y-110">
              Hey. I'm Michael,
            </h2>

            <h1 className="font-accent uppercase  text-black text-8xl md:text-11xl mt-5 -mb-4 scale-y-100 ">
              A UI/UX
            </h1>
            <h1 className="font-serif italic text-black text-6xl md:text-10xl">
              <span className="text-11xl">&</span> <span className="scale-y-110">Creative</span>
            </h1>
            <h1 className="font-accent uppercase text-black text-10xl md:text-11xl -mt-2 mb-3 scale-y-100">
              Developer
            </h1>

            <div className="h-[144px]">
              <p className="font-serifalt font-thin text-black text-left text-3xl leading-[1.15] tracking-tight h-full scale-y-110">
                I build elegant, high-performance websites and digital experiences that merge creativity with clean code, SEO, and precise QA.
              </p>
            </div>

            <a href="mailto:michael.email@example.com">
              <Button className=" bg-neutral hover:bg-primary text-lg text-white font-accent px-8 py-2.5 pr-1.5 rounded-full mt-2 inline-flex items-center justify-center uppercase gap-5 group transition-colors duration-300">
                <span>Contact Me</span>

                {/* Arrow wrapper (circle) */}
                <span className="flex items-center mr-1 justify-center w-10 h-10 rounded-full bg-white transition-all duration-300 group-hover:bg-neutral">
                  <ArrowRight
                    className="w-4 h-4 text-black transition-all duration-300 group-hover:text-white group-hover:-rotate-45"
                  />
                </span>
              </Button>
            </a>
          </div>
        </motion.div>

        {/* Right Content */}
        <motion.div
          layout
          initial={false}
          transition={{ type: 'spring', stiffness: 140, damping: 20 }}
          className="flex-col gap-6 items-end hidden lg:flex mt-14 lg:translate-x-[5px]"
        >
          <StatCard
            heading="100%"
            subtext="React + Tailwind"
            detailBody="Built entirely with React components and styled using Tailwind CSS for a modern, responsive interface and clean developer workflow."
            isOpen={openCard === 'build'}
            onToggle={() => setOpenCard((prev) => (prev === 'build' ? null : 'build'))}
            delay={0.4}
          />
          <StatCard
            heading="24/7"
            subtext="Automated backend"
            detailBody="A scheduled cron job automatically summarizes monthly blog content using OpenAI, keeping site highlights fresh and up to date."
            isOpen={openCard === 'backend'}
            onToggle={() => setOpenCard((prev) => (prev === 'backend' ? null : 'backend'))}
            delay={0.6}
          />
          <StatCard
            heading="90+"
            subtext="Lighthouse score"
            detailBody="Optimized for performance, accessibility, and SEO — consistently achieving a 90+ Lighthouse score across key metrics."
            isOpen={openCard === 'lighthouse'}
            onToggle={() => setOpenCard((prev) => (prev === 'lighthouse' ? null : 'lighthouse'))}
            delay={0.8}
          />
          <StatCard
            heading="3"
            subtext="APIs live"
            detailBody="Integrated with OpenAI, a daily quote API, and OpenWeather API to make the site's theme weather dependent."
            isOpen={openCard === 'apis'}
            onToggle={() => setOpenCard((prev) => (prev === 'apis' ? null : 'apis'))}
            delay={1.0}
          />
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="w-full flex justify-center z-20 mt-auto pt-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="px-6 pt-6 pb-0 w-full max-w-[1250px]"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-50 items-end text-left">
            <ResultCard
              heading="Design Clarity"
              subtext="Clean layouts and brand harmony create a polished first impression."
              delay={1.3}
            />
            <ResultCard
              heading="Smooth Journeys"
              subtext="Intuitive navigation and responsive feel keep visitors engaged."
              delay={1.4}
              showDivider
            />
            <ResultCard
              heading="Tailored Builds"
              subtext="Websites are crafted around your goals, tone, and audience."
              delay={1.5}
              showDivider
            />
            <ResultCard
              heading="Measurable Impact"
              subtext="Projects deliver higher engagement, stronger conversions, and lasting loyalty."
              delay={1.6}
              showDivider
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
