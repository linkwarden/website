/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        text: "#CECECE",
        outline: "#43484B",
        background: "#111111",
        secondary: "#79C5FC",
      },
      typography: ({ theme }) => ({
        invert: {
          css: {
            "--tw-prose-body": "#CECECE",
            "--tw-prose-headings": "#FFFFFF",
            "--tw-prose-lead": "#CECECE",
            "--tw-prose-links": "#79C5FC",
            "--tw-prose-bold": "#FFFFFF",
            "--tw-prose-counters": "#CECECE",
            "--tw-prose-bullets": "#43484B",
            "--tw-prose-hr": "#43484B",
            "--tw-prose-quotes": "#CECECE",
            "--tw-prose-quote-borders": "#43484B",
            "--tw-prose-captions": "#9CA3AF",
            "--tw-prose-code": "#FFFFFF",
            "--tw-prose-pre-code": "#E5E7EB",
            "--tw-prose-pre-bg": "#1F2937",
            "--tw-prose-th-borders": "#43484B",
            "--tw-prose-td-borders": "#2A2F32",
            a: {
              textDecoration: "none",
              "&:hover": { opacity: 0.8 },
            },
            "code::before": { content: '""' },
            "code::after": { content: '""' },
            code: {
              backgroundColor: "rgba(255,255,255,0.08)",
              padding: "0.15em 0.4em",
              borderRadius: "0.25rem",
              fontWeight: "400",
            },
            img: { borderRadius: "0.375rem" },
            video: { borderRadius: "0.375rem" },
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
