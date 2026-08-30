import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    chunkSizeWarningLimit: 500,
    minify: "esbuild",
    cssMinify: true,
    rollupOptions: {
      output: {
        manualChunks(id) {
          // Animations — heavy, never in the initial chunk
          if (id.includes("framer-motion")) return "vendor-motion";
          // Charts
          if (id.includes("recharts") || id.includes("d3-")) return "vendor-charts";
          // Data layer
          if (id.includes("@supabase")) return "vendor-supabase";
          if (id.includes("@tanstack")) return "vendor-query";
          // UI primitives — all Radix packages together
          if (id.includes("@radix-ui")) return "vendor-radix";
          // React core
          if (
            id.includes("react-dom") ||
            id.includes("react-router") ||
            id.includes("/react/")
          ) return "vendor-react";
          // Everything else in node_modules
          if (id.includes("node_modules")) return "vendor-misc";
        },
      },
    },
  },
}));
