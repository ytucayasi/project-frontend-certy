/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'raleway-light': ['raleway-light','sans-serif'],
      'raleway-medium': ['raleway-medium','sans-serif'],
      'raleway-regular': ['raleway-regular','sans-serif'],
      'raleway-semibold': ['raleway-semibold','sans-serif'],
      'raleway-bold': ['raleway-bold','sans-serif']
    },
    extend: {
      colors: {
        first: '#232428',
        second: '#343436',
        third: '#E3E3E3',
        gold: '#FFD700',
        goldenyellow: '#FFDF00',
        active: '#003366',
        general: '#F5F5F5',
        process: '#FF9900',
      },
      gridColumn: {
        'span-13': 'span 13 / span 13',
        'span-14': 'span 14 / span 14',
        'span-15': 'span 15 / span 15',
        'span-16': 'span 16 / span 16',
      },
      gridTemplateColumns: {
        '13': 'repeat(13, minmax(0, 1fr))',
        '14': 'repeat(14, minmax(0, 1fr))',
        '15': 'repeat(15, minmax(0, 1fr))',
        '16': 'repeat(16, minmax(0, 1fr))',
      },
      screens: {
        'all': '2000px',
        'wmax': '3000px',
      },
    },
  },
  plugins: [],
}