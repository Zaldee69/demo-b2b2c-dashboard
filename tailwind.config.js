// tailwind.config.js
module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        neutral800: "#172B4D",
        neutral300: "#5E6C84",
        neutral200: "#6B778C",
        neutral10: "#FAFBFC",
        neutral50: "#C1C7D0",
        neutral80: "#97A0AF",
        blue400: "#0052CC",
        blue80: "#DEEBFF",
        blue: "#0052CC",
        borderColor: "#C1C7D0",
        checkColor: "#FFFAE6",
        registerColor: "#C0FBFF",
        registeredColor: "#F2DEFF",
        linkColor: "#FFDBF1",
        linkedColor: "#E3FCEF",
        expiredColor: "#EBECF0",
        onProgressColor : "#FFECE6"
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
