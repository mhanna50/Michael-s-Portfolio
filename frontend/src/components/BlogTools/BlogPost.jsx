import React from "react";
import { ArrowLeft } from "lucide-react";
import { getPostBySlug } from "../../utils/loadposts";
import { formatReadableDate } from "../../utils/formatDate";
import Footer from "../Footer";

const THEME_TRANSITION = "background 600ms ease, background-color 600ms ease, color 600ms ease, border-color 600ms ease";

const withTransition = (style) => ({
  transition: THEME_TRANSITION,
  ...(style || {}),
});

export default function BlogPost({ slug, mainTheme, theme }) {
  let post;
  const activePageTheme = theme?.page ? theme : mainTheme;
  const blogTheme = theme?.blog || mainTheme?.blog;
  const palette = blogTheme?.palette || {};
  const pageStyle = activePageTheme?.page
    ? {
        background: activePageTheme.page.bg,
        color: activePageTheme.page.text,
      }
    : undefined;
  const articleStyle = blogTheme?.cardBg
    ? withTransition({
        background: blogTheme.cardBg,
        color: blogTheme.cardText ?? blogTheme.text,
        borderColor: palette.cardBorder,
      })
    : undefined;
  const backButtonStyle = palette.buttonBg
    ? withTransition({
        background: palette.buttonBg,
        color: palette.buttonText,
        borderColor: palette.buttonBg,
      })
    : undefined;
  const backButtonHoverStyle = palette.buttonHover
    ? withTransition({
        background: palette.buttonHover,
        color: palette.buttonText,
        borderColor: palette.buttonHover,
      })
    : backButtonStyle;
  const dateStyle = palette.date ? { color: palette.date } : undefined;
  const headingStyle = palette.heading ? { color: palette.heading } : undefined;
  const bodyStyle = palette.body ? { color: palette.body } : undefined;
  const mutedStyle = palette.muted ? { color: palette.muted } : undefined;
  const dividerStyle = palette.divider ? { backgroundColor: palette.divider } : undefined;
  const articleFallbackClass = articleStyle ? "" : "border-primary-dark/20 bg-white/80";
  const backButtonFallbackClass = backButtonStyle
    ? ""
    : "border-primary-dark/30 bg-neutral/5 text-primary-dark hover:border-primary hover:bg-primary hover:text-white";
  const headingFallbackClass = headingStyle ? "" : "text-neutral";
  const bodyFallbackClass = bodyStyle ? "" : "text-white/90";
  const mutedFallbackClass = mutedStyle ? "" : "text-neutral/70";
  const dividerFallbackClass = dividerStyle ? "" : "bg-primary-dark/50";

  const handleButtonHover = (event, entering) => {
    if (!backButtonStyle || !backButtonHoverStyle) return;
    const target = event.currentTarget;
    const styles = entering ? backButtonHoverStyle : backButtonStyle;
    Object.entries(styles).forEach(([prop, value]) => {
      target.style[prop] = value;
    });
  };

  try {
    post = getPostBySlug(slug);
  } catch (error) {
    console.error(error);
    return (
      <>
        <main className="min-h-[200dvh] px-6 py-24" style={pageStyle}>
          <div
            className={`mx-auto max-w-3xl rounded-[2.5rem] border p-12 text-center shadow-2xl backdrop-blur-sm ${articleFallbackClass}`}
            style={articleStyle}
          >
            <h1 className={`font-serifalt text-3xl ${headingFallbackClass}`} style={headingStyle}>
              Post unavailable.
            </h1>
            <p
              className={`mt-6 font-serifalt text-base ${mutedFallbackClass}`}
              style={mutedStyle || bodyStyle}
            >
              The entry you were looking for has been moved or no longer exists. Please return to the journal
              for the latest updates.
            </p>
            <a
              href="/blog"
              className={`mt-8 inline-flex items-center gap-3 rounded-full border px-6 py-2 font-accent text-xs uppercase tracking-[0.3em] transition-all duration-300 ${backButtonFallbackClass}`}
              style={backButtonStyle}
              onMouseEnter={(event) => handleButtonHover(event, true)}
              onMouseLeave={(event) => handleButtonHover(event, false)}
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back to blog</span>
            </a>
          </div>
        </main>
        <Footer theme={theme} mainTheme={mainTheme} />
      </>
    );
  }

  return (
    <>
      <main className="min-h-[200dvh] px-6 py-24" style={pageStyle}>
        <div className="mx-auto flex max-w-4xl flex-col gap-8">
          <div>
            <a
              href="/blog"
              className={`group inline-flex items-center gap-3 rounded-full border px-5 py-2 font-accent text-md uppercase tracking-[0.3em] transition-all duration-300 ${backButtonFallbackClass}`}
              style={backButtonStyle}
              onMouseEnter={(event) => handleButtonHover(event, true)}
              onMouseLeave={(event) => handleButtonHover(event, false)}
            >
              <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
              <span>Back to journal</span>
            </a>
          </div>

          <article
            className={`rounded-[3rem] border p-12 shadow-2xl backdrop-blur-sm transition-colors duration-500 ${articleFallbackClass}`}
            style={articleStyle}
          >
            <header className="space-y-6">
              <p
                className={`font-accent uppercase tracking-[0.35em] text-base ${dateStyle ? "" : "text-neutral/60"}`}
                style={dateStyle}
              >
                {formatReadableDate(post.date)}
              </p>
              <h1
                className={`font-serifalt text-4xl leading-tight md:text-5xl ${headingFallbackClass}`}
                style={headingStyle}
              >
                {post.title}
              </h1>
              {post.description && (
                <p
                  className={`font-serifalt text-lg leading-relaxed ${mutedFallbackClass}`}
                  style={mutedStyle || bodyStyle}
                >
                  {post.description}
                </p>
              )}
              <div
                className={`h-1 w-20 rounded-full ${dividerFallbackClass}`}
                style={dividerStyle}
              />
            </header>

            {post.previewImage && (
              <div className="mt-10 h-60 overflow-hidden rounded-[2.5rem] border border-white/10 bg-black/20">
                <img
                  src={post.previewImage}
                  alt={`Preview for ${post.title}`}
                  className="w-full object-cover"
                />
              </div>
            )}

            <div
              className={`blog-post-body mt-10 text-lg font-serifalt leading-relaxed ${bodyFallbackClass}`}
              style={bodyStyle}
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </article>
        </div>
      </main>
      <Footer theme={theme} mainTheme={mainTheme} />
    </>
  );
}
