/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/pages/**/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'pista': '#b03969',
        'pista-light': '#e5719f',
        'c-m-blue': '#1f7374',
        'c-l-blue': '#4fb5c9',
      }
      // backgroundImage: {
      //   'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      //   'gradient-conic':
      //     'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      // },
    },
    screens: {
      '1sm': '320px',
      // => @media (min-width: 640px) { ... }
      'sm': '480px',
      'md': '640px',
      // => @media (min-width: 640px) { ... }
      'lg': '768px',
      // => @media (min-width: 768px) { ... }
      'xl': '1024px',
      // => @media (min-width: 1024px) { ... }
      '2xl': '1280px',
      // => @media (min-width: 1280px) { ... }
      '3xl': '1536px',
    }
  },
  plugins: [],
}
