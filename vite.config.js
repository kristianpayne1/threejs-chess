import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/threejs-chess/",
  plugins: [react()],
  root: "./",
  build: {
    chunkSizeWarningLimit: 3000,
    emptyOutDir: true,
    sourcemap: true,
  },
  assetsInclude: ["**/*.glb"],
});
