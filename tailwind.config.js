/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        'nav-bg': '#282B4A',
        'nav-text': '#fff',
        'nav-sub-bg': '#D8D8D8',
        'nav-sub-text': '#393939',
      },
    },
  },
  plugins: [],
};
