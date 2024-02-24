import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      
    },
    colors : {
      'shade-brown' : '#48442F',
      'dark-cyan' : '#2D7371',
      'med-sea' : '#76C479',
      'mint-green' : '#94D777',
      'grass-green' : '#D5F48A',
    }
  },
  plugins: [],
};
export default config;