import type { GetStaticPaths, GetStaticProps } from "next";
import { MDXRemote, type MDXRemoteSerializeResult } from "next-mdx-remote";
import Link from "next/link";
import SEO from "@/components/SEO";
import PostMeta from "@/components/blog/PostMeta";
import { mdxComponents } from "@/components/blog/mdx-components";
import {
  getAllPosts,
  getPostBySlug,
  type Author,
  type PostFrontmatter,
} from "@/lib/blog/posts";
import { serializeMdx } from "@/lib/blog/serialize";

interface BlogPostProps {
  mdxSource: MDXRemoteSerializeResult;
  frontmatter: PostFrontmatter;
  author: Author | null;
  permalink: string;
}

interface PathParams {
  slug: string[];
  [key: string]: string | string[];
}

export const getStaticPaths: GetStaticPaths<PathParams> = async () => {
  return {
    paths: getAllPosts().map((p) => ({ params: { slug: p.slugParts } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<BlogPostProps, PathParams> = async ({
  params,
}) => {
  if (!params?.slug) return { notFound: true };
  const post = getPostBySlug(params.slug);
  if (!post) return { notFound: true };

  const mdxSource = await serializeMdx(post.content);

  return {
    props: {
      mdxSource,
      frontmatter: post.frontmatter,
      author: post.author,
      permalink: post.permalink,
    },
  };
};

export default function BlogPost({
  mdxSource,
  frontmatter,
  author,
  permalink,
}: BlogPostProps) {
  return (
    <div className="fade-in">
      <SEO
        title={`${frontmatter.title} — Linkwarden Blog`}
        description={frontmatter.description ?? ""}
        path={permalink}
        ogImage={frontmatter.image}
        keywords={Array.from(
          new Set([
            ...(Array.isArray(frontmatter.keywords)
              ? frontmatter.keywords
              : frontmatter.keywords
                ? [frontmatter.keywords]
                : []),
            ...(frontmatter.tags ?? []),
          ]),
        )}
        article={{
          publishedTime: new Date(frontmatter.date).toISOString(),
          authorName: author?.name,
          authorUrl: author?.url,
          tags: frontmatter.tags,
        }}
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
        <Link
          href="/blog"
          className="mb-6 inline-block text-sm text-text/70 hover:text-text"
        >
          ← Back to blog
        </Link>
        <h1 className="mb-4 text-4xl font-bold">{frontmatter.title}</h1>
        <PostMeta
          date={frontmatter.date}
          author={author}
          tags={frontmatter.tags}
        />
        <article className="prose prose-invert mt-10 max-w-none">
          <MDXRemote {...mdxSource} components={mdxComponents} />
        </article>
      </div>
    </div>
  );
}
