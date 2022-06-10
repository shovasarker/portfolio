module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      container: {
        center: true,
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      animation: {
        'slide-in': 'slideIn 1s linear forwards',
        wiggle: 'wiggle 0.3s linear infinite',
      },
      keyframes: {
        slideIn: {
          '0%': { transform: 'translateX(-500px)' },
          '50%': { transform: 'translateX(-250px)' },
          '100%': { transform: 'translateX(0px)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-5deg) translateY(-8px)' },
          '50%': { transform: 'rotate(5deg) translateY(-8px)' },
        },
      },
    },
  },
  plugins: [],
}
