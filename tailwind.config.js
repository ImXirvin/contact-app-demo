/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
        colors: {
            'surface-primary': 'rgb(var(--surface-primary-value) / <alpha-value>)',
            // 'surface-primary-ghost': 'var(--surface-primary-ghost)',

            'surface-secondary': 'rgb(var(--surface-secondary-value) / <alpha-value>)',
            // 'surface-secondary-ghost': 'var(--surface-secondary-ghost)',

            'neutral': 'rgb(var(--neutral-value) / <alpha-value>)',

            'primary': 'rgb(var(--primary-value) / <alpha-value>)',
            // 'primary-ghost': 'var(--primary-ghost)',

            'secondary': 'rgb(var(--secondary-value) / <alpha-value>)',
            // 'secondary-ghost': 'var(--secondary-ghost)',

            'success': 'rgb(43, 147, 72 / <alpha-value>)',

            'warning': 'rgb(252, 163, 17)',
            
            'error': 'rgb(217, 4, 41 / <alpha-value>)',
        },

        borderRadius: {
            'default': 'var(--default-border-radius)',
        },
    },
  },
  plugins: [],
}

