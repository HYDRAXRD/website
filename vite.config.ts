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
    // Increase warning threshold slightly to reduce noise
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      output: {
        // Split vendor libs into separate cached chunks
        manualChunks: {
          // React core — rarely changes, cached indefinitely
          "vendor-react": ["react", "react-dom", "react-router-dom"],
          // Animations — heavy, isolated so pages without it don't load it
          "vendor-motion": ["framer-motion"],
          // Charts — only loaded where recharts is used
          "vendor-charts": ["recharts"],
          // Radix UI primitives
          "vendor-radix": [
            "@radix-ui/react-accordion",
            "@radix-ui/react-dialog",
            "@radix-ui/react-dropdown-menu",
            "@radix-ui/react-tooltip",
            "@radix-ui/react-tabs",
            "@radix-ui/react-select",
            "@radix-ui/react-popover",
            "@radix-ui/react-toast",
          ],
          // Supabase + React Query
          "vendor-data": ["@supabase/supabase-js", "@tanstack/react-query"],
        },
      },
    },
  },
}));
