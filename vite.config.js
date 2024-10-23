import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  server: {
    watch: {
      include: ["src/components/**/*.html"],
    },
  },
  build: {
    rollupOptions: {
      input: {
        index: resolve(__dirname, "./index.html"),
      },
    },
    outDir: "dist",
    emptyOutDir: true,
  },
});
