import { URL, fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const resolvedAlias = Object.fromEntries(
  [
    ["@assets", "./src/assets"],
    ["@commons", "./src/commons"],
    ["@components", "./src/components"],
    ["@core", "./src/core"],
    ["@pages", "./src/pages"],
    ["@redux", "./src/redux"],
    ["@scss", "./src/scss"],
    ["@services", "./src/services"],
  ].map((value) => [
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
