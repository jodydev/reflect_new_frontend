import { defineConfig } from 'vite';
import vercel from 'vite-plugin-vercel';
 
export default defineConfig({
  build: {
    outDir: 'dist',  // La directory di output del build
  },
  ssr: {
    noExternal: ['vite-plugin-vercel'],
  },
  plugins: [vercel()],
});
