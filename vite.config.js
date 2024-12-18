import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import daisyui from "daisyui";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(daisyui)],
  css: {
    postcss: './postcss.config.js', // Ensure that this points to the correct PostCSS config file
  }
});
