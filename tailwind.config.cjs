/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#121034",
          "primary-focus": "#302A82",
          "secondary": "#5384E2",
          "accent": "#52E7D6",
          "neutral": "#0B162D",
          "base-100": "#060522",
          "info": "#76A8F1",
          "success": "#0B4133",
          "warning": "#F2C22E",
          "error": "#6E1530",
          "p": "#BAB8E8",
          "a": "#E3E1DE",
        },
      },
    ],
  },
};
