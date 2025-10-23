import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import ProjectCard from './ProjectCard';

const featuredProjects = [
  {
    title: 'This Portfolio',
    category: 'Website Design & Launch',
    description:
      'A personal portfolio site showcasing my projects, skills, and the story behind why I love to create.',
    highlights: ['4 week build duration','Fully Custom Coded'],
    liveUrl: 'https://search-symphony.example.com',
    caseStudyUrl: 'https://search-symphony.example.com/strategy',
    cover: 'https://images.unsplash.com/photo-1557683316-973673baf926?w=1400&q=80',
    testimonial: {
      type: 'quote',
      quote: 'The portfolio perfectly captures my journey and the essence of my work. It’s more than just a site; it’s a reflection of my passion and dedication.',
      author: 'Michael Hanna · Designer & Developer',
    },
  },
  {
    title: 'Millie Aesthetics',
    category: 'Website Design & Launch',
    description:
      'A refined brand and online presence for a beauty and weight-loss focused Medical Spa, blending elegant design with seamless user experience.',
    highlights: ['3 week build duration', 'Built using Wordpress'],
    liveUrl: 'https://studio-palette.example.com',
    caseStudyUrl: 'https://studio-palette.example.com/case-study',
    cover: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1400&q=80',
    testimonial: {
      type: 'video',
      videoUrl: 'https://player.vimeo.com/video/76979871?h=7e0a5a05f9&title=0&byline=0&portrait=0',
      caption: 'Mille Aestetics · Owner & Aesthetician',
    },
  },
  {
    title: 'American Craftsman LLC',
    category: 'Website Design & Launch',
    description:
      'An updated brand identity, SEO Strategy, and website for a local contracting firm, highlighting craftsmanship and personalized service.',
    highlights: ['5 week project duration', 'Built using Framer'],
    liveUrl: 'https://americancraftsmanllc.com',
    caseStudyUrl: 'https://code-atlas.example.com/build-notes',
    cover: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1400&q=80',
    testimonial: {
      type: 'quote',
      quote: 'Fill in with jims quote',
      author: 'American Craftsman · Owner & Lead Contractor',
    },
  },
  
];

const projectCollections = {
  websites: [
    {
      title: 'E-Commerce Platform',
      description:
        'Full-stack e-commerce solution with payment integration, inventory management, and responsive design. Built with React, Node.js, and MongoDB.',
      github: 'https://github.com/yourusername/ecommerce',
      liveUrl: 'https://demo-ecommerce.com',
      thumbnail: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80',
      media: ['https://images.unsplash.com/photo-1557821552-17105176677c?w=1200&q=80'],
    },
    {
      title: 'Portfolio Builder',
      description:
        'A drag-and-drop portfolio builder that lets users create stunning personal websites without coding. Features real-time preview and export functionality.',
      github: 'https://github.com/yourusername/portfolio-builder',
      thumbnail: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80',
      media: ['https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1200&q=80'],
    },
  ],
  coding: [
    {
      title: 'Algorithm Visualizer',
      description:
        'Interactive tool for visualizing sorting and searching algorithms. Helps students understand computer science concepts through animation.',
      github: 'https://github.com/yourusername/algo-viz',
      liveUrl: 'https://demo-algo-viz.com',
      thumbnail: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80',
      media: ['https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&q=80'],
    },
    {
      title: 'CLI Task Manager',
      description:
        'Command-line task management tool with priority sorting, deadlines, and project categorization. Built with Python.',
      github: 'https://github.com/yourusername/cli-tasks',
      thumbnail: 'https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=800&q=80',
      media: ['https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=1200&q=80'],
    },
  ],
  seo: [
    {
      title: 'Content Systems Audit',
      description:
        'Technical SEO and content replatform for a B2B SaaS product. Delivered a living keyword map and schema-powered editorial workflow.',
      github: 'https://github.com/yourusername/content-systems-audit',
      liveUrl: 'https://content-audit.example.com',
      thumbnail: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?w=800&q=80',
      media: ['https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?w=1200&q=80'],
    },
    {
      title: 'Brand Voice Playbook',
      description:
        'Developed storytelling guidelines and SEO-ready content briefs for a product launch, aligning design, marketing, and sales messaging.',
      thumbnail: 'https://images.unsplash.com/photo-1520607162513-3b1c5b1af582?w=800&q=80',
      media: ['https://images.unsplash.com/photo-1520607162513-3b1c5b1af582?w=1200&q=80'],
    },
  ],
  qa: [
    {
      title: 'Automated Testing Framework',
      description:
        'Comprehensive testing framework for web applications using Selenium and pytest. Includes parallel execution and detailed reporting.',
      github: 'https://github.com/yourusername/qa-framework',
      thumbnail: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80',
      media: ['https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&q=80'],
    },
    {
      title: 'API Testing Suite',
      description:
        'RESTful API testing suite with automated validation, performance testing, and integration with CI/CD pipelines.',
      github: 'https://github.com/yourusername/api-tests',
      thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
      media: ['https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80'],
    },
  ],
};

