import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react({ fastRefresh: false })],
  test: {
    environment: "jsdom",
    setupFiles: ["./vitest-setup.js"],
    testTimeout: 20000,
  },
});
