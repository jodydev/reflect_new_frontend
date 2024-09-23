module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FFBF55", // Giallo scuro
        secondary: "#F0C889", // Giallo chiaro
        tertiary: "#DFDDDD", // Grigio chiaro (sfondo)
        dark: "#121212", // Testo nero
      },
      fontFamily: {
        involve: ['Involve-Regular', 'sans-serif'],
      },
      fontWeight: {
        regular: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
      },
      boxShadow: {
        glass: "0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.06)",
      },
      keyframes: {
        spin: {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        moveX: {
          from: { left: '0' },
          to: { left: '100%' },
        },
        moveY: {
          from: { top: '0' },
          to: { top: '100%' },
        },
      },
      animation: {
        spin: 'spin 60s linear infinite',  
        ball1: 'moveX 6.45s ease-in-out infinite alternate, moveY 7.4s ease-in-out infinite alternate',
        ball2: 'moveX 11.45s ease-in-out infinite alternate, moveY 9.4s ease-in-out infinite alternate',
        ball3: 'moveX 8.15s linear infinite alternate, moveY 5.8s linear infinite alternate',
        ball4: 'moveX 10.09s linear infinite alternate, moveY 9.4s linear infinite alternate',
        square1: 'moveX 12.34s linear infinite alternate, moveY 15.06s linear infinite alternate, spin 40s linear infinite',
        square2: 'moveX 9.74s linear infinite alternate, moveY 20.06s linear infinite alternate, spin 50s linear infinite',
        square3: 'moveX 19.74s linear infinite alternate, moveY 17.06s linear infinite alternate, spin 63s linear infinite',
        triangle: 'moveX 30.74s linear infinite alternate, moveY 25.06s linear infinite alternate, spin 75.3s linear infinite',
        triangle2: 'moveX 24.34s linear infinite alternate, moveY 16.06s linear infinite alternate, spin 55.3s linear infinite',
      },
    },
  },
  plugins: [],
};
