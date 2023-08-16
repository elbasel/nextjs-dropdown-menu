import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.tsx"],
  plugins: [require("@tailwindcss/forms")],
};
export default config;
