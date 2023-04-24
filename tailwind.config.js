/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    require("@catppuccin/tailwindcss")({
      defaultFlavour: "latte",
      prefix: "ctp",
    }),
    require("tailwind-scrollbar-hide"),
    require("@tailwindcss/forms"),
  ],
};
