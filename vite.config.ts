import { URL, fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const resolvedAlias = Object.fromEntries(
  [["@scss", "./src/scss"]].map((value) => [
    value[0],
    fileURLToPath(new URL(value[1], import.meta.url)),
  ])
);

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: resolvedAlias,
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@scss/utils/_main.scss";`,
      },
    },
  },
  plugins: [react()],
});
