/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        graphik: ["Graphik","sans-serif"],
        "graphik-bold": ["Graphik-bold", "sans-serif"]
      },
      colors:{
        primary:'#2891F9',
        text: '#252B42',
        'secondary-text':'#374756',
        'dark-background':'#252B42'
      }
    },
  },
  plugins: [],
}