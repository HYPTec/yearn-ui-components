module.exports = {
  purge: ["./src/components/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: "Roboto",
      },
      colors: {
        // uses root variables in tailwind.css
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        whiteAlt: "var(--color-white-alt)",
        yearn: {
          blue: "#0657F9",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
