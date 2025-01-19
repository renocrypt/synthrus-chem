/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,md,mdx}", "./docs/**/*.{md,mdx}"],
  darkMode: ['class', '[data-theme="dark"]'], // Support Docusaurus dark mode
  theme: {
    extend: {},
  },
  plugins: [],
  corePlugins: {
    preflight: false, // Disable Tailwind's reset to avoid conflicts with Docusaurus
  },
  blocklist: [
    'container' // Avoid conflicts with Docusaurus container
  ],
}; 