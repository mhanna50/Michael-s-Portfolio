import { useEffect, useMemo, useRef, useState } from "react";
import { ArrowUpRight, Check, ChevronsUpDown } from "lucide-react";
import { getAllPosts } from "../../utils/loadposts";
import { formatReadableDate, parseDateValue } from "../../utils/formatDate";

const getDateValue = (value) => {
  const date = parseDateValue(value);
  return date ? date.getTime() : 0;
};

const SORT_OPTIONS = [
  {
    id: "date-desc",
    label: "Newest → Oldest",
    sortFn: (a, b) => getDateValue(b.date) - getDateValue(a.date),
  },
  {
    id: "date-asc",
    label: "Oldest → Newest",
    sortFn: (a, b) => getDateValue(a.date) - getDateValue(b.date),
  },
];

export default function BlogList({ posts: incomingPosts }) {
  const posts = Array.isArray(incomingPosts) ? incomingPosts : getAllPosts();
  const [selectedSort, setSelectedSort] = useState(SORT_OPTIONS[0]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [animationCycle, setAnimationCycle] = useState(0);
  const menuRef = useRef(null);

  useEffect(() => {
    if (!isMenuOpen) {
      return;
    }

    const handleClickAway = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickAway);
    document.addEventListener("touchstart", handleClickAway);

    return () => {
      document.removeEventListener("mousedown", handleClickAway);
      document.removeEventListener("touchstart", handleClickAway);
    };
  }, [isMenuOpen]);

  useEffect(() => {
    setAnimationCycle((cycle) => cycle + 1);
  }, [posts.length]);

  const sortedPosts = useMemo(() => {
    const sorter = selectedSort?.sortFn ?? SORT_OPTIONS[0].sortFn;
    return [...posts].sort(sorter);
  }, [posts, selectedSort]);

  const handleSortSelect = (option) => {
    setSelectedSort(option);
    setAnimationCycle((cycle) => cycle + 1);
    setIsMenuOpen(false);
  };

  if (!posts.length) {
    return (
      <p className="text-center font-serifalt text-neutral/70">
        Articles will appear here soon. Check back for fresh notes from the studio.
      </p>
    );
  }

  return (
    <div className="space-y-6 md:space-y-8">
      <div className="flex justify-end">
        <div className="relative" ref={menuRef}>
          <button
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            className="inline-flex items-center gap-2 rounded-full border border-primary-dark/30 bg-white/80 px-5 py-2 font-accent text-xs uppercase tracking-[0.35em] text-primary-dark shadow-sm transition-all duration-300 hover:border-primary hover:bg-primary hover:text-white sm:text-sm"
          >
            <span>Sort</span>
            <ChevronsUpDown className="h-4 w-4" />
          </button>

          {isMenuOpen && (
            <div className="absolute right-0 z-20 mt-3 w-56 overflow-hidden rounded-3xl border border-primary-dark/20 bg-white/95 p-1.5 shadow-xl backdrop-blur">
              {SORT_OPTIONS.map((option) => {
                const isActive = option.id === selectedSort?.id;
                return (
                  <button
                    key={option.id}
                    type="button"
                    onClick={() => handleSortSelect(option)}
                    className={`flex w-full items-center justify-between rounded-2xl px-4 py-3 text-left font-serifalt text-sm transition-colors duration-200 ${
                      isActive
                        ? "bg-primary/10 text-primary-dark"
                        : "text-neutral/80 hover:bg-primary/5"
                    }`}
                  >
                    <span>{option.label}</span>
                    {isActive && <Check className="h-4 w-4" />}
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </div>

      <div className="grid gap-10 md:grid-cols-2">
        {sortedPosts.map((post, index) => (
          <article
            key={`${post.slug}-${animationCycle}`}
            className="group relative overflow-hidden rounded-[2.25rem] border border-primary-dark/15 bg-white/75 p-9 shadow-lg backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl animate-fade-up"
            style={{ animationDelay: `${index * 60}ms` }}
          >
            <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-light/20 via-white/5 to-secondary-light/35" />
            </div>

            <div className="relative space-y-6">
              {post.previewImage && (
                <div className="overflow-hidden rounded-[1.75rem] border border-primary-dark/10 bg-neutral/5">
                  <img
                    src={post.previewImage}
                    alt={`Preview for ${post.title}`}
                    className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
              )}

              <p className="font-accent uppercase tracking-[0.35em] text-base text-primary-dark/70">
                {formatReadableDate(post.date)}
              </p>

              <div className="space-y-3">
                <h2 className="font-serifalt text-3xl leading-tight text-neutral">
                  {post.title}
                </h2>
                {post.excerpt && (
                  <p className="line-clamp-2 break-words font-serifalt text-base leading-relaxed text-neutral/70">
                    {post.excerpt}
                  </p>
                )}
              </div>

              <a
                href={`/blog/${post.slug}`}
                className="relative inline-flex items-center gap-3 rounded-full border border-primary-dark/30 bg-neutral/5 px-6 py-2.5 font-accent text-sm uppercase tracking-[0.3em] text-primary-dark transition-all duration-300 hover:border-primary hover:bg-primary hover:text-white"
              >
                <span>Read Article</span>
                <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
