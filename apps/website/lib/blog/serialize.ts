import { serialize } from "next-mdx-remote/serialize";
import remarkGfm from "remark-gfm";
import remarkDirective from "remark-directive";
import rehypeSlug from "rehype-slug";
import remarkAdmonitions from "./remark-admonitions";
import rehypeTrimCode from "./rehype-trim-code";

export async function serializeMdx(content: string) {
  return serialize(content, {
    mdxOptions: {
      remarkPlugins: [remarkGfm, remarkDirective, remarkAdmonitions],
      rehypePlugins: [rehypeSlug, rehypeTrimCode],
    },
  });
}
