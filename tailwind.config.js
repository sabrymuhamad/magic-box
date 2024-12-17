/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: "mag-",
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--ion-color-primary)',
        primaryDarker: 'var(--btn-text)',
        sectionBg: 'var(--section-bg-color)',
        lightBg: 'var(--light-primary-bg)'
      }
    },
  },
  plugins: [],
}

