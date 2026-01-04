// @ts-check

const lightCodeTheme = require("prism-react-renderer").themes.github;
const darkCodeTheme = require("prism-react-renderer").themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Linkwarden Blog",
  favicon: "img/favicon.ico",
  url: "https://linkwarden.github.io",
  baseUrl: "/blog/",
  organizationName: "linkwarden",
  projectName: "blog",
  trailingSlash: false,
  deploymentBranch: "deployment",
  scripts: [
    {
      src: "https://linkwarden-meta.xyz/js/script.js",
      async: true,
      defer: true,
      "data-domain": "linkwarden.app",
    },
  ],
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        blog: {
          blogSidebarCount: 0,
          routeBasePath: "/",
        },
        docs: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: "dark",
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      image: "img/logo.png",
      navbar: {
        title: "Linkwarden",
        logo: {
          alt: "Linkwarden Logo",
          src: "img/logo.png",
        },
        items: [
          {
            href: "/",
            label: "Blog",
            position: "left",
          },
          {
            to: "https://linkwarden.app",
            label: "Website",
            position: "left",
            target: "_self",
          },
          {
            href: "https://docs.linkwarden.app",
            label: "Docs",
            position: "right",
          },
          {
            href: "https://github.com/linkwarden/linkwarden",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        links: [
          {
            title: "Product",
            items: [
              {
                label: "Linkwarden",
                to: "https://linkwarden.app",
                target: "_self",
              },
              {
                label: "Features",
                to: "https://linkwarden.app/#features",
                target: "_self",
              },
              {
                label: "Pricing",
                to: "https://linkwarden.app/#pricing",
                target: "_self",
              },
              {
                label: "FAQs",
                to: "https://linkwarden.app/#faqs",
                target: "_self",
              },
              {
                label: "Docs",
                href: "https://docs.linkwarden.app",
                target: "_self",
              },
            ],
          },
          {
            title: "Social",
            items: [
              {
                label: "Discord",
                to: "https://discord.gg/CtuYV47nuJ",
              },
              {
                label: "Mastodon",
                to: "https://fosstodon.org/@linkwarden",
              },
              {
                label: "X (Twitter)",
                to: "https://x.com/LinkwardenHQ",
              },
              {
                label: "LinkedIn",
                to: "https://www.linkedin.com/company/linkwarden",
              },
              {
                label: "Bluesky",
                to: "https://bsky.app/profile/linkwarden.bsky.social",
              },
              {
                label: "GitHub",
                to: "https://github.com/linkwarden/linkwarden",
              },
            ],
          },
          {
            title: "Comparison",
            items: [
              {
                label: "Bookmarks vs Linkwarden",
                to: "https://linkwarden.app/compare/linkwarden-vs-bookmarks",
                target: "_self",
              },
              {
                label: "Pocket vs Linkwarden",
                to: "https://linkwarden.app/compare/linkwarden-vs-pocket",
                target: "_self",
              },
              {
                label: "Raindrop vs Linkwarden",
                to: "https://linkwarden.app/compare/linkwarden-vs-raindrop",
                target: "_self",
              },
              {
                label: "Pinboard vs Linkwarden",
                to: "https://linkwarden.app/compare/linkwarden-vs-pinboard",
                target: "_self",
              },
            ],
          },
        ],
        copyright: `© ${new Date().getFullYear()} Linkwarden. All rights reserved.`,
      },
      prism: {
        theme: darkCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