const tabConfig = [
  { value: 'websites', label: 'Website Projects' },
  { value: 'coding', label: 'Coding Projects' },
  { value: 'seo', label: 'SEO & Branding' },
  { value: 'qa', label: 'QA Work' },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delayIndex = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut', delay: delayIndex * 0.1 },
  }),
};

function renderTextWithStyledAmpersand(text) {
  if (!text || !text.includes('&')) {
    return text;
  }

  const segments = text.split('&');
  const content = [];

  segments.forEach((segment, index) => {
    content.push(
      <React.Fragment key={`segment-${index}`}>
        {segment}
      </React.Fragment>,
    );

    if (index < segments.length - 1) {
      content.push(
        <span key={`amp-${index}`} className="font-serif italic text-current">
          &
        </span>,
      );
    }
  });

  return content;
}

function FeaturedProjectCard({ project, index }) {
  const thirdProjectTestimonial = featuredProjects[2]?.testimonial;
  const testimonialEntries = [
    ...(project.testimonial ? [project.testimonial] : []),
    ...(project.additionalTestimonials || []),
    ...(project.duplicateThirdTestimonial && thirdProjectTestimonial
      ? [{ ...thirdProjectTestimonial, duplicatedFromThird: true }]
      : []),
  ];

  return (
    <motion.article
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      custom={index}
      className="relative overflow-hidden rounded-3xl border border-primary-dark/15 bg-gradient-to-br from-white/90 via-white/60 to-secondary-light/50 backdrop-blur-sm shadow-xl"
    >
      {project.cover && (
        <motion.img
          src={project.cover}
          alt={project.title}
          className="absolute inset-0 h-full w-full object-cover opacity-30"
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
        />
      )}
      <div className="relative z-10 flex h-full flex-col justify-between p-9 lg:p-10 bg-white/55 backdrop-blur">
        <div className="space-y-5">
          <div className="flex items-center justify-between">
            <span className="font-accent uppercase tracking-[0.3em] text-sm text-primary-dark/80">
              {project.category}
            </span>
            <Sparkles className="h-5 w-5 text-primary-dark/70" />
          </div>
          <h3 className="font-serifalt text-3xl md:text-4xl text-black leading-tight">
            {project.title}
          </h3>
          <p className="font-serifalt text-base md:text-lg text-neutral-dark/80 leading-relaxed">
            {project.description}
          </p>
        </div>
        {project.highlights && (
          <ul className="mt-6 space-y-2 text-base font-serifalt text-neutral-dark/70">
            {project.highlights.map((item, highlightIndex) => (
              <li key={highlightIndex} className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary-dark/60" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        )}
        {testimonialEntries.length > 0 && (
          <div className="mt-8 space-y-6">
            {testimonialEntries.map((testimonialEntry, testimonialIndex) =>
              testimonialEntry.type === 'video' ? (
                <div
                  key={`${project.title}-testimonial-video-${testimonialIndex}`}
                  className="overflow-hidden rounded-2xl border border-primary-dark/20 bg-black/80 shadow-lg"
                >
                  <div className="aspect-video w-full">
                    <iframe
                      src={testimonialEntry.videoUrl}
                      title={`${project.title} testimonial video ${testimonialIndex + 1}`}
                      className="h-full w-full"
                      allow="autoplay; fullscreen; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                  {testimonialEntry.caption && (
                    <p className="px-4 py-3 text-sm font-serifalt uppercase tracking-[0.2em] text-white/80">
                      {renderTextWithStyledAmpersand(testimonialEntry.caption)}
                    </p>
                  )}
                </div>
              ) : (
                <blockquote
                  key={`${project.title}-testimonial-quote-${testimonialIndex}`}
                  className="rounded-2xl border border-primary-dark/20 bg-white/80 p-6 text-base text-neutral-dark/80 shadow-sm backdrop-blur"
                >
                  {testimonialEntry.quote && (
                    <p className="font-serif italic leading-relaxed">
                      “{renderTextWithStyledAmpersand(testimonialEntry.quote)}”
                    </p>
                  )}
                  {testimonialEntry.author && (
                    <footer className="mt-3 font-accent uppercase tracking-[0.2em] text-base text-primary-black">
                      {renderTextWithStyledAmpersand(testimonialEntry.author)}
                    </footer>
                  )}
                </blockquote>
              ),
            )}
          </div>
        )}
        <div className="mt-8 flex flex-wrap gap-3">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-primary-dark/40 bg-neutral px-6 py-2 font-accent uppercase tracking-[0.2em] text-white transition-colors hover:bg-primary"
            >
              Live Site
              <ArrowUpRight className="h-4 w-4" />
            </a>
          )}
          {project.caseStudyUrl && (
            <a
              href={project.caseStudyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-primary-dark/40 bg-white/80 px-6 py-2 font-accent uppercase tracking-[0.2em] text-black transition-colors hover:bg-primary-light/70"
            >
              Case Study
              <ArrowUpRight className="h-4 w-4" />
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}

export default function PortfolioSection() {
  const [activeTab, setActiveTab] = useState('websites');
  const activeTabConfig = tabConfig.find((tab) => tab.value === activeTab);
  const activeProjects = activeTabConfig ? projectCollections[activeTabConfig.value] : [];

  return (
    <section
      id="portfolio"
      className="relative overflow-hidden bg-gradient-to-br from-neutral-light via-secondary-light/60 to-primary-light/40 py-28 px-6"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.6),_transparent_60%)]" />

      <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-16">
        <motion.header
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-120px' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="space-y-6"
        >
          <span className="font-accent uppercase tracking-[0.35em] text-lg text-primary-dark/70">
            Portfolio
          </span>
          <div className="flex flex-col gap-4">
            <h2 className="max-w-3xl font-serifalt text-5xl md:text-6xl text-black leading-tight">
              Signature builds that span launch-ready business sites to custom web applications and coding projects.
            </h2>
          </div>
          <div className="h-1 w-24 rounded-full bg-primary-dark/70" />
          <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
            <p className="max-w-3xl font-serifalt text-lg text-neutral-dark/80">
              I ensure
              every project blends thoughtful user experience with high-level quality assurance.
            </p>
            <a
              href="mailto:michaelhanna@gmail.com"
              className="md:ml-5 md:self-end"
            >
              <Button className="rounded-full bg-neutral px-7 py-2 text-base font-accent uppercase tracking-[0.2em] text-white hover:bg-primary transition-colors">
                Work Together
              </Button>
            </a>
          </div>
        </motion.header>

        <div className="grid gap-8 lg:grid-cols-3">
          {featuredProjects.map((project, index) => (
            <FeaturedProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          className="rounded-[36px] border border-primary-dark/10 bg-white/75 p-8 shadow-2xl backdrop-blur"
        >
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between md:gap-6">
            <div className="space-y-1">
              <p className="font-accent uppercase tracking-[0.3em] text-lg text-secondary-dark/80">
                Deep Dive Library
              </p>
              <h3 className="font-serifalt text-3xl text-black leading-tight">
                Explore additional builds by discipline.
              </h3>
            </div>
            
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="mt-8">
            <div className="flex w-full justify-start overflow-x-auto pb-2">
              <TabsList className="flex w-full justify-center gap-6 rounded-full border border-primary-dark/20 bg-white/60 p-2 backdrop-blur">
                {tabConfig.map((tab) => (
                  <TabsTrigger
                    key={tab.value}
                    value={tab.value}
                    className="rounded-full px-6 py-2 font-accent uppercase tracking-[0.15em] text-sm text-neutral-dark data-[state=active]:border data-[state=active]:border-primary-dark/40 data-[state=active]:bg-neutral data-[state=active]:text-white transition-all duration-300"
                  >
                    {tab.label}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            <AnimatePresence mode="wait">
              {activeTabConfig && (
                <TabsContent key={activeTabConfig.value} value={activeTabConfig.value} className="mt-10">
                  <motion.div
                    key={activeTabConfig.value}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4, ease: 'easeOut' }}
                    className="grid gap-8 md:grid-cols-2"
                  >
                    {activeProjects.map((project, index) => (
                      <ProjectCard key={project.title} project={project} index={index} />
                    ))}
                  </motion.div>
                </TabsContent>
              )}
            </AnimatePresence>
          </Tabs>
        </motion.div>
      </div>
    </section>
  );
}
