import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      width: {
        '90p': '90%',
        '95p': '95%',
      },
      maxWidth: {
        'mobile': '600px',
      },
      backgroundColor: {
        'black-light': 'rgb(5, 5, 5)',
      },
      outlineColor: {
        'black-light': 'rgb(5, 5, 5)',
      },
    },
  },
  plugins: [],
};
export default config;
