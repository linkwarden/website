import Link from "next/link";
import type { GetStaticProps } from "next";
import { RssIcon } from "@phosphor-icons/react";
import SEO from "@/components/SEO";
import PostMeta from "@/components/blog/PostMeta";
import { getPostMetas, type PostMeta as PostMetaType } from "@/lib/blog/posts";

interface BlogIndexProps {
  posts: PostMetaType[];
}

export const getStaticProps: GetStaticProps<BlogIndexProps> = async () => {
  return { props: { posts: getPostMetas() } };
};

export default function BlogIndex({ posts }: BlogIndexProps) {
  return (
    <div className="fade-in">
      <SEO
        title="Blog — Linkwarden"
        description="Product updates, release notes, and articles from the Linkwarden team."
        path="/blog"
        feeds={[
          {
            href: "/blog/rss.xml",
            title: "Linkwarden Blog RSS Feed",
            type: "rss",
          },
          {
            href: "/blog/atom.xml",
            title: "Linkwarden Blog Atom Feed",
            type: "atom",
          },
        ]}
      />
      <div className="mx-auto max-w-3xl px-5 pt-28 pb-10">
        <div className="mb-2 flex items-center w-full justify-between gap-3">
          <h1 className="text-4xl font-bold">Blog</h1>
          <a
            href="/blog/rss.xml"
            title="Subscribe via RSS"
            aria-label="Subscribe via RSS"
            className="text-text/60 hover:text-secondary duration-100"
          >
            <RssIcon size={25} weight="fill" />
          </a>
        </div>
        <p className="mb-10 text-text/70">
          Product updates, release notes, and articles from the Linkwarden team.
        </p>
        <div className="flex flex-col gap-10">
          {posts.map((post) => (
            <article
              key={post.permalink}
              className="border-b border-outline pb-10 last:border-b-0"
            >
              <h2 className="mb-3 text-2xl font-semibold">
                <Link href={post.permalink} className="hover:text-secondary">
                  {post.frontmatter.title}
                </Link>
              </h2>
              <PostMeta
                date={post.frontmatter.date}
                author={post.author}
                tags={post.frontmatter.tags}
              />
              {post.excerpt && (
                <p className="mt-4 text-text/80">{post.excerpt}</p>
              )}
              <Link
                href={post.permalink}
                className="mt-4 inline-block text-sm font-medium text-secondary hover:opacity-80"
              >
                Read more →
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
