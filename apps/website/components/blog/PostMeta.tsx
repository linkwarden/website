import Link from "next/link";
import type { Author } from "@/lib/blog/posts";

function formatDate(value: string) {
  const date = new Date(value);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function PostMeta({
  date,
  author,
  tags,
}: {
  date: string;
  author: Author | null;
  tags?: string[];
}) {
  return (
    <div className="not-prose flex flex-wrap items-center gap-3 text-sm text-text/70">
      {author && (
        <div className="flex items-center gap-2">
          {author.image_url && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={author.image_url}
              alt={author.name}
              className="h-8 w-8 rounded-full"
              loading="lazy"
            />
          )}
          <span>
            {author.url ? (
              <Link
                href={author.url}
                target="_blank"
                className="hover:text-text"
              >
                {author.name}
              </Link>
            ) : (
              author.name
            )}
          </span>
        </div>
      )}
      <span className="text-text/40">·</span>
      <time dateTime={date}>{formatDate(date)}</time>
      {tags && tags.length > 0 && (
        <>
          <span className="text-text/40">·</span>
          <div className="flex flex-wrap gap-2">
            {tags.map((t) => (
              <span
                key={t}
                className="rounded-full bg-white/5 px-2 py-0.5 text-xs"
              >
                {t}
              </span>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
