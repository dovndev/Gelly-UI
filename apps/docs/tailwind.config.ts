import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "../../packages/glass-core/src/**/*.{js,ts,jsx,tsx}"],
  theme: { extend: {} },
  plugins: []
};
export default config;