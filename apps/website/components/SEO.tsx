import Head from "next/head";

const SITE_URL = "https://linkwarden.app";
const DEFAULT_OG = "/og-image.jpg";

export interface ArticleMeta {
  publishedTime: string;
  modifiedTime?: string;
  authorName?: string;
  authorUrl?: string;
  tags?: string[];
}

interface SEOProps {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
  noindex?: boolean;
  keywords?: string[];
  article?: ArticleMeta;
  feeds?: Array<{ href: string; title: string; type: "rss" | "atom" }>;
}

export default function SEO({
  title,
  description,
  path,
  ogImage,
  noindex,
  keywords,
  article,
  feeds,
}: SEOProps) {
  const url = `${SITE_URL}${path}`;
  const rawImage = ogImage ?? DEFAULT_OG;
  const image = /^https?:\/\//.test(rawImage) ? rawImage : `${SITE_URL}${rawImage}`;
  const ogType = article ? "article" : "website";

  const jsonLd = article
    ? {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: title,
        description,
        image,
        url,
        datePublished: article.publishedTime,
        dateModified: article.modifiedTime ?? article.publishedTime,
        author: article.authorName
          ? {
              "@type": "Person",
              name: article.authorName,
              ...(article.authorUrl ? { url: article.authorUrl } : {}),
            }
          : undefined,
        publisher: {
          "@type": "Organization",
          name: "Linkwarden",
          logo: {
            "@type": "ImageObject",
            url: `${SITE_URL}/linkwarden.png`,
          },
        },
        keywords: article.tags?.join(", "),
        mainEntityOfPage: { "@type": "WebPage", "@id": url },
      }
    : null;

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && keywords.length > 0 && (
        <meta name="keywords" content={keywords.join(", ")} />
      )}
      <link rel="canonical" href={url} />
      {noindex && <meta name="robots" content="noindex, follow" />}
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content="Linkwarden" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@LinkwardenHQ" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      {article && (
        <>
          <meta
            property="article:published_time"
            content={article.publishedTime}
          />
          {article.modifiedTime && (
            <meta
              property="article:modified_time"
              content={article.modifiedTime}
            />
          )}
          {article.authorName && (
            <meta property="article:author" content={article.authorName} />
          )}
          {article.tags?.map((t) => (
            <meta key={t} property="article:tag" content={t} />
          ))}
        </>
      )}
      {feeds?.map((f) => (
        <link
          key={f.href}
          rel="alternate"
          type={f.type === "rss" ? "application/rss+xml" : "application/atom+xml"}
          href={f.href}
          title={f.title}
        />
      ))}
      {jsonLd && (
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
    </Head>
  );
}
