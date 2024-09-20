import { defineConfig } from 'vite';
import vercel from 'vite-plugin-vercel';
 
export default defineConfig({
  build: {
    outDir: 'dist',
  },
  plugins: [vercel()],
});
