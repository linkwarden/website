import fs from "fs";
import path from "path";
import matter from "gray-matter";

const BLOG_DIR = path.join(process.cwd(), "content", "blog");
const AUTHORS_FILE = path.join(BLOG_DIR, "authors.yml");

export interface Author {
  key: string;
  name: string;
  title?: string;
  url?: string;
  image_url?: string;
  email?: string;
}

export interface PostFrontmatter {
  title?: string;
  description?: string;
  date: string;
  authors?: string | string[];
  tags?: string[];
  image?: string;
  keywords?: string[] | string;
}

export interface PostMeta {
  slug: string;
  slugParts: string[];
  permalink: string;
  filePath: string;
  frontmatter: PostFrontmatter;
  excerpt: string;
  author: Author | null;
}

export interface Post extends PostMeta {
  content: string;
}

function readAuthors(): Record<string, Author> {
  if (!fs.existsSync(AUTHORS_FILE)) return {};
  const raw = fs.readFileSync(AUTHORS_FILE, "utf8");
  const parsed = matter(`---\n${raw}\n---\n`).data as Record<
    string,
    Omit<Author, "key">
  >;
  const out: Record<string, Author> = {};
  for (const [key, value] of Object.entries(parsed)) {
    out[key] = { key, ...value };
  }
  return out;
}

function walk(dir: string, out: string[] = []): string[] {
  if (!fs.existsSync(dir)) return out;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(full, out);
    } else if (entry.isFile() && /\.mdx?$/.test(entry.name)) {
      out.push(full);
    }
  }
  return out;
}

function deriveSlugParts(filePath: string): string[] {
  const rel = path.relative(BLOG_DIR, filePath);
  const noExt = rel.replace(/\.mdx?$/, "");
  return noExt.split(path.sep).filter(Boolean);
}

function extractTitle(content: string, fallback: string): string {
  const match = content.match(/^\s*#\s+(.+?)\s*$/m);
  return match ? match[1].trim() : fallback;
}

function extractExcerpt(content: string): string {
  const truncateIdx = content.indexOf("<!--truncate-->");
  const slice = truncateIdx >= 0 ? content.slice(0, truncateIdx) : content;
  const cleaned = slice
    .replace(/^---[\s\S]*?---\s*/m, "")
    .replace(/^import[^\n]*\n/gm, "")
    .replace(/^\s*#\s+.+$/m, "")
    .replace(/<!--[\s\S]*?-->/g, "")
    .replace(/^:::[\s\S]*?:::$/gm, "")
    .replace(/<[^>]+>/g, "")
    .replace(/!\[[^\]]*\]\([^)]*\)/g, "")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/[*_`>#~]/g, "")
    .replace(/\s+/g, " ")
    .trim();
  return cleaned.length > 280 ? cleaned.slice(0, 277) + "…" : cleaned;
}

export function stripFrontmatterAndImports(raw: string): string {
  return raw
    .replace(/^---[\s\S]*?---\s*/m, "")
    .replace(/^import[^\n]*\n/gm, "")
    // HTML comments are invalid in MDX 2 — drop them (incl. the `<!--truncate-->` marker).
    .replace(/<!--[\s\S]*?-->/g, "")
    // The first `# Title` heading is rendered separately from frontmatter,
    // so remove it from the body to avoid a duplicate H1.
    .replace(/^\s*#\s+.+\n/, "")
    // Inline Docusaurus's `useBaseUrl("/x")` to plain string literals so we don't
    // need to pass a function in `scope` (which must be JSON-serializable).
    .replace(/useBaseUrl\(\s*(['"])([^'"]*)\1\s*\)/g, '$1$2$1');
}

function loadOne(filePath: string, authors: Record<string, Author>): Post {
  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);
  const fm = data as PostFrontmatter;
  if (!fm.date) {
    throw new Error(`Missing 'date' frontmatter in ${filePath}`);
  }
  const slugParts = deriveSlugParts(filePath);
  const slug = slugParts.join("/");
  const permalink = `/blog/${slug}`;

  const authorKey = Array.isArray(fm.authors) ? fm.authors[0] : fm.authors;
  const author = authorKey && authors[authorKey] ? authors[authorKey] : null;

  const title = fm.title ?? extractTitle(content, slugParts[slugParts.length - 1]);
  const excerpt = extractExcerpt(content);

  return {
    slug,
    slugParts,
    permalink,
    filePath,
    frontmatter: { ...fm, title },
    excerpt,
    author,
    content: stripFrontmatterAndImports(raw),
  };
}

let cache: Post[] | null = null;

export function getAllPosts(): Post[] {
  if (cache && process.env.NODE_ENV !== "development") return cache;
  const authors = readAuthors();
  const files = walk(BLOG_DIR);
  const posts = files.map((f) => loadOne(f, authors));
  posts.sort(
    (a, b) =>
      new Date(b.frontmatter.date).getTime() -
      new Date(a.frontmatter.date).getTime(),
  );
  cache = posts;
  return posts;
}

export function getPostBySlug(slugParts: string[]): Post | undefined {
  const slug = slugParts.join("/");
  return getAllPosts().find((p) => p.slug === slug);
}

export function getPostMetas(): PostMeta[] {
  return getAllPosts().map(({ content: _content, ...meta }) => meta);
}
