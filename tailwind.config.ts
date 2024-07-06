import type { Config } from "tailwindcss";
const flowbite = require("flowbite-react/tailwind");

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "rlx-rolex-green": "#006039",
        "rlx-green": "#127749",
        "rlx-ocean-green": "#61BD93",
        "rlx-brown": "#452C1E",
        "rlx-black": "#212121",
        "rlx-dark-grey": "#767676",
        "rlx-grey": "#D4D4D4",
        "rlx-beige": "#F4EFEA",
        "rlx-light-beige": "#F9F7F4",
      },
      fontFamily: {
        "libre-franklin": ["var(--font-libre-franklin)"],
      },
    },
  },
  plugins: [flowbite.plugin()],
};
export default config;
