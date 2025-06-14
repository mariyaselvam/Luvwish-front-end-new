import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    proxy: {
      "/api": {
        target: "https://luvwish-server.onrender.com",

        // target: "http://localhost:5000",
        changeOrigin: true,
        secure: true,
      },
    },
  },
});
