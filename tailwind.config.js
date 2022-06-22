const colors = {
  neutral10: "#FAFBFC",
  neutral20: "#F4F5F7",
  neutral50: "#C1C7D0",
  neutral40: "#DFE1E6",
  neutral80: "#97A0AF",
  neutral200: "#6B778C",
  neutral300: "#5E6C84",
  neutral800: "#172B4D",
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
};

module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors,
    },
  },
  variants: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          ...require("daisyui/src/colors/themes")["[data-theme=light]"],
          "primary": colors.blue400,
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
