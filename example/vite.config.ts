import { defineConfig } from "vite";
import EnvTypes from "vite-plugin-env-types";

export default defineConfig({
  clearScreen: false,
  plugins: [
    EnvTypes(),
  ],
});
