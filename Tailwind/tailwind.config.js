/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        tektur: "tektur",
      },
      fontSize: {
        bymeg: "40px",
      },
      backgroundImage: {
        kucing: 'url("../public/images/kucing.jpeg")',
        fotbar: 'url("../public/images/fotbar.jpg")',
        Gunung: 'url("../public/images/gunung wak.jpg")',
        Motor: 'url("../public/images/motorzx.jpg")',
      },
    },
  },
  plugins: [],
};
