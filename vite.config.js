import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react({ fastRefresh: false })],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  test: {
    environment: "jsdom",
    setupFiles: ["./vitest-setup.js"],
    testTimeout: 20000,
  },
});
