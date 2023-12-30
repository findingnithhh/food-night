/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        bg_primary: "#16161a",
        bg_secondary: "#FF0000",
        hd: "#fffffe",
        ph: "#94a1b2",
        bt: "#7f5af0",
        btt: "#fffffe",
      },
      fontFamily: {
        body: ["Poppins"],
      },
    },
  },
  plugins: [],
};

