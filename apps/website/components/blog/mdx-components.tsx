import Link from "next/link";
import React, { useState } from "react";
import type { MDXRemoteProps } from "next-mdx-remote";

type AnyProps = Record<string, unknown>;

const admonitionStyles: Record<string, { border: string; bg: string; label: string }> = {
  note: {
    border: "border-l-neutral-500",
    bg: "bg-neutral-500/10",
    label: "Note",
  },
  tip: {
    border: "border-l-emerald-500",
    bg: "bg-emerald-500/10",
    label: "Tip",
  },
  info: {
    border: "border-l-sky-500",
    bg: "bg-sky-500/10",
    label: "Info",
  },
  warning: {
    border: "border-l-amber-500",
    bg: "bg-amber-500/10",
    label: "Warning",
  },
  caution: {
    border: "border-l-amber-500",
    bg: "bg-amber-500/10",
    label: "Caution",
  },
  danger: {
    border: "border-l-rose-500",
    bg: "bg-rose-500/10",
    label: "Danger",
  },
};

function Admonition({
  type = "note",
  children,
}: {
  type?: string;
  children?: React.ReactNode;
}) {
  const style = admonitionStyles[type] ?? admonitionStyles.note;
  return (
    <aside
      className={`not-prose my-6 rounded-md border-l-4 ${style.border} ${style.bg} p-4 text-text`}
    >
      <p className="m-0 mb-1 text-sm font-semibold uppercase tracking-wide text-white/90">
        {style.label}
      </p>
      <div className="prose prose-invert prose-sm max-w-none [&_p:last-child]:mb-0 [&_p:first-child]:mt-0">
        {children}
      </div>
    </aside>
  );
}

interface TabItemProps {
  label?: string;
  value?: string;
  default?: boolean;
  children?: React.ReactNode;
}

function TabItem(props: TabItemProps) {
  // Rendered by parent <Tabs>; this is a no-op when used outside.
  return <>{props.children}</>;
}

function Tabs({ children }: { children?: React.ReactNode }) {
  const items = React.Children.toArray(children).filter(
    (c): c is React.ReactElement<TabItemProps> =>
      React.isValidElement(c) && (c.type as { displayName?: string }).displayName === "TabItem",
  );

  const initial = items.findIndex((c) => c.props.default);
  const [active, setActive] = useState(initial >= 0 ? initial : 0);

  if (items.length === 0) return null;

  return (
    <div className="not-prose my-6 overflow-hidden rounded-md border border-outline">
      <div className="flex flex-wrap gap-1 border-b border-outline bg-black/30 p-1">
        {items.map((item, idx) => {
          const isActive = idx === active;
          return (
            <button
              key={item.props.value ?? idx}
              onClick={() => setActive(idx)}
              className={`rounded px-3 py-1 text-sm font-medium transition-colors ${
                isActive
                  ? "bg-secondary/20 text-secondary"
                  : "text-text hover:bg-white/5"
              }`}
              type="button"
            >
              {item.props.label ?? item.props.value ?? `Tab ${idx + 1}`}
            </button>
          );
        })}
      </div>
      <div className="p-4 text-text">{items[active]}</div>
    </div>
  );
}

TabItem.displayName = "TabItem";
Tabs.displayName = "Tabs";

function MdxLink({ href = "", children, ...rest }: AnyProps & { href?: string; children?: React.ReactNode }) {
  const isExternal = /^https?:\/\//.test(href) || href.startsWith("mailto:");
  if (isExternal) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" {...rest}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} {...rest}>
      {children}
    </Link>
  );
}

function MdxImg(props: React.ImgHTMLAttributes<HTMLImageElement>) {
  // eslint-disable-next-line @next/next/no-img-element
  return <img loading="lazy" alt={props.alt ?? ""} {...props} />;
}

export const mdxComponents: MDXRemoteProps["components"] = {
  admonition: Admonition as never,
  Tabs,
  TabItem,
  a: MdxLink as never,
  img: MdxImg as never,
};
