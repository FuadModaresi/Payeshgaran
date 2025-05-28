// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      keyframes: {
        dropdown: {
          '0%':   { opacity: 0, transform: 'translateY(-24px) scale(0.98)' },
          '60%':  { opacity: 1, transform: 'translateY(4px) scale(1.02)' },
          '100%': { opacity: 1, transform: 'translateY(0) scale(1)' },
        },
      },
      animation: {
        dropdown: 'dropdown 0.45s cubic-bezier(.4,1.7,.6,1) both',
      },
    },
  },
};