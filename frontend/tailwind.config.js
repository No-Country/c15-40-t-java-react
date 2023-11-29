/** @type {import('tailwindcss').Config} */

const { nextui } = require('@nextui-org/react');

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {}
  },
  plugins: [nextui({
    themes: {
      light: {
        colors: {
          primary: '#a855f7', // purple-500 en tailwind
          secondary: '#d946ef', // fuchsia-500 en tailwind
          warning: '#f97316' // orange-500 en tailwind
        }
      }
    }
  })]
};
