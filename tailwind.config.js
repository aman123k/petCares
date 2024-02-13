/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Ballet: "Ballet",
        Dancing: "Dancing Script",
        Nunito: "Nunito",
      },
      backgroundImage: {
        homeDod: "url('/src/images/homeDog.jpeg')",
        adopterRegister: "url('/src/images/adopter.webp')",
      },
    },
  },
  plugins: [],
};
