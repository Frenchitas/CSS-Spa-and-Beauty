import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
 base: '/CSS-Spa-and-Beauty/',
 resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
});