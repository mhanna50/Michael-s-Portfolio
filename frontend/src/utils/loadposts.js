import { marked } from "marked";

const markdownFiles = import.meta.glob("../posts/*.md", {
  eager: true,
  import: "default",
  query: "?raw",
});

const sanitizeText = (html) =>
  html
    .replace(/<script[\s\S]*?<\/script>/gi, "")
    .replace(/<style[\s\S]*?<\/style>/gi, "")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/gi, " ")
    .replace(/\s+/g, " ")
    .trim();

const createExcerpt = (
  htmlContent,
  { maxSentences = 4, maxWords = 80, maxChars = 420 } = {}
) => {
  const text = sanitizeText(htmlContent);

  if (!text) {
    return "";
  }

  const sentences = text.match(/[^.!?]+[.!?]?/g);
  let excerpt = "";

  if (sentences && sentences.length) {
    excerpt = sentences.slice(0, maxSentences).join(" ").trim();
  }

  if (!excerpt) {
    excerpt = text;
  }

  const words = excerpt.split(/\s+/);
  if (words.length > maxWords) {
    excerpt = words.slice(0, maxWords).join(" ").trim();
  }

  if (excerpt.length > maxChars) {
    excerpt = excerpt.slice(0, maxChars).trim().replace(/[.,!?;:]*$/, "");
  }

  return excerpt;
};

const stripQuotes = (value) => {
  if ((value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))) {
    return value.slice(1, -1);
  }
  return value;
};

const parseFrontMatter = (file) => {
  const lines = file.split(/\r?\n/);
  if (lines[0]?.trim() !== "---") {
    return { data: {}, content: file };
  }

  const closingIndex = lines.findIndex(
    (line, index) => index > 0 && line.trim() === "---"
  );

  if (closingIndex === -1) {
    return { data: {}, content: file };
  }

  const frontMatterLines = lines.slice(1, closingIndex);
  const content = lines.slice(closingIndex + 1).join("\n").trimStart();
  const data = {};

  frontMatterLines.forEach((line) => {
    if (!line.trim()) {
      return;
    }
    const [key, ...rest] = line.split(":");
    if (!key || rest.length === 0) {
      return;
    }
    const rawValue = rest.join(":").trim();
    data[key.trim()] = stripQuotes(rawValue);
  });

  return { data, content };
};

const normalizeSlug = (filePath) =>
  filePath
    .split("/")
    .pop()
    .replace("?raw", "")
    .replace(".md", "");

const parsePost = (slug, file) => {
  const { data, content } = parseFrontMatter(file);
  const htmlContent = marked.parse(content);
  const excerpt = data.excerpt?.trim()
    ? data.excerpt.trim()
    : createExcerpt(htmlContent);

  return {
    ...data,
    slug,
    content: htmlContent,
    excerpt,
  };
};

export function getAllPosts() {
  return Object.entries(markdownFiles)
    .map(([filePath, file]) => {
      const slug = normalizeSlug(filePath);
      return parsePost(slug, file);
    })
    .sort((a, b) => new Date(b.date) - new Date(a.date));
}

export function getPostBySlug(slug) {
  const entry = Object.entries(markdownFiles).find(([filePath]) =>
    normalizeSlug(filePath) === slug
  );

  if (!entry) {
    throw new Error(`Post not found: ${slug}`);
  }

  return parsePost(slug, entry[1]);
}
