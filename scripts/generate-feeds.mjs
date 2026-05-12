#!/usr/bin/env node
/* eslint-disable no-console */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import matter from "gray-matter";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const WEBSITE_DIR = path.join(ROOT, "apps", "website");
const PUBLIC_DIR = path.join(WEBSITE_DIR, "public");
const PAGES_DIR = path.join(WEBSITE_DIR, "pages");
const BLOG_DIR = path.join(WEBSITE_DIR, "content", "blog");
const AUTHORS_FILE = path.join(BLOG_DIR, "authors.yml");

const SITE_URL = "https://linkwarden.app";
const BLOG_TITLE = "Linkwarden Blog";
const BLOG_DESCRIPTION =
  "Product updates, release notes, and articles from the Linkwarden team.";

// Pages that exist but should never appear in the sitemap.
const SITEMAP_EXCLUDE = new Set([
  "/_app",
  "/_document",
  "/_error",
  "/404",
  "/500",
]);

function sitemapMetaFor(url) {
  if (url === "/") return { priority: "1.0", changefreq: "weekly" };
  if (url === "/blog") return { priority: "0.9", changefreq: "weekly" };
  if (url.startsWith("/blog/")) return { priority: "0.7", changefreq: "monthly" };
  if (url === "/privacy-policy" || url === "/tos")
    return { priority: "0.3", changefreq: "yearly" };
  return { priority: "0.6", changefreq: "monthly" };
}

function escapeXml(s) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function readAuthors() {
  if (!fs.existsSync(AUTHORS_FILE)) return {};
  const raw = fs.readFileSync(AUTHORS_FILE, "utf8");
  return matter(`---\n${raw}\n---\n`).data ?? {};
}

function walkPages(dir, baseUrl = "") {
  const out = [];
  if (!fs.existsSync(dir)) return out;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      out.push(...walkPages(full, `${baseUrl}/${entry.name}`));
      continue;
    }
    if (!entry.isFile()) continue;
    if (!/\.(tsx?|jsx?|mdx?)$/.test(entry.name)) continue;
    const base = entry.name.replace(/\.(tsx?|jsx?|mdx?)$/, "");
    // Dynamic routes (`[...slug]`, `[id]`) — skip, handled separately for /blog.
    if (/[\[\]]/.test(base)) continue;
    const url = base === "index" ? baseUrl || "/" : `${baseUrl}/${base}`;
    if (SITEMAP_EXCLUDE.has(url)) continue;
    out.push(url);
  }
  return out;
}

function walkBlog(dir, out = []) {
  if (!fs.existsSync(dir)) return out;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walkBlog(full, out);
    else if (entry.isFile() && /\.mdx?$/.test(entry.name)) out.push(full);
  }
  return out;
}

function extractTitle(content, fallback) {
  const m = content.match(/^\s*#\s+(.+?)\s*$/m);
  return m ? m[1].trim() : fallback;
}

function extractExcerpt(content) {
  const idx = content.indexOf("<!--truncate-->");
  const slice = idx >= 0 ? content.slice(0, idx) : content;
  return slice
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
    .trim()
    .slice(0, 500);
}

function loadPosts() {
  const authors = readAuthors();
  return walkBlog(BLOG_DIR)
    .map((filePath) => {
      const raw = fs.readFileSync(filePath, "utf8");
      const { data, content } = matter(raw);
      if (!data.date) return null;
      const rel = path.relative(BLOG_DIR, filePath).replace(/\.mdx?$/, "");
      const slug = rel.split(path.sep).join("/");
      const permalink = `/blog/${slug}`;
      const title = data.title ?? extractTitle(content, slug);
      const authorKey = Array.isArray(data.authors) ? data.authors[0] : data.authors;
      const author = authorKey && authors[authorKey] ? authors[authorKey] : null;
      return {
        slug,
        permalink,
        url: `${SITE_URL}${permalink}`,
        title,
        description: data.description ?? extractExcerpt(content),
        date: new Date(data.date),
        image: data.image,
        tags: data.tags ?? [],
        author,
      };
    })
    .filter(Boolean)
    .sort((a, b) => b.date - a.date);
}

function buildSitemap(posts) {
  const lastBlogUpdate = posts[0]?.date.toISOString();
  const postLastmodBySlug = new Map(
    posts.map((p) => [p.permalink, p.date.toISOString()]),
  );

  const staticRoutes = walkPages(PAGES_DIR);
  const postRoutes = posts.map((p) => p.permalink);
  const allRoutes = Array.from(new Set([...staticRoutes, ...postRoutes])).sort();

  const urls = allRoutes.map((url) => {
    const meta = sitemapMetaFor(url);
    const lastmod =
      url === "/blog" ? lastBlogUpdate : postLastmodBySlug.get(url);
    return {
      loc: `${SITE_URL}${url}`,
      lastmod,
      changefreq: meta.changefreq,
      priority: meta.priority,
    };
  });

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) => `  <url>
    <loc>${escapeXml(u.loc)}</loc>${u.lastmod ? `\n    <lastmod>${u.lastmod}</lastmod>` : ""}
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`,
  )
  .join("\n")}
