// tailwind.config.js

module.exports = {
    content: ["./App.{js,jsx,ts,tsx}", "./Components/*.{js,jsx,ts,tsx}"],
    theme: {
      extend: {
        boxShadow: {
          'drop': '0px 4px 4px rgba(0, 0, 0, 0.25)',
        }
      },
    },
    plugins: [],
  }