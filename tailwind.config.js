/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        phone: "450px",
      },

      colors: {
        fbBlue: "#0866ff",
        darkish: "#333333",
        fade: "#606770",
        white: "#f2f4f7",
        pure: "#ffffff",
        fadingBlack: "rgba(0,0,0,0.4)",
        grayWhite: "#999999",
        green: "#42b72a",
      },
      height: {
        46: "46px",
      },
      width: {
        400: "400px",
      },

      fontSize: {
        40: "40px",
        46: "46px",
        14: "14px",
      },

      padding: {
        "2px": "2px",
      },

      boxShadow: {
        equal: " 0px 0px 6px 0px ",
      },

      borderWidth: {
        1: "1px",
      },
    },
  },
  plugins: [],
};
