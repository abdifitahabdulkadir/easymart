import type { Config } from "tailwindcss";
const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryWhiteColor: "#FFFFFF",
        primaryGrayColor: "#363738",
        primaryGrayColorTwo: "#7D8184",
        secondaryWhiteColorOne: "#F5F5F5",
        secondaryWhiteColorTwo: "#FEFAF1",
        secondaryWhiteColorThree: "#FAFAFA",
        secondaryLightGraryColor: "#A0BCE0",
        teritiaryOrangeColor: "#DB4444",
        teritiaryGreenColor: "#00FF66",
        teritiaryLightOrangeColor: "#E07575",
        starColor: "#FFAD33",
      },
    },
  },
  plugins: [],
};
export default config;
