import { defineConfig } from "vite";
import viteReact from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [viteReact()],
  base: process.env.VITE_BASE_PATH || "/TalkToMe",
  test: {
    globals: true,
    environment: "jsdom",
  },

});
