/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        '1D3557': '#1D3557',
        '457B9D': '#457B9D',
        'A8DADC': '#A8DADC',
      },
    },
  },
  plugins: [],
}