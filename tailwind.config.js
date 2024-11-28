/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        serif: ['Fraunces', 'serif']
      },
      colors: {
        'dark-cyan': '#3C8067',
        'dark-teal': '#1a4031',
        'cream': '#F2EBE3',
        'very-dark-blue': '#1C232B',
        'dark-grayish-blue': '#6C7289'
      },
      fontSize: {
        '3xl': '2rem'
      },
      letterSpacing: {
        widest: '4.5px'
      },
      maxWidth: {
        card: '600px'
      }
    },
  },
  plugins: [],
}