</urlset>
`;
}

function buildRss(posts) {
  const lastBuildDate = posts[0]?.date.toUTCString() ?? new Date().toUTCString();
  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:content="http://purl.org/rss/1.0/modules/content/" xmlns:dc="http://purl.org/dc/elements/1.1/">
<channel>
  <title>${escapeXml(BLOG_TITLE)}</title>
  <link>${SITE_URL}/blog</link>
  <description>${escapeXml(BLOG_DESCRIPTION)}</description>
  <language>en</language>
  <lastBuildDate>${lastBuildDate}</lastBuildDate>
  <atom:link href="${SITE_URL}/blog/rss.xml" rel="self" type="application/rss+xml" />
${posts
  .map(
    (p) => `  <item>
    <title>${escapeXml(p.title)}</title>
    <link>${p.url}</link>
    <guid isPermaLink="true">${p.url}</guid>
    <pubDate>${p.date.toUTCString()}</pubDate>${p.author?.name ? `\n    <dc:creator>${escapeXml(p.author.name)}</dc:creator>` : ""}
    <description>${escapeXml(p.description)}</description>${p.tags.map((t) => `\n    <category>${escapeXml(t)}</category>`).join("")}
  </item>`,
  )
  .join("\n")}
</channel>
</rss>
`;
}

function buildAtom(posts) {
  const updated = posts[0]?.date.toISOString() ?? new Date().toISOString();
  return `<?xml version="1.0" encoding="UTF-8"?>
<feed xmlns="http://www.w3.org/2005/Atom">
  <id>${SITE_URL}/blog</id>
  <title>${escapeXml(BLOG_TITLE)}</title>
  <subtitle>${escapeXml(BLOG_DESCRIPTION)}</subtitle>
  <link href="${SITE_URL}/blog" />
  <link href="${SITE_URL}/blog/atom.xml" rel="self" type="application/atom+xml" />
  <updated>${updated}</updated>
${posts
  .map(
    (p) => `  <entry>
    <id>${p.url}</id>
    <title>${escapeXml(p.title)}</title>
    <link href="${p.url}" />
    <published>${p.date.toISOString()}</published>
    <updated>${p.date.toISOString()}</updated>${p.author?.name ? `\n    <author><name>${escapeXml(p.author.name)}</name>${p.author.url ? `<uri>${escapeXml(p.author.url)}</uri>` : ""}</author>` : ""}
    <summary>${escapeXml(p.description)}</summary>${p.tags.map((t) => `\n    <category term="${escapeXml(t)}" />`).join("")}
  </entry>`,
  )
  .join("\n")}
</feed>
`;
}

function main() {
  const posts = loadPosts();
  console.log(`Generating feeds for ${posts.length} posts…`);

  fs.mkdirSync(path.join(PUBLIC_DIR, "blog"), { recursive: true });
  fs.writeFileSync(path.join(PUBLIC_DIR, "sitemap.xml"), buildSitemap(posts));
  fs.writeFileSync(path.join(PUBLIC_DIR, "blog", "rss.xml"), buildRss(posts));
  fs.writeFileSync(path.join(PUBLIC_DIR, "blog", "atom.xml"), buildAtom(posts));

  console.log(`✓ wrote public/sitemap.xml, public/blog/rss.xml, public/blog/atom.xml`);
}

main();
