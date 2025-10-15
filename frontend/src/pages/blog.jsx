import React from "react";
import { ArrowUpRight } from "lucide-react";
import BlogList from "../components/BlogTools/BlogList";
import { getAllPosts } from "../utils/loadposts";
import { formatReadableDate } from "../utils/formatDate";

export default function Blog() {
  const posts = getAllPosts();
  const featuredPost = posts[0];

  return (
    <main className="min-h-screen bg-gradient-to-br from-neutral-light via-secondary-light/40 to-primary-light/60 text-neutral">
      <section className="relative overflow-hidden px-6 pt-10 pb-12 md:pt-12 md:pb-16">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.75),_transparent_55%)]" />
        <div className="relative mx-auto max-w-6xl space-x-2 space-y-10">
          <nav className="flex items-center justify-between text-sm font-accent uppercase tracking-[0.28em] text-primary-dark/70">
            <a
              href="/"
              className="inline-flex items-center gap-3 rounded-full border border-primary-dark/30 bg-white/65 px-6 py-3 text-base text-primary-dark transition-all duration-300 hover:border-primary hover:bg-primary hover:text-white"
            >
              <span className="text-xl leading-none">←</span>
              <span>Back Home</span>
            </a>
            <a
              href="#all-posts"
              className="hidden md:inline-flex items-center gap-3 rounded-full border border-primary-dark/30 bg-white/65 px-6 py-3 text-base text-primary-dark transition-all duration-300 hover:border-primary hover:bg-primary hover:text-white"
            >
              <span>All Articles</span>
              <ArrowUpRight className="h-5 w-5" />
            </a>
          </nav>

          <header className="max-w-4xl space-y-6 ">
            <p className="font-accent uppercase tracking-[0.35em] text-md text-primary-dark/70">
              Studio Journal
            </p>
            <h1 className="font-serifalt text-5xl md:text-6xl lg:text-7xl tracking-tight text-black">
              Notes on design systems, creative development, and polished delivery.
            </h1>
            <div className="h-1 w-24 rounded-full bg-primary-dark/60" />
            <p className="font-serifalt text-xl leading-relaxed text-neutral/75">
              A space to document the thinking, process, and craft lessons from building immersive,
              performance-minded experiences. Each entry connects the dots between UX strategy,
              refined visuals, and production-quality code.
            </p>
          </header>

          {featuredPost && (
            <div className="grid gap-10 rounded-[3rem] border border-primary-dark/20 bg-white/70 p-6 shadow-2xl backdrop-blur-sm md:grid-cols-[0.55fr,0.45fr] lg:grid-cols-[0.45fr,0.55fr] lg:gap-14">
              <div className="flex flex-col gap-6 rounded-[2rem] bg-white/0 px-6 py-6 sm:px-8 lg:gap-8 lg:justify-center lg:pl-12 lg:pr-6 lg:py-10">
                <div className="flex flex-col gap-5">
                  <p className="font-accent uppercase tracking-[0.35em] text-sm text-secondary-dark">
                    Latest entry · {formatReadableDate(featuredPost.date)}
                  </p>
                  <h2 className="font-serifalt text-4xl leading-tight text-neutral">
                    {featuredPost.title}
                  </h2>
                </div>

                {featuredPost.description && (
                  <p className="font-serifalt text-lg leading-relaxed text-neutral/75 lg:text-xl lg:leading-loose -my-1">
                    {featuredPost.description}
                  </p>
                )}

                <a
                  href={`/blog/${featuredPost.slug}`}
                  className="group inline-flex items-center gap-3 self-start rounded-full border border-primary-dark/30 bg-neutral/5 px-5 py-2 font-accent text-base uppercase tracking-[0.3em] text-primary-dark transition-all duration-300 hover:border-primary hover:bg-primary hover:text-white"
                >
                  <span>Read the article</span>
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </a>
              </div>
              <div className="flex w-full flex-col overflow-hidden rounded-[2.25rem] border border-secondary-dark/30 bg-gradient-to-br from-white/90 via-white/70 to-secondary-light/50 text-sm font-serifalt text-neutral/70">
                {featuredPost.previewImage && (
                  <img
                    src={featuredPost.previewImage}
                    alt={`Preview for ${featuredPost.title}`}
                    className="h-40 w-full object-cover sm:h-40 md:h-40 lg:h-40"
                  />
                )}
                <div className="flex flex-1 flex-col gap-6 p-6 md:p-8">
                  {featuredPost.excerpt ? (
                    <p className="line-clamp-4 break-words text-base leading-relaxed text-neutral/75">
                      {featuredPost.excerpt}
                    </p>
                  ) : (
                    <p className="line-clamp-4 break-words text-base leading-relaxed text-neutral/75">
                      {featuredPost.description ??
                        "Explore the journal for insights into the thinking and craft behind each build."}
                    </p>
                  )}
                </div>
              </div>
            </div>
          )}

          <div className="flex items-center justify-center">
            <svg
              className="h-12 w-24 animate-bounce-slow text-neutral/45"
              viewBox="0 0 120 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 18L60 42L102 18"
                stroke="currentColor"
                strokeWidth="7"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </section>

      <section
        className="relative overflow-hidden bg-neutral-light px-6 pb-24 pt-12 sm:pt-16 md:pt-24"
        id="all-posts"
      >
        <div className="pointer-events-none absolute inset-x-0 top-0 h-40 -translate-y-1/2 bg-gradient-to-b from-white/80 via-white/40 to-transparent" />
        <div className="relative mx-auto max-w-6xl">
          <BlogList posts={posts} />
        </div>
      </section>
    </main>
  );
}
