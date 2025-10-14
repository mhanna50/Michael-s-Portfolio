import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";

const postsDir = path.join(import.meta.dirname, "../../posts");

export function getAllPosts() {
  const files = fs.readdirSync(postsDir);
  return files.map((filename) => {
    const filePath = path.join(postsDir, filename);
    const file = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(file);
    const slug = filename.replace(".md", "");
    return {
      ...data,
      slug,
      content: marked(content),
    };
  }).sort((a, b) => new Date(b.date) - new Date(a.date));
}

export function getPostBySlug(slug) {
  const filePath = path.join(postsDir, `${slug}.md`);
  const file = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(file);
  return { ...data, content: marked(content) };
}
