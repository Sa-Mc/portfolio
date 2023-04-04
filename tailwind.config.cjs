/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    styled: true,
    themes: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    themes: [
      {
        mytheme: {
          "primary": "#FFFFFF",
          "primary-focus": "#E3E1DE",
          "secondary": "#5384E2",
          "accent": "#E34A6F",
          "neutral": "#E3E1DE",
          "base-100": "#060522",
          "info": "#2B59C3",
          "success": "#04724D",
          "warning": "#FDCA40",
          "error": "#DE3C4B",
          "p": "#B2B0F0",
          "a": "#E3E1DE",
        },
      },
    ],
  },
};
