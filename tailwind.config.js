/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    container: {
      center: true,
      width: '76rem',
    },
    extend: {
      colors: {
        primary: {
          100: '#E2BEFF',
          600: '#7941A7',
        },
        success: {
          200: '#9EFFBF',
        },
        info: {
          600: '#1059C8',
        },
        neutral: {
          100: '#F3F3F3',
          400: '#868686',
          900: '#232323',
          950: '#101010',
        },
      }
    },
  },
  plugins: [],
}

