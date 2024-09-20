import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(() => {
  return {
    build: {
      sourcemap: false,  // Disabilita le sourcemap in produzione
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('node_modules')) {
              return id.toString().split('node_modules/')[1].split('/')[0].toString(); // Divide i pacchetti per libreria
            }
          },
        },
      },
    },
    plugins: [
      react()
    ],
  };
});
