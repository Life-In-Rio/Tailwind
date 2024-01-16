/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        tektur: "tektur",
      },
      fontSize: {
        bymeg: "150px",
      },
      backgroundImage : {
        kucing: 'url("../public/kucing.jpeg")',
        fotbar: 'url("../public/fotbar.jpg")',
      },
    },
  },
  plugins: [],
};
