import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Linkwarden - Bookmarks, Evolved</title>
        <meta property="og:title" content="Linkwarden - Bookmarks, Evolved" />
        <meta
          property="og:description"
          content="Linkwarden helps you collect, read, annotate, and fully preserve what matters, all in one place."
        />
        <meta
          property="og:image"
          content="https://linkwarden.app/og-image.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@linkwarden_hq" />
        <meta name="twitter:title" content="Linkwarden - Bookmarks, Evolved" />
        <meta
          name="twitter:description"
          content="Linkwarden helps you collect, read, annotate, and fully preserve what matters, all in one place."
        />
        <meta
          name="twitter:image"
          content="https://linkwarden.app/og-image.jpg"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
