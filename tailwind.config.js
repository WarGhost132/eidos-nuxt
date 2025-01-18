/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    fontSize: {
      sm: '0.87rem',
      base: '1rem',
      lg: '1.13rem',
      xl: '1.6rem'
    },
    extend: {
      transitionDuration: {
        DEFAULT: '333ms'
      },
      transitionTimingFunction: {
        DEFAULT: 'ease-in-out'
      },
      colors: {
        border: 'var(--border)',
        input: 'var(--input)',
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        sidebar: 'var(--sidebar)',
        primary: {
          DEFAULT: 'var(--primary)',
          foreground: 'var(--primary-foreground)',
        },
        secondary: {
          DEFAULT: 'var(--secondary)',
          foreground: 'var(--secondary-foreground)',
        },
        card: {
          DEFAULT: 'var(--card)',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
    },
  },
  plugins: [],
}

