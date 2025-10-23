import React from "react";
import { ArrowLeft } from "lucide-react";
import { getPostBySlug } from "../../utils/loadposts";
import { formatReadableDate } from "../../utils/formatDate";
import Footer from "../Footer";

export default function BlogPost({ slug }) {
  let post;

  try {
    post = getPostBySlug(slug);
  } catch (error) {
    console.error(error);
    return (
      <>
        <main className="min-h-[200dvh] bg-gradient-to-br from-neutral-light via-secondary-light/40 to-primary-light/60 px-6 py-24 text-neutral">
          <div className="mx-auto max-w-3xl rounded-[2.5rem] border border-primary-dark/20 bg-white/80 p-12 text-center shadow-2xl backdrop-blur-sm">
            <h1 className="font-serifalt text-3xl text-neutral">Post unavailable.</h1>
            <p className="mt-6 font-serifalt text-base text-neutral/70">
              The entry you were looking for has been moved or no longer exists. Please return to the journal
              for the latest updates.
            </p>
            <a
              href="/blog"
              className="mt-8 inline-flex items-center gap-3 rounded-full border border-primary-dark/30 bg-neutral/5 px-6 py-2 font-accent text-xs uppercase tracking-[0.3em] text-primary-dark transition-all duration-300 hover:border-primary hover:bg-primary hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back to blog</span>
            </a>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <main className="min-h-[200dvh] bg-gradient-to-br from-neutral-light via-secondary-light/40 to-primary-light/60 px-6 py-24 text-neutral">
        <div className="mx-auto flex max-w-4xl flex-col gap-8">
          <div>
            <a
              href="/blog"
              className="group inline-flex items-center gap-3 rounded-full border border-primary-dark/30 bg-neutral/5 px-5 py-2 font-accent text-md uppercase tracking-[0.3em] text-primary-dark transition-all duration-300 hover:border-primary hover:bg-primary hover:text-white"
            >
              <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
              <span>Back to journal</span>
            </a>
          </div>

          <article className="rounded-[3rem] border border-primary-dark/20 bg-white/80 p-12 shadow-2xl backdrop-blur-sm">
            <header className="space-y-6">
              <p className="font-accent uppercase tracking-[0.35em] text-xs text-secondary-dark/80">
                {formatReadableDate(post.date)}
              </p>
              <h1 className="font-serifalt text-4xl leading-tight text-neutral md:text-5xl">
                {post.title}
              </h1>
              {post.description && (
                <p className="font-serifalt text-lg leading-relaxed text-neutral/70">
                  {post.description}
                </p>
              )}
              <div className="h-1 w-20 rounded-full bg-primary-dark/50" />
            </header>

            {post.previewImage && (
              <div className="mt-10 h-60 overflow-hidden rounded-[2.5rem] border border-primary-dark/15 bg-neutral/5">
                <img
                  src={post.previewImage}
                  alt={`Preview for ${post.title}`}
                  className="w-full object-cover"
                />
              </div>
            )}

            <div
              className="blog-post-body mt-10 text-lg font-serifalt leading-relaxed text-neutral/80"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </article>
        </div>
      </main>
      <Footer />
    </>
  );
}
