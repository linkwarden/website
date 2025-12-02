import React from "react";
import Header from "@theme-original/BlogPostItem/Header";
import Link from "@docusaurus/Link";
import { useBlogPost } from "@docusaurus/theme-common/internal";
import styles from "./styles.module.css";

export default function BlogPostItemHeaderWrapper(props) {
  const { metadata, isBlogPostPage } = useBlogPost();

  if (!isBlogPostPage) {
    return <Header {...props} />;
  }

  return (
    <>
      <nav className={styles.breadcrumb}>
        <Link to="/" className={styles.breadcrumbLink}>
          Blog
        </Link>
        <span className={styles.separator}>›</span>
        <span className={styles.current}>{metadata.title}</span>
      </nav>

      <Header {...props} />
    </>
  );
}
