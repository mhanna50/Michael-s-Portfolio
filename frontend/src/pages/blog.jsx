import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

const posts = [
  {
    title: 'Design Systems That Scale',
    excerpt:
      'How I approach building component-driven interfaces that stay cohesive as projects grow.',
    date: 'Jan 12, 2025',
  },
  {
    title: 'From Wireframe to Prototype',
    excerpt:
      'A look into my iterative process turning early sketches into polished, testable flows.',
    date: 'Dec 4, 2024',
  },
  {
    title: 'Optimizing UX Hand-off',
    excerpt:
      'Bridging designers and engineers with annotated specs, shared tokens, and automation.',
    date: 'Nov 18, 2024',
  },
];

export default function Blog() {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = 'Blog | Michael - UI/UX Designer';
    document.documentElement.style.scrollBehavior = 'smooth';

    return () => {
      document.title = previousTitle;
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#FAF8F3] text-black">
      <header className="px-6 md:px-12 pt-10 pb-12 border-b border-black/10 bg-gradient-to-r from-secondary-light/40 to-primary-light/20">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex items-start justify-between gap-6 mb-6">
            <p className="font-accent uppercase tracking-[0.3em] text-sm">Insights</p>
            <a
              href="/"
              className="inline-flex items-center gap-2 font-accent uppercase tracking-[0.35em] text-xs sm:text-sm text-black/70 hover:text-black transition-colors duration-200"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Home</span>
            </a>
          </div>
          <h1 className="font-serifalt text-5xl md:text-6xl font-semibold leading-tight mb-6">
            Stories from the studio: process, craft, and continuous learning.
          </h1>
          <p className="font-serifalt text-xl text-neutral-dark max-w-3xl">
            I document the experiments, frameworks, and lessons that shape my approach to creating
            digital products that feel intentional and deliver measurable results.
          </p>
        </motion.div>
      </header>

      <main className="px-6 md:px-12 py-14">
        <div className="max-w-4xl mx-auto space-y-10">
          {posts.map((post, index) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/80 border border-secondary-dark/30 rounded-3xl p-8 shadow-[0_18px_45px_-25px_rgba(15,23,42,0.35)]"
            >
              <p className="font-accent uppercase text-sm tracking-[0.25em] text-neutral mb-3">
                {post.date}
              </p>
              <h2 className="font-serifalt text-3xl md:text-4xl font-semibold mb-4">{post.title}</h2>
              <p className="font-serifalt text-lg text-neutral-dark leading-relaxed mb-6">
                {post.excerpt}
              </p>
              <button
                type="button"
                className="font-accent uppercase text-sm tracking-[0.25em] text-primary-dark hover:text-black transition"
              >
                Read article →
              </button>
            </motion.article>
          ))}
        </div>
      </main>
    </div>
  );
}
