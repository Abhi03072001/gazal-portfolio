import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // GitHub Pages repo name: gazal-portfolio
  base: process.env.NODE_ENV === 'production' ? '/gazal-portfolio/' : '/',
  server: {
    port: 3000,
    open: true,
  },
});
